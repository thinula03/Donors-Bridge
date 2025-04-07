import React, { useState } from 'react';
import '../../assets/css/healthcare_styles.css';

const HealthcareProfile = () => {
    const [profile, setProfile] = useState({
        name: 'Global Health Org',
        regId: 'GHO-45678',
        region: 'Colombo, Sri Lanka',
        hours: '9 AM - 5 PM (Mon - Fri)',
        email: 'info@globalhealth.org',
        phone: '+94 112 345 678',
        contactPerson: 'Dr. Nimal Perera',
        contactEmail: 'nimal@globalhealth.org',
        contactPhone: '+94 772 111 999',
        specialties: ['Blood Drives', 'Organ Matching'],
        newSpecialty: '',
        publicUrl: 'https://donorsbridge.com/health/globalhealth',
        kycStatus: 'Verified',
        mapLink: 'https://maps.google.com/?q=Global+Health+Org'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const addSpecialty = () => {
        if (profile.newSpecialty.trim() !== '') {
            setProfile({
                ...profile,
                specialties: [...profile.specialties, profile.newSpecialty.trim()],
                newSpecialty: ''
            });
        }
    };

    const removeSpecialty = (index) => {
        const updated = profile.specialties.filter((_, i) => i !== index);
        setProfile({ ...profile, specialties: updated });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated Profile:', profile);
    };

    return (
        <div className="donor-main">
            <h2 className="fw-semibold mb-4">🏥 Healthcare Profile</h2>
            <form onSubmit={handleSubmit}>
                {/* Organization Info */}
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Organization Name</label>
                        <input type="text" name="name" className="form-control" value={profile.name} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Registration ID</label>
                        <input type="text" name="regId" className="form-control" value={profile.regId} onChange={handleChange} required />
                    </div>
                </div>

                {/* Region & Operational Hours */}
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Region</label>
                        <input type="text" name="region" className="form-control" value={profile.region} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Operational Hours</label>
                        <input type="text" name="hours" className="form-control" value={profile.hours} onChange={handleChange} />
                    </div>
                </div>

                {/* Email & Phone */}
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Official Email</label>
                        <input type="email" name="email" className="form-control" value={profile.email} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Hotline / Phone</label>
                        <input type="tel" name="phone" className="form-control" value={profile.phone} onChange={handleChange} />
                    </div>
                </div>

                {/* Contact Person */}
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Contact Person</label>
                        <input type="text" name="contactPerson" className="form-control" value={profile.contactPerson} onChange={handleChange} />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">Contact Email</label>
                        <input type="email" name="contactEmail" className="form-control" value={profile.contactEmail} onChange={handleChange} />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">Contact Phone</label>
                        <input type="tel" name="contactPhone" className="form-control" value={profile.contactPhone} onChange={handleChange} />
                    </div>
                </div>

                {/* Specialties as Tags */}
                <div className="mb-3">
                    <label className="form-label">Services / Specialties</label>
                    <div className="d-flex flex-wrap gap-2 mb-2">
                        {profile.specialties.map((tag, index) => (
                            <span key={index} className="badge bg-primary rounded-pill">
                {tag}
                                <button
                                    type="button"
                                    className="btn-close btn-close-white ms-2"
                                    onClick={() => removeSpecialty(index)}
                                ></button>
              </span>
                        ))}
                    </div>
                    <div className="input-group">
                        <input type="text" name="newSpecialty" className="form-control" placeholder="Add new specialty" value={profile.newSpecialty} onChange={handleChange} />
                        <button type="button" className="btn btn-outline-secondary" onClick={addSpecialty}>Add</button>
                    </div>
                </div>

                {/* Public Profile */}
                <div className="mb-3">
                    <label className="form-label">Public Profile URL</label>
                    <div className="input-group">
                        <input type="text" className="form-control" readOnly value={profile.publicUrl} />
                        <button type="button" className="btn btn-outline-primary" onClick={() => navigator.clipboard.writeText(profile.publicUrl)}>Copy</button>
                    </div>
                </div>

                {/* KYC + Map */}
                <div className="row mb-4">
                    <div className="col-md-6">
                        <label className="form-label">KYC Status</label>
                        <input type="text" className="form-control" readOnly value={profile.kycStatus} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Google Maps Link</label>
                        <input type="text" name="mapLink" className="form-control" value={profile.mapLink} onChange={handleChange} />
                    </div>
                </div>

                <div className="text-end">
                    <button type="submit" className="btn btn-success">Update Profile</button>
                </div>
            </form>
        </div>
    );
};

export default HealthcareProfile;
