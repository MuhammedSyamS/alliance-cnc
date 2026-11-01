import React, { useState } from 'react';
import BeforeAfterCard from './BeforeAfterCard';
import LightboxModal from './LightboxModal';
import { BEFORE_AFTER_WORKS } from '../data/beforeAfterData';

const ALL_PORTFOLIO_PROJECTS = [
  {
    id: 'adidas-parametric-ceiling',
    title: 'Adidas Performance 3D Coffered Ceiling',
    category: '3D CNC Milling',
    client: 'Adidas Global Flagship',
    location: 'Al Liwan, Bahrain',
    img: '/images/Works Done/20220428_111750.jpg',
    material: 'Natural Solid Hardwood & High-Load Trussing',
    scope: 'Spectacular geometric 3D parametric wooden coffered ceiling milled with micro-precision on multi-axis CNC machinery, paired with integrated recessed spotlight matrices.',
    specs: ['Interlocking 3D Diamond Grid', 'Multi-Axis CNC Milling', 'Integrated Gimbal Spotlight Matrix', 'Polyurethane High-Traffic Coat', 'Factory Pre-Fabricated Interlocking Joints']
  },
  {
    id: 'baindemer-saint-tropez',
    title: 'Bain de Mer Luxury Boutique',
    category: 'Luxury Retail Joinery',
    client: 'Bain de Mer France',
    location: 'Marasi Galleria, Bahrain',
    img: '/images/Works Done/Baindaimer.jpg',
    material: 'CNC Fluted Wall Panels, Terrazzo, Minimalist Steel',
    scope: 'Turnkey architectural fitout for the French Riviera luxury resort wear icon. Features custom CNC fluted wall paneling, perimeter recessed cove lighting, and minimalist terrazzo cash counter.',
    specs: ['CNC Fluted Feature Wall', 'Recessed Micro-Cove Lighting', 'Custom Terrazzo Cash-Wrap', 'Matte Black Display Racks', 'Invisible Joint Edge Banding']
  },
  {
    id: 'artdeco-luxury-counter',
    title: 'Artdeco Cosmetics Island Architecture',
    category: 'Commercial Fit-Out',
    client: 'Artdeco Cosmetics Europe',
    location: 'Premier Department Store',
    img: '/images/Works Done/Artdeco 2.jpg',
    material: 'Multi-Tier Acrylic Trays, Corian Cash-Wrap, LED Channels',
    scope: 'Curved solid surface Corian cash-wrap, backlit visual acrylic lightboxes, multi-tier cosmetic trays, and high-gloss enamel millwork executed with millimeter tolerances.',
    specs: ['Curved Solid Surface Routing', 'Multi-Tier Acrylic Trays', 'Backlit Visual Lightboxes', 'High-Gloss Enamel Millwork', 'Direct Integrated LED Driver Pockets']
  },
  {
    id: 'reebok-retail-space',
    title: 'Reebok Commercial Flagship Architecture',
    category: 'Commercial Fit-Out',
    client: 'Reebok International',
    location: 'Commercial Mall Flagship',
    img: '/images/Works Done/Reebok.JPG',
    material: 'Architectural Timber Baffles & Display Modules',
    scope: 'Turnkey architectural joinery, modular acoustic ceiling baffles, laser-marked metal logo elements, and custom high-traffic commercial retail wall display fixtures.',
    specs: ['Acoustic Cloud Baffles', 'Precision CNC Joinery', 'Recessed LED Strips', 'Custom Display Fixtures', 'Durable Scratch-Resistant Clear Coat']
  },
  {
    id: 'baindemer-full-view',
    title: 'Bain de Mer Full Spatial Fitout & Joinery',
    category: 'Luxury Retail Joinery',
    client: 'Bain de Mer France',
    location: 'Marasi Galleria, Bahrain',
    img: '/images/Works Done/20241019_100035.jpg',
    material: 'Custom CNC Fluted Hardwood, Brass Inlays, Terrazzo',
    scope: 'Full comprehensive floor-to-ceiling execution showing perimeter garment display bays, fluted timber cladding, cashier joinery, and architectural ceiling details.',
    specs: ['Bespoke Cash-Wrap Island', 'Perimeter LED Lighting Cove', 'Concealed Storage Millwork', 'Architectural Brass Metal Trims']
  },
  {
    id: 'artdeco-frontage',
    title: 'Artdeco Cosmetics Island Architectural Elevation',
    category: 'Commercial Fit-Out',
    client: 'Artdeco Cosmetics Europe',
    location: 'Premier Department Store',
    img: '/images/Works Done/Artdeco.jpg',
    material: 'Curved Acrylic, High-Gloss Polyurethane, LED Matrices',
    scope: 'Front perspective highlighting the organic curved Corian countertops, mirror-finish stainless steel inlays, and backlit cosmetic presentation displays.',
    specs: ['Thermoformed Acrylic Radii', 'Recessed Floor Lighting', 'Dust-Proof Product Cavities', 'Matte White Polyurethane Spray Finish']
  }
];

