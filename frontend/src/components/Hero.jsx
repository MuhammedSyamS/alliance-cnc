import React, { useState, useEffect, useRef } from 'react';

export default function Hero({ onNavigate }) {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Hide video once the user scrolls down past the initial screen threshold
      const scrolled = window.scrollY > 40;
      setIsScrolledDown(scrolled);
      if (videoRef.current) {
        if (scrolled) {
          if (!videoRef.current.paused) {
            videoRef.current.pause();
          }
        } else {
          if (videoRef.current.paused) {
            videoRef.current.play().catch(() => {});
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on initial render
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const baselineSpecs = [
    { tag: 'MACHINING & CUTTING', detail: '5-Axis CNC & Fiber Laser' },
    { tag: 'SUBSTRATES', detail: 'Wood • Metal • Acrylic • Corian' },
    { tag: 'ARCHITECTURAL', detail: 'Interior & Exterior Execution' },
    { tag: 'FACILITY', detail: 'Nedumangad, Trivandrum (Factory Direct)' }
  ];

  return (
    <section className="minimal-hero" id="hero">
      {/* Cinematic Machine & Craft Video Backdrop (Shown ONLY on 1st screen, fades & pauses when scrolled down) */}
      <div className={`minimal-hero-bg ${isScrolledDown ? 'is-scrolled-hidden' : ''}`}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/craft/hero_laser_sparks.jpg"
          className="minimal-hero-video"
        >
          <source src="/assets/video/hero_cnc_cutting.mp4" type="video/mp4" />
          <source src="/assets/video/cnc%20video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container minimal-hero-container">
        {/* Main Editorial Content */}
        <div className="minimal-hero-body">
          <h1 className="minimal-hero-title">
            Industrial CNC Routing & <br />
            <span className="minimal-hero-accent">Precision Laser Solutions</span>
          </h1>

          <p className="minimal-hero-lead">
            <span className="hero-lead-desktop">
              High-precision 5-axis CNC machining, industrial fiber laser metal cutting, and complex 3D routing across timber, brass, acrylic, and composite substrates. Manufactured factory-direct in Nedumangad, Trivandrum, with turnkey capabilities for custom architectural interiors and exterior facades.
            </span>
            <span className="hero-lead-mobile">
              Industrial 5-axis CNC machining & precision fiber laser cutting. Factory-direct in Nedumangad, Trivandrum.
            </span>
          </p>

          <div className="minimal-hero-cta-group">
            <a 
              href="#work" 
              className="minimal-hero-btn-solid"
              onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('work'); } }}
            >
              <span>Explore CNC Works</span>
              <span className="cta-arrow">→</span>
            </a>
            <a 
              href="#contact" 
              className="minimal-hero-btn-ghost"
              onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('contact'); } }}
            >
              <span>Request CNC Quote</span>
              <span className="cta-arrow">→</span>
            </a>
          </div>
        </div>

        {/* Quiet Minimalist Editorial Baseline (Auto-scrolling carousel on mobile) */}
        <div className="minimal-hero-baseline-wrapper">
          <div className="minimal-hero-baseline">
            {/* Primary Track */}
            <div className="baseline-track">
              {baselineSpecs.map((spec, i) => (
                <React.Fragment key={`orig-${i}`}>
                  <div className="baseline-cell">
                    <span className="baseline-tag">{spec.tag}</span>
                    <span className="baseline-detail">{spec.detail}</span>
                  </div>
                  <div className="baseline-divider"></div>
                </React.Fragment>
              ))}
            </div>

            {/* Cloned Track for continuous seamless infinite auto-scroll carousel on smaller devices */}
            <div className="baseline-track baseline-track-clone" aria-hidden="true">
              {baselineSpecs.map((spec, i) => (
                <React.Fragment key={`clone-${i}`}>
                  <div className="baseline-cell">
                    <span className="baseline-tag">{spec.tag}</span>
                    <span className="baseline-detail">{spec.detail}</span>
                  </div>
                  <div className="baseline-divider"></div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
