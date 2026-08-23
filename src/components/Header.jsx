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
    <header className={`arch-header ${scrolled ? 'scrolled' : ''}`} id="header">
      <div className="container header-container">
        {/* Logo Left */}
        <a href="#hero" className="logo-link">
          <img 
            src="/assets/logo/alliance_new_logo.png" 
            alt="ALLIANCE Interior & Exterior CNC Solutions Logo" 
            className="client-logo-img"
          />
        </a>

        {/* Links Center (Desktop) / Slide-Out Dark Drawer (Mobile < 768px) */}
        <nav className={`nav-menu ${mobileOpen ? 'mobile-active' : ''}`}>
          <a href="#hero" className="nav-link active" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="#about" className="nav-link" onClick={() => setMobileOpen(false)}>About Us</a>
          <a href="#services" className="nav-link" onClick={() => setMobileOpen(false)}>Services</a>
          <a href="#quote" className="nav-link" onClick={() => setMobileOpen(false)}>Contact</a>
          
          <div className="mobile-cta-wrapper">
            <a href="#quote" className="btn btn-primary" style={{ width: '100%', minHeight: '48px' }} onClick={() => setMobileOpen(false)}>
              GET A QUOTE
            </a>
          </div>
        </nav>

        {/* Primary Red CTA Right (Desktop) & Burger Icon (Mobile) */}
        <div className="nav-actions">
          <a href="#quote" className="nav-cta-btn desktop-cta">
            GET A QUOTE
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
