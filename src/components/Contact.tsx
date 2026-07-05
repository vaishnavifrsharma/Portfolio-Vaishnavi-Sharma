'use client';

import { motion } from 'framer-motion';

const SOCIAL_CARDS = [
  {
    label: 'Email',
    handle: 'vaishnavi.sharma.cse.dtu@gmail.com',
    url: 'mailto:vaishnavi.sharma.cse.dtu@gmail.com',
    bg: 'var(--cream-white)',
    textColor: 'var(--sour-cherry)',
    accentColor: 'var(--sour-cherry)',
    icon: '✉️'
  },
  {
    label: 'LinkedIn',
    handle: 'Vaishnavi Sharma',
    url: 'https://www.linkedin.com/in/vaishnavi-sharma-5a1797241/',
    bg: 'var(--violet-light)',
    textColor: 'var(--off-black)',
    accentColor: 'var(--violet-deep)',
    icon: '💼'
  },
  {
    label: 'GitHub',
    handle: '@vaishnavifrsharma',
    url: 'https://github.com/vaishnavifrsharma',
    bg: 'var(--strawberry)',
    textColor: 'var(--dark-licorice)',
    accentColor: 'var(--sour-cherry)',
    icon: '💻'
  },
  {
    label: 'Instagram',
    handle: '@lensnavi_',
    url: 'https://www.instagram.com/lensnavi_/',
    bg: 'var(--peach)',
    textColor: 'var(--off-black)',
    accentColor: 'var(--sour-cherry)',
    icon: '📸'
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      type: 'spring' as const,
      stiffness: 200,
      damping: 20
    }
  })
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative"
    >
      {/* ===== VIBRANT FOOTER SECTION (NO FORM) ===== */}
      <footer className="relative" style={{ background: 'var(--sour-cherry)' }}>
        {/* Scallop border at top */}
        <div
          className="absolute -top-[12px] left-0 right-0 h-3"
          style={{
            background: 'radial-gradient(circle at 12px 17px, transparent 12px, var(--sour-cherry) 13px)',
            backgroundSize: '24px 12px',
            zIndex: 10
          }}
        />

        {/* Stripe band */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 30px,
              rgba(255,255,255,0.3) 30px,
              rgba(255,255,255,0.3) 32px
            )`,
          }}
        />

        <div className="relative z-10 px-6 md:px-16 py-20 md:py-28 max-w-5xl mx-auto text-center">
          {/* Waving hand */}
          <motion.span
            className="inline-block text-4xl mb-6"
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            👋
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600,
              letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--strawberry)',
              marginBottom: '12px'
            }}
          >
            Get in Touch
          </motion.h2>

          <motion.h3
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: 'var(--cream-white)',
              marginBottom: '8px',
              fontStyle: 'italic',
            }}
          >
            Let&apos;s Connect
          </motion.h3>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              fontFamily: 'var(--font-script-alt)',
              fontSize: '1.6rem',
              color: 'var(--strawberry)',
              marginBottom: '40px',
            }}
          >
            Vaishnavi Sharma
          </motion.p>

          {/* Social cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {SOCIAL_CARDS.map((card, i) => (
              <motion.a
                key={card.label}
                href={card.url}
                target={card.url.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  rotate: i % 2 === 0 ? 2 : -2,
                  boxShadow: '0 20px 30px rgba(0,0,0,0.15)'
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex flex-col p-6 rounded-2xl text-left border-2 border-transparent transition-shadow duration-300"
                style={{
                  background: card.bg,
                  color: card.textColor,
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                  textDecoration: 'none',
                  cursor: 'none'
                }}
                data-hover
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{card.icon}</span>
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                    style={{
                      background: 'rgba(0,0,0,0.05)',
                      color: card.textColor
                    }}
                  >
                    Go ↗
                  </span>
                </div>
                <h4 style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  opacity: 0.9,
                  marginBottom: '6px'
                }}>
                  {card.label}
                </h4>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  lineHeight: 1.3,
                  wordBreak: 'break-all',
                  opacity: 0.8
                }}>
                  {card.handle}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Separator */}
          <div className="mx-auto mb-6" style={{ width: '40px', height: '2px', background: 'var(--strawberry)', opacity: 0.5, borderRadius: '1px' }} />

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.65rem',
            fontWeight: 400,
            letterSpacing: '0.12em',
            color: 'rgba(255,255,255,0.5)',
          }}>
            © 2025 — Handcrafted with care ♡
          </p>
        </div>
      </footer>
    </section>
  );
}
