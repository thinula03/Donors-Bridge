import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero animate__animated animate__fadeIn py-5 text-white text-center bg-primary">
                <div className="container">
                    <h1 className="display-4 fw-bold">How DonorsBridge Works</h1>
                    <p className="lead">Your donation journey simplified — powered by AI, built on trust.</p>
                </div>
            </section>

            {/* Steps Section */}
            <section className="container my-5">
                <div className="row text-center">
                    <div className="col-md-3">
                        <div className="step-icon">📝</div>
                        <h5>1. Register</h5>
                        <p>Create a free donor or recipient account using your email or phone.</p>
                    </div>
                    <div className="col-md-3">
                        <div className="step-icon">🔐</div>
                        <h5>2. Verify Identity</h5>
                        <p>Upload KYC documents to ensure secure and legitimate participation.</p>
                    </div>
                    <div className="col-md-3">
                        <div className="step-icon">🤖</div>
                        <h5>3. AI Matching</h5>
                        <p>Our intelligent engine matches you based on medical, location & urgency criteria.</p>
                    </div>
                    <div className="col-md-3">
                        <div className="step-icon">📞</div>
                        <h5>4. Connect & Donate</h5>
                        <p>Communicate securely and proceed with donation through verified channels.</p>
                    </div>
                </div>
            </section>

            {/* Role-Based Flow */}
            <section className="container my-5">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="role-box">
                            <h4>For Donors</h4>
                            <ul>
                                <li>Choose what you’d like to donate: organ, blood, or hair.</li>
                                <li>Fill out your health profile and availability preferences.</li>
                                <li>Receive alerts when a compatible recipient is found.</li>
                                <li>Stay anonymous or choose to communicate directly.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="role-box">
                            <h4>For Recipients</h4>
                            <ul>
                                <li>Submit a donation request based on your need.</li>
                                <li>Verify your identity and medical requirements.</li>
                                <li>View donor matches in real-time with AI rankings.</li>
                                <li>Get notified when donors accept your request.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center py-5 bg-light">
                <div className="container">
                    <h2>Ready to make a difference?</h2>
                    <p className="mb-4">Join DonorsBridge today and be the reason someone gets a second chance.</p>
                    <Link to="/register" className="btn btn-primary btn-lg me-3">Become a Donor</Link>
                    <Link to="/register" className="btn btn-outline-primary btn-lg">Request a Donation</Link>
                </div>
            </section>
        </>
    );
};

export default HowItWorks;
