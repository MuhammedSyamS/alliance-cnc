import React, { useState } from 'react';

export default function Portfolio({ onOpenLightbox }) {
  const [filter, setFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Luxury Villa Living Room & Teak Jali',
      category: 'residential',
      location: 'Kochi, Kerala',
      image: '/assets/images/hero_cnc_interior.jpg',
      specs: 'Solid Teak Wood + Crimson Backlight'
    },
    {
      id: 2,
      title: 'Modern Retail Jewelry Showroom',
      category: 'commercial',
      location: 'Calicut (Kozhikode), Kerala',
      image: '/assets/images/commercial_fitout.jpg',
      specs: 'Gold Brass Inlay + 3D Carved Walls'
    },
    {
      id: 3,
      title: 'Modern Apartment Dining Partition',
      category: 'jali',
      location: 'Trivandrum, Kerala',
      image: '/assets/images/cnc_jali_panels.jpg',
      specs: '18mm WPC 100% Waterproof Board'
    },
    {
      id: 4,
      title: 'Monsoon-Proof Building Exterior Elevation',
      category: 'exterior',
      location: 'Thrissur, Kerala',
      image: '/assets/images/architectural_facade.jpg',
      specs: '4mm Exterior Metallic ACP Sheets'
    },
    {
      id: 5,
      title: 'Custom Bedroom Wardrobe & Headboard',
      category: 'residential',
      location: 'Kottayam, Kerala',
      image: '/assets/images/residential_interior.jpg',
      specs: 'MDF Laser Cut Veneer Panel'
    },
    {
      id: 6,
      title: 'Pooja Room Traditional Wooden Jali',
      category: 'jali',
      location: 'Ernakulam, Kerala',
      image: '/assets/images/hero_cnc_interior.jpg',
      specs: 'Teak Wood Traditional Lattice'
    }
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section className="section-padding portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="arch-index">05. KERALA PROJECT SHOWCASE</span>
          <h2 className="heading-md">
            Our Completed Projects in <span className="text-crimson">Kerala, India</span>
          </h2>
          <p className="subheading">
            Take a look at some of our interior design and CNC jali cutting projects completed for clients in Kochi, Calicut, Trivandrum, Thrissur, and Kottayam.
          </p>
        </div>

        <div className="filter-tabs">
          <button 
            type="button" 
            className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            type="button" 
            className={`filter-tab ${filter === 'residential' ? 'active' : ''}`}
            onClick={() => setFilter('residential')}
          >
            Kerala Homes & Villas
          </button>
          <button 
            type="button" 
            className={`filter-tab ${filter === 'commercial' ? 'active' : ''}`}
            onClick={() => setFilter('commercial')}
          >
            Shops & Offices
          </button>
          <button 
            type="button" 
            className={`filter-tab ${filter === 'jali' ? 'active' : ''}`}
            onClick={() => setFilter('jali')}
          >
            CNC Jali Panels
          </button>
          <button 
            type="button" 
            className={`filter-tab ${filter === 'exterior' ? 'active' : ''}`}
            onClick={() => setFilter('exterior')}
          >
            Building Elevations
          </button>
        </div>

        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="portfolio-item"
              onClick={() => onOpenLightbox && onOpenLightbox(item)}
            >
              <div className="portfolio-img-box">
                <img src={item.image} alt={item.title} />
                <div className="portfolio-badge">{item.location}</div>
              </div>
              <div className="portfolio-info">
                <h3 className="portfolio-title">{item.title}</h3>
                <p className="portfolio-meta">{item.specs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
