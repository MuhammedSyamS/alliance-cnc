import React from 'react';

export default function MaterialsTicker() {
  const materials = [
    { name: 'Wood', icon: 'fa-tree' },
    { name: 'Acrylic', icon: 'fa-square' },
    { name: 'Metal', icon: 'fa-cubes' },
    { name: 'Aluminium', icon: 'fa-layer-group' },
    { name: 'MDF', icon: 'fa-bars-staggered' },
    { name: 'ACP / Stone', icon: 'fa-gem' }
  ];

  return (
    <section className="materials-ticker-section" aria-label="Materials We Work With">
      <div className="container">
        <div className="materials-layout-grid">
          
          {/* Left Materials Chips */}
          <div className="materials-col">
            <span className="materials-label-text">Materials We Work With</span>
            <div className="materials-icons-row">
              {materials.map((mat, i) => (
                <div key={i} className="material-chip-item">
                  <div className="material-chip-box">
                    <i className={`fa-solid ${mat.icon}`}></i>
                  </div>
                  <span className="material-chip-name">{mat.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Banner: Turning Ideas into Reality */}
          <div className="turning-ideas-banner">
            <div className="turning-ideas-text">
              <h4 className="turning-ideas-title">Turning Ideas into Reality</h4>
              <p className="turning-ideas-sub">Alliance precision craftsmanship for commercial & custom commissions.</p>
            </div>
            <a href="#contact" className="btn btn-pill-sage">
              Contact Us <span className="arrow-icon">➔</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
