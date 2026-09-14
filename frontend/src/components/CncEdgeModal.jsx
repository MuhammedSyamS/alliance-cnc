import React from 'react';

export default function CncEdgeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        
        <span className="arch-index">02. TECHNICAL MATERIAL MATRIX</span>
        <h2 className="heading-md" style={{ marginBottom: '1rem' }}>
          Materials We Cut & Fabricate in <span className="text-crimson">Kerala</span>
        </h2>

        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.7 }}>
          Our Kochi workshop handles all interior and exterior materials suited for Kerala homes, villas, and commercial buildings.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
          <div style={{ background: 'var(--bg-pitch-black)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-muted)' }}>
            <h4 style={{ color: 'var(--crimson-primary)', fontWeight: 700 }}>Solid Teak Wood & Hardwood</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>Classic Kerala traditional carving, temple doors, pooja room jalis, and staircase balustrades.</p>
          </div>

          <div style={{ background: 'var(--bg-pitch-black)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-muted)' }}>
            <h4 style={{ color: 'var(--crimson-primary)', fontWeight: 700 }}>WPC (100% Monsoon Waterproof)</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>Zero swelling in heavy rain. Perfect for Kerala bathrooms, balconies, and exterior dividers.</p>
          </div>

          <div style={{ background: 'var(--bg-pitch-black)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-muted)' }}>
            <h4 style={{ color: 'var(--crimson-primary)', fontWeight: 700 }}>ACP (Aluminum Composite)</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>UV-resistant exterior building facades, shop signs, and weather-proof perimeter screens.</p>
          </div>

          <div style={{ background: 'var(--bg-pitch-black)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-muted)' }}>
            <h4 style={{ color: 'var(--crimson-primary)', fontWeight: 700 }}>Brass & Stainless Steel</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>Laser cut metal inlay work for luxury main entrance doors, lobby walls, and hotel interiors.</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '2rem' }}>
          <button className="btn btn-primary" onClick={onClose}>Close Window</button>
        </div>
      </div>
    </div>
  );
}
