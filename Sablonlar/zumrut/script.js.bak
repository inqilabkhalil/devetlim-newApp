/* ============================================================
   WEDDING INVITATION — SCRIPT.JS
   ============================================================ */

'use strict';

/* ---- Intersection Observer — fade-up animations ---- */
(function initFadeUp() {
  const elements = document.querySelectorAll('.fade-up');

  if (!('IntersectionObserver' in window)) {
    // Fallback: show everything immediately
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger siblings within the same parent
          const siblings = Array.from(
            entry.target.parentElement.querySelectorAll('.fade-up:not(.visible)')
          );
          const idx = siblings.indexOf(entry.target);
          const delay = Math.min(idx * 100, 400);

          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => observer.observe(el));
})();

/* ---- Countdown timer ---- */
(function initCountdown() {
  const weddingDate = new Date('2026-06-21T16:00:00');

  const daysEl    = document.getElementById('cd-days');
  const hoursEl   = document.getElementById('cd-hours');
  const minutesEl = document.getElementById('cd-minutes');
  const secondsEl = document.getElementById('cd-seconds');

  if (!daysEl) return;

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function tick() {
    const now  = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      daysEl.textContent    = '00';
      hoursEl.textContent   = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent    = pad(days);
    hoursEl.textContent   = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);
  }

  tick();
  setInterval(tick, 1000);
})();

/* ---- Parallax / subtle hero ornament movement ---- */
(function initHeroParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Only on non-touch, non-reduced-motion devices
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  document.addEventListener('mousemove', (e) => {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;

    hero.style.backgroundPosition = `calc(50% + ${dx * 12}px) calc(50% + ${dy * 8}px), center`;
  }, { passive: true });
})();

/* ---- Gallery lightbox (minimal) ---- */
(function initLightbox() {
  const items = document.querySelectorAll('.gallery-img-wrap');
  if (!items.length) return;

  // Create overlay
  const overlay = document.createElement('div');
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Photo lightbox');
  overlay.style.cssText = `
    position: fixed; inset: 0; z-index: 9999;
    background: rgba(30, 18, 10, 0.92);
    display: none; align-items: center;
    justify-content: center; cursor: zoom-out;
    backdrop-filter: blur(6px);
    opacity: 0; transition: opacity 0.35s ease;
  `;

  const img = document.createElement('img');
  img.style.cssText = `
    max-width: 90vw; max-height: 88vh;
    border-radius: 2px;
    box-shadow: 0 20px 80px rgba(0,0,0,0.5);
    transform: scale(0.92);
    transition: transform 0.35s ease;
    object-fit: contain;
  `;

  const caption = document.createElement('p');
  caption.style.cssText = `
    position: absolute; bottom: 2rem; left: 0; right: 0;
    text-align: center;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem; font-style: italic;
    color: rgba(253,246,236,0.7);
    letter-spacing: 0.06em;
  `;

  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✕';
  closeBtn.setAttribute('aria-label', 'Close lightbox');
  closeBtn.style.cssText = `
    position: absolute; top: 1.2rem; right: 1.6rem;
    background: none; border: none; cursor: pointer;
    color: rgba(201,168,76,0.8); font-size: 1.4rem;
    transition: color 0.2s ease, transform 0.2s ease;
  `;
  closeBtn.addEventListener('mouseenter', () => {
    closeBtn.style.color = '#e2c97e';
    closeBtn.style.transform = 'rotate(90deg)';
  });
  closeBtn.addEventListener('mouseleave', () => {
    closeBtn.style.color = 'rgba(201,168,76,0.8)';
    closeBtn.style.transform = 'rotate(0deg)';
  });

  overlay.appendChild(img);
  overlay.appendChild(caption);
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);

  function open(src, alt) {
    img.src = src;
    img.alt = alt;
    caption.textContent = alt;
    overlay.style.display = 'flex';
    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
      img.style.transform = 'scale(1)';
    });
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.style.opacity = '0';
    img.style.transform   = 'scale(0.92)';
    setTimeout(() => {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
      img.src = '';
    }, 350);
  }

  items.forEach(wrap => {
    wrap.style.cursor = 'zoom-in';
    wrap.addEventListener('click', () => {
      const image   = wrap.querySelector('img');
      const captionEl = wrap.closest('.gallery-item')?.querySelector('.gallery-caption');
      if (image) open(image.src, captionEl?.textContent ?? image.alt);
    });
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  closeBtn.addEventListener('click', close);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.style.display !== 'none') close();
  });
})();

/* ---- Ripple effect on primary buttons ---- */
(function initRipple() {
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect   = btn.getBoundingClientRect();
      const x      = e.clientX - rect.left;
      const y      = e.clientY - rect.top;
      const ripple = document.createElement('span');

      ripple.style.cssText = `
        position: absolute;
        width: 6px; height: 6px;
        background: rgba(255,255,255,0.45);
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        animation: ripple 0.65s ease-out forwards;
        pointer-events: none;
        left: ${x}px; top: ${y}px;
      `;

      if (!getComputedStyle(btn).position || getComputedStyle(btn).position === 'static') {
        btn.style.position = 'relative';
      }
      btn.style.overflow = 'hidden';
      btn.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });

  // Inject keyframe if not already present
  if (!document.getElementById('ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = `
      @keyframes ripple {
        to { transform: translate(-50%, -50%) scale(40); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
})();
