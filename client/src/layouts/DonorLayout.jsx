import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import DonorNavbar from '../components/DonorNavbar';
import '../assets/css/donor_styles.css';

const DonorLayout = () => {
    const location = useLocation();

    // Pages like login/register shouldn't show the donor navbar
    const hideNavOn = ['/login', '/register'];
    const shouldHideNavbar = hideNavOn.includes(location.pathname);

    return (
        <>
            {!shouldHideNavbar && <DonorNavbar />}
            <div className="donor-main">
                <Outlet />
            </div>
        </>
    );
};

export default DonorLayout;
