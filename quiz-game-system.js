/**
 * Sistem Kuis dan Game Interaktif v2.0
 * Dengan lebih banyak variasi game dan sound effect
 */

// Database soal per mapel (diperbanyak)
const quizDatabase = {
    // Matematika (20 soal)
    matematika: [
        { question: "Hasil dari 15 + (-8) adalah...", options: ["A. 23", "B. 7", "C. -7", "D. -23"], answer: 1 },
        { question: "Hasil dari (-12) × 3 adalah...", options: ["A. 36", "B. -36", "C. -9", "D. 9"], answer: 1 },
        { question: "Hasil dari 24 : (-6) adalah...", options: ["A. 4", "B. -4", "C. -18", "D. 18"], answer: 1 },
        { question: "Bilangan yang lebih kecil dari -5 adalah...", options: ["A. -3", "B. 0", "C. -7", "D. 5"], answer: 2 },
        { question: "Hasil dari (-10) + (-15) adalah...", options: ["A. -25", "B. 25", "C. -5", "D. 5"], answer: 0 },
        { question: "Hasil dari 8 - (-12) adalah...", options: ["A. -4", "B. 4", "C. 20", "D. -20"], answer: 2 },
        { question: "Hasil dari (-3) × (-4) adalah...", options: ["A. -12", "B. 12", "C. -7", "D. 7"], answer: 1 },
        { question: "Hasil dari (-45) : 9 adalah...", options: ["A. 5", "B. -5", "C. -36", "D. 36"], answer: 1 },
        { question: "Urutan dari terkecil: -3, 5, -8, 0, -1", options: ["A. -8,-3,-1,0,5", "B. 5,0,-1,-3,-8", "C. -1,-3,-8,0,5", "D. 5,-1,0,-3,-8"], answer: 0 },
        { question: "Suhu di Jakarta 32°C, di Dieng 15°C. Selisihnya...", options: ["A. 47°C", "B. 17°C", "C. -17°C", "D. -47°C"], answer: 1 },
        { question: "Hasil dari (-5)² adalah...", options: ["A. -25", "B. 25", "C. -10", "D. 10"], answer: 1 },
        { question: "Hasil dari 100 : (-10) + 15 adalah...", options: ["A. -5", "B. 5", "C. 25", "D. -25"], answer: 1 },
        { question: "Nilai dari |−7| + |3| adalah...", options: ["A. -10", "B. 10", "C. -4", "D. 4"], answer: 1 },
        { question: "Hasil dari 2³ + 3² adalah...", options: ["A. 17", "B. 15", "C. 12", "D. 25"], answer: 0 },
        { question: "FPB dari 12 dan 18 adalah...", options: ["A. 2", "B. 3", "C. 6", "D. 9"], answer: 2 },
        { question: "KPK dari 8 dan 12 adalah...", options: ["A. 24", "B. 48", "C. 96", "D. 12"], answer: 0 },
        { question: "Hasil dari 1/2 + 1/3 adalah...", options: ["A. 2/5", "B. 5/6", "C. 1/5", "D. 3/5"], answer: 1 },
        { question: "Hasil dari 0,75 × 0,4 adalah...", options: ["A. 0.3", "B. 0.03", "C. 3", "D. 30"], answer: 0 },
        { question: "Jika 3x + 5 = 20, maka x = ...", options: ["A. 3", "B. 5", "C. 7", "D. 15"], answer: 1 },
        { question: "Luas persegi dengan sisi 7 cm adalah...", options: ["A. 14 cm²", "B. 28 cm²", "C. 49 cm²", "D. 21 cm²"], answer: 2 }
    ],

    // Biologi - Sistem Pencernaan (20 soal)
    biologi_pencernaan: [
        { question: "Organ pencernaan pertama yang dilewati makanan adalah...", options: ["A. Lambung", "B. Kerongkongan", "C. Mulut", "D. Usus halus"], answer: 2 },
        { question: "Enzim yang mencerna pati di mulut adalah...", options: ["A. Pepsin", "B. Amilase", "C. Lipase", "D. Tripsin"], answer: 1 },
        { question: "Pencernaan makanan terbanyak terjadi di...", options: ["A. Mulut", "B. Lambung", "C. Usus halus", "D. Usus besar"], answer: 2 },
        { question: "Fungsi utama usus besar adalah...", options: ["A. Mencerna makanan", "B. Menyerap air", "C. Menghasilkan empedu", "D. Menghasilkan enzim"], answer: 1 },
        { question: "Organ yang menghasilkan empedu adalah...", options: ["A. Lambung", "B. Pankreas", "C. Hati", "D. Usus halus"], answer: 2 },
        { question: "Gastritis adalah peradangan pada...", options: ["A. Hati", "B. Lambung", "C. Usus", "D. Pankreas"], answer: 1 },
        { question: "Gerakan otot di saluran pencernaan disebut...", options: ["A. Absorpsi", "B. Digesti", "C. Peristaltik", "D. Sekresi"], answer: 2 },
        { question: "Vitamin yang diserap bersama lemak adalah...", options: ["A. Vitamin C", "B. Vitamin B", "C. Vitamin A", "D. Semua vitamin"], answer: 2 },
        { question: "Pencernaan oleh gigi termasuk pencernaan...", options: ["A. Kimiawi", "B. Mekanis", "C. Biologis", "D. Fisika"], answer: 1 },
        { question: "Diabetes mellitus berkaitan dengan organ...", options: ["A. Hati", "B. Lambung", "C. Pankreas", "D. Ginjal"], answer: 2 },
        { question: "Enzim yang mengubah protein di lambung adalah...", options: ["A. Amilase", "B. Lipase", "C. Pepsin", "D. Tripsin"], answer: 2 },
        { question: "Villi usus halus berfungsi untuk...", options: ["A. Mencerna lemak", "B. Menyerap nutrisi", "C. Menghasilkan enzim", "D. Menyimpan makanan"], answer: 1 },
        { question: "Lambung menghasilkan asam...", options: ["A. Sulfat", "B. Klorida", "C. Nitrat", "D. Fosfat"], answer: 1 },
        { question: "Appendisitis adalah peradangan pada...", options: ["A. Usus halus", "B. Usus buntu", "C. Usus besar", "D. Lambung"], answer: 1 },
        { question: "Pankreas menghasilkan enzim...", options: ["A. Amilase saja", "B. Lipase saja", "C. Tripsin saja", "D. Berbagai enzim"], answer: 3 },
        { question: "Penyerapan alkohol terutama di...", options: ["A. Lambung", "B. Usus halus", "C. Hati", "D. Usus besar"], answer: 1 },
        { question: "Konstipasi terjadi karena...", options: ["A. Kelebihan air", "B. Kekurangan serat", "C. Kelebihan enzim", "D. Kekurangan lemak"], answer: 1 },
        { question: "Organ terakhir dalam saluran cerna adalah...", options: ["A. Usus halus", "B. Usus besar", "C. Rektum", "D. Anus"], answer: 2 },
        { question: "Empedu membantu mencerna...", options: ["A. Protein", "B. Karbohidrat", "C. Lemak", "D. Vitamin"], answer: 2 },
        { question: "Maag disebabkan oleh berlebihnya...", options: ["A. Empedu", "B. Asam lambung", "C. Air liur", "D. Getah pankreas"], answer: 1 }
    ],

    // Biologi - Sistem Peredaran Darah (20 soal)
    biologi_darah: [
        { question: "Fungsi sel darah merah adalah...", options: ["A. Melawan infeksi", "B. Mengangkut oksigen", "C. Pembekuan darah", "D. Mengangkut nutrisi"], answer: 1 },
        { question: "Pembuluh yang membawa darah dari jantung adalah...", options: ["A. Vena", "B. Arteri", "C. Kapiler", "D. Aorta"], answer: 1 },
        { question: "Bagian jantung yang menerima O₂ dari paru-paru...", options: ["A. Serambi Kanan", "B. Serambi Kiri", "C. Bilik Kanan", "D. Bilik Kiri"], answer: 1 },
        { question: "Sirkulasi kecil adalah dari jantung ke...", options: ["A. Seluruh tubuh", "B. Paru-paru", "C. Hati", "D. Otak"], answer: 1 },
        { question: "Tekanan darah normal adalah...", options: ["A. 100/60", "B. 120/80", "C. 140/90", "D. 160/100"], answer: 1 },
        { question: "Trombosit berfungsi untuk...", options: ["A. Mengangkut oksigen", "B. Melawan infeksi", "C. Pembekuan darah", "D. Mengangkut nutrisi"], answer: 2 },
        { question: "Darah dengan CO₂ tinggi mengalir di...", options: ["A. Arteri", "B. Vena", "C. Kapiler", "D. Aorta"], answer: 1 },
        { question: "Jantung koroner menyerang...", options: ["A. Paru-paru", "B. Otak", "C. Pembuluh jantung", "D. Ginjal"], answer: 2 },
        { question: "Plasma darah berfungsi untuk...", options: ["A. Mengangkut oksigen", "B. Melawan infeksi", "C. Mengangkut zat", "D. Pembekuan"], answer: 2 },
        { question: "Jumlah bilik jantung manusia...", options: ["A. 1", "B. 2", "C. 3", "D. 4"], answer: 1 },
        { question: "Leukosit berfungsi untuk...", options: ["A. Mengangkut oksigen", "B. Melawan infeksi", "C. Pembekuan darah", "D. Mengangkut nutrisi"], answer: 1 },
        { question: "Kapasitas darah manusia sekitar...", options: ["A. 2-3 liter", "B. 4-5 liter", "C. 6-7 liter", "D. 8-9 liter"], answer: 1 },
        { question: "Aorta adalah pembuluh darah...", options: ["A. Vena terbesar", "B. Arteri terbesar", "C. Kapiler terbesar", "D. Vena terkecil"], answer: 1 },
        { question: "Golongan darah universal donor adalah...", options: ["A. A", "B. B", "C. AB", "D. O"], answer: 3 },
        { question: "Golongan darah universal recipient adalah...", options: ["A. A", "B. B", "C. AB", "D. O"], answer: 2 },
        { question: "Denyut jantung normal dewasa adalah...", options: ["A. 40-60/menit", "B. 60-100/menit", "C. 100-120/menit", "D. 120-140/menit"], answer: 1 },
        { question: "Anemia adalah kekurangan...", options: ["A. Sel darah putih", "B. Sel darah merah", "C. Trombosit", "D. Plasma"], answer: 1 },
        { question: "Hemoglobin mengandung mineral...", options: ["A. Kalsium", "B. Besi", "C. Natrium", "D. Kalium"], answer: 1 },
        { question: "Limpa berfungsi untuk...", options: ["A. Memproduksi darah", "B. Menyaring darah", "C. Mengedarkan darah", "D. Membekukan darah"], answer: 1 },
        { question: "Hipertensi adalah tekanan darah...", options: ["A. Rendah", "B. Normal", "C. Tinggi", "D. Tidak stabil"], answer: 2 }
    ],

    // Biologi - Sistem Pernapasan (15 soal)
    biologi_pernapasan: [
        { question: "Organ pernapasan pertama adalah...", options: ["A. Paru-paru", "B. Hidung", "C. Trakea", "D. Bronkus"], answer: 1 },
        { question: "Pertukaran gas terjadi di...", options: ["A. Bronkiolus", "B. Trakea", "C. Alveolus", "D. Bronkus"], answer: 2 },
        { question: "Saat inspirasi, diafragma akan...", options: ["A. Mengendur", "B. Berkontraksi", "C. Tetap", "D. Naik"], answer: 1 },
        { question: "Paru-paru kanan memiliki lobus...", options: ["A. 1", "B. 2", "C. 3", "D. 4"], answer: 2 },
        { question: "TBC disebabkan oleh...", options: ["A. Virus", "B. Bakteri", "C. Jamur", "D. Parasit"], answer: 1 },
        { question: "Fungsi silia adalah...", options: ["A. Menghangatkan", "B. Menyaring debu", "C. Melembabkan", "D. Menghasilkan lendir"], answer: 1 },
        { question: "Kapasitas paru-paru dewasa...", options: ["A. 3 liter", "B. 6 liter", "C. 9 liter", "D. 12 liter"], answer: 1 },
        { question: "Gas yang dikeluarkan saat ekspirasi...", options: ["A. O₂", "B. N₂", "C. CO₂", "D. H₂"], answer: 2 },
        { question: "Suara dihasilkan di organ...", options: ["A. Hidung", "B. Faring", "C. Laring", "D. Trakea"], answer: 2 },
        { question: "Pernapasan sel menghasilkan...", options: ["A. ADP", "B. ATP", "C. AMP", "D. GDP"], answer: 1 },
        { question: "Asma menyerang bagian...", options: ["A. Hidung", "B. Trakea", "C. Bronkus", "D. Alveolus"], answer: 2 },
        { question: "Emfisema disebabkan oleh...", options: ["A. Infeksi", "B. Alergi", "C. Merokok", "D. Polusi"], answer: 2 },
        { question: "Otot pernapasan utama adalah...", options: ["A. Otot interkostal", "B. Diafragma", "C. Otot dada", "D. Otot perut"], answer: 1 },
        { question: "Pneumonia menyerang bagian...", options: ["A. Hidung", "B. Trakea", "C. Bronkus", "D. Alveolus"], answer: 3 },
        { question: "Volume tidal normal adalah...", options: ["A. 250 ml", "B. 500 ml", "C. 750 ml", "D. 1000 ml"], answer: 1 }
    ],

    // Biologi - Sistem Ekskresi (15 soal)
    biologi_ekskresi: [
        { question: "Organ utama ekskresi adalah...", options: ["A. Hati", "B. Ginjal", "C. Kulit", "D. Paru-paru"], answer: 1 },
        { question: "Unit fungsional ginjal adalah...", options: ["A. Glomerulus", "B. Nefron", "C. Ureter", "D. Kandung kemih"], answer: 1 },
        { question: "Penyerapan kembali zat disebut...", options: ["A. Filtrasi", "B. Reabsorpsi", "C. Augmentasi", "D. Ekskresi"], answer: 1 },
        { question: "Zat sisa metabolisme protein adalah...", options: ["A. Asam urat", "B. Urea", "C. Kreatinin", "D. CO₂"], answer: 1 },
        { question: "Endapan mineral di ginjal disebut...", options: ["A. Gagal ginjal", "B. Nefritis", "C. Batu ginjal", "D. Diabetes"], answer: 2 },
        { question: "Manusia memiliki ginjal...", options: ["A. 1", "B. 2", "C. 3", "D. 4"], answer: 1 },
        { question: "Saluran dari ginjal ke kandung kemih...", options: ["A. Uretra", "B. Ureter", "C. Nefron", "D. Glomerulus"], answer: 1 },
        { question: "Kandung kemih menampung...", options: ["A. 100-200 ml", "B. 300-500 ml", "C. 600-800 ml", "D. 900-1000 ml"], answer: 1 },
        { question: "Zat yang tidak disaring di glomerulus...", options: ["A. Air", "B. Glukosa", "C. Protein", "D. Urea"], answer: 2 },
        { question: "Kulit mengeluarkan zat sisa berupa...", options: ["A. Urin", "B. Keringat", "C. Empedu", "D. CO₂"], answer: 1 },
        { question: "Gagal ginjal dapat ditangani dengan...", options: ["A. Operasi", "B. Cuci darah", "C. Transfusi", "D. Suntik"], answer: 1 },
        { question: "Glomerulus berfungsi untuk...", options: ["A. Menyerap air", "B. Menyaring darah", "C. Menghasilkan urin", "D. Menyimpan urin"], answer: 1 },
        { question: "Diabetes insipidus menyerang...", options: ["A. Hati", "B. Ginjal", "C. Pankreas", "D. Lambung"], answer: 1 },
        { question: "Hati mengubah amonia menjadi...", options: ["A. Asam urat", "B. Urea", "C. Kreatinin", "D. Glukosa"], answer: 1 },
        { question: "Warna normal urin adalah...", options: ["A. Merah", "B. Kuning jernih", "C. Hijau", "D. Biru"], answer: 1 }
    ],

    // Fisika - Usaha dan Energi (15 soal)
    fisika_usaha: [
        { question: "Rumus usaha adalah...", options: ["A. W = F × d", "B. W = F / d", "C. W = F + d", "D. W = F - d"], answer: 0 },
        { question: "Satuan usaha dalam SI adalah...", options: ["A. Newton", "B. Watt", "C. Joule", "D. Pascal"], answer: 2 },
        { question: "Energi kinetik dipengaruhi oleh...", options: ["A. Massa dan tinggi", "B. Massa dan kecepatan", "C. Tinggi dan kecepatan", "D. Massa saja"], answer: 1 },
        { question: "Rumus energi potensial adalah...", options: ["A. Ep = m × v²", "B. Ep = m × g × h", "C. Ep = F × d", "D. Ep = m × v"], answer: 1 },
        { question: "Tuas kelas 1 contohnya...", options: ["A. Gerobak dorong", "B. Gunting", "C. Sekop", "D. Pancing"], answer: 1 },
        { question: "Fungsi katrol tetap adalah...", options: ["A. Mengubah arah gaya", "B. Memperbesar gaya", "C. Memperkecil gaya", "D. Mengubah kecepatan"], answer: 0 },
        { question: "Bidang miring memudahkan dengan cara...", options: ["A. Mengubah arah", "B. Memperkecil gaya", "C. Memperbesar gaya", "D. Mengubah kecepatan"], answer: 1 },
        { question: "Daya adalah...", options: ["A. Usaha/waktu", "B. Gaya/waktu", "C. Usaha×waktu", "D. Gaya×waktu"], answer: 0 },
        { question: "Satuan daya adalah...", options: ["A. Joule", "B. Newton", "C. Watt", "D. Pascal"], answer: 2 },
        { question: "Hukum kekekalan energi menyatakan...", options: ["A. Energi dapat diciptakan", "B. Energi dapat dimusnahkan", "C. Energi berubah bentuk", "D. Energi hilang"], answer: 2 },
        { question: "Katrol bebas berfungsi untuk...", options: ["A. Mengubah arah", "B. Memperbesar gaya", "C. Memperkecil gaya", "D. Mengubah kecepatan"], answer: 1 },
        { question: "Rumus daya adalah...", options: ["A. P = W × t", "B. P = W / t", "C. P = F × d", "D. P = m × g"], answer: 1 },
        { question: "Energi tidak dapat diciptakan sesuai hukum...", options: ["A. Newton", "B. Archimedes", "C. Kekekalan Energi", "D. Pascal"], answer: 2 },
        { question: "1 Joule sama dengan...", options: ["A. 1 N/m", "B. 1 N×m", "C. 1 N/m²", "D. 1 N×m²"], answer: 1 },
        { question: "Sekrup termasuk jenis...", options: ["A. Tuas", "B. Katrol", "C. Bidang miring", "D. Roda poros"], answer: 2 }
    ],

    // Fisika - Tekanan (15 soal)
    fisika_tekanan: [
        { question: "Rumus tekanan adalah...", options: ["A. P = F × A", "B. P = F / A", "C. P = A / F", "D. P = F + A"], answer: 1 },
        { question: "Satuan tekanan adalah...", options: ["A. Newton", "B. Joule", "C. Watt", "D. Pascal"], answer: 3 },
        { question: "Hukum Pascal menyatakan tekanan...", options: ["A. Berkurang", "B. Bertambah", "C. Diteruskan ke segala arah", "D. Hilang"], answer: 2 },
        { question: "Alat Hukum Pascal adalah...", options: ["A. Katrol", "B. Dongkrak hidrolik", "C. Tuas", "D. Bidang miring"], answer: 1 },
        { question: "Hukum Archimedes menyatakan...", options: ["A. Tekanan diteruskan", "B. Gaya apung", "C. Tekanan sebanding", "D. Tekanan berbanding terbalik"], answer: 1 },
        { question: "Tekanan hidrostatis dipengaruhi...", options: ["A. Luas dan kedalaman", "B. ρ, g, dan h", "C. Volume dan berat", "D. Luas dan gaya"], answer: 1 },
        { question: "Kapal terapung menggunakan...", options: ["A. Hukum Pascal", "B. Hukum Archimedes", "C. Hukum Newton", "D. Hukum Ohm"], answer: 1 },
        { question: "Tekanan pada zat padat dipengaruhi...", options: ["A. Gaya dan volume", "B. Gaya dan luas", "C. Massa dan volume", "D. Massa dan luas"], answer: 1 },
        { question: "Manometer mengukur...", options: ["A. Suhu", "B. Tekanan gas", "C. Kelembaban", "D. Kecepatan"], answer: 1 },
        { question: "Semakin dalam, tekanan...", options: ["A. Semakin kecil", "B. Semakin besar", "C. Tetap", "D. Hilang"], answer: 1 },
        { question: "Massa jenis air adalah...", options: ["A. 100 kg/m³", "B. 1000 kg/m³", "C. 10000 kg/m³", "D. 1 kg/m³"], answer: 1 },
        { question: "Barometer mengukur...", options: ["A. Tekanan air", "B. Tekanan udara", "C. Tekanan darah", "D. Tekanan gas"], answer: 1 },
        { question: "Balon udara naik karena...", options: ["A. Massa jenis lebih besar", "B. Massa jenis lebih kecil", "C. Gaya gravitasi", "D. Tekanan udara"], answer: 1 },
        { question: "1 Pascal sama dengan...", options: ["A. 1 N/m", "B. 1 N×m", "C. 1 N/m²", "D. 1 N×m²"], answer: 2 },
        { question: "Prinsip kerja pompa air menggunakan...", options: ["A. Hukum Newton", "B. Hukum Pascal", "C. Hukum Archimedes", "D. Hukum Ohm"], answer: 1 }
    ],

    // PPKn (20 soal)
    ppkn: [
        { question: "Yang mengusulkan dasar negara adalah...", options: ["A. Hatta", "B. Soekarno", "C. Soepomo", "D. Yamin"], answer: 1 },
        { question: "Pancasila terdiri dari... sila", options: ["A. 3", "B. 4", "C. 5", "D. 6"], answer: 2 },
        { question: "Sila pertama berbunyi...", options: ["A. Kemanusiaan", "B. Ketuhanan", "C. Persatuan", "D. Kerakyatan"], answer: 1 },
        { question: "Lambang sila pertama adalah...", options: ["A. Rantai", "B. Bintang", "C. Pohon Beringin", "D. Kepala Banteng"], answer: 1 },
        { question: "Pancasila jadi dasar negara tanggal...", options: ["A. 1 Juni 1945", "B. 17 Agustus 1945", "C. 18 Agustus 1945", "D. 29 April 1945"], answer: 2 },
        { question: "Contoh sila ketiga adalah...", options: ["A. Menghormati agama", "B. Menghargai musyawarah", "C. Menjaga kerukunan suku", "D. Tidak membeda-bedakan"], answer: 2 },
        { question: "Padi dan kapas lambang sila...", options: ["A. Kedua", "B. Ketiga", "C. Keempat", "D. Kelima"], answer: 3 },
        { question: "BPUPKI dibentuk tanggal...", options: ["A. 29 April 1945", "B. 1 Juni 1945", "C. 17 Agustus 1945", "D. 18 Agustus 1945"], answer: 0 },
        { question: "Pancasila berasal dari bahasa...", options: ["A. Jawa", "B. Arab", "C. Sanskerta", "D. Belanda"], answer: 2 },
        { question: "Sila keempat berbunyi...", options: ["A. Keadilan Sosial", "B. Persatuan Indonesia", "C. Kemanusiaan", "D. Kerakyatan"], answer: 3 },
        { question: "Lambang sila kedua adalah...", options: ["A. Bintang", "B. Rantai", "C. Pohon Beringin", "D. Banteng"], answer: 1 },
        { question: "Gotong royong mencerminkan sila...", options: ["A. Pertama", "B. Kedua", "C. Ketiga", "D. Keempat"], answer: 2 },
        { question: "Toleransi antar umat beragama sila...", options: ["A. Pertama", "B. Kedua", "C. Ketiga", "D. Keempat"], answer: 0 },
        { question: "Menghargai pendapat orang lain sila...", options: ["A. Pertama", "B. Kedua", "C. Ketiga", "D. Keempat"], answer: 3 },
        { question: "Tidak diskriminatif sila...", options: ["A. Pertama", "B. Kedua", "C. Ketiga", "D. Kelima"], answer: 1 },
        { question: "Mencintai produk dalam negeri sila...", options: ["A. Pertama", "B. Kedua", "C. Ketiga", "D. Keempat"], answer: 2 },
        { question: "Menaati peraturan sila...", options: ["A. Ketiga", "B. Keempat", "C. Kelima", "D. Semua sila"], answer: 3 },
        { question: "Hari lahir Pancasila adalah...", options: ["A. 17 Agustus", "B. 1 Juni", "C. 2 Oktober", "D. 28 Oktober"], answer: 1 },
        { question: "Piagam Jakarta tanggal...", options: ["A. 1 Juni 1945", "B. 22 Juni 1945", "C. 17 Agustus 1945", "D. 18 Agustus 1945"], answer: 1 },
        { question: "Pancasila sebagai... negara", options: ["A. Lambang", "B. Dasar", "C. Simbol", "D. Lambang"], answer: 1 },
        { question: "UUD 1945 adalah hukum... di Indonesia", options: ["A. Tertinggi", "B. Terendah", "C. Biasa", "D. Khusus"], answer: 0 },
        { question: "MPR terdiri dari...", options: ["A. DPR dan Presiden", "B. DPR dan DPD", "C. Presiden dan DPD", "D. DPR dan MA"], answer: 1 },
        { question: "Presiden Indonesia dipilih oleh...", options: ["A. MPR", "B. DPR", "C. Rakyat langsung", "D. DPD"], answer: 2 },
        { question: "Indonesia menganut sistem pemerintahan...", options: ["A. Parlementer", "B. Presidensial", "C. Monarki", "D. Federasi"], answer: 1 },
        { question: "MK berwenang menguji UU terhadap...", options: ["A. UUD", "B. Peraturan lain", "C. Hukum adat", "D. Hukum internasional"], answer: 0 },
        { question: "Hak warga negara yang diatur UUD 1945 adalah...", options: ["A. Hak memilih", "B. Hak berpendapat", "C. Hak mendapat pendidikan", "D. Semua benar"], answer: 3 },
        { question: "Kewajiban warga negara termasuk...", options: ["A. Membayar pajak", "B. Membela negara", "C. Menjunjung hukum", "D. Semua benar"], answer: 3 },
        { question: "Amandemen UUD 1945 dilakukan oleh...", options: ["A. Presiden", "B. DPR", "C. MPR", "D. MA"], answer: 2 },
        { question: "Jumlah amandemen UUD 1945 adalah...", options: ["A. 1 kali", "B. 2 kali", "C. 3 kali", "D. 4 kali"], answer: 3 },
        { question: "Dekrit Presiden 5 Juli 1959 dikeluarkan oleh...", options: ["A. Soeharto", "B. Soekarno", "C. Habibie", "D. Megawati"], answer: 1 },
        { question: "TNI dan POLRI adalah alat... negara", options: ["A. Pertahanan dan keamanan", "B. Pemerintahan", "C. Peradilan", "D. Legislatif"], answer: 0 },
        { question: "Hukum tertinggi di Indonesia adalah...", options: ["A. UU", "B. PP", "C. UUD 1945", "D. Perpres"], answer: 2 },
        { question: "Perppu dikeluarkan oleh...", options: ["A. DPR", "B. Presiden", "C. MPR", "D. MA"], answer: 1 },
        { question: "Perda dibuat oleh...", options: ["A. Presiden", "B. DPR", "C. Pemerintah Daerah", "D. MPR"], answer: 2 },
        { question: "UU dibuat oleh...", options: ["A. Presiden saja", "B. DPR saja", "C. DPR dan Presiden", "D. MPR"], answer: 2 },
        { question: "PP dibuat untuk menjalankan...", options: ["A. UUD 1945", "B. UU", "C. Perpres", "D. Perda"], answer: 1 },
        { question: "Sumber dari segala sumber hukum adalah...", options: ["A. UUD 1945", "B. Pancasila", "C. UU", "D. Perpres"], answer: 1 },
        { question: "Perppu dikeluarkan dalam keadaan...", options: ["A. Normal", "B. Darurat", "C. Damai", "D. Biasa"], answer: 1 },
        { question: "Peraturan yang bersifat mengikat secara umum adalah...", options: ["A. Perjanjian", "B. Kontrak", "C. Perundang-undangan", "D. Kesepakatan"], answer: 2 },
        { question: "TAP MPR ditetapkan oleh...", options: ["A. Presiden", "B. DPR", "C. MPR", "D. MA"], answer: 2 },
        { question: "Sila yang menjamin kebebasan beragama adalah...", options: ["A. Sila 1", "B. Sila 2", "C. Sila 3", "D. Sila 4"], answer: 0 }
    ],

    // Bahasa Indonesia (20 soal)
    bindo: [
        { question: "Kalimat yang ejaannya benar...", options: ["A. Saya pergi ke pasar", "B. Saya kepasaR", "C. Saya pergii", "D. Saya kepasar"], answer: 0 },
        { question: "Sinonim 'indah' adalah...", options: ["A. Jelek", "B. Cantik", "C. Buruk", "D. Biasa"], answer: 1 },
        { question: "Antonim 'tinggi' adalah...", options: ["A. Panjang", "B. Rendah", "C. Besar", "D. Luas"], answer: 1 },
        { question: "Kalimat efektif adalah...", options: ["A. Dia pergi ke sekolah dengan berjalan kaki", "B. Dia berjalan kaki pergi ke sekolah", "C. Dia pergi berjalan kaki ke sekolah", "D. Ke sekolah dia pergi berjalan kaki"], answer: 0 },
        { question: "'Air muka' termasuk majas...", options: ["A. Simile", "B. Metafora", "C. Personifikasi", "D. Hiperbola"], answer: 1 },
        { question: "'Berlari' memiliki imbuhan...", options: ["A. ber-...-i", "B. ber-...-an", "C. ber-", "D. be-...-an"], answer: 2 },
        { question: "Ide pokok di awal paragraf disebut...", options: ["A. Deduktif", "B. Induktif", "C. Campuran", "D. Narasi"], answer: 0 },
        { question: "Teks langkah-langkah membuat sesuatu...", options: ["A. Narasi", "B. Eksposisi", "C. Prosedur", "D. Deskripsi"], answer: 2 },
        { question: "'Memperhatikan' awalan...", options: ["A. me-", "B. mem-", "C. memper-", "D. pe-"], answer: 2 },
        { question: "Huruf kapital benar...", options: ["A. presiden jokowi", "B. Presiden Jokowi", "C. PRESIDEN JOKOWI", "D. presiden Jokowi"], answer: 1 },
        { question: "Kata baku dari 'aktifitas'...", options: ["A. Aktifitas", "B. Aktivitas", "C. Aktif", "D. Aktiv"], answer: 1 },
        { question: "Sinonim 'cepat' adalah...", options: ["A. Lambat", "B. Laju", "C. Diam", "D. Pelan"], answer: 1 },
        { question: "Majas 'badai' untuk emosi...", options: ["A. Simile", "B. Metafora", "C. Hiperbola", "D. Personifikasi"], answer: 2 },
        { question: "Kata depan yang benar...", options: ["A. Di rumah", "B. Dirumah", "C. DiRumah", "D. Di-rumah"], answer: 0 },
        { question: "Singkatan yang benar...", options: ["A. Yg", "B. Yg.", "C. Yang", "D. Yng"], answer: 2 },
        { question: "Sinonim 'bahagia'...", options: ["A. Sedih", "B. Senang", "C. Marah", "D. Takut"], answer: 1 },
        { question: "Antonim 'kaya'...", options: ["A. Miskin", "B. Kaya raya", "C. Sedang", "D. Biasa"], answer: 0 },
        { question: "Kalimat pasif menggunakan...", options: ["A. Me-", "B. Ber-", "C. Di-", "D. Pe-"], answer: 2 },
        { question: "Kata serapan dari bahasa Arab...", options: ["A. Komputer", "B. Masjid", "C. Televisi", "D. Internet"], answer: 1 },
        { question: "Sinonim 'pandai'...", options: ["A. Bodoh", "B. Pintar", "C. Malas", "D. Lemah"], answer: 1 }
    ],

    // Bahasa Inggris (20 soal)
    english: [
        { question: "She ___ to school every day.", options: ["A. go", "B. goes", "C. going", "D. went"], answer: 1 },
        { question: "They ___ playing football now.", options: ["A. is", "B. are", "C. am", "D. was"], answer: 1 },
        { question: "I ___ a book yesterday.", options: ["A. read", "B. reads", "C. reading", "D. am reading"], answer: 0 },
        { question: "Opposite of 'hot' is...", options: ["A. Warm", "B. Cool", "C. Cold", "D. Heat"], answer: 2 },
        { question: "She is ___ than her sister.", options: ["A. tall", "B. taller", "C. tallest", "D. more tall"], answer: 1 },
        { question: "This is ___ book.", options: ["A. I", "B. me", "C. my", "D. mine"], answer: 2 },
        { question: "We ___ to the beach last week.", options: ["A. go", "B. goes", "C. went", "D. going"], answer: 2 },
        { question: "___ you like some coffee?", options: ["A. Do", "B. Does", "C. Are", "D. Is"], answer: 0 },
        { question: "Plural of 'child' is...", options: ["A. childs", "B. childes", "C. children", "D. childrens"], answer: 2 },
        { question: "I have ___ completed my homework.", options: ["A. yet", "B. already", "C. still", "D. since"], answer: 1 },
        { question: "He ___ to music every night.", options: ["A. listen", "B. listens", "C. listening", "D. listened"], answer: 1 },
        { question: "The cat is ___ the table.", options: ["A. in", "B. on", "C. at", "D. to"], answer: 1 },
        { question: "She can ___ English well.", options: ["A. speaks", "B. speaking", "C. speak", "D. spoke"], answer: 2 },
        { question: "I ___ breakfast at 7 AM.", options: ["A. have", "B. has", "C. having", "D. had"], answer: 0 },
        { question: "This is ___ book I've ever read.", options: ["A. good", "B. better", "C. best", "D. the best"], answer: 3 },
        { question: "They ___ go to school tomorrow.", options: ["A. will", "B. would", "C. can", "D. could"], answer: 0 },
        { question: "The opposite of 'big' is...", options: ["A. Large", "B. Small", "C. Huge", "D. Giant"], answer: 1 },
        { question: "She ___ her homework now.", options: ["A. do", "B. does", "C. is doing", "D. did"], answer: 2 },
        { question: "I ___ to school by bus.", options: ["A. go", "B. goes", "C. going", "D. went"], answer: 0 },
        { question: "He ___ a new car last month.", options: ["A. buy", "B. buys", "C. bought", "D. buying"], answer: 2 }
    ],

    // Geografi (15 soal)
    geografi: [
        { question: "Indonesia terletak di antara...", options: ["A. Asia dan Australia", "B. Asia dan Eropa", "C. Afrika dan Asia", "D. Eropa dan Australia"], answer: 0 },
        { question: "Gunung tertinggi di Indonesia...", options: ["A. Semeru", "B. Kerinci", "C. Puncak Jaya", "D. Rinjani"], answer: 2 },
        { question: "Indonesia memiliki iklim...", options: ["A. Dingin", "B. Tropis", "C. Subtropis", "D. Kutub"], answer: 1 },
        { question: "Sungai terpanjang di Indonesia...", options: ["A. Musi", "B. Kapuas", "C. Mahakam", "D. Bengawan Solo"], answer: 1 },
        { question: "Bencana alam yang sering terjadi...", options: ["A. Badai salju", "B. Gempa bumi", "C. Aurora", "D. Gurun pasir"], answer: 1 },
        { question: "Pulau terbesar di Indonesia...", options: ["A. Jawa", "B. Sumatera", "C. Kalimantan", "D. Papua"], answer: 2 },
        { question: "Laut di utara Jawa adalah...", options: ["A. Hindia", "B. Jawa", "C. Cina Selatan", "D. Flores"], answer: 1 },
        { question: "Hasil tambang Kalimantan...", options: ["A. Minyak bumi", "B. Batu bara", "C. Emas", "D. Timah"], answer: 1 },
        { question: "Indonesia terdiri dari... provinsi", options: ["A. 30", "B. 32", "C. 34", "D. 36"], answer: 2 },
        { question: "Garis khatulistiwa melintasi...", options: ["A. Jawa", "B. Sumatera", "C. Kalimantan", "D. Sulawesi"], answer: 1 },
        { question: "Ibukota Indonesia adalah...", options: ["A. Surabaya", "B. Jakarta", "C. Bandung", "D. Medan"], answer: 1 },
        { question: "Laut terbesar di Indonesia...", options: ["A. Jawa", "B. Cina Selatan", "C. Hindia", "D. Pasifik"], answer: 2 },
        { question: "Pulau terbanyak penduduknya...", options: ["A. Sumatera", "B. Jawa", "C. Kalimantan", "D. Sulawesi"], answer: 1 },
        { question: "Danau terbesar di Indonesia...", options: ["A. Toba", "B. Singkarak", "C. Maninjau", "D. Sentani"], answer: 0 },
        { question: "Gunung berapi aktif di Jawa...", options: ["A. Semeru", "B. Kerinci", "C. Dempo", "D. Marapi"], answer: 0 }
    ]
};

