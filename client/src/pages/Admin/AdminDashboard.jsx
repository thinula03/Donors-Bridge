import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/admin_styles.css';

const AdminDashboard = () => {
    return (
        <div>
            <div className="admin-main">
                <h2 className="fw-semibold mb-3">👋 Welcome, Admin</h2>
                <p className="text-muted mb-5">Here’s a quick overview of your platform activity.</p>

                <div className="dashboard-cards">
                    <div className="dashboard-card">
                        <div className="d-flex align-items-center">
                            <div className="me-3 fs-3 text-primary">📝</div>
                            <div>
                                <h5 className="card-title">Pending Verifications</h5>
                                <p className="text-muted small mb-2">Users waiting for KYC approval</p>
                                <Link to="/admin/kyc" className="btn btn-sm btn-outline-primary">Review KYC</Link>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-card">
                        <div className="d-flex align-items-center">
                            <div className="me-3 fs-3 text-warning">🧬</div>
                            <div>
                                <h5 className="card-title">Duplicate Alerts</h5>
                                <p className="text-muted small mb-2">Check for flagged uploads</p>
                                <Link to="/admin/duplicates" className="btn btn-sm btn-outline-warning">View Duplicates</Link>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-card">
                        <div className="d-flex align-items-center">
                            <div className="me-3 fs-3 text-secondary">👥</div>
                            <div>
                                <h5 className="card-title">Manage Users</h5>
                                <p className="text-muted small mb-2">View, approve, or block users</p>
                                <Link to="/admin/users" className="btn btn-sm btn-outline-secondary">Manage Users</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 insight-card">
                    <h5 className="mb-3">📊 Coming Soon: Insights & Analytics</h5>
                    <p className="text-muted">We’ll soon show you platform trends, top donors, and verification timelines.</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
