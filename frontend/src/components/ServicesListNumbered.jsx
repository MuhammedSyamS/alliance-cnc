import React from 'react';

export default function ServicesListNumbered({ onSelectService }) {
  const numberedServices = [
    {
      num: '01',
      id: 'cnc-engraving',
      title: 'CNC Cutting (Priority #1)',
      desc: 'High-precision CNC cutting, routing and sizing across all flat sheet and architectural substrates.',
      points: ['Wood & Plywood Cutting', 'Acrylic & ACP Cutting', 'MDF, WPC & PVC Cutting', 'Gypsum, Foam Board & Forex'],
      img: '/images/craft/laser_wood_plaque.jpg'
    },
    {
      num: '02',
      id: 'laser-cutting',
      title: 'Laser Metal Cutting',
      desc: 'Clean, burr-free industrial cutting for Stainless Steel, GI sheet, and structural metals.',
      points: ['Stainless Steel (SS 304/316)', 'GI Sheet Slicing', 'Metal Fabrication', 'Burr-Free Clean Edges'],
      img: '/images/craft/hero_laser_sparks.jpg'
    },
    {
      num: '03',
      id: 'laser-printing',
      title: 'Precision Engraving',
      desc: 'Specialty surface etching for Glass and Mirror, alongside Wood, Acrylic, and metal engraving.',
      points: ['Mirror Engraving Only', 'Glass Engraving Only', 'Wood & Acrylic 3D Engraving', 'Architectural Branding'],
      img: '/images/craft/laser_metal_ornate.jpg'
    },
    {
      num: '04',
      id: 'custom-projects',
      title: 'Custom Architectural Projects',
      desc: 'Bespoke commercial joinery, decorative jali screens, acoustic baffles, and turnkey installations.',
      points: ['Jali Lattice Screens', 'Interior Fit-Outs', 'Exterior Facades', 'Architectural Signage'],
      img: '/images/craft/laser_tumbler_mug.jpg'
    }
  ];

  return (
    <section className="numbered-services-section" id="services-deepdive">
      {/* Dark Sub-Header Banner matching mockup */}
      <div className="numbered-services-banner">
        <div className="banner-bg-dark">
          <img src="/images/craft/hero_laser_sparks.jpg" alt="" className="banner-spark-img" />
          <div className="banner-dark-overlay"></div>
        </div>
        <div className="container banner-text-container">
          <div className="section-subtitle-red">
            <span>SERVICES</span>
            <div className="subtitle-line-red"></div>
          </div>
          <h2 className="banner-title">Our Services</h2>
          <p className="banner-desc">
            From CNC cutting to laser engraving, we offer a complete range of services to bring your ideas to life.
          </p>
        </div>
      </div>

      {/* White background numbered rows */}
      <div className="numbered-list-container">
        <div className="container">
          <div className="numbered-services-stack">
            {numberedServices.map((srv) => (
              <div 
                key={srv.num} 
                className="numbered-service-card"
                onClick={() => onSelectService && onSelectService(srv.id)}
              >
                <div className="service-card-media-col">
                  <img 
                    src={srv.img} 
                    alt={srv.title} 
                    loading="lazy" 
                    className="numbered-service-img"
                  />
                  <span className="numbered-card-badge">{srv.num}</span>
                </div>

                <div className="service-card-details-col">
                  <span className="service-number-label">{srv.num}</span>
                  <h3 className="service-title-text">{srv.title}</h3>
                  <p className="service-desc-text">{srv.desc}</p>
                  
                  <ul className="service-points-list">
                    {srv.points.map((pt, i) => (
                      <li key={i}>
                        <span className="point-bullet-dot"></span>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="service-row-action">
                    <span className="action-explore-link">
                      Configure & Quote <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
