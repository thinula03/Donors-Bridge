import React from 'react';
import '../../assets/css/donor_styles.css';

const DonorHistory = () => {
    const history = [
        {
            type: "Blood (B+)",
            recipient: "Chamodi K.",
            date: "2025-03-18",
            status: "Successful",
        },
        {
            type: "Hair Donation",
            recipient: "Sasha R.",
            date: "2025-02-12",
            status: "Successful",
        },
        {
            type: "Organ (Kidney)",
            recipient: "Thilina G.",
            date: "2025-01-09",
            status: "Cancelled",
        },
    ];

    const getStatusBadge = (status) => {
        switch (status) {
            case "Successful": return "badge bg-success";
            case "Cancelled": return "badge bg-danger";
            case "Expired": return "badge bg-secondary";
            default: return "badge bg-light text-dark";
        }
    };

    return (
        <>
            <div className="donor-main">
                <h2 className="fw-semibold mb-4">📜 Donation History</h2>
                <p className="text-muted mb-4">Here’s a record of all your past contributions.</p>

                {history.length === 0 ? (
                    <p className="text-muted">No donation history yet. Start saving lives today!</p>
                ) : (
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover bg-white rounded shadow-sm">
                            <thead className="table-light">
                            <tr>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Recipient</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {history.map((entry, index) => (
                                <tr key={index}>
                                    <td>{entry.date}</td>
                                    <td>{entry.type}</td>
                                    <td>{entry.recipient}</td>
                                    <td><span className={getStatusBadge(entry.status)}>{entry.status}</span></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    );
};

export default DonorHistory;
