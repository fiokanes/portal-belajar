/**
 * Tombol Ganti Mapel Konsisten
 * Tambahkan script ini di setiap halaman untuk tombol ganti mapel yang sama
 */

(function() {
    // CSS untuk tombol ganti mapel
    const css = `
        .mapel-switcher {
            position: fixed; top: 20px; right: 20px; z-index: 1000;
        }

        .mapel-switcher-btn {
            background: rgba(255,255,255,0.95); padding: 12px 20px; border-radius: 30px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2); display: flex; align-items: center; gap: 10px;
            text-decoration: none; color: #333; font-weight: bold; font-size: 1rem;
            transition: all 0.3s ease; backdrop-filter: blur(10px); cursor: pointer; border: none;
        }

        .mapel-switcher-btn:hover { 
            transform: translateY(-3px); 
            box-shadow: 0 8px 30px rgba(0,0,0,0.3); 
            background: white; 
        }

        .mapel-dropdown {
            display: none; position: absolute; top: 100%; right: 0; margin-top: 10px;
            background: white; border-radius: 15px; box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            min-width: 280px; overflow: hidden; animation: fadeInMapel 0.3s ease;
        }

        @keyframes fadeInMapel { 
            from { opacity: 0; transform: translateY(-10px); } 
            to { opacity: 1; transform: translateY(0); } 
        }

        .mapel-dropdown.show { display: block; }

        .mapel-dropdown a {
            display: flex; align-items: center; gap: 12px; padding: 15px 20px;
            text-decoration: none; color: #333; transition: all 0.3s ease; 
            border-bottom: 1px solid #f0f0f0;
        }

        .mapel-dropdown a:hover { background: #f5f5f5; }
        .mapel-dropdown a:last-child { border-bottom: none; }
        .mapel-dropdown a .mapel-icon { font-size: 1.5em; }
        .mapel-dropdown a .mapel-name { font-weight: 500; }

        .mapel-dropdown-title {
            padding: 15px 20px; background: #f8f9fa; font-weight: bold; 
            color: #666; font-size: 0.9em; border-bottom: 2px solid #e0e0e0;
        }

        @media (max-width: 768px) {
            .mapel-switcher { top: 70px; right: 10px; }
            .mapel-switcher-btn { padding: 10px 15px; font-size: 0.9rem; }
            .mapel-dropdown { min-width: 250px; }
        }
    `;

    // HTML untuk tombol ganti mapel
    const html = `
        <div class="mapel-switcher">
            <button class="mapel-switcher-btn" onclick="toggleMapelDropdown()">
                📚 Ganti Mapel ▼
            </button>
            <div class="mapel-dropdown" id="mapelDropdown">
                <div class="mapel-dropdown-title">📚 Pilih Mata Pelajaran</div>
                <a href="belajar-aritmatika.html"><span class="mapel-icon">🔢</span><span class="mapel-name">Matematika</span></a>
                <a href="ipa-biologi.html"><span class="mapel-icon">🧬</span><span class="mapel-name">Biologi</span></a>
                <a href="ipa-fisika.html"><span class="mapel-icon">⚡</span><span class="mapel-name">Fisika</span></a>
                <a href="geografis-indonesia.html"><span class="mapel-icon">🇮🇩</span><span class="mapel-name">Geografi</span></a>
                <a href="english-tenses.html"><span class="mapel-icon">🇬🇧</span><span class="mapel-name">Bahasa Inggris</span></a>
                <a href="aksara-jawa.html"><span class="mapel-icon">📜</span><span class="mapel-name">Aksara Jawa</span></a>
                <a href="bahasa-indonesia.html"><span class="mapel-icon">📝</span><span class="mapel-name">Bahasa Indonesia</span></a>
                <a href="ppkn-pancasila.html"><span class="mapel-icon">🇮🇩</span><span class="mapel-name">PPKn</span></a>
            </div>
        </div>
    `;

    // Fungsi untuk toggle dropdown
    window.toggleMapelDropdown = function() {
        const dropdown = document.getElementById('mapelDropdown');
        if (dropdown) {
            dropdown.classList.toggle('show');
        }
    };

    // Tutup dropdown saat klik di luar
    document.addEventListener('click', function(event) {
        const switcher = document.querySelector('.mapel-switcher');
        if (switcher && !switcher.contains(event.target)) {
            const dropdown = document.getElementById('mapelDropdown');
            if (dropdown) {
                dropdown.classList.remove('show');
            }
        }
    });

    // Inisialisasi
    function init() {
        // Tambahkan CSS
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);

        // Tambahkan HTML
        const container = document.createElement('div');
        container.innerHTML = html;
        document.body.appendChild(container.firstElementChild);
    }

    // Jalankan saat halaman dimuat
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();