import React from 'react';
import '../../assets/css/healthcare_styles.css';

const HealthcareDashboard = () => {
    return (
        <>
            <div className="healthcare-main">
                <h2 className="fw-semibold mb-3">🏥 Welcome, Healthcare Staff</h2>
                <p className="text-muted mb-4">Manage donations and requests from your organization dashboard.</p>

                <div className="dashboard-cards">
                    <div className="dashboard-card">
                        <h5 className="mb-1">Submit Donation</h5>
                        <p className="text-muted small">Offer organ, blood or hair donations</p>
                        <button className="btn btn-outline-primary btn-sm">Create Donation</button>
                    </div>
                    <div className="dashboard-card">
                        <h5 className="mb-1">Make a Request</h5>
                        <p className="text-muted small">Request support for your patients</p>
                        <button className="btn btn-outline-success btn-sm">Request Now</button>
                    </div>
                    <div className="dashboard-card">
                        <h5 className="mb-1">Messages</h5>
                        <p className="text-muted small">Talk to matched donors/recipients</p>
                        <button className="btn btn-outline-secondary btn-sm">Open Inbox</button>
                    </div>
                </div>

                <div className="insight-card mt-5">
                    <h5>📈 Helping multiple lives made easier!</h5>
                    <p className="text-muted">Thank you for supporting life-saving causes through DonorsBridge.</p>
                </div>
            </div>
        </>
    );
};

export default HealthcareDashboard;
