import React, { useState, useRef } from 'react';

export default function QuoteContact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    material: 'WPC Monsoon Waterproof Board (18mm)',
    dimensions: '',
    notes: ''
  });

  const [uploadedFile, setUploadedFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef(null);

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

  const removeFile = (e) => {
    e.stopPropagation();
    setUploadedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      material: 'WPC Monsoon Waterproof Board (18mm)',
      dimensions: '',
      notes: ''
    });
    setUploadedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <section className="quote-section section-padding" id="quote">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-left">
          <div className="arch-badge-tag">
            <span className="live-indicator"></span>
            START YOUR PROJECT
          </div>
          <h2 className="heading-md">
            Get a <span className="text-crimson">Direct Factory Quote</span>
          </h2>
          <p className="subheading" style={{ maxWidth: '820px' }}>
            Upload your CAD drawings, 2D sketches, or project dimensions for an immediate pricing estimation 
            and technical material consultation directly from our Ernakulam engineering workshop.
          </p>
        </div>

        <div className="quote-grid">
          
          {/* Left Column: Form Card */}
          <div className="quote-form-card">
            {submitted ? (
              <div className="quote-success-box">
                <div className="success-icon-wrap">
                  <i className="fa-solid fa-circle-check text-crimson"></i>
                </div>
                <h3 className="heading-sm" style={{ color: 'var(--text-main)', margin: '0.8rem 0 0.4rem' }}>
                  Quote Request Submitted!
                </h3>
                <p className="success-msg">
                  Thank you, <strong>{formData.name || 'Valued Client'}</strong>. Our technical engineering desk in Kalamassery, Kochi will review your specifications and reach out via phone/WhatsApp within <strong>2 business hours</strong>.
                </p>

                {uploadedFile && (
                  <div className="attached-file-pill" style={{ justifyContent: 'center', margin: '1rem auto' }}>
                    <i className="fa-solid fa-paperclip text-crimson"></i>
                    <span>Attached: {uploadedFile.name}</span>
                  </div>
                )}

                <button 
                  type="button" 
                  className="btn btn-outline" 
                  style={{ marginTop: '1.5rem' }}
                  onClick={resetForm}
                >
                  ← Submit Another Project Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="quote-form" noValidate={false}>
                
                {/* Row 1: Name & Phone */}
                <div className="form-responsive-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="quote-name">
                      Full Name <span className="required-star">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="quote-name" 
                      name="name" 
                      className="custom-input touch-input" 
                      required 
                      placeholder="e.g. Rahul Nair" 
                      value={formData.name}
                      onChange={handleInputChange}
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="quote-phone">
                      Phone Number <span className="required-star">*</span>
                    </label>
                    <input 
                      type="tel" 
                      id="quote-phone" 
                      name="phone" 
                      className="custom-input touch-input" 
                      required 
                      placeholder="e.g. +91 98470 12345" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      autoComplete="tel"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Material */}
                <div className="form-responsive-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="quote-email">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="quote-email" 
                      name="email" 
                      className="custom-input touch-input" 
                      placeholder="rahul@example.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                      autoComplete="email"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="quote-material">
                      Preferred Material
                    </label>
                    <div className="select-wrapper">
                      <select 
                        id="quote-material" 
                        name="material" 
                        className="custom-select touch-input" 
                        value={formData.material}
                        onChange={handleInputChange}
                      >
                        <option value="WPC Monsoon Waterproof Board (18mm)">WPC Monsoon Waterproof Board</option>
                        <option value="Solid Teak Wood (12mm - 50mm)">Solid Teak Wood</option>
                        <option value="Exterior ACP Facade Cladding (4mm)">ACP Exterior Facade Cladding</option>
                        <option value="High-Density MDF / HDHMR Interior">MDF / HDHMR Interior Board</option>
                        <option value="Cast Acrylic Sheet (Backlit)">Cast Acrylic Sheet (Backlit)</option>
                        <option value="Solid Brass / Stainless Steel Sheet">Brass / Stainless Steel Sheet Inlay</option>
                      </select>
                      <span className="select-arrow"><i className="fa-solid fa-chevron-down"></i></span>
                    </div>
                  </div>
                </div>

                {/* Row 3: Dimensions */}
                <div className="form-group">
                  <label className="form-label" htmlFor="quote-dimensions">
                    Panel Dimensions (e.g., 6ft x 4ft)
                  </label>
                  <input 
                    type="text" 
                    id="quote-dimensions" 
                    name="dimensions" 
                    className="custom-input touch-input" 
                    placeholder="Width x Height in feet or mm" 
                    value={formData.dimensions}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Row 4: File Dropzone */}
                <div className="form-group">
                  <label className="form-label">
                    Attach Vector CAD File / Drawing (.DXF, .DWG, .SVG, .PDF)
                  </label>
                  
                  <div 
                    className={`dropzone-fluid ${isDragOver ? 'dragover' : ''} ${uploadedFile ? 'has-file' : ''}`}
                    onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                    onDragLeave={() => setIsDragOver(false)}
                    onDrop={handleFileDrop}
                    onClick={() => fileInputRef.current?.click()}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') fileInputRef.current?.click(); }}
                  >
                    <input 
                      type="file" 
                      id="cad-file-input" 
                      ref={fileInputRef}
                      style={{ display: 'none' }} 
                      onChange={handleFileSelect}
                      accept=".dxf,.dwg,.svg,.pdf,.png,.jpg,.jpeg"
                    />

                    {uploadedFile ? (
                      <div className="dropzone-file-selected">
                        <div className="file-info-row">
                          <i className="fa-solid fa-file-circle-check text-crimson file-icon"></i>
                          <div className="file-details">
                            <span className="file-name">{uploadedFile.name}</span>
                            <span className="file-size">{(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB</span>
                          </div>
                          <button 
                            type="button" 
                            className="remove-file-btn"
                            onClick={removeFile}
                            title="Remove this file"
                            aria-label="Remove attached file"
                          >
                            ✕
                          </button>
                        </div>
                        <span className="change-file-hint">Click or drop another file to replace</span>
                      </div>
                    ) : (
                      <div className="dropzone-idle">
                        <div className="dropzone-icon">📁</div>
                        <p className="dropzone-text">
                          Drag &amp; Drop your CAD or PDF drawing here
                        </p>
                        <p className="dropzone-hint">
                          Supports DXF, DWG, SVG, PDF, or JPG images up to 25MB
                        </p>
                        <span className="browse-files-btn">Browse Device Files</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Row 5: Notes */}
                <div className="form-group">
                  <label className="form-label" htmlFor="quote-notes">
                    Project Requirements / Notes
                  </label>
                  <textarea 
                    id="quote-notes" 
                    name="notes" 
                    className="custom-textarea touch-input" 
                    rows="3"
                    placeholder="Tell us about your project location, timeline, or design preferences..."
                    value={formData.notes}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                {/* Row 6: Submit Button */}
                <div className="submit-btn-wrapper">
                  <button 
                    type="submit" 
                    className="btn btn-primary quote-submit-btn"
                  >
                    <span>Submit Quote Request</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>

                <div className="form-privacy-note">
                  <i className="fa-solid fa-shield-halved text-crimson"></i>
                  <span>Your CAD vector drawings &amp; personal data remain 100% confidential and proprietary to your project.</span>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: Direct Workshop Contacts & Map */}
          <div className="contact-info-card">
            
            <div className="info-box-wrapper">
              <div className="info-box-header">
                <span className="arch-index">DIRECT ACCESS</span>
                <h3 className="heading-sm">Workshop &amp; Engineering Contacts</h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                  Speak directly with our senior CAD draftsmen and factory production leads.
                </p>
              </div>
              
              <div className="contact-touch-list">
                
                {/* Factory Location */}
                <div className="contact-touch-item">
                  <div className="contact-icon-box">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="contact-item-body">
                    <span className="touch-item-title">Industrial Factory Studio</span>
                    <p className="touch-item-desc">
                      Industrial Zone, Kalamassery, Ernakulam, Kochi, Kerala — 683104
                    </p>
                  </div>
                </div>

                {/* Phone Link */}
                <a href="tel:+919847012345" className="contact-touch-item action-item">
                  <div className="contact-icon-box crimson-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="contact-item-body">
                    <span className="touch-item-title">Direct Production Phone</span>
                    <span className="touch-item-val">+91 98470 12345 / 0484 2345678</span>
                    <small className="touch-item-sub">Tap to call our Kalamassery workshop</small>
                  </div>
                </a>

                {/* WhatsApp Link */}
                <a 
                  href="https://wa.me/919847012345?text=Hi%20Alliance%20Team%2C%20I%20would%20like%20to%20review%20my%20CAD%20drawings%20for%20CNC%20cutting." 
                  target="_blank" 
                  rel="noreferrer" 
                  className="contact-touch-item action-item whatsapp-action"
                >
                  <div className="contact-icon-box whatsapp-icon">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div className="contact-item-body">
                    <span className="touch-item-title">Instant WhatsApp Review</span>
                    <span className="touch-item-val">Chat on WhatsApp (+91 98470 12345)</span>
                    <small className="touch-item-sub">Fast vector &amp; photo exchange</small>
                  </div>
                </a>

                {/* Operating Hours */}
                <div className="contact-touch-item">
                  <div className="contact-icon-box">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <div className="contact-item-body">
                    <span className="touch-item-title">Factory Operating Hours</span>
                    <p className="touch-item-desc">
                      Monday – Saturday: 8:30 AM – 7:00 PM IST
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Map Simulation Graphic */}
            <div className="map-simulation-container">
              <div className="map-sim-bg"></div>
              <div className="map-pin-box">
                <span className="map-pin-emoji">📍</span>
                <div className="map-pin-text">
                  <strong>ALLIANCE Factory &amp; Studio</strong>
                  <span>Kalamassery, Ernakulam, Kochi</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
