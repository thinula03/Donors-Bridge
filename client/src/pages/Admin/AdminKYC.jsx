import React, { useState } from 'react';
import '../../assets/css/admin_styles.css';

const AdminKYC = () => {
    const [kycRequests, setKycRequests] = useState([
        {
            id: 1,
            name: 'Nimal Silva',
            username: 'nimal123',
            email: 'nimal@example.com',
            role: 'Donor',
            submitted: '2025-04-03',
            status: 'Pending',
        },
        {
            id: 2,
            name: 'Amali Herath',
            username: 'amali_h',
            email: 'amali@example.com',
            role: 'Recipient',
            submitted: '2025-04-04',
            status: 'Pending',
        },
    ]);

    const handleApproval = (id, approved) => {
        const updated = kycRequests.map((req) =>
            req.id === id ? { ...req, status: approved ? 'Approved' : 'Rejected' } : req
        );
        setKycRequests(updated);
    };

    return (
        <div className="admin-main">
            <h2 className="fw-semibold mb-4">📝 KYC Verification</h2>
            <p className="text-muted mb-4">Review and verify user-submitted identity documents.</p>

            <div className="table-responsive">
                <table className="table table-hover align-middle">
                    <thead className="table-light">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Submitted On</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {kycRequests.map((req) => (
                        <tr key={req.id}>
                            <td>{req.id}</td>
                            <td>{req.name}</td>
                            <td>{req.username}</td>
                            <td>{req.email}</td>
                            <td>{req.role}</td>
                            <td>{req.submitted}</td>
                            <td>
                  <span className={`badge bg-${
                      req.status === 'Pending'
                          ? 'warning'
                          : req.status === 'Approved'
                              ? 'success'
                              : 'danger'
                  }`}>{req.status}</span>
                            </td>
                            <td>
                                {req.status === 'Pending' && (
                                    <>
                                        <button className="btn btn-sm btn-outline-success me-2" onClick={() => handleApproval(req.id, true)}>
                                            Approve
                                        </button>
                                        <button className="btn btn-sm btn-outline-danger" onClick={() => handleApproval(req.id, false)}>
                                            Reject
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminKYC;
