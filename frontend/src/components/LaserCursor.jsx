import React, { useEffect, useRef } from 'react';

/* ================================================================
   LASER CURSOR + SPARK PARTICLES
   A glowing crimson orb follows the mouse like a CNC laser head.
   On click → burst of spark particles fly outward.
   ================================================================ */
export default function LaserCursor() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const trailsRef = useRef([]);
  const mouseRef = useRef({ x: -200, y: -200 });
  const ringPosRef = useRef({ x: -200, y: -200 });
  const rafRef = useRef(null);

  // Deactivate on touch screens (smartphones, tablets, iPads, foldable devices)
  const isTouchDevice = typeof window !== 'undefined' && 
    (window.matchMedia('(hover: none) and (pointer: coarse)').matches || 
     'ontouchstart' in window || 
     navigator.maxTouchPoints > 0);

  useEffect(() => {
    if (isTouchDevice) return;

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;

    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (dot) {
        dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      spawnTrail(e.clientX, e.clientY);
    };

    const animate = () => {
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const rx = ringPosRef.current.x;
      const ry = ringPosRef.current.y;
      // Smooth lag
      ringPosRef.current.x += (mx - rx) * 0.12;
      ringPosRef.current.y += (my - ry) * 0.12;
      if (ring) {
        ring.style.transform = `translate(${ringPosRef.current.x}px, ${ringPosRef.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      dot?.classList.add('visible');
      ring?.classList.add('visible');
    };
    const onLeave = () => {
      dot?.classList.remove('visible');
      ring?.classList.remove('visible');
    };

    const onClick = (e) => spawnSparks(e.clientX, e.clientY);

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('click', onClick);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('click', onClick);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function spawnTrail(x, y) {
    const trail = document.createElement('div');
    trail.className = 'laser-trail';
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;
    document.body.appendChild(trail);
    requestAnimationFrame(() => {
      trail.style.opacity = '0';
      trail.style.transform = 'scale(0.1)';
    });
    setTimeout(() => trail.remove(), 400);
  }

  function spawnSparks(x, y) {
    const count = 12;
    for (let i = 0; i < count; i++) {
      const spark = document.createElement('div');
      spark.className = 'laser-spark';
      const angle = (i / count) * Math.PI * 2;
      const dist = 40 + Math.random() * 50;
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist;
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      spark.style.setProperty('--tx', `${tx}px`);
      spark.style.setProperty('--ty', `${ty}px`);
      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 600);
    }
  }

  if (isTouchDevice) return null;

  return (
    <>
      <div ref={cursorDotRef} className="laser-cursor-dot" />
      <div ref={cursorRingRef} className="laser-cursor-ring" />
    </>
  );
}
