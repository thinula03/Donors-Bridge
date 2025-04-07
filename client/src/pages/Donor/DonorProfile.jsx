import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../assets/css/donor_styles.css';

const DonorProfile = () => {
    const [profile, setProfile] = useState({
        fullName: 'Thinula Damsith',
        email: 'thinula@example.com',
        phone: '+94 71 234 5678',
        role: 'Donor',
        bloodType: 'B+',
        kycStatus: 'Verified',
        profileImage: 'https://i.pravatar.cc/150?img=12',
        status: 'Active',
        publicProfile: true,
        contributions: 8,
        matches: 12,
        rating: 4.5,
    });

    const [editing, setEditing] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleRoleSwitch = () => {
        setShowModal(false);
        setProfile({ ...profile, role: profile.role === 'Donor' ? 'Recipient' : 'Donor' });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfile({ ...profile, profileImage: imageUrl });
        }
    };

    return (
        <div className="donor-main container">
            {/* Profile Overview */}
            <div className="row mb-4">
                <div className="col-md-4 text-center">
                    <div className="position-relative">
                        <img
                            src={profile.profileImage}
                            alt="Profile"
                            className="rounded-circle border border-primary"
                            style={{ width: 140, height: 140, objectFit: 'cover' }}
                        />
                        <label htmlFor="uploadImage" className="edit-overlay">✎</label>
                        <input
                            id="uploadImage"
                            type="file"
                            style={{ display: 'none' }}
                            onChange={handleImageChange}
                        />
                    </div>
                    <h5 className="mt-3 fw-bold">{profile.fullName}</h5>
                    <span className={`badge ${profile.status === 'Active' ? 'bg-success' : 'bg-secondary'}`}>{profile.status}</span>
                    <div className="mt-2">
                        <small className="text-muted">Role: {profile.role}</small><br />
                        <small className="text-muted">KYC: {profile.kycStatus}</small><br />
                        <label className="form-check-label mt-2">
                            <input type="checkbox" className="form-check-input me-2" checked={profile.publicProfile} onChange={() => setProfile({ ...profile, publicProfile: !profile.publicProfile })} />
                            Public Profile
                        </label>
                    </div>
                </div>

                {/* Stats */}
                <div className="col-md-8">
                    <div className="row g-3">
                        <div className="col-md-4">
                            <div className="stat-card">
                                <h3>{profile.contributions}</h3>
                                <p>Contributions</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="stat-card">
                                <h3>{profile.matches}</h3>
                                <p>Matches</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="stat-card">
                                <h3>{profile.rating} ⭐</h3>
                                <p>User Rating</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <button className="btn btn-outline-primary me-2" onClick={() => setEditing(!editing)}>
                            {editing ? 'Cancel' : 'Edit Profile'}
                        </button>
                        <button className="btn btn-outline-secondary" onClick={() => setShowModal(true)}>Switch Role</button>
                    </div>
                </div>
            </div>

            {/* Editable Details */}
            <div className="bg-white p-4 rounded shadow-sm">
                <h5>Profile Details</h5>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <label>Email</label>
                        {editing ? <input className="form-control" defaultValue={profile.email} /> : <p>{profile.email}</p>}
                    </div>
                    <div className="col-md-6">
                        <label>Phone</label>
                        {editing ? <input className="form-control" defaultValue={profile.phone} /> : <p>{profile.phone}</p>}
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <label>Blood Type</label>
                        {editing ? <input className="form-control" defaultValue={profile.bloodType} /> : <p>{profile.bloodType}</p>}
                    </div>
                    <div className="col-md-6">
                        <label>Preferred Contact</label>
                        {editing ? (
                            <select className="form-select" defaultValue="Email">
                                <option>Email</option>
                                <option>Phone</option>
                                <option>SMS</option>
                            </select>
                        ) : (
                            <p>Email</p>
                        )}
                    </div>
                </div>

                {editing && <div className="text-end mt-3"><button className="btn btn-success">Save Changes</button></div>}
            </div>

            {/* Modal for Role Switch */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Switch Role</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>You are about to switch your role to <strong>{profile.role === 'Donor' ? 'Recipient' : 'Donor'}</strong>. Are you sure?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button variant="primary" onClick={handleRoleSwitch}>Yes, Switch</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default DonorProfile;
