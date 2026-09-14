import React from 'react';

export default function LightboxModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div class="modal active" onClick={onClose}>
      <div class="modal-content" style={{ maxWidth: '900px', padding: '1.5rem', textAlign: 'center' }} onClick={(e) => e.stopPropagation()}>
        <span class="modal-close" onClick={onClose}>&times;</span>
        <img src={item.img} alt={item.title} style={{ maxHeight: '70vh', margin: '0 auto', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-muted)' }} />
        <h3 class="heading-sm" style={{ marginTop: '1rem' }}>{item.title}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.2rem' }}>{item.meta}</p>
      </div>
    </div>
  );
}
