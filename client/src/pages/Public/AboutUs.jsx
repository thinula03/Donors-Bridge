import React from 'react';

const AboutUs = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero animate__animated animate__fadeIn py-5 text-white text-center bg-primary">
                <div className="container">
                    <h1 className="display-4 fw-bold">About DonorsBridge</h1>
                    <p className="lead">
                        The platform that connects kindness with need — through AI, trust, and compassion.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="container my-5">
                <h2 className="section-title">Who We Are</h2>
                <p className="fs-5">
                    DonorsBridge is an AI-powered platform built to simplify and secure donations across Sri Lanka.
                    Whether it's blood, organs, or hair, we help donors and recipients connect safely and efficiently.
                </p>
            </section>

            {/* Mission & Vision */}
            <section className="bg-light py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4">
                            <div className="highlight-box">
                                <h3 className="section-title">🎯 Our Mission</h3>
                                <p className="mb-0">
                                    To connect donors and recipients through intelligent technology, ensuring that every
                                    person in need finds hope and help in time.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="highlight-box">
                                <h3 className="section-title">🌟 Our Vision</h3>
                                <p className="mb-0">
                                    A Sri Lanka where no one suffers due to lack of access to life-saving or
                                    life-changing donations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why We're Different */}
            <section className="container my-5">
                <h2 className="section-title text-center">What Makes Us Unique</h2>
                <div className="row text-center">
                    <div className="col-md-4 mb-4">
                        <div className="tech-box">
                            <div className="icon-emoji">🤖</div>
                            <h5>AI-Powered Matching</h5>
                            <p>Intelligent, real-time matching between donors and recipients based on verified
                                needs.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="tech-box">
                            <div className="icon-emoji">🔐</div>
                            <h5>Secure & Verified</h5>
                            <p>KYC-backed profiles and fraud detection ensure safe and ethical donations.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="tech-box">
                            <div className="icon-emoji">📱</div>
                            <h5>Real-Time Alerts</h5>
                            <p>Get instant match notifications via SMS and dashboard updates.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="bg-white py-5 border-top border-bottom">
                <div className="container">
                    <h2 className="section-title text-center">Our Technology Stack</h2>
                    <div className="row text-center">
                        <div className="col-md-3 mb-3">
                            <div className="tech-box">
                                <strong>🌿 MongoDB</strong>
                                <p>Flexible and scalable NoSQL database for donor and recipient records</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="tech-box">
                                <strong>⚙️ Express.js</strong>
                                <p>Fast and minimalist Node.js backend framework</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="tech-box">
                                <strong>⚛️ React</strong>
                                <p>Responsive and dynamic frontend UI framework</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="tech-box">
                                <strong>🟢 Node.js</strong>
                                <p>JavaScript runtime environment powering our backend logic</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="container my-5">
                <h2 className="section-title text-center">Meet the Team</h2>
                <div className="row text-center">
                    <div className="col-md-6 mb-4">
                        <h5>🧑‍💻 You (Lead Developer)</h5>
                        <p>Designed and built the full-stack DonorsBridge platform with passion.</p>
                    </div>
                    <div className="col-md-6 mb-4">
                        <h5>🎓 Dr. Pabudi Abeyrathne</h5>
                        <p>Academic supervisor — guiding architecture, AI strategy, and ethical scope.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
