'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { templates, categories, Template, TemplateCategory } from '@/data/templates';

const WA = 'https://wa.me/message/PIDOVTOA4YRHI1';

const categoryBadgeClass: Record<string, string> = {
  Toy: 'badge badge-toy',
  Nişan: 'badge badge-nisan',
  'Ad günü': 'badge badge-ad-gunu',
};

function getPreviewCandidates(template: Template): string[] {
  const base = `/sablonlar/${template.folderPath}`;
  const candidates = [
    `${base}/preview.png`,
    `${base}/preview.jpg`,
    `${base}/preview.jpeg`,
    `${base}/preview.webp`,
    `${base}/preview.svg`,
    `${base}/ilk-sehife.png`,
    `${base}/ilk-sehife.jpg`,
    `${base}/first-page.png`,
    `${base}/first-page.jpg`,
    `${base}/screen.png`,
    `${base}/screenshot.png`,
    `${base}/cover.png`,
    `${base}/card.png`,
    `${base}/basliqSon.png`,
    `${base}/basliq1.png`,
    `${base}/gulbasliq1.png`,
  ];

  if (template.preview) {
    return [...candidates.filter((src) => src !== template.preview), template.preview];
  }

  return candidates;
}

export default function TemplatesGrid() {
  const router = useRouter();
  const [active, setActive] = useState<TemplateCategory | 'Hamısı'>('Hamısı');
  const [isMounted, setIsMounted] = useState(false);


  const filtered =
    active === 'Hamısı'
      ? templates
      : templates.filter((t) => t.category === active);

  const [animatingCard, setAnimatingCard] = useState<null | string>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          padding: '80px 0 48px',
          textAlign: 'center',
          background: '#fff',
        }}
      >
        <div className="page-container">
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(40px, 7vw, 68px)',
              fontWeight: 400,
              color: '#111',
              lineHeight: 1.1,
              marginBottom: 20,
              letterSpacing: '-1px',
            }}
          >
            Dəvətnamənizi<br />hazırlayırıq.
          </h1>
          <p
            style={{
              fontSize: 16,
              color: '#6b7280',
              maxWidth: 440,
              margin: '0 auto 32px',
              fontFamily: 'var(--font-sans)',
              lineHeight: 1.7,
            }}
          >
            Toy, nişan, ad günü — istənilən mərasim üçün veb-sayt formatında fərdi dəvətnamə.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#111',
              color: '#fff',
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.06em',
              padding: '13px 32px',
              borderRadius: 100,
              textDecoration: 'none',
            }}
          >
            Bizimlə əlaqə saxlayın →
          </a>
        </div>
      </section>

      {/* ── Category filter ── */}
      <section
        id="sablonlar"
        style={{ padding: '28px 0 0', position: 'sticky', top: 68, zIndex: 50, background: '#fff', borderBottom: '1px solid #f0f0f0' }}
      >
        <div
          className="page-container"
          style={{ display: 'flex', gap: 8, flexWrap: 'wrap', paddingBottom: 16 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: '0.04em',
                padding: '7px 18px',
                borderRadius: 100,
                border: active === cat ? '1.5px solid #111' : '1.5px solid #e5e7eb',
                background: active === cat ? '#111' : '#fff',
                color: active === cat ? '#fff' : '#6b7280',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Grid ── */}
      <section style={{ padding: '40px 0 80px' }}>
        <div className="page-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 24,
            }}
          >
            {filtered.map((tpl) => (
              <TemplateCard
                key={tpl.id}
                template={tpl}
                isAnimating={animatingCard === tpl.id}
                isInteractive={isMounted}
                onAnimate={isMounted ? () => {
                  setAnimatingCard(tpl.id);
                  setTimeout(() => {
                    setAnimatingCard(null);
                    router.push(`/templates/${tpl.id}`);
                  }, 320);
                } : undefined}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p
              style={{
                textAlign: 'center',
                color: 'var(--color-text-light)',
                fontSize: 15,
                padding: '60px 0',
              }}
            >
              Bu kateqoriyada hələ şablon yoxdur.
            </p>
          )}
        </div>
      </section>

      {/* ── Custom design CTA ── */}
      <section
        id="ozel-dizayn"
        style={{
          padding: '84px 0',
          background: 'linear-gradient(180deg, #f8f9fb 0%, #ffffff 100%)',
          borderTop: '1px solid #f0f0f0',
          borderBottom: '1px solid #f0f0f0',
        }}
      >
        <div className="page-container" style={{ maxWidth: 900, textAlign: 'center' }}>
          <p
            style={{
              fontSize: 11,
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-gold)',
              marginBottom: 12,
            }}
          >
            Fərdi yanaşma
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(30px, 4.5vw, 52px)',
              fontWeight: 400,
              color: 'var(--color-text)',
              marginBottom: 18,
            }}
          >
            Biz hətta sizin öz dizaynınızla da dəvətnamə yarada bilərik
          </h2>
          <p
            style={{
              fontSize: 15,
              color: 'var(--color-text-light)',
              lineHeight: 1.8,
              fontFamily: 'var(--font-sans)',
              maxWidth: 680,
              margin: '0 auto 26px',
            }}
          >
            Sıfırdan, tam sizə uyğun üslubda dəvətnamə hazırlayaq: rəng palitrası, musiqi, animasiya, foto/video bloku və mərasim ssenarisi ilə.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#111',
              color: '#fff',
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '12px 24px',
              borderRadius: 100,
              textDecoration: 'none',
            }}
          >
            Özəl dizayn sifariş et →
          </a>
        </div>
      </section>

      {/* ── About ── */}
      <section
        id="haqqimizda"
        style={{ padding: '72px 0' }}
      >
        <div className="page-container" style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <p
            style={{
              fontSize: 11,
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-gold)',
              marginBottom: 12,
            }}
          >
            Biz kimik?
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 400,
              color: 'var(--color-text)',
              marginBottom: 20,
            }}
          >
            Haqqımızda
          </h2>
          <p
            style={{
              fontSize: 15,
              color: 'var(--color-text-light)',
              lineHeight: 1.8,
              fontFamily: 'var(--font-sans)',
            }}
          >
            Dəvətlim olaraq sizin xüsusi günlərini yadda saxlamaq üçün veb-sayt formatında fərdi dəvətnamələr hazırlayırıq. Toy, nişan, ad günü — hər mərasim üçün özəl dizayn.
          </p>
        </div>
      </section>
    </>
  );
}

