// DonorDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/donor_styles.css';

const DonorDashboard = () => {
    return (
        <>
            <div className="donor-main">
                <h2 className="fw-semibold mb-3">👋 Welcome, Donor</h2>
                <p className="text-muted mb-4">Track your activities and recent matches here.</p>

                <div className="dashboard-cards">
                    <div className="dashboard-card">
                        <h5 className="mb-1">Your Matches</h5>
                        <p className="text-muted small">See who you’ve been matched with recently</p>
                        <Link to="/donor/matches" className="btn btn-sm btn-outline-primary">View Matches</Link>
                    </div>
                    <div className="dashboard-card">
                        <h5 className="mb-1">Donation History</h5>
                        <p className="text-muted small">All your past contributions at a glance</p>
                        <Link to="/donor/history" className="btn btn-sm btn-outline-primary">View History</Link>
                    </div>
                    <div className="dashboard-card">
                        <h5 className="mb-1">Messages</h5>
                        <p className="text-muted small">New communication from recipients</p>
                        <Link to="/donor/messages" className="btn btn-sm btn-outline-primary">Check Messages</Link>
                    </div>
                </div>

                <div className="insight-card mt-5">
                    <h5>🎉 You’re making a difference!</h5>
                    <p className="text-muted">Thank you for being part of DonorsBridge.</p>
                </div>
            </div>
        </>
    );
};

export default DonorDashboard; // Ensure default export
