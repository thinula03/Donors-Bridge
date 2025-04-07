import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/css/style.css';

const PublicLayout = () => {
    const location = useLocation();
    const hideLayoutOn = ['/login', '/register'];
    const shouldHide = hideLayoutOn.includes(location.pathname);

    return (
        <>
            {!shouldHide && <Navbar />}
            <main className="container-fluid px-0">
                <Outlet />
            </main>
            {!shouldHide && <Footer />}
        </>
    );
};

export default PublicLayout;
