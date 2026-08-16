/**
 * ==========================================
 * PORTAL NAV v1.0 — Portal Belajar Fiona
 * Navigasi terpusat: top bar + breadcrumb + tab bar + nav antar bab
 * Semua data navigasi ada di file ini (satu tempat)
 * ==========================================
 */

// ============ KONFIGURASI NAVIGASI SEMUA HALAMAN ============
// kind: home | mapel | submapel | bab | kuis | progres | lain
const NAV_CONFIG = {
    'index.html':               { label: 'Beranda', icon: '🏠', parent: null, kind: 'home' },

    // ==== HALAMAN MAPEL (8) ====
    'matematika.html':          { label: 'Matematika', icon: '🔢', parent: 'index.html', kind: 'mapel', mapel: 'matematika' },
    'ipa.html':                 { label: 'IPA', icon: '🔬', parent: 'index.html', kind: 'mapel', mapel: 'ipa' },
    'ips.html':                 { label: 'IPS', icon: '🌏', parent: 'index.html', kind: 'mapel', mapel: 'ips' },
    'english.html':             { label: 'English', icon: '🇬🇧', parent: 'index.html', kind: 'mapel', mapel: 'english' },
    'bahasa-jawa.html':         { label: 'Bahasa Jawa', icon: '📜', parent: 'index.html', kind: 'mapel', mapel: 'jawa' },
    'bahasa-indonesia.html':    { label: 'B. Indonesia', icon: '📝', parent: 'index.html', kind: 'mapel', mapel: 'bindo' },
    'ppkn.html':                { label: 'PPKn', icon: '🇮🇩', parent: 'index.html', kind: 'mapel', mapel: 'ppkn' },
    'informatika.html':         { label: 'Informatika', icon: '💻', parent: 'index.html', kind: 'mapel', mapel: 'info' },

    // ==== SUB-MAPEL IPA ====
    'ipa-biologi.html':         { label: 'Biologi', icon: '🧬', parent: 'ipa.html', kind: 'submapel', mapel: 'bio' },
    'ipa-fisika.html':          { label: 'Fisika', icon: '⚡', parent: 'ipa.html', kind: 'submapel', mapel: 'fisika' },
    'ipa-biologi-bab1.html':    { label: 'Materi Bab 1', icon: '📚', parent: 'ipa-biologi.html', kind: 'submapel', mapel: 'bio' },
    'ipa-biologi-bab2.html':    { label: 'Materi Bab 2', icon: '📚', parent: 'ipa-biologi.html', kind: 'submapel', mapel: 'bio' },

    // ==== BAB MATEMATIKA ====
    'mtk-bab1.html':            { label: 'Bab 1: Pola Bilangan', icon: '🔢', parent: 'matematika.html', kind: 'bab', mapel: 'matematika', bab: 'bab1' },
    'mtk-bab2.html':            { label: 'Bab 2: Berpangkat & Akar', icon: '💪', parent: 'matematika.html', kind: 'bab', mapel: 'matematika', bab: 'bab2' },
    'mtk-bab3.html':            { label: 'Bab 3: Pythagoras', icon: '📐', parent: 'matematika.html', kind: 'bab', mapel: 'matematika', bab: 'bab3' },
    'mtk-bab4.html':            { label: 'Bab 4: Persamaan Linear', icon: '⚖️', parent: 'matematika.html', kind: 'bab', mapel: 'matematika', bab: 'bab4' },
    'mtk-bab5.html':            { label: 'Bab 5: Relasi & Fungsi', icon: '🔗', parent: 'matematika.html', kind: 'bab', mapel: 'matematika', bab: 'bab5' },
    'mtk-bab6.html':            { label: 'Bab 6: Garis Lurus', icon: '📈', parent: 'matematika.html', kind: 'bab', mapel: 'matematika', bab: 'bab6' },
    'mtk-bab7.html':            { label: 'Bab 7: Statistika', icon: '📊', parent: 'matematika.html', kind: 'bab', mapel: 'matematika', bab: 'bab7' },

    // ==== BAB BIOLOGI ====
    'biologi-bab1.html':        { label: 'Bab 1: Sistem Organ', icon: '🫀', parent: 'ipa-biologi.html', kind: 'bab', mapel: 'bio', bab: 'bab1' },
    'biologi-bab2.html':        { label: 'Bab 2: Pernapasan & Ekskresi', icon: '🫁', parent: 'ipa-biologi.html', kind: 'bab', mapel: 'bio', bab: 'bab2' },
    'sistem-pencernaan.html':   { label: 'Sistem Pencernaan', icon: '🍎', parent: 'biologi-bab1.html', kind: 'bab', mapel: 'bio', bab: 'pencernaan' },
    'sistem-peredaran-darah.html': { label: 'Sistem Peredaran Darah', icon: '❤️', parent: 'biologi-bab1.html', kind: 'bab', mapel: 'bio', bab: 'darah' },
    'sistem-pernapasan.html':   { label: 'Sistem Pernapasan', icon: '🫁', parent: 'biologi-bab2.html', kind: 'bab', mapel: 'bio', bab: 'pernapasan' },
    'sistem-ekskresi.html':     { label: 'Sistem Ekskresi', icon: '🫘', parent: 'biologi-bab2.html', kind: 'bab', mapel: 'bio', bab: 'ekskresi' },

    // ==== BAB FISIKA ====
    'fisika-bab1.html':         { label: 'Bab 1: Usaha & Energi', icon: '⚡', parent: 'ipa-fisika.html', kind: 'bab', mapel: 'fisika', bab: 'bab1' },
    'fisika-bab2.html':         { label: 'Bab 2: Tekanan', icon: '💧', parent: 'ipa-fisika.html', kind: 'bab', mapel: 'fisika', bab: 'bab2' },

    // ==== BAB IPS ====
    'ips-bab1.html':            { label: 'Bab 1: Kondisi Geografis', icon: '🗺️', parent: 'ips.html', kind: 'bab', mapel: 'ips', bab: 'bab1' },
    'ips-bab2.html':            { label: 'Bab 2: Kemajemukan Masyarakat', icon: '👥', parent: 'ips.html', kind: 'bab', mapel: 'ips', bab: 'bab2' },
    'ips-bab3.html':            { label: 'Bab 3: Nasionalisme', icon: '🇮🇩', parent: 'ips.html', kind: 'bab', mapel: 'ips', bab: 'bab3' },
    'ips-bab4.html':            { label: 'Bab 4: Pembangunan Ekonomi', icon: '📈', parent: 'ips.html', kind: 'bab', mapel: 'ips', bab: 'bab4' },
    'geografis-indonesia.html': { label: 'Simulasi Geografis', icon: '🌍', parent: 'ips-bab1.html', kind: 'bab', mapel: 'ips', bab: 'simulasi' },

    // ==== BAB ENGLISH ====
    'english-tenses.html':      { label: 'Tenses', icon: '⏰', parent: 'english.html', kind: 'bab', mapel: 'eng', bab: 'tenses' },
    'english-bab2.html':        { label: 'Bab 2: Independence Day', icon: '🇮🇩', parent: 'english.html', kind: 'bab', mapel: 'eng', bab: 'bab2' },
    'english-bab3.html':        { label: 'Bab 3: Kindness', icon: '💚', parent: 'english.html', kind: 'bab', mapel: 'eng', bab: 'bab3' },
    'english-bab4.html':        { label: 'Bab 4: Love Our World', icon: '🌍', parent: 'english.html', kind: 'bab', mapel: 'eng', bab: 'bab4' },
    'english-bab5.html':        { label: 'Bab 5: No Littering', icon: '🚯', parent: 'english.html', kind: 'bab', mapel: 'eng', bab: 'bab5' },
    'english-bab6.html':        { label: 'Bab 6: Embrace Yourself', icon: '💪', parent: 'english.html', kind: 'bab', mapel: 'eng', bab: 'bab6' },

    // ==== BAB BAHASA JAWA ====
    'aksara-jawa.html':         { label: 'Aksara Jawa', icon: '✍️', parent: 'bahasa-jawa.html', kind: 'bab', mapel: 'jawa', bab: 'aksara' },
    'bahasa-jawa-bab1.html':    { label: 'Bab 1: Aksara Jawa', icon: '✍️', parent: 'bahasa-jawa.html', kind: 'bab', mapel: 'jawa', bab: 'bab1' },
    'bahasa-jawa-bab2.html':    { label: 'Bab 2: Crita Legenda', icon: '📖', parent: 'bahasa-jawa.html', kind: 'bab', mapel: 'jawa', bab: 'bab2' },
    'bahasa-jawa-bab3.html':    { label: 'Bab 3: Serat Wulangreh', icon: '📜', parent: 'bahasa-jawa.html', kind: 'bab', mapel: 'jawa', bab: 'bab3' },
    'bahasa-jawa-bab4.html':    { label: 'Bab 4: Pawarta', icon: '📰', parent: 'bahasa-jawa.html', kind: 'bab', mapel: 'jawa', bab: 'bab4' },
    'bahasa-jawa-bab5.html':    { label: 'Bab 5: Pariwara', icon: '📋', parent: 'bahasa-jawa.html', kind: 'bab', mapel: 'jawa', bab: 'bab5' },

    // ==== BAB PPKN ====
    'ppkn-pancasila.html':      { label: 'Pancasila', icon: '⭐', parent: 'ppkn.html', kind: 'bab', mapel: 'ppkn', bab: 'pancasila' },
    'ppkn-bab1.html':           { label: 'Bab 1: Pancasila', icon: '⭐', parent: 'ppkn.html', kind: 'bab', mapel: 'ppkn', bab: 'bab1' },
    'ppkn-bab2.html':           { label: 'Bab 2: Pedoman Negara', icon: '📜', parent: 'ppkn.html', kind: 'bab', mapel: 'ppkn', bab: 'bab2' },
    'ppkn-bab3.html':           { label: 'Bab 3: Peraturan', icon: '⚖️', parent: 'ppkn.html', kind: 'bab', mapel: 'ppkn', bab: 'bab3' },

    // ==== HALAMAN LAIN ====
    'belajar-aritmatika.html':  { label: 'Belajar Aritmatika', icon: '🧮', parent: 'matematika.html', kind: 'lain', mapel: 'matematika' },

    // ==== BAB INFORMATIKA ====
    'informatika-bab1.html':    { label: 'Bab 1: Analisis Data', icon: '📊', parent: 'informatika.html', kind: 'bab', mapel: 'info', bab: 'bab1' },
    'informatika-bab2.html':    { label: 'Bab 2: Berpikir Komputasional', icon: '🧠', parent: 'informatika.html', kind: 'bab', mapel: 'info', bab: 'bab2' },
    'informatika-bab3.html':    { label: 'Bab 3: Algoritma', icon: '⌨️', parent: 'informatika.html', kind: 'bab', mapel: 'info', bab: 'bab3' },

    // ==== PYTHON ====
    'python.html':              { label: 'Belajar Python', icon: '🐍', parent: 'index.html', kind: 'mapel', mapel: 'python' },
    'python-bab1.html':         { label: 'Program 1: Hello World', icon: '👋', parent: 'python.html', kind: 'bab', mapel: 'python', bab: 'bab1' },
    'python-bab2.html':         { label: 'Program 2: Luas Persegi', icon: '📐', parent: 'python.html', kind: 'bab', mapel: 'python', bab: 'bab2' },
    'python-bab3.html':         { label: 'Program 3: Keliling Persegi', icon: '➗', parent: 'python.html', kind: 'bab', mapel: 'python', bab: 'bab3' },
    'python-bab4.html':         { label: 'Program 4: Luas Persegi Panjang', icon: '📏', parent: 'python.html', kind: 'bab', mapel: 'python', bab: 'bab4' },
    'python-bab5.html':         { label: 'Program 5: Program Kasir', icon: '🏪', parent: 'python.html', kind: 'bab', mapel: 'python', bab: 'bab5' },

    // ==== KUIS (4) ====
    'kuis-matematika.html':     { label: 'Kuis Matematika', icon: '🔢', parent: 'index.html', kind: 'kuis', mapel: 'matematika' },
    'kuis-biologi.html':        { label: 'Kuis Biologi', icon: '🧬', parent: 'index.html', kind: 'kuis', mapel: 'bio' },
    'kuis-fisika.html':         { label: 'Kuis Fisika', icon: '⚡', parent: 'index.html', kind: 'kuis', mapel: 'fisika' },
    'kuis-ppkn.html':           { label: 'Kuis PPKn', icon: '🇮🇩', parent: 'index.html', kind: 'kuis', mapel: 'ppkn' },

    // ==== PROGRES ====
    'progres.html':             { label: 'Progres Belajar', icon: '🏆', parent: 'index.html', kind: 'progres' }
};

