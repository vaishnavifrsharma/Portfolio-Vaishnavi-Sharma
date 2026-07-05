'use client';

import { motion } from 'framer-motion';

const EDUCATION = [
  {
    institution: 'Modern Delhi International School',
    degree: 'Class X · CBSE Board',
    period: '2022 — 2023',
    color: 'var(--peach)',
    dotColor: 'var(--sour-cherry)',
    details: 'Percentage : 97.6%',
  },
  {
    institution: 'JLN International School',
    degree: 'Class XII · CBSE Board',
    period: '2024 — 2025',
    color: 'var(--strawberry)',
    dotColor: 'var(--sour-cherry)',
    details: 'Percentage : 92.8%',
  },

  {
    institution: 'Delhi Technological University',
    degree: 'B.Tech in Computer Science Engineering',
    period: '2025 — 2029',
    color: 'var(--violet)',
    dotColor: 'var(--violet-deep)',
    details: 'CGPA : 8.2',
  },


];

const COURSEWORK = ['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'Web Development', 'Intro to ML'];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-28 md:py-40"
      style={{ background: 'var(--marshmallow)' }}
    >
      {/* Stripe accent */}
      <div className="absolute top-0 left-0 right-0 h-6 stripe-diagonal opacity-30" />

      <div className="px-6 md:px-16 lg:px-24 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
            style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600,
              letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--sour-cherry)',
            }}
          >
            Education
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-3"
            style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700, lineHeight: 1.1, color: 'var(--dark-licorice)',
            }}
          >
            Academic
          </motion.h2>
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-6"
            style={{
              fontFamily: 'var(--font-script)', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              color: 'var(--sour-cherry)',
            }}
          >
            Journey
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px]"
            style={{ background: 'rgba(127,31,37,0.1)' }}
          />

          <div className="space-y-8">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.institution + edu.degree}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-[18px] md:left-[26px] top-6 w-4 h-4 rounded-full border-[3px]"
                  style={{
                    borderColor: edu.dotColor,
                    background: 'var(--marshmallow)',
                  }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -3, x: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="p-6 md:p-8 rounded-2xl"
                  style={{
                    background: 'var(--cream-white)',
                    borderLeft: `4px solid`,
                    borderLeftColor: edu.color,
                    boxShadow: '0 2px 16px rgba(127,31,37,0.04)',
                  }}
                  data-hover
                >
                  {/* Period badge */}
                  <span
                    className="inline-block mb-3 px-3 py-1 rounded-full text-xs"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      background: edu.color,
                      color: 'var(--off-black)',
                      opacity: 0.9,
                    }}
                  >
                    {edu.period}
                  </span>

                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: 'var(--dark-licorice)',
                    marginBottom: '6px',
                  }}>
                    {edu.institution}
                  </h3>

                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    fontWeight: 400,
                    color: 'var(--moss)',
                    marginBottom: edu.details ? '8px' : '0',
                  }}>
                    {edu.degree}
                  </p>

                  {edu.details && (
                    <p style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      color: 'var(--sour-cherry)',
                      fontStyle: 'italic',
                    }}>
                      {edu.details}
                    </p>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coursework */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="mb-6" style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 600,
            letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--moss)', opacity: 0.7,
          }}>
            Relevant Coursework
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {COURSEWORK.map((course, i) => (
              <motion.span
                key={course}
                whileHover={{ scale: 1.06, y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="px-4 py-2 rounded-full"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  background: i % 3 === 0 ? 'var(--violet-light)' : i % 3 === 1 ? 'var(--strawberry)' : 'var(--cream-white)',
                  color: 'var(--off-black)',
                  border: '1px solid rgba(127,31,37,0.06)',
                  cursor: 'none',
                }}
                data-hover
              >
                {course}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
