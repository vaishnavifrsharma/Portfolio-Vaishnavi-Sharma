'use client';

import { motion } from 'framer-motion';

export default function WowSection() {
  const words = "I don't just write code — I craft experiences where logic meets artistry.".split(' ');

  return (
    <section
      className="relative py-40 md:py-56 flex items-center justify-center"
      style={{ background: 'var(--marshmallow-dark)', minHeight: '70vh' }}
    >
      {/* Stripe accents */}
      <div className="absolute top-0 left-0 right-0 h-full stripe-diagonal opacity-20" />

      {/* Subtle colored glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(201, 46, 47, 0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 px-6 md:px-16 lg:px-32 max-w-4xl mx-auto text-center">
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3.5vw, 3rem)',
            fontWeight: 400,
            lineHeight: 1.6,
            color: 'var(--dark-licorice)',
            fontStyle: 'italic',
          }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block"
              style={{ marginRight: '0.35em' }}
              initial={{ opacity: 0.08 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, margin: '-20%' }}
              transition={{ delay: i * 0.06, duration: 0.4, ease: 'easeOut' }}
            >
              {word === '—' ? (
                <span style={{ color: 'var(--sour-cherry)' }}>—</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </p>

        <div className="mt-12 flex items-center justify-center gap-4">
          <div style={{ width: '30px', height: '2px', background: 'var(--sour-cherry)', opacity: 0.5, borderRadius: '1px' }} />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--moss)',
            }}
          >
            VS
          </span>
          <div style={{ width: '30px', height: '2px', background: 'var(--sour-cherry)', opacity: 0.5, borderRadius: '1px' }} />
        </div>
      </div>
    </section>
  );
}
