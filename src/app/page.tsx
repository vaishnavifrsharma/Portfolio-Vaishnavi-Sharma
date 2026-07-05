'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports for better code splitting
const SmoothScroll = dynamic(() => import('@/components/SmoothScroll'), { ssr: false });
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });
const Loader = dynamic(() => import('@/components/Loader'), { ssr: false });
const Navigation = dynamic(() => import('@/components/Navigation'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const Marquee = dynamic(() => import('@/components/Marquee'), { ssr: false });
const About = dynamic(() => import('@/components/About'), { ssr: false });
const Achievements = dynamic(() => import('@/components/Achievements'), { ssr: false });
const Education = dynamic(() => import('@/components/Education'), { ssr: false });
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false });
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });

const MARQUEE_WORDS = [
  'DEVELOPER', 'PHOTOGRAPHER', 'ENGINEER', 'CREATIVE', 'PROBLEM SOLVER',
  'VISUAL THINKER', 'CODE ARTIST', 'DSA ENTHUSIAST', 'UI EXPLORER',
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: 'var(--marshmallow)' }}
      >
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', color: 'var(--dark-licorice)', fontStyle: 'italic' }}>0</span>
      </div>
    );
  }

  return (
    <SmoothScroll>
      <main>
        {/* Loading Screen */}
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

        {/* Custom Cursor */}
        <CustomCursor />

        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <Hero />

        {/* Marquee Divider */}
        <Marquee words={MARQUEE_WORDS} />

        {/* About Section */}
        <About />

        {/* Marquee Divider */}
        <Marquee
          words={['BUILD', 'CREATE', 'DESIGN', 'CODE', 'INNOVATE', 'EXPLORE', 'CAPTURE']}
          reverse
        />

        {/* Achievements */}
        <Achievements />

        {/* Education */}
        <Education />

        {/* Skills */}
        <Skills />

        {/* Marquee Divider */}
        <Marquee
          words={['REACT', 'NEXT.JS', 'PYTHON', 'C++', 'GSAP', 'FIGMA', 'PHOTOGRAPHY']}
        />

        {/* Projects */}
        <Projects />

        {/* Contact */}
        <Contact />
      </main>
    </SmoothScroll>
  );
}
