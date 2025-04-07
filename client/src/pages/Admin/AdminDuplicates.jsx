import React, { useState } from 'react';
import '../../assets/css/admin_styles.css';

const AdminDuplicates = () => {
    const [duplicates, setDuplicates] = useState([
        {
            id: 1,
            type: 'Organ',
            originalUser: 'nimal123',
            duplicateUser: 'suranga88',
            status: 'Pending',
            date: '2025-04-03',
        },
        {
            id: 2,
            type: 'Blood',
            originalUser: 'jani456',
            duplicateUser: 'jani456_copy',
            status: 'Flagged',
            date: '2025-04-04',
        },
        {
            id: 3,
            type: 'Hair',
            originalUser: 'amali07',
            duplicateUser: 'amali_h',
            status: 'Resolved',
            date: '2025-04-01',
        },
    ]);

    return (
        <div className="admin-main">
            <h2 className="fw-semibold mb-4">🧬 Duplicate Upload Alerts</h2>
            <p className="text-muted mb-4">View, track, and manage duplicate or suspicious uploads flagged by the system.</p>

            <div className="table-responsive">
                <table className="table table-hover align-middle">
                    <thead className="table-light">
                    <tr>
                        <th>ID</th>
                        <th>Type</th>
                        <th>Original User</th>
                        <th>Duplicate User</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {duplicates.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.type}</td>
                            <td>{item.originalUser}</td>
                            <td>{item.duplicateUser}</td>
                            <td>
                  <span className={`badge bg-${
                      item.status === 'Pending'
                          ? 'warning'
                          : item.status === 'Flagged'
                              ? 'danger'
                              : 'success'
                  }`}>{item.status}</span>
                            </td>
                            <td>{item.date}</td>
                            <td>
                                <button className="btn btn-sm btn-outline-primary me-2">View</button>
                                <button className="btn btn-sm btn-outline-success">Mark Resolved</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDuplicates;
