import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/donor_styles.css';

const DonorNavbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="donor-navbar">
            <div className="donor-navbar-brand">Donor Dashboard</div>

            <button className="donor-menu-toggle d-lg-none" onClick={toggleMenu}>
                ☰
            </button>

            <div className={`donor-navbar-links ${menuOpen ? 'open' : ''}`}>
                <NavLink to="/donor/dashboard" className="donor-nav-link">🏠 Dashboard</NavLink>
                <NavLink to="/donor/matches" className="donor-nav-link">🔍 Matches</NavLink>
                <NavLink to="/donor/history" className="donor-nav-link">📜 History</NavLink>
                <NavLink to="/donor/messages" className="donor-nav-link">💬 Messages</NavLink>
                <NavLink to="/donor/notifications" className="donor-nav-link">🔔 Notifications</NavLink>
                <NavLink to="/donor/profile" className="donor-nav-link">👤 Profile</NavLink>
                <NavLink to="/logout" className="admin-nav-link">📄 Logout</NavLink>
            </div>
        </nav>
)
    ;
};

export default DonorNavbar;
