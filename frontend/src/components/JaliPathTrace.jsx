import React, { useEffect, useRef, useState } from 'react';

/* ================================================================
   SVG JALI PATH TRACE — HERO BACKGROUND
   An intricate Islamic geometric jali SVG pattern that draws itself
   stroke by stroke, as if being CNC-routed live in the hero.
   ================================================================ */
export default function JaliPathTrace() {
  const svgRef = useRef(null);

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll('path, polygon, circle, line');
    if (!paths) return;

    paths.forEach((path, i) => {
      const len = path.getTotalLength ? path.getTotalLength() : 200;
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
      path.style.animation = `jali-draw 2.8s cubic-bezier(0.4,0,0.2,1) ${i * 0.08}s forwards`;
    });
  }, []);

  // Intricate Islamic jali geometry — 8-fold star lattice
  return (
    <div className="jali-trace-overlay" aria-hidden="true">
      <svg
        ref={svgRef}
        viewBox="0 0 480 480"
        xmlns="http://www.w3.org/2000/svg"
        className="jali-trace-svg"
      >
        <defs>
          <radialGradient id="jali-fade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E50914" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#E50914" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 8-pointed star lattice — 5x5 grid of stars */}
        {Array.from({ length: 5 }, (_, row) =>
          Array.from({ length: 5 }, (_, col) => {
            const cx = 48 + col * 96;
            const cy = 48 + row * 96;
            const R = 36; // outer radius
            const r = 14; // inner radius
            const pts = Array.from({ length: 16 }, (_, k) => {
              const angle = (k * Math.PI) / 8 - Math.PI / 2;
              const radius = k % 2 === 0 ? R : r;
              return `${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`;
            }).join(' ');
            return (
              <polygon
                key={`star-${row}-${col}`}
                points={pts}
                fill="none"
                stroke="#E50914"
                strokeWidth="0.9"
                opacity="0.7"
              />
            );
          })
        )}

        {/* Connecting diagonal lattice lines */}
        {Array.from({ length: 6 }, (_, i) => (
          <React.Fragment key={`lines-${i}`}>
            <line x1={i * 96} y1="0" x2={480} y2={480 - i * 96} stroke="#E50914" strokeWidth="0.4" opacity="0.25" />
            <line x1="0" y1={i * 96} x2={480 - i * 96} y2="480" stroke="#E50914" strokeWidth="0.4" opacity="0.25" />
          </React.Fragment>
        ))}

        {/* Center connecting circles */}
        {Array.from({ length: 5 }, (_, row) =>
          Array.from({ length: 5 }, (_, col) => {
            const cx = 48 + col * 96;
            const cy = 48 + row * 96;
            return (
              <circle
                key={`dot-${row}-${col}`}
                cx={cx} cy={cy} r="3"
                fill="none"
                stroke="#E50914"
                strokeWidth="1.2"
                opacity="0.5"
              />
            );
          })
        )}

        {/* Outer border frame */}
        <rect x="8" y="8" width="464" height="464" fill="none" stroke="#E50914" strokeWidth="1.5" opacity="0.3" rx="2" />
        <rect x="18" y="18" width="444" height="444" fill="none" stroke="#E50914" strokeWidth="0.6" opacity="0.15" rx="2" />

        {/* Glow center wash */}
        <rect x="0" y="0" width="480" height="480" fill="url(#jali-fade)" />
      </svg>
    </div>
  );
}
