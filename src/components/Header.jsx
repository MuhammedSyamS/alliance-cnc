import React, { useState, useEffect } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-wrapper ${scrolled ? 'is-scrolled' : ''}`} id="header">
      <div className="container">
        <div className="floating-navbar">
          <a href="#hero" className="logo-link">
            <img 
              src="/assets/logo/alliance_new_logo.png" 
              alt="ALLIANCE Logo" 
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
            <a href="#quote" className="header-phone-link">
              <span className="phone-icon">📞</span>
              <span className="phone-num">+91 98470 12345</span>
            </a>
            <a href="#quote" className="nav-cta-pill">
              GET QUOTE
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
      </div>
    </header>
  );
}
