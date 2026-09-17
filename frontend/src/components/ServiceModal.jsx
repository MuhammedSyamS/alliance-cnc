import React from 'react';

const serviceModalData = {
  residential: {
    title: 'Residential Interior Design & Fabrication',
    desc: 'Complete turnkey interior solutions for luxury villas, apartments, and modern homes. Alliance in-house factory cuts custom wall backdrops, modular kitchens, wardrobes, and living room media units.',
    specs: [
      '3D Concept Rendering & CAD Floor Planning',
      'Custom Parametric Headboard & Accent Wall CNC Milling',
      'Modular Kitchen Cabinetry with Soft-Close Hardware',
      'Custom Ceiling Drops and Lighting Slots'
    ]
  },
  commercial: {
    title: 'Commercial & Retail Shop Fit-outs',
    desc: 'High-impact retail shopfronts, luxury brand boutiques, and corporate office interiors designed to maximize customer footfall and brand identity.',
    specs: [
      'Parametric Louvered CNC Wooden Ceiling Ribs',
      'Custom Cash Counter Fronts with Brass / Acrylic Inlays',
      'High-Traffic Commercial Grade Polyurethane Coatings',
      '24-Hour Rapid Night-Time Installation Support'
    ]
  },
  jali: {
    title: 'Custom CNC Jali Screens & 3D Relief Panels',
    desc: 'Architectural partition screens, temple mandir backdrops, and relief wall panels milled on industrial multi-axis routers.',
    specs: [
      'Over 500+ Vector Pattern Libraries (Islamic, Parametric, Floral, Geometrical)',
      'Thickness options from 6mm up to 50mm Solid Stock',
      'Seamless Interlocking Finger-Joints for Large Wall Spans',
      'Factory PU Spray Polish / Metallic Powder Coating'
    ]
  },
  facade: {
    title: 'Architectural Exterior Facades & Ceilings',
    desc: 'Weather-proof exterior ACP perforated building envelopes, sunshades, and backlit ceiling panels engineered to withstand harsh wind loads.',
    specs: [
      'PVDF Coated Exterior Grade ACP / Aluminum Sheets',
      'Laser-Guided Cut Perforations for Thermal & Light Control',
      'Custom Structural Aluminum Sub-framing',
      'Integrated Crimson & RGB LED Light Tracking Channels'
    ]
  }
};

export default function ServiceModal({ serviceKey, onClose }) {
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!serviceKey) return null;
  const data = serviceModalData[serviceKey];
  if (!data) return null;

  return (
    <div className="modal active" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose} role="button" aria-label="Close modal">&times;</span>
        <h3 className="heading-sm text-crimson">{data.title}</h3>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: '1.6' }}>{data.desc}</p>
        
        <div style={{ marginTop: '1.5rem', background: 'var(--bg-base)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-muted)' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '0.5rem' }}>Technical Capabilities &amp; Materials:</h4>
          <ul style={{ color: 'var(--text-main)', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {data.specs.map((item, idx) => (
              <li key={idx}><i className="fa-solid fa-check text-crimson"></i> {item}</li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap', gap: '0.75rem' }}>
          <a href="#quote" className="btn btn-primary" onClick={onClose} style={{ padding: '0.6rem 1.4rem', fontSize: '0.88rem' }}>
            Request Quote for This Service
          </a>
        </div>
      </div>
    </div>
  );
}
