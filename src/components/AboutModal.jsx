import React from 'react';

export default function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        
        <span className="arch-index">01. OUR KERALA FACTORY STORY</span>
        <h2 className="heading-md" style={{ marginBottom: '1rem' }}>
          Alliance Interior & CNC Solutions <span className="text-crimson">Kochi, Kerala</span>
        </h2>

        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.7 }}>
          Founded in Kalamassery, Ernakulam, ALLIANCE has grown into one of Kerala's premier architectural CNC cutting and complete interior design companies. We bridge the gap between traditional Kerala woodwork craftsmanship and modern 5-axis computer numerical control (CNC) technology.
        </p>

        <h3 className="heading-sm" style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
          Our In-House Machinery & Capabilities
        </h3>
        <ul style={{ color: 'var(--text-main)', paddingLeft: '1.2rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>
          <li><strong>5-Axis Industrial CNC Router:</strong> High-speed 3D wood carving and precision panel slicing up to 0.1mm accuracy.</li>
          <li><strong>Fiber Laser Metal Cutting:</strong> Cutting brass, stainless steel, and aluminum sheets up to 12mm thickness for luxury main entry doors and gates.</li>
          <li><strong>100% Waterproof WPC & Marine Woodwork:</strong> Specially built to withstand Kerala monsoon humidity and dampness.</li>
          <li><strong>Direct Factory Pricing (₹):</strong> Zero middleman commissions — you work directly with our engineering and design team.</li>
        </ul>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '2rem' }}>
          <button className="btn btn-primary" onClick={onClose}>Close Window</button>
        </div>
      </div>
    </div>
  );
}
