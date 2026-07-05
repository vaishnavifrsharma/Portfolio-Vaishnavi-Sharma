'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

const CATEGORIES = ['All', 'Street', 'Portraits', 'Nature', 'Abstract', 'Campus'];

const PHOTOS = [
  { id: 1, category: 'Nature', src: '/Image 2.png', aspect: 'tall' },
  { id: 2, category: 'Nature', src: '/Image 7.png', aspect: 'wide' },
  { id: 6, category: 'Portraits', src: '/Image 3.png', aspect: 'tall' },
  { id: 3, category: 'Street', src: '/Image 4.png', aspect: 'tall' },
  { id: 4, category: 'Nature', src: '/Image 5.png', aspect: 'tall' },
  { id: 5, category: 'Portraits', src: '/Image 6.png', aspect: 'wide' },
  { id: 7, category: 'Abstract', src: '/Image 8.png', aspect: 'wide' },
  { id: 8, category: 'Portraits', src: '/Image 9.png', aspect: 'tall' },
  { id: 9, category: 'Portraits', src: '/Image 10.png', aspect: 'tall' },
  { id: 10, category: 'Portraits', src: '/Image 11.png', aspect: 'tall' },
  { id: 11, category: 'Portraits', src: '/Image 12.png', aspect: 'wide' },
  { id: 12, category: 'Portraits', src: '/Image 13.png', aspect: 'tall' },
  { id: 13, category: 'Portraits', src: '/Image 14.png', aspect: 'tall' },
  { id: 14, category: 'Campus', src: '/Image 15.png', aspect: 'wide' },
  { id: 15, category: 'Campus', src: '/Image 16.png', aspect: 'tall' },
  { id: 16, category: 'Campus', src: '/Image 17.png', aspect: 'tall' },
  { id: 17, category: 'Campus', src: '/Image 18.png', aspect: 'wide' },
  { id: 18, category: 'Campus', src: '/Image 19.png', aspect: 'tall' },
  { id: 19, category: 'Campus', src: '/Image 20.png', aspect: 'tall' },
  { id: 20, category: 'Portraits', src: '/Image 21.png', aspect: 'tall' },
];

export default function Photography() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState<typeof PHOTOS[0] | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const filtered = activeCategory === 'All' ? PHOTOS : PHOTOS.filter(p => p.category === activeCategory);

  useEffect(() => {
    gsap.fromTo(
      '.photo-hero-el',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: 'power3.out', delay: 0.3 }
    );
  }, []);

  useEffect(() => {
    if (galleryRef.current) {
      gsap.fromTo(
        '.photo-item',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.06, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen" style={{ background: 'var(--black)' }}>
      <div className="noise-overlay" style={{ opacity: 0.04 }} />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-[9990] flex items-center justify-between px-6 md:px-10 py-5">
        <Link
          href="/"
          className="transition-opacity hover:opacity-60"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.65rem',
            fontWeight: 500,
            color: 'var(--off-white)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
          data-hover
        >
          ← Portfolio
        </Link>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--off-white)' }}>
          VS<span style={{ color: 'var(--red)' }}>.</span>
        </span>
      </nav>

      {/* Hero */}
      <div ref={heroRef} className="relative min-h-[65vh] flex items-center justify-center">
        <div className="text-center px-6 relative z-10">
          <p
            className="photo-hero-el mb-6"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6rem',
              fontWeight: 600,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'var(--warm-gray)',
            }}
          >
            Visual Stories
          </p>
          <h1
            className="photo-hero-el"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 9vw, 7rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              color: 'var(--off-white)',
            }}
          >
            Photo<span style={{ fontStyle: 'italic', color: 'var(--red)' }}>graphy</span>
          </h1>
          <p
            className="photo-hero-el mt-8 mx-auto"
            style={{
              fontFamily: 'var(--font-light)',
              fontSize: '0.95rem',
              fontWeight: 300,
              lineHeight: 1.9,
              color: 'rgba(255,255,255,0.4)',
              maxWidth: '420px',
            }}
          >
            Every frame is a conversation between light and emotion.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div
        className="sticky top-0 z-50 px-6 md:px-10 py-5 flex gap-3 overflow-x-auto justify-center"
        style={{
          background: 'rgba(26, 26, 26, 0.9)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
        }}
      >
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-4 py-2 transition-all duration-300"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              background: activeCategory === cat ? 'var(--off-white)' : 'transparent',
              color: activeCategory === cat ? 'var(--black)' : 'rgba(255,255,255,0.3)',
              border: `1px solid ${activeCategory === cat ? 'var(--off-white)' : 'rgba(255,255,255,0.08)'}`,
              borderRadius: '100px',
              cursor: 'none',
            }}
            data-hover
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div ref={galleryRef} className="px-4 md:px-8 py-10 columns-1 sm:columns-2 lg:columns-3 gap-4">
        {filtered.map(photo => (
          <div
            key={photo.id}
            className="photo-item group relative mb-4 break-inside-avoid overflow-hidden cursor-pointer"
            style={{
              height: photo.aspect === 'tall' ? '480px' : photo.aspect === 'wide' ? '280px' : '360px',
              borderRadius: '12px',
            }}
            onClick={() => setSelectedPhoto(photo)}
            data-hover
          >
            <img
              src={photo.src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-6 md:p-16"
          style={{ background: 'rgba(0, 0, 0, 0.95)' }}
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-6 right-8"
            onClick={() => setSelectedPhoto(null)}
            style={{ fontFamily: 'var(--font-light)', fontSize: '1.5rem', fontWeight: 300, color: 'var(--off-white)' }}
            data-hover
          >
            ✕
          </button>
          <div className="max-w-4xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <img
              src={selectedPhoto.src}
              alt=""
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
            />
            <div className="mt-6 w-full flex justify-end">
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--red)' }}>
                {selectedPhoto.category}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="px-6 md:px-10 py-12 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <Link
          href="/"
          className="transition-opacity hover:opacity-60"
          style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 500, color: 'var(--warm-gray)', letterSpacing: '0.15em', textTransform: 'uppercase' }}
          data-hover
        >
          ← Back to Portfolio
        </Link>
      </div>
    </div>
  );
}
