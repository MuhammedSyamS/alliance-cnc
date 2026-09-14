import React from 'react';

export default function About({ onOpenAboutDetails }) {
  return (
    <section className="section-padding about-section" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-md">
            About <span className="text-crimson">Alliance</span>
          </h2>
          <p className="subheading">
            A complete interior and exterior design solutions company powered by in-house industrial CNC router and laser cutting technology.
          </p>
        </div>

        <div className="about-grid">
          <div>
            <h3 className="heading-sm" style={{ marginBottom: '1rem', color: 'var(--brand-walnut)' }}>
              Craftsmanship Meets Industrial Power
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              At Alliance, we combine modern interior design with our own local factory. By running industrial 5-axis CNC machines in-house, we eliminate middleman markups and third-party delays.
            </p>

            <div className="about-stats-grid">
              <div className="about-stat-card">
                <span className="arch-index">01. FACTORY</span>
                <h4>In-House Factory</h4>
                <p>No middleman markups or delays.</p>
              </div>

              <div className="about-stat-card">
                <span className="arch-index">02. ACCURACY</span>
                <h4>0.1mm Accuracy</h4>
                <p>Precision laser & router cuts.</p>
              </div>
            </div>

            <button className="btn btn-outline" style={{ width: '100%' }} onClick={onOpenAboutDetails}>
              View Full Company & Machine Details →
            </button>
          </div>

          <div className="about-img-box">
            <img src="/assets/images/cnc_machinery.jpg" alt="Alliance 5-Axis CNC Factory Machine" />
          </div>
        </div>
      </div>
    </section>
  );
}
