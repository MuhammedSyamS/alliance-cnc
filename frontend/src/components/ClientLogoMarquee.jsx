import React from 'react';
import { clientsData } from '../data/clientsData';

export default function ClientLogoMarquee({ onNavigateToTestimonials }) {
  // Split into two rows for rich visual interest
  const rowOne = clientsData.slice(0, 10);
  const rowTwo = clientsData.slice(10, 20);

  return (
    <section className="client-marquee-section" id="testimonials">
      <div className="container">
        
        {/* Header Block */}
        <div className="client-marquee-header">
          <div className="section-subtitle-red">
            <span>CLIENTS & TESTIMONIALS</span>
            <div className="subtitle-line-red"></div>
          </div>
          <h2 className="client-marquee-title">
            Trusted by <span className="text-crimson">Industry Leaders</span> & Global Brands
          </h2>
          <p className="client-marquee-sub">
            From international sportswear flagships and French luxury boutiques to commercial wellness centers and corporate headquarters across India and the GCC.
          </p>
          
          <div className="client-marquee-actions">
            <button 
              className="btn btn-pill-sage client-view-all-btn"
              onClick={onNavigateToTestimonials}
            >
              <span>View All 20+ Client Stories & Testimonials</span>
              <span className="arrow-icon">➔</span>
            </button>
          </div>
        </div>

      </div>

      {/* Full-Width Infinite Marquee Track 1 (Left Scrolling) */}
      <div className="marquee-outer-container">
        <div className="marquee-track marquee-scroll-left">
          {/* Double the array for seamless infinite loop */}
          {[...rowOne, ...rowOne].map((client, idx) => (
            <div 
              key={`row1-${client.id}-${idx}`} 
              className="client-logo-card"
              onClick={onNavigateToTestimonials}
              title={`View ${client.name} Case Study & Testimonial`}
            >
              <div className="client-card-img-box">
                <img 
                  src={client.logo} 
                  alt={`${client.name} Logo`} 
                  className="client-card-img" 
                  loading="lazy"
                />
              </div>
              <div className="client-card-info">
                <span className="client-card-name">{client.name}</span>
                <span className="client-card-cat">{client.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Width Infinite Marquee Track 2 (Right Scrolling) */}
      <div className="marquee-outer-container reverse-track">
        <div className="marquee-track marquee-scroll-right">
          {[...rowTwo, ...rowTwo].map((client, idx) => (
            <div 
              key={`row2-${client.id}-${idx}`} 
              className="client-logo-card"
              onClick={onNavigateToTestimonials}
              title={`View ${client.name} Case Study & Testimonial`}
            >
              <div className="client-card-img-box">
                <img 
                  src={client.logo} 
                  alt={`${client.name} Logo`} 
                  className="client-card-img" 
                  loading="lazy"
                />
              </div>
              <div className="client-card-info">
                <span className="client-card-name">{client.name}</span>
                <span className="client-card-cat">{client.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Proof Strip */}
      <div className="container">
        <div className="client-proof-strip">
          <div className="proof-item">
            <i className="fa-solid fa-shield-halved text-crimson"></i>
            <span>100% In-House Factory Direct Fabrication</span>
          </div>
          <div className="proof-item">
            <i className="fa-solid fa-certificate text-crimson"></i>
            <span>15+ Years Commercial Retail Architecture</span>
          </div>
          <div className="proof-item">
            <i className="fa-solid fa-earth-americas text-crimson"></i>
            <span>GCC & Pan-India Turnkey Deliveries</span>
          </div>
        </div>
      </div>

    </section>
  );
}

