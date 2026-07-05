'use client';

interface MarqueeProps {
  words: string[];
  reverse?: boolean;
}

export default function Marquee({ words, reverse = false }: MarqueeProps) {
  const repeatedWords = [...words, ...words, ...words, ...words];

  return (
    <div className="relative overflow-hidden scallop-top scallop-bottom" style={{ marginTop: '12px', marginBottom: '12px' }}>
      <div
        className="py-4"
        style={{ background: 'var(--sour-cherry)' }}
      >
        <div
          className="flex items-center gap-0 whitespace-nowrap"
          style={{ animation: `${reverse ? 'marqueeReverse' : 'marqueeScroll'} 25s linear infinite` }}
        >
          {repeatedWords.map((word, i) => (
            <span key={i} className="flex items-center shrink-0">
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(0.8rem, 1.6vw, 1.1rem)',
                  fontWeight: 500,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'var(--cream-white)',
                  padding: '0 20px',
                }}
              >
                {word}
              </span>
              <span style={{ color: 'var(--peach)', fontSize: '0.7rem', padding: '0 6px' }}>
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
