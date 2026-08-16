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

// ==========================================
// BANK SOAL LAMA (dipindah dari quiz-game-system.js)
// Format: answer -> correct, options dipertahankan
// ==========================================
QUIZ_DATA['matematika'] = {
    umum: {
        title: 'Matematika',
        questions: [
        { question: "Hasil dari 15 + (-8) adalah...", options: ["A. 23", "B. 7", "C. -7", "D. -23"], correct: 1 },
        { question: "Hasil dari (-12) × 3 adalah...", options: ["A. 36", "B. -36", "C. -9", "D. 9"], correct: 1 },
        { question: "Hasil dari 24 : (-6) adalah...", options: ["A. 4", "B. -4", "C. -18", "D. 18"], correct: 1 },
        { question: "Bilangan yang lebih kecil dari -5 adalah...", options: ["A. -3", "B. 0", "C. -7", "D. 5"], correct: 2 },
        { question: "Hasil dari (-10) + (-15) adalah...", options: ["A. -25", "B. 25", "C. -5", "D. 5"], correct: 0 },
        { question: "Hasil dari 8 - (-12) adalah...", options: ["A. -4", "B. 4", "C. 20", "D. -20"], correct: 2 },
        { question: "Hasil dari (-3) × (-4) adalah...", options: ["A. -12", "B. 12", "C. -7", "D. 7"], correct: 1 },
        { question: "Hasil dari (-45) : 9 adalah...", options: ["A. 5", "B. -5", "C. -36", "D. 36"], correct: 1 },
        { question: "Urutan dari terkecil: -3, 5, -8, 0, -1", options: ["A. -8,-3,-1,0,5", "B. 5,0,-1,-3,-8", "C. -1,-3,-8,0,5", "D. 5,-1,0,-3,-8"], correct: 0 },
        { question: "Suhu di Jakarta 32°C, di Dieng 15°C. Selisihnya...", options: ["A. 47°C", "B. 17°C", "C. -17°C", "D. -47°C"], correct: 1 },
        { question: "Hasil dari (-5)² adalah...", options: ["A. -25", "B. 25", "C. -10", "D. 10"], correct: 1 },
        { question: "Hasil dari 100 : (-10) + 15 adalah...", options: ["A. -5", "B. 5", "C. 25", "D. -25"], correct: 1 },
        { question: "Nilai dari |−7| + |3| adalah...", options: ["A. -10", "B. 10", "C. -4", "D. 4"], correct: 1 },
        { question: "Hasil dari 2³ + 3² adalah...", options: ["A. 17", "B. 15", "C. 12", "D. 25"], correct: 0 },
        { question: "FPB dari 12 dan 18 adalah...", options: ["A. 2", "B. 3", "C. 6", "D. 9"], correct: 2 },
        { question: "KPK dari 8 dan 12 adalah...", options: ["A. 24", "B. 48", "C. 96", "D. 12"], correct: 0 },
        { question: "Hasil dari 1/2 + 1/3 adalah...", options: ["A. 2/5", "B. 5/6", "C. 1/5", "D. 3/5"], correct: 1 },
        { question: "Hasil dari 0,75 × 0,4 adalah...", options: ["A. 0.3", "B. 0.03", "C. 3", "D. 30"], correct: 0 },
        { question: "Jika 3x + 5 = 20, maka x = ...", options: ["A. 3", "B. 5", "C. 7", "D. 15"], correct: 1 },
        { question: "Luas persegi dengan sisi 7 cm adalah...", options: ["A. 14 cm²", "B. 28 cm²", "C. 49 cm²", "D. 21 cm²"], correct: 2 }
        ]
    }
};

QUIZ_DATA['biologi_pencernaan'] = {
    umum: {
        title: 'Biologi - Sistem Pencernaan',
        questions: [
        { question: "Organ pencernaan pertama yang dilewati makanan adalah...", options: ["A. Lambung", "B. Kerongkongan", "C. Mulut", "D. Usus halus"], correct: 2 },
        { question: "Enzim yang mencerna pati di mulut adalah...", options: ["A. Pepsin", "B. Amilase", "C. Lipase", "D. Tripsin"], correct: 1 },
        { question: "Pencernaan makanan terbanyak terjadi di...", options: ["A. Mulut", "B. Lambung", "C. Usus halus", "D. Usus besar"], correct: 2 },
        { question: "Fungsi utama usus besar adalah...", options: ["A. Mencerna makanan", "B. Menyerap air", "C. Menghasilkan empedu", "D. Menghasilkan enzim"], correct: 1 },
        { question: "Organ yang menghasilkan empedu adalah...", options: ["A. Lambung", "B. Pankreas", "C. Hati", "D. Usus halus"], correct: 2 },
        { question: "Gastritis adalah peradangan pada...", options: ["A. Hati", "B. Lambung", "C. Usus", "D. Pankreas"], correct: 1 },
        { question: "Gerakan otot di saluran pencernaan disebut...", options: ["A. Absorpsi", "B. Digesti", "C. Peristaltik", "D. Sekresi"], correct: 2 },
        { question: "Vitamin yang diserap bersama lemak adalah...", options: ["A. Vitamin C", "B. Vitamin B", "C. Vitamin A", "D. Semua vitamin"], correct: 2 },
        { question: "Pencernaan oleh gigi termasuk pencernaan...", options: ["A. Kimiawi", "B. Mekanis", "C. Biologis", "D. Fisika"], correct: 1 },
        { question: "Diabetes mellitus berkaitan dengan organ...", options: ["A. Hati", "B. Lambung", "C. Pankreas", "D. Ginjal"], correct: 2 },
        { question: "Enzim yang mengubah protein di lambung adalah...", options: ["A. Amilase", "B. Lipase", "C. Pepsin", "D. Tripsin"], correct: 2 },
        { question: "Villi usus halus berfungsi untuk...", options: ["A. Mencerna lemak", "B. Menyerap nutrisi", "C. Menghasilkan enzim", "D. Menyimpan makanan"], correct: 1 },
        { question: "Lambung menghasilkan asam...", options: ["A. Sulfat", "B. Klorida", "C. Nitrat", "D. Fosfat"], correct: 1 },
        { question: "Appendisitis adalah peradangan pada...", options: ["A. Usus halus", "B. Usus buntu", "C. Usus besar", "D. Lambung"], correct: 1 },
        { question: "Pankreas menghasilkan enzim...", options: ["A. Amilase saja", "B. Lipase saja", "C. Tripsin saja", "D. Berbagai enzim"], correct: 3 },
        { question: "Penyerapan alkohol terutama di...", options: ["A. Lambung", "B. Usus halus", "C. Hati", "D. Usus besar"], correct: 1 },
        { question: "Konstipasi terjadi karena...", options: ["A. Kelebihan air", "B. Kekurangan serat", "C. Kelebihan enzim", "D. Kekurangan lemak"], correct: 1 },
        { question: "Organ terakhir dalam saluran cerna adalah...", options: ["A. Usus halus", "B. Usus besar", "C. Rektum", "D. Anus"], correct: 2 },
        { question: "Empedu membantu mencerna...", options: ["A. Protein", "B. Karbohidrat", "C. Lemak", "D. Vitamin"], correct: 2 },
        { question: "Maag disebabkan oleh berlebihnya...", options: ["A. Empedu", "B. Asam lambung", "C. Air liur", "D. Getah pankreas"], correct: 1 }
        ]
    }
};

