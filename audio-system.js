// ==========================================
// UNIVERSAL AUDIO & DECORATION SYSTEM
// Copy paste ke semua halaman
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

// ============ READ ALOUD SYSTEM (NATURAL) ============
let speechRate = 0.92;
let isReading = false;

function getTextFromSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return '';
    let text = '';
    const walker = document.createTreeWalker(section, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while (node = walker.nextNode()) {
        const parent = node.parentElement;
        if (parent && !parent.closest('button') && !parent.closest('.quiz-option') && 
            !parent.closest('.option-btn') && !parent.closest('.read-aloud-btn') && 
            !parent.closest('.quiz-feedback') && !parent.closest('.score-display')) {
            let cleaned = node.textContent.trim()
                .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
                .replace(/[✅❌⚠️🔑💡📝🎯✨➕➖✖️➗🔥🏆🎮📊]/g, '')
                .replace(/\s+/g, ' ').trim();
            if (cleaned.length > 2) text += cleaned + ' ';
        }
    }
    return text.replace(/\.\.\./g, ',').replace(/\.{2,}/g, '.').replace(/\s+/g, ' ').trim();
}

function getBestVoice(lang) {
    const voices = window.speechSynthesis.getVoices();
    if (lang === 'id-ID') {
        return voices.find(v => v.lang.startsWith('id') && v.name.includes('Google')) ||
               voices.find(v => v.lang.startsWith('id') && (v.name.includes('Female') || v.name.includes('Wanita'))) ||
               voices.find(v => v.lang.startsWith('id'));
    }
    return voices.find(v => v.lang.startsWith('en') && v.name.includes('Google')) ||
           voices.find(v => v.lang.startsWith('en-US') && v.name.includes('Natural')) ||
           voices.find(v => v.lang.startsWith('en-US') && v.name.includes('Female')) ||
           voices.find(v => v.lang.startsWith('en'));
}

function speakSentences(sentences, lang, sectionId) {
    if (sentences.length === 0) {
        isReading = false;
        document.querySelectorAll('.read-aloud-btn').forEach(btn => {
            btn.classList.remove('reading');
            btn.innerHTML = lang === 'en-US' ? '🎧 Listen' : '🎧 Bacain dong';
        });
        const section = document.getElementById(sectionId);
        if (section) section.style.borderLeft = '';
        return;
    }
    const sentence = sentences.shift();
    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.lang = lang;
    utterance.rate = 0.92; // Natural speed
    utterance.pitch = 1.0; // Natural pitch
    utterance.volume = 1;
    const voice = getBestVoice(lang);
    if (voice) utterance.voice = voice;
    // Jeda 400ms antar kalimat
    utterance.onend = () => setTimeout(() => speakSentences(sentences, lang, sectionId), 400);
    utterance.onerror = () => speakSentences(sentences, lang, sectionId);
    window.speechSynthesis.speak(utterance);
}

function readSection(sectionId, lang = 'id-ID') {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const text = getTextFromSection(sectionId);
    if (!text) return;
    document.querySelectorAll('section').forEach(s => { s.style.borderLeft = ''; });
    const section = document.getElementById(sectionId);
    if (section) { 
        section.style.borderLeft = '5px solid #ffd700'; 
        section.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
    }
    isReading = true;
    const btnText = lang === 'en-US' ? '🎧 Reading...' : '🎧 Lagi dibacain...';
    document.querySelectorAll('.read-aloud-btn').forEach(btn => {
        if (btn.dataset.section === sectionId) { 
            btn.classList.add('reading'); 
            btn.innerHTML = btnText; 
        }
    });
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    speakSentences(sentences.map(s => s.trim()).filter(s => s.length > 0), lang, sectionId);
}

function stopReading() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        isReading = false;
        document.querySelectorAll('.read-aloud-btn').forEach(btn => {
            btn.classList.remove('reading');
            btn.innerHTML = '🎧 Bacain dong';
        });
        document.querySelectorAll('section').forEach(s => s.style.borderLeft = '');
    }
}

function pauseResume() {
    if ('speechSynthesis' in window) {
        if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
            document.getElementById('pauseBtn').innerHTML = '⏸️';
        } else if (window.speechSynthesis.speaking) {
            window.speechSynthesis.pause();
            document.getElementById('pauseBtn').innerHTML = '▶️';
        }
    }
}

function changeSpeed() {
    const speeds = [0.8, 0.85, 0.9, 0.92, 0.95, 1.0, 1.1];
    const currentIndex = speeds.indexOf(speechRate);
    speechRate = speeds[(currentIndex + 1) % speeds.length];
    document.getElementById('speedDisplay').textContent = speechRate + 'x';
}
