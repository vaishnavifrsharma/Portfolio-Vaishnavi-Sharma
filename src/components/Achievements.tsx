'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ACHIEVEMENTS = [
  { number: 50, suffix: '+', label: 'DSA Problems', icon: '◆', color: 'var(--sour-cherry)' },
  { number: 3, suffix: '+', label: 'Full-Stack Projects', icon: '♡', color: 'var(--violet-deep)' },
  { number: 3, suffix: '+', label: 'Hackathons', icon: '✦', color: 'var(--green-apple)' },
  { number: 25, suffix: '+', label: 'Photos Curated', icon: '❋', color: 'var(--peach)' },
];

function Counter({ target, suffix, triggered }: { target: number; suffix: string; triggered: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    const duration = 2200;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [triggered, target]);
  return <>{count}{suffix}</>;
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      type: 'spring' as const,
      stiffness: 200,
      damping: 20,
    },
  }),
};

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="relative py-28 md:py-40"
      style={{ background: 'var(--strawberry)' }}
    >
      {/* Stripe accent */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'var(--sour-cherry)' }} />

      <div className="px-6 md:px-16 lg:px-24 max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
          style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 600,
            letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--sour-cherry)',
          }}
        >
          Milestones
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4"
          style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 700, lineHeight: 1.1, color: 'var(--dark-licorice)',
          }}
        >
          Things I&apos;m
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
          proud of
        </motion.h2>

        {/* Achievement cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {ACHIEVEMENTS.map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative p-6 md:p-8 text-center rounded-2xl overflow-hidden"
              style={{
                background: 'var(--cream-white)',
                boxShadow: '0 4px 20px rgba(127,31,37,0.06)',
              }}
              data-hover
            >
              {/* Colored left border */}
              <div
                className="absolute top-0 left-0 bottom-0 w-1 rounded-l-2xl"
                style={{ background: item.color }}
              />

              <span className="block mb-4" style={{ fontSize: '1.4rem', color: item.color }}>
                {item.icon}
              </span>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
                fontWeight: 700, lineHeight: 1, color: 'var(--dark-licorice)',
              }}>
                <Counter target={item.number} suffix={item.suffix} triggered={triggered} />
              </div>
              <p className="mt-3" style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--moss)',
                opacity: 0.7,
              }}>
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
