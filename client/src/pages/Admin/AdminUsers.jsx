import React, { useState } from 'react';
import '../../assets/css/admin_styles.css';

const AdminUsers = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'Nimal Silva',
            email: 'nimal@example.com',
            role: 'Donor',
            status: 'Active',
        },
        {
            id: 2,
            name: 'Amali Herath',
            email: 'amali@example.com',
            role: 'Recipient',
            status: 'Pending',
        },
        {
            id: 3,
            name: 'Dr. Mahesh Perera',
            email: 'mahesh.hosp@example.com',
            role: 'Healthcare',
            status: 'Blocked',
        },
    ]);

    const changeStatus = (id, newStatus) => {
        const updated = users.map((user) =>
            user.id === id ? { ...user, status: newStatus } : user
        );
        setUsers(updated);
    };

    return (
        <div className="admin-main">
            <h2 className="fw-semibold mb-4">👥 Manage Users</h2>
            <p className="text-muted mb-4">View all registered users and manage their status or access.</p>

            <div className="table-responsive">
                <table className="table table-hover align-middle">
                    <thead className="table-light">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((u) => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.role}</td>
                            <td>
                  <span className={`badge bg-${u.status === 'Active' ? 'success' : u.status === 'Blocked' ? 'danger' : 'warning'}`}>
                    {u.status}
                  </span>
                            </td>
                            <td>
                                {u.status === 'Pending' && (
                                    <>
                                        <button className="btn btn-sm btn-outline-success me-2" onClick={() => changeStatus(u.id, 'Active')}>
                                            Approve
                                        </button>
                                        <button className="btn btn-sm btn-outline-danger" onClick={() => changeStatus(u.id, 'Blocked')}>
                                            Block
                                        </button>
                                    </>
                                )}
                                {u.status === 'Active' && (
                                    <button className="btn btn-sm btn-outline-danger" onClick={() => changeStatus(u.id, 'Blocked')}>
                                        Block
                                    </button>
                                )}
                                {u.status === 'Blocked' && (
                                    <button className="btn btn-sm btn-outline-success" onClick={() => changeStatus(u.id, 'Active')}>
                                        Unblock
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminUsers;
