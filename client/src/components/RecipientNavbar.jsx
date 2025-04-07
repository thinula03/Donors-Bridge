import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/recipient_styles.css';

const RecipientNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="recipient-navbar">
            <div className="recipient-navbar-brand">Recipient Dashboard</div>

            <button className="recipient-menu-toggle d-lg-none" onClick={toggleMenu}>
                ☰
            </button>

            <div className={`recipient-navbar-links ${menuOpen ? 'open' : ''}`}>
                <NavLink to="/recipient/dashboard" className="recipient-nav-link">🏠 Dashboard</NavLink>
                <NavLink to="/recipient/matches" className="recipient-nav-link">🔍 Matches</NavLink>
                <NavLink to="/recipient/history" className="recipient-nav-link">📜 History</NavLink>
                <NavLink to="/recipient/messages" className="recipient-nav-link">💬 Messages</NavLink>
                <NavLink to="/recipient/notifications" className="recipient-nav-link">🔔 Notifications</NavLink>
                <NavLink to="/recipient/profile" className="recipient-nav-link">👤 Profile</NavLink>
                <NavLink to="/logout" className="admin-nav-link">📄 Logout</NavLink>
            </div>
        </nav>
    );
};

export default RecipientNavbar;
