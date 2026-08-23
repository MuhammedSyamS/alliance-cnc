import React from 'react';

export default function Hero() {
  return (
    <section className="hero full-video-hero" id="hero">
      {/* 100% Clear Background Video */}
      <video
        className="full-hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/video/cnc_video.mp4" type="video/mp4" />
        <source src="/assets/video/cnc.mp4" type="video/mp4" />
        <source src="/assets/video/hero_cnc_cutting.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Subtle Dark Vignette Shadow for Crisp Contrast */}
      <div className="full-video-dark-vignette"></div>

      <div className="container full-hero-content">
        <h1 className="heading-lg hero-title hero-title-contrast" style={{ maxWidth: '900px' }}>
          Creative Engraving <span className="text-crimson">CNC Router</span> & Laser Cutting Projects
        </h1>

        <p className="hero-sub hero-sub-contrast" style={{ maxWidth: '750px' }}>
          We design and build luxury home and shop interiors in Kerala. From custom CNC jali screens to full room renovations, we fabricate everything in our own factory with direct prices and no middleman markup.
        </p>

        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="#quote" className="btn btn-primary">
            Get a Free Quote
          </a>
          <a href="#about" className="btn btn-outline">
            Learn More
          </a>
        </div>

        <div className="hero-stats hero-stats-contrast" style={{ maxWidth: '850px' }}>
          <div className="stat-item">
            <h4>0.1<span>mm</span></h4>
            <p>Cutting Precision</p>
          </div>
          <div className="stat-item">
            <h4>24<span>hr</span></h4>
            <p>Drawing Review</p>
          </div>
          <div className="stat-item">
            <h4>0<span>%</span></h4>
            <p>Middleman Markup</p>
          </div>
        </div>
      </div>
    </section>
  );
}
