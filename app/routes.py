from flask import Blueprint, render_template, redirect, url_for, session

routes = Blueprint('routes', __name__)

# ----------------------
# General Routes
# ----------------------
@routes.route('/')
def index():
    return render_template('index.html')

@routes.route('/login')
def login():
    return render_template('login.html')

@routes.route('/register')
def register():
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
