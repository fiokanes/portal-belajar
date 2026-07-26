# 🚀 Panduan Install Git & Push ke GitHub

## Langkah 1: Download Git

Buka link berikut di browser:
```
https://git-scm.com/download/win
```

Klik tombol **"Click here to download"** untuk versi terbaru.

## Langkah 2: Install Git

1. Buka file `.exe` yang sudah di-download
2. Klik **Next** untuk semua opsi (gunakan default)
3. Pastikan opsi **"Add Git to PATH"** tercentang ✅
4. Klik **Install**
5. Tunggu hingga selesai, lalu klik **Finish**

## Langkah 3: Verifikasi Instalasi

Buka **Command Prompt** atau **PowerShell**, lalu ketik:
```bash
git --version
```

Jika muncul versi Git (contoh: `git version 2.42.0`), berarti berhasil!

## Langkah 4: Push ke GitHub

Buka **Command Prompt** atau **PowerShell**, lalu jalankan perintah berikut satu per satu:

```bash
cd /d D:\belajarAI\matematika
```

```bash
git init
```

```bash
git remote add origin https://github.com/fiokanes/portal-belajar.git
```

```bash
git add .
```

```bash
git commit -m "Initial commit: Portal Belajar Fiona"
```

```bash
git branch -M main
```

```bash
git push -u origin main
```

## Langkah 5: Masukkan Credentials

Jika diminta login:
- **Username:** `fiokanes`
- **Password:** Gunakan **Personal Access Token**

### Cara Mendapatkan Personal Access Token:
1. Buka https://github.com/settings/tokens
2. Klik **"Generate new token (classic)"**
3. Beri nama: `portal-belajar`
4. Centang opsi **repo** (Full control of private repositories)
5. Klik **"Generate token"**
6. **Copy token** dan paste sebagai password

## Langkah 6: Aktifkan GitHub Pages (Opsional)

Agar website bisa diakses online:
1. Buka https://github.com/fiokanes/portal-belajar
2. Klik **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main**, folder: **/ (root)**
5. Klik **Save**

Website akan live di:
```
https://fiokanes.github.io/portal-belajar/
```

---

## 📁 File yang Akan di-Push:

| File | Deskripsi |
|------|-----------|
| `index.html` | Portal utama |
| `belajar-aritmatika.html` | Matematika |
| `sistem-pencernaan.html` | Biologi |
| `geografis-indonesia.html` | Geografi |
| `english-tenses.html` | Bahasa Inggris |

---

## ❓ Troubleshooting

### Error: "git is not recognized"
- Restart Command Prompt setelah install Git
- Pastikan Git ada di PATH

### Error: "Permission denied"
- Gunakan Personal Access Token, bukan password

### Error: "Repository not found"
- Pastikan repository sudah dibuat di GitHub
- Cek URL repository

---

Selamat! 🎉 Portal Belajar Fiona sudah online!
