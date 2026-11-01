import React from 'react';

export default function Hero({ onNavigate }) {
  return (
    <section className="minimal-hero" id="hero">
      {/* Cinematic Machine & Craft Video Backdrop */}
      <div className="minimal-hero-bg">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/craft/hero_laser_sparks.jpg"
          className="minimal-hero-video"
        >
          <source src="/assets/video/hero_cnc_cutting.mp4" type="video/mp4" />
          <source src="/assets/video/cnc%20video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container minimal-hero-container">
        {/* Main Editorial Content */}
        <div className="minimal-hero-body">
          <h1 className="minimal-hero-title">
            Complete Interior & Exterior <br />
            <span className="minimal-hero-accent">Design Solutions</span>
          </h1>

          <p className="minimal-hero-lead">
            Bespoke 3D architectural panels, luxury facades, and turnkey commercial interior fit-outs. Manufactured factory-direct across timber, sheet metal, acrylic, and composite substrates.
          </p>

          <div className="minimal-hero-cta-group">
            <a 
              href="#work" 
              className="minimal-hero-btn-solid"
              onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('work'); } }}
            >
              <span>Explore Works</span>
              <span className="cta-arrow">→</span>
            </a>
            <a 
              href="#contact" 
              className="minimal-hero-btn-ghost"
              onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('contact'); } }}
            >
              <span>Start a Project</span>
              <span className="cta-arrow">→</span>
            </a>
          </div>
        </div>

        {/* Quiet Minimalist Editorial Baseline */}
        <div className="minimal-hero-baseline">
          <div className="baseline-cell">
            <span className="baseline-tag">FACILITY</span>
            <span className="baseline-detail">Kochi, Kerala</span>
          </div>
          <div className="baseline-divider"></div>
          <div className="baseline-cell">
            <span className="baseline-tag">SUBSTRATES</span>
            <span className="baseline-detail">Wood • Metal • Acrylic • Corian</span>
          </div>
          <div className="baseline-divider"></div>
          <div className="baseline-cell">
            <span className="baseline-tag">EXECUTION</span>
            <span className="baseline-detail">Turnkey Commercial & Retail</span>
          </div>
          <div className="baseline-divider"></div>
          <div className="baseline-cell">
            <span className="baseline-tag">EXPERIENCE</span>
            <span className="baseline-detail">15+ Years Factory Direct</span>
          </div>
        </div>
      </div>
    </section>
  );
}
