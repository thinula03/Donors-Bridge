import React, { useState } from 'react';
import '../../assets/css/healthcare_styles.css';

const HealthcareHistory = () => {
    const [history, setHistory] = useState([
        {
            id: 1,
            type: 'Donation',
            category: 'Blood',
            group: 'B+',
            quantity: 4,
            date: '2025-03-30',
            status: 'Approved',
            notes: 'Used for emergency transfusion',
        },
        {
            id: 2,
            type: 'Request',
            category: 'Organ',
            organ: 'Liver',
            quantity: 1,
            date: '2025-03-22',
            status: 'Rejected',
            notes: 'Incomplete documentation',
        },
        {
            id: 3,
            type: 'Donation',
            category: 'Hair',
            quantity: 2,
            date: '2025-03-15',
            status: 'Pending',
            notes: 'For cancer patients',
        },
    ]);

    return (
        <div className="healthcare-main">
            <h2 className="fw-semibold mb-4">📜 Donation & Request History</h2>

            <div className="card-glass p-4">
                <table className="table table-bordered table-hover">
                    <thead className="table-light">
                    <tr>
                        <th>#</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Details</th>
                        <th>Quantity</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Notes</th>
                    </tr>
                    </thead>
                    <tbody>
                    {history.map((entry, index) => (
                        <tr key={entry.id}>
                            <td>{index + 1}</td>
                            <td>{entry.type}</td>
                            <td>{entry.category}</td>
                            <td>{entry.group || entry.organ || '—'}</td>
                            <td>{entry.quantity}</td>
                            <td>{entry.date}</td>
                            <td>
                  <span className={`badge bg-${entry.status === 'Approved' ? 'success' : entry.status === 'Pending' ? 'warning' : 'danger'}`}>
                    {entry.status}
                  </span>
                            </td>
                            <td>{entry.notes}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HealthcareHistory;
