import React, { useState } from 'react';
import BlueprintModal from './BlueprintModal';

const FLAGSHIP_PROJECTS = [
  {
    id: 'baindemer-saint-tropez',
    year: '2024',
    title: 'Baindemer Saint-Tropez Luxury Boutique',
    client: 'Baindemer France / Marasi Galleria',
    location: 'Marasi Galleria, Kingdom of Bahrain',
    category: 'Luxury Boutiques',
    summary: 'Turnkey architectural fitout for the French Riviera luxury resort wear icon. Features custom CNC fluted wall paneling, perimeter recessed cove lighting, and minimalist terrazzo cash counter.',
    cadDetail: 'Boutique Plan, Wall Elevation & Fluted Joinery Details DWG-01',
    specs: [
      'Precision CNC-Milled Fluted Architectural Feature Walls',
      'Micro-Trimless Recessed Cove Architectural Lighting',
      'Terrazzo Cash-Wrap Counter with Embedded Brand Detailing',
      'Integrated Minimalist Matte Black Garment Display Rails'
    ],
    fullImg: '/images/Works Done/20241019_100035.jpg',
    badge: 'FRENCH LUXURY BOUTIQUE'
  },
  {
    id: 'adidas-performance-liwan',
    year: '2023',
    title: 'Adidas Performance Parametric Coffered Ceiling',
    client: 'Adidas Global',
    location: 'Al Liwan Hamala, Bahrain',
    category: 'Parametric Ceilings',
    summary: 'Spectacular geometric 3D parametric wooden coffered ceiling milled with micro-precision on multi-axis CNC machinery, paired with high-performance retail fixtures.',
    cadDetail: 'Parametric Lattice Ceiling Matrix & Shop Drawings DWG-02',
    specs: [
      'Interlocking 3D CNC Diagonal Wooden Coffer Grid',
      'Precision Recessed Gimbal Spotlight Integration',
      'Natural Solid Wood Grain High-Traffic Polyurethane Finish',
      'Full CAD/CAM Vector Engineering & Rapid Site Assembly'
    ],
    fullImg: '/images/Works Done/20220428_111750.jpg',
    badge: 'PARAMETRIC CEILING'
  },
  {
    id: 'adidas-kids-avenues',
    year: '2024',
    title: 'Adidas Kids Landmark Entrance & Storefront',
    client: 'Adidas Global / The Avenues',
    location: 'The Avenues Mall Phase 2, Bahrain',
    category: 'Global Retail',
    summary: 'High-impact retail entrance with multi-colored illuminated prismatic facade framing, suspended industrial track channels, and child-safe rounded joinery.',
    cadDetail: 'Illuminated Facade Portal & Fixture Elevation DWG-03',
    specs: [
      'Backlit Prismatic Multi-Color Geometric Entrance Arch',
      'Suspended Overhead MEP Cable Trays & Linear Lighting',
      'Modular Low-Profile Children Apparel Racks & Plinths',
      'High-Gloss Polished Marble Floor Transition Framing'
    ],
    fullImg: '/images/Works Done/2.jpg',
    badge: 'LANDMARK FLAGSHIP'
  },
  {
    id: 'olympia-on-mega',
    year: '2023',
    title: 'Olympia Sports Mega Flagship & "On" Running Towers',
    client: 'Olympia Sports / On Running Global',
    location: 'Al Liwan & Avenues Mall, Bahrain',
    category: 'Mega Commercial',
    summary: 'Sprawling commercial retail store featuring aerodynamic curved dropped ceiling bulkheads, illuminated LED digital display monoliths, and modular footwear grids.',
    cadDetail: 'Fluid Ceiling Reflected Plan & Gondola Grid DWG-04',
    specs: [
      'Fluid Parametric Curved Ceiling Cove with Recessed LEDs',
      'Digital Monolith Tower Cladding with Custom Brackets',
      'Wire-Mesh Industrial Column Encapsulation & Fixtures',
      'Over 9,000 Sq. Ft. Commercial Footfall Optimization'
    ],
    fullImg: '/images/Works Done/20220708_103450.jpg',
    badge: 'MEGA RETAIL FITOUT'
  },
  {
    id: 'cosmetica-kryolan',
    year: '2024',
    title: 'Cosmetica Essentials & Kryolan Flagship Boutique',
    client: 'Kryolan Professional / Cosmetica',
    location: 'Seef Mall, Kingdom of Bahrain',
    category: 'Luxury Boutiques',
    summary: 'Pristine cosmetics retail architecture featuring backlit halo-lit brand bulkheads, UV-bonded glass display vitrines, and high-gloss architectural millwork.',
    cadDetail: 'Cosmetic Counter Elevation & Backlit Vitrine Joinery DWG-05',
    specs: [
      'Backlit Acrylic Kryolan Brand Signage Bulkheads',
      'Tempered Glass Display Vitrines with Internal Micro-LEDs',
      'High-Gloss Architectural Enamel Millwork Finish',
      'Full Turnkey Execution from Spatial Layout to Handover'
    ],
    fullImg: '/images/Works Done/505903424_122161491644495646_8352406097242840218_n.jpg',
    badge: 'PRESTIGE COSMETICS'
  },
  {
    id: 'olympia-fitness-baffles',
    year: '2022',
    title: 'Olympia Health & Fitness Floating Ceiling Baffles',
    client: 'Olympia Fitness Group',
    location: 'Seef Mall & Mega Complexes, Bahrain',
    category: 'Commercial Wellness',
    summary: 'Sculptural acoustic suspended cloud baffles angled geometrically across the mezzanine, with heavy-load athletic flooring and precision spatial zoning.',
    cadDetail: 'Acoustic Cloud Hanger Layout & Load Distribution DWG-06',
    specs: [
      'Geometric Angular Floating Acoustic Ceiling Clouds',
      'Heavy-Duty Structural Rigging & Combat Sports Trussing',
      'Specialized Anti-Microbial Heavy Impact Rubber Flooring',
      'Integrated HVAC Exhaust Plenum Concealment'
    ],
    fullImg: '/images/Works Done/10.JPG',
    badge: 'COMMERCIAL FITNESS'
  },
  {
    id: 'adidas-footwear-wall',
    year: '2022',
    title: 'Adidas Performance Slotted Wall & Modular Fixtures',
    client: 'Adidas Global',
    location: 'City Centre & Al Liwan, Bahrain',
    category: 'Global Retail',
    summary: 'Engineered slotted wall system with custom steel footwear brackets, panoramic continuous digital LED bulkhead, and modular solid wood bench joinery.',
    cadDetail: 'Wall Panel Slotting CNC Program & Fixture Extrusions DWG-07',
    specs: [
      'CNC-Drilled Slotted Wall Matrix with Anti-Scratch Finish',
      'Continuous Ultra-Wide Panoramic LED Brand Bulkhead',
      'Natural Pine & Oak Footwear Trying Benches with Storage',
      'Global Audit-Compliant Architectural Millwork Standards'
    ],
    fullImg: '/images/Works Done/20220428_111733.jpg',
    badge: 'RETAIL ENGINEERING'
  },
  {
    id: 'reebok-olympia-galleria',
    year: '2022',
    title: 'Reebok & Multi-Brand Athletic Megastore',
    client: 'Reebok / Olympia Sports / Asics / Under Armour',
    location: 'Galleria Mall & Destination Hubs',
    category: 'Mega Commercial',
    summary: 'Comprehensive multi-brand athletic superstore with illuminated signage fascia, overhead industrial spiral ducting, and perimeter wire mesh display system.',
    cadDetail: 'Perimeter Wall Fixtures & Shopfront Bulkhead DWG-08',
    specs: [
      'Multi-Brand Illuminated Halo Lightbox Bulkheads',
      'Black Matte Powder-Coated Gondolas & Apparel Hanging Rails',
      'Custom Track Lighting Distribution & Open Ceiling Design',
      'Turnkey Delivery with Zero Operational Disruption'
    ],
    fullImg: '/images/Works Done/2022_07_09_18_40_IMG_0759.JPG',
    badge: 'MULTI-BRAND FLAGSHIP'
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
            Every flagship project below was designed and spearheaded by the Alliance architectural and engineering team. 
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
              <i className="fa-solid fa-phone-volume"></i> Consult Alliance Engineers
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
