// ==========================================
// AUDIO SYSTEM v4.0
// Sound Effects - Mobile Friendly!
// ==========================================

const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;
let isAudioUnlocked = false;

// Inisialisasi Audio Context (dengan handling untuk mobile)
function initAudio() {
    if (!audioCtx) {
        audioCtx = new AudioCtx();
    }
    
    // Resume audio context jika suspended (wajib untuk mobile)
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    
    return audioCtx;
}

// Unlock audio untuk mobile (iOS & Android)
function unlockAudio() {
    if (isAudioUnlocked) return;
    
    // Buat buffer kosong dan mainkan untuk unlock audio
    const ctx = initAudio();
    if (ctx) {
        const buffer = ctx.createBuffer(1, 1, 22050);
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(ctx.destination);
        source.start(0);
        
        // Resume context
        if (ctx.state === 'suspended') {
            ctx.resume();
        }
    }
    
    isAudioUnlocked = true;
    console.log('Audio unlocked for mobile');
}

// Event listener untuk unlock audio pada interaksi pertama
document.addEventListener('touchstart', unlockAudio, { once: true });
document.addEventListener('touchend', unlockAudio, { once: true });
document.addEventListener('click', unlockAudio, { once: true });
document.addEventListener('keydown', unlockAudio, { once: true });

// ============ SOUND EFFECTS ============

// Klik ringan (tombol, link)
function playClick() {
    try {
        initAudio();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.frequency.value = 800; osc.type = 'sine';
        gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
        osc.start(); osc.stop(audioCtx.currentTime + 0.08);
    } catch(e) {}
}

// Navigasi/ganti halaman (suara swoosh)
function playNavigate() {
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
        osc.start(); osc.stop(audioCtx.currentTime + 0.2);
    } catch(e) {}
}

// Hover/tombol ditekan (pop ringan)
function playPop() {
    try {
        initAudio();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.frequency.value = 1000; osc.type = 'sine';
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
        osc.start(); osc.stop(audioCtx.currentTime + 0.05);
    } catch(e) {}
}

// Jawaban benar (chime ceria)
function playSuccess() {
    try {
        initAudio();
        [523, 659, 784].forEach((freq, i) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain); gain.connect(audioCtx.destination);
            osc.frequency.value = freq; osc.type = 'sine';
            gain.gain.setValueAtTime(0.18, audioCtx.currentTime + i * 0.12);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.12 + 0.2);
            osc.start(audioCtx.currentTime + i * 0.12);
            osc.stop(audioCtx.currentTime + i * 0.12 + 0.2);
        });
    } catch(e) {}
}

// Jawaban salah (buzz pendek)
function playError() {
    try {
        initAudio();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.frequency.value = 200; osc.type = 'sawtooth';
        gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
        osc.start(); osc.stop(audioCtx.currentTime + 0.25);
    } catch(e) {}
}

// Level up / skor tinggi
function playLevelUp() {
    try {
        initAudio();
        [440, 554, 659, 880].forEach((freq, i) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain); gain.connect(audioCtx.destination);
            osc.frequency.value = freq; osc.type = 'triangle';
            gain.gain.setValueAtTime(0.15, audioCtx.currentTime + i * 0.1);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.1 + 0.25);
            osc.start(audioCtx.currentTime + i * 0.1);
            osc.stop(audioCtx.currentTime + i * 0.1 + 0.25);
        });
    } catch(e) {}
}

// Game over
function playGameOver() {
    try {
        initAudio();
        [400, 350, 300, 200].forEach((freq, i) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain); gain.connect(audioCtx.destination);
            osc.frequency.value = freq; osc.type = 'triangle';
            gain.gain.setValueAtTime(0.15, audioCtx.currentTime + i * 0.15);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.15 + 0.3);
            osc.start(audioCtx.currentTime + i * 0.15);
            osc.stop(audioCtx.currentTime + i * 0.15 + 0.3);
        });
    } catch(e) {}
}

// Timer tick (waktu hampir habis)
function playTick() {
    try {
        initAudio();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.frequency.value = 1200; osc.type = 'sine';
        gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.03);
        osc.start(); osc.stop(audioCtx.currentTime + 0.03);
    } catch(e) {}
}

// Whoosh (animasi/transisi)
function playWhoosh() {
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
        osc.start(); osc.stop(audioCtx.currentTime + 0.25);
    } catch(e) {}
}

// Coin/point
function playCoin() {
    try {
        initAudio();
        [988, 1319].forEach((freq, i) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain); gain.connect(audioCtx.destination);
            osc.frequency.value = freq; osc.type = 'sine';
            gain.gain.setValueAtTime(0.1, audioCtx.currentTime + i * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.08 + 0.15);
            osc.start(audioCtx.currentTime + i * 0.08);
            osc.stop(audioCtx.currentTime + i * 0.08 + 0.15);
        });
    } catch(e) {}
}

// ============ AUTO SOUND ON CLICK ============
document.addEventListener('DOMContentLoaded', function() {
    // Unlock audio on first interaction
    unlockAudio();
    
    // Sound untuk semua tombol dan link
    document.addEventListener('click', function(e) {
        const target = e.target.closest('button, a.menu-card, .option-btn, .quiz-option, .game-mode-card, .nav-link, .nav-tab, .island-group');
        if (target) {
            // Cek apakah tombol game/quiz
            if (target.classList.contains('option-btn') || target.classList.contains('quiz-option')) {
                playPop();
            } else if (target.classList.contains('nav-link') || target.classList.contains('nav-tab') || target.classList.contains('menu-card')) {
                playNavigate();
            } else if (target.classList.contains('island-group')) {
                playCoin();
            } else {
                playClick();
            }
        }
    });
});

// Export untuk penggunaan manual
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
    unlock: unlockAudio
};
