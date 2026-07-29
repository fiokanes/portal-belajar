/**
 * ==========================================
 * BANK SOAL LENGKAP - SEMUA MATA PELAJARAN
 * Setiap bab memiliki minimal 20 soal
 * Soal akan di-random setiap kali kuis dimulai
 * ==========================================
 */

const QUIZ_DATA = {
    // ============ BAHASA INDONESIA ============
    'bahasa-indonesia': {
        bab1: {
            title: 'Menulis Laporan Hasil Pengamatan',
            questions: [
                {
                    question: 'Apa pengertian laporan hasil pengamatan?',
                    options: [
                        'Teks yang berisi opini pribadi tentang suatu fenomena',
                        'Teks yang berisi hasil pengamatan terhadap suatu objek secara sistematis',
                        'Teks yang berisi cerita fiksi tentang alam',
                        'Teks yang berisi puisi tentang lingkungan'
                    ],
                    correct: 1,
                    explanation: 'Laporan hasil pengamatan adalah teks yang berisi hasil pengamatan terhadap suatu objek, fenomena, atau kegiatan yang dilakukan secara sistematis dan objektif.'
                },
                {
                    question: 'Struktur utama teks laporan hasil pengamatan adalah...',
                    options: [
                        'Judul, Isi, Penutup',
                        'Pernyataan Umum, Deskripsi Bagian, Klasifikasi, Simpulan',
                        'Tesis, Argumentasi, Penegasan Ulang',
                        'Ekposisi, Komplikasi, Klimaks, Resolusi'
                    ],
                    correct: 1,
                    explanation: 'Struktur laporan pengamatan terdiri dari: Pernyataan Umum (pengenalan objek), Deskripsi Bagian (detail bagian), Klasifikasi (pengelompokan), dan Simpulan (kesimpulan).'
                },
                {
                    question: 'Ciri khas bahasa laporan pengamatan adalah...',
                    options: [
                        'Menggunakan bahasa sehari-hari yang informal',
                        'Menggunakan istilah ilmiah dan bersifat objektif',
                        'Menggunakan bahasa puitis dan metafora',
                        'Menggunakan bahasa slang dan gaul'
                    ],
                    correct: 1,
                    explanation: 'Laporan pengamatan menggunakan istilah ilmiah, kata teknis, dan bersifat objektif tanpa opini pribadi.'
                },
                {
                    question: 'Manakah yang termasuk contoh pernyataan umum dalam laporan pengamatan?',
                    options: [
                        'Saya melihat kupu-kupu di taman',
                        'Kupu-kupu adalah serangga yang termasuk ordo Lepidoptera',
                        'Menurut saya, kupu-kupu sangat indah',
                        'Kemarin saya pergi ke kebun binatang'
                    ],
                    correct: 1,
                    explanation: 'Pernyataan umum berisi pengenalan objek secara umum menggunakan bahasa ilmiah, bukan opini pribadi.'
                },
                {
                    question: 'Apa tujuan utama menulis laporan hasil pengamatan?',
                    options: [
                        'Untuk menceritakan pengalaman pribadi',
                        'Untuk mendokumentasikan hasil pengamatan secara sistematis',
                        'Untuk menulis cerita fiksi',
                        'Untuk membuat puisi tentang alam'
                    ],
                    correct: 1,
                    explanation: 'Tujuan utama laporan pengamatan adalah mendokumentasikan hasil pengamatan secara sistematis dan objektif.'
                },
                {
                    question: 'Kalimat yang tepat untuk laporan pengamatan adalah...',
                    options: [
                        'Aku suka banget lihat burung di taman',
                        'Burung gereja aktif mencari makan pada pagi hari',
                        'Wah, burungnya lucu banget ya!',
                        'Gue lihat burung di taman kemarin'
                    ],
                    correct: 1,
                    explanation: 'Laporan pengamatan menggunakan kalimat deklaratif (berita) yang objektif, bukan ekspresi perasaan atau bahasa informal.'
                },
                {
                    question: 'Apa yang dimaksud dengan klasifikasi dalam laporan pengamatan?',
                    options: [
                        'Menjelaskan ukuran objek',
                        'Mengelompokkan objek berdasarkan kategori tertentu',
                        'Memberikan kesimpulan',
                        'Menjelaskan warna objek'
                    ],
                    correct: 1,
                    explanation: 'Klasifikasi adalah proses mengelompokkan objek berdasarkan kategori atau golongan tertentu.'
                },
                {
                    question: 'Manakah yang BUKAN ciri laporan pengamatan yang baik?',
                    options: [
                        'Objektif dan faktual',
                        'Menggunakan data pendukung',
                        'Berdasarkan opini pribadi',
                        'Sistematis dan terstruktur'
                    ],
                    correct: 2,
                    explanation: 'Laporan pengamatan yang baik harus objektif dan faktual, bukan berdasarkan opini pribadi.'
                },
                {
                    question: 'Kata penghubung yang tepat untuk laporan pengamatan adalah...',
                    options: [
                        'Menurutku, pendapatku',
                        'Selain itu, berdasarkan data',
                        'Wah, hebat sekali',
                        'Aku rasa, aku pikir'
                    ],
                    correct: 1,
                    explanation: 'Laporan pengamatan menggunakan kata penghubung logis seperti "selain itu", "berdasarkan data", "hasilnya menunjukkan".'
                },
                {
                    question: 'Contoh objek yang dapat diamati untuk laporan adalah...',
                    options: [
                        'Perasaan sedih saat hujan',
                        'Mimpi tentang liburan',
                        'Perilaku semut di taman sekolah',
                        'Khayalan tentang dunia fantasi'
                    ],
                    correct: 2,
                    explanation: 'Objek pengamatan harus sesuatu yang bisa diamati secara nyata dan empiris, bukan perasaan atau khayalan.'
                },
                {
                    question: 'Apa fungsi simpulan dalam laporan pengamatan?',
                    options: [
                        'Menambah panjang laporan',
                        'Merangkum hasil pengamatan',
                        'Menjelaskan metode pengamatan',
                        'Menceritakan latar belakang'
                    ],
                    correct: 1,
                    explanation: 'Simpulan berfungsi merangkum hasil pengamatan dan memberikan kesimpulan berdasarkan data yang diperoleh.'
                },
                {
                    question: 'Kalimat yang TIDAK tepat untuk laporan pengamatan adalah...',
                    options: [
                        'Berdasarkan pengamatan, suhu rata-rata adalah 30°C',
                        'Menurut data, pertumbuhan tanaman mencapai 5 cm',
                        'Aku rasa tanaman itu tumbuh dengan baik',
                        'Hasil menunjukkan bahwa kelembaban udara 70%'
                    ],
                    correct: 2,
                    explanation: 'Laporan pengamatan tidak menggunakan kata "aku rasa" karena bersifat subjektif.'
                },
                {
                    question: 'Data pendukung dalam laporan pengamatan bisa berupa...',
                    options: [
                        'Cerita fiksi',
                        'Puisi',
                        'Tabel, grafik, atau foto',
                        'Dongeng'
                    ],
                    correct: 2,
                    explanation: 'Data pendukung berupa fakta yang bisa divisualisasikan dalam tabel, grafik, foto, atau gambar.'
                },
                {
                    question: 'Pengamatan yang baik dilakukan secara...',
                    options: [
                        'Sembarang dan asal-asalan',
                        'Sistematis dan terencana',
                        'Sekali saja tanpa pengulangan',
                        'Hanya berdasarkan perasaan'
                    ],
                    correct: 1,
                    explanation: 'Pengamatan yang baik dilakukan secara sistematis, terencana, dan dapat diulang untuk mendapatkan data yang valid.'
                },
                {
                    question: 'Apa yang harus dilakukan sebelum menulis laporan pengamatan?',
                    options: [
                        'Langsung menulis tanpa observasi',
                        'Menentukan objek dan melakukan pengamatan',
                        'Menulis kesimpulan terlebih dahulu',
                        'Membuat puisi tentang objek'
                    ],
                    correct: 1,
                    explanation: 'Sebelum menulis laporan, tentukan objek yang akan diamati dan lakukan pengamatan secara teliti.'
                },
                {
                    question: 'Laporan pengamatan yang baik menggunakan...',
                    options: [
                        'Bahasa gaul dan slang',
                        'Bahasa formal dan ilmiah',
                        'Bahasa puitis dan metaforis',
                        'Bahasa sehari-hari yang informal'
                    ],
                    correct: 1,
                    explanation: 'Laporan pengamatan menggunakan bahasa formal, ilmiah, dan teknis sesuai bidang yang diamati.'
                },
                {
                    question: 'Manakah contoh deskripsi bagian yang baik?',
                    options: [
                        'Kupu-kupu itu indah sekali',
                        'Sayap kupu-kupu memiliki corak berwarna kuning dan hitam dengan lebar 5 cm',
                        'Aku suka kupu-kupu',
                        'Kupu-kupu terbang ke mana-mana'
                    ],
                    correct: 1,
                    explanation: 'Deskripsi bagian menjelaskan bagian-bagian objek secara detail dengan data yang spesifik.'
                },
                {
                    question: 'Tujuan klasifikasi dalam laporan pengamatan adalah...',
                    options: [
                        'Memperindah tulisan',
                        'Memudahkan pembaca memahami kelompok objek',
                        'Menambah jumlah kata',
                        'Mengisi ruang kosong'
                    ],
                    correct: 1,
                    explanation: 'Klasifikasi membantu pembaca memahami pengelompokan objek berdasarkan kategori tertentu.'
                },
                {
                    question: 'Laporan pengamatan sebaiknya ditulis...',
                    options: [
                        'Segera setelah pengamatan tanpa revisi',
                        'Setelah data dikumpulkan dan dianalisis',
                        'Sebelum melakukan pengamatan',
                        'Kapan saja tanpa persiapan'
                    ],
                    correct: 1,
                    explanation: 'Laporan ditulis setelah data terkumpul dan dianalisis agar hasilnya akurat dan komprehensif.'
                },
                {
                    question: 'Apa yang membedakan laporan pengamatan dengan cerita?',
                    options: [
                        'Laporan menggunakan bahasa puitis',
                        'Laporan bersifat objektif berdasarkan data',
                        'Laporan lebih pendek dari cerita',
                        'Laporan tidak memiliki struktur'
                    ],
                    correct: 1,
                    explanation: 'Laporan pengamatan bersifat objektif berdasarkan data empiris, sedangkan cerita bisa fiktif dan subjektif.'
                }
            ]
        },
        bab2: {
            title: 'Menyampaikan Pesan Kreatif melalui Teks Iklan',
            questions: [
                {
                    question: 'Apa fungsi utama iklan?',
                    options: [
                        'Menghibur pembaca',
                        'Mempengaruhi dan membujuk konsumen',
                        'Mendidik masyarakat',
                        'Menulis cerita'
                    ],
                    correct: 1,
                    explanation: 'Fungsi utama iklan adalah mempengaruhi dan membujuk konsumen untuk menggunakan produk atau jasa yang ditawarkan.'
                },
                {
                    question: 'Unsur yang TIDAK termasuk dalam teks iklan adalah...',
                    options: [
                        'Judul/Headline',
                        'Slogan/Tagline',
                        'Daftar Pustaka',
                        'Call to Action'
                    ],
                    correct: 2,
                    explanation: 'Daftar pustaka tidak termasuk unsur iklan. Unsur iklan meliputi judul, isi, slogan, logo, ilustrasi, dan CTA.'
                },
                {
                    question: 'Contoh kata kerja imperatif dalam iklan adalah...',
                    options: [
                        'Indah, cantik, hebat',
                        'Beli, dapatkan, coba',
                        'Dia, mereka, kami',
                        'Tetapi, namun, sehingga'
                    ],
                    correct: 1,
                    explanation: 'Kata kerja imperatif adalah kata kerja perintah/ajakan seperti "beli", "dapatkan", "coba", "kunjungi".'
                },
                {
                    question: 'Apa yang dimaksud dengan Call to Action (CTA)?',
                    options: [
                        'Nama produk yang diiklankan',
                        'Ajakan untuk bertindak',
                        'Gambar dalam iklan',
                        'Musik latar iklan'
                    ],
                    correct: 1,
                    explanation: 'Call to Action adalah ajakan kepada konsumen untuk melakukan tindakan tertentu, seperti "Beli sekarang!" atau "Kunjungi toko kami!"'
                },
                {
                    question: 'Jenis iklan berdasarkan medianya adalah...',
                    options: [
                        'Iklan baik dan iklan buruk',
                        'Iklan cetak, elektronik, luar ruang, digital',
                        'Iklan panjang dan iklan pendek',
                        'Iklan berwarna dan hitam putih'
                    ],
                    correct: 1,
                    explanation: 'Berdasarkan media, iklan dibedakan menjadi: cetak (koran, majalah), elektronik (TV, radio), luar ruang (baliho), dan digital (sosial media).'
                },
                {
                    question: 'Slogan yang efektif adalah...',
                    options: [
                        'Panjang dan rumit',
                        'Singkat, mudah diingat, dan menarik',
                        'Menggunakan bahasa asing',
                        'Tidak ada hubungannya dengan produk'
                    ],
                    correct: 1,
                    explanation: 'Slogan yang efektif harus singkat, mudah diingat, dan mencerminkan keunggulan produk atau jasa.'
                },
                {
                    question: 'Contoh iklan yang baik adalah...',
                    options: [
                        'Iklan yang menipu konsumen',
                        'Iklan yang informatif dan persuasif',
                        'Iklan yang memuat SARA',
                        'Iklan yang tidak jelas produknya'
                    ],
                    correct: 1,
                    explanation: 'Iklan yang baik bersifat informatif (memberikan informasi jelas) dan persuasif (membujuk secara etis).'
                },
                {
                    question: 'Apa fungsi logo dalam iklan?',
                    options: [
                        'Memperindah desain',
                        'Membedakan produk dari kompetitor',
                        'Menambah panjang iklan',
                        'Tidak ada fungsi khusus'
                    ],
                    correct: 1,
                    explanation: 'Logo berfungsi sebagai identitas visual yang membedakan produk dari kompetitor dan membantu konsumen mengenali brand.'
                },
                {
                    question: 'Bahasa iklan sebaiknya...',
                    options: [
                        'Rumit dan sulit dipahami',
                        'Singkat, jelas, dan menarik',
                        'Menggunakan bahasa daerah',
                        'Formal seperti surat dinas'
                    ],
                    correct: 1,
                    explanation: 'Bahasa iklan harus singkat, jelas, dan menarik agar mudah dipahami dan diingat oleh konsumen.'
                },
                {
                    question: 'Manakah yang termasuk iklan layanan masyarakat?',
                    options: [
                        'Iklan produk smartphone',
                        'Iklan tentang bahaya narkoba',
                        'Iklan makanan cepat saji',
                        'Iklan kosmetik'
                    ],
                    correct: 1,
                    explanation: 'Iklan layanan masyarakat berisi pesan sosial yang bertujuan meningkatkan kesadaran masyarakat, seperti bahaya narkoba.'
                },
                {
                    question: 'Kata sifat yang sering digunakan dalam iklan adalah...',
                    options: [
                        'Kecil, buruk, jelek',
                        'Terbaik, berkualitas, hebat',
                        'Sedih, marah, takut',
                        'Pergi, datang, duduk'
                    ],
                    correct: 1,
                    explanation: 'Iklan menggunakan kata sifat positif untuk menarik konsumen, seperti "terbaik", "berkualitas", "hebat", "luar biasa".'
                },
                {
                    question: 'Apa yang dimaksud dengan target audiens?',
                    options: [
                        'Semua orang di dunia',
                        'Kelompok orang yang menjadi sasaran iklan',
                        'Hanya anak-anak',
                        'Hanya orang dewasa'
                    ],
                    correct: 1,
                    explanation: 'Target audiens adalah kelompok spesifik yang menjadi sasaran iklan berdasarkan usia, gender, minat, dll.'
                },
                {
                    question: 'Iklan yang etis adalah iklan yang...',
                    options: [
                        'Menipu konsumen dengan janji palsu',
                        'Jujur dan tidak menyesatkan',
                        'Memuat unsur SARA',
                        'Merendahkan produk lain'
                    ],
                    correct: 1,
                    explanation: 'Iklan yang etis bersifat jujur, tidak menyesatkan, dan menghormati konsumen serta pesaing.'
                },
                {
                    question: 'Fungsi ilustrasi dalam iklan adalah...',
                    options: [
                        'Mengisi ruang kosong',
                        'Menarik perhatian dan memperjelas pesan',
                        'Membuat iklan lebih mahal',
                        'Tidak ada fungsi khusus'
                    ],
                    correct: 1,
                    explanation: 'Ilustrasi (gambar/foto) berfungsi menarik perhatian visual dan membantu memperjelas pesan iklan.'
                },
                {
                    question: 'Manakah contoh slogan yang baik?',
                    options: [
                        'Produk kami biasa saja',
                        'Cantik Alami, Percaya Diri!',
                        'Beli kalau mau, tidak juga tidak apa-apa',
                        'Produk kami seperti produk lain'
                    ],
                    correct: 1,
                    explanation: 'Slogan yang baik singkat, menarik, dan menyampaikan keunggulan produk secara positif.'
                },
                {
                    question: 'Iklan digital biasanya ditampilkan di...',
                    options: [
                        'Koran dan majalah',
                        'Sosial media dan website',
                        'Baliho dan spanduk',
                        'Radio dan TV'
                    ],
                    correct: 1,
                    explanation: 'Iklan digital ditampilkan di platform online seperti sosial media (Instagram, Facebook) dan website.'
                },
                {
                    question: 'Apa yang harus dilakukan sebelum membuat iklan?',
                    options: [
                        'Langsung membuat tanpa riset',
                        'Menentukan tujuan dan mengenali target audiens',
                        'Menyalin iklan orang lain',
                        'Membuat tanpa perencanaan'
                    ],
                    correct: 1,
                    explanation: 'Sebelum membuat iklan, tentukan tujuan iklan dan kenali siapa target audiens yang akan disasar.'
                },
                {
                    question: 'Headline yang efektif adalah...',
                    options: [
                        'Panjang dan bertele-tele',
                        'Menarik perhatian dan informatif',
                        'Menggunakan bahasa sulit',
                        'Tidak ada hubungannya dengan produk'
                    ],
                    correct: 1,
                    explanation: 'Headline yang efektif harus menarik perhatian dalam hitungan detik dan memberikan informasi inti.'
                },
                {
                    question: 'Iklan yang baik sebaiknya...',
                    options: [
                        'Menggunakan banyak kata sulit',
                        'Mudah dipahami oleh target audiens',
                        'Hanya menggunakan gambar tanpa teks',
                        'Dibuat sesulit mungkin'
                    ],
                    correct: 1,
                    explanation: 'Iklan yang baik harus mudah dipahami oleh target audiens sesuai dengan karakteristik mereka.'
                },
                {
                    question: 'Apa perbedaan iklan komersial dan non-komersial?',
                    options: [
                        'Tidak ada perbedaan',
                        'Iklan komersial untuk keuntungan, non-komersial untuk sosial',
                        'Iklan komersial lebih pendek',
                        'Iklan non-komersial lebih mahal'
                    ],
                    correct: 1,
                    explanation: 'Iklan komersial bertujuan mendapatkan keuntungan (produk/jasa), sedangkan non-komersial untuk kepentingan sosial.'
                }
            ]
        },
        bab3: {
            title: 'Menyusun Artikel Ilmiah Populer',
            questions: [
                {
                    question: 'Apa perbedaan utama artikel ilmiah dan artikel ilmiah populer?',
                    options: [
                        'Artikel ilmiah lebih pendek',
                        'Artikel ilmiah populer menggunakan bahasa yang lebih mudah dipahami',
                        'Artikel ilmiah populer tidak memerlukan data',
                        'Tidak ada perbedaan'
                    ],
                    correct: 1,
                    explanation: 'Artikel ilmiah populer menggunakan bahasa semi-formal yang mudah dipahami masyarakat umum, sedangkan artikel ilmiah menggunakan bahasa teknis.'
                },
                {
                    question: 'Struktur artikel ilmiah populer terdiri dari...',
                    options: [
                        'Judul, Bab, Subbab',
                        'Judul, Lead, Isi, Penutup',
                        'Tesis, Argumentasi, Penegasan',
                        'Ekposisi, Komplikasi, Klimaks'
                    ],
                    correct: 1,
                    explanation: 'Struktur artikel ilmiah populer: Judul (menarik), Lead (pendahuluan), Isi (pembahasan), Penutup (kesimpulan).'
                },
                {
                    question: 'Apa fungsi lead dalam artikel ilmiah populer?',
                    options: [
                        'Menambah panjang artikel',
                        'Menarik perhatian pembaca di awal',
                        'Menyimpulkan isi artikel',
                        'Menjelaskan metode penelitian'
                    ],
                    correct: 1,
                    explanation: 'Lead berfungsi sebagai paragraf pembuka yang menarik perhatian pembaca dan memberikan gambaran umum topik.'
                },
                {
                    question: 'Topik yang cocok untuk artikel ilmiah populer adalah...',
                    options: [
                        'Rumus matematika kompleks',
                        'Dampak sampah plastik terhadap lingkungan',
                        'Teori fisika kuantum',
                        'Algoritma komputer'
                    ],
                    correct: 1,
                    explanation: 'Topik yang cocok adalah yang dekat dengan kehidupan sehari-hari dan relevan dengan masyarakat umum.'
                },
                {
                    question: 'Dalam artikel ilmiah populer, istilah ilmiah...',
                    options: [
                        'Tidak boleh digunakan',
                        'Harus disertai penjelasan',
                        'Digunakan tanpa penjelasan',
                        'Diganti dengan bahasa gaul'
                    ],
                    correct: 1,
                    explanation: 'Istilah ilmiah boleh digunakan tetapi harus disertai penjelasan agar mudah dipahami pembaca umum.'
                },
                {
                    question: 'Data dalam artikel ilmiah populer berfungsi untuk...',
                    options: [
                        'Memperindah tulisan',
                        'Mendukung argumen dan menambah kredibilitas',
                        'Memenuhi syarat jumlah kata',
                        'Tidak ada fungsi khusus'
                    ],
                    correct: 1,
                    explanation: 'Data dan fakta berfungsi mendukung argumen penulis dan menambah kredibilitas artikel.'
                },
                {
                    question: 'Kutipan dari ahli dalam artikel berfungsi untuk...',
                    options: [
                        'Memperpanjang artikel',
                        'Menambah kredibilitas dan otoritas',
                        'Mengganti pendapat penulis',
                        'Tidak ada fungsi khusus'
                    ],
                    correct: 1,
                    explanation: 'Kutipan dari ahli menambah kredibilitas karena merupakan pendapat dari sumber yang berkompeten di bidangnya.'
                },
                {
                    question: 'Bahasa yang tepat untuk artikel ilmiah populer adalah...',
                    options: [
                        'Bahasa formal kaku',
                        'Bahasa semi-formal dan mudah dipahami',
                        'Bahasa gaul dan slang',
                        'Bahasa puitis dan metaforis'
                    ],
                    correct: 1,
                    explanation: 'Artikel ilmiah populer menggunakan bahasa semi-formal yang tidak terlalu resmi tetapi tetap santun dan mudah dipahami.'
                },
                {
                    question: 'Apa yang dimaksud dengan fenomena sekitar?',
                    options: [
                        'Kejadian di luar negeri',
                        'Peristiwa yang terjadi di lingkungan sekitar',
                        'Fenomena alam semesta',
                        'Kejadian sejarah kuno'
                    ],
                    correct: 1,
                    explanation: 'Fenomena sekitar adalah peristiwa atau kejadian yang terjadi di lingkungan sekitar kita dan dekat dengan kehidupan sehari-hari.'
                },
                {
                    question: 'Artikel ilmiah populer yang baik seharusnya...',
                    options: [
                        'Membosankan dan panjang',
                        'Menarik, informatif, dan mudah dipahami',
                        'Hanya untuk kalangan akademisi',
                        'Menggunakan banyak rumus'
                    ],
                    correct: 1,
                    explanation: 'Artikel ilmiah populer harus menarik, informatif, dan mudah dipahami oleh masyarakat umum.'
                },
                {
                    question: 'Sumber data yang valid untuk artikel ilmiah populer adalah...',
                    options: [
                        'Gosip dan rumor',
                        'Penelitian ilmiah dan data resmi',
                        'Cerita dari mulut ke mulut',
                        'Mimpi dan khayalan'
                    ],
                    correct: 1,
                    explanation: 'Sumber data harus valid dan terpercaya, seperti hasil penelitian ilmiah, data resmi, dan pernyataan ahli.'
                },
                {
                    question: 'Apa tujuan menulis artikel ilmiah populer?',
                    options: [
                        'Mendapatkan gelar akademik',
                        'Menyampaikan informasi ilmiah kepada masyarakat umum',
                        'Menerbitkan jurnal ilmiah',
                        'Menggantikan buku teks'
                    ],
                    correct: 1,
                    explanation: 'Tujuan utama adalah menyampaikan informasi ilmiah dengan bahasa yang mudah dipahami masyarakat umum.'
                },
                {
                    question: 'Kalimat efektif dalam artikel ilmiah populer adalah...',
                    options: [
                        'Kalimat panjang dan rumit',
                        'Kalimat singkat, jelas, dan padat',
                        'Kalimat dengan banyak majas',
                        'Kalimat bahasa asing'
                    ],
                    correct: 1,
                    explanation: 'Kalimat efektif adalah kalimat yang singkat, jelas, dan padat sehingga mudah dipahami pembaca.'
                },
                {
                    question: 'Artikel ilmiah populer biasanya dimuat di...',
                    options: [
                        'Jurnal ilmiah internasional',
                        'Majalah populer, koran, blog',
                        'Buku teks universitas',
                        'Skripsi dan tesis'
                    ],
                    correct: 1,
                    explanation: 'Artikel ilmiah populer dimuat di media yang dapat diakses masyarakat umum seperti majalah, koran, dan blog.'
                },
                {
                    question: 'Lead yang baik dalam artikel ilmiah populer...',
                    options: [
                        'Panjang dan bertele-tele',
                        'Menarik perhatian dan memberikan gambaran umum',
                        'Hanya berisi pertanyaan',
                        'Tidak ada hubungannya dengan isi'
                    ],
                    correct: 1,
                    explanation: 'Lead yang baik harus menarik perhatian pembaca dan memberikan gambaran umum tentang topik yang akan dibahas.'
                },
                {
                    question: 'Apa yang membuat artikel ilmiah populer berbeda dari artikel biasa?',
                    options: [
                        'Panjang artikel',
                        'Dasar ilmiah dan data pendukung',
                        'Jumlah gambar',
                        'Warna tulisan'
                    ],
                    correct: 1,
                    explanation: 'Artikel ilmiah populer didasarkan pada data ilmiah dan fakta, bukan sekadar opini atau cerita.'
                },
                {
                    question: 'Cara memilih topik artikel ilmiah populer adalah...',
                    options: [
                        'Pilih topik yang paling sulit',
                        'Pilih topik yang relevan dan menarik bagi pembaca',
                        'Pilih topik yang sudah banyak dibahas',
                        'Pilih topik yang tidak ada datanya'
                    ],
                    correct: 1,
                    explanation: 'Topik harus relevan dengan kehidupan sehari-hari, menarik bagi pembaca, dan memiliki data pendukung.'
                },
                {
                    question: 'Manakah yang termasuk contoh fenomena sekitar?',
                    options: [
                        'Perubahan iklim global',
                        'Banjir di lingkungan sekitar',
                        'Bintang jatuh',
                        'Kehidupan di planet Mars'
                    ],
                    correct: 1,
                    explanation: 'Fenomena sekitar adalah kejadian yang terjadi di lingkungan kita, seperti banjir di lingkungan sekitar.'
                },
                {
                    question: 'Artikel ilmiah populer yang baik memiliki...',
                    options: [
                        'Banyak kata sulit',
                        'Alur yang jelas dan logis',
                        'Tanpa struktur',
                        'Hanya satu paragraf'
                    ],
                    correct: 1,
                    explanation: 'Artikel yang baik memiliki alur yang jelas dan logis sehingga mudah diikuti oleh pembaca.'
                },
                {
                    question: 'Kesimpulan dalam artikel ilmiah populer berfungsi untuk...',
                    options: [
                        'Menambah panjang artikel',
                        'Merangkum dan menguatkan pesan utama',
                        'Mempersulit pembaca',
                        'Tidak ada fungsi khusus'
                    ],
                    correct: 1,
                    explanation: 'Kesimpulan berfungsi merangkum poin-poin utama dan menguatkan pesan yang ingin disampaikan penulis.'
                }
            ]
        },
        bab4: {
            title: 'Mengulas Isi & Nilai dalam Karya melalui Teks Resensi',
            questions: [
                {
                    question: 'Apa pengertian resensi?',
                    options: [
                        'Cerita pendek tentang kehidupan',
                        'Ulasan atau pembahasan tentang suatu karya',
                        'Laporan hasil penelitian',
                        'Puisi tentang alam'
                    ],
                    correct: 1,
                    explanation: 'Resensi adalah ulasan atau pembahasan tentang suatu karya (buku, film, dll) yang mencakup kelebihan dan kekurangan.'
                },
                {
                    question: 'Kata "resensi" berasal dari bahasa...',
                    options: [
                        'Indonesia',
                        'Inggris',
                        'Belanda',
                        'Arab'
                    ],
                    correct: 2,
                    explanation: 'Kata "resensi" berasal dari bahasa Belanda "resentie" yang berarti "membicarakan kembali".'
                },
                {
                    question: 'Struktur teks resensi terdiri dari...',
                    options: [
                        'Judul, Isi, Penutup',
                        'Data Buku, Pendahuluan, Ringkasan, Kelebihan, Kekurangan, Rekomendasi',
                        'Tesis, Argumentasi, Penegasan',
                        'Ekposisi, Komplikasi, Klimaks'
                    ],
                    correct: 1,
                    explanation: 'Struktur resensi: Data Buku, Pendahuluan, Ringkasan, Kelebihan, Kekurangan, dan Rekomendasi.'
                },
                {
                    question: 'Apa fungsi resensi bagi pembaca?',
                    options: [
                        'Mengganti membaca buku',
                        'Memberikan pertimbangan sebelum membeli/membaca karya',
                        'Menambah koleksi buku',
                        'Tidak ada fungsi khusus'
                    ],
                    correct: 1,
                    explanation: 'Resensi memberikan gambaran dan pertimbangan kepada pembaca sebelum memutuskan untuk membeli atau membaca karya.'
                },
                {
                    question: 'Data buku dalam resensi mencakup...',
                    options: [
                        'Nama penulis saja',
                        'Judul, pengarang, penerbit, tahun terbit, tebal halaman',
                        'Harga buku',
                        'Warna sampul buku'
                    ],
                    correct: 1,
                    explanation: 'Data buku mencakup informasi teknis: judul, pengarang, penerbit, tahun terbit, tebal halaman, dan ISBN.'
                },
                {
                    question: 'Resensi yang baik bersifat...',
                    options: [
                        'Subjektif berdasarkan perasaan',
                        'Objektif berdasarkan fakta',
                        'Hanya memuji karya',
                        'Hanya mengkritik karya'
                    ],
                    correct: 1,
                    explanation: 'Resensi yang baik bersifat objektif, menilai berdasarkan fakta dan analisis, bukan sekadar opini pribadi.'
                },
                {
                    question: 'Apa yang harus dihindari saat menulis resensi?',
                    options: [
                        'Memberikan penilaian',
                        'Menceritakan ulang isi buku secara lengkap',
                        'Menyebutkan kelebihan',
                        'Menyebutkan kekurangan'
                    ],
                    correct: 1,
                    explanation: 'Hindari menceritakan ulang isi buku secara lengkap (spoiler). Resensi cukup memberikan gambaran umum.'
                },
                {
                    manakah: 'Manakah yang termasuk kelebihan dalam resensi?',
                    options: [
                        'Gaya bahasa yang menarik',
                        'Alur yang membosankan',
                        'Tokoh yang tidak berkembang',
                        'Tema yang tidak jelas'
                    ],
                    correct: 0,
                    explanation: 'Kelebihan adalah hal-hal positif dari karya, seperti gaya bahasa menarik, alur menarik, tokoh kuat, dll.'
                },
                {
                    question: 'Rekomendasi dalam resensi berisi...',
                    options: [
                        'Sinopsis lengkap buku',
                        'Penilaian apakah karya layak dibaca',
                        'Biografi pengarang',
                        'Daftar isi buku'
                    ],
                    correct: 1,
                    explanation: 'Rekomendasi berisi penilaian keseluruhan dan saran apakah karya tersebut layak dibaca atau tidak.'
                },
                {
                    question: 'Bahasa evaluatif dalam resensi menggunakan...',
                    options: [
                        'Kata-kata emosional',
                        'Kata kerja mental seperti "menurut", "berpendapat"',
                        'Bahasa gaul',
                        'Bahasa puitis'
                    ],
                    correct: 1,
                    explanation: 'Resensi menggunakan kata kerja mental (menurut, berpendapat, menganggap) untuk mengevaluasi karya.'
                },
                {
                    question: 'Apa yang dimaksud dengan ringkasan dalam resensi?',
                    options: [
                        'Cerita lengkap buku',
                        'Ikhtisar isi buku secara singkat',
                        'Biografi pengarang',
                        'Daftar pustaka'
                    ],
                    correct: 1,
                    explanation: 'Ringkasan adalah ikhtisar atau sinopsis singkat tentang isi buku tanpa mengungkapkan ending.'
                },
                {
                    question: 'Resensi buku yang baik seharusnya...',
                    options: [
                        'Hanya berisi pujian',
                        'Seimbang antara kelebihan dan kekurangan',
                        'Hanya berisi kritik',
                        'Tidak memberikan penilaian'
                    ],
                    correct: 1,
                    explanation: 'Resensi yang baik seimbang, menyebutkan kelebihan dan kekurangan secara objektif.'
                },
                {
                    question: 'Tujuan mengulas karya melalui resensi adalah...',
                    options: [
                        'Menjatuhkan pengarang',
                        'Memberikan apresiasi dan evaluasi karya',
                        'Mengganti karya asli',
                        'Menambah penghasilan'
                    ],
                    correct: 1,
                    explanation: 'Resensi bertujuan memberikan apresiasi terhadap karya dan evaluasi yang konstruktif.'
                },
                {
                    question: 'Konjungsi temporal yang digunakan dalam resensi adalah...',
                    options: [
                        'Tetapi, namun',
                        'Kemudian, selanjutnya, setelah itu',
                        'Karena, sehingga',
                        'Atau, serta'
                    ],
                    correct: 1,
                    explanation: 'Konjungsi temporal (waktu) seperti "kemudian", "selanjutnya" digunakan untuk mengurutkan pembahasan.'
                },
                {
                    question: 'Resensi film berbeda dari resensi buku karena...',
                    options: [
                        'Tidak ada perbedaan',
                        'Mengulas aspek visual, audio, dan akting',
                        'Lebih pendek',
                        'Tidak memerlukan data'
                    ],
                    correct: 1,
                    explanation: 'Resensi film mengulas aspek khusus seperti sinematografi, akting, musik, dan efek visual.'
                },
                {
                    question: 'Buku pendahuluan dalam resensi berisi...',
                    options: [
                        'Ringkasan lengkap buku',
                        'Gambaran umum buku dan latar belakang pengarang',
                        'Kekurangan buku',
                        'Rekomendasi'
                    ],
                    correct: 1,
                    explanation: 'Pendahuluan berisi gambaran umum buku dan informasi tentang pengarang untuk menarik minat pembaca.'
                },
                {
                    question: 'Resensi yang baik menggunakan...',
                    options: [
                        'Bahasa emosional berlebihan',
                        'Bahasa evaluatif yang objektif',
                        'Bahasa gaul',
                        'Bahasa puitis'
                    ],
                    correct: 1,
                    explanation: 'Resensi menggunakan bahasa evaluatif yang objektif untuk menilai karya secara profesional.'
                },
                {
                    question: 'Apa dampak positif menulis resensi?',
                    options: [
                        'Mendapatkan uang',
                        'Meningkatkan kemampuan analisis dan kritis',
                        'Terkenal',
                        'Tidak ada dampak'
                    ],
                    correct: 1,
                    explanation: 'Menulis resensi melatih kemampuan berpikir kritis dan analitis dalam mengevaluasi suatu karya.'
                },
                {
                    question: 'Resensi yang spoiler akan...',
                    options: [
                        'Menarik pembaca',
                        'Mengurangi keinginan membaca karya asli',
                        'Meningkatkan penjualan',
                        'Tidak berpengaruh'
                    ],
                    correct: 1,
                    explanation: 'Spoiler akan mengurangi keinginan pembaca untuk membaca karya asli karena sudah tahu jalan ceritanya.'
                },
                {
                    question: 'Kekurangan dalam resensi disampaikan secara...',
                    options: [
                        'Kasar dan menyerang',
                        'Sopan dan konstruktif',
                        'Diam-diam tanpa sebutkan',
                        'Dibesar-besarkan'
                    ],
                    correct: 1,
                    explanation: 'Kekurangan disampaikan secara sopan dan konstruktif sebagai kritik yang membangun, bukan menyerang.'
                }
            ]
        },
        bab5: {
            title: 'Menyelami Lubuk Hati melalui Puisi Masa Kini',
            questions: [
                {
                    question: 'Apa pengertian puisi?',
                    options: [
                        'Cerita yang panjang',
                        'Karya sastra yang menggunakan bahasa padat dan penuh makna',
                        'Laporan ilmiah',
                        'Teks drama'
                    ],
                    correct: 1,
                    explanation: 'Puisi adalah karya sastra yang menggunakan bahasa yang dipadatkan, dipersingkat, diberi irama dengan paduan kata-kata yang indah dan penuh makna.'
                },
                {
                    question: 'Ciri khas puisi adalah...',
                    options: [
                        'Ditulis dalam paragraf',
                        'Ditulis dalam bait dan baris',
                        'Menggunakan dialog',
                        'Tanpa struktur'
                    ],
                    correct: 1,
                    explanation: 'Puisi ditulis dalam bentuk bait (kumpulan baris), bukan paragraf seperti prosa.'
                },
                {
                    question: 'Yang dimaksud dengan diksi dalam puisi adalah...',
                    options: [
                        'Jumlah baris',
                        'Pilihan kata yang tepat dan bermakna',
                        'Rima akhir baris',
                        'Tema puisi'
                    ],
                    correct: 1,
                    explanation: 'Diksi adalah pilihan kata yang digunakan penyair untuk menyampaikan makna dan keindahan.'
                },
                {
                    question: 'Puisi kontemporer memiliki ciri...',
                    options: [
                        'Terikat aturan rima',
                        'Eksperimental dan tidak terikat aturan',
                        'Selalu 4 bait',
                        'Harus bersajak a-b-a-b'
                    ],
                    correct: 1,
                    explanation: 'Puisi kontemporer bersifat eksperimental dan tidak terikat aturan baku seperti puisi lama.'
                },
                {
                    question: 'Apa yang dimaksud dengan imaji dalam puisi?',
                    options: [
                        'Gambaran yang merangsang indra',
                        'Jumlah kata per baris',
                        'Rima puisi',
                        'Tema puisi'
                    ],
                    correct: 0,
                    explanation: 'Imaji adalah penggunaan bahasa yang merangsang indra (penglihatan, pendengaran, perabaan) sehingga pembaca seolah-olah merasakan.'
                },
                {
                    question: 'Contoh puisi lama adalah...',
                    options: [
                        'Puisi bebas',
                        'Pantun, syair, gurindam',
                        'Haiku',
                        'Puisi prosa'
                    ],
                    correct: 1,
                    explanation: 'Puisi lama yang terikat aturan meliputi pantun, syair, gurindam, talibun, dll.'
                },
                {
                    question: 'Rima dalam puisi adalah...',
                    options: [
                        'Jumlah baris',
                        'Persamaan bunyi di akhir baris',
                        'Tema puisi',
                        'Amanat puisi'
                    ],
                    correct: 1,
                    explanation: 'Rima adalah persamaan atau perulangan bunyi pada akhir baris puisi yang menciptakan keindahan.'
                },
                {
                    question: 'Amanat dalam puisi adalah...',
                    options: [
                        'Judul puisi',
                        'Pesan yang ingin disampaikan penyair',
                        'Rima puisi',
                        'Jumlah bait'
                    ],
                    correct: 1,
                    explanation: 'Amanat adalah pesan moral atau nasihat yang ingin disampaikan penyair melalui puisinya.'
                },
                {
                    question: 'Puisi masa kini sering membahas tentang...',
                    options: [
                        'Hanya tentang cinta',
                        'Berbagai tema sesuai kondisi zaman',
                        'Hanya tentang alam',
                        'Hanya tentang pahlawan'
                    ],
                    correct: 1,
                    explanation: 'Puisi masa kini bebas membahas berbagai tema sesuai kondisi dan isu terkini.'
                },
                {
                    question: 'Majas dalam puisi berfungsi untuk...',
                    options: [
                        'Memperpanjang puisi',
                        'Menciptakan keindahan dan makna kiasan',
                        'Membingungkan pembaca',
                        'Tidak ada fungsi'
                    ],
                    correct: 1,
                    explanation: 'Majas (bahasa figuratif) menciptakan keindahan dan makna kiasan yang membuat puisi lebih hidup.'
                },
                {
                    question: 'Puisi "Aku" karya Chairil Anwar termasuk jenis...',
                    options: [
                        'Pantun',
                        'Puisi baru/sastra modern',
                        'Syair',
                        'Gurindam'
                    ],
                    correct: 1,
                    explanation: 'Puisi karya Chairil Anwar termasuk puisi baru/sastra modern Indonesia yang bebas dari aturan baku.'
                },
                {
                    question: 'Irama dalam puisi tercipta dari...',
                    options: [
                        'Jumlah kata',
                        'Pola bunyi yang berulang',
                        'Warna tulisan',
                        'Ukuran kertas'
                    ],
                    correct: 1,
                    explanation: 'Irama tercipta dari pola bunyi yang berulang, termasuk rima, ritme, dan perulangan kata.'
                },
                {
                    question: 'Puisi yang baik seharusnya...',
                    options: [
                        'Sulit dipahami',
                        'Mampu menyentuh perasaan pembaca',
                        'Sangat panjang',
                        'Tanpa makna'
                    ],
                    correct: 1,
                    explanation: 'Puisi yang baik mampu menyentuh perasaan dan pikiran pembaca melalui keindahan bahasa dan kedalaman makna.'
                },
                {
                    question: 'Perbedaan puisi dan prosa adalah...',
                    options: [
                        'Tidak ada perbedaan',
                        'Puisi ditulis dalam bait, prosa dalam paragraf',
                        'Puisi lebih panjang',
                        'Prosa tidak memiliki tema'
                    ],
                    correct: 1,
                    explanation: 'Perbedaan utama: puisi ditulis dalam bait-baris, prosa dalam paragraf-kalimat. Puisi lebih padat makna.'
                },
                {
                    question: 'Apa yang dimaksud dengan tema puisi?',
                    options: [
                        'Judul puisi',
                        'Pokok permasalahan dalam puisi',
                        'Rima puisi',
                        'Jumlah baris'
                    ],
                    correct: 1,
                    explanation: 'Tema adalah pokok permasalahan atau ide utama yang menjadi dasar penulisan puisi.'
                },
                {
                    question: 'Puisi visual adalah...',
                    options: [
                        'Puisi yang dibacakan',
                        'Puisi yang bentuknya menyerupai objek tertentu',
                        'Puisi bergambar',
                        'Puisi tanpa kata'
                    ],
                    correct: 1,
                    explanation: 'Puisi visual/konkret adalah puisi yang bentuk susunannya menyerupai objek yang dibahas.'
                },
                {
                    question: 'Untuk mengapresiasi puisi, kita perlu...',
                    options: [
                        'Membaca sekilas saja',
                        'Membaca berulang dan memahami maknanya',
                        'Hanya melihat judul',
                        'Menghafal tanpa memahami'
                    ],
                    correct: 1,
                    explanation: 'Mengapresiasi puisi memerlukan pembacaan berulang dan pemahaman mendalam terhadap makna.'
                },
                {
                    question: 'Nada dalam puisi adalah...',
                    options: [
                        'Suara saat membaca',
                        'Sikap penyair terhadap pembaca atau subjek',
                        'Irama puisi',
                        'Tema puisi'
                    ],
                    correct: 1,
                    explanation: 'Nada adalah sikap atau perasaan penyair yang tercermin dalam puisi, bisa serius, humoris, sedih, dll.'
                },
                {
                    question: 'Perasaan dalam puisi dapat berupa...',
                    options: [
                        'Hanya kebahagiaan',
                        'Berbagai emosi: sedih, senang, marah, cinta',
                        'Hanya kesedihan',
                        'Tanpa emosi'
                    ],
                    correct: 1,
                    explanation: 'Puisi bisa mengungkapkan berbagai emosi manusia: sedih, senang, marah, cinta, rindu, harap, dll.'
                },
                {
                    question: 'Puisi yang menggunakan bahasa sehari-hari disebut...',
                    options: [
                        'Puisi lama',
                        'Puisi kontemporer/modern',
                        'Pantun',
                        'Syair'
                    ],
                    correct: 1,
                    explanation: 'Puisi kontemporer/modern sering menggunakan bahasa sehari-hari yang lebih dekat dengan pembaca.'
                }
            ]
        },
        bab6: {
            title: 'Menyuarakan Gagasan secara Kritis & Diplomatis',
            questions: [
                {
                    question: 'Apa pengertian teks eksposisi?',
                    options: [
                        'Teks cerita fiksi',
                        'Teks yang berisi gagasan dengan data dan fakta',
                        'Teks puisi',
                        'Teks drama'
                    ],
                    correct: 1,
                    explanation: 'Teks eksposisi berisi gagasan, pendapat, atau argumen tentang suatu topik yang disertai data dan fakta.'
                },
                {
                    question: 'Struktur teks eksposisi terdiri dari...',
                    options: [
                        'Judul, Isi, Penutup',
                        'Tesis, Argumentasi, Penegasan Ulang',
                        'Perkenalan, Masalah, Penyelesaian',
                        'Ekposisi, Komplikasi, Klimaks'
                    ],
                    correct: 1,
                    explanation: 'Struktur eksposisi: Tesis (pendapat), Argumentasi (alasan+bukti), Penegasan Ulang (kesimpulan).'
                },
                {
                    question: 'Tesis dalam teks eksposisi adalah...',
                    options: [
                        'Kesimpulan',
                        'Pernyataan pendapat atau gagasan utama',
                        'Contoh ilustrasi',
                        'Data statistik'
                    ],
                    correct: 1,
                    explanation: 'Tesis adalah pernyataan pendapat atau gagasan utama yang akan dibuktikan melalui argumentasi.'
                },
                {
                    question: 'Argumentasi yang kuat menggunakan...',
                    options: [
                        'Opini tanpa bukti',
                        'Data, fakta, dan contoh konkret',
                        'Perasaan pribadi',
                        'Desas-desus'
                    ],
                    correct: 1,
                    explanation: 'Argumentasi yang kuat didukung oleh data, fakta, contoh konkret, dan kutipan ahli.'
                },
                {
                    question: 'Cara menyampaikan kritik yang santun adalah...',
                    options: [
                        'Menyerang pribadi lawan',
                        'Fokus pada masalah, bukan orangnya',
                        'Berteriak marah',
                        'Diam saja'
                    ],
                    correct: 1,
                    explanation: 'Kritik yang santun fokus pada masalah/ide, bukan menyerang pribadi. Gunakan nada tenang dan profesional.'
                },
                {
                    question: 'Contoh kalimat argumentatif yang baik adalah...',
                    options: [
                        'Pokoknya saya benar!',
                        'Berdasarkan data BPS, angka kemiskinan turun 2%',
                        'Menurut saya semua orang salah',
                        'Saya tidak suka dengan kebijakan ini'
                    ],
                    correct: 1,
                    explanation: 'Kalimat argumentatif yang baik menggunakan data dan fakta, bukan emosi atau opini semata.'
                },
                {
                    question: 'Eksposisi definisi menjelaskan...',
                    options: [
                        'Proses atau tahapan',
                        'Definisi atau pengertian suatu konsep',
                        'Perbandingan dua hal',
                        'Pertentangan pendapat'
                    ],
                    correct: 1,
                    explanation: 'Eksposisi definisi menjelaskan pengertian atau definisi suatu konsep secara rinci.'
                },
                {
                    question: 'Logical fallacy adalah...',
                    options: [
                        'Logika yang benar',
                        'Kesalahan berpikir dalam argumentasi',
                        'Data yang valid',
                        'Fakta ilmiah'
                    ],
                    correct: 1,
                    explanation: 'Logical fallacy (kesalahan logika) adalah kesalahan dalam berpikir yang membuat argumen tidak valid.'
                },
                {
                    question: 'Untuk berargumentasi secara efektif, kita perlu...',
                    options: [
                        'Berbicara sekeras mungkin',
                        'Menggunakan data, fakta, dan logika yang benar',
                        'Mengabaikan pendapat orang lain',
                        'Menggunakan emosi'
                    ],
                    correct: 1,
                    explanation: 'Argumentasi efektif menggunakan data, fakta, logika yang benar, dan menghargai pendapat lawan bicara.'
                },
                {
                    question: 'Eksposisi perbandingan menunjukkan...',
                    options: [
                        'Pertentangan',
                        'Persamaan dan perbedaan dua hal atau lebih',
                        'Definisi',
                        'Proses'
                    ],
                    correct: 1,
                    explanation: 'Eksposisi perbandingan menunjukkan persamaan dan perbedaan antara dua hal atau lebih.'
                },
                {
                    question: 'Menyampaikan pendapat secara diplomatis berarti...',
                    options: [
                        'Berbohong untuk menghindari konflik',
                        'Menyampaikan dengan sopan dan menghargai orang lain',
                        'Diam saja',
                        'Mengalah meski benar'
                    ],
                    correct: 1,
                    explanation: 'Diplomatis berarti menyampaikan pendapat dengan sopan, menghargai orang lain, tetapi tetap tegas pada prinsip.'
                },
                {
                    question: 'Kata "menurut saya" menunjukkan...',
                    options: [
                        'Fakta ilmiah',
                        'Pendapat atau opini pribadi',
                        'Data statistik',
                        'Kutipan ahli'
                    ],
                    correct: 1,
                    explanation: '"Menurut saya" menunjukkan bahwa yang disampaikan adalah pendapat pribadi, bukan fakta mutlak.'
                },
                {
                    question: 'Penegasan ulang dalam eksposisi berfungsi untuk...',
                    options: [
                        'Menambah argumen baru',
                        'Menguatkan kembali tesis di akhir teks',
                        'Mengubah pendapat',
                        'Mempersulit pembaca'
                    ],
                    correct: 1,
                    explanation: 'Penegasan ulang berfungsi menguatkan kembali tesis/pendapat awal setelah disertai argumentasi.'
                },
                {
                    question: 'Contoh topik eksposisi yang baik adalah...',
                    options: [
                        'Gosip artis',
                        'Dampak positif dan negatif media sosial',
                        'Cerita horor',
                        'Dongeng anak'
                    ],
                    correct: 1,
                    explanation: 'Topik eksposisi harus relevan, bisa dianalisis secara kritis, dan memiliki data pendukung.'
                },
                {
                    question: 'Menghargai pendapat orang lain meski berbeda adalah...',
                    options: [
                        'Tanda kalah',
                        'Sikap dewasa dan berpikiran terbuka',
                        'Tanda setuju',
                        'Tidak penting'
                    ],
                    correct: 1,
                    explanation: 'Menghargai perbedaan pendapat menunjukkan kedewasaan dan pikiran terbuka dalam berdiskusi.'
                },
                {
                    question: 'Eksposisi pertentangan menunjukkan...',
                    options: [
                        'Persamaan',
                        'Kontras atau perbedaan yang tajam',
                        'Definisi',
                        'Proses'
                    ],
                    correct: 1,
                    explanation: 'Eksposisi pertentangan menunjukkan kontras atau perbedaan yang tajam antara dua hal.'
                },
                {
                    question: 'Contoh konjungsi yang digunakan dalam eksposisi adalah...',
                    options: [
                        'Wah, aduh',
                        'Namun, akan tetapi, oleh karena itu',
                        'Hore, yey',
                        'Hmm, oh'
                    ],
                    correct: 1,
                    explanation: 'Eksposisi menggunakan konjungsi logis seperti "namun", "akan tetapi", "oleh karena itu" untuk menghubungkan argumen.'
                },
                {
                    question: 'Data statistik dalam eksposisi berfungsi untuk...',
                    options: [
                        'Memperindah tulisan',
                        'Mendukung argumen dengan bukti kuat',
                        'Membingungkan pembaca',
                        'Tidak ada fungsi'
                    ],
                    correct: 1,
                    explanation: 'Data statistik memberikan bukti kuat dan konkret yang mendukung argumen penulis.'
                },
                {
                    question: 'Berdebat secara sehat berarti...',
                    options: [
                        'Siapa yang paling keras suaranya',
                        'Bertukar ide dengan sopan dan berbasis data',
                        'Menyerang pribadi lawan',
                        'Mengabaikan pendapat lain'
                    ],
                    correct: 1,
                    explanation: 'Debat sehat bertukar ide dengan sopan, menggunakan data dan fakta, serta menghargai lawan bicara.'
                },
                {
                    question: 'Kesimpulan dalam eksposisi seharusnya...',
                    options: [
                        'Menambah argumen baru',
                        'Merangkum dan memperkuat tesis awal',
                        'Mengubah topik',
                        'Mempersulit pembaca'
                    ],
                    correct: 1,
                    explanation: 'Kesimpulan merangkum poin-poin utama dan memperkuat kembali tesis yang telah dibuktikan.'
                }
            ]
        },
        bab7: {
            title: 'Menafsirkan Pesan dalam Teks Drama',
            questions: [
                {
                    question: 'Apa pengertian drama?',
                    options: [
                        'Cerita pendek',
                        'Karya sastra yang dipentaskan melalui dialog dan akting',
                        'Puisi panjang',
                        'Laporan ilmiah'
                    ],
                    correct: 1,
                    explanation: 'Drama adalah karya sastra yang menggambarkan kehidupan melalui dialog dan gerakan (akting) yang dipentaskan.'
                },
                {
                    question: 'Kata "drama" berasal dari bahasa...',
                    options: [
                        'Indonesia',
                        'Yunani',
                        'Latin',
                        'Arab'
                    ],
                    correct: 1,
                    explanation: 'Kata "drama" berasal dari bahasa Yunani "dran" yang berarti "berbuat" atau "bertindak".'
                },
                {
                    question: 'Unsur intrinsik drama meliputi...',
                    options: [
                        'Hanya dialog',
                        'Tema, alur, penokohan, setting, dialog, amanat',
                        'Hanya tokoh',
                        'Hanya setting'
                    ],
                    correct: 1,
                    explanation: 'Unsur intrinsik drama: tema, alur/plot, penokohan, setting, dialog, amanat, dan konflik.'
                },
                {
                    question: 'Dialog dalam drama berfungsi untuk...',
                    options: [
                        'Memperpanjang naskah',
                        'Mengungkapkan karakter tokoh dan menggerakkan cerita',
                        'Mengisi waktu',
                        'Tidak ada fungsi khusus'
                    ],
                    correct: 1,
                    explanation: 'Dialog mengungkapkan karakter tokoh, menyampaikan informasi, dan menggerakkan jalan cerita.'
                },
                {
                    question: 'Drama yang berakhir menyedihkan disebut...',
                    options: [
                        'Komedi',
                        'Tragedi',
                        'Farce',
                        'Opera'
                    ],
                    correct: 1,
                    explanation: 'Tragedi adalah jenis drama yang berakhir menyedihkan atau tragis.'
                },
                {
                    question: 'Klimaks dalam drama adalah...',
                    options: [
                        'Awal cerita',
                        'Puncak konflik yang paling menegangkan',
                        'Akhir cerita',
                        'Pengenalan tokoh'
                    ],
                    correct: 1,
                    explanation: 'Klimaks adalah puncak konflik di mana ketegangan mencapai titik tertinggi.'
                },
                {
                    question: 'Penokohan dalam drama mencakup...',
                    options: [
                        'Nama tokoh saja',
                        'Sifat, watak, dan karakteristik tokoh',
                        'Jumlah tokoh',
                        'Kostum tokoh'
                    ],
                    correct: 1,
                    explanation: 'Penokohan mencakup sifat, watak, perilaku, dan karakteristik yang dimiliki setiap tokoh.'
                },
                {
                    question: 'Setting dalam drama adalah...',
                    options: [
                        'Dialog tokoh',
                        'Latar waktu, tempat, dan suasana',
                        'Tema cerita',
                        'Jumlah adegan'
                    ],
                    correct: 1,
                    explanation: 'Setting adalah latar yang mencakup waktu, tempat, dan suasana di mana cerita berlangsung.'
                },
                {
                    question: 'Drama komedi bertujuan untuk...',
                    options: [
                        'Menyedihkan penonton',
                        'Menghibur dan membuat tertawa',
                        'Mendidik dengan serius',
                        'Menakut-nakuti'
                    ],
                    correct: 1,
                    explanation: 'Komedi bertujuan menghibur penonton dengan humor dan situasi lucu.'
                },
                {
                    question: 'Amanat dalam drama adalah...',
                    options: [
                        'Judul drama',
                        'Pesan moral yang ingin disampaikan',
                        'Dialog pembuka',
                        'Nama tokoh'
                    ],
                    correct: 1,
                    explanation: 'Amanat adalah pesan moral atau pelajaran yang ingin disampaikan pengarang melalui drama.'
                },
                {
                    question: 'Konflik dalam drama berfungsi untuk...',
                    options: [
                        'Membosankan penonton',
                        'Menciptakan ketegangan dan menggerakkan cerita',
                        'Menghentikan cerita',
                        'Tidak ada fungsi'
                    ],
                    correct: 1,
                    explanation: 'Konflik menciptakan ketegangan, mendorong perkembangan cerita, dan membuat drama menarik.'
                },
                {
                    question: 'Drama yang dialognya dinyanyikan disebut...',
                    options: [
                        'Tragedi',
                        'Komedi',
                        'Opera',
                        'Farce'
                    ],
                    correct: 2,
                    explanation: 'Opera adalah jenis drama di mana dialog dinyanyikan, bukan diucapkan.'
                },
                {
                    question: 'Untuk menganalisis drama, kita perlu memperhatikan...',
                    options: [
                        'Hanya judul',
                        'Tema, tokoh, konflik, dialog, dan amanat',
                        'Hanya dialog',
                        'Hanya kostum'
                    ],
                    correct: 1,
                    explanation: 'Analisis drama mencakup tema, tokoh, konflik, dialog, setting, dan amanat secara keseluruhan.'
                },
                {
                    question: 'Melodrama adalah drama yang...',
                    options: [
                        'Sangat lucu',
                        'Mengharukan dan sentimentil',
                        'Sangat menakutkan',
                        'Tanpa dialog'
                    ],
                    correct: 1,
                    explanation: 'Melodrama adalah drama yang mengharukan, penuh emosi, dan sentimentil.'
                },
                {
                    question: 'Ekposisi dalam drama berisi...',
                    options: [
                        'Puncak konflik',
                        'Pengenalan tokoh, latar, dan situasi awal',
                        'Penyelesaian masalah',
                        'Kesimpulan'
                    ],
                    correct: 1,
                    explanation: 'Ekposisi adalah bagian awal yang memperkenalkan tokoh, latar, dan situasi cerita.'
                },
                {
                    question: 'Resolusi dalam drama adalah...',
                    options: [
                        'Awal cerita',
                        'Penyelesaian masalah atau konflik',
                        'Puncak konflik',
                        'Pengenalan tokoh'
                    ],
                    correct: 1,
                    explanation: 'Resolusi adalah bagian di mana konflik mulai diselesaikan atau cerita menuju akhir.'
                },
                {
                    question: 'Drama yang tidak masuk akal dan konyol disebut...',
                    options: [
                        'Tragedi',
                        'Komedi',
                        'Farce',
                        'Opera'
                    ],
                    correct: 2,
                    explanation: 'Farce adalah drama konyol yang tidak masuk akal, biasanya untuk menghibur.'
                },
                {
                    question: 'Mengaitkan drama dengan kehidupan nyata berarti...',
                    options: [
                        'Menyalin drama',
                        'Mengambil pelajaran dan menerapkan nilai drama',
                        'Mengabaikan drama',
                        'Hanya menonton'
                    ],
                    correct: 1,
                    explanation: 'Mengaitkan dengan kehidupan nyata berarti mengambil pelajaran dan menerapkan nilai-nilai dari drama.'
                },
                {
                    question: 'Naskah drama berbeda dari novel karena...',
                    options: [
                        'Tidak ada perbedaan',
                        'Naskah drama berisi dialog dan petunjuk panggung',
                        'Novel lebih pendek',
                        'Naskah drama tanpa tokoh'
                    ],
                    correct: 1,
                    explanation: 'Naskah drama berisi dialog dan petunjuk panggung (stage direction), sedangkan novel berisi narasi.'
                },
                {
                    question: 'Pesan moral dalam drama dapat ditemukan melalui...',
                    options: [
                        'Judul saja',
                        'Analisis konflik, tokoh, dan penyelesaian cerita',
                        'Dialog pertama',
                        'Nama pengarang'
                    ],
                    correct: 1,
                    explanation: 'Pesan moral ditemukan melalui analisis keseluruhan: konflik yang dihadapi, karakter tokoh, dan bagaimana cerita diselesaikan.'
                }
            ]
        }
    }
};

// Export
window.QUIZ_DATA = QUIZ_DATA;
