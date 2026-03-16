'use client';

import Image from 'next/image';

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function SiteFooter() {
  return (
    <footer
      style={{
        borderTop: '1px solid #f0f0f0',
        background: '#fff',
        padding: '48px 0 32px',
        marginTop: 80,
      }}
    >
      <div className="page-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 40,
            marginBottom: 40,
          }}
        >
          {/* Brand */}
          <div>
            <Image
              src="/logo-raw.png"
              alt="Dəvətlim"
              width={120}
              height={44}
              style={{ objectFit: 'contain', mixBlendMode: 'multiply', marginBottom: 12 }}
            />
            <p
              style={{
                fontSize: 13,
                color: '#6b7280',
                lineHeight: 1.7,
                maxWidth: 220,
              }}
            >
              Sizə özəl veb-sayt formatında dəvətnamələr hazırlayırıq.
            </p>
          </div>

          {/* Links */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                marginBottom: 16,
              }}
            >
              Keçidlər
            </div>
            {[
              { label: 'Şablonlar', id: 'sablonlar' },
              { label: 'Haqqımızda', id: 'haqqimizda' },
            ].map((l) => (
              <a
                key={l.id}
                href={`/#${l.id}`}
                onClick={(e) => { e.preventDefault(); scrollTo(l.id); }}
                style={{
                  display: 'block',
                  fontSize: 13,
                  color: 'var(--color-text-light)',
                  textDecoration: 'none',
                  marginBottom: 10,
                  cursor: 'pointer',
                }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                marginBottom: 16,
              }}
            >
              Əlaqə
            </div>
            <a
              href="https://wa.me/message/PIDOVTOA4YRHI1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                fontSize: 13,
                color: 'var(--color-text-light)',
                textDecoration: 'none',
                marginBottom: 10,
              }}
            >
              WhatsApp ilə yazın
            </a>
            <a
              href="tel:+994993959442"
              style={{
                display: 'block',
                fontSize: 13,
                color: 'var(--color-text-light)',
                textDecoration: 'none',
                marginBottom: 10,
              }}
            >
              +994 99 395 94 42
            </a>
            <a
              href="mailto:devetlim.az@gmail.com"
              style={{
                display: 'block',
                fontSize: 13,
                color: 'var(--color-text-light)',
                textDecoration: 'none',
              }}
            >
              devetlim.az@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(201,169,110,0.15)',
            paddingTop: 20,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 8,
          }}
        >
          <p
            style={{
              fontSize: 12,
              color: 'var(--color-text-light)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            © 2026 Dəvətlim. Bütün hüquqlar qorunur.
          </p>
          <p
            style={{
              fontSize: 11,
              color: 'var(--color-gold)',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.08em',
            }}
          >
            WE INVITE YOU
          </p>
        </div>
      </div>
    </footer>
  );
}
