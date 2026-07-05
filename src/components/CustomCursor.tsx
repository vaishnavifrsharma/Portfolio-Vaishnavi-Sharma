'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const handRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const hand = handRef.current;
    if (!cursor || !dot || !hand) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 16,
        y: e.clientY - 16,
        duration: 0.45,
        ease: 'power3.out',
      });
      gsap.to(dot, {
        x: e.clientX - 3,
        y: e.clientY - 3,
        duration: 0.1,
        ease: 'power2.out',
      });
      gsap.to(hand, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    const handleHoverEnter = () => {
      cursor.classList.add('hovering');
      dot.classList.add('hovering');
      hand.classList.add('visible');
    };
    const handleHoverLeave = () => {
      cursor.classList.remove('hovering');
      dot.classList.remove('hovering');
      hand.classList.remove('visible');
    };

    window.addEventListener('mousemove', moveCursor);

    // Use MutationObserver to handle dynamically added elements
    const addHoverListeners = () => {
      const hoverTargets = document.querySelectorAll('a, button, .magnetic-btn, .tilt-card, [data-hover]');
      hoverTargets.forEach(el => {
        el.addEventListener('mouseenter', handleHoverEnter);
        el.addEventListener('mouseleave', handleHoverLeave);
      });
      return hoverTargets;
    };

    const targets = addHoverListeners();

    // Re-attach on DOM changes
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
      targets.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverEnter);
        el.removeEventListener('mouseleave', handleHoverLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden md:block" />
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={handRef} className="cursor-hand hidden md:block">👆</div>
    </>
  );
}
