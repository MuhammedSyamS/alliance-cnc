import React from 'react';

export default function About({ onOpenAboutDetails, onNavigateToAbout }) {
  const values = [
    {
      icon: 'fa-gem',
      title: 'Quality',
      desc: 'We never compromise on material integrity or laser edge precision'
    },
    {
      icon: 'fa-lightbulb',
      title: 'Innovation',
      desc: 'Leveraging modern 3D CAD modeling and multi-axis CNC technology'
    },
    {
      icon: 'fa-bullseye',
      title: 'Customer Focus',
      desc: 'Collaborating closely from concept sketch to on-site delivery'
    },
    {
      icon: 'fa-leaf',
      title: 'Sustainability',
      desc: 'Optimized sheet nesting algorithms reducing material waste'
    }
  ];

  return (
    <section className="about-precision-section" id="about-precision">
      <div className="container">
        
        {/* Top Header Row */}
        <div className="about-header-row">
          <div className="about-title-block">
            <div className="section-subtitle-red">
              <span>ABOUT US</span>
              <div className="subtitle-line-red"></div>
            </div>
            <h2 className="about-main-heading">
              Precision in <span className="text-crimson">Every Detail</span>
            </h2>
            <p className="about-main-desc">
              We are a team of innovators, creators and craftsmen passionate about turning ideas into reality. With advanced technology and a commitment to quality, we deliver custom solutions that make an enduring impact.
            </p>
          </div>

          <div className="about-stats-badges">
            <div className="about-stat-chip">
              <span className="stat-number">100+</span>
              <span className="stat-text">Projects Completed</span>
            </div>
            <div className="about-stat-chip">
              <span className="stat-number">15+</span>
              <span className="stat-text">Years of Experience</span>
            </div>
            <div className="about-stat-chip">
              <span className="stat-number">100%</span>
              <span className="stat-text">Client Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Middle Two-Column Block: Workshop Photo + Our Values */}
        <div className="about-columns-grid">
          <div className="about-media-col">
            <div className="workshop-img-frame">
              <img 
                src="/images/craft/workshop_craftsmen.jpg" 
                alt="Craftsmen and Engineers Reviewing Architectural CNC Drawings" 
                className="workshop-main-img"
              />
              <div className="workshop-caption-overlay">
                <span>In-House Fabrication & 3D Drafting Studio</span>
              </div>
            </div>
          </div>

          <div className="about-values-col">
            <div className="values-card-container">
              <h3 className="values-card-title">Our Values</h3>
              <div className="values-list">
                {values.map((v, i) => (
                  <div key={i} className="value-item-row">
                    <div className="value-icon-box">
                      <i className={`fa-solid ${v.icon}`}></i>
                    </div>
                    <div className="value-item-text">
                      <h4 className="value-item-title">{v.title}</h4>
                      <p className="value-item-desc">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Alliance Production Hub & Infrastructure Spotlight */}
        <div className="founder-spotlight-card company-hub-card">
          <div className="founder-portrait-col">
            <img 
              src="/assets/images/cnc_machinery.jpg" 
              alt="Alliance High-Precision CNC Machining & Production Facility" 
              className="founder-portrait-img"
            />
            <div className="founder-role-badge">
              <span>100% IN-HOUSE FACTORY DIRECT</span>
            </div>
          </div>
          <div className="founder-bio-col">
            <span className="founder-lead-tag">INFRASTRUCTURE & FACILITY</span>
            <h3 className="founder-name">Alliance Production & Engineering Hub</h3>
            <p className="founder-designation">
              Industrial Multi-Axis CNC Routers, High-Power Fiber Lasers & 3D Drafting Studio
            </p>
            <p className="founder-bio-text">
              Alliance operates a turnkey spatial fabrication facility in Kochi, Kerala, executing end-to-end architectural routing, laser sheet metal cutting, UV flatbed printing, and bespoke spatial fitouts. With over 15 years of industry experience across India and the GCC, we provide factory-direct precision for marquee retail flagships, luxury residential interiors, and architectural facades.
            </p>
            <div className="founder-contact-pills">
              <a href="tel:+918891790094" className="founder-pill-link">
                <i className="fa-solid fa-phone text-crimson"></i> +91 88917 90094
              </a>
              <a href="https://wa.me/918891790094" target="_blank" rel="noreferrer" className="founder-pill-link whatsapp">
                <i className="fa-brands fa-whatsapp" style={{ color: '#25D366' }}></i> Quick WhatsApp Inquiry
              </a>
              <span className="founder-gcc-pill">
                GCC Coordination: +973 35985107
              </span>
            </div>
          </div>
        </div>

        {/* View Full Story Action */}
        {onNavigateToAbout && (
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <button 
              type="button" 
              className="btn btn-pill-sage"
              onClick={onNavigateToAbout}
            >
              <span>Discover Our Full Story & In-House Machinery</span>
              <span className="arrow-icon">➔</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
