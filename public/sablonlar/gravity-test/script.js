document.addEventListener('DOMContentLoaded', () => {

    // 1. Envelope Opening Logic
    const envelope = document.getElementById('envelope');
    const envelopeWrapper = document.getElementById('envelope-wrapper');
    const mainContent = document.getElementById('main-content');
    
    // Setup initial reveals so they are ready when page shows
    const revealElements = document.querySelectorAll('.reveal');

    envelope.addEventListener('click', () => {
        // Open the flap and reveal lette
        envelope.classList.add('open');
        
        // After 1.2 seconds, fade out the envelope screen and show the main site
        setTimeout(() => {
            envelopeWrapper.classList.add('hidden');
            mainContent.classList.add('visible');
            
            // Scroll to top to ensure clean start
            window.scrollTo(0, 0);
            
            // Trigger first reveal check immediately
            revealOnScroll();
        }, 1200);
    });

    // 2. Countdown Timer Logic
    const targetDate = new Date('May 25, 2026 18:00:00').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference < 0) {
            const container = document.querySelector('.countdown-container');
            if(container) container.innerHTML = '<h2>Xoşbəxtliklər!</h2>';
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        const elDays = document.getElementById('days');
        const elHours = document.getElementById('hours');
        const elMins = document.getElementById('minutes');
        const elSecs = document.getElementById('seconds');

        if(elDays) elDays.innerText = String(days).padStart(2, '0');
        if(elHours) elHours.innerText = String(hours).padStart(2, '0');
        if(elMins) elMins.innerText = String(minutes).padStart(2, '0');
        if(elSecs) elSecs.innerText = String(seconds).padStart(2, '0');
    };

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // 3. Scroll Reveal Animations
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = 50;

            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
});
