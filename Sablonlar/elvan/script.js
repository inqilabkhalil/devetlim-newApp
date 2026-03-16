/* ============================================================
   WEDDING INVITATION — script.js
   Toğrul & Xumar  |  23 İyul 2026, 18:00
   ============================================================ */

'use strict';

/* ============================================================
   EDITABLE CONFIGURATION
   Change these values to update the wedding details easily.
   ============================================================ */
const CONFIG = {
  // EDIT: Wedding date/time (ISO format: YYYY-MM-DDTHH:MM:SS, local Baku time UTC+4)
  weddingDate: new Date('2026-07-23T18:00:00+04:00'),

  // EDIT: Number of floating petal/flower symbols
  petalCount: 18,

  // EDIT: Curtain hold duration before opening (ms)
  curtainHoldMs: 1600,

  // EDIT: Card exit transition duration in ms (must stay in sync with CSS 0.62s ease)
  cardTransitionMs: 620,

  // EDIT: Overlap — entry starts this many ms after exit begins (creates crossfade feel)
  cardOverlapMs: 170,
};

/* ============================================================
   DOM REFERENCES
   ============================================================ */
const curtainContainer  = document.getElementById('curtain-container');
const invitationWrapper = document.getElementById('invitation-wrapper');
const allCards          = document.querySelectorAll('.card');
const dots              = document.querySelectorAll('.dot');
const countdownEls = {
  days:  document.getElementById('cnt-days'),
  hours: document.getElementById('cnt-hours'),
  mins:  document.getElementById('cnt-mins'),
  secs:  document.getElementById('cnt-secs'),
};

/* ============================================================
   STATE
   ============================================================ */
let currentCard = 1;
let isTransitioning = false;
let countdownInterval = null;

/* ============================================================
   CURTAIN OPENING SEQUENCE
   ============================================================ */
function startCurtainSequence() {
  // 1. Wait briefly so the emblem is visible
  setTimeout(() => {
    // 2. Open the curtains
    curtainContainer.classList.add('open');

    // 3. After curtains finish sliding, reveal the invitation
    setTimeout(() => {
      // Hide curtain overlay completely
      curtainContainer.classList.add('done');

      // Show the wrapper
      invitationWrapper.classList.remove('hidden');
      document.body.style.overflow = '';

      // Reveal card 1 with cinematic scale + fade
      const card1 = document.getElementById('card-1');
      card1.classList.add('active-card');
      card1.classList.add('curtain-reveal');

      // Start ambient petals
      spawnPetals();

      // Start countdown
      updateCountdown();
      countdownInterval = setInterval(updateCountdown, 1000);

    }, 1200); // curtain slide takes ~1.1s in CSS

  }, CONFIG.curtainHoldMs);
}

/* ============================================================
   CARD NAVIGATION
   Pure CSS transition approach:
   1. Exit current card  — add exit class, CSS transition fires
   2. After overlap delay — snap new card to entry start pos (transition:none)
      then force reflow, swap to active-card — smooth entrance transition fires
   3. After full cycle — hide old card, unlock navigation
   ============================================================ */
function goToCard(targetIndex) {
  if (isTransitioning) return;
  if (targetIndex === currentCard) return;
  if (targetIndex < 1 || targetIndex > allCards.length) return;

  isTransitioning = true;

  const fromCard     = document.getElementById(`card-${currentCard}`);
  const toCard       = document.getElementById(`card-${targetIndex}`);
  const goingForward = targetIndex > currentCard;
  const exitClass    = goingForward ? 'exit-to-left'    : 'exit-to-right';
  const enterClass   = goingForward ? 'enter-from-right' : 'enter-from-left';

  // --- Step 1: trigger exit transition on current card ---
  fromCard.classList.remove('active-card', 'curtain-reveal');
  fromCard.classList.add(exitClass);

  // --- Step 2: after overlap delay, start the entrance ---
  setTimeout(() => {
    // a) Snap new card to its entry start position (transition:none is on enterClass)
    toCard.classList.remove('hidden-card', 'active-card');
    toCard.classList.add(enterClass);

    // b) Force reflow so browser registers the offset before transition starts
    void toCard.offsetWidth;

    // c) Swap classes — browser interpolates transition from entry offset → active state
    toCard.classList.remove(enterClass);
    toCard.classList.add('active-card');

    currentCard = targetIndex;
    updateDots();

    if (targetIndex === 5) triggerHeartBloom();

  }, CONFIG.cardOverlapMs);

  // --- Step 3: after full exit, quietly hide the old card and unlock nav ---
  setTimeout(() => {
    fromCard.classList.remove(exitClass);
    fromCard.classList.add('hidden-card');
    isTransitioning = false;
  }, CONFIG.cardTransitionMs + 80);
}

/* updateDots — no dots in DOM, kept as no-op for safety */
function updateDots() {}

/* ============================================================
   COUNTDOWN TIMER
   ============================================================ */
