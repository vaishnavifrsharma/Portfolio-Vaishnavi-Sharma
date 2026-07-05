'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const ROTATING_WORDS = ['Creative Coding', 'Photography', 'AI/ML', 'Web Dev', 'UI/UX', 'DSA'];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 1.6 + i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setWordIndex(prev => (prev + 1) % ROTATING_WORDS.length);
        setIsFlipping(false);
      }, 300);
    }, 2500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Stripe background */}
      <div className="absolute inset-0 stripe-hero" />

      {/* Floating decorative shapes */}
      <motion.div
        className="absolute top-[15%] right-[10%] w-16 h-16 rounded-full"
        style={{ background: 'var(--strawberry)', opacity: 0.4 }}
        animate={{ y: [-8, 8, -8], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[25%] left-[8%] w-10 h-10 rounded-full"
        style={{ background: 'var(--violet)', opacity: 0.35 }}
        animate={{ y: [6, -6, 6], rotate: [0, -3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.div
        className="absolute top-[30%] left-[15%] w-6 h-6 rounded-full"
        style={{ background: 'var(--green-apple)', opacity: 0.5 }}
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute bottom-[35%] right-[15%] w-8 h-8 rounded-full"
        style={{ background: 'var(--peach)', opacity: 0.35 }}
        animate={{ y: [4, -4, 4], rotate: [45, 50, 45] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      />
      {/* Thin accent lines */}
      <motion.div
        className="absolute top-[50%] right-[5%] w-[1px] h-20"
        style={{ background: 'var(--strawberry-deep)', opacity: 0.3 }}
        animate={{ scaleY: [1, 1.3, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[20%] left-[5%] w-[1px] h-16"
        style={{ background: 'var(--violet)', opacity: 0.25 }}
        animate={{ scaleY: [1, 1.4, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center px-6 max-w-5xl mx-auto text-center">
        {/* Small tag */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8 px-5 py-2 rounded-full"
          style={{
            background: 'var(--strawberry)',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--dark-licorice)',
          }}
        >
          ✦ Portfolio 2025
        </motion.div>

        {/* Big display name */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 11vw, 9rem)',
            fontWeight: 800,
            lineHeight: 0.9,
            color: 'var(--dark-licorice)',
            letterSpacing: '-0.02em',
          }}
        >
          Vaishnavi
        </motion.h1>
        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            fontWeight: 400,
            lineHeight: 1.2,
            color: 'var(--sour-cherry)',
            marginTop: '-0.1em',
          }}
        >
          Sharma
        </motion.h1>

        {/* Separator */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-8 mb-6"
          style={{ width: '50px', height: '3px', background: 'var(--sour-cherry)', borderRadius: '2px' }}
        />

        {/* Subtitle */}
        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.95rem',
            fontWeight: 400,
            lineHeight: 2,
            color: 'var(--moss)',
            letterSpacing: '0.06em',
          }}
        >
          Engineer · Creative Developer · Photographer
        </motion.p>

        {/* DTU badge */}
        <motion.div
          custom={4.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-4 px-4 py-1.5 rounded-full"
          style={{
            background: 'var(--violet-light)',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9rem',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--off-black)',
          }}
        >
          DTU &apos;29
        </motion.div>

        {/* Rotating keyword */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 flex items-center justify-center gap-3"
        >
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--sour-cherry)' }} />
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--moss)', opacity: 0.6 }}>
            Currently into
          </span>
          <span
            className="inline-block"
            style={{
              fontFamily: 'var(--font-script-alt)',
              fontSize: '1.4rem',
              color: 'var(--sour-cherry)',
              minWidth: '160px',
              textAlign: 'left',
              transition: 'opacity 0.3s, transform 0.3s',
              opacity: isFlipping ? 0 : 1,
              transform: isFlipping ? 'translateY(-10px)' : 'translateY(0)',
            }}
          >
            {ROTATING_WORDS[wordIndex]}
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <button onClick={() => scrollTo('projects')} className="pill-btn" data-hover>
            View Projects
          </button>
          <a href="/photography" className="pill-btn-outline pill-btn" data-hover>
            Photography
          </a>
          <button onClick={() => scrollTo('contact')} className="pill-btn-outline pill-btn" data-hover>
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--moss)', opacity: 0.4 }}>
          Scroll
        </span>
        <div className="w-[2px] h-8 overflow-hidden" style={{ background: 'rgba(127,31,37,0.1)' }}>
          <motion.div
            className="w-full h-full"
            style={{ background: 'var(--sour-cherry)' }}
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
