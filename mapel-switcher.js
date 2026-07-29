/**
 * ==========================================
 * MAPEL SWITCHER v2.0
 * Tombol Ganti Mapel Modern di Kanan Atas
 * ==========================================
 */

(function() {
    const mapelList = [
        { icon: '🔢', name: 'Matematika', url: 'matematika.html', color: '#00897b' },
        { icon: '🔬', name: 'IPA', url: 'ipa.html', color: '#2e7d32' },
        { icon: '🌏', name: 'IPS', url: 'ips.html', color: '#c62828' },
        { icon: '🇬🇧', name: 'English', url: 'english.html', color: '#1565c0' },
        { icon: '📜', name: 'Bahasa Jawa', url: 'bahasa-jawa.html', color: '#4e342e' },
        { icon: '📝', name: 'B. Indonesia', url: 'bahasa-indonesia.html', color: '#b71c1c' },
        { icon: '🇮🇩', name: 'PPKn', url: 'ppkn.html', color: '#d32f2f' },
        { icon: '🏠', name: 'Portal Utama', url: 'index.html', color: '#1a237e' }
    ];

    const css = `
        .mapel-switcher-v2 {
            position: fixed;
            top: 15px;
            right: 15px;
            z-index: 9999;
            font-family: 'Poppins', 'Segoe UI', sans-serif;
        }

        .mapel-btn-v2 {
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 2px solid rgba(255,255,255,0.3);
            padding: 10px 18px;
            border-radius: 50px;
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 5px 20px rgba(0,0,0,0.15);
            font-family: inherit;
            font-size: 0.9rem;
            font-weight: 600;
            color: #333;
        }

        .mapel-btn-v2:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 30px rgba(0,0,0,0.25);
            background: white;
        }

        .mapel-btn-v2 .btn-icon {
            font-size: 1.2em;
            animation: spin 3s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .mapel-btn-v2:hover .btn-icon {
            animation: none;
        }

        .mapel-dropdown-v2 {
            display: none;
            position: absolute;
            top: calc(100% + 10px);
            right: 0;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.25);
            min-width: 260px;
            max-height: 75vh;
            overflow-y: auto;
            overflow-x: hidden;
            animation: dropIn 0.3s ease;
        }

        .mapel-dropdown-v2.show {
            display: block;
        }

        @keyframes dropIn {
            from { opacity: 0; transform: translateY(-10px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .mapel-dropdown-v2::-webkit-scrollbar {
            width: 6px;
        }

        .mapel-dropdown-v2::-webkit-scrollbar-track {
            background: transparent;
        }

        .mapel-dropdown-v2::-webkit-scrollbar-thumb {
            background: #ddd;
            border-radius: 10px;
        }

        .mapel-dropdown-v2::-webkit-scrollbar-thumb:hover {
            background: #bbb;
        }

        .dropdown-header-v2 {
            padding: 18px 20px;
            background: linear-gradient(135deg, #1a237e, #283593);
            color: white;
            font-weight: 700;
            font-size: 1rem;
            border-radius: 20px 20px 0 0;
            display: flex;
            align-items: center;
            gap: 10px;
            position: sticky;
            top: 0;
            z-index: 1;
        }

        .dropdown-header-v2 span {
            animation: bounce 1.5s ease-in-out infinite;
        }

        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
        }

        .mapel-item-v2 {
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 14px 20px;
            text-decoration: none;
            color: #333;
            transition: all 0.3s ease;
            border-bottom: 1px solid #f5f5f5;
        }

        .mapel-item-v2:last-child {
            border-bottom: none;
            border-radius: 0 0 20px 20px;
        }

        .mapel-item-v2:hover {
            background: #f8f9fa;
            padding-left: 25px;
        }

        .mapel-item-v2.active {
            background: linear-gradient(135deg, #e3f2fd, #ffffff);
            border-left: 4px solid #1a237e;
        }

        .mapel-item-v2 .item-icon {
            width: 42px;
            height: 42px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4em;
            flex-shrink: 0;
            transition: all 0.3s ease;
        }

        .mapel-item-v2:hover .item-icon {
            transform: scale(1.1) rotate(5deg);
        }

        .mapel-item-v2 .item-info {
            flex: 1;
        }

        .mapel-item-v2 .item-name {
            font-weight: 600;
            font-size: 0.95em;
            display: block;
        }

        .mapel-item-v2 .item-status {
            font-size: 0.75em;
            color: #888;
            display: block;
            margin-top: 2px;
        }

        .mapel-item-v2 .item-arrow {
            color: #ccc;
            transition: all 0.3s ease;
            font-size: 0.9em;
        }

        .mapel-item-v2:hover .item-arrow {
            color: #1a237e;
            transform: translateX(3px);
        }

        .mapel-overlay-v2 {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 9998;
        }

        .mapel-overlay-v2.show {
            display: block;
        }

        @media (max-width: 768px) {
            .mapel-switcher-v2 {
                top: 10px;
                right: 10px;
            }

            .mapel-btn-v2 {
                padding: 8px 14px;
                font-size: 0.85rem;
            }

            .mapel-dropdown-v2 {
                min-width: 240px;
                right: -5px;
            }

            .mapel-item-v2 {
                padding: 12px 15px;
            }
        }
    `;

    function init() {
        // Add CSS
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);

        // Detect current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        // Create HTML
        const container = document.createElement('div');
        container.innerHTML = `
            <div class="mapel-overlay-v2" id="mapelOverlay"></div>
            <div class="mapel-switcher-v2">
                <button class="mapel-btn-v2" id="mapelBtn">
                    <span class="btn-icon">📚</span>
                    <span class="btn-text">Ganti Mapel</span>
                    <span>▼</span>
                </button>
                <div class="mapel-dropdown-v2" id="mapelDropdown">
                    <div class="dropdown-header-v2">
                        <span>📚</span> Pilih Mata Pelajaran
                    </div>
                    ${mapelList.map(m => `
                        <a href="${m.url}" class="mapel-item-v2 ${currentPage === m.url ? 'active' : ''}">
                            <div class="item-icon" style="background: ${m.color}15; color: ${m.color}">
                                ${m.icon}
                            </div>
                            <div class="item-info">
                                <span class="item-name">${m.name}</span>
                                ${currentPage === m.url ? '<span class="item-status">📍 Sedang di sini</span>' : ''}
                            </div>
                            <span class="item-arrow">→</span>
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
        document.body.appendChild(container);

        // Event listeners
        const btn = document.getElementById('mapelBtn');
        const dropdown = document.getElementById('mapelDropdown');
        const overlay = document.getElementById('mapelOverlay');

        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleDropdown();
        });

        overlay.addEventListener('click', closeDropdown);

        // Close on click outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.mapel-switcher-v2')) {
                closeDropdown();
            }
        });

        // Close on ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeDropdown();
        });

        // Add click sound to items
        document.querySelectorAll('.mapel-item-v2').forEach(item => {
            item.addEventListener('click', function() {
                if (window.AudioSystem) window.AudioSystem.playNavigate();
            });
        });
    }

    function toggleDropdown() {
        const dropdown = document.getElementById('mapelDropdown');
        const overlay = document.getElementById('mapelOverlay');
        const isOpen = dropdown.classList.contains('show');

        if (isOpen) {
            closeDropdown();
        } else {
            dropdown.classList.add('show');
            overlay.classList.add('show');
            if (window.AudioSystem) window.AudioSystem.playPop();
        }
    }

    function closeDropdown() {
        const dropdown = document.getElementById('mapelDropdown');
        const overlay = document.getElementById('mapelOverlay');
        dropdown.classList.remove('show');
        overlay.classList.remove('show');
    }

    // Init
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Export
    window.MapelSwitcher = { toggle: toggleDropdown, close: closeDropdown };
})();
