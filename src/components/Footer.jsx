import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#hero" className="logo-link">
              <img 
                src="/assets/logo/alliance_new_logo_dark.png" 
                alt="ALLIANCE - A Complete Interior & Exterior Design Solutions Logo" 
                style={{ height: '38px', width: 'auto' }}
              />
            </a>
            <p>
              Combining custom Kerala home interior design with in-house industrial CNC cutting power for villas, homes, shops, and offices across Kerala, India.
            </p>
          </div>

          <div>
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links">
              <a href="#hero">Home</a>
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#quote">Contact Us</a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Kerala Services</h4>
            <div className="footer-links">
              <a href="#services">Kerala Villa & Home Interiors</a>
              <a href="#services">Shop & Commercial Fit-outs</a>
              <a href="#services">CNC Jali Wood & WPC Screens</a>
              <a href="#services">3D Carved Wall Panels</a>
              <a href="#services">ACP Building Facades</a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Kerala Factory Address</h4>
            <p style={{ color: '#A19A8F', fontSize: '0.88rem', lineHeight: '1.6' }}>
              Industrial Zone, Kalamassery, Ernakulam<br />
              Kochi, Kerala - 683104, India<br />
              Direct Phone: +91 98470 12345 / 0484 2345678<br />
              Email: quotes@alliance-kerala.com
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; 2026 Alliance Complete Interior & Exterior Design Solutions. Kochi, Kerala, India. All Rights Reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Kerala Factory Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
