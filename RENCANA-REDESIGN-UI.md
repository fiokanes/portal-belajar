# 🎨 RENCANA REDESIGN UI — PORTAL BELAJAR FIONA v2

> **Tujuan:** Membuat siswa SMP mudah mengakses dan bernavigasi di seluruh portal.
> **Gaya:** Tetap ceria & warna-warni (sesuai keputusan).
> **Cakupan:** Semua halaman (54 file HTML) + fitur baru (Lanjut Belajar, XP, Progres).

---

## 1. Prinsip Desain (untuk Siswa SMP)

| # | Prinsip | Artinya |
|---|---------|---------|
| 1 | **Jempol dulu** | Tombol minimal 48px, ramah HP (siswa mayoritas buka dari HP) |
| 2 | **Satu layar, satu tugas** | Jangan menjejalkan terlalu banyak pilihan |
| 3 | **Selalu tahu posisi** | Breadcrumb + warna mapel konsisten di semua halaman |
| 4 | **Jangan bikin mengingat** | Tombol "Lanjut Belajar" mengingat posisi terakhir |
| 5 | **Konsisten total** | 1 sistem desain untuk 54 halaman (bukan 54 versi) |
| 6 | **Ceria & warna-warni** | Gradasi warna per mapel, animasi, emoji — dipertahankan |

---

## 2. Arsitektur Teknis (3 File Baru)

### 2.1 `design-system.css` — Satu Sistem Desain
Menggantikan CSS inline yang diduplikasi di 54 halaman (total ±10.000 baris salinan!).

**Komponen yang disediakan:**
- `.top-bar` — bar atas lengket (sticky): logo mini + breadcrumb + XP
- `.breadcrumb` — jejak roti "Beranda › Matematika › Bab 1"
- `.tab-bar` — navigasi bawah 4 tab (Beranda, Materi, Kuis, Progres)
- `.bab-item` — baris daftar bab dengan status (✅ selesai / ▶ sedang / 🔒 belum)
- `.progress-bar` — batang kemajuan belajar
- `.btn-primary`, `.btn-soft`, `.btn-nav` — tombol besar ramah jempol
- `.card`, `.section-box` — versi sistem (menggantikan yang inline)
- `.quiz-badge`, `.chip` — label kecil

**Sistem warna per mapel (CSS variables):**
```css
:root {
  --m-primary: #00897b;                 /* warna utama mapel */
  --m-gradient: linear-gradient(135deg, #00695c, #009688);  /* header */
  --m-soft: #e0f2f1;                    /* latar lembut */
  --m-text: #00897b;                    /* teks aksen */
}
```
Setiap halaman mapel tinggal menimpa 4 variabel ini — **231 baris CSS → ~10 baris**.

**Tetap memakai `visual-effects.css`** (lapisan animasi: gelembung, ripple, parallax) — tidak dihapus.

### 2.2 `portal-nav.js` — Navigasi Terpusat
Semua data navigasi di SATU file (tidak perlu edit 54 halaman untuk breadcrumb).

```js
const NAV_CONFIG = {
  'matematika.html': { label: 'Matematika', icon: '🔢', parent: 'index.html' },
  'mtk-bab1.html':   { label: 'Bab 1: Pola Bilangan', parent: 'matematika.html' },
  // ... semua 54 halaman
};

const BAB_SEQUENCE = {
  'matematika': ['mtk-bab1.html', 'mtk-bab2.html', ..., 'mtk-bab7.html'],
  // ... urutan bab per mapel (untuk tombol ◀ Sebelumnya / Berikutnya ▶)
};
```

**Yang disuntikkan otomatis ke setiap halaman:**
1. Top bar + breadcrumb (dari NAV_CONFIG)
2. Bottom tab bar 4 tab (tab aktif sesuai halaman)
3. Tombol "◀ Bab Sebelumnya / Bab Berikutnya ▶" (dari BAB_SEQUENCE)
4. Tombol "✅ Tandai Selesai" di halaman bab (+XP)
5. Baca XP & tampilkan di top bar

### 2.3 `progress-system.js` — XP & Progres (localStorage)

| Key | Isi | Contoh |
|-----|-----|--------|
| `pb_xp` | Total XP | `125` |
| `pb_level` | Level (dihitung dari XP) | `3` |
| `pb_progress` | Bab selesai + skor | `{matematika: {bab1: {done: true, best: 80}}}` |
| `pb_last_visit` | Posisi belajar terakhir | `{mapel:'Matematika', bab:'Bab 3', href:'mtk-bab3.html'}` |

**Aturan XP:**
- Selesai kuis 5 soal → +10 XP
- Nilai 100 (sempurna) → bonus +5 XP
- Tandai bab selesai → +20 XP
- Level = setiap 50 XP naik 1 level (Level 1 = 0–49, dst.)

**Halaman baru `progres.html`** (tab "Progres"):
- Total XP, level, bar kemajuan
- Daftar mapel + bab yang sudah selesai
- Skor terbaik per bab

---

## 3. Desain Navigasi (Inti Perubahan)

### 3.1 Top Bar — semua halaman
```
┌────────────────────────────────────────────────┐
│ 🏠 Beranda › 📐 Matematika › Bab 1   🔊 ⭐ 125 │
└────────────────────────────────────────────────┘
```
- Breadcrumb setiap bagian bisa diklik
- Ikon suara + badge XP di kanan

