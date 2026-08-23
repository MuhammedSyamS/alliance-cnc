import React, { useState } from 'react';

export default function QuoteContact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    material: 'WPC Waterproof Board (18mm)',
    thickness: '18mm',
    dimensions: '',
    notes: ''
  });

  const [uploadedFile, setUploadedFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        material: 'WPC Waterproof Board (18mm)',
        thickness: '18mm',
        dimensions: '',
        notes: ''
      });
      setUploadedFile(null);
    }, 4000);
  };

  return (
    <section className="quote-section section-padding" id="quote">
      <div className="container">
        <div className="section-header">
          <span className="arch-index">05 // START YOUR PROJECT</span>
          <h2 className="heading-md">Get a Direct Factory Quote</h2>
          <p className="subheading">
            Upload your CAD drawings or design concepts for an immediate pricing estimation and technical material consultation from our Ernakulam engineering team.
          </p>
        </div>

        <div className="quote-grid">
          {/* Form Card */}
          <div className="quote-form-card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <span style={{ fontSize: '3rem' }}>✅</span>
                <h3 className="heading-sm" style={{ marginTop: '1rem', color: 'var(--crimson-primary)' }}>Quote Request Received!</h3>
                <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                  Our technical design team in Kalamassery, Kochi will review your specifications and call you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="quote-form">
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="custom-input touch-input" 
                      required 
                      placeholder="e.g. Rahul Nair" 
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      className="custom-input touch-input" 
                      required 
                      placeholder="e.g. +91 98470 12345" 
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-grid-2" style={{ marginTop: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="custom-input touch-input" 
                      placeholder="rahul@example.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="material">Preferred Material</label>
                    <select 
                      id="material" 
                      name="material" 
                      className="custom-select touch-input" 
                      value={formData.material}
                      onChange={handleInputChange}
                    >
                      <option value="WPC Waterproof Board (18mm)">WPC Monsoon Waterproof Board</option>
                      <option value="Solid Teak Wood (12mm-25mm)">Solid Teak Wood</option>
                      <option value="Exterior ACP Facade Cladding">ACP Exterior Cladding</option>
                      <option value="MDF Interior Board">MDF Interior Panel</option>
                      <option value="Brass / SS Sheet Inlay">Brass / Stainless Steel Sheet</option>
                    </select>
                  </div>
                </div>

                <div className="form-group" style={{ marginTop: '1.25rem' }}>
                  <label className="form-label" htmlFor="dimensions">Panel Dimensions (e.g., 6ft x 4ft)</label>
                  <input 
                    type="text" 
                    id="dimensions" 
                    name="dimensions" 
                    className="custom-input touch-input" 
                    placeholder="Width x Height in feet or mm" 
                    value={formData.dimensions}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Drag and Drop CAD File Dropzone */}
                <div className="form-group" style={{ marginTop: '1.25rem' }}>
                  <label className="form-label">Attach Vector CAD File / Drawing (.DXF, .DWG, .SVG, .PDF)</label>
                  <div 
                    className={`dropzone ${isDragOver ? 'dragover' : ''}`}
                    onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                    onDragLeave={() => setIsDragOver(false)}
                    onDrop={handleFileDrop}
                    onClick={() => document.getElementById('cad-file-input').click()}
                  >
                    <input 
                      type="file" 
                      id="cad-file-input" 
                      style={{ display: 'none' }} 
                      onChange={handleFileSelect}
                      accept=".dxf,.dwg,.svg,.pdf,.png,.jpg,.jpeg"
                    />
                    <div style={{ fontSize: '1.75rem', color: 'var(--crimson-primary)' }}>📁</div>
                    <p className="dropzone-text">
                      {uploadedFile ? `Attached: ${uploadedFile.name}` : 'Drag & Drop your CAD or PDF drawing here'}
                    </p>
                    <p className="dropzone-hint">Supports DXF, DWG, SVG, PDF, or JPG images up to 25MB</p>
                  </div>
                </div>

                <div className="form-group" style={{ marginTop: '1.25rem' }}>
                  <label className="form-label" htmlFor="notes">Project Requirements / Notes</label>
                  <textarea 
                    id="notes" 
                    name="notes" 
                    className="custom-input" 
                    rows="3"
                    placeholder="Tell us about your project location, timeline, or design preferences..."
                    value={formData.notes}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary touch-btn" 
                  style={{ width: '100%', marginTop: '1.5rem', minHeight: '48px' }}
                >
                  Submit Quote Request →
                </button>
              </form>
            )}
          </div>

          {/* Direct Contact Info & Workshop Card */}
          <div className="contact-info-card">
            <div className="info-box">
              <h3 className="heading-sm" style={{ marginBottom: '1.25rem' }}>Direct Workshop Contacts</h3>
              
              <div className="info-item">
                <div className="info-text">
                  <h4>Factory Location</h4>
                  <p>Industrial Zone, Kalamassery, Ernakulam, Kochi, Kerala - 683104</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-text">
                  <h4>Direct Factory Phone</h4>
                  <p><a href="tel:+919847012345" style={{ color: 'var(--crimson-primary)', fontWeight: 700 }}>+91 98470 12345</a> | 0484 2345678</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-text">
                  <h4>WhatsApp Drawing Review</h4>
                  <p><a href="https://wa.me/919847012345" target="_blank" rel="noreferrer" style={{ color: '#25D366', fontWeight: 700 }}>💬 Chat on WhatsApp (+91 98470 12345)</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-text">
                  <h4>Working Hours</h4>
                  <p>Monday – Saturday: 8:30 AM – 7:00 PM</p>
                </div>
              </div>
            </div>

            <div className="map-simulation">
              <div className="map-sim-bg"></div>
              <div className="map-pin-box">
                <span style={{ fontSize: '1.25rem' }}>📍</span>
                <strong style={{ fontSize: '0.85rem', display: 'block', color: 'var(--text-main)' }}>ALLIANCE Factory & Studio</strong>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Kalamassery, Ernakulam, Kochi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
