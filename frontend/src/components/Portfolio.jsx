import React, { useState } from 'react';
import LightboxModal from './LightboxModal';
import BeforeAfterCard from './BeforeAfterCard';
import { BEFORE_AFTER_WORKS } from '../data/beforeAfterData';

const FEATURED_PROJECTS = [
  {
    id: 'adidas-parametric-ceiling',
    title: 'Adidas Performance 3D Coffered Ceiling',
    category: '3D CNC Milling',
    client: 'Adidas Global Flagship',
    location: 'Al Liwan, Bahrain',
    img: '/images/Works Done/20220428_111750.jpg',
    material: 'Natural Solid Hardwood & High-Load Trussing',
    specs: ['Interlocking 3D Diamond Grid', 'Multi-Axis CNC Milling', 'Integrated Gimbal Spotlight Matrix', 'Polyurethane High-Traffic Coat']
  },
  {
    id: 'baindemer-saint-tropez',
    title: 'Bain de Mer Luxury Boutique',
    category: 'Hardwood & Joinery',
    client: 'Bain de Mer France',
    location: 'Marasi Galleria, Bahrain',
    img: '/images/Works Done/Baindaimer.jpg',
    material: 'CNC Fluted Wall Panels, Terrazzo, Minimalist Steel',
    specs: ['CNC Fluted Feature Wall', 'Recessed Micro-Cove Lighting', 'Custom Terrazzo Cash-Wrap', 'Matte Black Display Racks']
  },
  {
    id: 'artdeco-luxury-counter',
    title: 'Artdeco Cosmetics Island Architecture',
    category: 'Retail Fit-Out',
    client: 'Artdeco Cosmetics Europe',
    location: 'Premier Department Store',
    img: '/images/Works Done/Artdeco 2.jpg',
    material: 'Multi-Tier Acrylic Trays, Corian Cash-Wrap, LED Channels',
    specs: ['Curved Solid Surface Routing', 'Multi-Tier Acrylic Trays', 'Backlit Visual Lightboxes', 'High-Gloss Enamel Millwork']
  },
  {
    id: 'reebok-retail-space',
    title: 'Reebok Commercial Flagship Architecture',
    category: 'Commercial Fit-Out',
    client: 'Reebok International',
    location: 'Commercial Mall Flagship',
    img: '/images/Works Done/Reebok.JPG',
    material: 'Architectural Timber Baffles & Display Modules',
    specs: ['Acoustic Cloud Baffles', 'Precision CNC Joinery', 'Recessed LED Strips', 'Custom Display Fixtures']
  }
];

export default function Portfolio({ onNavigateToPortfolio }) {
  const [activeTab, setActiveTab] = useState('featured'); // 'featured' | 'before-after'
  const [activeLightbox, setActiveLightbox] = useState(null);

  const handleOpenLightbox = (imageSrc, title) => {
    setActiveLightbox({
      title: title || 'Project Inspection',
      img: imageSrc,
      category: 'Architectural Realization',
      client: 'Alliance Portfolio',
      location: 'Turnkey Handover',
      material: 'Architectural Specification',
      specs: ['High-Resolution Photographic Inspection', 'In-House Factory Precision', 'Millimeter Tolerance Quality Control']
    });
  };

  return (
    <section className="our-work-section" id="our-work">
      <div className="container">
        
        {/* Simple & Minimal Header */}
        <div className="our-work-simple-header">
          <div className="our-work-header-text">
            <span className="section-eyebrow-dark">PORTFOLIO</span>
            <h2 className="our-work-main-title">Selected Works</h2>
            <p className="our-work-main-desc">
              A curated look at our turnkey spatial fabrications, CNC joinery, and architectural retail transformations.
            </p>
          </div>

          {/* Clean 2-Way View Toggle */}
          <div className="our-work-toggle-pill">
            <button
              type="button"
              className={`work-toggle-btn ${activeTab === 'featured' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('featured')}
            >
              <span>Featured Works (4)</span>
            </button>
            <button
              type="button"
              className={`work-toggle-btn ${activeTab === 'before-after' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('before-after')}
            >
              <span>Before & After (4)</span>
            </button>
          </div>
        </div>

        {/* Content: Featured Works Tab */}
        {activeTab === 'featured' && (
          <div className="our-work-simple-grid">
            {FEATURED_PROJECTS.map((item) => (
              <article 
                key={item.id} 
                className="simple-work-card"
                onClick={() => setActiveLightbox(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setActiveLightbox(item); }}
              >
                <div className="simple-card-media">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    loading="lazy"
                    className="simple-card-img"
                  />
                  <span className="simple-card-tag">{item.category}</span>
                </div>
                <div className="simple-card-body">
                  <div className="simple-card-meta">
                    <span className="simple-card-client">{item.client}</span>
                    <span className="meta-bullet">•</span>
                    <span className="simple-card-loc">{item.location}</span>
                  </div>
                  <h3 className="simple-card-title">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Content: Before & After Tab */}
        {activeTab === 'before-after' && (
          <div className="ba-simple-grid">
            {BEFORE_AFTER_WORKS.slice(0, 4).map((item) => (
              <BeforeAfterCard 
                key={item.id} 
                item={item} 
                onOpenLightbox={handleOpenLightbox} 
              />
            ))}
          </div>
        )}

        {/* Simple Quiet Footer CTA */}
        <div className="our-work-quiet-cta">
          <span>Looking for full architectural case studies, CAD blueprints, and all project handovers?</span>
          {onNavigateToPortfolio ? (
            <button 
              type="button" 
              onClick={onNavigateToPortfolio} 
              className="btn btn-pill-sage"
            >
              <span>View Full Portfolio & Case Studies</span>
              <span className="arrow-icon">➔</span>
            </button>
          ) : (
            <a href="#contact" className="btn btn-pill-sage">
              <span>Inquire Directly</span>
              <span className="arrow-icon">➔</span>
            </a>
          )}
        </div>

      </div>

      {activeLightbox && (
        <LightboxModal 
          item={activeLightbox} 
          onClose={() => setActiveLightbox(null)} 
        />
      )}
    </section>
  );
}
