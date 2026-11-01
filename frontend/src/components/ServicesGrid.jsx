import React from 'react';

export default function ServicesGrid({ onSelectService, onNavigateToServices }) {
  const services = [
    {
      id: 'cnc-engraving',
      title: 'CNC Engraving',
      desc: 'Detailed engravings on wood, acrylic, metal and more.',
      img: '/images/craft/laser_wood_plaque.jpg',
      tag: 'WOOD • ACRYLIC • METAL'
    },
    {
      id: 'laser-cutting',
      title: 'Laser Cutting',
      desc: 'Clean and precise cuts for various materials.',
      img: '/images/craft/hero_laser_sparks.jpg',
      tag: 'MDF • STEEL • ACRYLIC'
    },
    {
      id: 'laser-printing',
      title: 'Laser Printing',
      desc: 'High-quality prints on wood, acrylic, metal and other surfaces.',
      img: '/images/craft/laser_metal_ornate.jpg',
      tag: 'UV PRINT • MARKING'
    },
    {
      id: 'custom-projects',
      title: 'Custom Projects',
      desc: 'Personalized gifts, signage, branding and more.',
      img: '/images/craft/laser_tumbler_mug.jpg',
      tag: 'GIFTS • SIGNAGE • BRANDING'
    }
  ];

  return (
    <section className="services-overview-section" id="services-overview">
      <div className="container">
        
        <div className="services-overview-header">
          <div className="services-header-text">
            <div className="section-subtitle-red">
              <span>OUR SERVICES</span>
              <div className="subtitle-line-red"></div>
            </div>
            <h2 className="services-main-heading">
              Everything You Need<br />in <span className="text-crimson">One Place</span>
            </h2>
            <p className="services-main-desc">
              We offer a complete range of CNC and laser services to meet the needs of businesses, creators and individuals.
            </p>
          </div>

          <div className="services-header-action">
            {onNavigateToServices ? (
              <button type="button" className="btn-inline-explore" onClick={onNavigateToServices}>
                Explore All Services <span className="arrow-icon">➔</span>
              </button>
            ) : (
              <a href="#services-deepdive" className="btn-inline-explore">
                Explore All Services <span className="arrow-icon">➔</span>
              </a>
            )}
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="services-cards-grid">
          {services.map((item) => (
            <div 
              key={item.id} 
              className="service-feature-card"
              onClick={() => onSelectService && onSelectService(item.id)}
            >
              <div className="service-card-img-wrapper">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  loading="lazy"
                  className="service-card-img"
                />
                <div className="service-card-hover-overlay">
                  <span>Explore Specs</span>
                </div>
              </div>
              <div className="service-card-body">
                <h3 className="service-card-title">{item.title}</h3>
                <p className="service-card-desc">{item.desc}</p>
                <div className="service-card-footer">
                  <span className="service-card-tag">{item.tag}</span>
                  <div className="service-card-arrow-circle">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Services Page CTA */}
        {onNavigateToServices && (
          <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
            <button 
              type="button" 
              className="btn btn-pill-sage"
              onClick={onNavigateToServices}
            >
              <span>Explore All 5 Specialized Services & Technical Specifications</span>
              <span className="arrow-icon">➔</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
