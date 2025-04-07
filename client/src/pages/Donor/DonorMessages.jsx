import React from 'react';
import '../../assets/css/donor_styles.css';

const DonorMessages = () => {
    // Dummy message data
    const messages = [
        {
            sender: "Shanuki D. (Recipient)",
            preview: "Thank you so much for accepting the match! Can we connect on Sunday?",
            time: "2025-04-05 14:32",
        },
        {
            sender: "Admin - DonorsBridge",
            preview: "Your KYC verification has been completed. Welcome aboard!",
            time: "2025-04-02 09:18",
        },
        {
            sender: "Roshan P. (Recipient)",
            preview: "Hi, I just wanted to confirm your availability for next week.",
            time: "2025-03-29 19:07",
        },
    ];

    return (
        <>
            <div className="donor-main">
                <h2 className="fw-semibold mb-4">💬 Messages</h2>
                <p className="text-muted mb-4">View messages and communication from recipients or platform admins.</p>

                {messages.length === 0 ? (
                    <p className="text-muted">No messages yet.</p>
                ) : (
                    <div className="list-group">
                        {messages.map((msg, index) => (
                            <div key={index} className="list-group-item list-group-item-action flex-column align-items-start shadow-sm mb-3 rounded">
                                <div className="d-flex w-100 justify-content-between">
                                    <h6 className="mb-1">{msg.sender}</h6>
                                    <small className="text-muted">{msg.time}</small>
                                </div>
                                <p className="mb-1">{msg.preview}</p>
                                <button className="btn btn-sm btn-outline-primary mt-2">Open Chat</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default DonorMessages;
