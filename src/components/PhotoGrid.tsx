'use client';

import { motion } from 'framer-motion';

const PHOTOS = [
  { id: 1, aspect: 'aspect-[4/5]', span: '', label: 'Portrait' },
  { id: 2, aspect: 'aspect-[3/2]', span: 'md:col-span-2', label: 'Landscape' },
  { id: 3, aspect: 'aspect-square', span: '', label: 'Creative' },
  { id: 4, aspect: 'aspect-[3/4]', span: '', label: 'Street' },
  { id: 5, aspect: 'aspect-[2/3]', span: '', label: 'Detail' },
  { id: 6, aspect: 'aspect-[3/2]', span: 'md:col-span-2', label: 'Travel' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function PhotoGrid() {
  return (
    <section className="relative py-20 md:py-28" style={{ background: 'var(--marshmallow)' }}>
      <div className="px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--sour-cherry)',
            marginBottom: '12px',
          }}>
            Through My Lens
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--dark-licorice)',
            fontStyle: 'italic',
          }}>
            Moments I&apos;ve Captured
          </h2>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className={`group relative overflow-hidden rounded-xl ${photo.span} ${photo.aspect}`}
              style={{
                background: i % 3 === 0 ? 'var(--strawberry)' : i % 3 === 1 ? 'var(--violet-light)' : 'var(--marshmallow-dark)',
                border: '1px solid rgba(127,31,37,0.06)',
              }}
              data-hover
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                {/* Camera SVG icon */}
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: 'var(--dark-licorice)', opacity: 0.25 }}
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.65rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--dark-licorice)',
                  opacity: 0.3,
                }}>
                  {photo.label}
                </span>
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(201, 46, 47, 0.05)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
