'use client';

import { motion } from 'framer-motion';

const SKILL_GROUPS = [
  {
    title: 'frontend',
    emoji: '💻',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    bg: 'var(--violet-light)',
    accent: 'var(--violet-deep)',
    stripe: 'rgba(192, 176, 255, 0.3)',
  },
  {
    title: 'Machine Learning',
    emoji: '⚡',
    items: ['Python', 'NumPy', 'Pandas', 'scikit-learn', 'OpenCV'],
    bg: 'var(--strawberry)',
    accent: 'var(--sour-cherry)',
    stripe: 'rgba(255, 207, 218, 0.4)',
  },
  {
    title: 'Backend & Tools',
    emoji: '🛠',
    items: ['FastAPI', 'Node.js', 'Git', 'GitHub', 'Vercel'],
    bg: 'var(--cream-white)',
    accent: 'var(--peach)',
    stripe: 'rgba(255, 168, 112, 0.2)',
  },
  {
    title: 'Creative Tech',
    emoji: '🎨',
    items: ['Figma', 'Lightroom', 'Photoshop', 'Photography', 'UI/UX'],
    bg: 'var(--marshmallow)',
    accent: 'var(--green-apple)',
    stripe: 'rgba(189, 224, 66, 0.25)',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 8 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 150,
      damping: 18,
      mass: 0.8,
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 400, damping: 25 },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 md:py-40"
      style={{ background: 'var(--marshmallow-dark)' }}
    >
      {/* Stripe accent top */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'var(--sour-cherry)' }} />

      <div className="px-6 md:px-16 lg:px-24 max-w-5xl mx-auto text-center">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
          style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 600,
            letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--sour-cherry)',
          }}
        >
          Tools & Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4"
          style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700, lineHeight: 1.1, color: 'var(--dark-licorice)',
          }}
        >
          What I
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-16"
          style={{
            fontFamily: 'var(--font-script)', fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            color: 'var(--sour-cherry)',
          }}
        >
          work with
        </motion.h2>

        {/* Skill cards with motion */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                rotateY: 3,
                rotateX: -2,
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(127,31,37,0.08)',
              }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              className="relative p-8 text-center rounded-2xl overflow-hidden"
              style={{
                background: group.bg,
                border: '1px solid rgba(127,31,37,0.06)',
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
              data-hover
            >
              {/* Emoji + Title */}
              <motion.span
                className="block text-3xl mb-3"
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 2.5 + gi * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {group.emoji}
              </motion.span>

              <h3 className="mb-5 relative z-10" style={{
                fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700,
                color: 'var(--dark-licorice)', letterSpacing: '0.06em', textTransform: 'uppercase',
              }}>
                {group.title}
              </h3>

              {/* Skill pills */}
              <motion.div
                className="flex flex-wrap justify-center gap-2 relative z-10"
                variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } } }}
              >
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={pillVariants}
                    whileHover={{ scale: 1.1, y: -3 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 22 }}
                    className="px-4 py-2 rounded-full"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                      background: 'rgba(255,255,255,0.7)',
                      color: 'var(--off-black)',
                      border: `1.5px solid ${group.accent}`,
                      backdropFilter: 'blur(4px)',
                    }}
                    data-hover
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
