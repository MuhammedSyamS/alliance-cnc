import React, { useState } from 'react';

const PATTERNS = [
  { id: 'geometric', name: 'Geometric Modern', multiplier: 1.0 },
  { id: 'arabic', name: 'Traditional Islamic', multiplier: 1.2 },
  { id: 'floral', name: 'Organic Floral', multiplier: 1.15 },
  { id: 'wave', name: 'Parametric Wave', multiplier: 1.3 }
];

const MATERIALS = [
  { id: 'wpc', name: '100% Monsoon Waterproof WPC Board (18mm)', basePricePerSqFt: 180 },
  { id: 'teak', name: 'Solid Teak Wood (18mm)', basePricePerSqFt: 450 },
  { id: 'mdf', name: 'Interior High-Density MDF (18mm)', basePricePerSqFt: 120 },
  { id: 'acp', name: 'Exterior ACP Facade Sheet (4mm)', basePricePerSqFt: 220 }
];

export default function JaliEstimator() {
  const [selectedPattern, setSelectedPattern] = useState(PATTERNS[0]);
  const [selectedMaterial, setSelectedMaterial] = useState(MATERIALS[0]);
  const [width, setWidth] = useState(4); // feet
  const [height, setHeight] = useState(6); // feet

  const sqFt = (width * height).toFixed(1);
  const estimatedCost = Math.round(sqFt * selectedMaterial.basePricePerSqFt * selectedPattern.multiplier);

  const renderPatternSvg = () => {
    switch (selectedPattern.id) {
      case 'arabic':
        return (
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 20,0 L 40,20 L 20,40 L 0,20 Z" fill="none" stroke="#E50914" strokeWidth="2"/>
            <circle cx="20" cy="20" r="8" fill="none" stroke="#E50914" strokeWidth="1.5"/>
          </pattern>
        );
      case 'floral':
        return (
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 20,0 C 30,10 30,30 20,40 C 10,30 10,10 20,0 Z" fill="none" stroke="#E50914" strokeWidth="2"/>
            <path d="M 0,20 C 10,30 30,30 40,20 C 30,10 10,10 0,20 Z" fill="none" stroke="#E50914" strokeWidth="2"/>
          </pattern>
        );
      case 'wave':
        return (
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 0 20 Q 10 5, 20 20 T 40 20" fill="none" stroke="#E50914" strokeWidth="2.5"/>
            <path d="M 0 30 Q 10 15, 20 30 T 40 30" fill="none" stroke="#E50914" strokeWidth="2"/>
          </pattern>
        );
      case 'geometric':
      default:
        return (
          <pattern id="grid-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="30" height="30" fill="none" stroke="#E50914" strokeWidth="1.5"/>
            <line x1="0" y1="0" x2="30" y2="30" stroke="#E50914" strokeWidth="1.5"/>
            <line x1="30" y1="0" x2="0" y2="30" stroke="#E50914" strokeWidth="1.5"/>
          </pattern>
        );
    }
  };

  return (
    <section className="estimator-section section-padding" id="estimator">
      <div className="container">
        <div className="section-header">
          <span className="arch-index">INSTANT PRICING ESTIMATOR</span>
          <h2 className="heading-md">2D Vector & Cost Estimator</h2>
          <p className="subheading">
            Customize vector patterns, dimensions, and materials to generate an instant estimate in INR (₹) for your CNC jali project.
          </p>
        </div>

        <div className="estimator-box">
          {/* Left Controls */}
          <div className="estimator-controls">
            <div className="form-group">
              <label className="form-label">1. Select Cutting Vector Pattern</label>
              <div className="pattern-options">
                {PATTERNS.map(pat => (
                  <button
                    key={pat.id}
                    className={`pattern-btn ${selectedPattern.id === pat.id ? 'active' : ''}`}
                    onClick={() => setSelectedPattern(pat)}
                  >
                    {pat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">2. Select Kerala Weather-Proof Material</label>
              <select
                className="custom-select touch-input"
                value={selectedMaterial.id}
                onChange={(e) => setSelectedMaterial(MATERIALS.find(m => m.id === e.target.value))}
              >
                {MATERIALS.map(mat => (
                  <option key={mat.id} value={mat.id}>
                    {mat.name} — ₹{mat.basePricePerSqFt}/sq.ft
                  </option>
                ))}
              </select>
            </div>

            <div className="slider-group">
              <div className="slider-info">
                <span className="form-label">Panel Width</span>
                <strong>{width} Feet ({Math.round(width * 304.8)} mm)</strong>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="0.5"
                value={width}
                onChange={(e) => setWidth(parseFloat(e.target.value))}
              />
            </div>

            <div className="slider-group">
              <div className="slider-info">
                <span className="form-label">Panel Height</span>
                <strong>{height} Feet ({Math.round(height * 304.8)} mm)</strong>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                step="0.5"
                value={height}
                onChange={(e) => setHeight(parseFloat(e.target.value))}
              />
            </div>
          </div>

          {/* Right Live SVG Preview */}
          <div className="preview-container">
            <div style={{ width: '100%', textAlign: 'left', marginBottom: '1rem' }}>
              <span className="arch-index" style={{ color: '#E50914' }}>LIVE 2D VECTOR RENDERING</span>
              <h3 style={{ fontSize: '1.1rem', color: '#FFFFFF' }}>{selectedPattern.name}</h3>
              <p style={{ fontSize: '0.82rem', color: '#A19A8F' }}>
                Area: <strong>{sqFt} Sq.Ft</strong> | Scale: {width}' x {height}'
              </p>
            </div>

            <div className="jali-preview-canvas">
              <svg width="100%" height="100%">
                <defs>
                  {renderPatternSvg()}
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
              </svg>
            </div>

            <div className="estimator-summary">
              <div>
                <span className="est-val-title">Estimated Price (Excl. Tax)</span>
                <div className="est-val-amount">₹ {estimatedCost.toLocaleString('en-IN')}</div>
              </div>
              <a href="#quote" className="btn btn-primary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.8rem' }}>
                Order This Cut →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
