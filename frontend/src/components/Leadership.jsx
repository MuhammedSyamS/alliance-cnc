import React, { useState } from 'react';

export default function Leadership() {
  const credentials = [
    {
      metric: '15+',
      label: 'Years Enterprise Experience',
      sub: 'Bahrain, Saudi Arabia, UAE & India'
    },
    {
      metric: '50+',
      label: 'Flagship Stores Delivered',
      sub: 'Global Retail & Commercial Fitouts'
    },
    {
      metric: '0.1mm',
      label: 'Precision CAD/CAM Detailing',
      sub: 'AutoCAD, 3ds Max & CNC Routers'
    },
    {
      metric: '100%',
      label: 'Turnkey Project Accountability',
      sub: 'From Concept to On-Site Surveillance'
    }
  ];

  const competencies = [
    {
      title: 'Strategic Concept Development',
      desc: 'Expert in conceptualizing diverse commercial, retail, and hospitality projects using intelligent, data-driven spatial algorithms and luxury architectural design systems.'
    },
    {
      title: 'Corporate & MNC Collaboration',
      desc: 'Proven track record partnering directly with enterprise leadership, multinational retail directors, and cross-functional project teams to achieve high-level business milestones.'
    },
    {
      title: 'Global Brand Integration',
      desc: 'Mastery in interpreting international brand manuals (Adidas Global, Reebok, Olympia Sports) and translating brand guidelines into immaculate physical retail architecture.'
    },
    {
      title: 'Bespoke Interior & Furniture Engineering',
      desc: 'Specialized in custom parametric ceilings, complex CNC-routed jali partition matrices, and tailor-made modular retail fixtures engineered for heavy footfall durability.'
    },
    {
      title: 'Precision CAD & 3D Visualization',
      desc: 'End-to-end technical documentation: millimeter-accurate AutoCAD 2D drafting, photo-realistic 3ds Max spatial rendering, and complete structural fabrication drawings.'
    },
    {
      title: 'Project Surveillance & Quality Governance',
      desc: 'Rigorous on-site technical inspection, vendor and structural contractor synchronization, material specification compliance, and precision timeline management.'
    }
  ];

  return (
    <section className="leadership-section section-padding" id="leadership">
      <div className="container">
        
        {/* Section Overhead Tag */}
        <div className="section-header text-left">
          <div className="arch-badge-tag">
            <span className="live-indicator"></span>
            EXECUTIVE LEADERSHIP & DESIGN DIRECTION
          </div>
          <h2 className="heading-md">
            Architectural Vision Backed by <span className="text-crimson">Global MNC Pedigree</span>
          </h2>
          <p className="subheading" style={{ maxWidth: '820px' }}>
            Alliance is steered by seasoned architectural designer and spatial director Niyaz Samad. 
            Blending international luxury retail architecture with our state-of-the-art in-house CNC router and laser manufacturing facilities.
          </p>
        </div>

        {/* Executive Profile Card */}
        <div className="founder-executive-card">
          <div className="founder-card-grid">
            
            {/* Left Column: Portrait & Direct Contact */}
            <div className="founder-visual-col">
              <div className="founder-img-wrapper">
                <img 
                  src="/assets/founder/niyaz_samad.jpg" 
                  alt="Niyaz Samad - Architecture 3D Graphics Designer & Founder" 
                  className="founder-portrait-img"
                />
                <div className="founder-blueprint-watermark">
                  <span>CAD / 3DS MAX / CNC CAM</span>
                </div>
                <div className="founder-status-chip">
                  <i className="fa-solid fa-compass-drafting"></i> Principal Spatial Designer
                </div>
              </div>

              {/* Direct Contact & GCC Line */}
              <div className="founder-direct-box">
                <h4 className="founder-direct-title">Direct Corporate Consultation</h4>
                <div className="founder-contact-item">
                  <i className="fa-solid fa-phone text-crimson"></i>
                  <div>
                    <span className="contact-label">GCC Executive Line</span>
                    <a href="tel:+97335985107" className="contact-val">+973 35985107</a>
                  </div>
                </div>
                <div className="founder-contact-item">
                  <i className="fa-solid fa-envelope text-crimson"></i>
                  <div>
                    <span className="contact-label">Direct Design Desk</span>
                    <a href="mailto:niyazsamad@outlook.com" className="contact-val">niyazsamad@outlook.com</a>
                  </div>
                </div>
                <div className="founder-contact-item">
                  <i className="fa-solid fa-globe text-crimson"></i>
                  <div>
                    <span className="contact-label">Operational Reach</span>
                    <span className="contact-val">Kingdom of Bahrain • GCC • Kerala, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative, Accolades & Core Competencies */}
            <div className="founder-bio-col">
              <div className="founder-title-badge-row">
                <div>
                  <h3 className="founder-name">NIYAZ SAMAD</h3>
                  <p className="founder-role">FOUNDER & PRINCIPAL ARCHITECTURAL 3D DESIGNER</p>
                </div>
                <div className="founder-credentials-tag">
                  <span>MNC RETAIL SPECIALIST</span>
                </div>
              </div>

              <p className="founder-quote">
                “True architectural excellence is the seamless collision between high-concept 3D spatial vision and micron-level factory execution. We don’t just design spaces — we engineer every component for industrial manufacturability.”
              </p>

              <p className="founder-description">
                With a decorated international career leading high-stakes architectural design and store rollouts for global retail titans including <strong>Adidas Global</strong>, <strong>Reebok</strong>, <strong>Olympia Sports</strong>, and premier destination malls across the Gulf (The Avenues, City Centre, Al Liwan, Seef Mall), Niyaz brings multinational corporate rigor to Alliance.
              </p>

              {/* Key Credentials Strip */}
              <div className="founder-metrics-grid">
                {credentials.map((c, idx) => (
                  <div key={idx} className="founder-metric-card">
                    <span className="founder-metric-number">{c.metric}</span>
                    <h5 className="founder-metric-label">{c.label}</h5>
                    <p className="founder-metric-sub">{c.sub}</p>
                  </div>
                ))}
              </div>

              {/* Strategic Competencies Grid */}
              <div className="competencies-container">
                <h4 className="competencies-heading">Core Enterprise Pillars</h4>
                <div className="competencies-grid">
                  {competencies.map((comp, idx) => (
                    <div key={idx} className="competency-card">
                      <div className="comp-header">
                        <span className="comp-num">0{idx + 1}</span>
                        <h5 className="comp-title">{comp.title}</h5>
                      </div>
                      <p className="comp-desc">{comp.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Row */}
              <div className="founder-cta-row">
                <a href="#flagship-projects" className="btn btn-primary">
                  <i className="fa-solid fa-layer-group"></i> Explore Landmark Case Studies
                </a>
                <a href="#quote" className="btn btn-outline">
                  <i className="fa-solid fa-file-signature"></i> Commission Custom Project
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
