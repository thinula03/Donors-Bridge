from flask import Blueprint, render_template, redirect, url_for, session
import os
from flask import request, redirect, flash, url_for, session
from werkzeug.utils import secure_filename
from app import db
from .models import User
from . import db

routes = Blueprint('routes', __name__)

UPLOAD_FOLDER = 'static/uploads'
ALLOWED_EXTENSIONS = {'pdf', 'jpg', 'jpeg', 'png'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


# ----------------------
# General Routes
# ----------------------
@routes.route('/')
def index():
    return render_template('index.html')

@routes.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        input_username = request.form['username']
        input_password = request.form['password']

        # Check if user exists by username or email
        user = User.query.filter(
            (User.username == input_username) | (User.email == input_username)
        ).first()

        if user:
            if check_password_hash(user.password, input_password):
                if not user.is_approved:
                    flash("Your account is still pending approval.", "warning")
                    return redirect(url_for('routes.login'))

                # Set session values
                session['user_id'] = user.id
                session['username'] = user.username
                session['role'] = user.role

                flash("Logged in successfully!", "success")

                # Redirect by role
                if user.role == 'donor':
                    return redirect(url_for('routes.donor_dashboard'))
                elif user.role == 'recipient':
                    return redirect(url_for('routes.recipient_dashboard'))
                elif user.role == 'healthcare':
                    return redirect(url_for('routes.staff_dashboard'))
                else:
                    return redirect(url_for('routes.index'))
            else:
                flash("Incorrect password.", "danger")
        else:
            flash("User not found.", "danger")

    return render_template('login.html')

@routes.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        # Step 1 Fields
        full_name = request.form['full_name']
        email = request.form['email']
        phone = request.form['phone']
        username = request.form['username']
        password = request.form['password']
        role = request.form['role']

        # Step 2 Preferences
        contact_method = request.form.get('contact_method')
        donation_time = request.form.get('donation_time')
        notifications = request.form.get('notifications')

        # Step 3 Files
        files = {}
        for key in ['identity_doc', 'medical_doc', 'residence_doc', 'selfie_doc', 'extra_doc']:
            file = request.files.get(key)
            if file and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                file_path = os.path.join(UPLOAD_FOLDER, filename)
                file.save(file_path)
                files[key] = file_path
            else:
                files[key] = None

        # Save to DB
        new_user = User(
            full_name=full_name,
            email=email,
            phone=phone,
            username=username,
            password=password,  # Hash later!
            role=role,
            contact_method=contact_method,
            donation_time=donation_time,
            notifications=(notifications == 'yes'),
            identity_doc=files['identity_doc'],
            medical_doc=files['medical_doc'],
            residence_doc=files['residence_doc'],
            selfie_doc=files['selfie_doc'],
            extra_doc=files['extra_doc'],
            is_approved=False  # Default inactive until admin approval
        )
        db.session.add(new_user)
        db.session.commit()

        flash('Registration submitted. Please wait for admin approval.', 'success')

        # Redirect to role-based dashboards after login later
        return redirect(url_for('routes.login'))

    return render_template('register.html')

@routes.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('routes.index'))

@routes.route('/how')
def how():
    return render_template('how.html')

@routes.route('/donor-ab')
def donor_ab():
    return render_template('donor-ab.html')

@routes.route('/recipient-ab')
def recipient_ab():
    return render_template('recipient-ab.html')

@routes.route('/about')
def about():
    return render_template('about.html')

# ----------------------
# Donor Routes
# ----------------------
@routes.route('/donor/dashboard')
def donor_dashboard():
    return render_template('donor/dashboard.html')

@routes.route('/donor/profile')
def donor_profile():
    return render_template('donor/profile.html')

@routes.route('/donor/donation-history')
def donor_history():
    return render_template('donor/donation-history.html')

@routes.route('/donor/matches')
def donor_matches():
    return render_template('donor/matches.html')

@routes.route('/donor/notifications')
def donor_notifications():
    return render_template('donor/notifications.html')

@routes.route('/donor/messages')
def donor_messages():
    return render_template('donor/messages.html')


# ----------------------
# Recipient Routes
# ----------------------
@routes.route('/recipient/dashboard')
def recipient_dashboard():
    return render_template('recipient/dashboard.html')

@routes.route('/recipient/profile')
def recipient_profile():
    return render_template('recipient/profile.html')

@routes.route('/recipient/request-donation')
def recipient_request():
    return render_template('recipient/request-donation.html')

@routes.route('/recipient/matches')
def recipient_matches():
    return render_template('recipient/matches.html')

@routes.route('/recipient/notifications')
def recipient_notifications():
    return render_template('recipient/notifications.html')

@routes.route('/recipient/messages')
def recipient_messages():
    return render_template('recipient/messages.html')


# ----------------------
# Admin Routes
# ----------------------
@routes.route('/admin/dashboard')
def admin_dashboard():
    return render_template('admin/dashboard.html')

@routes.route('/admin/users')
def admin_users():
    return render_template('admin/users.html')

@routes.route('/admin/kyc-verification')
def admin_kyc():
    return render_template('admin/kyc-verification.html')

@routes.route('/admin/duplicates')
def admin_duplicates():
    return render_template('admin/duplicates.html')

@routes.route('/admin/reports')
def admin_reports():
    return render_template('admin/reports.html')


# ----------------------
# Staff Routes
# ----------------------
@routes.route('/staff/dashboard')
def staff_dashboard():
    return render_template('staff/dashboard.html')

@routes.route('/staff/verify-requests')
def staff_verify_requests():
    return render_template('staff/verify-requests.html')

@routes.route('/staff/reports')
def staff_reports():
    return render_template('staff/reports.html')

@routes.route('/staff/messages')
def staff_messages():
    return render_template('staff/messages.html')
