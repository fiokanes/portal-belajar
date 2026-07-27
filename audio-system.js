// ==========================================
// UNIVERSAL AUDIO & DECORATION SYSTEM v2.0
// Suara Lebih Jernih, Alami, & Mengalir
// ==========================================

// ============ AUDIO SYSTEM ============
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function initAudio() { if (!audioCtx) audioCtx = new AudioCtx(); }

function playClick() {
    initAudio();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.frequency.value = 600; osc.type = 'sine';
    gain.gain.value = 0.1; gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
    osc.start(); osc.stop(audioCtx.currentTime + 0.08);
}

function playSuccess() {
    initAudio();
    [440, 554, 659].forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.frequency.value = freq; osc.type = 'sine';
        gain.gain.value = 0.15;
        osc.start(audioCtx.currentTime + i * 0.12);
        osc.stop(audioCtx.currentTime + i * 0.12 + 0.15);
    });
}

function playError() {
    initAudio();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.frequency.value = 250; osc.type = 'triangle';
    gain.gain.value = 0.1; gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
    osc.start(); osc.stop(audioCtx.currentTime + 0.2);
}

// ============ TEXT CLEANING (Untuk Bacaaan Lebih Alami) ============
function cleanTextForSpeech(text) {
    return text
        // Hapus emoji dan simbol
        .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
        .replace(/[✅❌⚠️🔑💡📝🎯✨➕➖✖️➗🔥🏆🎮📊😎😄😂🤔💪🫁🧬🌡️📚🔢📐🧪🎬🗺️🌿🌋🌤️]/g, '')
        // Ganti simbol matematika dengan kata
        .replace(/\+/g, ' ditambah ')
        .replace(/(?<![a-zA-Z])-(?![a-zA-Z])/g, ' dikurang ')
        .replace(/×/g, ' kali ')
        .replace(/÷/g, ' dibagi ')
        .replace(/=/g, ' sama dengan ')
        .replace(/≠/g, ' tidak sama dengan ')
        .replace(/</g, ' kurang dari ')
        .replace(/>/g, ' lebih dari ')
        // Bersihkan tanda baca berlebih
        .replace(/\.{2,}/g, '.')
        .replace(/,{2,}/g, ',')
        .replace(/!{2,}/g, '!')
        .replace(/\?{2,}/g, '?')
        // Hapus karakter aneh
        .replace(/[→←↑↓↔↕]/g, '')
        .replace(/[\[\]{}()]/g, '')
        .replace(/[""''„‟]/g, '')
        // Bersihkan spasi
        .replace(/\s+/g, ' ')
        .replace(/\s+\./g, '.')
        .replace(/\s+,/g, ',')
        .trim();
}

// ============ VOICE SELECTION (Pilih Suara Terbaik) ============
let selectedVoiceId = null;

function getBestVoice(lang) {
    const voices = window.speechSynthesis.getVoices();
    
    // Filter berdasarkan bahasa
    let filtered = voices.filter(v => {
        if (lang === 'id-ID') return v.lang.startsWith('id');
        if (lang === 'en-US') return v.lang.startsWith('en');
        return v.lang.startsWith(lang.split('-')[0]);
    });
    
    if (filtered.length === 0) return null;
    
    // Prioritas suara terbaik (natural, bukan robot)
    const priorities = [
        // Google voices (paling natural)
        v => v.name.includes('Google') && !v.name.includes('Male'),
        // Natural/Premium voices
        v => v.name.includes('Natural') || v.name.includes('Premium') || v.name.includes('Enhanced'),
        // Female voices (biasanya lebih jelas untuk belajar)
        v => v.name.includes('Female') || v.name.includes('Wanita') || v.name.includes('Perempuan'),
        // Microsoft voices
        v => v.name.includes('Microsoft') && !v.name.includes('Male'),
        // Samantha (Mac)
        v => v.name.includes('Samantha'),
        // Any non-male voice
        v => !v.name.includes('Male') && !v.name.includes('Laki'),
    ];
    
    for (const check of priorities) {
        const found = filtered.find(check);
        if (found) return found;
    }
    
    return filtered[0];
}

// ============ NATURAL SPEECH ENGINE ============
let currentUtterance = null;
let isReading = false;
let readingSectionId = null;
let speechRate = 0.88; // Sedikit lebih lambat untuk kejelasan

function getTextFromSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return '';
    
    let textParts = [];
    
    // Ambil teks dari elemen yang relevan saja
    const elements = section.querySelectorAll('h2, h3, h4, p, li, td, th, .example-box, .fun-box, .warning-box, .tip-box, .summary-box');
    
    elements.forEach(el => {
        // Skip tombol dan elemen UI
        if (el.closest('button') || el.closest('.read-aloud-btn') || 
            el.closest('.quiz-option') || el.closest('.option-btn') || 
            el.closest('.quiz-feedback') || el.closest('.score-display') ||
            el.closest('.game-mode-card') || el.closest('.card-footer')) {
            return;
        }
        
        let text = el.textContent.trim();
        if (text.length > 2) {
            textParts.push(text);
        }
    });
    
    return cleanTextForSpeech(textParts.join('. '));
}

function naturalizeText(text) {
    // Buat teks lebih natural untuk dibaca
    let result = text;
    
    // Tambah jeda natural pada tanda baca
    result = result.replace(/\./g, '. '); // Jeda setelah titik
    result = result.replace(/,/g, ', '); // Jeda setelah koma
    result = result.replace(/:/g, ': '); // Jeda setelah titik dua
    result = result.replace(/;/g, '; '); // Jeda setelah titik koma
    
    // Perbaiki angka dan simbol yang aneh dibaca
    result = result.replace(/(\d+)\s*x\s*(\d+)/g, '$1 kali $2');
    result = result.replace(/(\d+)\s*\+\s*(\d+)/g, '$1 ditambah $2');
    result = result.replace(/(\d+)\s*-\s*(\d+)/g, '$1 dikurang $2');
    
    // Hapus pengulangan kata yang tidak perlu
    result = result.replace(/(\b\w+\b)\s+\1/g, '$1');
    
    // Bersihkan spasi berlebih
    result = result.replace(/\s+/g, ' ').trim();
    
    return result;
}

function speakNatural(text, lang, onEnd) {
    if (!('speechSynthesis' in window)) return;
    
    // Bagi teks menjadi paragraf/kalimat untuk jeda natural
    let sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    sentences = sentences.map(s => s.trim()).filter(s => s.length > 3);
    
    if (sentences.length === 0) {
        if (onEnd) onEnd();
        return;
    }
    
    let currentIndex = 0;
    
    function speakNext() {
        if (currentIndex >= sentences.length || !isReading) {
            if (onEnd) onEnd();
            return;
        }
        
        const sentence = naturalizeText(sentences[currentIndex]);
        currentIndex++;
        
        const utterance = new SpeechSynthesisUtterance(sentence);
        utterance.lang = lang;
        utterance.rate = speechRate; // 0.88 - lebih lambat untuk kejelasan
        utterance.pitch = 1.05; // Sedikit lebih tinggi untuk kejelasan
        utterance.volume = 1.0;
        
        const voice = getBestVoice(lang);
        if (voice) utterance.voice = voice;
        
        currentUtterance = utterance;
        
        // Highlight teks saat dibaca
        utterance.onstart = () => {
            highlightCurrentSentence(sentence);
        };
        
        // Jeda natural antar kalimat (300-500ms)
        utterance.onend = () => {
            const pauseTime = sentence.endsWith('?') || sentence.endsWith('!') ? 600 : 350;
            setTimeout(speakNext, pauseTime);
        };
        
        utterance.onerror = (e) => {
            if (e.error !== 'canceled') speakNext();
        };
        
        window.speechSynthesis.speak(utterance);
    }
    
    speakNext();
}

function highlightCurrentSentence(sentence) {
    // Highlight section yang sedang dibaca
    if (readingSectionId) {
        const section = document.getElementById(readingSectionId);
        if (section) {
            section.style.borderLeft = '5px solid #ffd700';
            section.style.transition = 'border-left 0.3s ease';
        }
    }
}

