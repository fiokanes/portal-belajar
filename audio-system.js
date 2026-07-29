// ==========================================
// AUDIO SYSTEM v5.0 - INTERACTIVE SOUNDS
// Sound Effects untuk Scroll, Click, Hover!
// Mobile Friendly!
// ==========================================

const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;
let isAudioUnlocked = false;
let lastScrollSound = 0;
let soundEnabled = true;

// Inisialisasi Audio Context
function initAudio() {
    if (!audioCtx) {
        audioCtx = new AudioCtx();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

// Unlock audio untuk mobile
function unlockAudio() {
    if (isAudioUnlocked) return;
    try {
        const ctx = initAudio();
        if (ctx) {
            const buffer = ctx.createBuffer(1, 1, 22050);
            const source = ctx.createBufferSource();
            source.buffer = buffer;
            source.connect(ctx.destination);
            source.start(0);
            if (ctx.state === 'suspended') ctx.resume();
        }
        isAudioUnlocked = true;
        console.log('🔊 Audio unlocked!');
    } catch(e) {
        console.log('Audio unlock failed:', e);
    }
}

// Event listener untuk unlock audio
document.addEventListener('touchstart', unlockAudio, { once: true });
document.addEventListener('touchend', unlockAudio, { once: true });
document.addEventListener('click', unlockAudio, { once: true });
document.addEventListener('keydown', unlockAudio, { once: true });

// ============ SOUND EFFECTS ============

// Klik ringan
function playClick() {
    if (!soundEnabled) return;
    try {
        initAudio();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.frequency.value = 800;
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.08);
    } catch(e) {}
}

// Navigasi/ganti halaman
function playNavigate() {
    if (!soundEnabled) return;
    try {
        initAudio();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.frequency.setValueAtTime(400, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.15);
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.2);
    } catch(e) {}
}

// Hover/tombol ditekan
function playPop() {
    if (!soundEnabled) return;
    try {
        initAudio();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.frequency.value = 1000;
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.05);
    } catch(e) {}
}

// Scroll sound - subtle tick
function playScroll() {
    if (!soundEnabled) return;
    const now = Date.now();
    if (now - lastScrollSound < 80) return; // Throttle
    lastScrollSound = now;
    
    try {
        initAudio();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.frequency.value = 600 + Math.random() * 200;
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.05);
    } catch(e) {}
}

// Jawaban benar
function playSuccess() {
    if (!soundEnabled) return;
    try {
        initAudio();
        [523, 659, 784].forEach((freq, i) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain); gain.connect(audioCtx.destination);
            osc.frequency.value = freq;
            osc.type = 'sine';
            gain.gain.setValueAtTime(0.18, audioCtx.currentTime + i * 0.12);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.12 + 0.2);
            osc.start(audioCtx.currentTime + i * 0.12);
            osc.stop(audioCtx.currentTime + i * 0.12 + 0.2);
        });
    } catch(e) {}
}

// Jawaban salah
function playError() {
    if (!soundEnabled) return;
    try {
        initAudio();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.frequency.value = 200;
        osc.type = 'sawtooth';
        gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.25);
    } catch(e) {}
}

// Level up
function playLevelUp() {
    if (!soundEnabled) return;
    try {
        initAudio();
        [440, 554, 659, 880].forEach((freq, i) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain); gain.connect(audioCtx.destination);
            osc.frequency.value = freq;
            osc.type = 'triangle';
            gain.gain.setValueAtTime(0.15, audioCtx.currentTime + i * 0.1);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.1 + 0.25);
            osc.start(audioCtx.currentTime + i * 0.1);
            osc.stop(audioCtx.currentTime + i * 0.1 + 0.25);
        });
    } catch(e) {}
}

// Game over
function playGameOver() {
    if (!soundEnabled) return;
    try {
        initAudio();
        [400, 350, 300, 200].forEach((freq, i) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain); gain.connect(audioCtx.destination);
            osc.frequency.value = freq;
            osc.type = 'triangle';
            gain.gain.setValueAtTime(0.15, audioCtx.currentTime + i * 0.15);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.15 + 0.3);
            osc.start(audioCtx.currentTime + i * 0.15);
            osc.stop(audioCtx.currentTime + i * 0.15 + 0.3);
        });
    } catch(e) {}
}

