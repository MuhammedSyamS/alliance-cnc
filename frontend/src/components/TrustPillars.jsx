import React from 'react';

export default function TrustPillars() {
  const pillars = [
    {
      icon: 'fa-gem',
      title: 'High Precision',
      desc: 'Clean and accurate cuts and engravings'
    },
    {
      icon: 'fa-shield-halved',
      title: 'Premium Materials',
      desc: 'Wood, Acrylic, Metal, Aluminium & more'
    },
    {
      icon: 'fa-shapes',
      title: 'Custom Designs',
      desc: 'Your ideas, our expertise'
    },
    {
      icon: 'fa-bolt',
      title: 'Fast Turnaround',
      desc: 'On-time delivery, without compromise'
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
