'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';

const WA = 'https://wa.me/message/PIDOVTOA4YRHI1';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme-mode') : null;
    const prefersDark = typeof window !== 'undefined'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false;
    const initialTheme = saved === 'dark' || saved === 'light'
      ? saved
      : (prefersDark ? 'dark' : 'light');

    document.documentElement.setAttribute('data-theme', initialTheme);
    setTheme(initialTheme);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme-mode', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  }

  function navClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'var(--header-bg)',
        borderBottom: '1px solid var(--border-soft)',
        backdropFilter: 'blur(16px)',
      }}
    >
      <div
        className="page-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 68,
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <Image
            src="/logo-raw.png"
            alt="Dəvətlim"
            width={140}
            height={52}
            priority
            style={{
              objectFit: 'contain',
              mixBlendMode: theme === 'dark' ? 'normal' : 'multiply',
              filter: theme === 'dark' ? 'brightness(1.12) contrast(1.02)' : 'none',
            }}
          />
        </Link>

        {/* Desktop nav */}
        <nav
          style={{ display: 'flex', gap: 32, alignItems: 'center' }}
          className="hidden-mobile"
        >
          {[
            { label: 'Şablonlar', id: 'sablonlar' },
            { label: 'Haqqımızda', id: 'haqqimizda' },
          ].map((l) => (
            <a
              key={l.id}
              href={`/#${l.id}`}
              onClick={(e) => navClick(e, l.id)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.04em',
                color: 'var(--header-link)',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              {l.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Gündüz rejiminə keç' : 'Gecə rejiminə keç'}
            title={theme === 'dark' ? 'Gündüz rejimi' : 'Gecə rejimi'}
            style={{
              width: 38,
              height: 38,
              borderRadius: 999,
              border: '1px solid var(--theme-toggle-border)',
              background: 'var(--theme-toggle-bg)',
              color: 'var(--theme-toggle-icon)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'var(--cta-bg)',
              color: 'var(--cta-text)',
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '10px 22px',
              borderRadius: 100,
              textDecoration: 'none',
            }}
          >
            Sifariş
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="show-mobile"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-text)',
          }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: 'var(--surface-1)',
            borderTop: '1px solid var(--border-soft)',
            padding: '16px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {[
            { label: 'Şablonlar', id: 'sablonlar' },
            { label: 'Haqqımızda', id: 'haqqimizda' },
          ].map((l) => (
            <a
              key={l.id}
              href={`/#${l.id}`}
              onClick={(e) => navClick(e, l.id)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                color: 'var(--color-text)',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              {l.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Gündüz rejiminə keç' : 'Gecə rejiminə keç'}
            style={{
              width: '100%',
              height: 40,
              borderRadius: 100,
              border: '1px solid var(--theme-toggle-border)',
              background: 'var(--theme-toggle-bg)',
              color: 'var(--theme-toggle-icon)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            {theme === 'dark' ? 'Gündüz' : 'Gecə'}
          </button>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'var(--cta-bg)',
              color: 'var(--cta-text)',
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '11px 20px',
              borderRadius: 100,
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Sifariş
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
        }
        @media (min-width: 641px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
