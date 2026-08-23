import React, { useState } from 'react';

const materialData = {
  mdf: {
    title: 'MDF & HDHMR Board (8mm to 30mm)',
    desc: 'High-density water-resistant wood board. Perfect for painted partition screens, 3D wave walls, temple backdrops, and cabinet doors.',
    lead: 'Fast Turnaround: 24 to 48 Hours'
  },
  wpc: {
    title: 'Waterproof WPC Board (8mm to 25mm)',
    desc: '100% waterproof and termite-proof wood composite. Ideal for bathroom screens, outdoor balconies, and damp areas.',
    lead: 'Fast Turnaround: 24 to 48 Hours'
  },
  acp: {
    title: 'Exterior ACP Aluminum Sheet (3mm to 4mm)',
    desc: 'Weather-proof aluminum sheet with durable paint finish. Built for outdoor building fronts, modern wall panels, and sunshades.',
    lead: 'Standard Delivery: 3 to 4 Days'
  },
  acrylic: {
    title: 'Clear & Colored Acrylic Sheets (3mm to 20mm)',
    desc: 'High-gloss acrylic sheets great for backlit LED jali screens, shop signboards, and decorative glowing walls.',
    lead: 'Fast Turnaround: 24 to 48 Hours'
  },
  metal: {
    title: 'Solid Brass & Stainless Steel Sheets (1.5mm to 6mm)',
    desc: 'Luxury metal cutting for hotel lobbies, villa partition screens, and custom hardware accents.',
    lead: 'Standard Delivery: 3 to 5 Days'
  }
};

export default function CncEdge({ onOpenMaterialDetails }) {
  const [activeMat, setActiveMat] = useState('mdf');
  const current = materialData[activeMat];

  return (
    <section className="section-padding cnc-edge" id="cnc-edge">
      <div className="container">
        <div className="section-header">
          <span className="arch-index">02. CAPABILITIES & ADVANTAGES</span>
          <h2 className="heading-md">
            Why Our In-House <span className="text-crimson">Factory Gives You More</span>
          </h2>
          <p className="subheading">
            Unlike interior design agencies that outsource work, we own and run our industrial CNC machines for top quality, fast delivery, and lower prices.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <span className="arch-index">01. PRECISION</span>
            <h3>Laser-Sharp Accuracy</h3>
            <p>Our industrial CNC cutting machines cut intricate 2D and 3D patterns with 0.1mm accuracy for perfect edges.</p>
          </div>

          <div className="feature-card">
            <span className="arch-index">02. IN-HOUSE</span>
            <h3>Factory Machinery</h3>
            <p>No third-party delays. We cut every wood and metal panel directly in our own local factory workshop.</p>
          </div>

          <div className="feature-card">
            <span className="arch-index">03. MATERIALS</span>
            <h3>Multi-Material Cutting</h3>
            <p>We cut MDF, WPC, solid hardwood, ACP aluminum, acrylic plastic, PVC, and solid brass sheets.</p>
          </div>

          <div className="feature-card">
            <span className="arch-index">04. TURNKEY</span>
            <h3>Complete Full Service</h3>
            <p>We take care of everything: site measurement, 3D design, factory cutting, spray polishing, and home installation.</p>
          </div>
        </div>

        {/* Material Capabilities Strip Summary */}
        <div className="material-strip">
          <div className="material-header">
            <div>
              <span className="arch-index">MATERIAL MATRIX</span>
              <h4 className="heading-sm">Approved Factory Materials Summary</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.2rem' }}>
                Select a material to preview specs:
              </p>
            </div>
            <div className="material-tags">
              <button className={`mat-tag ${activeMat === 'mdf' ? 'active' : ''}`} onClick={() => setActiveMat('mdf')}>MDF & Board</button>
              <button className={`mat-tag ${activeMat === 'wpc' ? 'active' : ''}`} onClick={() => setActiveMat('wpc')}>Waterproof WPC</button>
              <button className={`mat-tag ${activeMat === 'acp' ? 'active' : ''}`} onClick={() => setActiveMat('acp')}>Exterior ACP</button>
              <button className={`mat-tag ${activeMat === 'acrylic' ? 'active' : ''}`} onClick={() => setActiveMat('acrylic')}>Cast Acrylic</button>
              <button className={`mat-tag ${activeMat === 'metal' ? 'active' : ''}`} onClick={() => setActiveMat('metal')}>Brass & Metal</button>
            </div>
          </div>

          <div style={{ background: 'var(--bg-base)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-muted)', display: 'flex', items: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <span style={{ fontWeight: '700', color: 'var(--crimson-primary)' }}>{current.title}</span>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{current.desc}</p>
            </div>
            <span className="badge" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-main)', borderColor: 'var(--border-muted)' }}>{current.lead}</span>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button className="btn btn-outline" onClick={onOpenMaterialDetails}>
              Explore Full Material Specifications & Tech Matrix →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
