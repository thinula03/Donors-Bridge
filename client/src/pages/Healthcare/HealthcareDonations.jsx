import React, { useState } from 'react';
import '../../assets/css/healthcare_styles.css';

const HealthcareDonations = () => {
    const [donations, setDonations] = useState([
        {
            id: 1,
            type: 'Blood',
            group: 'O+',
            quantity: 5,
            status: 'Approved',
            date: '2025-04-05',
        },
        {
            id: 2,
            type: 'Organ',
            organ: 'Kidney',
            quantity: 1,
            status: 'Pending',
            date: '2025-04-03',
        }
    ]);

    return (
        <div className="healthcare-main">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-semibold">🩺 Your Donations</h2>
                <button className="btn btn-primary">+ Post Donation</button>
            </div>

            <div className="card-glass p-4">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Type</th>
                        <th>Details</th>
                        <th>Quantity</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {donations.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.type}</td>
                            <td>{item.type === 'Organ' ? item.organ : item.group}</td>
                            <td>{item.quantity}</td>
                            <td>{item.date}</td>
                            <td>
                  <span className={`badge bg-${item.status === 'Approved' ? 'success' : item.status === 'Pending' ? 'warning' : 'danger'}`}>
                    {item.status}
                  </span>
                            </td>
                            <td>
                                <button className="btn btn-sm btn-outline-secondary me-2">Edit</button>
                                <button className="btn btn-sm btn-outline-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HealthcareDonations;
