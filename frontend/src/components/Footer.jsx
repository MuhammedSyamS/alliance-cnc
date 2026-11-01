import React from 'react';

export default function Footer({ onNavigate = () => {}, onNavigateToTestimonials = () => {} }) {
  const currentYear = new Date().getFullYear();

  const handleLink = (e, pageKey, anchor) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(pageKey, anchor);
    } else if (pageKey === 'testimonials') {
      onNavigateToTestimonials();
    }
  };

  return (
    <footer className="craft-footer-main">
      <div className="container">
        
        {/* Main 4-Column Footer Grid */}
        <div className="craft-footer-grid">
          
          {/* Brand Column */}
          <div className="footer-brand-col">
            <a href="#hero" className="craft-brand-logo footer-logo" onClick={(e) => handleLink(e, 'home')}>
              <div className="brand-logo-img-wrap">
                <img src="/assets/logo/alliance%20logo.png" alt="Alliance Logo" className="brand-logo-img" />
              </div>
              <span className="brand-main-name">ALLIANCE</span>
            </a>
            <p className="footer-brand-bio">
              Turnkey architectural CNC routing, industrial fiber laser cutting, high-precision UV printing, and custom spatial fabrications.
            </p>
            <div className="footer-social-row">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://wa.me/918891790094" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-links-col">
            <h4 className="footer-col-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#hero" onClick={(e) => handleLink(e, 'home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleLink(e, 'about')}>About Us</a></li>
              <li><a href="#services" onClick={(e) => handleLink(e, 'services')}>Our Services</a></li>
              <li><a href="#work" onClick={(e) => handleLink(e, 'work')}>Our Work</a></li>
              <li><a href="#testimonials" onClick={(e) => handleLink(e, 'testimonials')}>Clients & Testimonials</a></li>
              <li><a href="#contact" onClick={(e) => handleLink(e, 'contact')}>Contact Us</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-links-col">
            <h4 className="footer-col-heading">Specialized Services</h4>
            <ul className="footer-links-list">
              <li><a href="#services" onClick={(e) => handleLink(e, 'services')}>CNC Router 3D Cutting</a></li>
              <li><a href="#services" onClick={(e) => handleLink(e, 'services')}>Precision Fiber Laser Metal</a></li>
              <li><a href="#services" onClick={(e) => handleLink(e, 'services')}>UV Flatbed Architectural Print</a></li>
              <li><a href="#services" onClick={(e) => handleLink(e, 'services')}>Interior Spatial Fit-Outs</a></li>
              <li><a href="#services" onClick={(e) => handleLink(e, 'services')}>Exterior Facades & Jali</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-contact-col">
            <h4 className="footer-col-heading">Contact</h4>
            <div className="footer-contact-items">
              <a href="tel:+918891790094" className="footer-contact-link">
                <i className="fa-solid fa-phone text-crimson"></i>
                <span>+91 88917 90094</span>
              </a>
              <a href="mailto:info@alliancecnc.in" className="footer-contact-link">
                <i className="fa-solid fa-envelope text-crimson"></i>
                <span>info@alliancecnc.in</span>
              </a>
              <div className="footer-contact-link">
                <i className="fa-solid fa-location-dot text-crimson"></i>
                <span>Kochi, Kerala, India</span>
              </div>
              <div className="footer-contact-link" style={{ fontSize: '0.82rem', color: '#a4b3a2' }}>
                <i className="fa-solid fa-building-shield text-crimson"></i>
                <span>GCC Coordination: +973 35985107</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Location Badge */}
        <div className="craft-footer-bottom">
          <div className="footer-bottom-copy">
            <span>&copy; {currentYear} ALLIANCE INTERIOR & CNC SOLUTIONS. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="footer-bottom-badges">
            <span className="craft-badge-item">📍 FACTORY: KALAMASSERY, ERNAKULAM, KERALA</span>
            <span className="craft-badge-item">✦ 100% FACTORY DIRECT PRICING</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
