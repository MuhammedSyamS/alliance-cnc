import React, { useEffect } from 'react';

export default function LightboxModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="modal active" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content blueprint-modal-content" 
        style={{ maxWidth: '1050px', padding: 'clamp(0.85rem, 2.5vw, 1.5rem)', background: '#1d1f1d', border: '1px solid rgba(207, 227, 200, 0.25)', color: '#f2f7f0' }} 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="modal-close" 
          onClick={onClose}
          aria-label="Close image viewer"
          style={{ position: 'absolute', top: '0.85rem', right: '0.85rem', zIndex: 10, background: 'rgba(29, 31, 29, 0.8)', border: '1px solid rgba(207, 227, 200, 0.2)', color: '#f2f7f0', fontSize: '1.4rem', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          &times;
        </button>

        <div className="lightbox-image-container" style={{ textAlign: 'center', background: '#151715', borderRadius: '8px', overflow: 'hidden', padding: '0.5rem', position: 'relative' }}>
          <img 
            src={item.img} 
            alt={item.title} 
            style={{ maxHeight: '65vh', width: 'auto', maxWidth: '100%', objectFit: 'contain', margin: '0 auto', display: 'block', borderRadius: '6px' }} 
          />
          <span className="cad-overlay-pill" style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(29, 31, 29, 0.9)', color: '#cfe3c8', padding: '4px 8px', fontSize: 'clamp(0.6rem, 1.8vw, 0.72rem)', borderRadius: '4px', letterSpacing: '0.05em', border: '1px solid rgba(207, 227, 200, 0.3)' }}>
            ✦ ALLIANCE ARCHITECTURAL SPECIFICATION
          </span>
        </div>

        <div style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ color: '#cfe3c8', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {item.category} • {item.client || 'Enterprise Project'}
            </span>
            <h3 className="heading-sm" style={{ marginTop: '0.25rem', color: '#f2f7f0' }}>{item.title}</h3>
            <p style={{ color: '#d1ded0', fontSize: '0.88rem', marginTop: '0.35rem' }}>
              📍 {item.location} {item.material ? `| Material: ${item.material}` : ''}
            </p>
          </div>

          {item.specs && item.specs.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', maxWidth: '400px' }}>
              {item.specs.map((spec, i) => (
                <span key={i} style={{ background: '#353834', border: '1px solid rgba(207, 227, 200, 0.2)', color: '#cfe3c8', fontSize: '0.75rem', padding: '3px 8px', borderRadius: '4px' }}>
                  ✓ {spec}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
