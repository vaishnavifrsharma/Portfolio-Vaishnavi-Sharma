'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const CATEGORIES = ['All', 'Web Dev', 'AI/ML'];

const PROJECTS = [
  {
    title: 'Deepdetect',
    description:
      'Audio deepfake detection system (team project) classifying real vs. AI-generated speech using mel-spectrogram features. My contribution: infrastructure and pipeline work.',
    tech: ['PyTorch', 'TensorFlow', 'Librosa'],
    category: 'AI/ML',
    github: 'https://github.com/mrinalmeena/Deep-Detect',
  },
  {
    title: 'MNIST Digit Recognizer',
    description:
      'Multi-model comparison pipeline benchmarking Logistic Regression, KNN, and Decision Trees on handwritten digit classification. Part of a collaborative ML team project.',
    tech: ['scikit-learn', 'Python', 'NumPy'],
    category: 'AI/ML',
    github: 'https://github.com/vaishnavifrsharma/MNIST-DIGIT-RECOGNIZER',
  },
  {
    title: 'PACT',
    description:
      'Accountability habit tracker built for two partners. Features PIN login, GitHub-style year-grid streak tracking, confetti on completion, a punishment log, and spin roulette for missed streaks.',
    tech: ['React', 'Supabase', 'Vercel'],
    category: 'Web Dev',
  },
  {
    title: 'DTU CSE Research Committee',
    description:
      'Official website for the DTU CS Research Committee. Built with Hugo and Tailwind — faculty sections driven by YAML data files, CSS-only tabs, and float/shine animations.',
    tech: ['Hugo', 'Tailwind CSS', 'YAML'],
    category: 'Web Dev',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative py-28 md:py-40"
      style={{ background: 'var(--cream-white)' }}
    >
      <div className="px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--sour-cherry)',
            }}
          >
            Selected Work
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
            Some of my
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
            Projects
          </motion.h2>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="px-5 py-2 transition-all duration-300 rounded-full"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  background: activeFilter === cat ? 'var(--sour-cherry)' : 'transparent',
                  color: activeFilter === cat ? 'var(--cream-white)' : 'var(--moss)',
                  border: `2px solid ${activeFilter === cat ? 'var(--sour-cherry)' : 'rgba(127,31,37,0.15)'}`,
                  cursor: 'none',
                }}
                data-hover
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="group p-8 md:p-10 rounded-2xl"
              style={{
                background: 'var(--warm-white)',
                border: '1.5px solid rgba(127,31,37,0.06)',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--sour-cherry)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px rgba(201, 46, 47, 0.08)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(127,31,37,0.06)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
              data-hover
            >
              {/* Category badge */}
              <span
                className="inline-block mb-5 px-3 py-1 rounded-full"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--cream-white)',
                  background: project.category === 'AI/ML' ? 'var(--violet-deep)' : 'var(--sour-cherry)',
                }}
              >
                {project.category}
              </span>

              {/* Title */}
              <h3
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--dark-licorice)',
                  lineHeight: 1.2,
                }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="mb-8"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.88rem',
                  lineHeight: 1.8,
                  color: 'var(--moss)',
                }}
              >
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.68rem',
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                      color: 'var(--moss)',
                      background: 'var(--marshmallow)',
                      border: '1px solid rgba(127,31,37,0.06)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}

              {project.github && (
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-[var(--sour-cherry)]"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--dark-licorice)',
                  }}
                  data-hover
                >
                  GitHub ↗
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
