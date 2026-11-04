import React from 'react';

export default function ServicesGrid({ onSelectService, onNavigateToServices }) {
  const services = [
    {
      id: 'cnc-engraving',
      title: 'CNC 3D Routing & Milling',
      desc: 'High-speed 3D relief carving, grooving and deep fluting on wood, acrylic, corian and WPC.',
      img: '/images/craft/laser_wood_plaque.jpg',
      tag: 'WOOD • ACRYLIC • CORIAN'
    },
    {
      id: 'laser-cutting',
      title: 'Fiber Laser Metal Cutting',
      desc: 'Mirror-clean, burr-free slicing up to 12mm in brass, stainless steel and aluminum.',
      img: '/images/craft/hero_laser_sparks.jpg',
      tag: 'BRASS • STEEL • ALUMINUM'
    },
    {
      id: 'laser-printing',
      title: 'UV Flatbed Printing & Marking',
      desc: 'Direct-to-substrate permanent color printing and raised tactile embossing on rigid surfaces.',
      img: '/images/craft/laser_metal_ornate.jpg',
      tag: 'UV PRINT • EMBOSSING'
    },
    {
      id: 'custom-projects',
      title: 'Interior & Facade Design',
      desc: 'Complete architectural interior fit-outs, bespoke commercial joinery, parametric ceilings, and exterior facades.',
      img: '/images/craft/laser_tumbler_mug.jpg',
      tag: 'INTERIOR • FACADE • JOINERY'
    }
  ];

  return (
    <section className="services-overview-section" id="services-overview">
      <div className="container">
        
        <div className="services-overview-header">
          <div className="services-header-text">
            <div className="section-subtitle-red">
              <span>ADVANCED CNC & FABRICATION CAPABILITIES</span>
              <div className="subtitle-line-red"></div>
            </div>
            <h2 className="services-main-heading">
              Heavy-Duty CNC Machining & <br /><span className="text-crimson">Custom Fabrication</span>
            </h2>
            <p className="services-main-desc">
              From 5-axis CNC routing and high-power fiber laser cutting to direct UV printing and turnkey interior fit-outs, we deliver factory-direct precision for architects, builders, and commercial brands.
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
