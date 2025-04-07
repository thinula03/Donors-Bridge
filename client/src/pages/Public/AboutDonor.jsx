import React from 'react';

const AboutDonor = () => {
    return (
        <>
            {/* Hero */}
            <section className="hero animate__animated animate__fadeIn py-5 text-white text-center bg-primary">
                <div className="container">
                    <h1 className="display-4 fw-bold">Be Someone’s Miracle</h1>
                    <p className="lead">Your donation could save a life, restore confidence, or bring hope to a family in need.</p>
                </div>
            </section>

            {/* Why Become a Donor */}
            <section className="container my-5">
                <h2 className="section-title text-center">Why Become a Donor?</h2>
                <div className="row text-center">
                    <div className="col-md-4 mb-4">
                        <div className="benefit-icon mb-2">❤️</div>
                        <h5>Make a Real Difference</h5>
                        <p>Every donation has the potential to save or transform lives — your small act could be someone’s biggest blessing.</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="benefit-icon mb-2">🔄</div>
                        <h5>Give Without Losing</h5>
                        <p>Blood and hair donations are renewable — and you can choose your level of commitment and anonymity.</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="benefit-icon mb-2">🌍</div>
                        <h5>Be Part of a Community</h5>
                        <p>Join a growing network of kind-hearted individuals working toward a healthier, more compassionate world.</p>
                    </div>
                </div>
            </section>

            {/* Who Can Donate */}
            <section className="bg-light py-5">
                <div className="container">
                    <h2 className="section-title text-center">Who Can Donate?</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <ul>
                                <li>✅ You are in good general health</li>
                                <li>✅ Aged between 18 and 60 years</li>
                                <li>✅ No major infectious or chronic diseases</li>
                                <li>✅ Not currently pregnant (for women)</li>
                                <li>✅ Willing to complete identity verification (KYC)</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <p className="highlight">
                                Even if you don’t qualify for all donation types (e.g., organs),
                                you can still donate blood or hair and bring joy to someone's life.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Can You Donate */}
            <section className="container my-5">
                <h2 className="section-title text-center">What Can You Donate?</h2>
                <div className="row text-center">
                    <div className="col-md-4 mb-4">
                        <h5>🩸 Blood</h5>
                        <p>
                            Every 2 seconds, someone needs blood. You can donate safely every 3–4 months and help trauma, surgery, or cancer patients.
                        </p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5>🧠 Organs</h5>
                        <p>
                            Sign up as an organ donor — kidneys, liver, heart, corneas — and potentially save up to 8 lives through one pledge.
                        </p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5>💇 Hair</h5>
                        <p>
                            Donated hair is used to craft wigs for children and adults battling cancer or alopecia. Minimum length: 12 inches.
                        </p>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="bg-white py-5 border-top">
                <div className="container">
                    <h2 className="section-title text-center">Real Stories, Real Impact</h2>
                    <blockquote className="donor-quote text-center">
                        "I donated blood through DonorsBridge after a friend was matched with a liver donor.
                        It was the most fulfilling thing I’ve done."
                        <br />
                        <small>– Roshan P., Donor</small>
                    </blockquote>
                </div>
            </section>
        </>
    );
};

export default AboutDonor;
