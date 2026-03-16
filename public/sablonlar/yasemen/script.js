/* ============================================================
   WEDDING INVITATION — script.js
   Intro sequence, petals, page navigation
   ============================================================ */

(function () {
  'use strict';

  /* ── DOM refs ──────────────────────────────────────────── */
  const introOverlay   = document.getElementById('introOverlay');
  const envSeal        = document.getElementById('envSeal');
  const envFlap        = document.getElementById('envFlap');
  const risingCard     = document.getElementById('risingCard');
  const invitationWrap = document.getElementById('invitationWrap');
  const petalCanvas    = document.getElementById('petalCanvas');
  const envelope       = document.getElementById('envelope');

  let opened = false;

  /* ══════════════════════════════════════════════════════════
     ENVELOPE OPEN SEQUENCE
     ══════════════════════════════════════════════════════════ */
  function openEnvelope() {
    if (opened) return;
    opened = true;

    /* Step 1: break the wax seal */
    envSeal.classList.add('broken');

    /* Step 2: flap opens after seal breaks */
    setTimeout(function () {
      envFlap.classList.add('opened');
    }, 430);

    /* Step 3: letter rises from envelope */
    setTimeout(function () {
      risingCard.classList.add('rise');
    }, 920);

    /* Step 4: start petals */
    setTimeout(function () {
      startPetals();
    }, 1200);

    /* Step 5: fade overlay and reveal invitation */
    setTimeout(function () {
      introOverlay.classList.add('fade-out');
      invitationWrap.classList.remove('hidden');
    }, 1950);

    /* Remove overlay from DOM flow after transition */
    setTimeout(function () {
      introOverlay.style.display = 'none';
    }, 3200);
  }

  /* click / tap the seal or anywhere on the envelope to open */
  envSeal.addEventListener('click', openEnvelope);
  envelope.addEventListener('click', openEnvelope);

  /* ══════════════════════════════════════════════════════════
     PETAL ANIMATION
     ══════════════════════════════════════════════════════════ */
  const ctx = petalCanvas.getContext('2d');
  let petals = [];
  let petalRAF = null;
  let petalRunning = false;
  let W, H;

  const PETAL_COLORS = [
    'rgba(248,240,230,0.88)',
    'rgba(255,248,240,0.82)',
    'rgba(252,230,210,0.78)',
    'rgba(245,225,200,0.80)',
    'rgba(255,240,230,0.85)',
    'rgba(240,220,195,0.75)',
    'rgba(253,240,220,0.82)',
  ];

  function resizeCanvas() {
    W = petalCanvas.width  = window.innerWidth;
    H = petalCanvas.height = window.innerHeight;
  }

  function createPetal() {
    const size = 8 + Math.random() * 14;
    return {
      x:       Math.random() * W,
      y:       -size * 2,
      size:    size,
      speedY:  0.55 + Math.random() * 0.9,
      speedX:  (Math.random() - 0.5) * 0.7,
      angle:   Math.random() * Math.PI * 2,
      spin:    (Math.random() - 0.5) * 0.025,
      sway:    Math.random() * Math.PI * 2,
      swaySpeed: 0.007 + Math.random() * 0.008,
      swayAmp:   18 + Math.random() * 24,
      color:   PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
      opacity: 0.6 + Math.random() * 0.4,
    };
  }

  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);
    ctx.globalAlpha = p.opacity;

    /* Soft ellipse petal */
    ctx.beginPath();
    ctx.ellipse(0, 0, p.size * 0.38, p.size * 0.68, 0, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();

    /* Subtle centre vein */
    ctx.beginPath();
    ctx.moveTo(0, -p.size * 0.55);
    ctx.lineTo(0,  p.size * 0.55);
    ctx.strokeStyle = 'rgba(200,160,110,0.18)';
    ctx.lineWidth = 0.6;
    ctx.stroke();

    ctx.restore();
  }

  let spawnCounter = 0;

  function petalLoop() {
    ctx.clearRect(0, 0, W, H);

    spawnCounter++;
    if (spawnCounter % 7 === 0 && petals.length < 120) {
      petals.push(createPetal());
    }

    petals = petals.filter(function (p) {
      p.sway += p.swaySpeed;
      p.x += p.speedX + Math.sin(p.sway) * p.swayAmp * 0.012;
      p.y += p.speedY;
      p.angle += p.spin;

      if (p.y > H + 20) return false;
      drawPetal(p);
      return true;
    });

    petalRAF = requestAnimationFrame(petalLoop);
  }

  function startPetals() {
    resizeCanvas();
    petalCanvas.classList.add('visible');
    if (!petalRunning) {
      petalRunning = true;
      petalLoop();
    }
  }

  window.addEventListener('resize', function () {
    if (petalRunning) resizeCanvas();
  });

  /* ══════════════════════════════════════════════════════════
     PAGE NAVIGATION
     ══════════════════════════════════════════════════════════ */
  const pages = document.querySelectorAll('.page');
  const dots  = document.querySelectorAll('.dot');
  let currentPage = 0;

  window.goToPage = function (n) {
    if (n < 0 || n >= pages.length || n === currentPage) return;

    pages[currentPage].classList.remove('active');
    dots[currentPage].classList.remove('active');

    currentPage = n;

    pages[currentPage].classList.add('active');
    dots[currentPage].classList.add('active');

    /* Smooth scroll card to top */
    const card = document.getElementById('invitationCard');
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  /* Dot clicks */
  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      goToPage(Number(dot.dataset.page));
    });
  });

  /* Swipe support (mobile) */
  let touchStartX = 0;
  let touchStartY = 0;

  document.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchend', function (e) {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (dx < 0) goToPage(currentPage + 1);
      else        goToPage(currentPage - 1);
    }
  }, { passive: true });

  /* Keyboard arrow navigation */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown')  goToPage(currentPage + 1);
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')    goToPage(currentPage - 1);
  });

})();
