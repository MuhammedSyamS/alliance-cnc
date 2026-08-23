import React from 'react';

export default function ServicesGrid({ onSelectService }) {
  return (
    <section className="section-padding services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="arch-index">03. DESIGN & FABRICATION</span>
          <h2 className="heading-md">
            Our Core <span className="text-crimson">Services</span>
          </h2>
          <p className="subheading">
            Custom interior design packages combined with direct factory CNC cutting.
          </p>
        </div>

        <div className="services-grid">
          {/* Service 1 */}
          <div className="service-card">
            <img src="/assets/images/residential_interior.jpg" alt="Residential Interior Design" className="service-img" />
            <div className="service-content">
              <div>
                <span className="arch-index">01. RESIDENTIAL</span>
                <h3 className="service-title">Home Interior Design</h3>
                <p className="service-desc">Complete interior design for living rooms, master bedrooms, kitchens, and custom furniture.</p>
                <ul className="service-features">
                  <li>3D Room Design & Floor Plans</li>
                  <li>Custom CNC Wall Panels & Bed Backdrops</li>
                  <li>Modular Kitchens & Built-in Wardrobes</li>
                </ul>
              </div>
              <button className="link-btn" onClick={() => onSelectService('residential')}>
                See Full Specs →
              </button>
            </div>
          </div>

          {/* Service 2 */}
          <div className="service-card">
            <img src="/assets/images/commercial_fitout.jpg" alt="Commercial Shop Fit-outs" className="service-img" />
            <div className="service-content">
              <div>
                <span className="arch-index">02. COMMERCIAL</span>
                <h3 className="service-title">Shop & Office Fit-outs</h3>
                <p className="service-desc">Eye-catching interior design for retail shops, offices, cafes, and showrooms built to attract customers.</p>
                <ul className="service-features">
                  <li>Decorative CNC Wooden Ceiling Waves</li>
                  <li>Backlit Reception Desks & Display Racks</li>
                  <li>Heavy-Duty Long Lasting Finishes</li>
                </ul>
              </div>
              <button className="link-btn" onClick={() => onSelectService('commercial')}>
                See Full Specs →
              </button>
            </div>
          </div>

          {/* Service 3 */}
          <div className="service-card">
            <img src="/assets/images/cnc_jali_panels.jpg" alt="Custom CNC Jali & Wall Panels" className="service-img" />
            <div className="service-content">
              <div>
                <span className="arch-index">03. CNC JALI</span>
                <h3 className="service-title">Custom CNC Jali & Wall Panels</h3>
                <p className="service-desc">Intricate 2D and 3D CNC jali screens, room partition walls, mandir backdrops, and decorative wall art.</p>
                <ul className="service-features">
                  <li>Choose From 500+ Patterns</li>
                  <li>Cut in MDF, Wood, Brass, and Acrylic</li>
                  <li>Clean Seamless Joints for Big Walls</li>
                </ul>
              </div>
              <button className="link-btn" onClick={() => onSelectService('jali')}>
                See Patterns →
              </button>
            </div>
          </div>

          {/* Service 4 */}
          <div className="service-card">
            <img src="/assets/images/architectural_facade.jpg" alt="Architectural Facades & Ceilings" className="service-img" />
            <div className="service-content">
              <div>
                <span className="arch-index">04. EXTERIOR</span>
                <h3 className="service-title">Building Facades & Ceilings</h3>
                <p className="service-desc">Weather-proof outdoor building front panels, window sunshades, and illuminated ceiling lattices.</p>
                <ul className="service-features">
                  <li>Outdoor Weather-Proof Aluminum Panels</li>
                  <li>Built-in LED Backlight Channels</li>
                  <li>Strong Frame Mounting Systems</li>
                </ul>
              </div>
              <button className="link-btn" onClick={() => onSelectService('facade')}>
                See Full Specs →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