function updateCountdown() {
  const now  = new Date();
  const diff = CONFIG.weddingDate - now;

  if (diff <= 0) {
    // Wedding day!
    setCountEl(countdownEls.days,  '00');
    setCountEl(countdownEls.hours, '00');
    setCountEl(countdownEls.mins,  '00');
    setCountEl(countdownEls.secs,  '00');
    clearInterval(countdownInterval);
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  setCountEl(countdownEls.days,  pad(d));
  setCountEl(countdownEls.hours, pad(h));
  setCountEl(countdownEls.mins,  pad(m));
  setCountEl(countdownEls.secs,  pad(s));
}

// Pad a number to 2 digits
function pad(n) {
  return n < 10 ? '0' + n : String(n);
}

// Update countdown element with a brief flip animation
function setCountEl(el, val) {
  if (el.textContent !== val) {
    el.textContent = val;
    el.classList.remove('flip-anim');
    // Force reflow to restart animation
    void el.offsetWidth;
    el.classList.add('flip-anim');
  }
}

/* ============================================================
   CARD 5 — HEART BLOOM ANIMATION
   ============================================================ */
function triggerHeartBloom() {
  const heart = document.getElementById('heart-bloom');
  if (!heart) return;
  // Reset and re-trigger
  heart.style.animation = 'none';
  void heart.offsetWidth;
  heart.style.animation = '';
}

/* ============================================================
   AMBIENT PETALS
   Spawns floating petal/flower characters for atmosphere.
   ============================================================ */
const PETAL_SYMBOLS = ['✿', '❀', '✾', '❁', '❧', '✦', '✤', '❋', '⚘', '♥'];

function spawnPetals() {
  const container = document.getElementById('petals-container');
  if (!container) return;

  const count = CONFIG.petalCount;

  for (let i = 0; i < count; i++) {
    createPetal(container, i, count);
  }
}

function createPetal(container, index, total) {
  const petal = document.createElement('span');
  petal.className = 'petal';
  petal.textContent = PETAL_SYMBOLS[index % PETAL_SYMBOLS.length];
  petal.setAttribute('aria-hidden', 'true');

  // Randomised properties for a natural look
  const leftPct   = (index / total) * 100 + (Math.random() * 8 - 4);
  const duration  = 10 + Math.random() * 14;   // 10-24s
  const delay     = Math.random() * -20;        // stagger start times
  const size      = 0.6 + Math.random() * 0.9; // 0.6–1.5rem
  const opacity   = 0.25 + Math.random() * 0.35;

  // Randomise colour between gold tones and rose
  const colors = ['#b8962e', '#d4af5a', '#c0a035', '#c4855a', '#b07050', '#d4937a'];
  const color  = colors[Math.floor(Math.random() * colors.length)];

  petal.style.cssText = `
    left: ${leftPct}%;
    font-size: ${size}rem;
    color: ${color};
    animation-duration: ${duration}s;
    animation-delay: ${delay}s;
    opacity: ${opacity};
  `;

  container.appendChild(petal);
}

/* ============================================================
   RESTART — replay the curtain intro
   ============================================================ */
function restartExperience() {
  // Hide invitation
  invitationWrapper.classList.add('hidden');

  // Reset all cards to initial state
  allCards.forEach((card, i) => {
    card.classList.remove('active-card', 'curtain-reveal',
      'enter-from-right', 'enter-from-left',
      'exit-to-left', 'exit-to-right');
    if (i === 0) {
      // card-1 starts un-hidden so curtainReveal can target it
      card.classList.remove('hidden-card');
    } else {
      card.classList.add('hidden-card');
    }
  });

  // Reset navigation state
  currentCard = 1;
  isTransitioning = false;
  updateDots();

  // Remove petals
  const petalsContainer = document.getElementById('petals-container');
  if (petalsContainer) petalsContainer.innerHTML = '';

  // Reset curtain
  curtainContainer.classList.remove('open', 'done');
  curtainContainer.style.display = '';

  // Give browser a frame to re-render, then restart
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      startCurtainSequence();
    });
  });
}

/* ============================================================
   KEYBOARD NAVIGATION
   ============================================================ */
document.addEventListener('keydown', (e) => {
  if (invitationWrapper.classList.contains('hidden')) return;

  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    goToCard(currentCard + 1);
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    goToCard(currentCard - 1);
  }
});

/* ============================================================
   TOUCH / SWIPE SUPPORT
   ============================================================ */
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].clientX;
  touchStartY = e.changedTouches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', (e) => {
  if (invitationWrapper.classList.contains('hidden')) return;

  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;

  // Only handle predominantly horizontal swipes
  if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;

  if (dx < 0) {
    // Swipe left — go forward
    goToCard(currentCard + 1);
  } else {
    // Swipe right — go back
    goToCard(currentCard - 1);
  }
}, { passive: true });

/* ============================================================
   INIT — run on DOMContentLoaded
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Lock scroll during curtain
  document.body.style.overflow = 'hidden';

  // Begin the curtain sequence
  startCurtainSequence();
});