QUIZ_DATA['biologi_darah'] = {
    umum: {
        title: 'Biologi - Sistem Peredaran Darah',
        questions: [
        { question: "Fungsi sel darah merah adalah...", options: ["A. Melawan infeksi", "B. Mengangkut oksigen", "C. Pembekuan darah", "D. Mengangkut nutrisi"], correct: 1 },
        { question: "Pembuluh yang membawa darah dari jantung adalah...", options: ["A. Vena", "B. Arteri", "C. Kapiler", "D. Aorta"], correct: 1 },
        { question: "Bagian jantung yang menerima O₂ dari paru-paru...", options: ["A. Serambi Kanan", "B. Serambi Kiri", "C. Bilik Kanan", "D. Bilik Kiri"], correct: 1 },
        { question: "Sirkulasi kecil adalah dari jantung ke...", options: ["A. Seluruh tubuh", "B. Paru-paru", "C. Hati", "D. Otak"], correct: 1 },
        { question: "Tekanan darah normal adalah...", options: ["A. 100/60", "B. 120/80", "C. 140/90", "D. 160/100"], correct: 1 },
        { question: "Trombosit berfungsi untuk...", options: ["A. Mengangkut oksigen", "B. Melawan infeksi", "C. Pembekuan darah", "D. Mengangkut nutrisi"], correct: 2 },
        { question: "Darah dengan CO₂ tinggi mengalir di...", options: ["A. Arteri", "B. Vena", "C. Kapiler", "D. Aorta"], correct: 1 },
        { question: "Jantung koroner menyerang...", options: ["A. Paru-paru", "B. Otak", "C. Pembuluh jantung", "D. Ginjal"], correct: 2 },
        { question: "Plasma darah berfungsi untuk...", options: ["A. Mengangkut oksigen", "B. Melawan infeksi", "C. Mengangkut zat", "D. Pembekuan"], correct: 2 },
        { question: "Jumlah bilik jantung manusia...", options: ["A. 1", "B. 2", "C. 3", "D. 4"], correct: 1 },
        { question: "Leukosit berfungsi untuk...", options: ["A. Mengangkut oksigen", "B. Melawan infeksi", "C. Pembekuan darah", "D. Mengangkut nutrisi"], correct: 1 },
        { question: "Kapasitas darah manusia sekitar...", options: ["A. 2-3 liter", "B. 4-5 liter", "C. 6-7 liter", "D. 8-9 liter"], correct: 1 },
        { question: "Aorta adalah pembuluh darah...", options: ["A. Vena terbesar", "B. Arteri terbesar", "C. Kapiler terbesar", "D. Vena terkecil"], correct: 1 },
        { question: "Golongan darah universal donor adalah...", options: ["A. A", "B. B", "C. AB", "D. O"], correct: 3 },
        { question: "Golongan darah universal recipient adalah...", options: ["A. A", "B. B", "C. AB", "D. O"], correct: 2 },
        { question: "Denyut jantung normal dewasa adalah...", options: ["A. 40-60/menit", "B. 60-100/menit", "C. 100-120/menit", "D. 120-140/menit"], correct: 1 },
        { question: "Anemia adalah kekurangan...", options: ["A. Sel darah putih", "B. Sel darah merah", "C. Trombosit", "D. Plasma"], correct: 1 },
        { question: "Hemoglobin mengandung mineral...", options: ["A. Kalsium", "B. Besi", "C. Natrium", "D. Kalium"], correct: 1 },
        { question: "Limpa berfungsi untuk...", options: ["A. Memproduksi darah", "B. Menyaring darah", "C. Mengedarkan darah", "D. Membekukan darah"], correct: 1 },
        { question: "Hipertensi adalah tekanan darah...", options: ["A. Rendah", "B. Normal", "C. Tinggi", "D. Tidak stabil"], correct: 2 }
        ]
    }
};

