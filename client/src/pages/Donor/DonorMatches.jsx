import React from 'react';
import '../../assets/css/donor_styles.css';

const DonorMatches = () => {
    // Dummy data — replace with API later
    const matches = [
        {
            name: "Shanuki D.",
            type: "Kidney",
            date: "2025-04-01",
            status: "Pending",
        },
        {
            name: "Roshan P.",
            type: "Blood (O+)",
            date: "2025-03-26",
            status: "Accepted",
        },
        {
            name: "Nimali G.",
            type: "Hair Donation",
            date: "2025-03-10",
            status: "Completed",
        },
    ];

    const getStatusBadge = (status) => {
        switch (status) {
            case "Pending": return "badge bg-warning text-dark";
            case "Accepted": return "badge bg-primary";
            case "Completed": return "badge bg-success";
            default: return "badge bg-secondary";
        }
    };

    return (
        <>
            <div className="donor-main">
                <h2 className="fw-semibold mb-4">🔍 Matches</h2>
                <p className="text-muted mb-4">These are your latest recipient matches based on your preferences.</p>

                {matches.length === 0 ? (
                    <p className="text-muted">You haven't been matched with any recipients yet.</p>
                ) : (
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover bg-white rounded shadow-sm">
                            <thead className="table-light">
                            <tr>
                                <th>Recipient</th>
                                <th>Type</th>
                                <th>Matched On</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {matches.map((match, index) => (
                                <tr key={index}>
                                    <td>{match.name}</td>
                                    <td>{match.type}</td>
                                    <td>{match.date}</td>
                                    <td><span className={getStatusBadge(match.status)}>{match.status}</span></td>
                                    <td><button className="btn btn-sm btn-outline-primary">Message</button></td>
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

export default DonorMatches;
