import React, { useState, useMemo } from 'react';
import { clientsData, clientCategories } from '../data/clientsData';

export default function ClientTestimonialsPage({ onBackToHome }) {
  const [selectedCategory, setSelectedCategory] = useState('All Clients');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter clients based on category and search query
  const filteredClients = useMemo(() => {
    return clientsData.filter((client) => {
      const matchesCategory =
        selectedCategory === 'All Clients' || client.category === selectedCategory;
      const matchesSearch =
        client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.scopeTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.scopeDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.deliverables.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="testimonials-page-wrapper">
      
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
            <span className="crumb-current">Clients & Testimonials</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="testimonials-hero-section">
        <div className="container">
          <div className="section-subtitle-red">
            <span>CLIENT REPUTATION & CASE STUDIES</span>
            <div className="subtitle-line-red"></div>
          </div>
          <h1 className="testimonials-hero-title">
            The Brands Behind <span className="text-crimson">Our Craft</span>
          </h1>
          <p className="testimonials-hero-sub">
            Discover how Alliance engineers turnkey architectural spatial solutions, 3D CNC routing, industrial fiber laser cutting, and bespoke retail fitouts for over 20+ marquee commercial clients across India and the GCC.
          </p>

          {/* Metrics summary bar */}
          <div className="testimonials-stats-bar">
            <div className="stat-pill-box">
              <span className="stat-bold-num">20+</span>
              <span className="stat-label">Enterprise Clients</span>
            </div>
            <div className="stat-pill-box">
              <span className="stat-bold-num">100+</span>
              <span className="stat-label">Commercial Fitouts</span>
            </div>
            <div className="stat-pill-box">
              <span className="stat-bold-num">100%</span>
              <span className="stat-label">Factory Direct</span>
            </div>
            <div className="stat-pill-box">
              <span className="stat-bold-num">5.0 ★</span>
              <span className="stat-label">Client Trust Score</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="testimonials-filter-section">
        <div className="container">
          <div className="testimonials-controls-row">
            
            {/* Category Filter Pills */}
            <div className="category-pills-scroll">
              {clientCategories.map((cat) => {
                const count =
                  cat === 'All Clients'
                    ? clientsData.length
                    : clientsData.filter((c) => c.category === cat).length;
                return (
                  <button
                    key={cat}
                    className={`category-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    <span>{cat}</span>
                    <span className="pill-badge">{count}</span>
                  </button>
                );
              })}
            </div>

            {/* Live Search Input */}
            <div className="testimonials-search-box">
              <i className="fa-solid fa-magnifying-glass search-icon"></i>
              <input 
                type="text"
                placeholder="Search brand, material, or service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="testimonials-search-input"
              />
              {searchQuery && (
                <button 
                  className="search-clear-btn" 
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Client Stories Grid */}
      <section className="testimonials-cards-section">
        <div className="container">
          
          {filteredClients.length === 0 ? (
            <div className="testimonials-empty-state">
              <i className="fa-solid fa-filter-circle-xmark empty-icon text-crimson"></i>
              <h3>No matching clients found</h3>
              <p>Try clearing your search query or selecting "All Clients".</p>
              <button 
                className="btn btn-pill-red"
                onClick={() => { setSelectedCategory('All Clients'); setSearchQuery(''); }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="testimonials-grid">
              {filteredClients.map((client) => (
                <article key={client.id} className="client-story-card">
                  
                  {/* Top Branding Header */}
                  <div className="story-card-top">
                    <div className="story-logo-container">
                      <img 
                        src={client.logo} 
                        alt={`${client.name} Official Logo`} 
                        className="story-logo-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="story-header-meta">
                      <div className="story-cat-badge">{client.category}</div>
                      <h3 className="story-client-name">{client.name}</h3>
                      <div className="story-location-row">
                        <i className="fa-solid fa-location-dot text-crimson"></i>
                        <span>{client.location}</span>
                        <span className="meta-dot">•</span>
                        <span>{client.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Scope of Work Section (Explaining the project with the logo) */}
                  <div className="story-scope-block">
                    <div className="scope-tag-title">
                      <i className="fa-solid fa-compass-drafting text-crimson"></i>
                      <span>WHAT ALLIANCE ENGINEERED & FABRICATED</span>
                    </div>
                    <h4 className="scope-headline">{client.scopeTitle}</h4>
                    <p className="scope-narrative">{client.scopeDesc}</p>
                    
                    {/* Deliverables tags */}
                    <div className="story-deliverables-wrap">
                      {client.deliverables.map((item, idx) => (
                        <span key={idx} className="deliverable-tag">
                          <i className="fa-solid fa-check text-crimson"></i>
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Quote Box */}
                  <div className="story-testimonial-quote-box">
                    <div className="quote-icon-mark">
                      <i className="fa-solid fa-quote-left text-crimson"></i>
                    </div>
                    <p className="testimonial-quote-text">
                      "{client.testimonial}"
                    </p>
                    <div className="testimonial-footer-meta">
                      <div className="star-rating-row">
                        {'★★★★★'.split('').map((star, i) => (
                          <span key={i} className="star-icon">★</span>
                        ))}
                        <span className="rating-badge-text">Verified Client Project</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <div className="story-card-cta-row">
                    <a 
                      href={`https://wa.me/918891790094?text=${encodeURIComponent(`Hello Alliance Team, I was reviewing your work for ${client.name} on your website. I would like to discuss a similar architectural CNC and fabrication project.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-discuss-project"
                    >
                      <i className="fa-brands fa-whatsapp whatsapp-icon"></i>
                      <span>Inquire About Similar Scope</span>
                      <i className="fa-solid fa-arrow-up-right-from-square arrow-ext"></i>
                    </a>
                  </div>

                </article>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Bottom Conversion Strip */}
      <section className="testimonials-cta-banner">
        <div className="container">
          <div className="cta-banner-content">
            <div className="section-subtitle-red">
              <span>WORK WITH ALLIANCE</span>
              <div className="subtitle-line-red"></div>
            </div>
            <h2 className="cta-banner-heading">
              Ready to Build Your Next <span className="text-crimson">Flagship Space</span>?
            </h2>
            <p className="cta-banner-sub">
              Join leading retail giants, architectural firms, and luxury businesses that trust Alliance for factory-direct CNC machining, laser metal cutting, and spatial fabrication.
            </p>
            <div className="cta-banner-btns">
              <a 
                href="https://wa.me/918891790094?text=Hello%20Alliance%20Team%2C%20I%20would%20like%20to%20request%20a%20project%20quotation."
                target="_blank"
                rel="noreferrer"
                className="btn btn-pill-red"
              >
                <span>Request Project Quotation</span>
                <span className="arrow-icon">➔</span>
              </a>
              <button className="btn btn-pill-dark" onClick={onBackToHome}>
                <span>Explore Full Website</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

