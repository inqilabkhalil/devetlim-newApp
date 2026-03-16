'use client';

import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #2C1A0E 0%, #3D2B1F 40%, #5C3D2E 70%, #2C1A0E 100%)',
      }}
    >
      {/* Textured overlay pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(ellipse at 20% 50%, rgba(201,169,110,0.15) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(201,169,110,0.10) 0%, transparent 50%),
            radial-gradient(ellipse at 60% 80%, rgba(201,169,110,0.08) 0%, transparent 50%)
          `,
          zIndex: 1,
        }}
      />

      {/* Decorative corner ornaments */}
      <div
        style={{
          position: 'absolute',
          top: '60px',
          left: '60px',
          width: '120px',
          height: '120px',
          borderTop: '1px solid rgba(201,169,110,0.4)',
          borderLeft: '1px solid rgba(201,169,110,0.4)',
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '60px',
          right: '60px',
          width: '120px',
          height: '120px',
          borderTop: '1px solid rgba(201,169,110,0.4)',
          borderRight: '1px solid rgba(201,169,110,0.4)',
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '60px',
          left: '60px',
          width: '120px',
          height: '120px',
          borderBottom: '1px solid rgba(201,169,110,0.4)',
          borderLeft: '1px solid rgba(201,169,110,0.4)',
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '60px',
          right: '60px',
          width: '120px',
          height: '120px',
          borderBottom: '1px solid rgba(201,169,110,0.4)',
          borderRight: '1px solid rgba(201,169,110,0.4)',
          zIndex: 2,
        }}
      />

      {/* Floral watermark SVG */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          opacity: 0.05,
        }}
      >
        <svg width="600" height="600" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="#C9A96E" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" stroke="#C9A96E" strokeWidth="0.3" />
          <path d="M50 10 C50 10 60 30 50 50 C40 30 50 10 50 10Z" fill="#C9A96E" />
          <path d="M50 90 C50 90 60 70 50 50 C40 70 50 90 50 90Z" fill="#C9A96E" />
          <path d="M10 50 C10 50 30 60 50 50 C30 40 10 50 10 50Z" fill="#C9A96E" />
          <path d="M90 50 C90 50 70 60 50 50 C70 40 90 50 90 50Z" fill="#C9A96E" />
          <path d="M22 22 C22 22 38 38 50 50 C38 38 22 22 22 22Z" fill="#C9A96E" />
          <path d="M78 22 C78 22 62 38 50 50 C62 38 78 22 78 22Z" fill="#C9A96E" />
          <path d="M22 78 C22 78 38 62 50 50 C38 62 22 78 22 78Z" fill="#C9A96E" />
          <path d="M78 78 C78 78 62 62 50 50 C62 62 78 78 78 78Z" fill="#C9A96E" />
        </svg>
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          padding: '120px 32px 80px',
          maxWidth: '860px',
          margin: '0 auto',
        }}
      >
        {/* Tag */}
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
            marginBottom: '28px',
          }}
        >
          ✦ Premium Onlayn Dəvətnamə Xidməti ✦
        </p>

        {/* Main heading */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(42px, 7vw, 84px)',
            fontWeight: 300,
            lineHeight: 1.1,
            color: '#FAF7F2',
            marginBottom: '12px',
            letterSpacing: '0.02em',
          }}
        >
          Xüsusi Gününüz üçün
        </h1>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(42px, 7vw, 84px)',
            fontWeight: 300,
            lineHeight: 1.1,
            color: '#FAF7F2',
            marginBottom: '32px',
            letterSpacing: '0.02em',
            fontStyle: 'italic',
          }}
        >
          <span style={{ color: 'var(--color-gold)' }}>Zərif</span> Onlayn Dəvətnamələr
        </h1>

        {/* Gold line */}
        <div
          style={{
            width: '80px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
            margin: '0 auto 32px',
          }}
        />

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: 'clamp(14px, 2vw, 17px)',
            fontWeight: 300,
            color: 'rgba(250,247,242,0.75)',
            lineHeight: 1.8,
            maxWidth: '560px',
            margin: '0 auto 52px',
            letterSpacing: '0.03em',
          }}
        >
          Toy, nişan, ad günü və hər xüsusi an üçün fərdi hazırlanmış
          <br />premium onlayn dəvətnamə dizaynları
        </p>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => scrollTo('#products')}
            className="btn-primary"
            style={{
              background: 'var(--color-gold)',
              color: '#fff',
              padding: '16px 40px',
              fontSize: '12px',
            }}
          >
            Dəvətnamələrə Bax <ArrowRight size={15} />
          </button>
          <a
            href="https://wa.me/994XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '15px 39px',
              background: 'transparent',
              color: 'rgba(250,247,242,0.9)',
              fontFamily: "'Jost', sans-serif",
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              border: '1px solid rgba(201,169,110,0.6)',
              cursor: 'pointer',
              transition: 'all 0.35s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'rgba(201,169,110,0.15)';
              el.style.borderColor = 'var(--color-gold)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'transparent';
              el.style.borderColor = 'rgba(201,169,110,0.6)';
            }}
          >
            İndi Sifariş Et
          </a>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            gap: '60px',
            justifyContent: 'center',
            marginTop: '80px',
            paddingTop: '48px',
            borderTop: '1px solid rgba(201,169,110,0.2)',
            flexWrap: 'wrap',
            rowGap: '32px',
          }}
        >
          {[
            { num: '500+', label: 'Xoşbəxt Cütlük' },
            { num: '50+', label: 'Hazır Şablon' },
            { num: '24s', label: 'Çatdırılma Müddəti' },
          ].map((stat) => (
            <div key={stat.num} style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '36px',
                  fontWeight: 300,
                  color: 'var(--color-gold)',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}
              >
                {stat.num}
              </p>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '11px',
                  fontWeight: 400,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(250,247,242,0.5)',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          animation: 'bounce 2s infinite',
        }}
      >
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '10px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(201,169,110,0.6)',
          }}
        >
          Kəşf Et
        </p>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, var(--color-gold), transparent)',
            animation: 'scrollLine 2s ease-in-out infinite',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
        @keyframes scrollLine {
          0% { opacity: 1; transform: scaleY(1); transform-origin: top; }
          100% { opacity: 0; transform: scaleY(0); transform-origin: top; }
        }
        @media (max-width: 768px) {
          section { min-height: 100svh; }
        }
      `}</style>
    </section>
  );
}