QUIZ_DATA['biologi_pernapasan'] = {
    umum: {
        title: 'Biologi - Sistem Pernapasan',
        questions: [
        { question: "Organ pernapasan pertama adalah...", options: ["A. Paru-paru", "B. Hidung", "C. Trakea", "D. Bronkus"], correct: 1 },
        { question: "Pertukaran gas terjadi di...", options: ["A. Bronkiolus", "B. Trakea", "C. Alveolus", "D. Bronkus"], correct: 2 },
        { question: "Saat inspirasi, diafragma akan...", options: ["A. Mengendur", "B. Berkontraksi", "C. Tetap", "D. Naik"], correct: 1 },
        { question: "Paru-paru kanan memiliki lobus...", options: ["A. 1", "B. 2", "C. 3", "D. 4"], correct: 2 },
        { question: "TBC disebabkan oleh...", options: ["A. Virus", "B. Bakteri", "C. Jamur", "D. Parasit"], correct: 1 },
        { question: "Fungsi silia adalah...", options: ["A. Menghangatkan", "B. Menyaring debu", "C. Melembabkan", "D. Menghasilkan lendir"], correct: 1 },
        { question: "Kapasitas paru-paru dewasa...", options: ["A. 3 liter", "B. 6 liter", "C. 9 liter", "D. 12 liter"], correct: 1 },
        { question: "Gas yang dikeluarkan saat ekspirasi...", options: ["A. O₂", "B. N₂", "C. CO₂", "D. H₂"], correct: 2 },
        { question: "Suara dihasilkan di organ...", options: ["A. Hidung", "B. Faring", "C. Laring", "D. Trakea"], correct: 2 },
        { question: "Pernapasan sel menghasilkan...", options: ["A. ADP", "B. ATP", "C. AMP", "D. GDP"], correct: 1 },
        { question: "Asma menyerang bagian...", options: ["A. Hidung", "B. Trakea", "C. Bronkus", "D. Alveolus"], correct: 2 },
        { question: "Emfisema disebabkan oleh...", options: ["A. Infeksi", "B. Alergi", "C. Merokok", "D. Polusi"], correct: 2 },
        { question: "Otot pernapasan utama adalah...", options: ["A. Otot interkostal", "B. Diafragma", "C. Otot dada", "D. Otot perut"], correct: 1 },
        { question: "Pneumonia menyerang bagian...", options: ["A. Hidung", "B. Trakea", "C. Bronkus", "D. Alveolus"], correct: 3 },
        { question: "Volume tidal normal adalah...", options: ["A. 250 ml", "B. 500 ml", "C. 750 ml", "D. 1000 ml"], correct: 1 }
        ]
    }
};

QUIZ_DATA['biologi_ekskresi'] = {
    umum: {
        title: 'Biologi - Sistem Ekskresi',
        questions: [
        { question: "Organ utama ekskresi adalah...", options: ["A. Hati", "B. Ginjal", "C. Kulit", "D. Paru-paru"], correct: 1 },
        { question: "Unit fungsional ginjal adalah...", options: ["A. Glomerulus", "B. Nefron", "C. Ureter", "D. Kandung kemih"], correct: 1 },
        { question: "Penyerapan kembali zat disebut...", options: ["A. Filtrasi", "B. Reabsorpsi", "C. Augmentasi", "D. Ekskresi"], correct: 1 },
        { question: "Zat sisa metabolisme protein adalah...", options: ["A. Asam urat", "B. Urea", "C. Kreatinin", "D. CO₂"], correct: 1 },
        { question: "Endapan mineral di ginjal disebut...", options: ["A. Gagal ginjal", "B. Nefritis", "C. Batu ginjal", "D. Diabetes"], correct: 2 },
        { question: "Manusia memiliki ginjal...", options: ["A. 1", "B. 2", "C. 3", "D. 4"], correct: 1 },
        { question: "Saluran dari ginjal ke kandung kemih...", options: ["A. Uretra", "B. Ureter", "C. Nefron", "D. Glomerulus"], correct: 1 },
        { question: "Kandung kemih menampung...", options: ["A. 100-200 ml", "B. 300-500 ml", "C. 600-800 ml", "D. 900-1000 ml"], correct: 1 },
        { question: "Zat yang tidak disaring di glomerulus...", options: ["A. Air", "B. Glukosa", "C. Protein", "D. Urea"], correct: 2 },
        { question: "Kulit mengeluarkan zat sisa berupa...", options: ["A. Urin", "B. Keringat", "C. Empedu", "D. CO₂"], correct: 1 },
        { question: "Gagal ginjal dapat ditangani dengan...", options: ["A. Operasi", "B. Cuci darah", "C. Transfusi", "D. Suntik"], correct: 1 },
        { question: "Glomerulus berfungsi untuk...", options: ["A. Menyerap air", "B. Menyaring darah", "C. Menghasilkan urin", "D. Menyimpan urin"], correct: 1 },
        { question: "Diabetes insipidus menyerang...", options: ["A. Hati", "B. Ginjal", "C. Pankreas", "D. Lambung"], correct: 1 },
        { question: "Hati mengubah amonia menjadi...", options: ["A. Asam urat", "B. Urea", "C. Kreatinin", "D. Glukosa"], correct: 1 },
        { question: "Warna normal urin adalah...", options: ["A. Merah", "B. Kuning jernih", "C. Hijau", "D. Biru"], correct: 1 }
        ]
    }
};

QUIZ_DATA['fisika_usaha'] = {
    umum: {
        title: 'Fisika - Usaha, Energi, dan Pesawat Sederhana',
        questions: [
        { question: "Rumus usaha adalah...", options: ["A. W = F × d", "B. W = F / d", "C. W = F + d", "D. W = F - d"], correct: 0 },
        { question: "Satuan usaha dalam SI adalah...", options: ["A. Newton", "B. Watt", "C. Joule", "D. Pascal"], correct: 2 },
        { question: "Energi kinetik dipengaruhi oleh...", options: ["A. Massa dan tinggi", "B. Massa dan kecepatan", "C. Tinggi dan kecepatan", "D. Massa saja"], correct: 1 },
        { question: "Rumus energi potensial adalah...", options: ["A. Ep = m × v²", "B. Ep = m × g × h", "C. Ep = F × d", "D. Ep = m × v"], correct: 1 },
        { question: "Tuas kelas 1 contohnya...", options: ["A. Gerobak dorong", "B. Gunting", "C. Sekop", "D. Pancing"], correct: 1 },
        { question: "Fungsi katrol tetap adalah...", options: ["A. Mengubah arah gaya", "B. Memperbesar gaya", "C. Memperkecil gaya", "D. Mengubah kecepatan"], correct: 0 },
        { question: "Bidang miring memudahkan dengan cara...", options: ["A. Mengubah arah", "B. Memperkecil gaya", "C. Memperbesar gaya", "D. Mengubah kecepatan"], correct: 1 },
        { question: "Daya adalah...", options: ["A. Usaha/waktu", "B. Gaya/waktu", "C. Usaha×waktu", "D. Gaya×waktu"], correct: 0 },
        { question: "Satuan daya adalah...", options: ["A. Joule", "B. Newton", "C. Watt", "D. Pascal"], correct: 2 },
        { question: "Hukum kekekalan energi menyatakan...", options: ["A. Energi dapat diciptakan", "B. Energi dapat dimusnahkan", "C. Energi berubah bentuk", "D. Energi hilang"], correct: 2 },
        { question: "Katrol bebas berfungsi untuk...", options: ["A. Mengubah arah", "B. Memperbesar gaya", "C. Memperkecil gaya", "D. Mengubah kecepatan"], correct: 1 },
        { question: "Rumus daya adalah...", options: ["A. P = W × t", "B. P = W / t", "C. P = F × d", "D. P = m × g"], correct: 1 },
        { question: "Energi tidak dapat diciptakan sesuai hukum...", options: ["A. Newton", "B. Archimedes", "C. Kekekalan Energi", "D. Pascal"], correct: 2 },
        { question: "1 Joule sama dengan...", options: ["A. 1 N/m", "B. 1 N×m", "C. 1 N/m²", "D. 1 N×m²"], correct: 1 },
        { question: "Sekrup termasuk jenis...", options: ["A. Tuas", "B. Katrol", "C. Bidang miring", "D. Roda poros"], correct: 2 }
        ]
    }
};

