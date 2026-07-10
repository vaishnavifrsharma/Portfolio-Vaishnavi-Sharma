'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
// These three touch window/DOM directly — stay client-only
const SmoothScroll = dynamic(() => import('@/components/SmoothScroll'), { ssr: false });
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });
const Loader = dynamic(() => import('@/components/Loader'), { ssr: false });

const MARQUEE_WORDS = [
  'DEVELOPER', 'PHOTOGRAPHER', 'ENGINEER', 'CREATIVE', 'PROBLEM SOLVER',
  'VISUAL THINKER', 'CODE ARTIST', 'DSA ENTHUSIAST', 'UI EXPLORER',
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
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

        {/* Experience */}
        <Experience />

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
