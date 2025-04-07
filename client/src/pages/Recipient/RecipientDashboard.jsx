import React from 'react';
import '../../assets/css/recipient_styles.css';

const RecipientDashboard = () => {
    return (
        <>
            <div className="recipient-main">
                <h2 className="fw-semibold mb-3">👋 Welcome, Recipient</h2>
                <p className="text-muted mb-4">Track your donation requests and activity here.</p>

                <div className="dashboard-cards">
                    <div className="dashboard-card">
                        <h5 className="mb-1">New Matches</h5>
                        <p className="text-muted small">Recently matched donors</p>
                        <button className="btn btn-outline-primary btn-sm">View Matches</button>
                    </div>
                    <div className="dashboard-card">
                        <h5 className="mb-1">Request History</h5>
                        <p className="text-muted small">Track previous donation requests</p>
                        <button className="btn btn-outline-success btn-sm">View History</button>
                    </div>
                    <div className="dashboard-card">
                        <h5 className="mb-1">Messages</h5>
                        <p className="text-muted small">Communicate with matched donors</p>
                        <button className="btn btn-outline-secondary btn-sm">Check Messages</button>
                    </div>
                </div>

                <div className="insight-card mt-5">
                    <h5>🙏 You're closer to finding a match!</h5>
                    <p className="text-muted">We’re working hard to get you connected.</p>
                </div>
            </div>
        </>
    );
};

export default RecipientDashboard;
