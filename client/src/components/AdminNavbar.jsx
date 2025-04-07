import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/admin_styles.css';

const AdminNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="admin-navbar">
            <div className="admin-navbar-brand">Admin Dashboard</div>

            <button className="admin-menu-toggle d-lg-none" onClick={toggleMenu}>
                ☰
            </button>

            <div className={`admin-navbar-links ${menuOpen ? 'open' : ''}`}>
                <NavLink to="/admin/dashboard" className="admin-nav-link">🏠 Dashboard</NavLink>
                <NavLink to="/admin/users" className="admin-nav-link">👥 Users</NavLink>
                <NavLink to="/admin/kyc" className="admin-nav-link">📝 KYC</NavLink>
                <NavLink to="/admin/duplicates" className="admin-nav-link">🧬 Duplicates</NavLink>
                <NavLink to="/admin/reports" className="admin-nav-link">📊 Reports</NavLink>
                <NavLink to="/admin/profile" className="admin-nav-link">👤 Profile</NavLink>
                <NavLink to="/logout" className="admin-nav-link">📄 Logout</NavLink>
            </div>
        </nav>
    );
};

export default AdminNavbar;
