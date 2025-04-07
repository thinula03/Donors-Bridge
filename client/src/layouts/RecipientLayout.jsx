import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import RecipientNavbar from '../components/RecipientNavbar';
import '../assets/css/recipient_styles.css';

const RecipientLayout = () => {
    const location = useLocation();

    // Hide navbar for login/register if needed
    const hideOn = ['/login', '/register'];
    const hideNavbar = hideOn.includes(location.pathname);

    return (
        <>
            {!hideNavbar && <RecipientNavbar />}
            <div className="recipient-main">
                <Outlet />
            </div>
        </>
    );
};

export default RecipientLayout;
