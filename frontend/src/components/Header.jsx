import React, { useState, useEffect } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for sticky glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open & handle Escape key
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Global Brands', href: '#enterprise-clients' },
    { label: 'Flagships', href: '#flagship-projects' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#quote' }
  ];

  return (
    <>
      <header className={`arch-header ${scrolled ? 'scrolled' : ''}`} id="header">
        <div className="container header-container">
          
          {/* Logo Left */}
          <a href="#hero" className="logo-link" onClick={() => setMobileOpen(false)}>
            <img 
              src="/assets/logo/alliance_new_logo.png" 
              alt="ALLIANCE Interior & Exterior CNC Solutions Logo" 
              className="client-logo-img"
            />
          </a>

          {/* Navigation Links (Desktop & Mobile Drawer) */}
          <nav className={`nav-menu ${mobileOpen ? 'mobile-active' : ''}`} aria-label="Main Navigation">
            <div className="mobile-drawer-header">
              <span className="mobile-drawer-title">NAVIGATION MENU</span>
              <button 
                className="mobile-drawer-close"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="nav-links-list">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <div className="mobile-cta-wrapper">
              <a 
                href="#quote" 
                className="btn btn-primary mobile-quote-btn" 
                onClick={() => setMobileOpen(false)}
              >
                <i className="fa-solid fa-file-invoice"></i> GET A DIRECT FACTORY QUOTE
              </a>
              <div className="mobile-drawer-contact">
                <a href="tel:+919847012345" className="mobile-contact-pill">
                  <i className="fa-solid fa-phone text-crimson"></i> +91 98470 12345
                </a>
                <a href="https://wa.me/919847012345" target="_blank" rel="noreferrer" className="mobile-contact-pill">
                  <i className="fa-brands fa-whatsapp" style={{ color: '#25D366' }}></i> WhatsApp
                </a>
              </div>
            </div>
          </nav>

          {/* Right Action: Desktop CTA Button & Responsive Hamburger */}
          <div className="nav-actions">
            <a href="#quote" className="nav-cta-btn desktop-cta">
              <i className="fa-solid fa-file-invoice"></i> GET A QUOTE
            </a>

            <button 
              className={`mobile-menu-btn ${mobileOpen ? 'open' : ''}`} 
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              aria-expanded={mobileOpen}
            >
              <span className="menu-bar bar-1"></span>
              <span className="menu-bar bar-2"></span>
              <span className="menu-bar bar-3"></span>
            </button>
          </div>

        </div>
      </header>

      {/* Backdrop overlay for mobile drawer */}
      {mobileOpen && (
        <div 
          className="nav-backdrop active" 
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
