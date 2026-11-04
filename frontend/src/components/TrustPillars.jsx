import React from 'react';

export default function TrustPillars() {
  const pillars = [
    {
      icon: 'fa-gears',
      title: '5-Axis CNC Precision',
      desc: 'High-speed 3D routing, milling & deep architectural fluting'
    },
    {
      icon: 'fa-bolt',
      title: 'Fiber Laser Slicing',
      desc: 'Clean, burr-free sheet metal & brass cutting up to 12mm'
    },
    {
      icon: 'fa-layer-group',
      title: 'Engineered Substrates',
      desc: 'Hardwood, Brass, Stainless Steel, Acrylic, Corian & ACP'
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
