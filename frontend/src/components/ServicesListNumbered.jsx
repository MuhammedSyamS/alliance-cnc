import React from 'react';

export default function ServicesListNumbered({ onSelectService }) {
  const numberedServices = [
    {
      num: '01',
      id: 'cnc-engraving',
      title: 'CNC Engraving',
      desc: 'Detailed high-accuracy engravings on wood, acrylic, metal and more.',
      points: ['Wood Engraving', 'Acrylic Engraving', 'Metal Engraving', 'Custom Designs'],
      img: '/images/craft/laser_wood_plaque.jpg'
    },
    {
      num: '02',
      id: 'laser-cutting',
      title: 'Laser Cutting',
      desc: 'Clean and precise cuts for various architectural and custom materials.',
      points: ['Wood Cutting', 'Acrylic Cutting', 'Metal Cutting', 'MDF Cutting', 'Custom Shapes'],
      img: '/images/craft/hero_laser_sparks.jpg'
    },
    {
      num: '03',
      id: 'laser-printing',
      title: 'Laser Printing & Marking',
      desc: 'Vibrant and permanent marking on wood, acrylic, metal and other surfaces.',
      points: ['UV Printing', 'Laser Marking', 'Colour Printing', 'Custom Branding'],
      img: '/images/craft/laser_metal_ornate.jpg'
    },
    {
      num: '04',
      id: 'custom-projects',
      title: 'Custom Projects',
      desc: 'Personalized gifts, luxury retail fixtures, architectural signage and more.',
      points: ['Corporate Gifts', 'Home Decor', 'Signage', 'Product Branding'],
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
