from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from enum import Enum

db = SQLAlchemy()


# Enums
class UserRoleEnum(Enum):
    donor = 'donor'
    recipient = 'recipient'
    admin = 'admin'
    healthcare = 'healthcare'


class KYCStatusEnum(Enum):
    pending = 'pending'
    approved = 'approved'
    rejected = 'rejected'


class DonationTypeEnum(Enum):
    blood = 'blood'
    organ = 'organ'
    hair = 'hair'


class DonationStatusEnum(Enum):
    available = 'available'
    claimed = 'claimed'
    expired = 'expired'


class RequestUrgencyEnum(Enum):
    low = 'low'
    medium = 'medium'
    high = 'high'


class RequestStatusEnum(Enum):
    pending = 'pending'
    matched = 'matched'
    fulfilled = 'fulfilled'


class MatchStatusEnum(Enum):
    pending = 'pending'
    accepted = 'accepted'
    rejected = 'rejected'
    completed = 'completed'


class ReportTypeEnum(Enum):
    abuse = 'abuse'
    fraud = 'fraud'
    duplicate = 'duplicate'


class ReportStatusEnum(Enum):
    open = 'open'
    resolved = 'resolved'


# 🧍 User Model
class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(120), nullable=False)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120))
    phone = db.Column(db.String(20))
    password_hash = db.Column(db.String(255), nullable=False)
    role = db.Column(db.Enum(UserRoleEnum), nullable=False)
    profile_photo = db.Column(db.String(255))
    bio = db.Column(db.Text)
    is_active = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    kycs = db.relationship('KYCSubmission', backref='user', lazy=True)
    donations = db.relationship('Donation', backref='user', lazy=True)
    requests = db.relationship('Request', backref='user', lazy=True)
    messages_sent = db.relationship('Message', foreign_keys='Message.sender_id', backref='sender', lazy=True)
    messages_received = db.relationship('Message', foreign_keys='Message.receiver_id', backref='receiver', lazy=True)
    notifications = db.relationship('Notification', backref='user', lazy=True)
    audit_logs = db.relationship('AuditLog', backref='admin', lazy=True)
    reports = db.relationship('Report', backref='submitter', lazy=True)


# 📜 KYCSubmission
class KYCSubmission(db.Model):
    __tablename__ = 'kyc_submissions'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    identity_doc = db.Column(db.String(255))
    residence_doc = db.Column(db.String(255))
    medical_doc = db.Column(db.String(255))
    selfie_doc = db.Column(db.String(255))
    extra_doc = db.Column(db.String(255))
    status = db.Column(db.Enum(KYCStatusEnum), default=KYCStatusEnum.pending)
    admin_comment = db.Column(db.Text)
    submitted_at = db.Column(db.DateTime, default=datetime.utcnow)


# 🎁 Donation
class Donation(db.Model):
    __tablename__ = 'donations'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    type = db.Column(db.Enum(DonationTypeEnum), nullable=False)
    details = db.Column(db.Text)
    location = db.Column(db.String(255))
    available_until = db.Column(db.DateTime)
    status = db.Column(db.Enum(DonationStatusEnum), default=DonationStatusEnum.available)
    image_path = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    matches = db.relationship('Match', backref='donation', lazy=True)


# 🙋 Request
class Request(db.Model):
    __tablename__ = 'requests'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    type = db.Column(db.Enum(DonationTypeEnum), nullable=False)
    urgency = db.Column(db.Enum(RequestUrgencyEnum), default=RequestUrgencyEnum.medium)
    location = db.Column(db.String(255))
    notes = db.Column(db.Text)
    status = db.Column(db.Enum(RequestStatusEnum), default=RequestStatusEnum.pending)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    matches = db.relationship('Match', backref='request', lazy=True)


# 🔄 Match
class Match(db.Model):
    __tablename__ = 'matches'

    id = db.Column(db.Integer, primary_key=True)
    donation_id = db.Column(db.Integer, db.ForeignKey('donations.id'))
    request_id = db.Column(db.Integer, db.ForeignKey('requests.id'))
    matched_by = db.Column(db.Integer, db.ForeignKey('users.id'))
    status = db.Column(db.Enum(MatchStatusEnum), default=MatchStatusEnum.pending)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


# 💬 Message
class Message(db.Model):
    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    sender_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    receiver_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    content = db.Column(db.Text)
    is_read = db.Column(db.Boolean, default=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)


# 🧠 ChatRoom (Optional)
class ChatRoom(db.Model):
    __tablename__ = 'chat_rooms'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    is_group = db.Column(db.Boolean, default=False)


# 🔔 Notification
class Notification(db.Model):
    __tablename__ = 'notifications'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    title = db.Column(db.String(255))
    message = db.Column(db.Text)
    is_read = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


# 🧾 AuditLog
class AuditLog(db.Model):
    __tablename__ = 'audit_logs'

    id = db.Column(db.Integer, primary_key=True)
    admin_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    action = db.Column(db.String(255))
    target = db.Column(db.String(255))
    notes = db.Column(db.Text)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)


# 📊 Report
class Report(db.Model):
    __tablename__ = 'reports'

    id = db.Column(db.Integer, primary_key=True)
    submitted_by = db.Column(db.Integer, db.ForeignKey('users.id'))
    type = db.Column(db.Enum(ReportTypeEnum), nullable=False)
    description = db.Column(db.Text)
    status = db.Column(db.Enum(ReportStatusEnum), default=ReportStatusEnum.open)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)