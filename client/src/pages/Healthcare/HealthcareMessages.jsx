import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../assets/css/healthcare_styles.css';

const HealthcareMessages = () => {
    const [messages] = useState([
        {
            id: 1,
            sender: 'Admin Team',
            subject: 'KYC Documents Approved',
            content: 'Your KYC documents have been reviewed and approved. You can now proceed with donations.',
            date: '2025-04-05',
            read: true,
            type: 'incoming',
        },
        {
            id: 2,
            sender: 'Recipient S. Perera',
            subject: 'Request Status Update',
            content: 'Hello, could you please update the status of my organ request? Thanks.',
            date: '2025-04-04',
            read: false,
            type: 'incoming',
        },
        {
            id: 3,
            sender: 'You',
            subject: 'Organ Donation Clarification',
            content: 'We need clarification on your last report before we can approve the request.',
            date: '2025-04-02',
            read: true,
            type: 'outgoing',
        },
    ]);

    const [selectedMessage, setSelectedMessage] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const openMessage = (msg) => {
        setSelectedMessage(msg);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedMessage(null);
        setShowModal(false);
    };

    return (
        <div className="healthcare-main">
            <h2 className="fw-semibold mb-4">💬 Messages</h2>

            <div className="card-glass p-4">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Status</th>
                        <th>Type</th>
                        <th>From/To</th>
                        <th>Subject</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {messages.map(msg => (
                        <tr key={msg.id} className={!msg.read ? 'fw-semibold' : ''}>
                            <td>
                  <span className={`badge bg-${msg.read ? 'secondary' : 'info'}`}>
                    {msg.read ? 'Read' : 'Unread'}
                  </span>
                            </td>
                            <td>{msg.type === 'incoming' ? '📥 Inbox' : '📤 Sent'}</td>
                            <td>{msg.sender}</td>
                            <td>{msg.subject}</td>
                            <td>{msg.date}</td>
                            <td>
                                <button
                                    className="btn btn-sm btn-outline-primary"
                                    onClick={() => openMessage(msg)}
                                >
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Message Modal */}
            <Modal show={showModal} onHide={closeModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedMessage?.subject}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>From:</strong> {selectedMessage?.sender}</p>
                    <p><strong>Date:</strong> {selectedMessage?.date}</p>
                    <hr />
                    <p>{selectedMessage?.content}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default HealthcareMessages;
