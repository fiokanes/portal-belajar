/**
 * Emoji Bergerak untuk Background
 * Tidak menghalangi bacaan - hanya sebagai hiasan background
 */

(function() {
    // CSS untuk emoji background
    const css = `
        .floating-emojis {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
            opacity: 0.15;
        }
        
        .floating-emojis span {
            position: absolute;
            font-size: 20px;
            animation: floatEmoji 25s linear infinite;
        }
        
        @keyframes floatEmoji {
            0% { 
                transform: translateY(110vh) rotate(0deg); 
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% { 
                transform: translateY(-10vh) rotate(360deg); 
                opacity: 0;
            }
        }
    `;

    // Tambahkan CSS
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    // Fungsi untuk membuat emoji background
    function createBackgroundEmojis(emojis, count = 8) {
        // Hapus emoji sebelumnya jika ada
        const existing = document.querySelector('.floating-emojis');
        if (existing) existing.remove();

        const container = document.createElement('div');
        container.className = 'floating-emojis';
        
        for (let i = 0; i < count; i++) {
            const emoji = document.createElement('span');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 100 + '%';
            emoji.style.fontSize = (Math.random() * 15 + 12) + 'px';
            emoji.style.animationDelay = (Math.random() * 20) + 's';
            emoji.style.animationDuration = (Math.random() * 15 + 20) + 's';
            container.appendChild(emoji);
        }
        
        document.body.insertBefore(container, document.body.firstChild);
    }

    // Emoji per mapel (hanya beberapa, tidak terlalu banyak)
    const emojiSets = {
        'matematika': ['🔢', '➕', '📐', '📏'],
        'biologi': ['🧬', '🔬', '🌿', '🧪'],
        'fisika': ['⚡', '💡', '🔋', '⚙️'],
        'geografi': ['🌍', '🗺️', '🏔️', '🌊'],
        'english': ['🇬🇧', '📚', '✏️', '📝'],
        'aksara': ['📜', '🏛️', '🎭', '✍️'],
        'bindo': ['📝', '📚', '✏️', '📖'],
        'ppkn': ['🇮🇩', '⭐', '📜', '⚖️']
    };

    // Inisialisasi emoji berdasarkan mapel
    window.initEmojiBackground = function(mapel) {
        const emojis = emojiSets[mapel] || emojiSets['matematika'];
        createBackgroundEmojis(emojis, 6);
    };

    // Auto-detect mapel dari URL
    function autoDetectMapel() {
        const path = window.location.pathname.toLowerCase();
        if (path.includes('matematika') || path.includes('aritmatika')) return 'matematika';
        if (path.includes('biologi') || path.includes('pencernaan') || path.includes('peredaran') || path.includes('pernapasan') || path.includes('ekskresi')) return 'biologi';
        if (path.includes('fisika')) return 'fisika';
        if (path.includes('geografis')) return 'geografi';
        if (path.includes('english')) return 'english';
        if (path.includes('aksara')) return 'aksara';
        if (path.includes('bahasa-indonesia')) return 'bindo';
        if (path.includes('ppkn') || path.includes('pancasila')) return 'ppkn';
        return 'matematika';
    }

    // Inisialisasi otomatis
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            const mapel = autoDetectMapel();
            initEmojiBackground(mapel);
        });
    } else {
        const mapel = autoDetectMapel();
        initEmojiBackground(mapel);
    }
})();