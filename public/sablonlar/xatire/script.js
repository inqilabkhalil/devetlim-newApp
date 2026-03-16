/* ============================================================
   WEDDING INVITATION  –  script.js
   Envelope open · Card navigation · Countdown · Particles
   ============================================================ */

(function () {
  'use strict';

  /* ──────────────────────────────────────
     1. FLOATING BACKGROUND PARTICLES
  ────────────────────────────────────── */
  function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const colors = ['#C9A84C', '#E2C97E', '#9A7230', '#D4B87A', '#F0E0A0'];
    const count  = window.innerWidth < 480 ? 14 : 22;

    for (let i = 0; i < count; i++) {
      const el   = document.createElement('div');
      el.className = 'particle';
      const size = Math.random() * 5 + 2;
      el.style.cssText = `
        width:  ${size}px;
        height: ${size}px;
        left:   ${Math.random() * 100}%;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        animation-duration:  ${Math.random() * 18 + 12}s;
        animation-delay:    -${Math.random() * 20}s;
        opacity: 0;
      `;
      container.appendChild(el);
    }
  }

  /* ──────────────────────────────────────
     2. FALLING PETALS (inside invitation)
  ────────────────────────────────────── */
  function createPetals() {
    const container = document.getElementById('petals');
    if (!container) return;

    const count = window.innerWidth < 480 ? 8 : 14;

    for (let i = 0; i < count; i++) {
      const petal = document.createElement('div');
      petal.className = 'petal';

      const size = Math.random() * 12 + 8;
      const opacity = Math.random() * 0.25 + 0.1;
      const color = Math.random() > 0.5 ? '#C9A84C' : '#D4A0A0';

      petal.innerHTML = `
        <svg width="${size}" height="${size}" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="10" cy="10" rx="6" ry="10" fill="${color}" opacity="${opacity}" transform="rotate(${Math.random()*360} 10 10)"/>
        </svg>`;

      petal.style.cssText = `
        left: ${Math.random() * 100}%;
        animation-duration:  ${Math.random() * 14 + 10}s;
        animation-delay:    -${Math.random() * 16}s;
      `;
      container.appendChild(petal);
    }
  }

  /* ──────────────────────────────────────
     3. FLOATING HEARTS (card 5)
  ────────────────────────────────────── */
  function createHearts() {
    const container = document.getElementById('heartsAnim');
    if (!container) return;

    const heartSymbols = ['♥', '❤', '♡'];
    const count = 10;

    for (let i = 0; i < count; i++) {
      const h = document.createElement('div');
      h.className = 'floating-heart';
      h.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

      const left  = Math.random() * 90 + 2;
      const color = Math.random() > 0.5 ? '#C9A84C' : '#D4908A';

      h.style.cssText = `
        left:  ${left}%;
        color: ${color};
        animation-duration: ${Math.random() * 5 + 4}s;
        animation-delay:   -${Math.random() * 6}s;
      `;
      container.appendChild(h);
    }
  }

  /* ──────────────────────────────────────
     4. COUNTDOWN TIMER
  ────────────────────────────────────── */
  const WEDDING_DATE = new Date('2026-06-14T18:00:00');

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick(el, val) {
    el.classList.remove('tick');
    void el.offsetWidth; // reflow
    el.classList.add('tick');
    el.textContent = val;
    setTimeout(() => el.classList.remove('tick'), 320);
  }

  function updateCountdown() {
    const elDays  = document.getElementById('cd-days');
    const elHours = document.getElementById('cd-hours');
    const elMins  = document.getElementById('cd-mins');
    const elSecs  = document.getElementById('cd-secs');

    if (!elDays) return;

    const now  = new Date();
    const diff = WEDDING_DATE - now;

    if (diff <= 0) {
      elDays.textContent  = '00';
      elHours.textContent = '00';
      elMins.textContent  = '00';
      elSecs.textContent  = '00';
      return;
    }

    const days  = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins  = Math.floor((diff % 3600000)  / 60000);
    const secs  = Math.floor((diff % 60000)    / 1000);

    if (elDays.textContent  !== pad(days))  tick(elDays,  pad(days));
    if (elHours.textContent !== pad(hours)) tick(elHours, pad(hours));
    if (elMins.textContent  !== pad(mins))  tick(elMins,  pad(mins));
    tick(elSecs, pad(secs));
  }

  /* ──────────────────────────────────────
     5. ENVELOPE INTERACTION
  ────────────────────────────────────── */
  function initEnvelope() {
    const envelope      = document.getElementById('envelope');
    const clickHint     = document.getElementById('clickHint');
    const sceneEnvelope = document.getElementById('scene-envelope');
    const stage         = document.getElementById('invitationStage');

    if (!envelope) return;

    let opened = false;

    function openEnvelope() {
      if (opened) return;
      opened = true;

      // Hide hint
      if (clickHint) {
        clickHint.style.transition = 'opacity 0.4s ease';
        clickHint.style.opacity    = '0';
      }

      // Open flap & slide card
      envelope.classList.add('open');

      // After card slides up, transition to invitation
      setTimeout(() => {
        sceneEnvelope.classList.add('hide');

        setTimeout(() => {
          sceneEnvelope.style.display = 'none';
          stage.style.display         = 'flex';
          createPetals();
          createHearts();
          startCountdown();

          // Animate first card entrance
          const firstCard = document.querySelector('.card[data-index="0"]');
          if (firstCard) {
            firstCard.style.opacity    = '0';
            firstCard.style.transform  = 'translateY(30px) scale(0.97)';
            firstCard.classList.add('active');
            setTimeout(() => {
              firstCard.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
              firstCard.style.opacity    = '1';
              firstCard.style.transform  = 'translateY(0) scale(1)';
            }, 80);
          }
        }, 600);
      }, 1600);
    }

    envelope.addEventListener('click',   openEnvelope);
    envelope.addEventListener('touchend', (e) => { e.preventDefault(); openEnvelope(); });
  }

  /* ──────────────────────────────────────
     6. CARD NAVIGATION
  ────────────────────────────────────── */
  let currentIndex = 0;
  const TOTAL_CARDS = 5;

  function goToCard(nextIndex, direction) {
    if (nextIndex < 0 || nextIndex >= TOTAL_CARDS) return;
    if (nextIndex === currentIndex) return;

    const cards   = document.querySelectorAll('.card');
    const dots    = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const current = cards[currentIndex];
    const next    = cards[nextIndex];

    // Exit current card
    current.classList.remove('active');
    current.classList.add(direction === 'next' ? 'exit-left' : 'exit-right');

    // Prepare next card off-screen
    next.style.transition = 'none';
    next.style.opacity    = '0';
    next.style.transform  = direction === 'next'
      ? 'translateX(60px) scale(0.96)'
      : 'translateX(-60px) scale(0.96)';
    next.classList.add('active');

    // Force reflow then animate in
    void next.offsetWidth;
    next.style.transition = '';
    next.style.opacity    = '1';
    next.style.transform  = 'translateX(0) scale(1)';

    // Clean up exit class
    setTimeout(() => {
      current.classList.remove('exit-left', 'exit-right');
      current.style.transform = '';
      current.style.opacity   = '';
    }, 560);

    // Update dot indicators
    dots.forEach((d, i) => d.classList.toggle('active', i === nextIndex));

    // Update button states
    if (prevBtn) prevBtn.disabled = nextIndex === 0;
    if (nextBtn) nextBtn.disabled = nextIndex === TOTAL_CARDS - 1;

    currentIndex = nextIndex;
  }

  function initNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots    = document.querySelectorAll('.dot');

    if (!prevBtn || !nextBtn) return;

    prevBtn.disabled = true; // start on first card

    prevBtn.addEventListener('click', () => goToCard(currentIndex - 1, 'prev'));
    nextBtn.addEventListener('click', () => goToCard(currentIndex + 1, 'next'));

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const idx = parseInt(dot.dataset.index, 10);
        goToCard(idx, idx > currentIndex ? 'next' : 'prev');
      });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (document.getElementById('scene-envelope').classList.contains('hide')) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          goToCard(currentIndex + 1, 'next');
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          goToCard(currentIndex - 1, 'prev');
        }
      }
    });

    // Touch / swipe support
    initSwipe();
  }

  /* ──────────────────────────────────────
     7. SWIPE SUPPORT (mobile)
  ────────────────────────────────────── */
  function initSwipe() {
    const stage = document.getElementById('invitationStage');
    if (!stage) return;

    let startX = 0;
    let startY = 0;
    const THRESHOLD = 50;

    stage.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    stage.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;

      // Only horizontal swipes (wider than tall)
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > THRESHOLD) {
        if (dx < 0) {
          goToCard(currentIndex + 1, 'next');
        } else {
          goToCard(currentIndex - 1, 'prev');
        }
      }
    }, { passive: true });
  }

  /* ──────────────────────────────────────
     8. COUNTDOWN LIFECYCLE
  ────────────────────────────────────── */
  let countdownInterval = null;

  function startCountdown() {
    updateCountdown();
    if (countdownInterval) clearInterval(countdownInterval);
    countdownInterval = setInterval(updateCountdown, 1000);
  }

  /* ──────────────────────────────────────
     9. INIT
  ────────────────────────────────────── */
  function init() {
    createParticles();
    initEnvelope();
    initNavigation();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
