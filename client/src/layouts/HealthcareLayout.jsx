import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import HealthcareNavbar from '../components/HealthcareNavbar';
import '../assets/css/healthcare_styles.css';

const HealthcareLayout = () => {
    const location = useLocation();
    const hideOn = ['/login', '/register'];
    const hideNavbar = hideOn.includes(location.pathname);

    return (
        <>
            {!hideNavbar && <HealthcareNavbar />}
            <div className="healthcare-main">
                <Outlet />
            </div>
        </>
    );
};

export default HealthcareLayout;
