import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/healthcare_styles.css';

const HealthcareNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="healthcare-navbar">
            <div className="healthcare-navbar-brand">Healthcare Dashboard</div>
            <button className="healthcare-menu-toggle d-lg-none" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

            <div className={`healthcare-navbar-links ${menuOpen ? 'open' : ''}`}>
                <NavLink to="/healthcare/dashboard" className="healthcare-nav-link">🏥 Dashboard</NavLink>
                <NavLink to="/healthcare/donations" className="healthcare-nav-link">💉 Make Donations</NavLink>
                <NavLink to="/healthcare/requests" className="healthcare-nav-link">📋 Make Requests</NavLink>
                <NavLink to="/healthcare/history" className="healthcare-nav-link">📜 History</NavLink>
                <NavLink to="/healthcare/messages" className="healthcare-nav-link">💬 Messages</NavLink>
                <NavLink to="/healthcare/profile" className="healthcare-nav-link">👤 Profile</NavLink>
                <NavLink to="/logout" className="admin-nav-link">📄 Logout</NavLink>
            </div>
        </nav>
    );
};

export default HealthcareNavbar;
