// ==========================================
// VISUAL EFFECTS SYSTEM v2.0
// Animasi & Interaksi Menarik
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    initScrollProgress();
    initStaggerAnimations();
    initRippleEffects();
    initTooltipEffects();
    initFloatingElements();
});

// ============ SCROLL PROGRESS BAR ============
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.prepend(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// ============ STAGGER ANIMATIONS ============
function initStaggerAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('section, .interactive-card, .menu-card').forEach(el => {
        observer.observe(el);
    });
}

// ============ RIPPLE EFFECT ON BUTTONS ============
function initRippleEffects() {
    document.querySelectorAll('button, .game-btn, .option-btn, .quiz-option').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px; height: ${size}px;
                left: ${x}px; top: ${y}px;
                background: rgba(255,255,255,0.4);
                border-radius: 50%;
                transform: scale(0);
                animation: rippleEffect 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// ============ TOOLTIP EFFECTS ============
function initTooltipEffects() {
    document.querySelectorAll('[data-tooltip]').forEach(el => {
        el.classList.add('tooltip');
        const tooltipText = document.createElement('span');
        tooltipText.className = 'tooltip-text';
        tooltipText.textContent = el.getAttribute('data-tooltip');
        el.appendChild(tooltipText);
    });
}

// ============ FLOATING DECORATIVE ELEMENTS ============
function initFloatingElements() {
    const container = document.createElement('div');
    container.className = 'floating-elements';
    
    const emojis = ['📚', '📖', '✏️', '🎓', '💡', '⭐', '🌟', '✨', '🎯', '🔢', '📐', '🧮'];
    
    for (let i = 0; i < 15; i++) {
        const item = document.createElement('div');
        item.className = 'floating-item';
        item.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        item.style.left = Math.random() * 100 + '%';
        item.style.top = Math.random() * 100 + '%';
        item.style.animationDelay = Math.random() * 5 + 's';
        item.style.animationDuration = (10 + Math.random() * 10) + 's';
        item.style.fontSize = (1.5 + Math.random() * 2) + 'em';
        container.appendChild(item);
    }
    
    document.body.prepend(container);
}

// ============ CONFETTI EFFECT (untuk skor sempurna) ============
function showConfetti() {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);
    
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffd700'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
        container.appendChild(confetti);
    }
    
    setTimeout(() => container.remove(), 5000);
}

// ============ HIGHLIGHT TOGGLE ============
function toggleHighlight(element) {
    element.classList.toggle('highlight-active');
    if (element.classList.contains('highlight-active')) {
        element.style.transform = 'scale(1.05)';
        element.style.boxShadow = '0 5px 15px rgba(255,215,0,0.5)';
    } else {
        element.style.transform = '';
        element.style.boxShadow = '';
    }
}

// ============ ANIMATED COUNTER ============
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function update() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }
    
    update();
}

// ============ SHAKE ELEMENT ============
function shakeElement(element) {
    element.classList.add('shake');
    setTimeout(() => element.classList.remove('shake'), 500);
}

// ============ PULSE ELEMENT ============
function pulseElement(element) {
    element.style.animation = 'none';
    element.offsetHeight; // Trigger reflow
    element.style.animation = 'countPulse 0.5s ease-in-out';
}

// ============ CREATE FLOATING BOOK ============
function createFloatingBook(title, color, x, y) {
    const book = document.createElement('div');
    book.className = 'animated-book';
    book.innerHTML = `
        <div class="book-cover" style="background: linear-gradient(135deg, ${color} 0%, ${adjustColor(color, -30)} 100%);">
            <div class="book-pages"></div>
            <div class="book-title">${title}</div>
        </div>
    `;
    book.style.position = 'absolute';
    book.style.left = x + 'px';
    book.style.top = y + 'px';
    book.style.zIndex = '10';
    
    // Add floating animation
    book.style.animation = `floatRandom ${15 + Math.random() * 10}s ease-in-out infinite`;
    book.style.animationDelay = Math.random() * 5 + 's';
    
    return book;
}

// Helper: Adjust color brightness
function adjustColor(hex, amount) {
    let color = hex.replace('#', '');
    let r = Math.max(0, Math.min(255, parseInt(color.substr(0,2), 16) + amount));
    let g = Math.max(0, Math.min(255, parseInt(color.substr(2,2), 16) + amount));
    let b = Math.max(0, Math.min(255, parseInt(color.substr(4,2), 16) + amount));
    return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
}

// ============ ANIMATE SECTIONS ON SCROLL ============
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            sectionObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Apply to all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    sectionObserver.observe(section);
});

// ============ KEYBOARD SHORTCUTS ============
document.addEventListener('keydown', function(e) {
    // ESC to close modals
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay').forEach(modal => {
            modal.classList.add('hidden');
        });
    }
});

// ============ SMOOTH SCROLL TO SECTION ============
function scrollToSectionSmooth(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
