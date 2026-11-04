import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustPillars from './components/TrustPillars';
import ServicesGrid from './components/ServicesGrid';
import ClientLogoMarquee from './components/ClientLogoMarquee';
import Portfolio from './components/Portfolio';
import About from './components/About';
import QuoteContact from './components/QuoteContact';
import MaterialsTicker from './components/MaterialsTicker';
import Footer from './components/Footer';
import ServiceModal from './components/ServiceModal';
import AboutModal from './components/AboutModal';
import CncEdgeModal from './components/CncEdgeModal';

// Dedicated Detailed In-Depth Pages
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import PortfolioPage from './components/PortfolioPage';
import ClientTestimonialsPage from './components/ClientTestimonialsPage';
import ContactPage from './components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'about' | 'services' | 'work' | 'testimonials' | 'contact'
  const [activeServiceModal, setActiveServiceModal] = useState(null);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isCncEdgeModalOpen, setIsCncEdgeModalOpen] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      const hash = (window.location.hash || '').toLowerCase();
      if (hash === '#about' || hash === '#about-page') {
        setCurrentPage('about');
      } else if (hash === '#services' || hash === '#services-page') {
        setCurrentPage('services');
      } else if (hash === '#work' || hash === '#portfolio' || hash === '#portfolio-page') {
        setCurrentPage('work');
      } else if (hash === '#testimonials' || hash === '#clients' || hash === '#clients-page') {
        setCurrentPage('testimonials');
      } else if (hash === '#contact' || hash === '#contact-page') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (page, anchor) => {
    if (page === 'home') {
      window.location.hash = anchor || '';
      setCurrentPage('home');
      if (anchor) {
        setTimeout(() => {
          const target = document.querySelector(anchor);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.location.hash = `#${page}`;
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="craft-app-wrapper">
      {/* Modern Dark Header with Alliance Brand, Dynamic Active Navigation & Contact Us CTA */}
      <Header 
        currentPage={currentPage}
        onNavigate={navigateTo}
        onNavigateToHome={() => navigateTo('home')}
        onNavigateToTestimonials={() => navigateTo('testimonials')}
      />

      {/* DEDICATED IN-DEPTH PAGES */}
      {currentPage === 'about' && (
        <main>
          <AboutPage 
            onBackToHome={() => navigateTo('home', '#about-precision')} 
            onNavigateToContact={() => navigateTo('contact')}
          />
        </main>
      )}

      {currentPage === 'services' && (
        <main>
          <ServicesPage 
            onBackToHome={() => navigateTo('home', '#services-overview')} 
            onNavigateToContact={() => navigateTo('contact')}
            onSelectServiceModal={(key) => setActiveServiceModal(key)}
          />
        </main>
      )}

      {currentPage === 'work' && (
        <main>
          <PortfolioPage 
            onBackToHome={() => navigateTo('home', '#our-work')} 
            onNavigateToContact={() => navigateTo('contact')}
          />
        </main>
      )}

      {currentPage === 'testimonials' && (
        <main>
          <ClientTestimonialsPage 
            onBackToHome={() => navigateTo('home', '#testimonials')} 
          />
        </main>
      )}

      {currentPage === 'contact' && (
        <main>
          <ContactPage 
            onBackToHome={() => navigateTo('home', '#contact')} 
          />
        </main>
      )}

      {/* HOME PAGE: CONCISE HIGH-IMPACT SUMMARY OF ALL SECTIONS */}
      {currentPage === 'home' && (
        <main>
          {/* 1. HERO: CNC & Laser Cutting Video Backdrop, Headline, Capabilities & Metrics */}
          <Hero onNavigate={navigateTo} />

          {/* 2. CLIENTS & ENTERPRISE LOGO SHOWCASE: Positioned Under Hero */}
          <ClientLogoMarquee 
            onNavigateToTestimonials={() => navigateTo('testimonials')} 
          />

          {/* 3. ABOUT US SUMMARY: Engineering Vision, Facility Standards, Core Values & Metrics */}
          <About 
            onOpenAboutDetails={() => setIsAboutModalOpen(true)} 
            onNavigateToAbout={() => navigateTo('about')}
          />

          {/* 4. CAPABILITIES & TRUST PILLARS */}
          <TrustPillars />

          {/* 5. SERVICES SUMMARY: Core Services (CNC Router, Laser Cutting, Interior Fit-Outs, Exterior Facades) */}
          <ServicesGrid 
            onSelectService={(key) => setActiveServiceModal(key)} 
            onNavigateToServices={() => navigateTo('services')}
          />

          {/* 6. OUR WORK SUMMARY: Before & After Transformations & Flagship Projects */}
          <Portfolio 
            onNavigateToPortfolio={() => navigateTo('work')}
          />

          {/* 7. CONTACT US SUMMARY: Direct Inquiry, WhatsApp Desk, Location & Map */}
          <QuoteContact 
            onNavigateToContact={() => navigateTo('contact')}
          />

          {/* 8. MATERIALS SUMMARY TICKER */}
          <MaterialsTicker />
        </main>
      )}

      {/* Dark Modern Footer with Full Navigation */}
      <Footer 
        onNavigate={navigateTo} 
        onNavigateToTestimonials={() => navigateTo('testimonials')} 
      />

      {/* Technical Modals */}
      <AboutModal 
        isOpen={isAboutModalOpen} 
        onClose={() => setIsAboutModalOpen(false)} 
      />
      <CncEdgeModal 
        isOpen={isCncEdgeModalOpen} 
        onClose={() => setIsCncEdgeModalOpen(false)} 
      />
      <ServiceModal 
        serviceKey={activeServiceModal} 
        onClose={() => setActiveServiceModal(null)} 
      />
    </div>
  );
}
