import React, { useState } from 'react';
import '../../assets/css/healthcare_styles.css';

const HealthcarePostdonations = () => {
    const [formData, setFormData] = useState({
        donationType: '',
        quantity: '',
        bloodGroup: '',
        notes: '',
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'file') {
            setFormData(prev => ({ ...prev, file: files[0] }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Donation Posted:', formData);
        alert('Donation successfully posted!');
        setFormData({
            donationType: '',
            quantity: '',
            bloodGroup: '',
            notes: '',
            file: null,
        });
    };

    return (
        <div className="healthcare-main">
            <h2 className="fw-semibold mb-4">➕ Post Donation</h2>

            <div className="card-glass p-4">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Donation Type</label>
                        <select
                            name="donationType"
                            value={formData.donationType}
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

                    {formData.donationType === 'blood' && (
                        <div className="row">
                            <div className="col-md-6 mb-3">
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

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Quantity (units)</label>
                                <input
                                    type="number"
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>
                    )}

                    {formData.donationType === 'hair' && (
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

                    {formData.donationType === 'organ' && (
                        <div className="mb-3">
                            <label className="form-label">Organ Type</label>
                            <input
                                type="text"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="e.g. Kidney, Cornea"
                                required
                            />
                        </div>
                    )}

                    <div className="mb-3">
                        <label className="form-label">Additional Notes (optional)</label>
                        <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            className="form-control"
                            rows={3}
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Upload Supporting Document (optional)</label>
                        <input
                            type="file"
                            name="file"
                            className="form-control"
                            onChange={handleChange}
                            accept=".jpg,.png,.pdf"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Post Donation</button>
                </form>
            </div>
        </div>
    );
};

export default HealthcarePostdonations;