export default function PortfolioPage({ onBackToHome, onNavigateToContact }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'flagship' | 'before-after'
  const [activeLightbox, setActiveLightbox] = useState(null);

  const handleOpenLightbox = (item) => {
    setActiveLightbox({
      title: item.title,
      img: item.img || item.afterImg,
      category: item.category,
      client: item.client || 'Enterprise Project',
      location: item.location || 'Turnkey Handover',
      material: item.material || 'Architectural Specification',
      specs: item.specs || ['Turnkey Factory Direct Machining', 'Precision Edge Tolerances', 'On-Site Delivery Guarantee']
    });
  };

  return (
    <div className="dedicated-page-wrapper">
      
      {/* Top Breadcrumb & Back Bar */}
      <div className="testimonials-top-bar">
        <div className="container testimonials-top-bar-container">
          <button className="btn-back-home" onClick={onBackToHome}>
            <i className="fa-solid fa-arrow-left"></i>
            <span>Back to Home</span>
          </button>
          <div className="testimonials-breadcrumbs">
            <span onClick={onBackToHome} className="crumb-link">Home</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">Our Work & Portfolio</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="testimonials-hero-section">
        <div className="container">
          <div className="section-subtitle-red">
            <span>ARCHITECTURAL REALIZATIONS & HANDOVERS</span>
            <div className="subtitle-line-red"></div>
          </div>
          <h1 className="testimonials-hero-title">
            The Work of <span className="text-crimson">Alliance</span>
          </h1>
          <p className="testimonials-hero-sub">
            Explore our curated portfolio of global flagship retail fitouts, 3D parametric ceilings, luxury joinery, and interactive before-and-after spatial transformations across India and the GCC.
          </p>

          {/* Quick Metrics Bar */}
          <div className="testimonials-stats-bar">
            <div className="stat-pill-box">
              <span className="stat-bold-num">100+</span>
              <span className="stat-label">Handovers Completed</span>
            </div>
            <div className="stat-pill-box">
              <span className="stat-bold-num">GCC & India</span>
              <span className="stat-label">Geographic Reach</span>
            </div>
            <div className="stat-pill-box">
              <span className="stat-bold-num">4</span>
              <span className="stat-label">MNC Flagships</span>
            </div>
            <div className="stat-pill-box">
              <span className="stat-bold-num">100%</span>
              <span className="stat-label">Turnkey Precision</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Header */}
      <section style={{ padding: '2rem 0', background: '#edf1ea', borderBottom: '1px solid #dbe5d8', position: 'sticky', top: '74px', zIndex: 10, backdropFilter: 'blur(10px)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveTab('all')}
              className={`category-pill-btn ${activeTab === 'all' ? 'active' : ''}`}
            >
              <span>All Projects ({ALL_PORTFOLIO_PROJECTS.length + BEFORE_AFTER_WORKS.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('flagship')}
              className={`category-pill-btn ${activeTab === 'flagship' ? 'active' : ''}`}
            >
              <span>Flagship Commercial Works ({ALL_PORTFOLIO_PROJECTS.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('before-after')}
              className={`category-pill-btn ${activeTab === 'before-after' ? 'active' : ''}`}
            >
              <span>Before & After Transformations ({BEFORE_AFTER_WORKS.length})</span>
            </button>
          </div>

          <span style={{ fontSize: '0.82rem', color: '#60685f', fontWeight: 600 }}>
            Click any project to inspect high-res specifications
          </span>
        </div>
      </section>

      {/* Main Showcase Section */}
      <section style={{ padding: '5rem 0', background: '#FFFFFF', color: '#1d1f1d' }}>
        <div className="container">
          
          {/* Flagship Projects Grid */}
          {(activeTab === 'all' || activeTab === 'flagship') && (
            <div style={{ marginBottom: activeTab === 'all' ? '5rem' : '0' }}>
              {activeTab === 'all' && (
                <div style={{ marginBottom: '2.5rem' }}>
                  <div className="section-subtitle-red">
                    <span>FLAGSHIP COMMERCIAL HANDOVERS</span>
                    <div className="subtitle-line-red"></div>
                  </div>
                  <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#1d1f1d' }}>
                    Turnkey Architectural Projects
                  </h2>
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                {ALL_PORTFOLIO_PROJECTS.map((project) => (
                  <article 
                    key={project.id}
                    onClick={() => handleOpenLightbox(project)}
                    style={{ 
                      background: '#f7faf5', 
                      borderRadius: '18px', 
                      border: '1px solid #dbe5d8', 
                      overflow: 'hidden', 
                      cursor: 'pointer',
                      boxShadow: '0 6px 20px rgba(29,31,29,0.04)',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 16px 36px rgba(29,31,29,0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(29,31,29,0.04)';
                    }}
                  >
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden', background: '#1d1f1d' }}>
                      <img 
                        src={project.img} 
                        alt={project.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        loading="lazy"
                      />
                      <span style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(29,31,29,0.85)', color: '#cfe3c8', padding: '4px 10px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em' }}>
                        {project.category}
                      </span>
                    </div>

                    <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <div style={{ fontSize: '0.82rem', color: '#60685f', fontWeight: 600, marginBottom: '0.35rem' }}>
                        <span>{project.client}</span> • <span>{project.location}</span>
                      </div>
                      
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1d1f1d', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                        {project.title}
                      </h3>

                      <p style={{ fontSize: '0.88rem', color: '#353834', lineHeight: 1.6, marginBottom: '1.25rem', flexGrow: 1 }}>
                        {project.scope}
                      </p>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', paddingTop: '1rem', borderTop: '1px solid #e3ede0' }}>
                        {project.specs.slice(0, 3).map((spec, sIdx) => (
                          <span key={sIdx} style={{ background: '#edf1ea', border: '1px solid #dbe5d8', color: '#1d1f1d', fontSize: '0.72rem', padding: '3px 8px', borderRadius: '4px' }}>
                            ✓ {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Before & After Interactive Section */}
          {(activeTab === 'all' || activeTab === 'before-after') && (
            <div>
              {activeTab === 'all' && (
                <div style={{ marginBottom: '2.5rem' }}>
                  <div className="section-subtitle-red">
                    <span>INTERACTIVE TRANSFORMATION DOSSIER</span>
                    <div className="subtitle-line-red"></div>
                  </div>
                  <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#1d1f1d' }}>
                    Raw Site to Turnkey Realization
                  </h2>
                  <p style={{ color: '#60685f', fontSize: '0.98rem' }}>
                    Drag the interactive split handle to compare raw site substructures with Alliance completed handovers.
                  </p>
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                {BEFORE_AFTER_WORKS.map((item) => (
                  <BeforeAfterCard 
                    key={item.id} 
                    item={item} 
                    onOpenLightbox={(imgSrc, title) => handleOpenLightbox({ ...item, img: imgSrc, title: title || item.title })}
                  />
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section style={{ padding: '4.5rem 0', background: '#1d1f1d', color: '#f2f7f0', borderTop: '1px solid rgba(207,227,200,0.15)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
            Have a Complex Commercial or Residential Architectural Project?
          </h2>
          <p style={{ color: '#c8d8c6', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            We provide full shop drawings, precision CNC/laser machining, and turnkey site assembly with complete quality guarantees.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-pill-sage" onClick={onNavigateToContact}>
              <span>Start Your Project Consultation</span>
              <span className="arrow-icon">➔</span>
            </button>
            <button className="btn-pill-dark" onClick={onBackToHome}>
              <span>Return to Home Overview</span>
            </button>
          </div>
        </div>
      </section>

      {/* Full Lightbox Specification Modal */}
      {activeLightbox && (
        <LightboxModal 
          item={activeLightbox} 
          onClose={() => setActiveLightbox(null)} 
        />
      )}

    </div>
  );
}

