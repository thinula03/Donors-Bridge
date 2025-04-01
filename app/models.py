from . import db
from datetime import datetime


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)

    # Basic Info
    full_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)  # store hashed password
    role = db.Column(db.String(20), nullable=False)  # donor, recipient, healthcare

    # Preferences
    contact_method = db.Column(db.String(50))
    donation_time = db.Column(db.String(50))
    notifications = db.Column(db.Boolean, default=True)

    # Uploaded Documents
    identity_doc = db.Column(db.String(255))
    medical_doc = db.Column(db.String(255))
    residence_doc = db.Column(db.String(255))
    selfie_doc = db.Column(db.String(255))
    extra_doc = db.Column(db.String(255))

    # Approval status and timestamps
    is_approved = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(
        db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow
    )

    def __repr__(self):
        return f'<User {self.username} ({self.role})>'
