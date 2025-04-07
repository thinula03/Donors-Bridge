import React, { useState } from 'react';
import '../../assets/css/admin_styles.css';

const AdminProfile = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [admin, setAdmin] = useState({
        name: 'Admin User',
        email: 'admin@donorsbridge.com',
        role: 'Administrator',
        profilePic: 'https://ui-avatars.com/api/?name=Admin+User&background=0d6efd&color=fff',
        createdAt: '2024-11-15',
        lastLogin: '2025-04-06 08:00 AM',
    });

    const [editMode, setEditMode] = useState(false);
    const [tempName, setTempName] = useState(admin.name);
    const [tempEmail, setTempEmail] = useState(admin.email);

    const handleSave = () => {
        setAdmin({ ...admin, name: tempName, email: tempEmail });
        setEditMode(false);
    };

    return (
        <div className="admin-main">
            <h2 className="fw-semibold mb-4">👤 Admin Profile</h2>

            {/* Tab Menu */}
            <div className="d-flex gap-3 mb-4 flex-wrap">
                <button className={`btn ${activeTab === 'profile' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setActiveTab('profile')}>Profile Info</button>
                <button className={`btn ${activeTab === 'activity' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setActiveTab('activity')}>Activity</button>
                <button className={`btn ${activeTab === 'settings' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setActiveTab('settings')}>Settings</button>
                <button className={`btn ${activeTab === 'tools' ? 'btn-warning' : 'btn-outline-warning'}`} onClick={() => setActiveTab('tools')}>Super Admin Tools</button>
            </div>

            {/* === Profile Info === */}
            {activeTab === 'profile' && (
                <div className="admin-profile-wrapper">
                    <div className="admin-profile-pic">
                        <img src={admin.profilePic} alt="Profile" />
                        <button className="btn btn-sm btn-outline-secondary mt-2">Change Photo</button>
                    </div>

                    <div className="admin-profile-info">
                        {!editMode ? (
                            <>
                                <h5>{admin.name}</h5>
                                <p className="text-muted mb-2">{admin.email}</p>
                                <span className="badge bg-primary mb-3">{admin.role}</span>
                                <p><strong>Created:</strong> {admin.createdAt}</p>
                                <p><strong>Last Login:</strong> {admin.lastLogin}</p>
                                <button className="btn btn-outline-primary mt-3" onClick={() => setEditMode(true)}>Edit Profile</button>
                            </>
                        ) : (
                            <>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" value={tempName} onChange={(e) => setTempName(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email Address</label>
                                    <input type="email" className="form-control" value={tempEmail} onChange={(e) => setTempEmail(e.target.value)} />
                                </div>
                                <button className="btn btn-success me-2" onClick={handleSave}>Save</button>
                                <button className="btn btn-outline-secondary" onClick={() => setEditMode(false)}>Cancel</button>
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* === Activity Timeline === */}
            {activeTab === 'activity' && (
                <div className="card-glass p-4">
                    <h5 className="mb-4">📌 Recent Platform Activity</h5>
                    <ul className="list-unstyled timeline">
                        <li><span>🧬</span> Reviewed 3 duplicate reports – <em>3 hours ago</em></li>
                        <li><span>📝</span> Approved 5 new KYC documents – <em>yesterday</em></li>
                        <li><span>📊</span> Downloaded donation analytics – <em>2 days ago</em></li>
                        <li><span>🔒</span> Changed password – <em>1 week ago</em></li>
                    </ul>
                </div>
            )}

            {/* === Settings Panel === */}
            {activeTab === 'settings' && (
                <div className="card-glass p-4">
                    <h5 className="mb-3">🔧 Security & Preferences</h5>
                    <p><strong>2FA:</strong> <span className="text-danger">Disabled</span> <button className="btn btn-sm btn-outline-primary ms-2">Enable</button></p>
                    <p><strong>Password:</strong> Last changed 1 week ago <button className="btn btn-sm btn-outline-warning ms-2">Change</button></p>
                    <p><strong>Email Alerts:</strong> Enabled</p>
                </div>
            )}

            {/* === Super Admin Tools === */}
            {activeTab === 'tools' && (
                <div className="card-glass p-4">
                    <h5 className="mb-3">🛠 Super Admin Tools</h5>
                    <ul className="list-unstyled">
                        <li><button className="btn btn-outline-dark w-100 mb-2">🧑‍💼 Create New Admin</button></li>
                        <li><button className="btn btn-outline-danger w-100 mb-2">🚨 Force Logout All Admins</button></li>
                        <li><button className="btn btn-outline-info w-100">📁 Download Full System Logs</button></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default AdminProfile;
