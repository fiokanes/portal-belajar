/**
 * Sistem Sound Effect Interaktif v5.0
 * Suara untuk Klik, Scroll, Hover, dan Interaksi Lainnya
 * Kompatibel dengan iOS dan Android
 */

(function() {
    let audioContext = null;
    let isUnlocked = false;
    let lastScrollTime = 0;
    let soundOn = true;
    
    function initAudio() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
        return audioContext;
    }
    
    function unlockAudio() {
        if (isUnlocked) return;
        try {
            const ctx = initAudio();
            const buffer = ctx.createBuffer(1, 1, 22050);
            const source = ctx.createBufferSource();
            source.buffer = buffer;
            source.connect(ctx.destination);
            source.start(0);
            if (ctx.state === 'suspended') ctx.resume();
            isUnlocked = true;
        } catch(e) {}
    }
    
    document.addEventListener('touchstart', unlockAudio, { once: true });
    document.addEventListener('touchend', unlockAudio, { once: true });
    document.addEventListener('click', unlockAudio, { once: true });
    document.addEventListener('keydown', unlockAudio, { once: true });
    
    function playSound(type) {
        if (!soundOn) return;
        try {
            const ctx = initAudio();
            if (!ctx || ctx.state !== 'running') return;
            
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            switch(type) {
                case 'click':
                    osc.frequency.setValueAtTime(800, ctx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.1);
                    gain.gain.setValueAtTime(0.3, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
                    osc.start(ctx.currentTime);
                    osc.stop(ctx.currentTime + 0.1);
                    break;
                    
                case 'hover':
                    osc.frequency.setValueAtTime(600, ctx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.03);
                    gain.gain.setValueAtTime(0.05, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.04);
                    osc.start(ctx.currentTime);
                    osc.stop(ctx.currentTime + 0.04);
                    break;
                    
                case 'scroll':
                    osc.frequency.value = 600 + Math.random() * 200;
                    gain.gain.setValueAtTime(0.03, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
                    osc.start(ctx.currentTime);
                    osc.stop(ctx.currentTime + 0.05);
                    break;
                    
                case 'success':
                    osc.frequency.setValueAtTime(523, ctx.currentTime);
                    osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
                    osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
                    gain.gain.setValueAtTime(0.3, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
                    osc.start(ctx.currentTime);
                    osc.stop(ctx.currentTime + 0.3);
                    break;
                    
                case 'error':
                    osc.frequency.setValueAtTime(300, ctx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.2);
                    gain.gain.setValueAtTime(0.3, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
                    osc.start(ctx.currentTime);
                    osc.stop(ctx.currentTime + 0.2);
                    break;
                    
                case 'pop':
                    osc.frequency.setValueAtTime(400, ctx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.05);
                    osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.1);
                    gain.gain.setValueAtTime(0.2, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
                    osc.start(ctx.currentTime);
                    osc.stop(ctx.currentTime + 0.1);
                    break;
                    
                case 'whoosh':
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(1000, ctx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.2);
                    gain.gain.setValueAtTime(0.2, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
                    osc.start(ctx.currentTime);
                    osc.stop(ctx.currentTime + 0.2);
                    break;
                    
                case 'ding':
                    osc.frequency.setValueAtTime(1200, ctx.currentTime);
                    gain.gain.setValueAtTime(0.3, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
                    osc.start(ctx.currentTime);
                    osc.stop(ctx.currentTime + 0.5);
                    break;
                    
                case 'tab':
                    osc.frequency.setValueAtTime(500, ctx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime(700, ctx.currentTime + 0.03);
                    gain.gain.setValueAtTime(0.15, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
                    osc.start(ctx.currentTime);
                    osc.stop(ctx.currentTime + 0.05);
                    break;
                    
                case 'navigate':
                    osc.frequency.setValueAtTime(400, ctx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.15);
                    gain.gain.setValueAtTime(0.12, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
                    osc.start(ctx.currentTime);
                    osc.stop(ctx.currentTime + 0.2);
                    break;
            }
        } catch(e) {}
    }
    
    function addAllSounds() {
        // Klik pada elemen interaktif
        document.addEventListener('click', function(e) {
            const target = e.target.closest('button, a, input[type="radio"], input[type="checkbox"], .clickable, .quiz-option, .game-option-btn, .menu-card, .bab-card, .materi-card, .sila-card, .mapel-card, .island-group, .nav-link, .nav-tab, .tab-btn, .accordion-header');
            if (target) {
                if (target.classList.contains('menu-card') || target.classList.contains('nav-link') || target.classList.contains('nav-tab')) {
                    playSound('navigate');
                } else if (target.classList.contains('option-btn') || target.classList.contains('quiz-option')) {
                    playSound('pop');
                } else {
                    playSound('click');
                }
            }
        });
        
        // Hover pada elemen interaktif
        document.addEventListener('mouseover', function(e) {
            const target = e.target.closest('.menu-card, .bab-card, .nav-tab, .nav-link, .feature-tag, .card-badge, .interactive-card');
            if (target) {
                playSound('hover');
            }
        });
        
        // Scroll sound
        let scrollTimeout;
        window.addEventListener('scroll', function() {
            const now = Date.now();
            if (now - lastScrollTime > 80) {
                lastScrollTime = now;
                playSound('scroll');
            }
        }, { passive: true });
        
        // Touch events untuk mobile
        document.addEventListener('touchstart', function(e) {
            const target = e.target.closest('.island-group, .mapel-card, .bab-card');
            if (target) {
                playSound('pop');
            }
        }, { passive: true });
        
        // Radio/checkbox change
        document.addEventListener('change', function(e) {
            if (e.target.type === 'radio' || e.target.type === 'checkbox') {
                playSound('tab');
            }
        });
    }
    
    // Export
    window.ClickSounds = {
        play: playSound,
        init: initAudio,
        unlock: unlockAudio,
        toggle: function() {
            soundOn = !soundOn;
            return soundOn;
        }
    };
    
    // Inisialisasi
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addAllSounds);
    } else {
        addAllSounds();
    }
    
    unlockAudio();
})();
