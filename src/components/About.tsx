'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const INTERESTS = ['Full-stack Dev', 'AI & ML', 'UI/UX', 'Photography', 'Visual Storytelling'];

const INTEREST_COLORS = [
  { bg: 'var(--sour-cherry)', color: 'var(--cream-white)' },
  { bg: 'var(--strawberry)', color: 'var(--dark-licorice)' },
  { bg: 'var(--violet)', color: 'var(--off-black)' },
  { bg: 'var(--green-apple)', color: 'var(--off-black)' },
  { bg: 'var(--peach)', color: 'var(--off-black)' },
  { bg: 'var(--bubblegum)', color: 'var(--off-black)' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Generates a wavy rectangular path for the coquette sticker look
function generateWavyRectPath(x: number, y: number, w: number, h: number, waveDepth: number, waveLength: number) {
  let path = `M ${x} ${y}`;

  // Top edge
  const stepsX = Math.round(w / waveLength);
  for (let i = 1; i <= stepsX; i++) {
    const currX = x + (i / stepsX) * w;
    const midX = x + ((i - 0.5) / stepsX) * w;
    const currY = y + (i % 2 === 0 ? -waveDepth : waveDepth);
    path += ` Q ${midX} ${currY}, ${currX} ${y}`;
  }

  // Right edge
  const stepsY = Math.round(h / waveLength);
  for (let i = 1; i <= stepsY; i++) {
    const currY = y + (i / stepsY) * h;
    const midY = y + ((i - 0.5) / stepsY) * h;
    const currX = x + w + (i % 2 === 0 ? waveDepth : -waveDepth);
    path += ` Q ${currX} ${midY}, ${x + w} ${currY}`;
  }

  // Bottom edge
  for (let i = 1; i <= stepsX; i++) {
    const currX = x + w - (i / stepsX) * w;
    const midX = x + w - ((i - 0.5) / stepsX) * w;
    const currY = y + h + (i % 2 === 0 ? waveDepth : -waveDepth);
    path += ` Q ${midX} ${currY}, ${currX} ${y + h}`;
  }

  // Left edge
  for (let i = 1; i <= stepsY; i++) {
    const currY = y + h - (i / stepsY) * h;
    const midY = y + h - ((i - 0.5) / stepsY) * h;
    const currX = x + (i % 2 === 0 ? -waveDepth : waveDepth);
    path += ` Q ${currX} ${midY}, ${x} ${currY}`;
  }

  path += ' Z';
  return path;
}

export default function About() {
  const [imageError, setImageError] = useState(false);

  // SVG Paths for the wavy layers
  const outerStickerPath = generateWavyRectPath(20, 20, 280, 400, 7, 18);
  const innerBorderPath = generateWavyRectPath(28, 28, 264, 384, 6.5, 17);
  const photoClipPath = generateWavyRectPath(35, 75, 250, 330, 5.5, 16);

  return (
    <section
      id="about"
      className="relative py-28 md:py-40"
      style={{ background: 'var(--cream-white)' }}
    >
      {/* Stripe accent at top */}
      <div className="absolute top-0 left-0 right-0 h-6 stripe-diagonal opacity-40" />

      <div className="px-6 md:px-16 lg:px-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">

        {/* Left Column: Wavy Cherry/Ribbon Photo Sticker Frame */}
        <motion.div
          className="md:col-span-5 flex justify-center"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        >
          <motion.div
            className="relative w-80 md:w-[340px] aspect-[320/440] rounded-[2rem] overflow-hidden shadow-2xl origin-center"
            style={{
              background: 'repeating-linear-gradient(90deg, var(--strawberry) 0px, var(--strawberry) 12px, var(--sour-cherry) 12px, var(--sour-cherry) 24px)',
              border: '8px solid var(--cream-white)',
              boxShadow: '0 20px 45px rgba(127,31,37,0.18)',
              cursor: 'none',
            }}
            data-hover
            animate={{ rotate: [-2, 1, -2] }}
            transition={{
              rotate: {
                repeat: Infinity,
                duration: 6,
                ease: 'easeInOut'
              }
            }}
            whileHover={{
              scale: 1.07,
              rotate: 4,
              y: -12,
              boxShadow: '0 32px 64px rgba(127,31,37,0.25)',
              transition: {
                type: 'spring',
                stiffness: 300,
                damping: 14
              }
            }}
            whileTap={{
              scale: 0.97,
              rotate: -2,
            }}
          >
            <svg
              className="absolute inset-0 w-full h-full drop-shadow-md"
              viewBox="0 0 320 440"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="photo-clip">
                  <path d={photoClipPath} />
                </clipPath>
              </defs>

              {/* White/cream sticker base */}
              <path d={outerStickerPath} fill="var(--cream-white)" />

              {/* Pink wavy accent border */}
              <path d={innerBorderPath} stroke="var(--tutti-frutti)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

              {/* Photo Area (with fallback if image is not found) */}
              {!imageError ? (
                <image
                  href="/IMG.jpeg"
                  x="35"
                  y="75"
                  width="250"
                  height="330"
                  clipPath="url(#photo-clip)"
                  preserveAspectRatio="xMidYMid slice"
                  onError={() => setImageError(true)}
                />
              ) : (
                <g clipPath="url(#photo-clip)">
                  <rect x="35" y="75" width="250" height="330" fill="var(--marshmallow-dark)" />
                  <circle cx="160" cy="220" r="45" fill="var(--strawberry)" opacity="0.6" />
                  <path d="M140 250 C140 220 180 220 180 250" stroke="var(--sour-cherry)" strokeWidth="4" strokeLinecap="round" fill="none" />
                  <circle cx="150" cy="210" r="4" fill="var(--sour-cherry)" />
                  <circle cx="170" cy="210" r="4" fill="var(--sour-cherry)" />
                  <text
                    x="160"
                    y="285"
                    textAnchor="middle"
                    fill="var(--dark-licorice)"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.12em' }}
                  >
                    PLACEHOLDER
                  </text>
                </g>
              )}

              {/* Ribbon Bow & Cherry Decoration (overlaps the photo at the top) */}
              <g className="origin-center" style={{ transform: 'translate(0px, 4px)' }}>
                {/* Cherry Stems */}
                <path d="M 160 42 Q 148 60 142 68 M 160 42 Q 172 60 178 68" stroke="#433D31" strokeWidth="2.5" strokeLinecap="round" />
                {/* Cherries */}
                <circle cx="140" cy="70" r="10" fill="var(--sour-cherry)" />
                <circle cx="180" cy="70" r="10" fill="var(--sour-cherry)" />
                {/* Cherry Gloss Highlights */}
                <circle cx="137" cy="67" r="2.5" fill="white" opacity="0.8" />
                <circle cx="177" cy="67" r="2.5" fill="white" opacity="0.8" />
                {/* Ribbon Bow Loops */}
                <path d="M 160 42 C 140 20 115 30 140 42 C 152 48 160 42 160 42" stroke="var(--tutti-frutti)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 160 42 C 180 20 205 30 180 42 C 158 48 160 42 160 42" stroke="var(--tutti-frutti)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                {/* Ribbon Bow Tails */}
                <path d="M 154 43 C 146 49 134 67 137 72" stroke="var(--tutti-frutti)" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M 166 43 C 174 49 186 67 183 72" stroke="var(--tutti-frutti)" strokeWidth="3" fill="none" strokeLinecap="round" />
              </g>
            </svg>
          </motion.div>
        </motion.div>

        {/* Right Column: Text & Interests */}
        <div className="md:col-span-7 text-left">
          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-1"
            style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
              fontWeight: 700, lineHeight: 1.1, color: 'var(--dark-licorice)',
            }}
          >
            Meet
          </motion.h2>
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-8"
            style={{
              fontFamily: 'var(--font-script)', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              fontWeight: 400, lineHeight: 1, color: 'var(--sour-cherry)',
            }}
          >
            Vaishnavi
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10"
            style={{
              fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.9,
              color: 'var(--moss)',
            }}
          >
            CSE student at Delhi Technological University with a builder&apos;s mindset equally at home debugging algorithms,
            designing intuitive interfaces, and training AI models to solve real problems.
            When I step away from the screen, you&apos;ll find me behind a camera, chasing good light and better stories.
          </motion.p>

          {/* Interest pills */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-2.5"
          >
            {INTERESTS.map((interest, i) => (
              <motion.span
                key={interest}
                whileHover={{ scale: 1.08, y: -3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="px-5 py-2.5 rounded-full transition-shadow duration-300 hover:shadow-md"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  background: INTEREST_COLORS[i % INTEREST_COLORS.length].bg,
                  color: INTEREST_COLORS[i % INTEREST_COLORS.length].color,
                  cursor: 'none',
                }}
                data-hover
              >
                {interest}
              </motion.span>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
