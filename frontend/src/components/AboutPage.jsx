import React from 'react';

export default function AboutPage({ onBackToHome, onNavigateToContact }) {
  const machinerySpecs = [
    {
      title: '5-Axis Multi-Head Industrial CNC Router',
      category: 'Wood, WPC, Acrylic & Solid Surface',
      specs: [
        'High-torque 24,000 RPM liquid-cooled ceramic spindle',
        '2500mm × 1300mm vacuum hold-down bed',
        'Multi-axis simultaneous 3D contouring & relief milling',
        'Automated 12-tool carousel for complex spatial cuts'
      ],
      desc: 'Engineered for rapid 3D relief carving, deep architectural fluting, parametric timber lattices, and high-tolerance solid surface Corian routing.'
    },
    {
      title: 'High-Power Fiber Laser Metal Slicing System',
      category: 'Brass, Stainless Steel & Aluminum',
      specs: [
        'Ultra-narrow beam kerf with mirror-polished edge cut',
        'Up to 12mm thickness in Brass, SS304/316 and Mild Steel',
        'High-pressure nitrogen assist gas for zero-oxide cut faces',
        'Computer-guided optical registration for intricate jali'
      ],
      desc: 'Delivers laser-clean cuts for luxury entrance doors, decorative brass inlays, metal partition screens, and architectural facade panels.'
    },
    {
      title: 'Large-Format Industrial UV Flatbed Printer',
      category: 'Direct Architectural Surface Printing',
      specs: [
        'Direct printing on wood, glass, acrylic, metal and ACP',
        'Multi-layer white + color + clear gloss varnish embossing',
        'UV-cured scratch-resistant and weatherproof inks',
        'Micro-droplet resolution up to 1440 DPI'
      ],
      desc: 'Enables architectural signage, textured wood grain printing, branded retail panels, and backlit displays with vibrant color longevity.'
    },
    {
      title: 'Dust-Free Climate Polish & PU Coating Studio',
      category: 'Monsoon Resilient Finish',
      specs: [
        'Temperature and humidity controlled spray booth',
        'Marine-grade polyurethane (PU) matte and high-gloss coats',
        '100% waterproof seal against coastal Kerala moisture',
        'Automated infrared curing lamps for scratch resistance'
      ],
      desc: 'Guarantees that all interior and exterior timber installations resist Kerala monsoon dampness, termite intrusion, and tropical temperature shifts.'
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'CAD & 3D Vector Drafting',
      desc: 'Our in-house engineers review architectural DWG, DXF, and 3D Rhino/SketchUp models, translating concepts into toolpaths.'
    },
    {
      step: '02',
      title: 'Material Nesting & Sample Proof',
      desc: 'We optimize sheet layouts to reduce waste and produce physical cut samples in specified substrates for architect sign-off.'
    },
    {
      step: '03',
      title: 'Multi-Axis CNC & Laser Machining',
      desc: 'High-precision machining runs in our Kalamassery facility with real-time spindle monitoring and continuous dimension checks.'
    },
    {
      step: '04',
      title: 'Craft Joinery & Surface Finishing',
      desc: 'Experienced Kerala craftsmen hand-sand, assemble interlocking joints, and apply multi-coat polyurethane polishes.'
    },
    {
      step: '05',
      title: 'Turnkey Handover & Site Assembly',
      desc: 'Finished spatial components are protective-wrapped and delivered directly to the site for seamless installation.'
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
            <span className="crumb-current">About Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="testimonials-hero-section">
        <div className="container">
          <div className="section-subtitle-red">
            <span>ABOUT ALLIANCE INTERIOR & CNC SOLUTIONS</span>
            <div className="subtitle-line-red"></div>
          </div>
          <h1 className="testimonials-hero-title">
            Where Master Craftsmanship Meets <span className="text-crimson">Industrial Precision</span>
          </h1>
          <p className="testimonials-hero-sub">
            Alliance is an architectural CNC machining, laser fabrication, and turnkey interior manufacturing company based in Kalamassery, Kochi, Kerala. For over 15 years, we have brought digital design concepts to life for global retail flagships, luxury villas, and commercial spaces across India and the GCC.
          </p>

          {/* Metrics summary bar */}
          <div className="testimonials-stats-bar">
            <div className="stat-pill-box">
              <span className="stat-bold-num">15+</span>
              <span className="stat-label">Years of Craft</span>
            </div>
            <div className="stat-pill-box">
              <span className="stat-bold-num">100+</span>
              <span className="stat-label">Turnkey Projects</span>
            </div>
            <div className="stat-pill-box">
              <span className="stat-bold-num">5-Axis</span>
              <span className="stat-label">CNC Machining</span>
            </div>
            <div className="stat-pill-box">
              <span className="stat-bold-num">100%</span>
              <span className="stat-label">Factory Direct</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Facility Overview Section */}
      <section className="about-deepdive-section" style={{ padding: '5.5rem 0', background: '#FFFFFF', color: '#1d1f1d' }}>
        <div className="container">
          <div className="about-story-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="section-subtitle-red">
                <span>OUR STORY & PHILOSOPHY</span>
                <div className="subtitle-line-red"></div>
              </div>
              <h2 className="heading-md" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, margin: '0.75rem 0 1.5rem', lineHeight: 1.2 }}>
                Pioneering Architectural Spatial Fabrication in Kerala
              </h2>
              <p style={{ color: '#353834', lineHeight: 1.7, marginBottom: '1.25rem', fontSize: '1.02rem' }}>
                Founded with a mission to eliminate the compromises between creative architectural design and practical manufacturing, Alliance has grown into Kerala’s foremost specialized fabrication house.
              </p>
              <p style={{ color: '#353834', lineHeight: 1.7, marginBottom: '1.25rem', fontSize: '1.02rem' }}>
                While traditional carpentry struggles with complex 3D parametric curves and modern metal inlays, and generic industrial machine shops lack the finesse of fine woodworking, Alliance bridges both worlds. Our factory houses high-speed multi-axis CNC routers, precision fiber lasers, and master joinery artisans under one roof.
              </p>
              <p style={{ color: '#353834', lineHeight: 1.7, marginBottom: '2rem', fontSize: '1.02rem' }}>
                We operate on a <strong>100% factory-direct model</strong>. There are no middlemen, broker markups, or outsourced quality risks—you collaborate directly with our engineering draughtsmen and factory craftsmen.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  className="btn btn-pill-sage"
                  onClick={onNavigateToContact}
                >
                  <span>Consult Our Factory Team</span>
                  <span className="arrow-icon">➔</span>
                </button>
                <a 
                  href="https://wa.me/918891790094" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-pill-dark"
                  style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <i className="fa-brands fa-whatsapp" style={{ color: '#25D366' }}></i>
                  <span>Direct WhatsApp Desk</span>
                </a>
              </div>
            </div>

            <div className="about-story-media">
              <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 35px rgba(0,0,0,0.1)', border: '1px solid #dbe5d8' }}>
                <img 
                  src="/images/craft/workshop_craftsmen.jpg" 
                  alt="Alliance In-House Craftsmen and Engineers Reviewing Architectural CNC Drawings" 
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div style={{ background: '#edf1ea', padding: '1.25rem 1.5rem', borderRadius: '12px', marginTop: '1.25rem', border: '1px solid #dbe5d8', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#cfe3c8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className="fa-solid fa-location-dot" style={{ color: '#1d1f1d' }}></i>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#1d1f1d', margin: 0 }}>Alliance Production & Engineering Hub</h4>
                  <p style={{ fontSize: '0.82rem', color: '#60685f', margin: '2px 0 0 0' }}>Kalamassery, Ernakulam, Kerala 683104 • GCC Desk: +973 35985107</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery & Technology Deep Dive */}
      <section className="about-machinery-section" style={{ padding: '5.5rem 0', background: '#edf1ea', color: '#1d1f1d', borderTop: '1px solid #dbe5d8', borderBottom: '1px solid #dbe5d8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <div className="section-subtitle-red" style={{ justifyContent: 'center' }}>
              <span>IN-HOUSE INFRASTRUCTURE</span>
              <div className="subtitle-line-red"></div>
            </div>
            <h2 className="heading-md" style={{ fontSize: 'clamp(2rem, 3.6vw, 2.8rem)', fontWeight: 800, margin: '0.5rem 0 1rem' }}>
              Industrial Machinery & Machining Capabilities
            </h2>
            <p style={{ color: '#353834', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Every cut, contour, and joinery component is produced on our own factory floor using state-of-the-art multi-axis CNC routers and high-output fiber lasers.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '1.75rem' }}>
            {machinerySpecs.map((m, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: '#FFFFFF', 
                  borderRadius: '16px', 
                  padding: '2rem', 
                  border: '1px solid #dbe5d8',
                  boxShadow: '0 6px 20px rgba(29,31,29,0.04)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', color: '#60685f', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  {m.category}
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1d1f1d', marginBottom: '1rem', lineHeight: 1.3 }}>
                  {m.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#353834', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                  {m.desc}
                </p>
                
                <div style={{ background: '#f7faf5', borderRadius: '10px', padding: '1rem 1.15rem', border: '1px solid #e3ede0' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1d1f1d', display: 'block', marginBottom: '0.5rem' }}>
                    KEY SPECIFICATIONS:
                  </span>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {m.specs.map((spec, sIdx) => (
                      <li key={sIdx} style={{ fontSize: '0.82rem', color: '#353834', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ color: '#258b29', fontWeight: 800 }}>✓</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Stage Execution Workflow */}
      <section style={{ padding: '5.5rem 0', background: '#FFFFFF', color: '#1d1f1d' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <div className="section-subtitle-red" style={{ justifyContent: 'center' }}>
              <span>FACTORY WORKFLOW</span>
              <div className="subtitle-line-red"></div>
            </div>
            <h2 className="heading-md" style={{ fontSize: 'clamp(2rem, 3.6vw, 2.8rem)', fontWeight: 800, margin: '0.5rem 0 1rem' }}>
              From Digital Concept to On-Site Reality
            </h2>
            <p style={{ color: '#353834', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Our 5-stage turnkey workflow guarantees architectural fidelity, tight tolerances, and predictable handover schedules.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.5rem' }}>
            {workflowSteps.map((wf, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: '#f7faf5', 
                  borderRadius: '14px', 
                  padding: '1.75rem 1.4rem', 
                  border: '1px solid #dbe5d8',
                  position: 'relative'
                }}
              >
                <span style={{ fontSize: '2rem', fontWeight: 900, color: '#b9d6b1', display: 'block', marginBottom: '0.5rem', lineHeight: 1 }}>
                  {wf.step}
                </span>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1d1f1d', marginBottom: '0.75rem' }}>
                  {wf.title}
                </h4>
                <p style={{ fontSize: '0.86rem', color: '#353834', lineHeight: 1.55 }}>
                  {wf.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section style={{ padding: '4.5rem 0', background: '#1d1f1d', color: '#f2f7f0', borderTop: '1px solid rgba(207,227,200,0.15)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
            Start Your Custom Architectural Project with Alliance
          </h2>
          <p style={{ color: '#c8d8c6', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Send us your CAD drawings or concept sketches for instant engineer review and factory-direct pricing.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-pill-sage" onClick={onNavigateToContact}>
              <span>Get in Touch with Our Team</span>
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