// ============ URUTAN BAB (untuk tombol ◀ Sebelumnya / Berikutnya ▶) ============
const BAB_SEQUENCE = {
    'matematika': ['mtk-bab1.html', 'mtk-bab2.html', 'mtk-bab3.html', 'mtk-bab4.html', 'mtk-bab5.html', 'mtk-bab6.html', 'mtk-bab7.html'],
    'bio': ['biologi-bab1.html', 'biologi-bab2.html', 'sistem-pencernaan.html', 'sistem-peredaran-darah.html', 'sistem-pernapasan.html', 'sistem-ekskresi.html'],
    'fisika': ['fisika-bab1.html', 'fisika-bab2.html'],
    'ips': ['ips-bab1.html', 'ips-bab2.html', 'ips-bab3.html', 'ips-bab4.html', 'geografis-indonesia.html'],
    'eng': ['english-tenses.html', 'english-bab2.html', 'english-bab3.html', 'english-bab4.html', 'english-bab5.html', 'english-bab6.html'],
    'jawa': ['aksara-jawa.html', 'bahasa-jawa-bab1.html', 'bahasa-jawa-bab2.html', 'bahasa-jawa-bab3.html', 'bahasa-jawa-bab4.html', 'bahasa-jawa-bab5.html'],
    'ppkn': ['ppkn-pancasila.html', 'ppkn-bab1.html', 'ppkn-bab2.html', 'ppkn-bab3.html'],
    'info': ['informatika-bab1.html', 'informatika-bab2.html', 'informatika-bab3.html'],
    'python': ['python-bab1.html', 'python-bab2.html', 'python-bab3.html', 'python-bab4.html', 'python-bab5.html']
};

