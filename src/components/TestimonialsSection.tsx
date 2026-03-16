'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  event: string;
  text: string;
  initials: string;
  rating: number;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Aynur & Rauf',
    event: 'Toy Dəvətnaməsi',
    text: 'Dəvətlim bizim toy dəvətnaməmizi tam röyamızdakı kimi hazırladı. Qonaqlara payladığımızda hamı heyranlıq içindəydi. Bəzisi onu çap etdirmək istədi, o qədər gözəl idi!',
    initials: 'A&R',
    rating: 5,
    date: 'Yanvar 2026',
  },
  {
    name: 'Leyla Əhmədova',
    event: 'Nişan Dəvətnaməsi',
    text: '24 saatdan az müddətdə mükəmməl nişan dəvətnaməmi əlimdə tutdum. Komanda çox peşəkar, sürətli və mehriban idi. Keyfiyyəti ödədiyim xərcdən qat-qat yüksəkdir.',
    initials: 'LA',
    rating: 5,
    date: 'Fevral 2026',
  },
  {
    name: 'Günel & Tural',
    event: 'Toy & Xına Dəvətnaməsi',
    text: 'Həm toy, həm xına gecəsi üçün dəvətnamə sifariş etdik. İkisi də bir-birindən gözəl oldu. WhatsApp üzərindən əlaqə qurmaq çox rahat idi, hər dəyişikliyi dərhal etdilər.',
    initials: 'G&T',
    rating: 5,
    date: 'Mart 2026',
  },
  {
    name: 'Narmin Quliyeva',
    event: 'Baby Shower Dəvətnaməsi',
    text: 'Qızımın baby shower-i üçün zamanında, zərif ve incə bir dəvətnamə aldım. Bütün dostlarım sifarişi göndərən kimi sevdilər. Mütləq tövsiyə edirəm!',
    initials: 'NQ',
    rating: 5,
    date: 'Yanvar 2026',
  },
  {
    name: 'Samirə Hüseynova',
    event: 'Ad Günü Dəvətnaməsi',
    text: 'Annemin 60 yaş tоyu üçün çox xüsusi bir dəvətnamə istedim. Gözləntilərimü çox aşdı — ailə kimi yanaşdılar, sanki onların özlərinin xüsusi günüydü.',
    initials: 'SH',
    rating: 5,
    date: 'Fevral 2026',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(testimonials[(current + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <section
      id="testimonials"
      style={{
        padding: 'clamp(80px, 12vw, 140px) 32px',
        background: 'var(--color-cream)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative text */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(100px, 20vw, 220px)',
          fontWeight: 300,
          color: 'rgba(201,169,110,0.05)',
          letterSpacing: '0.1em',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          zIndex: 0,
          userSelect: 'none',
        }}
      >
        Reviews
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <p className="section-tag" style={{ marginBottom: '16px' }}>
            ✦ Müştəri Rəyləri ✦
          </p>
          <h2
            className="section-title"
            style={{
              fontSize: 'clamp(32px, 5vw, 54px)',
              marginBottom: '20px',
              lineHeight: 1.15,
            }}
          >
            Xoşbəxt Çütlüklərin
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>
              Rəyləri
            </span>
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '52px',
          }}
          className="testimonials-grid"
        >
          {getVisible().map((t, i) => (
            <div
              key={`${current}-${i}`}
              style={{
                background: '#fff',
                border: '1px solid rgba(201,169,110,0.15)',
                borderRadius: '4px',
                padding: '40px 36px',
                boxShadow: i === 1
                  ? '0 20px 60px rgba(201,169,110,0.18)'
                  : '0 8px 30px rgba(61,43,31,0.05)',
                transform: i === 1 ? 'translateY(-8px)' : 'none',
                transition: 'all 0.4s ease',
                position: 'relative',
              }}
            >
              {/* Quote mark */}
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '80px',
                  lineHeight: 0.8,
                  color: 'var(--color-gold)',
                  opacity: 0.25,
                  marginBottom: '16px',
                  fontStyle: 'normal',
                }}
              >
                "
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={13} fill="#C9A96E" color="#C9A96E" />
                ))}
              </div>

              {/* Review text */}
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '17px',
                  fontWeight: 400,
                  color: 'var(--color-text)',
                  lineHeight: 1.75,
                  marginBottom: '32px',
                  fontStyle: 'italic',
                }}
              >
                {t.text}
              </p>

              {/* Divider */}
              <div
                style={{
                  width: '40px',
                  height: '1px',
                  background: 'var(--color-gold)',
                  opacity: 0.5,
                  marginBottom: '20px',
                }}
              />

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, var(--color-beige), var(--color-nude))',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '14px',
                      fontWeight: 500,
                      color: 'var(--color-text)',
                    }}
                  >
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '17px',
                      fontWeight: 500,
                      color: 'var(--color-text)',
                      marginBottom: '2px',
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: '11px',
                      fontWeight: 400,
                      color: 'var(--color-gold)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {t.event} · {t.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '24px' }}>
          <button
            onClick={prev}
            style={{
              width: '48px',
              height: '48px',
              background: 'transparent',
              border: '1px solid rgba(201,169,110,0.4)',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-gold)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = 'var(--color-gold)';
              el.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = 'transparent';
              el.style.color = 'var(--color-gold)';
            }}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: i === current ? 'var(--color-gold)' : 'rgba(201,169,110,0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.35s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            style={{
              width: '48px',
              height: '48px',
              background: 'transparent',
              border: '1px solid rgba(201,169,110,0.4)',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-gold)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = 'var(--color-gold)';
              el.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = 'transparent';
              el.style.color = 'var(--color-gold)';
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
