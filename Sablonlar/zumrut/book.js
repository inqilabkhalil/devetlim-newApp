'use strict';

(function BookInvitation() {

  /* ---- constants ---- */
  var TOTAL = 5;
  var ANIM  = 900;   /* must match CSS animation duration */

  /* ---- state ---- */
  var current   = 0;
  var animating = false;

  /* ---- DOM refs ---- */
  var pages       = Array.from(document.querySelectorAll('.book-page'));
  var dots        = Array.from(document.querySelectorAll('.dot'));
  var progressEl  = document.querySelector('.progress-current');

  /* ---- init ---- */
  pages.forEach(function(p, i) {
    p.style.display = (i === 0) ? 'block' : 'none';
  });
  pages[0].classList.add('page--active');
  updateUI();

  /* ================================================================
     CORE NAVIGATION
     ================================================================ */
  function goTo(target) {
    if (animating)                          return;
    if (target === current)                 return;
    if (target < 0 || target >= TOTAL)      return;

    animating = true;

    var fromPage = pages[current];
    var toPage   = pages[target];
    var forward  = target > current;

    /* make destination visible BEHIND current page */
    toPage.style.display  = 'block';
    toPage.style.zIndex   = '9';
    fromPage.style.zIndex = '10';

    /* apply animation classes */
    fromPage.classList.add(forward ? 'is-leaving-fwd'  : 'is-leaving-back');
    toPage.classList.add(  forward ? 'is-entering-fwd' : 'is-entering-back');
    toPage.classList.add('page--active');

    setTimeout(function() {
      /* clean up outgoing page */
      fromPage.classList.remove('page--active', 'is-leaving-fwd', 'is-leaving-back');
      fromPage.style.display = 'none';
      fromPage.style.zIndex  = '';

      /* clean up incoming page */
      toPage.classList.remove('is-entering-fwd', 'is-entering-back');
      toPage.style.zIndex = '';

      current   = target;
      animating = false;
      updateUI();
    }, ANIM);
  }

  /* ================================================================
     UI STATE
     ================================================================ */
  function updateUI() {
    dots.forEach(function(d, i) {
      d.classList.toggle('dot--active', i === current);
    });
    if (progressEl) progressEl.textContent = current + 1;
  }

  /* ================================================================
     EVENT HANDLERS
     ================================================================ */

  /* --- [data-dir] turn buttons --- */
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('[data-dir]');
    if (!btn) return;
    if (btn.getAttribute('data-dir') === 'next') {
      goTo(current + 1);
    } else {
      goTo(current - 1);
    }
  });

  /* --- dot navigation --- */
  dots.forEach(function(dot) {
    dot.addEventListener('click', function() {
      var idx = parseInt(dot.getAttribute('data-page'), 10);
      goTo(idx);
    });
  });

  /* --- keyboard arrows --- */
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(current + 1);
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goTo(current - 1);
  });

  /* --- touch swipe (threshold 40 px) --- */
  var touchStartX = 0;
  var touchStartY = 0;

  document.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchend', function(e) {
    var dx = e.changedTouches[0].clientX - touchStartX;
    var dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) < 40 && Math.abs(dy) < 40) return;
    if (Math.abs(dx) >= Math.abs(dy)) {
      dx < 0 ? goTo(current + 1) : goTo(current - 1);
    } else {
      dy < 0 ? goTo(current + 1) : goTo(current - 1);
    }
  }, { passive: true });

  /* --- clicking cover directly goes to page 2 --- */
  pages[0].addEventListener('click', function(e) {
    if (e.target.closest('[data-dir]')) return;
    goTo(1);
  });

  /* ================================================================
     COUNTDOWN TIMER
     ================================================================ */
  (function initCountdown() {
    var weddingDate = new Date('2026-06-21T19:00:00');
    var daysEl  = document.getElementById('cd-days');
    var hoursEl = document.getElementById('cd-hours');
    var minsEl  = document.getElementById('cd-minutes');
    var secsEl  = document.getElementById('cd-seconds');

    if (!daysEl) return;

    function pad(n) { return String(n).padStart(2, '0'); }

    function tick() {
      var diff = weddingDate - new Date();
      if (diff <= 0) {
        [daysEl, hoursEl, minsEl, secsEl].forEach(function(el) {
          el.textContent = '00';
        });
        return;
      }
      daysEl.textContent  = pad(Math.floor(diff / 86400000));
      hoursEl.textContent = pad(Math.floor((diff / 3600000) % 24));
      minsEl.textContent  = pad(Math.floor((diff / 60000) % 60));
      secsEl.textContent  = pad(Math.floor((diff / 1000) % 60));
    }

    tick();
    setInterval(tick, 1000);
  })();

  /* ================================================================
     RIPPLE EFFECT
     ================================================================ */
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.page-turn-btn, .btn-primary, .btn-outline');
    if (!btn) return;

    var rect   = btn.getBoundingClientRect();
    var size   = Math.max(rect.width, rect.height) * 2;
    var ripple = document.createElement('span');

    ripple.style.cssText = [
      'position:absolute',
      'border-radius:50%',
      'background:rgba(255,255,255,0.28)',
      'width:'  + size + 'px',
      'height:' + size + 'px',
      'left:'   + (e.clientX - rect.left - size / 2) + 'px',
      'top:'    + (e.clientY - rect.top  - size / 2) + 'px',
      'pointer-events:none',
      'transform:scale(0)',
      'animation:rippleAnim 0.55s ease-out forwards'
    ].join(';');

    /* ensure btn has position for ripple placement */
    if (getComputedStyle(btn).position === 'static') {
      btn.style.position = 'relative';
    }
    btn.style.overflow = 'hidden';
    btn.appendChild(ripple);
    setTimeout(function() { ripple.remove(); }, 600);
  });

  /* ================================================================
     FLOATING HEARTS BACKGROUND
     ================================================================ */
  (function initHearts() {
    var container = document.getElementById('heartsBg');
    if (!container) return;

    var symbols = ['♥', '❤', '♡', '💕', '💗'];
    var colors  = [
      '#e05555', '#c0392b', '#e74c3c',
      '#ff6b8a', '#ff4757', '#ff6348',
      '#ff8a80', '#d63031'
    ];

    function spawnHeart() {
      var el = document.createElement('span');
      el.className = 'heart-particle';
      el.textContent = symbols[Math.floor(Math.random() * symbols.length)];

      var size     = 0.8 + Math.random() * 1.6;          /* 0.8 – 2.4 rem */
      var leftPct  = 2 + Math.random() * 96;              /* 2% – 98%      */
      var duration = 5 + Math.random() * 8;               /* 5s – 13s      */
      var delay    = Math.random() * 2;                   /* 0s – 2s       */
      var color    = colors[Math.floor(Math.random() * colors.length)];

      el.style.cssText =
        'left:'       + leftPct  + '%;' +
        'font-size:'  + size     + 'rem;' +
        'color:'      + color    + ';' +
        'animation-duration:'  + duration + 's;' +
        'animation-delay:'     + delay    + 's;';

      container.appendChild(el);

      /* remove after animation ends */
      setTimeout(function() {
        el.remove();
      }, (duration + delay + 0.5) * 1000);
    }

    /* spawn a burst on load */
    for (var i = 0; i < 12; i++) {
      setTimeout(spawnHeart, i * 220);
    }

    /* then keep spawning continuously */
    setInterval(spawnHeart, 900);
  })();

})();
