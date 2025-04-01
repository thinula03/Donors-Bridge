from . import db

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(100))
    email = db.Column(db.String(120), unique=True)
    phone = db.Column(db.String(20))
    username = db.Column(db.String(50), unique=True)
    password = db.Column(db.String(255))
    role = db.Column(db.String(20))  # donor, recipient, healthcare

    contact_method = db.Column(db.String(50))
    donation_time = db.Column(db.String(50))
    notifications = db.Column(db.Boolean, default=True)

    identity_doc = db.Column(db.String(255))
    medical_doc = db.Column(db.String(255))
    residence_doc = db.Column(db.String(255))
    selfie_doc = db.Column(db.String(255))
    extra_doc = db.Column(db.String(255))

    is_approved = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return f'<User {self.username}>'
