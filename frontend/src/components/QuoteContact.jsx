import React, { useState } from 'react';

export default function QuoteContact({ onNavigateToContact }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-great-section" id="contact">
      <div className="container">
        
        <div className="contact-great-grid">
          
          {/* Left Column: Info & Dark Map */}
          <div className="contact-info-col">
            <div className="section-subtitle-red">
              <span>CONTACT US</span>
              <div className="subtitle-line-red"></div>
            </div>
            
            <h2 className="contact-main-heading">
              Let's Build<br /><span className="text-crimson">Something Great</span>
            </h2>
            
            <p className="contact-main-desc">
              Get in touch with us. We're here to help you with your ideas and custom projects.
            </p>

            <div className="contact-channels-list">
              {/* Phone */}
              <div className="contact-channel-item">
                <div className="channel-icon-box">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="channel-text">
                  <a href="tel:+918891790094" className="channel-primary-val">
                    +91 88917 90094
                  </a>
                  <span className="channel-secondary-note">Mon - Sat, 9:00 AM - 6:00 PM</span>
                </div>
              </div>

              {/* Email */}
              <div className="contact-channel-item">
                <div className="channel-icon-box">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="channel-text">
                  <a href="mailto:info@alliancecnc.in" className="channel-primary-val">
                    info@alliancecnc.in
                  </a>
                  <span className="channel-secondary-note">We reply within 24 hours</span>
                </div>
              </div>

              {/* Address */}
              <div className="contact-channel-item">
                <div className="channel-icon-box">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="channel-text">
                  <span className="channel-primary-val">
                    Kochi, Kerala, India
                  </span>
                  <span className="channel-secondary-note">Visit us for an engineering consultation</span>
                </div>
              </div>
            </div>

            {/* Stylized Dark Blueprint Map Box matching mockup */}
            <div className="contact-map-card">
              <div className="map-inner-canvas">
                <div className="map-grid-lines"></div>
                <div className="map-roads-vector"></div>
                <div className="map-pin-pulse">
                  <div className="pin-circle">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="pin-ripple"></div>
                </div>
                <div className="map-label-chip">
                  <span>Alliance Industrial Park, Kochi</span>
                </div>
              </div>
              <div className="map-card-bar">
                <span>📍 Ernakulam / Kochi Workshop</span>
                <a 
                  href="https://maps.google.com/?q=Kochi,Kerala" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="map-directions-btn"
                >
                  Get Directions <span className="arrow-icon">➔</span>
                </a>
              </div>
            </div>

            {onNavigateToContact && (
              <div style={{ marginTop: '1.25rem' }}>
                <button 
                  type="button" 
                  className="btn-inline-explore" 
                  onClick={onNavigateToContact}
                  style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                >
                  Open Full Contact Desk & Inquiries <span className="arrow-icon">➔</span>
                </button>
              </div>
            )}

          </div>

          {/* Right Column: Dark Form Card */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <h3 className="form-card-title">Send Us a Message</h3>
              
              {submitted ? (
                <div className="form-success-box">
                  <i className="fa-solid fa-circle-check text-crimson" style={{ fontSize: '2.5rem' }}></i>
                  <h4 style={{ color: '#f2f7f0', marginTop: '1rem' }}>Message Received</h4>
                  <p style={{ color: '#d1ded0', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                    Thank you! Our technical engineering desk will review your inquiry and contact you shortly.
                  </p>
                  <a 
                    href="https://wa.me/918891790094?text=Hi%20Alliance%20Team%2C%20I%20just%20submitted%20a%20quote%20request%20on%20your%20website." 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-pill-red"
                    style={{ marginTop: '1.5rem', display: 'inline-flex' }}
                  >
                    <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp Now
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="craft-contact-form">
                  <div className="form-group">
                    <label htmlFor="craft-name" className="form-label">Your Name *</label>
                    <input 
                      id="craft-name"
                      type="text" 
                      placeholder="e.g. Rahul Sharma" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="craft-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="craft-email" className="form-label">Your Email *</label>
                    <input 
                      id="craft-email"
                      type="email" 
                      placeholder="e.g. rahul@example.com" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="craft-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="craft-phone" className="form-label">Phone Number</label>
                    <input 
                      id="craft-phone"
                      type="tel" 
                      placeholder="e.g. +91 88917 90094" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="craft-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="craft-message" className="form-label">Your Message *</label>
                    <textarea 
                      id="craft-message"
                      rows="4" 
                      placeholder="Describe your design, material, or dimensions..." 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="craft-input"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-pill-sage btn-submit-full">
                    Send Message <span className="arrow-icon">➔</span>
                  </button>

                  <div className="form-whatsapp-alternative">
                    <span>Or direct WhatsApp inquiry:</span>
                    <a 
                      href="https://wa.me/918891790094?text=Hi%20Alliance%20Team%2C%20I%20would%20like%20to%20get%20a%20direct%20factory%20quote%20for%20CNC%20cutting%20%2F%20laser%20engraving." 
                      target="_blank" 
                      rel="noreferrer" 
                      className="direct-wa-link"
                    >
                      <i className="fa-brands fa-whatsapp" style={{ color: '#25D366' }}></i>
                      <span>+91 88917 90094</span>
                    </a>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
