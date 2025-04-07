import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';

const AdminLayout = () => {
    return (
        <>
            <AdminNavbar />
            <main className="admin-main">
                <Outlet />
            </main>
        </>
    );
};

export default AdminLayout;
