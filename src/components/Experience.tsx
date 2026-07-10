'use client';

import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    role: 'Research Project: Text Rendering in Diffusion Models',
    organization: 'ADOBE AI SCHOLARS PROGRAM',
    description: 'Exploring glyph-conditioned diffusion methods to improve text generation inside images. Focused on sharper letterforms, better spacing, localized text-region losses, and OCR-aware evaluation for design workflows.',
    tags: ['AI/ML', 'Diffusion Models', 'Computer Vision', 'Research'],
    color: 'var(--violet)',
  },
  {
    role: 'EA/IR & Membership Development Executive',
    organization: 'IEEE DTU STUDENT BRANCH',
    description: 'Managed outreach and external communication for IEEE DTU initiatives, connecting with communities, partners, and student groups. Supported event planning, membership growth, and cross-team coordination for technical programs.',
    tags: ['Leadership', 'Outreach', 'PR', 'Teamwork'],
    color: 'var(--strawberry)',
  },
  {
    role: 'Photographer',
    organization: 'DTU TIMES',
    description: 'Photographed campus events, student stories, and editorial moments for DTU Times. Focused on visual storytelling, event documentation, and creating images that preserve the texture of university life.',
    tags: ['Photography', 'Media', 'Storytelling'],
    color: 'var(--peach)',
  },
  {
    role: 'Member & Debater',
    organization: 'COGNITIVE MINDS',
    description: 'Participated in competitive debating, discussions, and argumentation practice across social, political, and philosophical themes. Built stronger communication, critical thinking, and structured reasoning through regular debate rounds.',
    tags: ['Debating', 'Communication', 'Critical Thinking'],
    color: 'var(--green-apple)',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 md:py-40"
      style={{ background: 'var(--marshmallow)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-6 stripe-diagonal opacity-30" />
      <div className="px-6 md:px-16 lg:px-24 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--sour-cherry)',
            }}
          >
            Experience & Leadership
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: 'var(--dark-licorice)',
            }}
          >
            Roles &
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-12"
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              color: 'var(--sour-cherry)',
            }}
          >
            Responsibilities
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.role}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="p-6 md:p-8 rounded-2xl"
              style={{
                background: 'var(--cream-white)',
                borderLeft: '4px solid',
                borderLeftColor: exp.color,
                boxShadow: '0 2px 16px rgba(127,31,37,0.04)',
              }}
              data-hover
            >
              <div>
                <h3
                  className="mb-1"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: 'var(--dark-licorice)',
                  }}
                >
                  {exp.role}
                </h3>
                <h4
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--sour-cherry)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  {exp.organization}
                </h4>
                <p
                  className="mb-6"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem',
                    lineHeight: 1.7,
                    color: 'var(--moss)',
                  }}
                >
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        color: 'var(--moss)',
                        background: 'var(--marshmallow)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
