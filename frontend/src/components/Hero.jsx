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
            Industrial CNC Routing & <br />
            <span className="minimal-hero-accent">Precision Laser Solutions</span>
          </h1>

          <p className="minimal-hero-lead">
            High-precision 5-axis CNC machining, industrial fiber laser metal cutting, and complex 3D routing across timber, brass, acrylic, and composite substrates. Manufactured factory-direct in Nedumangad, Trivandrum, with turnkey capabilities for custom architectural interiors and exterior facades.
          </p>

          <div className="minimal-hero-cta-group">
            <a 
              href="#work" 
              className="minimal-hero-btn-solid"
              onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('work'); } }}
            >
              <span>Explore CNC Works</span>
              <span className="cta-arrow">→</span>
            </a>
            <a 
              href="#contact" 
              className="minimal-hero-btn-ghost"
              onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('contact'); } }}
            >
              <span>Request CNC Quote</span>
              <span className="cta-arrow">→</span>
            </a>
          </div>
        </div>

        {/* Quiet Minimalist Editorial Baseline */}
        <div className="minimal-hero-baseline">
          <div className="baseline-cell">
            <span className="baseline-tag">MACHINING & CUTTING</span>
            <span className="baseline-detail">5-Axis CNC & Fiber Laser</span>
          </div>
          <div className="baseline-divider"></div>
          <div className="baseline-cell">
            <span className="baseline-tag">SUBSTRATES</span>
            <span className="baseline-detail">Wood • Metal • Acrylic • Corian</span>
          </div>
          <div className="baseline-divider"></div>
          <div className="baseline-cell">
            <span className="baseline-tag">ARCHITECTURAL</span>
            <span className="baseline-detail">Interior & Exterior Execution</span>
          </div>
          <div className="baseline-divider"></div>
          <div className="baseline-cell">
            <span className="baseline-tag">FACILITY</span>
            <span className="baseline-detail">Nedumangad, Trivandrum (Factory Direct)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
