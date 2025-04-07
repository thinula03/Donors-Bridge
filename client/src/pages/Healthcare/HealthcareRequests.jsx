import React, { useState } from 'react';
import '../../assets/css/healthcare_styles.css';

const HealthcareRequests = () => {
    const [formData, setFormData] = useState({
        requestType: '',
        quantity: '',
        bloodGroup: '',
        urgency: '',
        notes: '',
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'file') {
            setFormData({ ...formData, file: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Request submitted:', formData);
        alert('Request submitted successfully!');
        setFormData({
            requestType: '',
            quantity: '',
            bloodGroup: '',
            urgency: '',
            notes: '',
            file: null,
        });
    };

    return (
        <div className="healthcare-main">
            <h2 className="fw-semibold mb-4">📥 Submit Donation Request</h2>

            <div className="card-glass p-4">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Request Type</label>
                        <select
                            name="requestType"
                            value={formData.requestType}
                            onChange={handleChange}
                            className="form-select"
                            required
                        >
                            <option value="">-- Select --</option>
                            <option value="blood">🩸 Blood</option>
                            <option value="organ">🧠 Organ</option>
                            <option value="hair">💇 Hair</option>
                        </select>
                    </div>

                    {formData.requestType === 'blood' && (
                        <>
                            <div className="mb-3">
                                <label className="form-label">Blood Group</label>
                                <select
                                    name="bloodGroup"
                                    value={formData.bloodGroup}
                                    onChange={handleChange}
                                    className="form-select"
                                    required
                                >
                                    <option value="">-- Select --</option>
                                    <option>O+</option>
                                    <option>O-</option>
                                    <option>A+</option>
                                    <option>A-</option>
                                    <option>B+</option>
                                    <option>B-</option>
                                    <option>AB+</option>
                                    <option>AB-</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Units Needed</label>
                                <input
                                    type="number"
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                        </>
                    )}

                    {formData.requestType === 'organ' && (
                        <div className="mb-3">
                            <label className="form-label">Organ Needed</label>
                            <input
                                type="text"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="e.g., Kidney, Liver, Cornea"
                                required
                            />
                        </div>
                    )}

                    {formData.requestType === 'hair' && (
                        <div className="mb-3">
                            <label className="form-label">Length (in inches)</label>
                            <input
                                type="number"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>
                    )}

                    <div className="mb-3">
                        <label className="form-label">Urgency Level</label>
                        <select
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleChange}
                            className="form-select"
                            required
                        >
                            <option value="">-- Select --</option>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                            <option>Critical</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Upload Medical Document (PDF, JPG, PNG)</label>
                        <input
                            type="file"
                            name="file"
                            className="form-control"
                            onChange={handleChange}
                            accept=".pdf,.jpg,.jpeg,.png"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Additional Notes (optional)</label>
                        <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            className="form-control"
                            rows={3}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit Request</button>
                </form>
            </div>
        </div>
    );
};

export default HealthcareRequests;
