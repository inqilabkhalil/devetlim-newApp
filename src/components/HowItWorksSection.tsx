'use client';

const steps = [
  {
    number: '01',
    title: 'Dizayn Seç',
    description: 'Kataloqdan bəyəndiyiniz şablonu seçin. Rəng, üslub və mövzu üzrə istəklərinizi bildirin.',
    icon: '🎨',
  },
  {
    number: '02',
    title: 'Məlumatları Göndər',
    description: 'Ad, tarix, yer, qonaqlara mesaj — bütün məlumatlarınızı WhatsApp üzərindən bizə göndərin.',
    icon: '📋',
  },
  {
    number: '03',
    title: 'Hazır Dəvətnaməni Al',
    description: '24 saat ərzində şəxsi dəvətnaməni əlinizdə tutun. Sonsuz paylaşım, sifir çap xərci.',
    icon: '💌',
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how"
      style={{
        padding: 'clamp(80px, 12vw, 140px) 32px',
        background: 'linear-gradient(180deg, var(--color-beige) 0%, var(--color-cream) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ornament */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          border: '1px solid rgba(201,169,110,0.1)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '700px',
          border: '1px solid rgba(201,169,110,0.06)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p className="section-tag" style={{ marginBottom: '16px' }}>
            ✦ Necə İşləyir ✦
          </p>
          <h2
            className="section-title"
            style={{
              fontSize: 'clamp(32px, 5vw, 54px)',
              marginBottom: '20px',
              lineHeight: 1.15,
            }}
          >
            3 Sadə Addımda
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>
              Hazır Dəvətnaməniz
            </span>
          </h2>
          <div className="gold-divider" style={{ marginBottom: '24px' }} />
        </div>

        {/* Steps */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '0',
            position: 'relative',
          }}
        >
          {/* Connecting line (desktop) */}
          <div
            style={{
              position: 'absolute',
              top: '52px',
              left: '16.66%',
              right: '16.66%',
              height: '1px',
              background: 'linear-gradient(90deg, var(--color-gold), rgba(201,169,110,0.3), var(--color-gold))',
              zIndex: 0,
            }}
            className="steps-line"
          />

          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 40px',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: '104px',
                  height: '104px',
                  background: i === 1
                    ? 'var(--color-gold)'
                    : '#fff',
                  border: i === 1
                    ? 'none'
                    : '1px solid rgba(201,169,110,0.35)',
                  borderRadius: '50%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '36px',
                  boxShadow: i === 1
                    ? '0 12px 40px rgba(201,169,110,0.35)'
                    : '0 8px 30px rgba(61,43,31,0.08)',
                  position: 'relative',
                }}
              >
                <span style={{ fontSize: '28px', lineHeight: 1, marginBottom: '4px' }}>{step.icon}</span>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '11px',
                    fontWeight: 400,
                    letterSpacing: '0.15em',
                    color: i === 1 ? 'rgba(255,255,255,0.7)' : 'var(--color-gold)',
                  }}
                >
                  {step.number}
                </span>
              </div>

              {/* Step number text */}
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                  marginBottom: '12px',
                }}
              >
                Addım {step.number}
              </p>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '26px',
                  fontWeight: 400,
                  color: 'var(--color-text)',
                  marginBottom: '16px',
                  letterSpacing: '0.02em',
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '14px',
                  fontWeight: 300,
                  color: 'var(--color-text-light)',
                  lineHeight: 1.8,
                  maxWidth: '260px',
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '72px' }}>
          <a
            href="https://wa.me/994XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ textDecoration: 'none' }}
          >
            İndi Başla
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .steps-line { display: none; }
        }
      `}</style>
    </section>
  );
}
