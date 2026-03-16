'use client';

import Image from 'next/image';
import { Instagram, Facebook } from 'lucide-react';

const navColumns = [
  {
    title: 'Kateqoriyalar',
    links: [
      { label: 'Toy', href: '#categories' },
      { label: 'Nişan', href: '#categories' },
      { label: 'Ad Günü', href: '#categories' },
      { label: 'Baby Shower', href: '#categories' },
      { label: 'Xına Gecəsi', href: '#categories' },
      { label: 'Bridal Shower', href: '#categories' },
    ],
  },
  {
    title: 'Sayt',
    links: [
      { label: 'Ana Səhifə', href: '#hero' },
      { label: 'Dəvətnamələr', href: '#products' },
      { label: 'Haqqımızda', href: '#about' },
      { label: 'Necə İşləyir', href: '#how' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Əlaqə', href: '#contact' },
    ],
  },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#1C1008',
        color: 'rgba(250,247,242,0.75)',
        padding: '80px 32px 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Main footer grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr',
            gap: '60px',
            paddingBottom: '64px',
            borderBottom: '1px solid rgba(201,169,110,0.12)',
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
              style={{ display: 'inline-block', marginBottom: '28px' }}
            >
              <Image
                src="/logo.png"
                alt="Dəvətlim"
                width={140}
                height={50}
                style={{
                  objectFit: 'contain',
                  height: '44px',
                  width: 'auto',
                  filter: 'brightness(1.1)',
                }}
              />
            </a>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '14px',
                fontWeight: 300,
                color: 'rgba(250,247,242,0.55)',
                lineHeight: 1.8,
                maxWidth: '280px',
                marginBottom: '32px',
              }}
            >
              Toy, nişan, ad günü və həyatın bütün xüsusi anları üçün 
              premium onlayn dəvətnamə xidməti.
            </p>

            {/* Social */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
              {[
                {
                  href: 'https://instagram.com/',
                  icon: <Instagram size={16} />,
                  label: 'Instagram',
                },
                {
                  href: 'https://facebook.com/',
                  icon: <Facebook size={16} />,
                  label: 'Facebook',
                },
                {
                  href: 'https://wa.me/994XXXXXXXXX',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
                    </svg>
                  ),
                  label: 'WhatsApp',
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  style={{
                    width: '40px',
                    height: '40px',
                    border: '1px solid rgba(201,169,110,0.25)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(201,169,110,0.7)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = 'var(--color-gold)';
                    el.style.color = 'var(--color-gold)';
                    el.style.background = 'rgba(201,169,110,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = 'rgba(201,169,110,0.25)';
                    el.style.color = 'rgba(201,169,110,0.7)';
                    el.style.background = 'transparent';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* WhatsApp contact */}
            <a
              href="https://wa.me/994XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: "'Jost', sans-serif",
                fontSize: '13px',
                fontWeight: 400,
                color: '#25D366',
                textDecoration: 'none',
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.75'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
              </svg>
              +994 XX XXX XX XX
            </a>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.title}>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                  marginBottom: '28px',
                }}
              >
                {col.title}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: '14px',
                        fontWeight: 300,
                        color: 'rgba(250,247,242,0.55)',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = 'rgba(201,169,110,0.9)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = 'rgba(250,247,242,0.55)';
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            padding: '28px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '12px',
              fontWeight: 300,
              color: 'rgba(250,247,242,0.3)',
              letterSpacing: '0.05em',
            }}
          >
            © {new Date().getFullYear()} Dəvətlim. Bütün hüquqlar qorunur.
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '13px',
              fontStyle: 'italic',
              color: 'rgba(201,169,110,0.4)',
              letterSpacing: '0.05em',
            }}
          >
            Made with ♥ in Azerbaijan
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </footer>
  );
}