### 3.2 Bottom Tab Bar — semua halaman (keputusan: YA)
```
┌────────────────────────────────────────────────┐
│ 🏠 Beranda   📚 Materi   🎯 Kuis   🏆 Progres  │
└────────────────────────────────────────────────┘
```
- Fixed di bawah, selalu terlihat di HP
- Tab aktif berwarna sesuai mapel
- Di desktop: tetap muncul (atau jadi sidebar kecil — diputuskan saat implementasi)

### 3.3 "Lanjut Belajar" — halaman Beranda
Kartu besar di atas daftar mapel, berisi posisi terakhir + progress bar.
Kalau belum pernah belajar → muncul "Pilih Mapel Pertamamu 🚀" sebagai pengganti.

### 3.4 Navigasi Antar-Bab — halaman bab
```
[◀ Bab 2: Pangkat]   [✅ Tandai Selesai]   [Bab 4: Pythagoras ▶]
```
Tanpa harus kembali ke halaman mapel.

### 3.5 Tab Seksi Materi — halaman bab
```
[📖 Materi] [📝 Rangkuman] [🧠 Kuis]
```
Anchor navigation ke bagian-bagian halaman (scroll halus).

---

## 4. Perubahan per Jenis Halaman

| Jenis | Jumlah | Perubahan |
|-------|--------|-----------|
| `index.html` (Beranda) | 1 | Header ramping, kartu "Lanjut Belajar", grid mapel sistem, tab bar |
| Halaman mapel | 8 | Top bar + breadcrumb, daftar bab dengan status, progress mapel, tab bar |
| Halaman bab | ±30 | Top bar, tab seksi materi, prev/next bab, tombol selesai, tab bar |
| Halaman kuis | 4 | Desain sistem, XP award, tab bar |
| Halaman English (gaya lama) | 6 | Upgrade dari `portal-styles.css` → `design-system.css` |
| Halaman khusus (aksara, sistem organ, dll.) | ±10 | Top bar + tab bar + CSS sistem |
| `progres.html` | 1 (BARU) | Statistik belajar siswa |

---

## 5. Urutan Pengerjaan (1 commit per fase)

- [x] **Fase 0** — Dokumen perencanaan ini ✅
- [x] **Fase 1** — Fondasi: `design-system.css` + `portal-nav.js` + `progress-system.js` + `progres.html` ✅
- [ ] **Fase 2** — `index.html` (Beranda + Lanjut Belajar + tab bar)
- [x] **Fase 3** — 8 halaman mapel (daftar bab + status) ✅
- [x] **Fase 4** — ±30 halaman bab (navigasi antar-bab + selesai + XP) ✅
- [x] **Fase 5** — 4 halaman kuis + upgrade 6 halaman English + halaman khusus ✅
- [x] **Fase 6** — QA menyeluruh (cek link, sintaks JS, tes Node, cek duplikasi CSS) ✅

---

## 6. Strategi Teknis Edit 54 Halaman

| Jenis edit | Metode |
|------------|--------|
| Tambah link CSS / script JS | Script otomatis (sed/python) — pola sama di semua file |
| Ganti header raksasa → top bar | Script untuk pola umum, manual untuk halaman unik |
| Ubah kelas CSS lama → kelas sistem | Bertahap per fase, cek visual |
| Data navigasi (NAV_CONFIG) | Satu tempat di `portal-nav.js` |

**Aturan aman:**
- Jangan menghapus fungsi JS yang ada (quiz, audio, visual) — hanya merapikan tampilan
- `visual-effects.css` tetap dimuat (animasi)
- Setiap fase di-commit agar bisa rollback
- Setiap fase dicek sintaks + link sebelum lanjut

---

## 7. Pengujian (QA)

1. `node --check` untuk semua file JS
2. Script cek link: semua `href`/`src` menunjuk file yang ada
3. Script cek duplikasi: tidak ada halaman dengan CSS inline > 50 baris (kecuali halaman unik)
4. Buka 5-6 halaman contoh di browser (beranda, mapel, bab, kuis, progres)
5. Tes alur navigasi anak SMP: Beranda → mapel → bab → kuis → progres, bolak-balik tanpa tersesat
6. Tes di ukuran HP (viewport 375px) & desktop

---

## 8. Risiko & Mitigasi

| Risiko | Mitigasi |
|--------|----------|
| Edit massal merusak halaman | Commit per fase + cek otomatis tiap fase |
| Bottom tab bar menutupi konten | `padding-bottom` pada body di design-system.css |
| localStorage tidak jalan (file://) | Fallback: fitur tetap tampil, hanya tidak tersimpan |
| Halaman English punya quiz inline sendiri | Tidak disentuh fungsinya, hanya gaya |
| Breadcrumb salah di halaman unik | NAV_CONFIG dikurasi manual untuk semua 54 file |

---

## 9. Hasil Akhir yang Diharapkan

- ✅ Semua 54 halaman konsisten secara visual
- ✅ Siswa selalu tahu posisi (breadcrumb) & punya jalan keluar (tab bar)
- ✅ Tidak perlu mengingat posisi belajar (Lanjut Belajar)
- ✅ Ada motivasi bermain (XP, level, progres)
- ✅ CSS duplikat ±10.000 baris → ±500 baris (mudah dirawat)
- ✅ Tetap ceria, warna-warni, dan menyenangkan 🎨✨
