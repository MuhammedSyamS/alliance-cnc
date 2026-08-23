import React, { useState } from 'react';
import LightboxModal from './LightboxModal';

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Luxury Villa Jali Partition',
    category: 'Jali Screens',
    location: 'Kochi, Ernakulam',
    material: 'Waterproof WPC Board (18mm)',
    img: '/assets/portfolio_jali_1.jpg'
  },
  {
    id: 2,
    title: 'Parametric Hotel Elevation Facade',
    category: 'Facades',
    location: 'Calicut, Kerala',
    material: 'High-Grade ACP & Aluminum',
    img: '/assets/facade_1.jpg'
  },
  {
    id: 3,
    title: 'Teak Wood Pooja Room Backdrop',
    category: 'Interior Fitouts',
    location: 'Trivandrum, Kerala',
    material: 'Solid Teak Wood 3D Engraved',
    img: '/assets/portfolio_wood_1.jpg'
  },
  {
    id: 4,
    title: 'Corporate Office Acoustic Wall Slats',
    category: 'Commercial Fitouts',
    location: 'Kalamassery, Kochi',
    material: 'MDF Veneered Louvers',
    img: '/assets/commercial_1.jpg'
  },
  {
    id: 5,
    title: 'Geometric Balcony Privacy Screen',
    category: 'Jali Screens',
    location: 'Thrissur, Kerala',
    material: 'Powder-Coated Aluminum CNC',
    img: '/assets/hero_interior.jpg'
  }
];

const CATEGORIES = ['All Projects', 'Jali Screens', 'Facades', 'Interior Fitouts', 'Commercial Fitouts'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [activeLightbox, setActiveLightbox] = useState(null);

  const filteredItems = activeFilter === 'All Projects'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section className="portfolio section-padding" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="arch-index">RECENT CRAFTSMANSHIP</span>
          <h2 className="heading-md">Featured Kerala CNC Projects</h2>
          <p className="subheading">
            Browse through our portfolio of custom CNC routered partitions, parametric facades, and bespoke interior installations completed across Kerala.
          </p>
        </div>

        {/* Responsive Filter Bar */}
        <div className="filter-tabs">
          {CATEGORIES.map(category => (
            <button
              key={category}
              className={`filter-tab ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Responsive Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="portfolio-item"
              onClick={() => setActiveLightbox(item)}
            >
              <div className="portfolio-img-box">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  loading="lazy"
                />
                <span className="portfolio-badge">{item.category}</span>
              </div>
              <div className="portfolio-info">
                <h3 className="portfolio-title">{item.title}</h3>
                <p className="portfolio-meta">📍 {item.location} | {item.material}</p>
              </div>
            </div>
          ))}
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
