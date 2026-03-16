'use client';

import { templates } from '@/data/templates';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

const WA = 'https://wa.me/message/PIDOVTOA4YRHI1';

export default function TemplateDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = typeof params?.id === 'string' ? params.id : (params?.id?.[0] ?? '');
  const template = templates.find((t) => t.id === id);
  const templateIndex = templates.findIndex((t) => t.id === id);

  if (!template) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-serif)',
        }}
      >
        <p style={{ fontSize: 24, marginBottom: 20 }}>Şablon tapılmadı</p>
        <button
          onClick={() => router.push('/')}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '10px 24px',
            background: '#111',
            color: '#fff',
            border: 'none',
            borderRadius: 100,
            cursor: 'pointer',
          }}
        >
          Geri qayıt
        </button>
      </div>
    );
  }

  const templateSrc = `/sablonlar/${template.folderPath}/index.html`;
  const prevTemplate = templates[(templateIndex - 1 + templates.length) % templates.length];
  const nextTemplate = templates[(templateIndex + 1) % templates.length];

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      {/* Top bar */}
      <div
        style={{
          height: 58,
          background: '#fff',
          borderBottom: '1px solid #e8e8e8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 18px',
          zIndex: 10,
          position: 'sticky',
          top: 0,
        }}
      >
        <button
          onClick={() => router.push('/')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            color: '#6b7280',
            padding: 0,
          }}
        >
          <ArrowLeft size={16} />
          Geri
        </button>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <button
            onClick={() => router.push(`/templates/${prevTemplate.id}`)}
            aria-label="Əvvəlki şablon"
            style={{
              width: 30,
              height: 30,
              borderRadius: 999,
              border: '1px solid #e5e7eb',
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <ChevronLeft size={16} />
          </button>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 17,
              color: '#111',
              fontWeight: 500,
            }}
          >
            {template.name}
          </span>
          <button
            onClick={() => router.push(`/templates/${nextTemplate.id}`)}
            aria-label="Növbəti şablon"
            style={{
              width: 30,
              height: 30,
              borderRadius: 999,
              border: '1px solid #e5e7eb',
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#fff',
            background: '#111',
            padding: '8px 16px',
            borderRadius: 100,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          Sifariş et
        </a>
      </div>

      <main
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '28px 20px 56px',
          display: 'grid',
          gap: 26,
          gridTemplateColumns: 'minmax(0, 1fr)',
        }}
      >
        <div
          style={{
            background: '#fff',
            border: '1px solid #ececec',
            borderRadius: 16,
            padding: '24px 22px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--color-gold)',
              marginBottom: 8,
            }}
          >
            {template.category}
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(30px, 4vw, 44px)',
              fontWeight: 400,
              color: '#111',
              marginBottom: 12,
            }}
          >
            {template.name}
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 14,
              color: '#6b7280',
              lineHeight: 1.7,
              marginBottom: 20,
            }}
          >
            Bu şablon mobil uyğun veb dəvətnamə formatındadır. Daxilindəki sağ/sol keçid düymələri ilə bütün səhifələri tam baxa bilərsiniz.
          </p>

          <div
            style={{
              display: 'grid',
              gap: 12,
              marginBottom: 22,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 14 }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: '#6b7280' }}>Qiymət</span>
              <strong style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: '#111', fontWeight: 600 }}>{template.price}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 14 }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: '#6b7280' }}>Hazırlanma</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: '#111' }}>1-2 iş günü</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 14 }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: '#6b7280' }}>Dəstək</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: '#111' }}>WhatsApp 24/7</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a
              href={templateSrc}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#111',
                border: '1.5px solid #111',
                borderRadius: 100,
                padding: '10px 18px',
                textDecoration: 'none',
              }}
            >
              Ətraflı bax
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#fff',
                background: '#111',
                borderRadius: 100,
                padding: '11px 20px',
                textDecoration: 'none',
              }}
            >
              Sifariş et
            </a>
          </div>
        </div>

        <div
          id="template-preview"
          style={{
            border: '1px solid #ececec',
            borderRadius: 16,
            overflow: 'hidden',
            background: '#fff',
            minHeight: '65vh',
          }}
        >
          <iframe
            src={templateSrc}
            style={{
              width: '100%',
              height: '75vh',
              border: 'none',
              display: 'block',
            }}
            title={`${template.name} şablonu`}
          />
        </div>
      </main>
    </div>
  );
}
