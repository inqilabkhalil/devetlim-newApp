'use client';

import { useState } from 'react';
import { Eye, ShoppingBag } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  badge?: string;
  colors: [string, string];
}

const products: Product[] = [
  {
    id: 1,
    name: 'Eternal Romance',
    description: 'Romantik çiçəklər və zərif gold detaylarla toy dəvətnaməsi',
    price: '45 AZN-dən',
    category: 'toy',
    badge: 'Ən Populyar',
    colors: ['#F5EDE0', '#EDD5B8'],
  },
  {
    id: 2,
    name: 'Golden Vows',
    description: 'Minimal gold dizayn ilə luxe toy dəvətnaməsi',
    price: '55 AZN-dən',
    category: 'toy',
    badge: 'Premium',
    colors: ['#3D2B1F', '#5C3D2E'],
  },
  {
    id: 3,
    name: 'Blossom Love',
    description: 'Çəhrayı çiçəklər ilə romantik nişan dəvətnaməsi',
    price: '35 AZN-dən',
    category: 'nisan',
    colors: ['#FDF0F5', '#F5D5E0'],
  },
  {
    id: 4,
    name: 'Pearl Garden',
    description: 'İncə botanical motiflərlə nişan dəvətnaməsi',
    price: '40 AZN-dən',
    category: 'nisan',
    badge: 'Yeni',
    colors: ['#F0EFF8', '#DDD9F5'],
  },
  {
    id: 5,
    name: 'Sweet Moments',
    description: 'Şən və rəngarəng ad günü dəvətnaməsi',
    price: '25 AZN-dən',
    category: 'adgun',
    colors: ['#EEF6F8', '#D5EBF0'],
  },
  {
    id: 6,
    name: 'Little Star',
    description: 'Uşaqlar üçün sevimli ad günü dəvətnaməsi',
    price: '20 AZN-dən',
    category: 'adgun',
    colors: ['#FFF8EE', '#F5E8CC'],
  },
  {
    id: 7,
    name: 'Baby Blooms',
    description: 'Körpənizin gəlişini bildirən incə dəvətnamə',
    price: '30 AZN-dən',
    category: 'baby',
    badge: 'Sevilən',
    colors: ['#EEF6F8', '#D5EBF0'],
  },
  {
    id: 8,
    name: 'Henna Night',
    description: 'Ənənəvi motivlərlə modern xına gecəsi dəvətnaməsi',
    price: '35 AZN-dən',
    category: 'xina',
    colors: ['#F0F8EE', '#D5F0D8'],
  },
];

