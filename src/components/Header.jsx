import React, { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="arch-header white-navbar" id="header">
      <div className="container header-container">
        <a href="#hero" className="logo-link">
          <img 
            src="/assets/logo/alliance_new_logo.png" 
            alt="ALLIANCE Interior & Exterior CNC Solutions Logo" 
            className="client-logo-img"
          />
        </a>

        <nav className={`nav-menu ${mobileOpen ? 'mobile-active' : ''}`}>
          <a href="#hero" className="nav-link active" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="#about" className="nav-link" onClick={() => setMobileOpen(false)}>About Us</a>
          <a href="#services" className="nav-link" onClick={() => setMobileOpen(false)}>Services</a>
          <a href="#quote" className="nav-link" onClick={() => setMobileOpen(false)}>Contact</a>
          
          <div className="mobile-cta-wrapper">
            <a href="#quote" className="btn btn-primary" style={{ width: '100%' }} onClick={() => setMobileOpen(false)}>
              Get a Free Quote
            </a>
          </div>
        </nav>

        <div className="nav-actions">
          <a href="#quote" className="nav-cta-btn desktop-cta">
            Get a Quote
          </a>
          <button 
            className={`mobile-menu-btn ${mobileOpen ? 'open' : ''}`} 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
