import React, { useState } from 'react';

export default function JaliEstimator({ onProceedToQuote }) {
  const [pattern, setPattern] = useState('Parametric Wave');
  const [material, setMaterial] = useState('Teak Wood');
  const [thickness, setThickness] = useState('18mm');
  const [widthFt, setWidthFt] = useState(4);
  const [heightFt, setHeightFt] = useState(8);

  // Material rates in INR per sq ft
  const materialRates = {
    'MDF (Interior Only)': 120,
    'WPC 100% Waterproof': 160,
    'Teak Wood': 280,
    'ACP Exterior Facade': 220,
    'Acrylic (Translucent)': 320
  };

  const currentRate = materialRates[material] || 180;
  const sqFt = widthFt * heightFt;
  const estimatedCostINR = Math.round(sqFt * currentRate);

  const handleSendToQuote = () => {
    if (onProceedToQuote) {
      onProceedToQuote({
        service: 'Custom CNC Cutting Only',
        dimensions: `${widthFt}ft x ${heightFt}ft (${sqFt} sq.ft)`,
        description: `Kerala Jali Estimator Request: Pattern "${pattern}", Material "${material} (${thickness})". Estimated Price: ₹${estimatedCostINR.toLocaleString('en-IN')}.`
      });
      const quoteElement = document.getElementById('quote');
      if (quoteElement) {
        quoteElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="section-padding estimator-section" id="estimator">
      <div className="container">
        <div className="section-header">
          <span className="arch-index">04. KERALA JALI PRICE ESTIMATOR</span>
          <h2 className="heading-md">
            Calculate CNC Jali Panel <span className="text-crimson">Cost (₹ INR)</span>
          </h2>
          <p className="subheading">
            Choose your pattern, material (MDF, WPC Waterproof, Teak Wood, ACP), and dimensions to get an instant estimated price for your Kerala home or shop project.
          </p>
        </div>

        <div className="estimator-box">
          <div className="estimator-controls">
            <div className="form-group">
              <label className="form-label">1. Choose Jali Pattern:</label>
              <div className="pattern-options">
                <button 
                  type="button" 
                  className={`pattern-btn ${pattern === 'Parametric Wave' ? 'active' : ''}`}
                  onClick={() => setPattern('Parametric Wave')}
                >
                  Parametric Wave
                </button>
                <button 
                  type="button" 
                  className={`pattern-btn ${pattern === 'Traditional Kerala' ? 'active' : ''}`}
                  onClick={() => setPattern('Traditional Kerala')}
                >
                  Kerala Traditional
                </button>
                <button 
                  type="button" 
                  className={`pattern-btn ${pattern === 'Islamic Star' ? 'active' : ''}`}
                  onClick={() => setPattern('Islamic Star')}
                >
                  Islamic Star
                </button>
                <button 
                  type="button" 
                  className={`pattern-btn ${pattern === 'Modern Lattice' ? 'active' : ''}`}
                  onClick={() => setPattern('Modern Lattice')}
                >
                  Modern Lattice
                </button>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">2. Select Material:</label>
              <select 
                className="custom-select" 
                value={material} 
                onChange={(e) => setMaterial(e.target.value)}
              >
                <option value="MDF (Interior Only)">MDF Board (Interior Rooms)</option>
                <option value="WPC 100% Waterproof">WPC Board (100% Kerala Monsoon Waterproof)</option>
                <option value="Teak Wood">Solid Teak Wood (Kerala Classic)</option>
                <option value="ACP Exterior Facade">ACP Aluminum Sheet (Building Exterior)</option>
                <option value="Acrylic (Translucent)">Cast Acrylic (Backlit Lighting)</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">3. Select Sheet Thickness:</label>
              <select 
                className="custom-select" 
                value={thickness} 
                onChange={(e) => setThickness(e.target.value)}
              >
                <option value="6mm">6mm (Light Decorative Partition)</option>
                <option value="12mm">12mm (Standard Room Screen)</option>
                <option value="18mm">18mm (Heavy Duty Furniture Panel)</option>
                <option value="25mm">25mm (3D Carved Deep Panel)</option>
              </select>
            </div>

            <div className="slider-group">
              <div className="slider-info">
                <span className="form-label">4. Panel Width (Feet):</span>
                <span style={{ fontWeight: 700, color: 'var(--crimson-primary)' }}>{widthFt} FT</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="10" 
                step="0.5" 
                value={widthFt} 
                onChange={(e) => setWidthFt(parseFloat(e.target.value))} 
              />
            </div>

            <div className="slider-group">
              <div className="slider-info">
                <span className="form-label">5. Panel Height (Feet):</span>
                <span style={{ fontWeight: 700, color: 'var(--crimson-primary)' }}>{heightFt} FT</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="12" 
                step="0.5" 
                value={heightFt} 
                onChange={(e) => setHeightFt(parseFloat(e.target.value))} 
              />
            </div>
          </div>

          <div className="preview-container">
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="arch-index" style={{ color: '#FFFFFF' }}>LIVE 2D PATTERN PREVIEW</span>
              <span style={{ fontSize: '0.8rem', color: '#A19A8F' }}>{sqFt} Sq.Ft Total Area</span>
            </div>

            {/* 2D SVG Pattern Rendering */}
            <div className="jali-preview-canvas">
              <svg viewBox="0 0 400 300" width="100%" height="100%">
                <defs>
                  <pattern id="grid-pattern-svg" width="40" height="40" patternUnits="userSpaceOnUse">
                    {pattern === 'Parametric Wave' && (
                      <path d="M 0 20 Q 10 0 20 20 T 40 20" fill="none" stroke="#E50914" strokeWidth="2.5" />
                    )}
                    {pattern === 'Traditional Kerala' && (
                      <path d="M 20 0 L 40 20 L 20 40 L 0 20 Z" fill="none" stroke="#E50914" strokeWidth="2" />
                    )}
                    {pattern === 'Islamic Star' && (
                      <polygon points="20,0 26,14 40,20 26,26 20,40 14,26 0,20 14,14" fill="none" stroke="#E50914" strokeWidth="2" />
                    )}
                    {pattern === 'Modern Lattice' && (
                      <rect x="5" y="5" width="30" height="30" fill="none" stroke="#E50914" strokeWidth="2.5" rx="3" />
                    )}
                  </pattern>
                </defs>
                
                <rect width="100%" height="100%" fill="url(#grid-pattern-svg)" />
                <rect width="100%" height="100%" fill="none" stroke="#E50914" strokeWidth="6" />
              </svg>
            </div>

            <div className="estimator-summary">
              <div>
                <div className="est-val-title">Estimated Factory Price (INR)</div>
                <div className="est-val-amount">₹{estimatedCostINR.toLocaleString('en-IN')}</div>
              </div>
              <button 
                type="button" 
                className="btn btn-primary"
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.8rem' }}
                onClick={handleSendToQuote}
              >
                Request Official Quote →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