QUIZ_DATA['fisika_tekanan'] = {
    umum: {
        title: 'Fisika - Tekanan pada Zat',
        questions: [
        { question: "Rumus tekanan adalah...", options: ["A. P = F × A", "B. P = F / A", "C. P = A / F", "D. P = F + A"], correct: 1 },
        { question: "Satuan tekanan adalah...", options: ["A. Newton", "B. Joule", "C. Watt", "D. Pascal"], correct: 3 },
        { question: "Hukum Pascal menyatakan tekanan...", options: ["A. Berkurang", "B. Bertambah", "C. Diteruskan ke segala arah", "D. Hilang"], correct: 2 },
        { question: "Alat Hukum Pascal adalah...", options: ["A. Katrol", "B. Dongkrak hidrolik", "C. Tuas", "D. Bidang miring"], correct: 1 },
        { question: "Hukum Archimedes menyatakan...", options: ["A. Tekanan diteruskan", "B. Gaya apung", "C. Tekanan sebanding", "D. Tekanan berbanding terbalik"], correct: 1 },
        { question: "Tekanan hidrostatis dipengaruhi...", options: ["A. Luas dan kedalaman", "B. ρ, g, dan h", "C. Volume dan berat", "D. Luas dan gaya"], correct: 1 },
        { question: "Kapal terapung menggunakan...", options: ["A. Hukum Pascal", "B. Hukum Archimedes", "C. Hukum Newton", "D. Hukum Ohm"], correct: 1 },
        { question: "Tekanan pada zat padat dipengaruhi...", options: ["A. Gaya dan volume", "B. Gaya dan luas", "C. Massa dan volume", "D. Massa dan luas"], correct: 1 },
        { question: "Manometer mengukur...", options: ["A. Suhu", "B. Tekanan gas", "C. Kelembaban", "D. Kecepatan"], correct: 1 },
        { question: "Semakin dalam, tekanan...", options: ["A. Semakin kecil", "B. Semakin besar", "C. Tetap", "D. Hilang"], correct: 1 },
        { question: "Massa jenis air adalah...", options: ["A. 100 kg/m³", "B. 1000 kg/m³", "C. 10000 kg/m³", "D. 1 kg/m³"], correct: 1 },
        { question: "Barometer mengukur...", options: ["A. Tekanan air", "B. Tekanan udara", "C. Tekanan darah", "D. Tekanan gas"], correct: 1 },
        { question: "Balon udara naik karena...", options: ["A. Massa jenis lebih besar", "B. Massa jenis lebih kecil", "C. Gaya gravitasi", "D. Tekanan udara"], correct: 1 },
        { question: "1 Pascal sama dengan...", options: ["A. 1 N/m", "B. 1 N×m", "C. 1 N/m²", "D. 1 N×m²"], correct: 2 },
        { question: "Prinsip kerja pompa air menggunakan...", options: ["A. Hukum Newton", "B. Hukum Pascal", "C. Hukum Archimedes", "D. Hukum Ohm"], correct: 1 }
        ]
    }
};

