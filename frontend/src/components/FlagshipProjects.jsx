import React, { useState } from 'react';
import BlueprintModal from './BlueprintModal';

const FLAGSHIP_PROJECTS = [
  {
    id: 'adidas-avenues-2',
    year: '2024',
    title: 'Adidas Originals & Kids Flagship',
    client: 'Adidas Global / The Avenues',
    location: 'The Avenues Mall Phase 2, Bahrain',
    category: 'Global Retail',
    summary: 'Turnkey architectural storefront with bespoke neo-classical arch vectoring, parametric timber ceiling slats, and integrated illuminated retail gondolas.',
    cadDetail: 'AutoCAD 2D Storefront Elevation & Plan DWG-01',
    specs: [
      'Islamic Arch Structural Shopfront Framing',
      'Parametric Acoustic Timber Louvered Ceiling',
      'Dual-Zone Brand Transition: Originals to Kids',
      'In-House CNC Cut Cash Desk with Metallic Inlays'
    ],
    fullImg: '/assets/founder/project_adidas_avenues_2.jpg',
    badge: 'NEWEST FLAGSHIP 2024'
  },
  {
    id: 'olympia-liwan',
    year: '2023',
    title: 'Olympia Sports Mega Retail Store',
    client: 'Olympia Sports Group',
    location: 'Al Liwan Hamala, Bahrain',
    category: 'Mega Commercial',
    summary: 'Massive commercial sports store featuring complete structural floor circulation CAD planning, custom modular footwear display gondolas, and industrial open-plenum ceiling coordination.',
    cadDetail: 'Master Floor Zoning & Fixture Distribution DWG-02',
    specs: [
      'Over 8,500 Sq. Ft. Precision Floor Space Planning',
      'High-Load Engineered Steel & Timber Display Racks',
      'Dual Cash-Wrap Counters with Integrated POS Channels',
      'Optimum Nutrition Dedicated Corner & Tasting Bar'
    ],
    fullImg: '/assets/founder/project_olympia_sports_liwan.jpg',
    badge: 'MEGA RETAIL FITOUT'
  },
  {
    id: 'adidas-performance-liwan',
    year: '2023',
    title: 'Adidas Performance & Parametric Ceiling',
    client: 'Adidas Global',
    location: 'Al Liwan Hamala, Bahrain',
    category: 'Parametric Ceilings',
    summary: 'Spectacular geometric 3D parametric wooden coffered ceiling milled with micro-precision on multi-axis CNC machinery, paired with high-performance retail fixtures.',
    cadDetail: 'Parametric Lattice Ceiling Matrix & Shop Drawings DWG-03',
    specs: [
      'Interlocking 3D CNC Diagonal Wooden Coffer Grid',
      'Precision Recessed Gimbal Spotlight Integration',
      'Natural Solid Wood Grain High-Traffic Polyurethane Finish',
      'Full CAD/CAM Vector Engineering & Rapid Site Assembly'
    ],
    fullImg: '/assets/founder/project_adidas_performance_liwan.jpg',
    badge: 'PARAMETRIC CEILING'
  },
  {
    id: 'olympia-seef',
    year: '2021',
    title: 'Olympia Health & Fitness Complex',
    client: 'Olympia Fitness Group',
    location: 'Seef Mall, Bahrain',
    category: 'Commercial Wellness',
    summary: 'State-of-the-art commercial gym facility, featuring heavy acoustic zoning, spinning studio with dynamic angled neon light tracking, and ergonomic equipment circulation layouts.',
    cadDetail: 'Equipment Load Distribution & Acoustic Floor Plan DWG-04',
    specs: [
      'Dynamic Spinning Studio with Neon RGB Light Tracking',
      'Heavy-Load Structural Rubber Floor Framing',
      'Architectural Glass Partitions with CNC Frosting',
      'Exposed Industrial Ductwork & Acoustic Baffles'
    ],
    fullImg: '/assets/founder/project_olympia_fitness_seef.jpg',
    badge: 'COMMERCIAL FITNESS'
  },
  {
    id: 'adidas-avenues-1',
    year: '2020',
    title: 'Adidas Performance Landmark Flagship',
    client: 'Adidas Global',
    location: 'The Avenues Mall Phase 1, Bahrain',
    category: 'Global Retail',
    summary: 'Monumental flagship retail store featuring full-height industrial perforated facade, grand parametric wooden coffered ceiling, and branded immersive athletic portals.',
    cadDetail: 'Architectural Facade & Master Ceiling Layout DWG-05',
    specs: [
      'Perforated Industrial Steel Mesh Elevation Doors',
      'Sculptural CNC Timber Acoustic Ceiling Drops',
      'Illuminated 3D Brand Signage Portals',
      'Full Turnkey Execution under Tight Mall Operational Timelines'
    ],
    fullImg: '/assets/founder/project_adidas_avenues_1.jpg',
    badge: 'LANDMARK FLAGSHIP'
  },
  {
    id: 'adidas-citycenter',
    year: '2019',
    title: 'Adidas Kids High-Impact Store',
    client: 'Adidas Global',
    location: 'City Centre Bahrain',
    category: 'Global Retail',
    summary: 'Vibrant, high-energy children’s concept store engineered with backlit diamond-mesh acoustic facade panels, CNC suspended lighting trays, and modular children-scale fixtures.',
    cadDetail: 'Storefront Sections & Internal Fixture Schedule DWG-06',
    specs: [
      'Backlit Colorful Diamond-Grid Facade Portals',
      'CNC Suspended Steel Electrical Conduit Channels',
      'Custom Rounded-Corner Child-Safe Retail Joinery',
      'Zero-Defect Handover under Global Brand Audits'
    ],
    fullImg: '/assets/founder/project_adidas_kids_citycenter.jpg',
    badge: 'CITY CENTRE RETAIL'
  },
  {
    id: 'olympia-galleria',
    year: '2017',
    title: 'Olympia Sports & Nutrition Galleria',
    client: 'Olympia Sports / Reebok / Adidas',
    location: 'Galleria Mall @ Zinj, Bahrain',
    category: 'Mega Commercial',
    summary: 'Multi-level flagship sporting goods superstore featuring escalator void integration, curved architectural gondolas, and shop-in-shop brand environments.',
    cadDetail: 'Multi-Floor Escalator & Circulation Geometry DWG-07',
    specs: [
      'Multi-Level Vertical Spatial Planning & Escalator Voids',
      'Aerodynamic Curved Display Gondolas',
      'Dedicated Reebok & Adidas Shop-in-Shop Zones',
      'High-Lumen Architectural Suspended Linear Lighting'
    ],
    fullImg: '/assets/founder/project_olympia_galleria_zinj.jpg',
    badge: 'MULTI-LEVEL RETAIL'
  },
  {
    id: 'highlight-3d-roster',
    year: '2024',
    title: 'High-End Boutiques & 3D Spatial Roster',
    client: 'Artdeco / Cosmetica / Baindemer / Benchmark',
    location: 'Bahrain & Saudi Arabia Projects',
    category: 'Luxury Boutiques',
    summary: 'Portfolio of luxury cosmetics, haute boutiques, and commercial mall retail installations including Cosmetica Seef, Artdeco Wadi Al Sail, Baindemer Marasi Galleria, and Oasis Mall.',
    cadDetail: '3ds Max Photorealistic Spatial Rendering & CAD DWG-08',
    specs: [
      'Cosmetica Seef: High-Gloss Acrylic & Gold Metal Inlays',
      'Artdeco Wadi Al Sail: Architectural Slatted Ceiling & Stairs',
      'Baindemer Marasi: Minimalist Luxury Beachwear Fitout',
      'After You Saudi: Complete Exterior & Interior Turnkey Concept'
    ],
    fullImg: '/assets/founder/project_highlight_3d_grid.jpg',
    badge: 'LUXURY BOUTIQUES'
  }
];

