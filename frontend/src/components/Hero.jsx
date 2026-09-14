import React from 'react';
import JaliPathTrace from './JaliPathTrace';

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

      {/* CNC Geometric Vector HUD Animation */}
      <JaliPathTrace />

      {/* Subtle Dark Vignette Shadow for Crisp Contrast */}
      <div className="full-video-dark-vignette"></div>

      <div className="container full-hero-content">
        
        {/* MNC Architectural Badge */}
        <div className="hero-executive-badge">
          <span className="live-indicator"></span>
          <span>DIRECTED BY NIYAZ SAMAD • FORMER ARCHITECTURAL DESIGNER FOR ADIDAS & OLYMPIA</span>
        </div>

        <h1 className="heading-lg hero-title hero-title-contrast" style={{ maxWidth: '960px' }}>
          MNC-Standard <span className="text-crimson">Architectural 3D Design</span> & Industrial CNC Fabrication
        </h1>

        <p className="hero-sub hero-sub-contrast" style={{ maxWidth: '820px' }}>
          From landmark Adidas flagships and luxury Gulf commercial fitouts to bespoke Kerala residences. 
          We unify enterprise-grade AutoCAD 2D drafting and 3ds Max spatial rendering with our own 5-axis CNC router and laser manufacturing factory.
        </p>

        {/* Horizontal CTA Buttons */}
        <div className="hero-cta-group">
          <a href="#flagship-projects" className="btn btn-primary hero-btn">
            <i className="fa-solid fa-layer-group"></i> View Flagship Case Studies
          </a>
          <a href="#leadership" className="btn btn-outline hero-btn">
            <i className="fa-solid fa-user-tie"></i> Meet Niyaz Samad
          </a>
          <a href="#quote" className="btn btn-crimson-ghost hero-btn">
            <i className="fa-solid fa-file-arrow-up"></i> Upload CAD / Get Quote
          </a>
        </div>

        {/* Horizontal Statistics Row */}
        <div className="hero-stats hero-stats-contrast" style={{ maxWidth: '950px' }}>
          <div className="stat-item">
            <h4>0.1<span>mm</span></h4>
            <p>German Router Tolerance</p>
          </div>
          <div className="stat-item">
            <h4>50<span>+</span></h4>
            <p>MNC Flagships Delivered</p>
          </div>
          <div className="stat-item">
            <h4>24<span>hr</span></h4>
            <p>CAD Vector & DXF Review</p>
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