/* ─── Single card ─── */
function TemplateCard({ template, isAnimating, isInteractive, onAnimate }: {
  template: Template;
  isAnimating?: boolean;
  isInteractive?: boolean;
  onAnimate?: () => void;
}) {
  const previewCandidates = getPreviewCandidates(template);
  const [previewIndex, setPreviewIndex] = useState(0);
  const currentPreview = previewCandidates[previewIndex];
  const isSvgPreview = Boolean(currentPreview?.toLowerCase().endsWith('.svg'));

  let cardClass = 'template-card';
  if (isAnimating) {
    cardClass += ' card-opening';
  }

  return (
    <div
      role={isInteractive ? 'link' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onClick={() => {
        if (isInteractive && onAnimate) onAnimate();
      }}
      onKeyDown={(e) => {
        if (isInteractive && (e.key === 'Enter' || e.key === ' ') && onAnimate) {
          e.preventDefault();
          onAnimate();
        }
      }}
      style={{ textDecoration: 'none' }}
    >
      <div className={cardClass}>
        {/* Preview image */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '4 / 5',
            borderRadius: '14px 14px 0 0',
            overflow: 'hidden',
            background: '#f3f4f6',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              zIndex: 2,
              background: 'rgba(17,17,17,0.82)',
              color: '#fff',
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.06em',
              padding: '6px 10px',
              borderRadius: 999,
            }}
          >
            {template.price}
          </div>
          {currentPreview ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={currentPreview}
              alt={template.name}
              onError={() => {
                setPreviewIndex((prev) => {
                  if (prev >= previewCandidates.length - 1) return prev;
                  return prev + 1;
                });
              }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: isSvgPreview ? 'contain' : 'cover',
                padding: isSvgPreview ? 10 : 0,
                background: isSvgPreview ? '#f8fafc' : 'transparent',
                display: 'block',
              }}
            />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                background: template.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontFamily: 'var(--font-serif)',
                  fontSize: 18,
                  textAlign: 'center',
                  padding: '0 16px',
                }}
              >
                {template.name}
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div style={{ padding: '14px 18px 18px' }}>
          <div style={{ marginBottom: 6 }}>
            <span className={categoryBadgeClass[template.category] ?? 'badge badge-toy'}>
              {template.category}
            </span>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 18,
              fontWeight: 500,
              color: '#111',
              marginBottom: 12,
            }}
          >
            {template.name}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontFamily: 'var(--font-sans)',
                color: '#6b7280',
              }}
            >
              ətraflı bax →
            </span>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
              }}
              style={{
                fontSize: 11,
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#111',
                padding: '6px 14px',
                border: '1.5px solid #111',
                borderRadius: 100,
                textDecoration: 'none',
              }}
            >
              Sifariş
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
