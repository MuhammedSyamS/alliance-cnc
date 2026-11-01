import React from 'react';

export default function CncEdge({ onOpenMaterialDetails }) {
  const features = [
    {
      icon: 'fa-gear',
      title: 'Advanced Technology',
      desc: 'State-of-the-art CNC and laser machines'
    },
    {
      icon: 'fa-users',
      title: 'Skilled Team',
      desc: 'Experienced professionals who care about details'
    },
    {
      icon: 'fa-shield-halved',
      title: 'Quality Assurance',
      desc: 'Every project checked for perfection'
    },
    {
      icon: 'fa-clock',
      title: 'On-Time Delivery',
      desc: 'Your time matters to us'
    }
  ];

  return (
    <section className="crafted-perfection-section" id="why-choose-us">
      <div className="container">
        <div className="crafted-content-grid">
          
          {/* Left Column: Heading & Learn More */}
          <div className="crafted-text-col">
            <div className="section-subtitle-red">
              <span>WHY CHOOSE ALLIANCE?</span>
              <div className="subtitle-line-red"></div>
            </div>
            <h2 className="crafted-main-title">
              Crafted for<br /><span className="text-crimson">Perfection</span>
            </h2>
            <p className="crafted-main-desc">
              We combine advanced technology with skilled craftsmanship to deliver exceptional results. Our focus is on quality, precision and customer satisfaction.
            </p>
            <div className="crafted-actions-row">
              <a href="#about-precision" className="btn btn-pill-red">
                Learn More <span className="arrow-icon">➔</span>
              </a>
              <a href="tel:+918891790094" className="btn btn-pill-glass">
                <i className="fa-solid fa-phone"></i> +91 88917 90094
              </a>
            </div>
          </div>

          {/* Right Column: 4 Glowing Feature Cards with Circular Red Icons */}
          <div className="crafted-features-col">
            <div className="crafted-cards-grid">
              {features.map((feat, idx) => (
                <div key={idx} className="crafted-feature-item">
                  <div className="crafted-icon-circle">
                    <i className={`fa-solid ${feat.icon}`}></i>
                  </div>
                  <div className="crafted-feature-text">
                    <h3 className="crafted-feature-name">{feat.title}</h3>
                    <p className="crafted-feature-sub">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Background Ornament from reference */}
      <div className="crafted-bg-ornament" aria-hidden="true">
        <img 
          src="/images/craft/laser_metal_ornate.jpg" 
          alt="" 
          className="crafted-ornament-img"
        />
      </div>
    </section>
  );
}