const tabs = [
  { id: 'all', label: 'Hamısı' },
  { id: 'toy', label: 'Toy' },
  { id: 'nisan', label: 'Nişan' },
  { id: 'adgun', label: 'Ad Günü' },
  { id: 'baby', label: 'Baby Shower' },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      key={product.id}
      className="card-hover"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: '4px',
        overflow: 'hidden',
        border: '1px solid rgba(201,169,110,0.15)',
        position: 'relative',
        animationDelay: `${index * 0.08}s`,
      }}
    >
      {/* Badge */}
      {product.badge && (
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            zIndex: 2,
            background: 'var(--color-gold)',
            color: '#fff',
            fontFamily: "'Jost', sans-serif",
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            padding: '5px 12px',
          }}
        >
          {product.badge}
        </div>
      )}

      {/* Product visual */}
      <div
        style={{
          height: '260px',
          background: `linear-gradient(145deg, ${product.colors[0]}, ${product.colors[1]})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Mock invitation design */}
        <div
          style={{
            width: '160px',
            height: '220px',
            background: 'rgba(255,255,255,0.9)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            gap: '10px',
            transform: hovered ? 'scale(1.04) rotate(-1deg)' : 'scale(1) rotate(-1deg)',
            transition: 'transform 0.4s ease',
          }}
        >
          <div style={{ width: '40px', height: '1px', background: 'var(--color-gold)', opacity: 0.7 }} />
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '11px',
            fontWeight: 300,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
          }}>Invitation</p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '20px',
            fontWeight: 400,
            color: 'var(--color-text)',
            textAlign: 'center',
            lineHeight: 1.3,
            fontStyle: 'italic',
          }}>{product.name}</p>
          <div style={{
            width: '30px',
            height: '30px',
            border: '1px solid rgba(201,169,110,0.4)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontSize: '14px' }}>✦</span>
          </div>
          <div style={{ width: '40px', height: '1px', background: 'var(--color-gold)', opacity: 0.7 }} />
        </div>

        {/* Hover overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(61,43,31,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.35s ease',
          }}
        >
          <button
            style={{
              width: '44px',
              height: '44px',
              background: '#fff',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-text)',
              transition: 'all 0.3s ease',
            }}
            title="Ətraflı bax"
          >
            <Eye size={16} />
          </button>
          <a
            href="https://wa.me/994XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '44px',
              height: '44px',
              background: 'var(--color-gold)',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
            }}
            title="Sifariş et"
          >
            <ShoppingBag size={16} />
          </a>
        </div>
      </div>

      {/* Card content */}
      <div style={{ padding: '28px 28px 32px' }}>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '22px',
            fontWeight: 400,
            color: 'var(--color-text)',
            marginBottom: '8px',
            letterSpacing: '0.02em',
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '13px',
            fontWeight: 300,
            color: 'var(--color-text-light)',
            lineHeight: 1.6,
            marginBottom: '20px',
          }}
        >
          {product.description}
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '16px',
            borderTop: '1px solid rgba(201,169,110,0.15)',
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '20px',
              fontWeight: 500,
              color: 'var(--color-gold)',
            }}
          >
            {product.price}
          </p>
          <a
            href="https://wa.me/994XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-gold)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--color-gold)',
              paddingBottom: '2px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--color-gold-dark)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--color-gold)';
            }}
          >
            Sifariş Et →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all'
    ? products
    : products.filter((p) => p.category === activeTab);

  return (
    <section
      id="products"
      style={{
        padding: 'clamp(80px, 12vw, 140px) 32px',
        background: 'var(--color-cream)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p className="section-tag" style={{ marginBottom: '16px' }}>
            ✦ Dəvətnamələr ✦
          </p>
          <h2
            className="section-title"
            style={{
              fontSize: 'clamp(32px, 5vw, 54px)',
              marginBottom: '20px',
              lineHeight: 1.15,
            }}
          >
            Premium Dəvətnamə
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>
              Şablonlarımız
            </span>
          </h2>
          <div className="gold-divider" style={{ marginBottom: '24px' }} />
          <p
            className="section-subtitle"
            style={{ maxWidth: '460px', margin: '0 auto', fontSize: '15px' }}
          >
            Hər şablon fərdi olaraq məlumatlarınızla hazırlanır
          </p>
        </div>

        {/* Filter tabs */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'center',
            marginBottom: '52px',
            flexWrap: 'wrap',
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '10px 24px',
                fontFamily: "'Jost', sans-serif",
                fontSize: '12px',
                fontWeight: activeTab === tab.id ? 500 : 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                border: activeTab === tab.id
                  ? '1px solid var(--color-gold)'
                  : '1px solid rgba(201,169,110,0.3)',
                background: activeTab === tab.id
                  ? 'var(--color-gold)'
                  : 'transparent',
                color: activeTab === tab.id ? '#fff' : 'var(--color-text-light)',
                cursor: 'pointer',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '28px',
          }}
        >
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '64px' }}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '18px',
              fontStyle: 'italic',
              color: 'var(--color-text-light)',
              marginBottom: '28px',
            }}
          >
            Daha çox şablon görmək istəyirsiniz?
          </p>
          <a
            href="https://wa.me/994XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ textDecoration: 'none' }}
          >
            WhatsApp ilə Kataloqa Bax
          </a>
        </div>
      </div>
    </section>
  );
}
