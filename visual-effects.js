// ==========================================
// VISUAL EFFECTS SYSTEM v5.0
// Animasi & Interaksi Menarik
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    initScrollProgress();
    initStaggerAnimations();
    initRippleEffects();
    initTooltipEffects();
    initFloatingElements();
    initParallaxEffect();
    initSmoothScroll();
    initLazyLoad();
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
    }, { passive: true });
}

// ============ STAGGER ANIMATIONS ============
function initStaggerAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('fade-in-up');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('section, .interactive-card, .menu-card, .bab-section, .theory-card, .tip-card, .feature-item').forEach(el => {
        observer.observe(el);
    });
}

// ============ RIPPLE EFFECT ON BUTTONS ============
function initRippleEffects() {
    document.querySelectorAll('button, .game-btn, .option-btn, .quiz-option, .nav-tab, .nav-link, .start-btn').forEach(btn => {
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
    
    const emojis = ['📚', '📖', '✏️', '🎓', '💡', '⭐', '🌟', '✨', '🎯', '🔢', '📐', '🧮', '📝', '🎭', '🎬', '🔬'];
    
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

// ============ PARALLAX EFFECT ============
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.parallax');
    if (parallaxElements.length === 0) return;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.5;
            el.style.transform = `translateY(${scrollTop * speed}px)`;
        });
    }, { passive: true });
}

// ============ SMOOTH SCROLL FOR ANCHORS ============
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ============ LAZY LOAD IMAGES ============
function initLazyLoad() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    if (lazyImages.length === 0) return;
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ============ CONFETTI EFFECT (untuk skor sempurna) ============
function showConfetti() {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);
    
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffd700', '#ff6b6b', '#4ecdc4'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
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

// ============ NOTIFICATION SYSTEM ============
function showNotification(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span class="notification-icon">${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
        <span class="notification-message">${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        border-left: 4px solid ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    }, duration);
}

// ============ MODAL SYSTEM ============
function showModal(content, title = '') {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0,0,0,0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;
    
    const modal = document.createElement('div');
    modal.className = 'modal-content';
    modal.style.cssText = `
        background: white;
        border-radius: 20px;
        padding: 30px;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        animation: scaleIn 0.3s ease;
    `;
    
    if (title) {
        modal.innerHTML = `<h3 style="margin-bottom: 20px; color: #1a237e;">${title}</h3>${content}`;
    } else {
        modal.innerHTML = content;
    }
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
    
    return overlay;
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
            modal.remove();
        });
    }
    
    // Ctrl+K to search (placeholder)
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        // Add search functionality here
    }
});

// ============ SMOOTH SCROLL TO SECTION ============
function scrollToSectionSmooth(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ============ PARTICLE EFFECT ============
function createParticles(element, count = 20) {
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 10 + 5}px;
            height: ${Math.random() * 10 + 5}px;
            background: ${['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffd700'][Math.floor(Math.random() * 5)]};
            border-radius: 50%;
            pointer-events: none;
            animation: particleFade ${Math.random() * 1 + 0.5}s ease-out forwards;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        
        element.style.position = 'relative';
        element.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1500);
    }
}

// ============ ADDITIONAL ANIMATIONS ============
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes scaleIn {
        from { transform: scale(0.8); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes particleFade {
        0% { transform: translate(0, 0) scale(1); opacity: 1; }
        100% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0); opacity: 0; }
    }
    
    .loaded {
        animation: fadeIn 0.5s ease;
    }
`;
document.head.appendChild(additionalStyles);

// Export
window.VisualEffects = {
    showConfetti,
    showNotification,
    showModal,
    animateCounter,
    shakeElement,
    pulseElement,
    createParticles,
    scrollToSectionSmooth
};
