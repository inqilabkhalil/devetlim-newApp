'use client';

import { useState } from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '✦',
    title: 'Fərdi Dizayn',
    description: 'Hər dəvətnamə sizin məlumatlarınıza, rənglərinizə və üslubunuza uyğun tamamilə fərdi şəkildə hazırlanır.',
  },
  {
    icon: '⚡',
    title: 'Sürətli Çatdırılma',
    description: 'Sifarişiniz qəbul edildikdən 24 saat ərzində hazır dəvətnaməni əlinizdə tutursunuz.',
  },
  {
    icon: '📱',
    title: 'Mobil Uyğun Format',
    description: 'Bütün dəvətnamələr telefon, tablet və kompüterdə mükəmməl görünür, paylaşmaq çox asandır.',
  },
  {
    icon: '♾',
    title: 'Sonsuz Paylaşım',
    description: 'WhatsApp, Instagram, e-poçt — istədiyiniz platformda hədsiz paylaşım imkanı.',
  },
];

export default function AboutSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="about"
      style={{
        padding: 'clamp(80px, 12vw, 140px) 32px',
        background: 'var(--color-white)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '80px',
            alignItems: 'center',
          }}
        >
          {/* Left: Text */}
          <div>
            <p className="section-tag" style={{ marginBottom: '20px' }}>
              ✦ Niyə Bizi Seçin ✦
            </p>
            <h2
              className="section-title"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 52px)',
                marginBottom: '12px',
                lineHeight: 1.15,
              }}
            >
              Hər Çatdırılma
            </h2>
            <h2
              className="section-title"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 52px)',
                marginBottom: '28px',
                lineHeight: 1.15,
                fontStyle: 'italic',
                color: 'var(--color-gold)',
              }}
            >
              Sənətkarlıqla Dolu
            </h2>
            <div
              style={{
                width: '50px',
                height: '1px',
                background: 'var(--color-gold)',
                marginBottom: '28px',
              }}
            />
            <p
              className="section-subtitle"
              style={{ fontSize: '15px', maxWidth: '420px', marginBottom: '40px' }}
            >
              Dəvətlim olaraq hər müştəriyə fərdi yanaşırıq. Sizin xüsusi gününüz
              üçün ən zərif, ən yaddaqalan dəvətnaməni birlikdə yaradırıq.
            </p>

            {/* Numbers */}
            <div
              style={{
                display: 'flex',
                gap: '48px',
                paddingTop: '32px',
                borderTop: '1px solid rgba(201,169,110,0.2)',
                flexWrap: 'wrap',
                rowGap: '24px',
              }}
            >
              {[
                { num: '500+', label: 'Xoşbəxt Müştəri' },
                { num: '98%', label: 'Məmnuniyyət' },
                { num: '3+', label: 'İl Təcrübə' },
              ].map((s) => (
                <div key={s.num}>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '42px',
                      fontWeight: 300,
                      color: 'var(--color-gold)',
                      lineHeight: 1,
                      marginBottom: '6px',
                    }}
                  >
                    {s.num}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: '11px',
                      fontWeight: 400,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-light)',
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Feature cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
            }}
          >
            {features.map((f, i) => (
              <div
                key={i}
                className="card-hover"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  padding: '32px 24px',
                  background: hoveredIdx === i
                    ? 'var(--color-beige)'
                    : 'var(--color-cream)',
                  border: hoveredIdx === i
                    ? '1px solid rgba(201,169,110,0.4)'
                    : '1px solid rgba(201,169,110,0.15)',
                  borderRadius: '4px',
                  cursor: 'default',
                  transition: 'all 0.4s ease',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, var(--color-beige), var(--color-nude))',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    marginBottom: '20px',
                    border: '1px solid rgba(201,169,110,0.25)',
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '19px',
                    fontWeight: 400,
                    color: 'var(--color-text)',
                    marginBottom: '12px',
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: '13px',
                    fontWeight: 300,
                    color: 'var(--color-text-light)',
                    lineHeight: 1.7,
                  }}
                >
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