// Fungsi untuk mengacak array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Fungsi untuk membuat kuis dengan soal acak
function createQuiz(mapel, containerId, numQuestions = 5) {
    const container = document.getElementById(containerId);
    if (!container || !quizDatabase[mapel]) return;

    const shuffledQuestions = shuffleArray(quizDatabase[mapel]);
    const selectedQuestions = shuffledQuestions.slice(0, numQuestions);

    let quizHTML = '';
    selectedQuestions.forEach((q, index) => {
        quizHTML += `
            <div class="quiz-question" data-question="${index}">
                <p>${index + 1}. ${q.question}</p>
                <div class="quiz-options">
                    ${q.options.map((opt, optIndex) => `
                        <label class="quiz-option">
                            <input type="radio" name="q${index}" value="${optIndex}">
                            <span>${opt}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    });

    quizHTML += `
        <button class="quiz-btn" onclick="checkQuiz('${mapel}', ${numQuestions})">🎯 Periksa Jawaban</button>
        <div id="quizResult" class="quiz-result"></div>
    `;

    container.innerHTML = quizHTML;
    window[`answers_${mapel}`] = selectedQuestions.map(q => q.answer);
}

// Fungsi untuk memeriksa jawaban kuis
function checkQuiz(mapel, numQuestions) {
    const answers = window[`answers_${mapel}`];
    if (!answers) return;

    let score = 0;
    let feedback = [];

    for (let i = 0; i < numQuestions; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected) {
            if (parseInt(selected.value) === answers[i]) {
                score++;
                feedback.push(`Soal ${i + 1}: ✅ Benar!`);
            } else {
                feedback.push(`Soal ${i + 1}: ❌ Salah`);
            }
        } else {
            feedback.push(`Soal ${i + 1}: ⚠️ Belum dijawab`);
        }
    }

    const resultElement = document.getElementById('quizResult');
    const percentage = (score / numQuestions) * 100;

    resultElement.style.display = 'block';
    resultElement.className = 'quiz-result show';

    if (score === numQuestions) {
        resultElement.classList.add('excellent');
        resultElement.innerHTML = `
            <h3>🎉 SELAMAT! Jawabanmu Sempurna! 🎉</h3>
            <p style="font-size: 1.5em; margin: 15px 0;">Skor: ${score}/${numQuestions} (${percentage}%)</p>
            <p>Kamu sudah sangat memahami materi ini! 🏆</p>
            <button class="quiz-btn" onclick="restartQuiz('${mapel}', ${numQuestions})" style="background: #4caf50; margin-top: 15px;">🔄 Coba Lagi dengan Soal Baru</button>
        `;
        if (window.ClickSounds) ClickSounds.play('success');
    } else if (percentage >= 60) {
        resultElement.classList.add('good');
        resultElement.innerHTML = `
            <h3>👍 Bagus! Terus Belajar!</h3>
            <p style="font-size: 1.5em; margin: 15px 0;">Skor: ${score}/${numQuestions} (${percentage}%)</p>
            <p>${feedback.join('<br>')}</p>
            <button class="quiz-btn" onclick="restartQuiz('${mapel}', ${numQuestions})" style="background: #ff9800; margin-top: 15px;">🔄 Coba Lagi dengan Soal Baru</button>
        `;
    } else {
        resultElement.classList.add('try-again');
        resultElement.innerHTML = `
            <h3>📖 Ayo Belajar Lagi!</h3>
            <p style="font-size: 1.5em; margin: 15px 0;">Skor: ${score}/${numQuestions} (${percentage}%)</p>
            <p>${feedback.join('<br>')}</p>
            <button class="quiz-btn" onclick="restartQuiz('${mapel}', ${numQuestions})" style="background: #f44336; margin-top: 15px;">🔄 Coba Lagi dengan Soal Baru</button>
        `;
        if (window.ClickSounds) ClickSounds.play('error');
    }

    resultElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Fungsi restart kuis