QUIZ_DATA['ppkn'] = {
    umum: {
        title: 'PPKn',
        questions: [
        { question: "Yang mengusulkan dasar negara adalah...", options: ["A. Hatta", "B. Soekarno", "C. Soepomo", "D. Yamin"], correct: 1 },
        { question: "Pancasila terdiri dari... sila", options: ["A. 3", "B. 4", "C. 5", "D. 6"], correct: 2 },
        { question: "Sila pertama berbunyi...", options: ["A. Kemanusiaan", "B. Ketuhanan", "C. Persatuan", "D. Kerakyatan"], correct: 1 },
        { question: "Lambang sila pertama adalah...", options: ["A. Rantai", "B. Bintang", "C. Pohon Beringin", "D. Kepala Banteng"], correct: 1 },
        { question: "Pancasila jadi dasar negara tanggal...", options: ["A. 1 Juni 1945", "B. 17 Agustus 1945", "C. 18 Agustus 1945", "D. 29 April 1945"], correct: 2 },
        { question: "Contoh sila ketiga adalah...", options: ["A. Menghormati agama", "B. Menghargai musyawarah", "C. Menjaga kerukunan suku", "D. Tidak membeda-bedakan"], correct: 2 },
        { question: "Padi dan kapas lambang sila...", options: ["A. Kedua", "B. Ketiga", "C. Keempat", "D. Kelima"], correct: 3 },
        { question: "BPUPKI dibentuk tanggal...", options: ["A. 29 April 1945", "B. 1 Juni 1945", "C. 17 Agustus 1945", "D. 18 Agustus 1945"], correct: 0 },
        { question: "Pancasila berasal dari bahasa...", options: ["A. Jawa", "B. Arab", "C. Sanskerta", "D. Belanda"], correct: 2 },
        { question: "Sila keempat berbunyi...", options: ["A. Keadilan Sosial", "B. Persatuan Indonesia", "C. Kemanusiaan", "D. Kerakyatan"], correct: 3 },
        { question: "Lambang sila kedua adalah...", options: ["A. Bintang", "B. Rantai", "C. Pohon Beringin", "D. Banteng"], correct: 1 },
        { question: "Gotong royong mencerminkan sila...", options: ["A. Pertama", "B. Kedua", "C. Ketiga", "D. Keempat"], correct: 2 },
        { question: "Toleransi antar umat beragama sila...", options: ["A. Pertama", "B. Kedua", "C. Ketiga", "D. Keempat"], correct: 0 },
        { question: "Menghargai pendapat orang lain sila...", options: ["A. Pertama", "B. Kedua", "C. Ketiga", "D. Keempat"], correct: 3 },
        { question: "Tidak diskriminatif sila...", options: ["A. Pertama", "B. Kedua", "C. Ketiga", "D. Kelima"], correct: 1 },
        { question: "Mencintai produk dalam negeri sila...", options: ["A. Pertama", "B. Kedua", "C. Ketiga", "D. Keempat"], correct: 2 },
        { question: "Menaati peraturan sila...", options: ["A. Ketiga", "B. Keempat", "C. Kelima", "D. Semua sila"], correct: 3 },
        { question: "Hari lahir Pancasila adalah...", options: ["A. 17 Agustus", "B. 1 Juni", "C. 2 Oktober", "D. 28 Oktober"], correct: 1 },
        { question: "Piagam Jakarta tanggal...", options: ["A. 1 Juni 1945", "B. 22 Juni 1945", "C. 17 Agustus 1945", "D. 18 Agustus 1945"], correct: 1 },
        { question: "Pancasila sebagai... negara", options: ["A. Lambang", "B. Dasar", "C. Simbol", "D. Lambang"], correct: 1 },
        { question: "UUD 1945 adalah hukum... di Indonesia", options: ["A. Tertinggi", "B. Terendah", "C. Biasa", "D. Khusus"], correct: 0 },
        { question: "MPR terdiri dari...", options: ["A. DPR dan Presiden", "B. DPR dan DPD", "C. Presiden dan DPD", "D. DPR dan MA"], correct: 1 },
        { question: "Presiden Indonesia dipilih oleh...", options: ["A. MPR", "B. DPR", "C. Rakyat langsung", "D. DPD"], correct: 2 },
        { question: "Indonesia menganut sistem pemerintahan...", options: ["A. Parlementer", "B. Presidensial", "C. Monarki", "D. Federasi"], correct: 1 },
        { question: "MK berwenang menguji UU terhadap...", options: ["A. UUD", "B. Peraturan lain", "C. Hukum adat", "D. Hukum internasional"], correct: 0 },
        { question: "Hak warga negara yang diatur UUD 1945 adalah...", options: ["A. Hak memilih", "B. Hak berpendapat", "C. Hak mendapat pendidikan", "D. Semua benar"], correct: 3 },
        { question: "Kewajiban warga negara termasuk...", options: ["A. Membayar pajak", "B. Membela negara", "C. Menjunjung hukum", "D. Semua benar"], correct: 3 },
        { question: "Amandemen UUD 1945 dilakukan oleh...", options: ["A. Presiden", "B. DPR", "C. MPR", "D. MA"], correct: 2 },
        { question: "Jumlah amandemen UUD 1945 adalah...", options: ["A. 1 kali", "B. 2 kali", "C. 3 kali", "D. 4 kali"], correct: 3 },
        { question: "Dekrit Presiden 5 Juli 1959 dikeluarkan oleh...", options: ["A. Soeharto", "B. Soekarno", "C. Habibie", "D. Megawati"], correct: 1 },
        { question: "TNI dan POLRI adalah alat... negara", options: ["A. Pertahanan dan keamanan", "B. Pemerintahan", "C. Peradilan", "D. Legislatif"], correct: 0 },
        { question: "Hukum tertinggi di Indonesia adalah...", options: ["A. UU", "B. PP", "C. UUD 1945", "D. Perpres"], correct: 2 },
        { question: "Perppu dikeluarkan oleh...", options: ["A. DPR", "B. Presiden", "C. MPR", "D. MA"], correct: 1 },
        { question: "Perda dibuat oleh...", options: ["A. Presiden", "B. DPR", "C. Pemerintah Daerah", "D. MPR"], correct: 2 },
        { question: "UU dibuat oleh...", options: ["A. Presiden saja", "B. DPR saja", "C. DPR dan Presiden", "D. MPR"], correct: 2 },
        { question: "PP dibuat untuk menjalankan...", options: ["A. UUD 1945", "B. UU", "C. Perpres", "D. Perda"], correct: 1 },
        { question: "Sumber dari segala sumber hukum adalah...", options: ["A. UUD 1945", "B. Pancasila", "C. UU", "D. Perpres"], correct: 1 },
        { question: "Perppu dikeluarkan dalam keadaan...", options: ["A. Normal", "B. Darurat", "C. Damai", "D. Biasa"], correct: 1 },
        { question: "Peraturan yang bersifat mengikat secara umum adalah...", options: ["A. Perjanjian", "B. Kontrak", "C. Perundang-undangan", "D. Kesepakatan"], correct: 2 },
        { question: "TAP MPR ditetapkan oleh...", options: ["A. Presiden", "B. DPR", "C. MPR", "D. MA"], correct: 2 },
        { question: "Sila yang menjamin kebebasan beragama adalah...", options: ["A. Sila 1", "B. Sila 2", "C. Sila 3", "D. Sila 4"], correct: 0 }
        ]
    }
};