const CATEGORIES = [
  'All Flagships',
  'Global Retail',
  'Mega Commercial',
  'Parametric Ceilings',
  'Commercial Wellness',
  'Luxury Boutiques'
];

export default function FlagshipProjects() {
  const [activeCategory, setActiveCategory] = useState('All Flagships');
  const [selectedBlueprint, setSelectedBlueprint] = useState(null);

  const filtered = activeCategory === 'All Flagships'
    ? FLAGSHIP_PROJECTS
    : FLAGSHIP_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section className="flagship-projects-section section-padding" id="flagship-projects">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-left">
          <div className="arch-badge-tag">
            <span className="live-indicator"></span>
            LANDMARK ARCHITECTURAL CASE STUDIES
          </div>
          <h2 className="heading-md">
            MNC Enterprise Projects <span className="text-crimson">Delivered to Perfection</span>
          </h2>
          <p className="subheading" style={{ maxWidth: '820px' }}>
            Every flagship project below was designed and spearheaded by Niyaz Samad. 
            From initial AutoCAD 2D drafting and 3ds Max spatial rendering through to factory CNC cutting and on-site handover.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flagship-filter-bar">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`flagship-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Architectural Grid */}
        <div className="flagship-grid">
          {filtered.map(proj => (
            <div 
              key={proj.id} 
              className="flagship-card"
              onClick={() => setSelectedBlueprint(proj)}
            >
              {/* Image Box with Architectural Blueprint Watermark */}
              <div className="flagship-img-box">
                <img 
                  src={proj.fullImg} 
                  alt={proj.title} 
                  className="flagship-img"
                  loading="lazy"
                />
                <span className="flagship-badge">{proj.badge}</span>
                <span className="flagship-year-badge">{proj.year}</span>
                <div className="flagship-cad-overlay">
                  <span className="cad-inspect-pill">
                    <i className="fa-solid fa-expand"></i> Inspect CAD & Finished Photos
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="flagship-content">
                <div className="flagship-client-row">
                  <span className="flagship-client">{proj.client}</span>
                  <span className="flagship-loc"><i className="fa-solid fa-location-dot text-crimson"></i> {proj.location}</span>
                </div>
                
                <h3 className="flagship-title">{proj.title}</h3>
                <p className="flagship-summary">{proj.summary}</p>

                {/* Specs Pill List */}
                <div className="flagship-specs-pills">
                  {proj.specs.slice(0, 3).map((spec, i) => (
                    <span key={i} className="spec-pill">
                      <i className="fa-solid fa-check text-crimson"></i> {spec}
                    </span>
                  ))}
                </div>

                <div className="flagship-card-footer">
                  <span className="flagship-cad-label">
                    <i className="fa-solid fa-compass-drafting"></i> {proj.cadDetail}
                  </span>
                  <span className="flagship-view-btn">
                    View Blueprint & Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Portfolio Download / Review CTA Strip */}
        <div className="portfolio-enterprise-cta-strip">
          <div className="cta-strip-left">
            <span className="arch-index">ARCHITECTURAL DOSSIER</span>
            <h4>Need Enterprise Architectural Documentation for Your Project?</h4>
            <p>From CAD DWG blueprints to custom parametric CNC engineering and site surveillance, partner directly with our principal design desk.</p>
          </div>
          <div className="cta-strip-right">
            <a href="#quote" className="btn btn-primary">
              <i className="fa-solid fa-phone-volume"></i> Consult Niyaz Samad
            </a>
          </div>
        </div>

      </div>

      {/* Full-Screen Blueprint & Photography Inspector Modal */}
      {selectedBlueprint && (
        <BlueprintModal 
          project={selectedBlueprint} 
          onClose={() => setSelectedBlueprint(null)} 
        />
      )}
    </section>
  );
}
