import React from 'react';
import '../../assets/css/admin_styles.css';

const AdminReports = () => {
    const reports = [
        {
            id: 1,
            title: 'Monthly Registration Summary',
            description: 'A summary of all new user registrations categorized by role.',
            download: true,
            date: '2025-04-01',
        },
        {
            id: 2,
            title: 'Donation Match Statistics',
            description: 'Insights into successful matches by type and urgency.',
            download: false,
            date: '2025-04-03',
        },
        {
            id: 3,
            title: 'Flagged & Duplicate Uploads',
            description: 'Detailed report on system-flagged and duplicate file activity.',
            download: true,
            date: '2025-04-05',
        }
    ];

    return (
        <div className="admin-main">
            <h2 className="fw-semibold mb-4">📊 Platform Reports</h2>
            <p className="text-muted mb-4">Download and review system-generated reports for admin insights and analysis.</p>

            <div className="row g-4">
                {reports.map((report) => (
                    <div className="col-md-4" key={report.id}>
                        <div className="card-glass p-4 h-100 d-flex flex-column justify-content-between">
                            <div>
                                <h5 className="mb-2">{report.title}</h5>
                                <p className="text-muted small">{report.description}</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <small className="text-muted">Generated: {report.date}</small>
                                {report.download ? (
                                    <button className="btn btn-sm btn-outline-primary">Download</button>
                                ) : (
                                    <button className="btn btn-sm btn-outline-secondary disabled">Coming Soon</button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminReports;
