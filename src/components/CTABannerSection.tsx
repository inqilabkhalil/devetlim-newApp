'use client';

export default function CTABannerSection() {
  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(80px, 12vw, 120px) 32px',
        background: 'linear-gradient(135deg, #2C1A0E 0%, #3D2B1F 50%, #5C3D2E 100%)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Decorative overlay elements */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(ellipse at 15% 50%, rgba(201,169,110,0.12) 0%, transparent 60%),
            radial-gradient(ellipse at 85% 50%, rgba(201,169,110,0.10) 0%, transparent 55%)
          `,
          zIndex: 0,
        }}
      />

      {/* Corner frames */}
      {[
        { top: '40px', left: '40px', borderTop: true, borderLeft: true },
        { top: '40px', right: '40px', borderTop: true, borderRight: true },
        { bottom: '40px', left: '40px', borderBottom: true, borderLeft: true },
        { bottom: '40px', right: '40px', borderBottom: true, borderRight: true },
      ].map((pos, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '80px',
            height: '80px',
            ...Object.fromEntries(
              Object.entries(pos)
                .filter(([k]) => !['borderTop','borderLeft','borderRight','borderBottom'].includes(k))
            ),
            borderTop: pos.borderTop ? '1px solid rgba(201,169,110,0.35)' : 'none',
            borderBottom: pos.borderBottom ? '1px solid rgba(201,169,110,0.35)' : 'none',
            borderLeft: pos.borderLeft ? '1px solid rgba(201,169,110,0.35)' : 'none',
            borderRight: pos.borderRight ? '1px solid rgba(201,169,110,0.35)' : 'none',
            zIndex: 1,
          }}
        />
      ))}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px', margin: '0 auto' }}>
        {/* Small tag */}
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
          ✦ Xüsusi Təklif ✦
        </p>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(36px, 6vw, 68px)',
            fontWeight: 300,
            color: '#FAF7F2',
            lineHeight: 1.15,
            marginBottom: '12px',
            letterSpacing: '0.02em',
          }}
        >
          Özəl Gününüz üçün
        </h2>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(36px, 6vw, 68px)',
            fontWeight: 300,
            color: '#FAF7F2',
            lineHeight: 1.15,
            marginBottom: '32px',
            letterSpacing: '0.02em',
            fontStyle: 'italic',
          }}
        >
          <span style={{ color: 'var(--color-gold)' }}>Özəl</span> Dəvətnamə
        </h2>

        {/* Gold divider */}
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
            fontSize: 'clamp(14px, 2vw, 16px)',
            fontWeight: 300,
            color: 'rgba(250,247,242,0.7)',
            lineHeight: 1.8,
            marginBottom: '52px',
            letterSpacing: '0.03em',
          }}
        >
          Ən mühüm anınızı ən gözəl dəvətnamə ilə xatırlayın.
          <br />
          İndi bizimlə əlaqə saxlayın, pulsuz məsləhət alın.
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
          {/* WhatsApp button */}
          <a
            href="https://wa.me/994XXXXXXXXX?text=Salam!%20D%C9%99v%C9%99tnam%C9%99%20haqq%C4%B1nda%20m%C9%99lumat%20almaq%20ist%C9%99yir%C9%99m."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 36px',
              background: '#25D366',
              color: '#fff',
              fontFamily: "'Jost', sans-serif",
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: '2px',
              transition: 'all 0.35s ease',
              border: 'none',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#20BA5A';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 30px rgba(37,211,102,0.3)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#25D366';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
            </svg>
            WhatsApp Sifariş
          </a>

          <a
            href="#products"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '15px 35px',
              background: 'transparent',
              color: 'rgba(250,247,242,0.85)',
              fontFamily: "'Jost', sans-serif",
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              border: '1px solid rgba(201,169,110,0.5)',
              textDecoration: 'none',
              borderRadius: '2px',
              transition: 'all 0.35s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--color-gold)';
              el.style.background = 'rgba(201,169,110,0.12)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(201,169,110,0.5)';
              el.style.background = 'transparent';
            }}
          >
            Şablonlara Bax
          </a>
        </div>
      </div>
    </section>
  );
}
