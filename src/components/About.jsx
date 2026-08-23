import React from 'react';

export default function About({ onOpenAboutDetails }) {
  return (
    <section className="section-padding about-section" id="about" style={{ backgroundColor: 'var(--bg-base)', borderTop: '1px solid var(--border-muted)', borderBottom: '1px solid var(--border-muted)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="heading-md">
            About <span className="text-crimson">Alliance</span>
          </h2>
          <p className="subheading">
            A complete interior and exterior design solutions company powered by in-house industrial CNC router and laser cutting technology.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
          <div>
            <h3 className="heading-sm" style={{ marginBottom: '1rem', color: 'var(--brand-walnut)' }}>
              Craftsmanship Meets Industrial Power
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              At Alliance, we combine modern interior design with our own local factory. By running industrial 5-axis CNC machines in-house, we eliminate middleman markups and third-party delays.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.75rem' }}>
              <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-muted)', boxShadow: 'var(--shadow-light)' }}>
                <span className="arch-index">01. FACTORY</span>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.2rem' }}>In-House Factory</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>No middleman markups or delays.</p>
              </div>

              <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-muted)', boxShadow: 'var(--shadow-light)' }}>
                <span className="arch-index">02. ACCURACY</span>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.2rem' }}>0.1mm Accuracy</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Precision laser & router cuts.</p>
              </div>
            </div>

            <button className="btn btn-outline" onClick={onOpenAboutDetails}>
              View Full Company & Machine Details →
            </button>
          </div>

          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-muted)', boxShadow: 'var(--shadow-hover)' }}>
            <img src="/assets/images/cnc_machinery.jpg" alt="Alliance 5-Axis CNC Factory Machine" style={{ width: '100%', height: '380px', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
