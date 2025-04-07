import React from 'react';

const AboutRecipient = () => {
    return (
        <>
            {/* Hero */}
            <section className="hero animate__animated animate__fadeIn py-5 text-white text-center bg-primary">
                <div className="container">
                    <h1 className="display-4 fw-bold">Hope Starts Here</h1>
                    <p className="lead">
                        At DonorsBridge, we match those in need with those who care — fast, safely, and with compassion.
                    </p>
                </div>
            </section>

            {/* How It Works */}
            <section className="container my-5">
                <h2 className="section-title text-center">How It Works for Recipients</h2>
                <div className="row text-center">
                    <div className="col-md-3">
                        <div className="step-icon">📝</div>
                        <h5>1. Sign Up</h5>
                        <p>Create a free account and indicate the type of donation you need.</p>
                    </div>
                    <div className="col-md-3">
                        <div className="step-icon">📄</div>
                        <h5>2. Verify Details</h5>
                        <p>Upload required identity and medical documents securely.</p>
                    </div>
                    <div className="col-md-3">
                        <div className="step-icon">🤖</div>
                        <h5>3. Get Matched</h5>
                        <p>Our AI will find the best available donor matches near you.</p>
                    </div>
                    <div className="col-md-3">
                        <div className="step-icon">📲</div>
                        <h5>4. Connect & Proceed</h5>
                        <p>Communicate with verified donors via secure messages or receive SMS alerts.</p>
                    </div>
                </div>
            </section>

            {/* Eligibility */}
            <section className="bg-light py-5">
                <div className="container">
                    <h2 className="section-title text-center">Who Can Request a Donation?</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <ul>
                                <li>✅ You are in need of blood, organ, or hair-related donation</li>
                                <li>✅ You have medical records supporting your request</li>
                                <li>✅ You’re willing to submit identity verification (KYC)</li>
                                <li>✅ You're based in Sri Lanka or supported regions</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <div className="highlight">
                                All recipient requests are reviewed by healthcare professionals and flagged for urgency so we can prioritize cases ethically and effectively.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Can You Request */}
            <section className="container my-5">
                <h2 className="section-title text-center">What Can You Request?</h2>
                <div className="row text-center">
                    <div className="col-md-4 mb-4">
                        <h5>🩸 Blood</h5>
                        <p>Urgent or scheduled blood transfusions. You can even request rare blood groups.</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5>🧠 Organs</h5>
                        <p>Register for kidney, liver, or corneal donations and get matched based on your medical priority.</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5>💇 Hair</h5>
                        <p>Request wigs as part of hair restoration services due to medical conditions or trauma.</p>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="bg-white py-5 border-top">
                <div className="container">
                    <h2 className="section-title text-center">A Message from a Recipient</h2>
                    <blockquote className="recipient-quote text-center">
                        "After months of waiting, DonorsBridge matched me with a living kidney donor.
                        I’m alive and healthy thanks to the system they built."
                        <br />
                        <small>– Shanuki D., Recipient</small>
                    </blockquote>
                </div>
            </section>
        </>
    );
};

export default AboutRecipient;