QUIZ_DATA['bindo'] = {
    umum: {
        title: 'Bahasa Indonesia',
        questions: [
        { question: "Kalimat yang ejaannya benar...", options: ["A. Saya pergi ke pasar", "B. Saya kepasaR", "C. Saya pergii", "D. Saya kepasar"], correct: 0 },
        { question: "Sinonim 'indah' adalah...", options: ["A. Jelek", "B. Cantik", "C. Buruk", "D. Biasa"], correct: 1 },
        { question: "Antonim 'tinggi' adalah...", options: ["A. Panjang", "B. Rendah", "C. Besar", "D. Luas"], correct: 1 },
        { question: "Kalimat efektif adalah...", options: ["A. Dia pergi ke sekolah dengan berjalan kaki", "B. Dia berjalan kaki pergi ke sekolah", "C. Dia pergi berjalan kaki ke sekolah", "D. Ke sekolah dia pergi berjalan kaki"], correct: 0 },
        { question: "'Air muka' termasuk majas...", options: ["A. Simile", "B. Metafora", "C. Personifikasi", "D. Hiperbola"], correct: 1 },
        { question: "'Berlari' memiliki imbuhan...", options: ["A. ber-...-i", "B. ber-...-an", "C. ber-", "D. be-...-an"], correct: 2 },
        { question: "Ide pokok di awal paragraf disebut...", options: ["A. Deduktif", "B. Induktif", "C. Campuran", "D. Narasi"], correct: 0 },
        { question: "Teks langkah-langkah membuat sesuatu...", options: ["A. Narasi", "B. Eksposisi", "C. Prosedur", "D. Deskripsi"], correct: 2 },
        { question: "'Memperhatikan' awalan...", options: ["A. me-", "B. mem-", "C. memper-", "D. pe-"], correct: 2 },
        { question: "Huruf kapital benar...", options: ["A. presiden jokowi", "B. Presiden Jokowi", "C. PRESIDEN JOKOWI", "D. presiden Jokowi"], correct: 1 },
        { question: "Kata baku dari 'aktifitas'...", options: ["A. Aktifitas", "B. Aktivitas", "C. Aktif", "D. Aktiv"], correct: 1 },
        { question: "Sinonim 'cepat' adalah...", options: ["A. Lambat", "B. Laju", "C. Diam", "D. Pelan"], correct: 1 },
        { question: "Majas 'badai' untuk emosi...", options: ["A. Simile", "B. Metafora", "C. Hiperbola", "D. Personifikasi"], correct: 2 },
        { question: "Kata depan yang benar...", options: ["A. Di rumah", "B. Dirumah", "C. DiRumah", "D. Di-rumah"], correct: 0 },
        { question: "Singkatan yang benar...", options: ["A. Yg", "B. Yg.", "C. Yang", "D. Yng"], correct: 2 },
        { question: "Sinonim 'bahagia'...", options: ["A. Sedih", "B. Senang", "C. Marah", "D. Takut"], correct: 1 },
        { question: "Antonim 'kaya'...", options: ["A. Miskin", "B. Kaya raya", "C. Sedang", "D. Biasa"], correct: 0 },
        { question: "Kalimat pasif menggunakan...", options: ["A. Me-", "B. Ber-", "C. Di-", "D. Pe-"], correct: 2 },
        { question: "Kata serapan dari bahasa Arab...", options: ["A. Komputer", "B. Masjid", "C. Televisi", "D. Internet"], correct: 1 },
        { question: "Sinonim 'pandai'...", options: ["A. Bodoh", "B. Pintar", "C. Malas", "D. Lemah"], correct: 1 }
        ]
    }
};

QUIZ_DATA['english'] = {
    umum: {
        title: 'Bahasa Inggris',
        questions: [
        { question: "She ___ to school every day.", options: ["A. go", "B. goes", "C. going", "D. went"], correct: 1 },
        { question: "They ___ playing football now.", options: ["A. is", "B. are", "C. am", "D. was"], correct: 1 },
        { question: "I ___ a book yesterday.", options: ["A. read", "B. reads", "C. reading", "D. am reading"], correct: 0 },
        { question: "Opposite of 'hot' is...", options: ["A. Warm", "B. Cool", "C. Cold", "D. Heat"], correct: 2 },
        { question: "She is ___ than her sister.", options: ["A. tall", "B. taller", "C. tallest", "D. more tall"], correct: 1 },
        { question: "This is ___ book.", options: ["A. I", "B. me", "C. my", "D. mine"], correct: 2 },
        { question: "We ___ to the beach last week.", options: ["A. go", "B. goes", "C. went", "D. going"], correct: 2 },
        { question: "___ you like some coffee?", options: ["A. Do", "B. Does", "C. Are", "D. Is"], correct: 0 },
        { question: "Plural of 'child' is...", options: ["A. childs", "B. childes", "C. children", "D. childrens"], correct: 2 },
        { question: "I have ___ completed my homework.", options: ["A. yet", "B. already", "C. still", "D. since"], correct: 1 },
        { question: "He ___ to music every night.", options: ["A. listen", "B. listens", "C. listening", "D. listened"], correct: 1 },
        { question: "The cat is ___ the table.", options: ["A. in", "B. on", "C. at", "D. to"], correct: 1 },
        { question: "She can ___ English well.", options: ["A. speaks", "B. speaking", "C. speak", "D. spoke"], correct: 2 },
        { question: "I ___ breakfast at 7 AM.", options: ["A. have", "B. has", "C. having", "D. had"], correct: 0 },
        { question: "This is ___ book I've ever read.", options: ["A. good", "B. better", "C. best", "D. the best"], correct: 3 },
        { question: "They ___ go to school tomorrow.", options: ["A. will", "B. would", "C. can", "D. could"], correct: 0 },
        { question: "The opposite of 'big' is...", options: ["A. Large", "B. Small", "C. Huge", "D. Giant"], correct: 1 },
        { question: "She ___ her homework now.", options: ["A. do", "B. does", "C. is doing", "D. did"], correct: 2 },
        { question: "I ___ to school by bus.", options: ["A. go", "B. goes", "C. going", "D. went"], correct: 0 },
        { question: "He ___ a new car last month.", options: ["A. buy", "B. buys", "C. bought", "D. buying"], correct: 2 }
        ]
    }
};

