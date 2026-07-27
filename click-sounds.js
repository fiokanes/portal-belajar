/**
 * Sistem Sound Effect untuk Klik
 * Menambahkan efek suara setiap kali user mengklik sesuatu
 */

(function() {
    // Audio Context
    let audioContext = null;
    
    // Inisialisasi Audio Context
    function initAudio() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        return audioContext;
    }
    
    // Fungsi untuk membuat sound effect
    function playClickSound(type = 'click') {
        try {
            const ctx = initAudio();
            const oscillator = ctx.createOscillator();
            const gainNode = ctx.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);
            
            // Pengaturan sound berdasarkan jenis
            switch(type) {
                case 'click':
                    oscillator.frequency.setValueAtTime(800, ctx.currentTime);
                    oscillator.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.1);
                    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
                    oscillator.start(ctx.currentTime);
                    oscillator.stop(ctx.currentTime + 0.1);
                    break;
                    
                case 'hover':
                    oscillator.frequency.setValueAtTime(600, ctx.currentTime);
                    oscillator.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.05);
                    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
                    oscillator.start(ctx.currentTime);
                    oscillator.stop(ctx.currentTime + 0.05);
                    break;
                    
                case 'success':
                    oscillator.frequency.setValueAtTime(523, ctx.currentTime);
                    oscillator.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
                    oscillator.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
                    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
                    oscillator.start(ctx.currentTime);
                    oscillator.stop(ctx.currentTime + 0.3);
                    break;
                    
                case 'error':
                    oscillator.frequency.setValueAtTime(300, ctx.currentTime);
                    oscillator.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.2);
                    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
                    oscillator.start(ctx.currentTime);
                    oscillator.stop(ctx.currentTime + 0.2);
                    break;
                    
                case 'pop':
                    oscillator.frequency.setValueAtTime(400, ctx.currentTime);
                    oscillator.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.05);
                    oscillator.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.1);
                    gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
                    oscillator.start(ctx.currentTime);
                    oscillator.stop(ctx.currentTime + 0.1);
                    break;
                    
                case 'whoosh':
                    oscillator.type = 'sawtooth';
                    oscillator.frequency.setValueAtTime(1000, ctx.currentTime);
                    oscillator.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.2);
                    gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
                    oscillator.start(ctx.currentTime);
                    oscillator.stop(ctx.currentTime + 0.2);
                    break;
                    
                case 'ding':
                    oscillator.frequency.setValueAtTime(1200, ctx.currentTime);
                    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
                    oscillator.start(ctx.currentTime);
                    oscillator.stop(ctx.currentTime + 0.5);
                    break;
                    
                case 'tab':
                    oscillator.frequency.setValueAtTime(500, ctx.currentTime);
                    oscillator.frequency.exponentialRampToValueAtTime(700, ctx.currentTime + 0.03);
                    gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
                    oscillator.start(ctx.currentTime);
                    oscillator.stop(ctx.currentTime + 0.05);
                    break;
            }
        } catch(e) {
            // Audio tidak didukung, abaikan error
        }
    }
    
    // Tambahkan event listener ke semua elemen yang bisa diklik
    function addClickSounds() {
        // Klik pada button, a, input, dll
        document.addEventListener('click', function(e) {
            const target = e.target.closest('button, a, input[type="radio"], input[type="checkbox"], .clickable, .quiz-option, .game-option-btn, .menu-card, .bab-card, .materi-card, .sila-card, .mapel-card');
            if (target) {
                playClickSound('click');
            }
        });
        
        // Hover pada elemen interaktif
        document.addEventListener('mouseover', function(e) {
            const target = e.target.closest('button, a, .clickable, .quiz-option, .game-option-btn, .menu-card, .bab-card, .materi-card, .sila-card, .mapel-card');
            if (target) {
                playClickSound('hover');
            }
        });
        
        // Khusus untuk quiz option
        document.addEventListener('change', function(e) {
            if (e.target.type === 'radio' || e.target.type === 'checkbox') {
                playClickSound('tab');
            }
        });
    }
    
    // Export fungsi untuk penggunaan manual
    window.ClickSounds = {
        play: playClickSound,
        init: initAudio
    };
    
    // Inisialisasi saat DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addClickSounds);
    } else {
        addClickSounds();
    }
    
    // Aktifkan audio context pada interaksi pertama
    document.addEventListener('click', function() {
        initAudio();
    }, { once: true });
})();