// ============ UTIL ============
function pbCurrentFile() {
    return window.location.pathname.split('/').pop() || 'index.html';
}
function pbEscape(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function pbFindConfig(file) {
    return NAV_CONFIG[file] || { label: document.title || 'Halaman', icon: '📄', parent: 'index.html', kind: 'lain' };
}

// ============ TOP BAR + BREADCRUMB ============
function pbBuildBreadcrumb(file) {
    const crumbs = [];
    let current = file;
    let guard = 0;
    while (current && guard < 10) {
        const cfg = NAV_CONFIG[current];
        if (!cfg) break;
        crumbs.unshift({ file: current, label: cfg.label, icon: cfg.icon });
        current = cfg.parent;
        guard++;
    }
    // Pastikan beranda paling kiri
    if (crumbs.length && crumbs[0].file !== 'index.html') {
        crumbs.unshift({ file: 'index.html', label: 'Beranda', icon: '🏠' });
    }
    return crumbs;
}

function pbInjectTopBar() {
    if (document.querySelector('.top-bar')) return;
    const file = pbCurrentFile();
    const crumbs = pbBuildBreadcrumb(file);
    const crumbHTML = crumbs.map((c, i) => {
        const isLast = i === crumbs.length - 1;
        const sep = isLast ? '' : '<span class="sep">›</span>';
        const label = (c.icon ? c.icon + ' ' : '') + pbEscape(c.label);
        if (isLast) return `<span class="current">${label}</span>${sep}`;
        return `<a href="${c.file}">${label}</a>${sep}`;
    }).join('');

    const bar = document.createElement('div');
    bar.className = 'top-bar';
    bar.innerHTML = `
        <a class="tb-logo" href="index.html" title="Beranda">📚</a>
        <nav class="breadcrumb">${crumbHTML}</nav>
        <div class="tb-xp" id="tbXP" onclick="location.href='progres.html'" title="Lihat progresmu">⭐ <span id="tbXPNum">0</span> XP</div>
    `;
    document.body.prepend(bar);
    pbRefreshXP();
}

function pbRefreshXP() {
    const el = document.getElementById('tbXPNum');
    if (el && typeof ProgressSystem !== 'undefined') el.textContent = ProgressSystem.getXP();
}

// ============ TAB BAR BAWAH ============
function pbInjectTabBar() {
    if (document.querySelector('.tab-bar')) return;
    const file = pbCurrentFile();
    const cfg = pbFindConfig(file);
    const kind = cfg.kind;

    const tabs = [
        { file: 'index.html', icon: '🏠', label: 'Beranda' },
        { file: 'matematika.html', icon: '📚', label: 'Materi' },
        { file: 'kuis-matematika.html', icon: '🎯', label: 'Kuis' },
        { file: 'progres.html', icon: '🏆', label: 'Progres' }
    ];
    const activeFile = (kind === 'mapel' || kind === 'submapel' || kind === 'bab' || kind === 'lain') ? 'matematika.html'
        : (kind === 'kuis') ? 'kuis-matematika.html'
        : (kind === 'progres') ? 'progres.html'
        : 'index.html';

    const bar = document.createElement('nav');
    bar.className = 'tab-bar';
    bar.innerHTML = tabs.map(t => `
        <a href="${t.file}" class="${t.file === activeFile ? 'active' : ''}">
            <span class="tab-icon">${t.icon}</span>
            <span>${t.label}</span>
        </a>
    `).join('');
    document.body.appendChild(bar);
}

// ============ NAV ANTAR BAB (◀ Sebelumnya / ✅ Selesai / Berikutnya ▶) ============
function pbInjectBabNav() {
    if (document.querySelector('.bab-nav')) return;
    const file = pbCurrentFile();
    const cfg = pbFindConfig(file);
    if (cfg.kind !== 'bab' || !cfg.mapel) return;

    const seq = BAB_SEQUENCE[cfg.mapel] || [];
    const idx = seq.indexOf(file);
    if (idx === -1) return;

    const prev = idx > 0 ? seq[idx - 1] : null;
    const next = idx < seq.length - 1 ? seq[idx + 1] : null;
    const prevCfg = prev ? NAV_CONFIG[prev] : null;
    const nextCfg = next ? NAV_CONFIG[next] : null;
    const done = typeof ProgressSystem !== 'undefined' && ProgressSystem.isBabDone(cfg.mapel, cfg.bab);

    const nav = document.createElement('div');
    nav.className = 'bab-nav';
    nav.innerHTML = `
        ${prev ? `<a class="btn btn-soft btn-nav" href="${prev}">◀ ${prevCfg.icon} ${pbEscape(prevCfg.label.replace(/^Bab \d+:\s*/, ''))}</a>` : '<span></span>'}
        <span class="spacer"></span>
        <button class="btn mark-done-btn${done ? ' done' : ''}" id="pbMarkDone">
            ${done ? '✅ Sudah Selesai' : '✅ Tandai Selesai (+20 XP)'}
        </button>
        <span class="spacer"></span>
        ${next ? `<a class="btn btn-soft btn-nav" href="${next}">${pbEscape(nextCfg.label.replace(/^Bab \d+:\s*/, ''))} ${nextCfg.icon} ▶</a>` : '<span></span>'}
    `;
    // Sisipkan setelah <main> (atau sebelum footer)
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    if (main && main.parentNode) {
        main.parentNode.insertBefore(nav, main.nextSibling);
    } else if (footer && footer.parentNode) {
        footer.parentNode.insertBefore(nav, footer);
    } else {
        document.body.appendChild(nav);
    }

    const btn = document.getElementById('pbMarkDone');
    if (btn) {
        btn.addEventListener('click', function() {
            const res = ProgressSystem.markBabDone(cfg.mapel, cfg.bab);
            this.classList.add('done');
            this.textContent = '✅ Sudah Selesai';
            pbRefreshXP();
            // Simpan posisi terakhir
            ProgressSystem.setLastVisit(cfg.mapel, cfg.bab, file, cfg.label);
            if (window.AudioSystem) window.AudioSystem.playSuccess();
            if (res.isNew) {
                alert('🎉 +' + res.xp + ' XP! Bab ditandai selesai. Lanjutkan semangatmu!');
            }
        });
    }
}

// ============ REKAM POSISI BELAJAR (Lanjut Belajar) ============
function pbRecordVisit() {
    const file = pbCurrentFile();
    const cfg = pbFindConfig(file);
    if (cfg.kind === 'bab' && typeof ProgressSystem !== 'undefined') {
        ProgressSystem.setLastVisit(cfg.mapel, cfg.bab, file, cfg.label);
    }
}

// ============ RENDER "LANJUT BELAJAR" DI BERANDA ============
function pbRenderContinueCard(containerId) {
    const container = document.getElementById(containerId);
    if (!container || typeof ProgressSystem === 'undefined') return;
    const last = ProgressSystem.getLastVisit();
    if (!last) {
        container.innerHTML = `
            <a class="continue-card" href="matematika.html">
                <div class="cc-icon">🚀</div>
                <div class="cc-info">
                    <div class="cc-label">Mulai Petualanganmu</div>
                    <div class="cc-title">Pilih mapel pertamamu dan mulai belajar!</div>
                </div>
                <span class="cc-arrow">→</span>
            </a>`;
        return;
    }
    const cfg = NAV_CONFIG[last.href] || null;
    const done = ProgressSystem.isBabDone(last.mapel, last.babId);
    container.innerHTML = `
        <a class="continue-card" href="${last.href}">
            <div class="cc-icon">${cfg ? cfg.icon : '📖'}</div>
            <div class="cc-info">
                <div class="cc-label">Lanjut Belajar</div>
                <div class="cc-title">${pbEscape(last.label)}</div>
                <div class="progress-track"><div class="progress-fill" style="width:${done ? 100 : 40}%"></div></div>
            </div>
            <span class="cc-arrow">→</span>
        </a>`;
}

// ============ DEKORASI STATUS BAB DI HALAMAN MAPEL ============
// Menandai kartu bab yang sudah selesai (✅) + bar progres per mapel
function pbDecorateBabCards() {
    if (typeof ProgressSystem === 'undefined') return;
    document.querySelectorAll('a.bab-card, a[href$=".html"]').forEach(card => {
        const href = card.getAttribute('href');
        const cfg = NAV_CONFIG[href];
        if (!cfg || cfg.kind !== 'bab' || !cfg.mapel || !cfg.bab) return;
        if (ProgressSystem.isBabDone(cfg.mapel, cfg.bab)) {
            card.classList.add('done');
        }
    });
}

function pbInjectMapelProgress() {
    if (typeof ProgressSystem === 'undefined') return;
    const file = pbCurrentFile();
    const cfg = NAV_CONFIG[file];
    if (!cfg || (cfg.kind !== 'mapel' && cfg.kind !== 'submapel') || !cfg.mapel) return;
    const seq = BAB_SEQUENCE[cfg.mapel] || [];
    if (!seq.length) return;
    let done = 0;
    seq.forEach(f => {
        const c = NAV_CONFIG[f];
        if (c && ProgressSystem.isBabDone(cfg.mapel, c.bab)) done++;
    });
    const pct = Math.round(done / seq.length * 100);
    const bar = document.createElement('div');
    bar.className = 'mapel-progress';
    bar.innerHTML = `
        <div class="mp-head">
            <strong>📈 Progres Belajarmu</strong>
            <span class="mp-count">${done}/${seq.length} bab · ${pct}%</span>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
    `;
    const main = document.querySelector('main');
    if (main) {
        if (main.firstChild) main.insertBefore(bar, main.firstChild);
        else main.appendChild(bar);
    }
}

// ============ TAB SEKSI MATERI (halaman bab) ============
// Membuat tab lompat dari judul seksi (h2) yang ada di halaman
function pbInjectSectionTabs() {
    if (document.querySelector('.sec-tabs')) return;
    const file = pbCurrentFile();
    const cfg = NAV_CONFIG[file];
    if (!cfg || cfg.kind !== 'bab') return;
    const main = document.querySelector('main');
    if (!main) return;
    const targets = [];
    main.querySelectorAll('h2').forEach(h2 => {
        const text = (h2.textContent || '').trim();
        if (!text) return;
        if (!h2.id) h2.id = 'pbsec-' + targets.length;
        targets.push({ id: h2.id, text: text.replace(/\s+/g, ' ') });
    });
    if (targets.length < 2) return;
    const tabs = document.createElement('nav');
    tabs.className = 'sec-tabs';
    tabs.innerHTML = targets.map((t, i) =>
        `<a href="#${t.id}" class="${i === 0 ? 'active' : ''}">${pbEscape(t.text)}</a>`
    ).join('');
    // Sisipkan di awal main, setelah bar progres (jika ada)
    const progressBar = main.querySelector('.mapel-progress');
    if (progressBar && progressBar.nextSibling) main.insertBefore(tabs, progressBar.nextSibling);
    else main.insertBefore(tabs, main.firstChild);
}

// ============ INISIALISASI ============
function pbInit() {
    if (document.getElementById('pbNavInjected')) return;
    document.body.dataset.pbNav = '1';
    pbInjectTopBar();
    pbInjectTabBar();
    pbInjectBabNav();
    pbInjectMapelProgress();
    pbInjectSectionTabs();
    pbDecorateBabCards();
    pbRecordVisit();
    // Refresh XP saat kuis selesai (event dari sistem quiz)
    document.addEventListener('pb-xp-updated', pbRefreshXP);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', pbInit);
} else {
    pbInit();
}
