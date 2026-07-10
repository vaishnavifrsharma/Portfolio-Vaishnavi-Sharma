'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Photography', href: '/photography' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
      setIsScrolled(scrollTop > 80);

      const sections = ['contact', 'projects', 'experience', 'skills', 'education', 'achievements', 'about'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(
        menuRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: 'power2.out' }
      );
      gsap.fromTo(
        navItemsRef.current.filter(Boolean),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.06, duration: 0.5, ease: 'power3.out', delay: 0.15 }
      );
    } else {
      document.body.style.overflow = '';
      gsap.to(menuRef.current, { opacity: 0, duration: 0.3, ease: 'power2.in' });
    }
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      setTimeout(() => {
        const el = document.getElementById(href.slice(1));
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    }
  };

  return (
    <>
      {/* Scroll Progress */}
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />

      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-[9990] flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-300"
        style={{
          background: isScrolled ? 'rgba(252, 240, 240, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        }}
      >
        <Link
          href="/"
          className="relative z-[9999]"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.4rem',
            fontWeight: 700,
            color: isOpen ? 'var(--dark-licorice)' : 'var(--dark-licorice)',
            transition: 'color 0.3s',
          }}
        >
          VSR<span style={{ color: 'var(--sour-cherry)' }}>.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.slice(0, 6).map(item => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                if (item.href.startsWith('#')) {
                  e.preventDefault();
                  handleNavClick(item.href);
                }
              }}
              className="relative transition-colors duration-300"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: activeSection === item.href.slice(1) ? 'var(--sour-cherry)' : 'var(--moss)',
                transition: 'color 0.3s',
              }}
              data-hover
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <span
                  className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                  style={{ background: 'var(--sour-cherry)' }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-[9999] flex flex-col gap-[5px] p-2"
          data-hover
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-[1.5px] transition-all duration-300"
            style={{
              background: 'var(--dark-licorice)',
              transform: isOpen ? 'rotate(45deg) translateY(4.5px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-[1.5px] transition-all duration-300"
            style={{
              background: 'var(--dark-licorice)',
              opacity: isOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-4 h-[1.5px] transition-all duration-300"
            style={{
              background: 'var(--dark-licorice)',
              transform: isOpen ? 'rotate(-45deg) translateY(-4.5px) translateX(0px)' : 'none',
              width: isOpen ? '24px' : '16px',
            }}
          />
        </button>
      </nav>

      {/* Fullscreen menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-[9995] flex items-center justify-center"
        style={{
          background: 'var(--marshmallow)',
          opacity: 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      >
        {/* Stripe accent */}
        <div className="absolute inset-0 stripe-diagonal opacity-40" />

        <div className="relative z-10 flex flex-col items-center gap-3 md:gap-4">
          {NAV_ITEMS.map((item, i) => {
            const props = {
              ref: (el: HTMLAnchorElement | null) => { navItemsRef.current[i] = el; },
              className: 'group relative text-center transition-colors duration-300 hover:text-[var(--sour-cherry)]',
              style: {
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
                fontWeight: 500 as const,
                color: 'var(--dark-licorice)',
                letterSpacing: '0.03em',
                lineHeight: 1.3,
                fontStyle: 'italic' as const,
              } as React.CSSProperties,
              'data-hover': true,
            };

            return item.href.startsWith('/') ? (
              <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)} {...props}>
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                {...props}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', color: 'var(--moss)', letterSpacing: '0.12em', fontWeight: 500 }}>
            © 2025 VAISHNAVI SHARMA
          </p>
          <div className="flex gap-6">
            {['GitHub', 'LinkedIn', 'Instagram'].map(s => (
              <a key={s} href="#" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', color: 'var(--sour-cherry)', letterSpacing: '0.08em', fontWeight: 500 }} data-hover>
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
