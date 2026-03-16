'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const WA = 'https://wa.me/message/PIDOVTOA4YRHI1';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

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
        background: 'rgba(255,255,255,0.96)',
        borderBottom: '1px solid #f0f0f0',
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
            style={{ objectFit: 'contain', mixBlendMode: 'multiply' }}
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
                color: '#444',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#111',
              color: '#fff',
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
            background: '#fff',
            borderTop: '1px solid #f0f0f0',
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
                color: '#111',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#111',
              color: '#fff',
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
