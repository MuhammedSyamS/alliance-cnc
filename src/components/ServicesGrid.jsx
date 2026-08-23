import React, { useState } from 'react';
import ServiceModal from './ServiceModal';

const SERVICES = [
  {
    id: 'jali',
    title: 'Architectural CNC Jali Cutting',
    description: 'Precision laser & router cut partition screens, ceiling grilles, and decorative MDF, WPC & Brass panels.',
    img: '/assets/interior_jali_1.jpg',
    features: ['0.1mm Laser Precision', 'Monsoon-Proof WPC & Teak', 'Custom 2D/3D CAD Vectors'],
    fullDetails: 'Our CNC Jali cutting service offers unmatched precision for interior partitions, balcony screens, and decorative ceiling panels. We process WPC, PVC, Teak Wood, MDF, Stainless Steel, and Brass with 0.1mm micro-accuracy. Every piece is fabricated in our Kalamassery workshop to withstand Kerala weather.'
  },
  {
    id: 'facade',
    title: 'Parametric & Exterior Facades',
    description: '3D curved wall louvers, ACP exterior cladding, and weather-resistant architectural elevation panels.',
    img: '/assets/facade_1.jpg',
    features: ['High-Grade ACP & HPL', 'UV & Heavy Rain Proof', 'Engineered Steel Mounting'],
    fullDetails: 'Transform building exteriors with parametric 3D facades and ACP louvers engineered for Kerala climatic extremes. High-impact durability, zero rusting, and precision CNC jointing ensure long-lasting luxury aesthetics.'
  },
  {
    id: 'residential',
    title: 'Residential Interior Solutions',
    description: 'Bespoke modular kitchens, living room wall paneling, CNC cut wardrobes, and custom furniture.',
    img: '/assets/residential_1.jpg',
    features: ['Marine Ply & Teak Finish', 'Hidden Soft-Close Hardware', 'Turnkey Factory Installation'],
    fullDetails: 'Complete residential interior solutions fabricated in-house. From custom bed headboards and TV console paneling to full modular kitchens and dining partitions.'
  },
  {
    id: 'commercial',
    title: 'Commercial & Retail Fitouts',
    description: 'Corporate office reception desks, boutique store displays, acoustic wall slating, and 3D signboards.',
    img: '/assets/commercial_1.jpg',
    features: ['3D Illuminated Logos', 'Heavy-Traffic Durability', 'Fast Factory Turnaround'],
    fullDetails: 'Elevate your commercial brand identity with custom CNC routered reception counters, acoustic slatted walls, and 3D illuminated storefront branding built for high footfall traffic.'
  }
];

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="services section-padding" id="services">
      <div className="container">
        <div className="section-header">
          <span className="arch-index">02 // WHAT WE FABRICATE</span>
          <h2 className="heading-md">Our Core Architectural Services</h2>
          <p className="subheading">
            State-of-the-art CNC routering, 3D laser engraving, and turnkey interior & exterior fabrication directly from our Ernakulam factory.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-img-wrapper">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="service-img" 
                  loading="lazy"
                />
              </div>
              <div className="service-content">
                <div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                </div>
                <button 
                  className="link-btn"
                  onClick={() => setSelectedService(service)}
                  aria-label={`View details for ${service.title}`}
                >
                  View Details & Specifications →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </section>
  );
}
