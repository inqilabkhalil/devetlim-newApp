'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface Category {
  id: string;
  title: string;
  description: string;
  count: string;
  emoji: string;
  gradient: string;
}

const categories: Category[] = [
  {
    id: 'toy',
    title: 'Toy',
    description: 'Ən xüsusi gününüz üçün zərif toy dəvətnamələri',
    count: '24 şablon',
    emoji: '💍',
    gradient: 'linear-gradient(145deg, #F5EDE0, #EDD5B8)',
  },
  {
    id: 'nisan',
    title: 'Nişan',
    description: 'Romantik nişan mərasimi üçün incə dəvətnamələr',
    count: '12 şablon',
    emoji: '💐',
    gradient: 'linear-gradient(145deg, #FDF0F5, #F5D5E0)',
  },
  {
    id: 'adgun',
    title: 'Ad Günü',
    description: 'Hər yaşa uyğun zərif ad günü dəvətnamələri',
    count: '18 şablon',
    emoji: '🎂',
    gradient: 'linear-gradient(145deg, #F0EFF8, #DDD9F5)',
  },
  {
    id: 'baby',
    title: 'Baby Shower',
    description: 'Körpənizin gəlişini xəbər verən şirin dəvətnamələr',
    count: '10 şablon',
    emoji: '🍼',
    gradient: 'linear-gradient(145deg, #EEF6F8, #D5EBF0)',
  },
  {
    id: 'xina',
    title: 'Xına Gecəsi',
    description: 'Gəlinlik öncəsi ən gözəl xına xatirəsi',
    count: '8 şablon',
    emoji: '🌿',
    gradient: 'linear-gradient(145deg, #F0F8EE, #D5F0D8)',
  },
  {
    id: 'bridal',
    title: 'Bridal Shower',
    description: 'Gəlinin şərəfinə hazırlanan qadınlar məclisi',
    count: '8 şablon',
    emoji: '🥂',
    gradient: 'linear-gradient(145deg, #FFF8EE, #F5E8CC)',
  },
];

export default function CategoriesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="categories"
      style={{
        padding: 'clamp(80px, 12vw, 140px) 32px',
        background: 'var(--color-white)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <p className="section-tag" style={{ marginBottom: '16px' }}>
            ✦ Kateqoriyalar ✦
          </p>
          <h2
            className="section-title"
            style={{
              fontSize: 'clamp(32px, 5vw, 54px)',
              marginBottom: '20px',
              lineHeight: 1.15,
            }}
          >
            Xüsusi Anınıza Uyğun
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>
              Dəvətnamə Kateqoriyaları
            </span>
          </h2>
          <div className="gold-divider" style={{ marginBottom: '24px' }} />
          <p
            className="section-subtitle"
            style={{ maxWidth: '480px', margin: '0 auto', fontSize: '15px' }}
          >
            Həyatınızın ən gözəl anları üçün fərdi hazırlanmış dəvətnamə kolleksiyamızı kəşf edin
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '28px',
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="card-hover"
              onMouseEnter={() => setHoveredId(cat.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                background: cat.gradient,
                borderRadius: '4px',
                padding: '48px 36px',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                border: hoveredId === cat.id
                  ? '1px solid rgba(201,169,110,0.4)'
                  : '1px solid transparent',
                transition: 'all 0.4s ease',
              }}
            >
              {/* Corner decoration */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '60px',
                  height: '60px',
                  borderBottom: '1px solid rgba(201,169,110,0.25)',
                  borderLeft: '1px solid rgba(201,169,110,0.25)',
                  opacity: hoveredId === cat.id ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                }}
              />

              {/* Emoji icon */}
              <div
                style={{
                  fontSize: '40px',
                  marginBottom: '24px',
                  display: 'block',
                  lineHeight: 1,
                }}
              >
                {cat.emoji}
              </div>

              {/* Count */}
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                  marginBottom: '10px',
                }}
              >
                {cat.count}
              </p>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '26px',
                  fontWeight: 400,
                  color: 'var(--color-text)',
                  marginBottom: '12px',
                  letterSpacing: '0.02em',
                }}
              >
                {cat.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '14px',
                  fontWeight: 300,
                  color: 'var(--color-text-light)',
                  lineHeight: 1.7,
                  marginBottom: '28px',
                }}
              >
                {cat.description}
              </p>

              {/* Arrow link */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                  transform: hoveredId === cat.id ? 'translateX(4px)' : 'translateX(0)',
                  transition: 'transform 0.3s ease',
                }}
              >
                Bax <ArrowRight size={13} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
