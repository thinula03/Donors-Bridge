import React from 'react';
import { Link } from 'react-router-dom';
import aiIcon from '../../assets/img/ai.png';
import kycIcon from '../../assets/img/kyc.png';
import realtimeIcon from '../../assets/img/realtime.png';
import dashboardIcon from '../../assets/img/dashboard.png';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="py-5 text-center text-white hero-section bg-primary">
                <div className="container">
                    <h1 className="display-5 fw-bold">Connecting Lives,<br />Bridging Hope</h1>
                    <p className="lead">A secure AI-powered platform connecting organ, blood, and hair donors with recipients.</p>
                    <div className="mt-4">
                        <Link to="/register" className="btn btn-light btn-lg me-2">Become a Donor</Link>
                        <Link to="/register" className="btn btn-outline-light btn-lg">Request Donation</Link>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="container text-center my-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="stat-box">
                            <h2 className="text-primary">5,000+</h2>
                            <p>Registered Donors</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="stat-box">
                            <h2 className="text-primary">2,800+</h2>
                            <p>Donation Matches Made</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="stat-box">
                            <h2 className="text-primary">98%</h2>
                            <p>Match Success Rate</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-5">
                <div className="container text-center">
                    <h2 className="mb-4">Why Choose DonorsBridge?</h2>
                    <div className="row">
                        <div className="col-6 col-md-3 mb-4">
                            <img src={aiIcon} alt="AI" width="50" />
                            <p className="mt-2">AI-Powered Matching</p>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <img src={kycIcon} alt="KYC" width="50" />
                            <p className="mt-2">Secure KYC Verification</p>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <img src={realtimeIcon} alt="Realtime" width="50" />
                            <p className="mt-2">Real-time Matching</p>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <img src={dashboardIcon} alt="Dashboard" width="50" />
                            <p className="mt-2">Personalized Dashboard</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">How It Works</h2>
                    <div className="row text-center">
                        <div className="col-md-3">
                            <h5>Register</h5>
                            <p>Create a free account as a donor or recipient.</p>
                        </div>
                        <div className="col-md-3">
                            <h5>Verify</h5>
                            <p>Submit KYC documents and complete your profile.</p>
                        </div>
                        <div className="col-md-3">
                            <h5>Get Matched</h5>
                            <p>Our system finds the best match using AI.</p>
                        </div>
                        <div className="col-md-3">
                            <h5>Connect & Donate</h5>
                            <p>Coordinate the donation through real-time communication.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Success Stories</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="testimonial">
                                <p>"Thanks to DonorsBridge, I received a life-saving kidney in just two weeks. The platform made everything so easy and fast."</p>
                                <small className="text-muted">– Nimal S., Recipient</small>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="testimonial">
                                <p>"I’ve donated blood 5 times through this platform and even signed up for organ donation. The reminders and match system are fantastic."</p>
                                <small className="text-muted">– Shani T., Donor</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
