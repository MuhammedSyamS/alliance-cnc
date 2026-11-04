import React, { useState, useEffect } from 'react';

export default function Header({
  currentPage = 'home',
  onNavigate = () => {},
  onNavigateToHome = () => {},
  onNavigateToTestimonials = () => {}
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    if (currentPage !== 'home') {
      setActiveSection(currentPage);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // ScrollSpy to highlight active nav link on Home page
      const sections = ['hero', 'testimonials', 'about-precision', 'services-overview', 'our-work', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

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
    { label: 'Home', page: 'home', href: '#hero', id: 'hero' },
    { label: 'About', page: 'about', href: '#about-precision', id: 'about-precision' },
    { label: 'Services', page: 'services', href: '#services-overview', id: 'services-overview' },
    { label: 'Our Work', page: 'work', href: '#our-work', id: 'our-work' },
    { label: 'Testimonials', page: 'testimonials', href: '#testimonials', id: 'testimonials' }
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigate(link.page);
  };

  const handleBrandClick = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigate('home');
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigate('contact');
  };

  return (
    <>
      <header className={`craft-header ${scrolled ? 'scrolled' : ''}`} id="header">
        <div className="container craft-header-container">
          
          {/* Brand Logo: Logo on top, ALLIANCE directly underneath */}
          <a href="#hero" className="craft-brand-logo" onClick={handleBrandClick}>
            <div className="brand-logo-img-wrap">
              <img src="/assets/logo/alliance%20logo.png" alt="Alliance Logo" className="brand-logo-img" />
            </div>
            <span className="brand-main-name">ALLIANCE</span>
          </a>

          {/* Center Navigation Links (Mathematically Centered) */}
          <nav className={`craft-nav-menu ${mobileOpen ? 'mobile-active' : ''}`} aria-label="Main Navigation">
            <div className="mobile-drawer-header">
              <div className="drawer-logo-wrap" onClick={handleBrandClick} style={{ cursor: 'pointer' }}>
                <div className="brand-logo-img-wrap small">
                  <img src="/assets/logo/alliance%20logo.png" alt="Alliance Logo" className="brand-logo-img" />
                </div>
                <span className="mobile-drawer-title">ALLIANCE</span>
              </div>
              <button 
                className="mobile-drawer-close"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="craft-nav-links">
              {navLinks.map((link) => {
                const isActive =
                  currentPage !== 'home'
                    ? currentPage === link.page
                    : activeSection === link.id || (activeSection === 'hero' && link.page === 'home');

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`craft-nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, link)}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Mobile Drawer Only Actions */}
            <div className="mobile-drawer-actions">
              <a 
                href="#contact" 
                className="header-contact-btn mobile-cta-btn" 
                onClick={handleContactClick}
              >
                <span>Contact Us</span>
                <span className="arrow-icon">➔</span>
              </a>
              <div className="mobile-contact-strip">
                <a href="https://wa.me/918891790094" target="_blank" rel="noreferrer" className="mobile-contact-link whatsapp">
                  <i className="fa-brands fa-whatsapp" style={{ color: '#25D366' }}></i> Direct WhatsApp Desk
                </a>
              </div>
            </div>
          </nav>

          {/* Right Action: Refined 'Contact Us' Pill */}
          <div className="craft-header-right">
            <a 
              href="#contact" 
              className={`header-contact-btn desktop-only ${currentPage === 'contact' ? 'active' : ''}`}
              onClick={handleContactClick}
            >
              <span>Contact Us</span>
              <span className="arrow-icon">➔</span>
            </a>

            {/* Hamburger button for mobile */}
            <button 
              className={`craft-hamburger ${mobileOpen ? 'open' : ''}`} 
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={mobileOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

        </div>
      </header>

      {/* Backdrop overlay for mobile drawer */}
      {mobileOpen && (
        <div 
          className="craft-backdrop active" 
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