function restartQuiz(mapel, numQuestions) {
    createQuiz(mapel, 'quizContainer', numQuestions);
    document.getElementById('quizResult').style.display = 'none';
    if (window.ClickSounds) ClickSounds.play('whoosh');
}

// Game: Kuis Cepat dengan Timer
function createQuickQuiz(containerId, questions, timePerQuestion = 10) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const shuffledQuestions = shuffleArray(questions);
    let currentQuestion = 0;
    let score = 0;
    let timer;
    let timeLeft;

    function showQuestion() {
        if (currentQuestion >= shuffledQuestions.length) {
            clearInterval(timer);
            container.innerHTML = `
                <div class="game-complete">
                    <h3>🎉 Kuis Selesai!</h3>
                    <p style="font-size: 1.5em;">Skor akhir: ${score}/${shuffledQuestions.length}</p>
                    <p>${score === shuffledQuestions.length ? 'Sempurna! 🏆' : score >= shuffledQuestions.length/2 ? 'Bagus! 👍' : 'Terus belajar! 📚'}</p>
                    <button class="quiz-btn" onclick="createQuickQuiz('${containerId}', Object.values(quizDatabase).flat(), ${timePerQuestion})">🔄 Main Lagi</button>
                </div>
            `;
            return;
        }

        const q = shuffledQuestions[currentQuestion];
        timeLeft = timePerQuestion;

        container.innerHTML = `
            <div class="game-content">
                <h3>⚡ Kuis Cepat</h3>
                <p class="game-score">Skor: ${score} | Soal: ${currentQuestion + 1}/${shuffledQuestions.length}</p>
                <div class="timer" id="timer">⏱️ ${timeLeft}</div>
                <p class="game-question">${q.question}</p>
                <div class="game-options">
                    ${q.options.map((opt, index) => `
                        <button class="game-option-btn" onclick="selectQuickAnswer(${index})">${opt}</button>
                    `).join('')}
                </div>
            </div>
        `;

        clearInterval(timer);
        timer = setInterval(() => {
            timeLeft--;
            const timerEl = document.getElementById('timer');
            if (timerEl) timerEl.textContent = `⏱️ ${timeLeft}`;
            if (timeLeft <= 0) {
                clearInterval(timer);
                if (window.ClickSounds) ClickSounds.play('error');
                alert(`⏰ Waktu habis! Jawaban: ${q.options[q.answer]}`);
                currentQuestion++;
                showQuestion();
            }
        }, 1000);
    }

    window.selectQuickAnswer = function(index) {
        clearInterval(timer);
        const q = shuffledQuestions[currentQuestion];

        if (index === q.answer) {
            score++;
            if (window.ClickSounds) ClickSounds.play('success');
            alert('✅ Benar!');
        } else {
            if (window.ClickSounds) ClickSounds.play('error');
            alert(`❌ Salah! Jawaban: ${q.options[q.answer]}`);
        }

        currentQuestion++;
        showQuestion();
    };

    showQuestion();
}

