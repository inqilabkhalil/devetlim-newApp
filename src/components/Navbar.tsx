'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Ana Səhifə', href: '#hero' },
  { label: 'Kateqoriyalar', href: '#categories' },
  { label: 'Dəvətnamələr', href: '#products' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Əlaqə', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.4s ease',
          background: scrolled
            ? 'rgba(250, 247, 242, 0.97)'
            : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(201,169,110,0.2)' : 'none',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(61,43,31,0.06)' : 'none',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: scrolled ? '70px' : '88px',
            transition: 'height 0.4s ease',
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          >
            <Image
              src="/logo.png"
              alt="Dəvətlim Logo"
              width={140}
              height={50}
              style={{ objectFit: 'contain', height: '44px', width: 'auto' }}
              priority
            />
          </a>

          {/* Desktop Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '40px',
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '12px',
                  fontWeight: 400,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: scrolled ? 'var(--color-text)' : '#fff',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = 'var(--color-gold)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = scrolled ? 'var(--color-text)' : '#fff';
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden-mobile">
            <a
              href="https://wa.me/994XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ textDecoration: 'none', fontSize: '11px' }}
            >
              Sifariş Et
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="show-mobile"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: scrolled ? 'var(--color-text)' : '#fff',
              display: 'none',
            }}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 99,
          background: 'rgba(250, 247, 242, 0.98)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.77, 0, 0.175, 1)',
        }}
        className="mobile-menu"
      >
        <button
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-text)',
          }}
        >
          <X size={28} />
        </button>

        <Image
          src="/logo.png"
          alt="Dəvətlim"
          width={120}
          height={44}
          style={{ objectFit: 'contain', marginBottom: '20px' }}
        />

        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '28px',
              fontWeight: 300,
              color: 'var(--color-text)',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.color = 'var(--color-gold)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color = 'var(--color-text)';
            }}
          >
            {link.label}
          </a>
        ))}

        <a
          href="https://wa.me/994XXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ textDecoration: 'none', marginTop: '20px' }}
        >
          WhatsApp Sifariş
        </a>
      </div>

      <style jsx>{`
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </>
  );
}
