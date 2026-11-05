import React from 'react';

export default function TrustPillars() {
  const pillars = [
    {
      icon: 'fa-gears',
      title: 'CNC Cutting (Priority #1)',
      desc: 'Heavy-duty 2D/3D CNC sheet cutting, routing & precision sizing'
    },
    {
      icon: 'fa-layer-group',
      title: 'Cutting & Engraving',
      desc: 'Wood, Acrylic, ACP, MDF, Plywood, WPC, PVC, Metal, GI & Foam board'
    },
    {
      icon: 'fa-gem',
      title: 'Engraving Only',
      desc: 'High-detail precision surface engraving for Mirror and Glass'
    },
    {
      icon: 'fa-pen-ruler',
      title: 'Turnkey Architectural Design',
      desc: 'CAD drafting, bespoke interior fit-outs & on-site assembly'
    }
  ];

  return (
    <section className="trust-pillars-section" aria-label="Key Capabilities and Guarantees">
      <div className="container">
        <div className="trust-pillars-grid">
          {pillars.map((item, idx) => (
            <div key={idx} className="trust-pillar-card">
              <div className="pillar-icon-box">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <div className="pillar-text">
                <h4 className="pillar-title">{item.title}</h4>
                <p className="pillar-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