// Game: Tebak Kata
function createWordGame(containerId, words) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const shuffledWords = shuffleArray(words);
    let currentWord = 0;
    let score = 0;

    function showWord() {
        if (currentWord >= shuffledWords.length) {
            container.innerHTML = `
                <div class="game-complete">
                    <h3>🎉 Permainan Selesai!</h3>
                    <p style="font-size: 1.5em;">Skor akhir: ${score}/${shuffledWords.length}</p>
                    <button class="quiz-btn" onclick="createWordGame('${containerId}', ${JSON.stringify(words)})">🔄 Main Lagi</button>
                </div>
            `;
            return;
        }

        const word = shuffledWords[currentWord];
        const scrambled = shuffleArray(word.split('')).join('');

        container.innerHTML = `
            <div class="game-content">
                <h3>🔤 Tebak Kata</h3>
                <p class="game-score">Skor: ${score}/${currentWord}</p>
                <div class="scrambled-word">${scrambled}</div>
                <input type="text" class="game-input" id="gameInput" placeholder="Tulis jawaban..." onkeypress="if(event.key==='Enter')checkWord()">
                <button class="quiz-btn" onclick="checkWord()">✅ Cek Jawaban</button>
                <p class="game-hint">Petunjuk: ${word.length} huruf</p>
            </div>
        `;

        document.getElementById('gameInput').focus();
    }

    window.checkWord = function() {
        const input = document.getElementById('gameInput').value.trim().toLowerCase();
        const correct = shuffledWords[currentWord].toLowerCase();

        if (input === correct) {
            score++;
            if (window.ClickSounds) ClickSounds.play('success');
            alert('✅ Benar!');
        } else {
            if (window.ClickSounds) ClickSounds.play('error');
            alert(`❌ Salah! Jawaban: ${shuffledWords[currentWord]}`);
        }

        currentWord++;
        showWord();
    };

    showWord();
}

