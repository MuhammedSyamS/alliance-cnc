import React, { useState, useRef } from 'react';

export default function BeforeAfterCard({ item, onOpenLightbox }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <article className="before-after-card">
      
      {/* Card Header */}
      <div className="ba-card-header">
        <div className="ba-header-left">
          <span className="ba-cat-badge">{item.category}</span>
          <h3 className="ba-project-title">{item.title}</h3>
          <div className="ba-meta-row">
            <span className="ba-client-name">{item.client}</span>
            <span className="meta-dot">•</span>
            <span className="ba-location">
              <i className="fa-solid fa-location-dot text-crimson"></i> {item.location}
            </span>
          </div>
        </div>

        {/* Quick View Toggle Buttons */}
        <div className="ba-quick-toggles">
          <button 
            className={`ba-toggle-btn ${sliderPos < 20 ? 'active' : ''}`}
            onClick={() => setSliderPos(0)}
            title="View Raw Site / Before"
          >
            Before
          </button>
          <button 
            className={`ba-toggle-btn ${sliderPos >= 20 && sliderPos <= 80 ? 'active' : ''}`}
            onClick={() => setSliderPos(50)}
            title="Split Comparison"
          >
            Split (50%)
          </button>
          <button 
            className={`ba-toggle-btn ${sliderPos > 80 ? 'active' : ''}`}
            onClick={() => setSliderPos(100)}
            title="View Turnkey Realized Space / After"
          >
            After
          </button>
        </div>
      </div>

      {/* Interactive Split Image Container */}
      <div 
        ref={containerRef}
        className="ba-image-viewport"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER Image (Full width background) */}
        <div className="ba-img-layer after-layer">
          <img 
            src={item.afterImg} 
            alt={`${item.title} - Completed Turnkey Space`} 
            className="ba-viewport-img"
            loading="lazy"
          />
          <div className="ba-corner-badge after-badge">
            <i className="fa-solid fa-circle-check text-crimson"></i>
            <span>AFTER: TURNKEY REALIZATION</span>
          </div>
        </div>

        {/* BEFORE Image (Clipped overlay controlled by sliderPos) */}
        <div 
          className="ba-img-layer before-layer"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img 
            src={item.beforeImg} 
            alt={`${item.title} - Raw Site / Before`} 
            className="ba-viewport-img"
            loading="lazy"
          />
          <div className="ba-corner-badge before-badge">
            <i className="fa-solid fa-clock-rotate-left"></i>
            <span>BEFORE: RAW SUBSTRUCTURE</span>
          </div>
        </div>

        {/* Vertical Divider Line with Draggable Handle */}
        <div 
          className="ba-slider-handle-line"
          style={{ left: `${sliderPos}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
        >
          <div className="ba-slider-handle-knob">
            <i className="fa-solid fa-arrows-left-right"></i>
          </div>
        </div>

        {/* Fullscreen Lightbox Button */}
        <button 
          className="ba-expand-btn"
          onClick={() => onOpenLightbox(sliderPos > 50 ? item.afterImg : item.beforeImg, item.title)}
          title="Inspect High-Resolution Photo"
          aria-label="Inspect Photo"
        >
          <i className="fa-solid fa-maximize"></i>
        </button>
      </div>

      {/* Card Details & Scope */}
      <div className="ba-card-body">
        <div className="ba-labels-row">
          <div className="ba-label-col before-col">
            <span className="ba-phase-tag">INITIAL STAGE</span>
            <p className="ba-phase-desc">{item.beforeLabel}</p>
          </div>
          <div className="ba-label-arrow">➔</div>
          <div className="ba-label-col after-col">
            <span className="ba-phase-tag text-crimson">ALLIANCE DELIVERY</span>
            <p className="ba-phase-desc">{item.afterLabel}</p>
          </div>
        </div>

        <p className="ba-transformation-narrative">
          {item.transformation}
        </p>

        {/* Deliverable Tags */}
        <div className="ba-deliverables-strip">
          {item.deliverables.map((del, idx) => (
            <span key={idx} className="ba-del-pill">
              <i className="fa-solid fa-check text-crimson"></i>
              <span>{del}</span>
            </span>
          ))}
        </div>
      </div>

    </article>
  );
}

