import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import PublicLayout from '../layouts/PublicLayout';
import AdminLayout from '../layouts/AdminLayout';
import RecipientLayout from '../layouts/RecipientLayout';
import DonorLayout from "../layouts/DonorLayout";
import HealthcareLayout from "../layouts/HealthcareLayout";

// Public Pages
import Home from '../pages/Public/Home';
import AboutUs from '../pages/Public/AboutUs';
import HowItWorks from '../pages/Public/HowItWorks';
import AboutDonor from '../pages/Public/AboutDonor';
import AboutRecipient from '../pages/Public/AboutRecipient';
import Login from '../pages/Public/Login';
import Register from '../pages/Public/Register';

// Admin Pages
import AdminDashboard from '../pages/Admin/AdminDashboard';
import AdminUsers from '../pages/Admin/AdminUsers';
import AdminKYC from '../pages/Admin/AdminKYC';
import AdminDuplicates from '../pages/Admin/AdminDuplicates';
import AdminReports from '../pages/Admin/AdminReports';
import AdminProfile from '../pages/Admin/AdminProfile';

// Donor Pages
import DonorDashboard from "../pages/Donor/DonorDashboard";
import DonorHistory from "../pages/Donor/DonorHistory";
import DonorMatches from "../pages/Donor/DonorMatches";
import DonorMessages from "../pages/Donor/DonorMessages";
import DonorNotifications from "../pages/Donor/DonorNotifications";
import DonorProfile from "../pages/Donor/DonorProfile";

// Recipient Pages
import RecipientDashboard from "../pages/Recipient/RecipientDashboard";
import RecipientHistory from "../pages/Recipient/RecipientHistory";
import RecipientMatches from "../pages/Recipient/RecipientMatches";
import RecipientMessages from "../pages/Recipient/RecipientMessages";
import RecipientNotifications from "../pages/Recipient/RecipientNotifications";
import RecipientProfile from "../pages/Recipient/RecipientProfile";

// Healthcare Pages
import HealthcareDashboard from "../pages/Healthcare/HealthcareDashboard";
import HealthcareDonations from "../pages/Healthcare/HealthcareDonations";
import HealthcareHistory from "../pages/Healthcare/HealthcareHistory";
import HealthcareMessages from "../pages/Healthcare/HealthcareMessages";
import HealthcareProfile from "../pages/Healthcare/HealthcareProfile";
import HealthcareRequests from "../pages/Healthcare/HealthcareRequests";
import HealthcarePostdonations from "../pages/Healthcare/HealthcarePostdonations";

// Chat
import ChatPage from '../pages/Chat/ChatPage';

// Auth
import Logout from "../pages/Auth/Logout";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Layout */}
            <Route element={<PublicLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/about-donor" element={<AboutDonor />} />
                <Route path="/about-recipient" element={<AboutRecipient />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>

            {/* Admin Layout (using nested paths under /admin/) */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="kyc" element={<AdminKYC />} />
                <Route path="duplicates" element={<AdminDuplicates />} />
                <Route path="reports" element={<AdminReports />} />
                <Route path="profile" element={<AdminProfile />} />
            </Route>

            {/* Donor Layout (using nested paths under /donor/) */}
            <Route path="/donor" element={<DonorLayout />}>
                <Route path="dashboard" element={<DonorDashboard />} />
                <Route path="history" element={<DonorHistory />} />
                <Route path="matches" element={<DonorMatches />} />
                <Route path="messages" element={<DonorMessages />} />
                <Route path="notifications" element={<DonorNotifications />} />
                <Route path="profile" element={<DonorProfile />} />
            </Route>

            {/* Recipient Layout (using nested paths under /recipient/) */}
            <Route path="/recipient" element={<RecipientLayout />}>
                <Route path="dashboard" element={<RecipientDashboard />} />
                <Route path="history" element={<RecipientHistory />} />
                <Route path="matches" element={<RecipientMatches />} />
                <Route path="messages" element={<RecipientMessages />} />
                <Route path="notifications" element={<RecipientNotifications />} />
                <Route path="profile" element={<RecipientProfile />} />
            </Route>

            {/* Healthcare Layout (using nested paths under /healthcare/) */}
            <Route path="/healthcare" element={<HealthcareLayout />}>
                <Route path="dashboard" element={<HealthcareDashboard />} />
                <Route path="donations" element={<HealthcareDonations />} />
                <Route path="history" element={<HealthcareHistory />} />
                <Route path="messages" element={<HealthcareMessages />} />
                <Route path="profile" element={<HealthcareProfile />} />
                <Route path="requests" element={<HealthcareRequests />} />
                <Route path="post-donations" element={<HealthcarePostdonations />} />
            </Route>

            {/* Chat Layout */}
            <Route path="/chat" element={<ChatPage />} />

            {/* Logout */}
            <Route path="/logout" element={<Logout />} />
        </Routes>
    );
};

export default AppRoutes;