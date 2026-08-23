import React, { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header" id="header">
      <div className="container header-container">
        <a href="#hero" className="logo-link">
          <img 
            src="/assets/logo/alliance_new_logo.png" 
            alt="ALLIANCE - Complete Interior & Exterior Design Solutions Logo" 
            className="client-logo-img"
          />
        </a>

        <nav className={`nav-menu ${mobileOpen ? 'mobile-active' : ''}`}>
          <a href="#hero" className="nav-link active" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="#about" className="nav-link" onClick={() => setMobileOpen(false)}>About Us</a>
          <a href="#services" className="nav-link" onClick={() => setMobileOpen(false)}>Services</a>
          <a href="#quote" className="nav-link" onClick={() => setMobileOpen(false)}>Contact</a>
        </nav>

        <div className="nav-actions">
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