QUIZ_DATA['geografi'] = {
    umum: {
        title: 'Geografi / IPS',
        questions: [
        { question: "Indonesia terletak di antara...", options: ["A. Asia dan Australia", "B. Asia dan Eropa", "C. Afrika dan Asia", "D. Eropa dan Australia"], correct: 0 },
        { question: "Gunung tertinggi di Indonesia...", options: ["A. Semeru", "B. Kerinci", "C. Puncak Jaya", "D. Rinjani"], correct: 2 },
        { question: "Indonesia memiliki iklim...", options: ["A. Dingin", "B. Tropis", "C. Subtropis", "D. Kutub"], correct: 1 },
        { question: "Sungai terpanjang di Indonesia...", options: ["A. Musi", "B. Kapuas", "C. Mahakam", "D. Bengawan Solo"], correct: 1 },
        { question: "Bencana alam yang sering terjadi...", options: ["A. Badai salju", "B. Gempa bumi", "C. Aurora", "D. Gurun pasir"], correct: 1 },
        { question: "Pulau terbesar di Indonesia...", options: ["A. Jawa", "B. Sumatera", "C. Kalimantan", "D. Papua"], correct: 2 },
        { question: "Laut di utara Jawa adalah...", options: ["A. Hindia", "B. Jawa", "C. Cina Selatan", "D. Flores"], correct: 1 },
        { question: "Hasil tambang Kalimantan...", options: ["A. Minyak bumi", "B. Batu bara", "C. Emas", "D. Timah"], correct: 1 },
        { question: "Indonesia terdiri dari... provinsi", options: ["A. 30", "B. 32", "C. 34", "D. 36"], correct: 2 },
        { question: "Garis khatulistiwa melintasi...", options: ["A. Jawa", "B. Sumatera", "C. Kalimantan", "D. Sulawesi"], correct: 1 },
        { question: "Ibukota Indonesia adalah...", options: ["A. Surabaya", "B. Jakarta", "C. Bandung", "D. Medan"], correct: 1 },
        { question: "Laut terbesar di Indonesia...", options: ["A. Jawa", "B. Cina Selatan", "C. Hindia", "D. Pasifik"], correct: 2 },
        { question: "Pulau terbanyak penduduknya...", options: ["A. Sumatera", "B. Jawa", "C. Kalimantan", "D. Sulawesi"], correct: 1 },
        { question: "Danau terbesar di Indonesia...", options: ["A. Toba", "B. Singkarak", "C. Maninjau", "D. Sentani"], correct: 0 },
        { question: "Gunung berapi aktif di Jawa...", options: ["A. Semeru", "B. Kerinci", "C. Dempo", "D. Marapi"], correct: 0 }
        ]
    }
};

QUIZ_DATA['ppkn_peraturan'] = {
    umum: {
        title: 'PPKn - Peraturan di Negara Indonesia',
        questions: [

            { question: "Hukum tertinggi di Indonesia adalah...", options: ["A. UU", "B. PP", "C. UUD 1945", "D. Perpres"], correct: 2 },
            { question: "Perppu dikeluarkan oleh...", options: ["A. DPR", "B. Presiden", "C. MPR", "D. MA"], correct: 1 },
            { question: "Perda dibuat oleh...", options: ["A. Presiden", "B. DPR", "C. Pemerintah Daerah", "D. MPR"], correct: 2 },
            { question: "UU dibuat oleh...", options: ["A. Presiden saja", "B. DPR saja", "C. DPR dan Presiden", "D. MPR"], correct: 2 },
            { question: "PP dibuat untuk menjalankan...", options: ["A. UUD 1945", "B. UU", "C. Perpres", "D. Perda"], correct: 1 },
            { question: "Hierarki pertama peraturan adalah...", options: ["A. UU", "B. PP", "C. UUD 1945", "D. TAP MPR"], correct: 2 },
            { question: "Sumber dari segala sumber hukum di Indonesia adalah...", options: ["A. UUD 1945", "B. Pancasila", "C. UU", "D. Perpres"], correct: 1 },
            { question: "Perpres dibuat oleh...", options: ["A. DPR", "B. Presiden", "C. MPR", "D. Pemerintah Daerah"], correct: 1 },
            { question: "Perppu dikeluarkan dalam keadaan...", options: ["A. Normal", "B. Darurat", "C. Damai", "D. Biasa"], correct: 1 },
            { question: "Peraturan yang bersifat mengikat secara umum adalah...", options: ["A. Perjanjian", "B. Kontrak", "C. Perundang-undangan", "D. Kesepakatan"], correct: 2 },
            { question: "TAP MPR ditetapkan oleh...", options: ["A. Presiden", "B. DPR", "C. MPR", "D. MA"], correct: 2 },
            { question: "Contoh Perda adalah peraturan tentang...", options: ["A. Pertahanan negara", "B. Ketertiban umum", "C. Hubungan luar negeri", "D. Moneter"], correct: 1 },
            { question: "Peraturan perundang-undangan harus...", options: ["A. Lisan", "B. Tertulis", "C. Tidak tertulis", "D. Lisan dan tertulis"], correct: 1 },
            { question: "Sila Pancasila yang menjamin kebebasan beragama adalah...", options: ["A. Sila 1", "B. Sila 2", "C. Sila 3", "D. Sila 4"], correct: 0 },
            { question: "Peraturan yang melindungi HAM adalah sila...", options: ["A. Sila 1", "B. Sila 2", "C. Sila 3", "D. Sila 5"], correct: 1 }

        ]
    }
};



// ==========================================
// BANK SOAL INFORMATIKA (3 bab)
// ==========================================
QUIZ_DATA['informatika_bab1'] = {
    umum: {
        title: 'Informatika - Analisis Data',
        questions: [
            { question: 'Data yang berupa angka dan bisa dihitung disebut...', options: ['Data kualitatif', 'Data kuantitatif', 'Data sekunder', 'Data primer'], correct: 1, explanation: 'Data kuantitatif adalah data berbentuk angka yang bisa dihitung, seperti tinggi badan atau nilai ulangan.' },
            { question: 'Contoh data kualitatif adalah...', options: ['Tinggi badan 160 cm', 'Jumlah penduduk 1.000 orang', 'Warna favorit siswa', 'Nilai rata-rata 85'], correct: 2, explanation: 'Warna favorit termasuk data kualitatif karena berupa kategori, bukan angka.' },
            { question: 'Data yang dikumpulkan langsung dari sumbernya disebut data...', options: ['Primer', 'Sekunder', 'Kuantitatif', 'Tersier'], correct: 0, explanation: 'Data primer dikumpulkan langsung, misalnya melalui wawancara atau kuesioner.' },
            { question: 'Urutan tahapan analisis data yang benar adalah...', options: ['Sajikan - Olah - Kumpulkan - Simpulkan', 'Kumpulkan - Bersihkan - Olah - Sajikan - Simpulkan', 'Simpulkan - Kumpulkan - Sajikan - Olah', 'Olah - Sajikan - Kumpulkan - Simpulkan'], correct: 1, explanation: 'Tahapannya: kumpulkan data, bersihkan, olah, sajikan, lalu simpulkan.' },
            { question: 'Diagram yang paling cocok untuk menunjukkan perubahan data dari waktu ke waktu adalah...', options: ['Diagram batang', 'Diagram lingkaran', 'Diagram garis', 'Piktogram'], correct: 2, explanation: 'Diagram garis paling baik menunjukkan tren perubahan dari waktu ke waktu.' },
            { question: 'Nilai tengah dari data yang sudah diurutkan disebut...', options: ['Mean', 'Median', 'Modus', 'Rata-rata'], correct: 1, explanation: 'Median adalah nilai tengah setelah data diurutkan dari terkecil ke terbesar.' },
            { question: 'Nilai yang paling sering muncul disebut...', options: ['Mean', 'Median', 'Modus', 'Jangkauan'], correct: 2, explanation: 'Modus adalah nilai yang paling sering muncul dalam sekumpulan data.' },
            { question: 'Rumus mean (rata-rata) adalah...', options: ['Jumlah data x banyak data', 'Jumlah data : banyak data', 'Banyak data : jumlah data', 'Jumlah data + banyak data'], correct: 1, explanation: 'Mean dihitung dengan membagi jumlah seluruh data dengan banyaknya data.' }
        ]
    }
};

