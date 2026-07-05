'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prev + Math.floor(Math.random() * 8) + 3, 100);
      });
    }, 45);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 100) {
      const tl = gsap.timeline({ onComplete });
      tl.to(counterRef.current, { scale: 1.1, duration: 0.2 })
        .to(counterRef.current, { opacity: 0, y: -30, duration: 0.3 })
        .to(loaderRef.current, {
          yPercent: -100,
          duration: 0.7,
          ease: 'power4.inOut',
        });
    }
  }, [count, onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center"
      style={{ background: 'var(--marshmallow)' }}
    >
      {/* Subtle stripe background */}
      <div className="absolute inset-0 stripe-vertical opacity-30" />

      <span
        ref={counterRef}
        className="relative z-10"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(4rem, 12vw, 9rem)',
          fontWeight: 400,
          color: 'var(--dark-licorice)',
          lineHeight: 1,
          fontStyle: 'italic',
        }}
      >
        {count}
      </span>

      <div className="relative z-10 w-32 h-[2px] mt-8 overflow-hidden" style={{ background: 'rgba(127,31,37,0.1)' }}>
        <div
          className="h-full transition-all duration-75"
          style={{ width: `${count}%`, background: 'var(--sour-cherry)' }}
        />
      </div>

      <p
        className="relative z-10 mt-6"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1rem',
          fontWeight: 600,
          letterSpacing: '0.30em',
          textTransform: 'uppercase',
          color: 'var(--sour-cherry)',
        }}
      >
        Vaishnavi Sharma
      </p>
    </div>
  );
}