// ============ MAIN READ FUNCTION ============
function readSection(sectionId, lang = 'id-ID') {
    if (!('speechSynthesis' in window)) {
        alert('Browser kamu belum mendukung Text-to-Speech. Coba pakai Chrome ya!');
        return;
    }
    
    // Jika sedang membaca section yang sama, hentikan
    if (isReading && readingSectionId === sectionId) {
        stopReading();
        return;
    }
    
    // Hentikan bacaan sebelumnya
    window.speechSynthesis.cancel();
    
    const text = getTextFromSection(sectionId);
    if (!text || text.length < 10) {
        alert('Tidak ada teks yang bisa dibaca di bagian ini.');
        return;
    }
    
    readingSectionId = sectionId;
    isReading = true;
    
    // Update UI
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.borderLeft = '5px solid #ffd700';
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Update semua tombol
    document.querySelectorAll('.read-aloud-btn').forEach(btn => {
        if (btn.dataset.section === sectionId) {
            btn.classList.add('reading');
            btn.innerHTML = lang === 'en-US' ? '⏹️ Stop' : '⏹️ Berhenti';
        } else {
            btn.classList.remove('reading');
            btn.innerHTML = lang === 'en-US' ? '🎧 Listen' : '🎧 Bacain dong';
        }
    });
    
    // Mulai membaca
    speakNatural(text, lang, () => {
        // Callback saat selesai
        isReading = false;
        readingSectionId = null;
        document.querySelectorAll('.read-aloud-btn').forEach(btn => {
            btn.classList.remove('reading');
            btn.innerHTML = lang === 'en-US' ? '🎧 Listen' : '🎧 Bacain dong';
        });
        if (section) section.style.borderLeft = '';
    });
}

function stopReading() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    isReading = false;
    readingSectionId = null;
    currentUtterance = null;
    
    document.querySelectorAll('.read-aloud-btn').forEach(btn => {
        btn.classList.remove('reading');
        btn.innerHTML = '🎧 Bacain dong';
    });
    document.querySelectorAll('section').forEach(s => s.style.borderLeft = '');
}

// ============ CONTROLS ============
function pauseResume() {
    if (!('speechSynthesis' in window)) return;
    
    if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        document.querySelectorAll('.pause-btn').forEach(btn => btn.innerHTML = '⏸️');
    } else if (window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        document.querySelectorAll('.pause-btn').forEach(btn => btn.innerHTML = '▶️');
    }
}

function changeSpeed(delta) {
    speechRate = Math.max(0.5, Math.min(1.5, speechRate + delta));
    document.querySelectorAll('.speed-display').forEach(el => {
        el.textContent = speechRate.toFixed(2) + 'x';
    });
}

// ============ READ ENTIRE PAGE ============
function readEntirePage(lang = 'id-ID') {
    if (!('speechSynthesis' in window)) return;
    
    window.speechSynthesis.cancel();
    isReading = true;
    
    const allSections = document.querySelectorAll('section[id]');
    let sectionIndex = 0;
    
    function readNextSection() {
        if (sectionIndex >= allSections.length || !isReading) {
            isReading = false;
            document.querySelectorAll('.read-all-btn').forEach(btn => {
                btn.classList.remove('reading');
                btn.innerHTML = '🔊 Bacain Semua';
            });
            return;
        }
        
        const section = allSections[sectionIndex];
        const sectionId = section.id;
        sectionIndex++;
        
        // Scroll ke section
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        section.style.borderLeft = '5px solid #ffd700';
        
        const text = getTextFromSection(sectionId);
        if (text && text.length > 10) {
            speakNatural(text, lang, () => {
                section.style.borderLeft = '';
                setTimeout(readNextSection, 500); // Jeda antar section
            });
        } else {
            section.style.borderLeft = '';
            readNextSection();
        }
    }
    
    // Update button
    document.querySelectorAll('.read-all-btn').forEach(btn => {
        btn.classList.add('reading');
        btn.innerHTML = '⏹️ Berhenti';
    });
    
    readNextSection();
}

// ============ AUTO LOAD VOICES ============
if ('speechSynthesis' in window) {
    // Load voices
    window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
    };
    // Trigger initial load
    window.speechSynthesis.getVoices();
}

// ============ SUMMARY SYSTEM ============
function generateSummary(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return '';
    
    // Ambil heading dan poin penting
    const headings = section.querySelectorAll('h2, h3');
    const lists = section.querySelectorAll('li');
    const strongs = section.querySelectorAll('strong');
    
    let summary = [];
    
    headings.forEach(h => {
        const text = h.textContent.replace(/[🎧🔊⏸️▶️⏹️]/g, '').trim();
        if (text.length > 3) summary.push('📌 ' + text);
    });
    
    // Ambil 5 poin terpenting
    let keyPoints = [];
    strongs.forEach(s => {
        const text = s.textContent.trim();
        if (text.length > 3 && text.length < 50) {
            keyPoints.push('• ' + text);
        }
    });
    
    // Ambil maksimal 8 poin
    if (keyPoints.length > 0) {
        summary.push('');
        summary.push('🔑 Poin Penting:');
        keyPoints.slice(0, 8).forEach(p => summary.push(p));
    }
    
    return summary.join('\n');
}
