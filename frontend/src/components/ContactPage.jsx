import React, { useState } from 'react';

export default function ContactPage({ onBackToHome }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'CNC 3D Wood Routing',
    materialPreference: 'Solid Hardwood & Teak',
    projectScope: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="dedicated-page-wrapper">
      
      {/* Top Breadcrumb & Back Bar */}
      <div className="testimonials-top-bar">
        <div className="container testimonials-top-bar-container">
          <button className="btn-back-home" onClick={onBackToHome}>
            <i className="fa-solid fa-arrow-left"></i>
            <span>Back to Home</span>
          </button>
          <div className="testimonials-breadcrumbs">
            <span onClick={onBackToHome} className="crumb-link">Home</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">Contact & Inquiries</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="testimonials-hero-section">
        <div className="container">
          <div className="section-subtitle-red">
            <span>GET IN TOUCH WITH ALLIANCE</span>
            <div className="subtitle-line-red"></div>
          </div>
          <h1 className="testimonials-hero-title">
            Let's Engineer Your <span className="text-crimson">Next Project</span>
          </h1>
          <p className="testimonials-hero-sub">
            Directly connect with our Kerala factory engineering desk for architectural CNC routing, fiber laser metal cutting, and turnkey interior fitouts. We offer instant WhatsApp estimates, DWG review, and factory-direct pricing.
          </p>

          {/* Quick Metrics Bar */}
          <div className="testimonials-stats-bar">
            <div className="stat-pill-box">
              <span className="stat-bold-num">2-4 Hrs</span>
              <span className="stat-label">Initial CAD Review</span>
            </div>
            <div className="stat-pill-box">
              <span className="stat-bold-num">100%</span>
              <span className="stat-label">Factory Direct</span>
            </div>
            <div className="stat-pill-box">
              <span className="stat-bold-num">Kochi</span>
              <span className="stat-label">Kerala Facility</span>
            </div>
            <div className="stat-pill-box">
              <span className="stat-bold-num">GCC Desk</span>
              <span className="stat-label">+973 35985107</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section style={{ padding: '5.5rem 0', background: '#FFFFFF', color: '#1d1f1d' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
            
            {/* Left Column: Direct Channels & Map */}
            <div>
              <div className="section-subtitle-red">
                <span>DIRECT COMMUNICATION</span>
                <div className="subtitle-line-red"></div>
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#1d1f1d', margin: '0.75rem 0 1.25rem' }}>
                Factory Desk & Workshop Location
              </h2>
              <p style={{ color: '#353834', lineHeight: 1.7, marginBottom: '2.5rem', fontSize: '1.02rem' }}>
                Visit our Kalamassery fabrication studio or reach our design engineers directly. We provide rapid feasibility assessments, material samples, and transparent itemized estimates.
              </p>

              {/* Contact Channels Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                
                {/* Phone */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem', background: '#f7faf5', border: '1px solid #dbe5d8', borderRadius: '14px', padding: '1.2rem 1.4rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#cfe3c8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1d1f1d', fontSize: '1.15rem', flexShrink: 0 }}>
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#60685f', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                      KERALA FACTORY DIRECT HOTLINE
                    </span>
                    <a href="tel:+918891790094" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1d1f1d', textDecoration: 'none' }}>
                      +91 88917 90094
                    </a>
                    <span style={{ display: 'block', fontSize: '0.82rem', color: '#60685f', marginTop: '2px' }}>Mon - Sat, 9:00 AM - 6:00 PM (IST)</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem', background: '#f7faf5', border: '1px solid #dbe5d8', borderRadius: '14px', padding: '1.2rem 1.4rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#cfe3c8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366', fontSize: '1.35rem', flexShrink: 0 }}>
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#60685f', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                      INSTANT WHATSAPP ENGINEERING CHAT
                    </span>
                    <a href="https://wa.me/918891790094" target="_blank" rel="noreferrer" style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1d1f1d', textDecoration: 'none' }}>
                      Chat Directly with our Team ➔
                    </a>
                    <span style={{ display: 'block', fontSize: '0.82rem', color: '#60685f', marginTop: '2px' }}>Send photos, drawings, and dimension requests</span>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem', background: '#f7faf5', border: '1px solid #dbe5d8', borderRadius: '14px', padding: '1.2rem 1.4rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#cfe3c8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1d1f1d', fontSize: '1.15rem', flexShrink: 0 }}>
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#60685f', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                      OFFICIAL INQUIRY DESK
                    </span>
                    <a href="mailto:info@alliancecnc.in" style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1d1f1d', textDecoration: 'none' }}>
                      info@alliancecnc.in
                    </a>
                    <span style={{ display: 'block', fontSize: '0.82rem', color: '#60685f', marginTop: '2px' }}>Send CAD DXF / DWG / PDF files</span>
                  </div>
                </div>

                {/* GCC Coordination */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem', background: '#f7faf5', border: '1px solid #dbe5d8', borderRadius: '14px', padding: '1.2rem 1.4rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#cfe3c8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1d1f1d', fontSize: '1.15rem', flexShrink: 0 }}>
                    <i className="fa-solid fa-globe"></i>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#60685f', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                      GCC REGIONAL COORDINATION
                    </span>
                    <a href="tel:+97335985107" style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1d1f1d', textDecoration: 'none' }}>
                      +973 35985107
                    </a>
                    <span style={{ display: 'block', fontSize: '0.82rem', color: '#60685f', marginTop: '2px' }}>Bahrain, UAE, Saudi Arabia & Qatar Logistics</span>
                  </div>
                </div>

              </div>

              {/* Styled Kerala Vector Map Container */}
              <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #dbe5d8', background: '#1d1f1d' }}>
                <div style={{ height: '220px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="map-grid-mesh"></div>
                  <div className="map-roads-vector"></div>
                  <div className="map-pin-pulse">
                    <div className="pin-circle">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                  </div>
                  <div className="map-label-chip">
                    <span>📍 Kalamassery Industrial Zone, Kochi, Kerala</span>
                  </div>
                </div>
                <div style={{ padding: '0.9rem 1.25rem', background: '#f7faf5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #dbe5d8' }}>
                  <span style={{ fontSize: '0.85rem', color: '#1d1f1d', fontWeight: 600 }}>Alliance Production Studio</span>
                  <a 
                    href="https://maps.google.com/?q=Kalamassery,Kochi,Kerala" 
                    target="_blank" 
                    rel="noreferrer"
                    style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1d1f1d', textDecoration: 'none' }}
                  >
                    Open in Google Maps ➔
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Detailed Project Inquiry Form */}
            <div style={{ background: '#f7faf5', border: '1px solid #dbe5d8', borderRadius: '20px', padding: 'clamp(1.5rem, 4vw, 2.8rem)', boxShadow: '0 10px 30px rgba(29,31,29,0.05)' }}>
              
              <div style={{ marginBottom: '1.75rem' }}>
                <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#60685f', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  PROJECT INQUIRY FORM
                </span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1d1f1d', marginTop: '0.25rem' }}>
                  Send Your Project Details
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#60685f', marginTop: '0.35rem' }}>
                  Our technical engineers will review your request and reply within 2–4 business hours.
                </p>
              </div>

              {submitted ? (
                <div style={{ background: '#e6f4ea', border: '1px solid #34a853', borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#34a853', color: '#fff', fontSize: '1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                    ✓
                  </div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1e4620', marginBottom: '0.5rem' }}>
                    Inquiry Received Successfully!
                  </h4>
                  <p style={{ color: '#2d6a30', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Thank you, <strong>{formData.name}</strong>. Our Kerala engineering team has received your project details and will contact you via phone or email shortly.
                  </p>
                  <button 
                    className="btn btn-pill-sage"
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', serviceType: 'CNC 3D Wood Routing', materialPreference: 'Solid Hardwood & Teak', projectScope: '' }); }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Rahul Menon / Studio Arch" 
                      className="craft-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="you@company.com" 
                        className="craft-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Phone / WhatsApp Number *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91 98765 43210" 
                        className="craft-input"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Service Required</label>
                      <select 
                        className="craft-input"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="CNC 3D Wood Routing">CNC 3D Wood Routing</option>
                        <option value="Fiber Laser Metal Slicing">Fiber Laser Metal Slicing</option>
                        <option value="UV Flatbed Printing">UV Flatbed Printing</option>
                        <option value="Turnkey Interior Fit-Out">Turnkey Interior Fit-Out</option>
                        <option value="Exterior Facade / Jali">Exterior Facade / Jali</option>
                        <option value="Multiple / Turnkey Spatial">Multiple / Turnkey Spatial</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Primary Substrate</label>
                      <select 
                        className="craft-input"
                        value={formData.materialPreference}
                        onChange={(e) => setFormData({ ...formData, materialPreference: e.target.value })}
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="Solid Hardwood & Teak">Solid Hardwood & Teak</option>
                        <option value="Brass / Stainless Steel">Brass / Stainless Steel</option>
                        <option value="Marine Ply / WPC (Waterproof)">Marine Ply / WPC (Waterproof)</option>
                        <option value="Corian Solid Surface">Corian Solid Surface</option>
                        <option value="Acrylic / Clear Sheet">Acrylic / Clear Sheet</option>
                        <option value="ACP (Exterior Grade)">ACP (Exterior Grade)</option>
                        <option value="Other / Need Recommendation">Other / Need Recommendation</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Project Scope & Dimensions</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us about your project dimensions, timeline, site location, or attach CAD requirements..." 
                      className="craft-input"
                      value={formData.projectScope}
                      onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                      style={{ resize: 'vertical' }}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-pill-sage" style={{ width: '100%', justifyContent: 'center', minHeight: '48px' }}>
                    <span>Submit Project Inquiry</span>
                    <span className="arrow-icon">➔</span>
                  </button>

                  <p style={{ fontSize: '0.78rem', color: '#60685f', textAlign: 'center', margin: 0 }}>
                    🔒 Direct factory engineering confidentiality. Your drawings are protected by NDA.
                  </p>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section style={{ padding: '4.5rem 0', background: '#1d1f1d', color: '#f2f7f0', borderTop: '1px solid rgba(207,227,200,0.15)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
            Need Immediate Factory Assistance?
          </h2>
          <p style={{ color: '#c8d8c6', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Call or WhatsApp our managing desk directly for urgent architectural site cutovers.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+918891790094" className="btn btn-pill-sage" style={{ textDecoration: 'none' }}>
              <span>Call +91 88917 90094</span>
              <span className="arrow-icon">➔</span>
            </a>
            <button className="btn-pill-dark" onClick={onBackToHome}>
              <span>Return to Home Overview</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