// Game: Match the Pair (Mencocokkan)
function createMatchGame(containerId, pairs) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const shuffledLeft = shuffleArray(pairs.map(p => p[0]));
    const shuffledRight = shuffleArray(pairs.map(p => p[1]));
    let selectedLeft = null;
    let matchedPairs = 0;

    container.innerHTML = `
        <div class="game-content">
            <h3>🔗 Cocokkan Pasangan</h3>
            <p class="game-score">Pasangan cocok: ${matchedPairs}/${pairs.length}</p>
            <div class="match-grid">
                <div class="match-column">
                    <h4>Kolom A</h4>
                    ${shuffledLeft.map((item, i) => `
                        <button class="match-item" data-side="left" data-index="${i}" onclick="selectMatchItem(this, 'left', ${i})">${item}</button>
                    `).join('')}
                </div>
                <div class="match-column">
                    <h4>Kolom B</h4>
                    ${shuffledRight.map((item, i) => `
                        <button class="match-item" data-side="right" data-index="${i}" onclick="selectMatchItem(this, 'right', ${i})">${item}</button>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    window.selectMatchItem = function(el, side, index) {
        if (el.classList.contains('matched')) return;
        
        document.querySelectorAll(`.match-item[data-side="${side}"]`).forEach(item => {
            item.classList.remove('selected');
        });
        el.classList.add('selected');

        if (side === 'left') {
            selectedLeft = index;
        } else if (selectedLeft !== null) {
            // Check if match is correct
            const leftItem = shuffledLeft[selectedLeft];
            const rightItem = shuffledRight[index];
            
            const isCorrect = pairs.some(p => p[0] === leftItem && p[1] === rightItem);
            
            if (isCorrect) {
                matchedPairs++;
                document.querySelector(`.match-item[data-side="left"][data-index="${selectedLeft}"]`).classList.add('matched');
                el.classList.add('matched');
                if (window.ClickSounds) ClickSounds.play('success');
                
                if (matchedPairs === pairs.length) {
                    setTimeout(() => {
                        container.innerHTML = `
                            <div class="game-complete">
                                <h3>🎉 Semua Pasangan Cocok!</h3>
                                <p style="font-size: 1.5em;">Kamu berhasil!</p>
                                <button class="quiz-btn" onclick="createMatchGame('${containerId}', ${JSON.stringify(pairs)})">🔄 Main Lagi</button>
                            </div>
                        `;
                    }, 500);
                }
            } else {
                if (window.ClickSounds) ClickSounds.play('error');
                alert('❌ Pasangan tidak cocok!');
            }
            
            selectedLeft = null;
            document.querySelectorAll('.match-item').forEach(item => {
                if (!item.classList.contains('matched')) {
                    item.classList.remove('selected');
                }
            });
        }
    };
}

// Export functions
window.QuizSystem = {
    createQuiz,
    checkQuiz,
    restartQuiz,
    createQuickQuiz,
    createWordGame,
    createMatchGame,
    shuffleArray,
    quizDatabase
};