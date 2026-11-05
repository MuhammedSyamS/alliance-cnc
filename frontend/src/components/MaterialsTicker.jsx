import React from 'react';

export default function MaterialsTicker() {
  const cuttingAndEngraving = [
    { name: 'Wood', icon: 'fa-tree' },
    { name: 'Acrylic', icon: 'fa-square' },
    { name: 'ACP', icon: 'fa-layer-group' },
    { name: 'MDF', icon: 'fa-bars-staggered' },
    { name: 'Plywood', icon: 'fa-cubes-stacked' },
    { name: 'WPC', icon: 'fa-shield-halved' },
    { name: 'PVC', icon: 'fa-border-all' },
    { name: 'Gypsum Board', icon: 'fa-table-cells-large' },
    { name: 'Stainless Steel', icon: 'fa-cube' },
    { name: 'Metal', icon: 'fa-cubes' },
    { name: 'GI Sheet', icon: 'fa-sheet-plastic' },
    { name: 'Foam Board', icon: 'fa-square-full' },
    { name: 'Forex Sheet', icon: 'fa-file-lines' }
  ];

  const engravingOnly = [
    { name: 'Mirror', icon: 'fa-clone' },
    { name: 'Glass', icon: 'fa-wine-glass' }
  ];

  return (
    <section className="materials-ticker-section" id="materials" aria-label="Materials and Capabilities">
      <div className="container">
        
        {/* Section Header */}
        <div className="materials-section-header">
          <div className="section-subtitle-red">
            <span>MATERIALS & CAPABILITIES</span>
            <div className="subtitle-line-red"></div>
          </div>
          
          <div className="materials-title-row">
            <div>
              <h2 className="materials-section-title">
                Substrates & Processes We Execute
              </h2>
              <p className="materials-section-sub">
                Factory-direct fabrication in Nedumangad, Trivandrum. Precision tooling calibrated for every material.
              </p>
            </div>
            
            <div className="cnc-priority-badge">
              <span className="priority-pulse-dot"></span>
              <span className="priority-badge-text">CNC Cutting is Our Primary Priority</span>
            </div>
          </div>
        </div>

        {/* Group 1: Cutting & Engraving (13 Substrates) */}
        <div className="materials-group-block">
          <div className="materials-group-header">
            <div className="group-header-left">
              <span className="materials-group-tag">PROCESS 01</span>
              <h3 className="materials-group-title">
                Cutting & Engraving
                <span className="group-count-badge">13 Substrates</span>
              </h3>
            </div>
            <span className="materials-group-note">
              Full 2D/3D CNC cutting, sizing, routing, and high-accuracy laser surface engraving
            </span>
          </div>

          <div className="materials-chips-wrap">
            {cuttingAndEngraving.map((mat, i) => (
              <div key={i} className="material-substrate-chip">
                <div className="substrate-icon-box">
                  <i className={`fa-solid ${mat.icon}`}></i>
                </div>
                <div className="substrate-meta">
                  <span className="substrate-name">{mat.name}</span>
                  <span className="substrate-capability">Cutting & Engraving</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Group 2: Engraving Only (Mirror & Glass) */}
        <div className="materials-group-block engraving-only-block">
          <div className="materials-group-header">
            <div className="group-header-left">
              <span className="materials-group-tag specialty-tag">PROCESS 02</span>
              <h3 className="materials-group-title">
                Engraving Only
                <span className="group-count-badge gold">2 Substrates</span>
              </h3>
            </div>
            <span className="materials-group-note">
              Specialized high-detail surface engraving, monogramming, and frosted relief etching
            </span>
          </div>

          <div className="materials-chips-wrap">
            {engravingOnly.map((mat, i) => (
              <div key={i} className="material-substrate-chip specialty-chip">
                <div className="substrate-icon-box specialty-box">
                  <i className={`fa-solid ${mat.icon}`}></i>
                </div>
                <div className="substrate-meta">
                  <span className="substrate-name">{mat.name}</span>
                  <span className="substrate-capability engraving-tag">Engraving Only</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="turning-ideas-banner">
          <div className="turning-ideas-text">
            <h4 className="turning-ideas-title">Have Custom Substrates or CAD Drawings?</h4>
            <p className="turning-ideas-sub">
              Direct factory engineering in Nedumangad, Trivandrum. Fast CAD reviews & itemized estimates.
            </p>
          </div>
          <a href="#contact" className="btn btn-pill-sage">
            <span>Request CNC Quote</span>
            <span className="arrow-icon">➔</span>
          </a>
        </div>

      </div>
    </section>
  );
}
