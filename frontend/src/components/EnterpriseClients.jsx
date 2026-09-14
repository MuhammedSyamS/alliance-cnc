import React from 'react';

export default function EnterpriseClients() {
  const brands = [
    { name: 'Adidas Global', category: 'Sportswear & Footwear' },
    { name: 'Adidas Originals', category: 'Lifestyle Fashion' },
    { name: 'Reebok', category: 'Fitness & Athletic' },
    { name: 'Olympia Sports', category: 'Mega Retail Chain' },
    { name: 'Olympia Health & Fitness', category: 'Commercial Wellness' },
    { name: 'Spartan Fitness', category: 'Athletic Infrastructure' },
    { name: 'Kryolan Professional', category: 'Global Cosmetics' },
    { name: 'Artdeco Make-Up', category: 'European Luxury' },
    { name: 'Cosmetica', category: 'Retail Beauty' },
    { name: 'Baindemer Saint-Tropez', category: 'Haute Resort Wear' },
    { name: 'The Avenues Mall', category: 'Landmark Development' },
    { name: 'Al Liwan Hamala', category: 'Prime Commercial' },
    { name: 'Seef Mall', category: 'Destination Retail' },
    { name: 'City Centre Bahrain', category: 'Premier Shopping' },
    { name: 'Oxygen Pharmacy', category: 'Healthcare Architecture' },
    { name: 'BakeMate', category: 'Commercial Food & Hospitality' },
    { name: 'Benchmark', category: 'Commercial Mall Retail' },
    { name: 'Net Lite Contracting', category: 'Infrastructure & Fitouts' }
  ];

  return (
    <section className="enterprise-clients-section" id="enterprise-clients">
      <div className="container">
        
        <div className="clients-top-row">
          <div className="clients-header-badge">
            <span className="live-pulse"></span>
            ENTERPRISE BRAND ASSOCIATIONS
          </div>
          <p className="clients-lead-text">
            Architectural concepts, CAD spatial engineering, and flagship fitouts trusted by global multinational icons.
          </p>
        </div>

        {/* Global Brand Association High-Res Visual Banner */}
        <div className="brand-roster-banner-wrapper">
          <img 
            src="/assets/founder/brand_associations_enterprise.jpg" 
            alt="Key Brand Associations: Adidas, Reebok, Olympia Sports, Kryolan, Artdeco, Spartan Fitness" 
            className="brand-roster-img"
          />
        </div>

        {/* Dynamic Continuous Marquee Ticker */}
        <div className="brand-ticker-container">
          <div className="brand-ticker-track">
            {brands.concat(brands).map((b, i) => (
              <div key={i} className="ticker-pill">
                <span className="ticker-star">✦</span>
                <span className="ticker-name">{b.name}</span>
                <span className="ticker-category">[{b.category}]</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
