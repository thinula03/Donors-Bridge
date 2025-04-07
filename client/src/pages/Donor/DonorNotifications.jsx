import React from 'react';
import '../../assets/css/donor_styles.css';

const DonorNotifications = () => {
    const notifications = [
        {
            title: "🎉 Match Found",
            message: "You’ve been matched with recipient Shanuki D. for kidney donation.",
            time: "2025-04-05 16:40",
            type: "success",
        },
        {
            title: "📩 New Message",
            message: "You received a message from Roshan P.",
            time: "2025-04-05 12:20",
            type: "info",
        },
        {
            title: "⚠️ KYC Reminder",
            message: "Your ID document is missing. Please upload to complete verification.",
            time: "2025-04-03 09:10",
            type: "warning",
        },
        {
            title: "❌ Match Expired",
            message: "Your match with Saman K. has expired due to inactivity.",
            time: "2025-04-01 18:05",
            type: "danger",
        },
    ];

    const getAlertClass = (type) => {
        switch (type) {
            case "success": return "alert alert-success";
            case "info": return "alert alert-info";
            case "warning": return "alert alert-warning";
            case "danger": return "alert alert-danger";
            default: return "alert alert-secondary";
        }
    };

    return (
        <>
            <div className="donor-main">
                <h2 className="fw-semibold mb-4">🔔 Notifications</h2>
                <p className="text-muted mb-4">Stay updated on your donation activity and platform updates.</p>

                {notifications.length === 0 ? (
                    <p className="text-muted">No notifications yet.</p>
                ) : (
                    notifications.map((note, index) => (
                        <div key={index} className={`${getAlertClass(note.type)} shadow-sm rounded mb-3`}>
                            <h6 className="mb-1">{note.title}</h6>
                            <p className="mb-0">{note.message}</p>
                            <small className="text-muted">{note.time}</small>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};

export default DonorNotifications;
