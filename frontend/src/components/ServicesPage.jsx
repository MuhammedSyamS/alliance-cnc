import React, { useState } from 'react';

export default function ServicesPage({ onBackToHome, onNavigateToContact, onSelectServiceModal }) {
  const [selectedSubstrate, setSelectedSubstrate] = useState('all');

  const detailedServices = [
    {
      id: 'cnc-engraving',
      num: '01',
      title: 'CNC Router Engraving & 3D Milling',
      tagline: 'Multi-Axis Precision for Complex 3D Reliefs & Architectural Paneling',
      desc: 'Our heavy-duty 5-axis industrial CNC routing systems execute precision multi-depth relief carving, parametric wave contours, blind pocketing, and high-speed sheet nesting across both natural and synthetic substrates.',
      img: '/images/craft/laser_wood_plaque.jpg',
      substrates: ['Solid Hardwood & Teak', 'Marine Plywood (IS 710)', 'Waterproof WPC & PVC', 'Corian Solid Surface', 'High-Density MDF & Acrylic'],
      applications: [
        '3D Parametric Wall & Ceiling Acoustic Baffles',
        'Deep-Fluted Wall Paneling for Luxury Retail & Boutiques',
        'Intricate Architectural Jali Lattice Screens',
        'Custom Curvilinear Joinery & Cash-Wrap Counter Substructures'
      ],
      specs: [
        'Bed Working Area: 2500mm × 1300mm × 300mm Z-clearance',
        'Spindle: 24,000 RPM Liquid-Cooled Ceramic Bearings',
        'Tooling: Ball-nose, V-groove, flat end-mills, dovetail cutters',
        'Tolerances: Repeatable to ±0.05mm across entire panel'
      ]
    },
    {
      id: 'laser-cutting',
      num: '02',
      title: 'Precision Fiber Laser Metal Slicing',
      tagline: 'High-Output Sheet Metal & Brass Cutting with Mirror-Clean Edges',
      desc: 'Utilizing state-of-the-art fiber laser cutting technology with high-purity nitrogen assist gas, Alliance cuts sheet metals with zero thermal distortion, razor-sharp geometric corners, and burr-free edges ready for immediate assembly.',
      img: '/images/craft/hero_laser_sparks.jpg',
      substrates: ['Architectural Brass & Bronze', 'Stainless Steel (SS 304 / SS 316)', 'Aerospace Aluminum Alloy', 'Cold-Rolled Carbon & Mild Steel'],
      applications: [
        'Luxury Villa Main Entry Doors & Ornate Metal Gates',
        'Perforated Architectural Facade Envelopes & Sunshades',
        'Custom Brass Inlay Strips for Floors & Cabinetry',
        'Laser-Cut Decorative Ceiling Light Grilles'
      ],
      specs: [
        'Cutting Thickness: Up to 12mm in Brass & Stainless Steel',
        'Beam Spot: Ultra-focused micro-kerf for fine filigree details',
        'Assist Gas: High-pressure Nitrogen for oxide-free cut face',
        'Edge Quality: Eliminates manual grinding or deburring'
      ]
    },
    {
      id: 'laser-printing',
      num: '03',
      title: 'Large-Format UV Flatbed Printing & Laser Marking',
      tagline: 'Permanent Direct-to-Substrate Architectural Graphics & Signage',
      desc: 'We print high-definition vector graphics, photo-realistic art, and raised tactile textures directly onto rigid substrates. Instantly cured by intense UV lamps, the prints resist scratch, moisture, UV degradation, and chemical cleaning.',
      img: '/images/craft/laser_metal_ornate.jpg',
      substrates: ['Clear & Frosted Acrylic Sheets', 'Brushed Aluminum & Brass Sheets', 'Natural Wood Slabs & Veneer', 'Glass & Architectural Mirrors', 'ACP & Composite Boards'],
      applications: [
        'Flagship Retail Visual Merchandising Panels',
        'Backlit Acrylic Lightbox Displays & Wayfinding Signage',
        'Custom Printed Acoustic Baffles & Decorative Panels',
        'Corporate Identity Logos & Embossed Brand Walls'
      ],
      specs: [
        'Print Resolution: Up to 1440 × 1440 DPI micro-piezo tech',
        'Ink Configuration: CMYK + High-Opacity White + Clear Gloss',
        'Embossing: Multi-pass layered ink for 3D tactile textures',
        'Durability: Outdoor UV-rated for 5+ years without fading'
      ]
    },
    {
      id: 'custom-projects',
      num: '04',
      title: 'Turnkey Luxury Interior Fit-Outs & Custom Millwork',
      tagline: 'End-to-End Architectural Execution for Flagships & Luxury Residences',
      desc: 'Alliance engineers complete turnkey interior spatial packages. We combine our in-house CNC and laser manufacturing with experienced Kerala joinery masters to fabricate display islands, acoustic ceilings, and luxury architectural fitouts.',
      img: '/images/craft/laser_tumbler_mug.jpg',
      substrates: ['Mixed Media: Hardwood + Brass + Acrylic + Glass', 'Corian Curved Solid Surface', 'High-Pressure Laminates', 'Powder-Coated Structural Steel'],
      applications: [
        'International Retail Boutiques (Adidas, Bain de Mer, Artdeco, Reebok)',
        'Executive Corporate Boardrooms & Reception Feature Walls',
        'High-End Residential Master Suites & Private Home Theaters',
        'Luxury Hotel Lobbies & Bespoke Hospitality Lounges'
      ],
      specs: [
        'Handover: Fully modular ready-to-assemble shop drawings',
        'Hardware: Soft-close Austrian/German engineered hardware',
        'Wiring: Integrated recessed LED channels and driver pockets',
        'Quality: 100% factory trial assembly before on-site delivery'
      ]
    },
    {
      id: 'architectural-facades',
      num: '05',
      title: 'Architectural Exterior Facades & Ceilings',
      tagline: 'Engineered Weather-Proof Building Envelopes & Parametric Coffered Ceilings',
      desc: 'We engineer large-format exterior perforated ACP envelopes, climate-resilient sunscreens, and 3D interlocking coffered ceiling matrices designed to withstand wind loads, monsoon humidity, and thermal expansion.',
      img: '/images/Works Done/20220428_111750.jpg',
      substrates: ['Exterior Grade PVDF-Coated ACP', 'Structural Aluminum Sub-Framing', 'Monsoon-Treated Marine Timber', 'High-Density Compact Laminates'],
      applications: [
        'Commercial Building Exterior Facades & Louver Screens',
        'Perforated Solar Shading & Climate Regulation Screens',
        '3D Parametric Coffered Timber Ceilings',
        'Architectural Entrance Portals & Canopy Soffits'
      ],
      specs: [
        'Wind Load: Engineered to coastal aerodynamic standards',
        'Coating: 20-Year Warranty PVDF exterior grade finish',
        'Fasteners: Stainless Steel 316 marine-grade hardware',
        'Thermal: Calculated expansion gaps for hot/humid climates'
      ]
    }
  ];

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
            <span className="crumb-current">Our Services</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="testimonials-hero-section">
        <div className="container">
          <div className="section-subtitle-red">
            <span>COMPREHENSIVE CNC & FABRICATION SERVICES</span>
            <div className="subtitle-line-red"></div>
          </div>
          <h1 className="testimonials-hero-title">
            Industrial CNC Machining & <span className="text-crimson">Custom Fabrication</span>
          </h1>
          <p className="testimonials-hero-sub">
            Specializing in multi-axis CNC router 3D milling, high-output fiber laser metal cutting, precision sheet nesting, and UV flatbed printing — complemented by turnkey architectural interior and exterior design execution. Manufactured factory-direct in Nedumangad, Trivandrum.
          </p>

          {/* Quick Metrics Bar */}
          <div className="testimonials-stats-bar">
            <div className="stat-pill-box">
              <span className="stat-bold-num">5</span>
              <span className="stat-label">Core Divisions</span>
            </div>
            <div className="stat-pill-box">
              <span className="stat-bold-num">±0.05mm</span>
              <span className="stat-label">Spindle Tolerance</span>
            </div>
            <div className="stat-pill-box">
              <span className="stat-bold-num">12mm</span>
              <span className="stat-label">Laser Metal Capacity</span>
            </div>
            <div className="stat-pill-box">
              <span className="stat-bold-num">Direct</span>
              <span className="stat-label">Factory Pricing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Breakdown */}
      <section style={{ padding: '5.5rem 0', background: '#FFFFFF', color: '#1d1f1d' }}>
        <div className="container">
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {detailedServices.map((srv, index) => (
              <article 
                key={srv.id} 
                id={srv.id}
                className={`service-detail-card ${index % 2 === 0 ? 'even-row' : 'odd-row'}`}
              >
                {/* Information Column */}
                <div className="service-detail-info">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '1.75rem', fontWeight: 900, color: '#b9d6b1', fontFamily: 'var(--font-heading)' }}>
                      {srv.num}
                    </span>
                    <span style={{ fontSize: '0.74rem', fontWeight: 800, letterSpacing: '0.12em', color: '#60685f', textTransform: 'uppercase' }}>
                      ALLIANCE SERVICE SPECIFICATION
                    </span>
                  </div>

                  <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', fontWeight: 800, color: '#1d1f1d', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                    {srv.title}
                  </h2>

                  <p style={{ fontSize: '1rem', fontWeight: 600, color: '#556254', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                    {srv.tagline}
                  </p>

                  <p style={{ fontSize: '0.96rem', color: '#353834', lineHeight: 1.7, marginBottom: '2rem' }}>
                    {srv.desc}
                  </p>

                  {/* Substrates Pill Grid */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', color: '#1d1f1d', display: 'block', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
                      COMPATIBLE MATERIALS & SUBSTRATES:
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                      {srv.substrates.map((sub, sIdx) => (
                        <span key={sIdx} style={{ background: '#edf1ea', border: '1px solid #dbe5d8', color: '#1d1f1d', fontSize: '0.76rem', fontWeight: 600, padding: '4px 10px', borderRadius: '6px' }}>
                          • {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Applications */}
                  <div style={{ marginBottom: '2rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', color: '#1d1f1d', display: 'block', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
                      COMMON ARCHITECTURAL APPLICATIONS:
                    </span>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {srv.applications.map((app, aIdx) => (
                        <li key={aIdx} style={{ fontSize: '0.86rem', color: '#353834', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ color: '#258b29', fontWeight: 900 }}>✓</span>
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <button 
                      className="btn btn-pill-sage"
                      onClick={onNavigateToContact}
                    >
                      <span>Inquire for {srv.title}</span>
                      <span className="arrow-icon">➔</span>
                    </button>
                    <a 
                      href={`https://wa.me/918891790094?text=Hello%20Alliance,%20I%20am%20interested%20in%20${encodeURIComponent(srv.title)}`}
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn-pill-dark"
                      style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                      <i className="fa-brands fa-whatsapp" style={{ color: '#25D366' }}></i>
                      <span>WhatsApp Inquiry</span>
                    </a>
                  </div>
                </div>

                {/* Image & Machine Specs Column */}
                <div className="service-detail-media">
                  <div style={{ borderRadius: '18px', overflow: 'hidden', boxShadow: '0 12px 35px rgba(0,0,0,0.1)', border: '1px solid #dbe5d8', marginBottom: '1.5rem', maxHeight: '340px' }}>
                    <img 
                      src={srv.img} 
                      alt={srv.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      loading="lazy"
                    />
                  </div>

                  <div style={{ background: '#edf1ea', borderRadius: '14px', padding: '1.25rem 1.5rem', border: '1px solid #dbe5d8' }}>
                    <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#1d1f1d', display: 'block', marginBottom: '0.65rem', textTransform: 'uppercase' }}>
                      MACHINERY CAPABILITIES & METRICS:
                    </span>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {srv.specs.map((sp, spIdx) => (
                        <li key={spIdx} style={{ fontSize: '0.82rem', color: '#353834', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                          <span style={{ color: '#60685f', fontWeight: 800 }}>•</span>
                          <span>{sp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section style={{ padding: '4.5rem 0', background: '#1d1f1d', color: '#f2f7f0', borderTop: '1px solid rgba(207,227,200,0.15)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
            Need Custom Specification or Material Feasibility Advice?
          </h2>
          <p style={{ color: '#c8d8c6', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Our engineering desk reviews architectural drawings, recommends optimal substrates, and provides rapid cost estimation.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-pill-sage" onClick={onNavigateToContact}>
              <span>Request a Technical Quote</span>
              <span className="arrow-icon">➔</span>
            </button>
            <button className="btn-pill-dark" onClick={onBackToHome}>
              <span>Return to Home Overview</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