QUIZ_DATA['informatika_bab2'] = {
    umum: {
        title: 'Informatika - Berpikir Komputasional',
        questions: [
            { question: 'Memecah masalah besar menjadi bagian-bagian kecil disebut...', options: ['Abstraksi', 'Dekomposisi', 'Pengenalan pola', 'Algoritma'], correct: 1, explanation: 'Dekomposisi adalah memecah masalah besar menjadi bagian-bagian kecil yang lebih mudah diselesaikan.' },
            { question: 'Mencari kesamaan dari masalah yang pernah dihadapi disebut...', options: ['Dekomposisi', 'Abstraksi', 'Pengenalan pola', 'Perulangan'], correct: 2, explanation: 'Pengenalan pola membantu kita memakai solusi yang sudah ada untuk masalah serupa.' },
            { question: 'Memfokuskan pada informasi penting saja disebut...', options: ['Abstraksi', 'Dekomposisi', 'Algoritma', 'Pola'], correct: 0, explanation: 'Abstraksi berarti mengabaikan detail yang tidak penting dan fokus pada yang esensial.' },
            { question: 'Langkah-langkah urut untuk menyelesaikan masalah disebut...', options: ['Data', 'Variabel', 'Algoritma', 'Diagram'], correct: 2, explanation: 'Algoritma adalah langkah-langkah berurutan dan logis untuk menyelesaikan masalah.' },
            { question: 'Membuat jus mangga: cuci - kupas - potong - blender adalah contoh...', options: ['Abstraksi', 'Algoritma', 'Pengenalan pola', 'Data kualitatif'], correct: 1, explanation: 'Urutan langkah membuat jus adalah contoh algoritma dalam kehidupan sehari-hari.' },
            { question: 'Saat membuat kue, resep bisa dipakai untuk kue lain dengan bahan mirip. Ini contoh...', options: ['Dekomposisi', 'Pengenalan pola', 'Abstraksi', 'Variabel'], correct: 1, explanation: 'Resep yang mirip menunjukkan pengenalan pola: masalah serupa, solusi serupa.' },
            { question: 'Empat pilar berpikir komputasional adalah...', options: ['Dekomposisi, pola, abstraksi, algoritma', 'Input, proses, output, simpan', 'Kumpulkan, olah, sajikan, simpulkan', 'Urutan, percabangan, perulangan, fungsi'], correct: 0, explanation: 'Empat pilar: dekomposisi, pengenalan pola, abstraksi, dan algoritma.' },
            { question: 'Manfaat berpikir komputasional adalah...', options: ['Hanya untuk programmer', 'Menyelesaikan masalah secara terstruktur', 'Menghafal rumus', 'Bermain game'], correct: 1, explanation: 'Berpikir komputasional berguna untuk semua bidang karena melatih penyelesaian masalah terstruktur.' }
        ]
    }
};

QUIZ_DATA['informatika_bab3'] = {
    umum: {
        title: 'Informatika - Algoritma Pemrograman',
        questions: [
            { question: 'Algoritma adalah...', options: ['Bahasa pemrograman', 'Langkah-langkah berurutan untuk menyelesaikan masalah', 'Perangkat keras komputer', 'Aplikasi komputer'], correct: 1, explanation: 'Algoritma adalah langkah-langkah berurutan dan logis untuk menyelesaikan masalah.' },
            { question: 'Ciri algoritma yang baik adalah...', options: ['Berputar tanpa henti', 'Langkahnya membingungkan', 'Jelas, urut, dan berakhir', 'Tidak punya output'], correct: 2, explanation: 'Algoritma yang baik harus jelas, berurutan, dan memiliki akhir (finite).' },
            { question: 'Simbol oval pada flowchart menandakan...', options: ['Proses', 'Keputusan', 'Mulai atau selesai', 'Input'], correct: 2, explanation: 'Simbol oval digunakan untuk mulai dan selesai pada flowchart.' },
            { question: 'Simbol belah ketupat pada flowchart menandakan...', options: ['Proses', 'Keputusan', 'Mulai', 'Output'], correct: 1, explanation: 'Belah ketupat menandakan keputusan, misalnya ya/tidak atau benar/salah.' },
            { question: 'Struktur algoritma yang melakukan tindakan berdasarkan kondisi disebut...', options: ['Urutan', 'Percabangan', 'Perulangan', 'Variabel'], correct: 1, explanation: 'Percabangan (selection) memilih tindakan berdasarkan kondisi, seperti JIKA ... MAKA.' },
            { question: 'Mengulang langkah beberapa kali disebut...', options: ['Urutan', 'Percabangan', 'Perulangan', 'Abstraksi'], correct: 2, explanation: 'Perulangan (iteration) menjalankan langkah berulang kali hingga kondisi terpenuhi.' },
            { question: 'Penulisan algoritma dengan kalimat biasa disebut...', options: ['Pseudocode', 'Bahasa natural', 'Flowchart', 'Kode mesin'], correct: 1, explanation: 'Bahasa natural adalah menulis algoritma dengan kalimat sehari-hari.' },
            { question: 'Pseudocode adalah...', options: ['Kode program jadi', 'Algoritma yang ditulis menyerupai kode tapi belum jadi program', 'Diagram alir', 'Simbol flowchart'], correct: 1, explanation: 'Pseudocode menyerupai kode pemrograman tapi tetap mudah dibaca manusia.' }
        ]
    }
};

// Export

window.QUIZ_DATA = QUIZ_DATA;