// Timer tick
function playTick() {
    if (!soundEnabled) return;
    try {
        initAudio();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.frequency.value = 1200;
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.03);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.03);
    } catch(e) {}
}

// Whoosh
function playWhoosh() {
    if (!soundEnabled) return;
    try {
        initAudio();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.frequency.setValueAtTime(200, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
        osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.2);
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.25);
    } catch(e) {}
}

// Coin/point
function playCoin() {
    if (!soundEnabled) return;
    try {
        initAudio();
        [988, 1319].forEach((freq, i) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain); gain.connect(audioCtx.destination);
            osc.frequency.value = freq;
            osc.type = 'sine';
            gain.gain.setValueAtTime(0.1, audioCtx.currentTime + i * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.08 + 0.15);
            osc.start(audioCtx.currentTime + i * 0.08);
            osc.stop(audioCtx.currentTime + i * 0.08 + 0.15);
        });
    } catch(e) {}
}

// Tab switch sound
function playTabSwitch() {
    if (!soundEnabled) return;
    try {
        initAudio();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.frequency.setValueAtTime(500, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(700, audioCtx.currentTime + 0.03);
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.05);
    } catch(e) {}
}

// Hover sound
function playHover() {
    if (!soundEnabled) return;
    try {
        initAudio();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.frequency.setValueAtTime(600, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.03);
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.04);
    } catch(e) {}
}

// Toggle sound on/off
function toggleSound() {
    soundEnabled = !soundEnabled;
    const btn = document.getElementById('soundToggle');
    if (btn) {
        btn.textContent = soundEnabled ? '🔊' : '🔇';
        btn.title = soundEnabled ? 'Matikan Suara' : 'Nyalakan Suara';
    }
    return soundEnabled;
}

// ============ AUTO SOUND EVENTS ============
document.addEventListener('DOMContentLoaded', function() {
    unlockAudio();
    
    // Sound untuk scroll
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(playScroll, 50);
    }, { passive: true });
    
    // Sound untuk semua klik
    document.addEventListener('click', function(e) {
        const target = e.target.closest('button, a, input[type="radio"], input[type="checkbox"], .clickable, .quiz-option, .game-option-btn, .menu-card, .bab-card, .materi-card, .nav-link, .nav-tab, .tab-btn, .accordion-header, .expand-btn');
        if (target) {
            if (target.classList.contains('option-btn') || target.classList.contains('quiz-option')) {
                playPop();
            } else if (target.classList.contains('nav-link') || target.classList.contains('nav-tab') || target.classList.contains('menu-card') || target.classList.contains('tab-btn')) {
                playNavigate();
            } else {
                playClick();
            }
        }
    });
    
    // Sound untuk hover pada elemen interaktif
    document.addEventListener('mouseover', function(e) {
        const target = e.target.closest('.menu-card, .bab-card, .nav-tab, .nav-link, .feature-tag, .card-badge');
        if (target) {
            playHover();
        }
    });
    
    // Sound untuk radio/checkbox change
    document.addEventListener('change', function(e) {
        if (e.target.type === 'radio' || e.target.type === 'checkbox') {
            playTabSwitch();
        }
    });
    
    // Sound untuk keyboard
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            playClick();
        }
    });
    
    // Tambahkan tombol toggle sound di semua halaman
    addSoundToggleButton();
});

// Tambahkan tombol toggle sound
function addSoundToggleButton() {
    const btn = document.createElement('button');
    btn.id = 'soundToggle';
    btn.innerHTML = '🔊';
    btn.title = 'Matikan Suara';
    btn.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border: none;
        font-size: 1.5em;
        cursor: pointer;
        box-shadow: 0 5px 20px rgba(102,126,234,0.5);
        transition: all 0.3s ease;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleSound();
        if (soundEnabled) playSuccess();
    });
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    document.body.appendChild(btn);
}

// Export
window.AudioSystem = {
    playClick,
    playNavigate,
    playPop,
    playSuccess,
    playError,
    playLevelUp,
    playGameOver,
    playTick,
    playWhoosh,
    playCoin,
    playScroll,
    playTabSwitch,
    playHover,
    toggleSound,
    unlock: unlockAudio,
    isEnabled: () => soundEnabled
};
