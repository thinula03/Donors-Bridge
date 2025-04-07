import React, { useState } from 'react';

const Register = () => {
    const [step, setStep] = useState(1);
    const [role, setRole] = useState('');
    const stepTitles = ['Basic Info', 'Preferences', 'Verification'];

    const handleNext = () => step < 3 && setStep(step + 1);
    const handleBack = () => step > 1 && setStep(step - 1);
    const handleRoleSelect = (selectedRole) => setRole(selectedRole);

    return (
        <div className="auth-bg">
        <div className="container register-wrapper">
            <div className="card-wrapper">
                {/* Banner */}
                <div className="header-banner text-center">
                    <h1>Join DonorsBridge</h1>
                    <p className="mb-0">Connect lives with a few simple steps</p>
                </div>

                {/* Step Indicator */}
                <div className="step-indicator text-center">
                    Step {step} of 3: {stepTitles[step - 1]}
                </div>

                {/* Form */}
                <form>
                    {/* Step 1 */}
                    {step === 1 && (
                        <div className="step active">
                            <div className="mb-3">
                                <label>Full Name</label>
                                <input type="text" name="full_name" className="form-control" required />
                            </div>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label>Email</label>
                                    <input type="email" name="email" className="form-control" required />
                                </div>
                                <div className="col-md-6">
                                    <label>Phone</label>
                                    <input type="tel" name="phone" className="form-control" required />
                                </div>
                            </div>
                            <div className="row g-3 mt-2">
                                <div className="col-md-6">
                                    <label>Username</label>
                                    <input type="text" name="username" className="form-control" required />
                                </div>
                                <div className="col-md-6">
                                    <label>Password</label>
                                    <input type="password" name="password" className="form-control" required />
                                </div>
                            </div>

                            <div className="mt-4">
                                <label>Registering as</label>
                                <div className="row text-center g-2">
                                    {['donor', 'recipient', 'healthcare'].map((r) => (
                                        <div className="col-md-4" key={r}>
                                            <div
                                                className={`role-option ${role === r ? 'active' : ''}`}
                                                onClick={() => handleRoleSelect(r)}
                                            >
                                                <input type="radio" name="role" value={r} checked={role === r} readOnly />
                                                {r === 'donor' && '🩸'}{r === 'recipient' && '🎯'}{r === 'healthcare' && '🏥'}{' '}
                                                <strong>{r.charAt(0).toUpperCase() + r.slice(1)}</strong><br />
                                                <small>{r === 'donor' ? 'I want to donate' : r === 'recipient' ? 'I need a donation' : 'Hospital / NGO'}</small>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                        <div className="step active">
                            <div className="mb-3">
                                <label>Preferred Contact Method</label>
                                <select name="contact_method" className="form-select">
                                    <option>Email</option>
                                    <option>Phone</option>
                                    <option>SMS</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label>Best Time to Contact</label>
                                <select name="donation_time" className="form-select">
                                    <option>Anytime</option>
                                    <option>Weekdays</option>
                                    <option>Weekends</option>
                                    <option>Evenings</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label>Receive Match Notifications?</label><br />
                                <div className="form-check form-check-inline">
                                    <input type="radio" className="form-check-input" name="notifications" value="yes" defaultChecked />
                                    <label className="form-check-label">Yes</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio" className="form-check-input" name="notifications" value="no" />
                                    <label className="form-check-label">No</label>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 3 */}
                    {step === 3 && (
                        <div className="step active">
                            <div className="mb-3">
                                <label>Upload NIC or Passport <span className="text-danger">*</span></label>
                                <input type="file" className="form-control" accept=".pdf,.jpg,.jpeg,.png" required />
                            </div>
                            <div className="mb-3">
                                <label>Upload Medical Document (Optional)</label>
                                <input type="file" className="form-control" accept=".pdf,.jpg,.jpeg,.png" />
                            </div>
                            <div className="mb-3">
                                <label>Upload Proof of Residence <span className="text-danger">*</span></label>
                                <input type="file" className="form-control" accept=".pdf,.jpg,.jpeg,.png" required />
                            </div>
                            <div className="mb-3">
                                <label>Upload a Selfie Holding Your ID (Optional)</label>
                                <input type="file" className="form-control" accept=".jpg,.jpeg,.png" />
                            </div>
                            <div className="mb-3">
                                <label>Additional Document (if any)</label>
                                <input type="file" className="form-control" accept=".pdf,.jpg,.jpeg,.png" />
                            </div>
                            <p className="small text-muted mt-3">
                                All uploaded files are securely stored and reviewed manually by the DonorsBridge verification team.
                            </p>
                        </div>
                    )}

                    {/* Footer Controls */}
                    <div className="form-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleBack} disabled={step === 1}>Back</button>
                        {step < 3 ? (
                            <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
                        ) : (
                            <button type="submit" className="btn btn-success">Submit</button>
                        )}
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Register;
