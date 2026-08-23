import React, { useState } from 'react';
import CncEdgeModal from './CncEdgeModal';

const ADVANTAGES = [
  {
    id: 1,
    title: '0.1mm Laser Precision',
    description: 'Computer-controlled German router bits and high-wattage fiber lasers cut complex parametric vectors without material burn or splintering.'
  },
  {
    id: 2,
    title: 'Monsoon Waterproof Materials',
    description: 'Specialized 100% moisture-proof WPC, Marine Plywood, and Anodized Aluminum engineered for high humidity & monsoon rain.'
  },
  {
    id: 3,
    title: 'Zero Middleman Markup',
    description: 'Direct factory pricing with raw material procurement. You pay purely for design vectoring & machine cutting time.'
  },
  {
    id: 4,
    title: '24hr Drawing & Vector Review',
    description: 'Send us your DXF, PDF or sketch — our CAD engineers generate 3D cut previews and material optimization sheets within 24 hours.'
  }
];

export default function CncEdge() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="cnc-edge section-padding" id="about">
      <div className="container">
        <div className="section-header">
          <span className="arch-index">WHY CHOOSE ALLIANCE</span>
          <h2 className="heading-md">The ALLIANCE Factory Precision Standard</h2>
          <p className="subheading">
            Combining state-of-the-art multi-axis CNC machinery with experienced interior craftsmanship in Kalamassery, Kochi.
          </p>
        </div>

        {/* Responsive Features Grid */}
        <div className="features-grid">
          {ADVANTAGES.map((item, idx) => (
            <div key={item.id} className="feature-card">
              <span className="arch-index">0{idx + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Material Capabilities Strip */}
        <div className="material-strip">
          <div className="material-header">
            <div>
              <h3 className="heading-sm">Supported CNC Materials & Thicknesses</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Precision processed in our Ernakulam factory studio.</p>
            </div>
            <button 
              className="btn btn-outline"
              onClick={() => setShowModal(true)}
              aria-label="View Full Factory Material Spec Sheet"
            >
              View Full Material Specs →
            </button>
          </div>
          <div className="material-tags">
            <span className="mat-tag active">WPC Board (6mm - 25mm)</span>
            <span className="mat-tag">Solid Teak Wood (12mm - 50mm)</span>
            <span className="mat-tag">MDF & HDF (3mm - 25mm)</span>
            <span className="mat-tag">ACP Exterior Cladding</span>
            <span className="mat-tag">Acrylic & Polycarbonate</span>
            <span className="mat-tag">Brass & SS Sheets</span>
          </div>
        </div>
      </div>

      {showModal && <CncEdgeModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
