/* ==========================================================
   YOK BANGUN.ID — Project Detail Dynamic Controller
   Editorial Architectural Showcase (Bahasa Indonesia)
   ========================================================== */

const PROJECTS_DATA = {
    'scandinavian': {
        id: 'scandinavian',
        name: 'RUMAH SCANDINAVIAN',
        badge: 'DESAIN PILIHAN • 2,5 JT / M²',
        subtitle: 'Hunian bergaya Nordic Scandinavian dengan penataan ruang efisien, sirkulasi udara silang (cross-ventilation), dan bukaan kaca lapang di atas lahan 10 x 10 m.',
        heroImage: 'assets/DESIGN/SCANDINAVIAN 2,5 JT PERMETER/Tampak Depan.png',
        stats: [
            { label: 'BIAYA BANGUN', value: '2,5 Jt / m²', sub: 'Estimasi terukur' },
            { label: 'LUAS BANGUNAN', value: '± 70 m²', sub: '1 Lantai Optimal' },
            { label: 'LUAS LAHAN', value: '100 m²', sub: 'Dimensi 10 x 10 m' },
            { label: 'KAMAR TIDUR', value: '2 Kamar', sub: 'Pencahayaan Alami' },
            { label: 'CARPORT & TAMAN', value: '1 Mobil + 2 Taman', sub: 'Depan & Belakang' }
        ],
        editorialHeading: 'Harmoni Kesederhanaan, Fungsionalitas & Nuansa Alami',
        editorialParagraphs: [
            'Gaya arsitektur <strong>Scandinavian</strong> menekankan pada pencahayaan alami yang melimpah, penggunaan palet warna netral yang menenangkan, serta integrasi material beraksen kayu alami yang menghangatkan suasana rumah.',
            'Dirancang secara presisi di atas kavling berukuran <strong>10 x 10 meter (Luas Tanah 100 m²)</strong> dengan luas bangunan efektif sekitar <strong>70 m²</strong>, denah ini mengutamakan zonasi ruang terbuka (open concept) pada area ruang tamu, ruang makan, dan dapur bersih, sehingga hunian terasa jauh lebih luas dan lega.',
            'Sirkulasi udara silang (<em>cross-ventilation</em>) dirancang dengan menempatkan taman di bagian depan dan taman terbuka di bagian belakang, memastikan pergantian udara segar secara berkesinambungan tanpa ketergantungan penuh pada pendingin udara buatan.'
        ],
        highlights: [
            'Fasad ikonik beraksen kisi panel kayu vertikal dan aksen jendela bulat khas Nordic modern.',
            'Taman hijau ganda (taman depan dan void taman belakang) untuk sirkulasi udara sejuk.',
            'Carport 1 mobil dengan kanopi minimalis dan akses pedestrian langsung ke teras.',
            'Kamar tidur utama dengan view langsung ke taman belakang yang asri dan tenang.',
            'Struktur pondasi batu kali, pembesian standar SNI, dan dinding bata merah kokoh.'
        ],
        specs: [
            { key: 'Estimasi Biaya Bangun', val: 'Rp 2.500.000 / m²' },
            { key: 'Luas Tanah (LT)', val: '100 m² (10 x 10 meter)' },
            { key: 'Luas Bangunan (LB)', val: '± 70 m²' },
            { key: 'Jumlah Lantai', val: '1 Lantai (Konsep Tumbuh)' },
            { key: 'Kamar Tidur', val: '2 Ruang Tidur' },
            { key: 'Kamar Mandi', val: '1 Kamar Mandi + Sanitair Premium' },
            { key: 'Fasilitas Lain', val: 'Carport, R. Tamu, R. Keluarga, Dapur, Taman Depan & Belakang' },
            { key: 'Struktur Bangunan', val: 'Beton Bertulang SNI & Pondasi Cakar Ayam' },
            { key: 'Dinding & Finishing', val: 'Bata Merah Plester Aci + Cat Weatherproof' },
            { key: 'Kusen & Jendela', val: 'Aluminium Powder Coating + Kaca Clear' }
        ],
        gallery: [
            {
                src: 'assets/DESIGN/SCANDINAVIAN 2,5 JT PERMETER/Tampak Depan.png',
                title: 'Fasad Utama Tampak Depan',
                desc: 'Komposisi atap pelana modern, kisi kayu vertikal, dan jendela bulat khas Scandinavian.'
            },
            {
                src: 'assets/DESIGN/SCANDINAVIAN 2,5 JT PERMETER/Denah.png',
                title: 'Gambar Denah & Tata Ruang 100 m²',
                desc: 'Distribusi ruang ergonomis: 2 Kamar Tidur, 1 Kamar Mandi, Dapur, Ruang Keluarga, dan 2 Taman.'
            },
            {
                src: 'assets/DESIGN/SCANDINAVIAN 2,5 JT PERMETER/Desain 1.png',
                title: 'Tampak Sudut Samping & Belakang',
                desc: 'Bukaan jendela lebar untuk memaksimalkan sinar matahari pagi dan sirkulasi alami.'
            },
            {
                src: 'assets/DESIGN/SCANDINAVIAN 2,5 JT PERMETER/desain 2.png',
                title: 'Koleksi 4 Sisi Fasad Eksterior',
                desc: 'Visualisasi lengkap perspektif depan, samping kanan, samping kiri, dan tampak belakang.'
            },
            {
                src: 'assets/DESIGN/SCANDINAVIAN 2,5 JT PERMETER/Luas Tanah.png',
                title: 'Dokumentasi Survei Lahan Asli',
                desc: 'Kondisi lahan riil 10 x 10 m sebelum proses pembangunan dan perataan tanah.'
            }
        ],
        waText: 'Halo YOK BANGUN.ID, saya sangat tertarik dan ingin konsultasi lebih lanjut mengenai Desain & Pembangunan RUMAH SCANDINAVIAN 2,5 Jt/m².'
    },

    'rumah-450-jt': {
        id: 'rumah-450-jt',
        name: 'MODERN MINIMALIS ELEGAN (450 JT)',
        badge: 'HUNIAN MEWAH • EST. 450 JT',
        subtitle: 'Kemewahan arsitektur kontemporer dengan perpaduan batu alam andesit, aksen kisi kayu tropis, dan pencahayaan LED warm light yang eksklusif.',
        heroImage: 'assets/DESIGN/RUMAH 450 JT/home 1.png',
        stats: [
            { label: 'ESTIMASI ANGGARAN', value: 'Mulai 450 Jt', sub: 'Transparan & Terukur' },
            { label: 'TIPE BANGUNAN', value: '2 Lantai Mewah', sub: 'Customizable' },
            { label: 'MATERIAL FASAD', value: 'Batu Alam & Kayu', sub: 'Andesit & Conwood' },
            { label: 'PENCAHAYAAN', value: 'Warm LED Strip', sub: 'Aksen Elegan Malam' },
            { label: 'STATUS PROYEK', value: 'Siap Bangun', sub: 'Desain & Konstruksi' }
        ],
        editorialHeading: 'Arsitektur Geometris Berkelas dengan Nilai Investasi Tinggi',
        editorialParagraphs: [
            'Proyek <strong>Rumah Modern Minimalis 450 Jt</strong> ini dirancang untuk menjawab impian hunian prestisius keluarga urban. Mengusung garis arsitektur tegas, bidang fasad bertingkat yang dinamis, serta permainan material alam bermutu tinggi.',
            'Penggunaan batu alam andesit berpola rapi berpadu dengan panel kisi kayu tahan cuaca menciptakan visual yang kokoh sekaligus hangat. Area balkon di lantai atas memberikan ruang relaksasi terbuka yang menghubungkan penghuni dengan pemandangan sekitar.',
            'Dengan manajemen anggaran yang cermat dari YOK BANGUN.ID, setiap alokasi dana difokuskan pada kekuatan konstruksi primer, estetika fasad luar, dan kenyamanan sirkulasi interior tanpa adanya biaya siluman.'
        ],
        highlights: [
            'Fasad bertingkat dengan aksen batu alam andesit dan panel kayu arsitektural.',
            'Sistem tata cahaya malam hari (night lighting) terintegrasi dengan strip LED warm light.',
            'Balkon lantai 2 luas dengan railing kaca tempered minimalis.',
            'Area carport lega untuk mobil keluarga dilengkapi kanopi struktural modern.',
            'Pilihan 6 varian fasad dan skema warna eksterior sesuai selera Anda.'
        ],
        specs: [
            { key: 'Estimasi Total Biaya', val: 'Rp 450.000.000,- (Disesuaikan Spek & Lahan)' },
            { key: 'Konsep Desain', val: 'Modern Minimalis Kontemporer' },
            { key: 'Jumlah Lantai', val: '2 Lantai (Bisa disesuaikan 1 Lantai)' },
            { key: 'Ruang Tidur', val: '3 - 4 Kamar Tidur (Custom)' },
            { key: 'Kamar Mandi', val: '2 - 3 Kamar Mandi' },
            { key: 'Material Fasad Utama', val: 'Batu Alam Andesit, Kisi Conwood Wood Panel, Kaca Clear' },
            { key: 'Pondasi & Struktur', val: 'Pondasi Cakar Ayam / Footplat, Kolom Beton K-250 SNI' },
            { key: 'Atap', val: 'Baja Ringan SNI + Genteng Flat Beton / Metal Pasir' },
            { key: 'Layanan Tambahan', val: 'Gratis Desain 3D, Gambar IMB/PBG, & Konsultasi Tata Ruang' }
        ],
        gallery: [
            {
                src: 'assets/DESIGN/RUMAH 450 JT/home 1.png',
                title: 'Fasad Utama Varian Elegan',
                desc: 'Paduan batu alam andesit abu gelap dengan aksen kayu dan balkon lantai 2.'
            },
            {
                src: 'assets/DESIGN/RUMAH 450 JT/home 2.png',
                title: 'Fasad Alternatif 2 - Skema Kontras',
                desc: 'Varian warna netral monokrom dengan aksen pencahayaan tersembunyi.'
            },
            {
                src: 'assets/DESIGN/RUMAH 450 JT/home 3.png',
                title: 'Fasad Alternatif 3 - Sentuhan Kayu Tropis',
                desc: 'Aksen kisi kayu yang dominan memberikan kesan hangat dan menyatu dengan alam.'
            },
            {
                src: 'assets/DESIGN/RUMAH 450 JT/home 4.png',
                title: 'Perspektif Sudut Siang Hari',
                desc: 'Visualisasi pencahayaan alami matahari tropis pada bidang fasad geometris.'
            },
            {
                src: 'assets/DESIGN/RUMAH 450 JT/home 5.png',
                title: 'Tampilan Suasana Malam Hari',
                desc: 'Pencahayaan LED warm light menonjolkan tekstur batu alam dan kisi kayu di malam hari.'
            },
            {
                src: 'assets/DESIGN/RUMAH 450 JT/home 6.png',
                title: 'Detail Carport & Entrance Utama',
                desc: 'Pintu utama solid wood dan carport lapang yang terintegrasi rapi.'
            }
        ],
        waText: 'Halo YOK BANGUN.ID, saya tertarik dengan Desain dan Pembangunan RUMAH MODERN MINIMALIS 450 JT. Mohon informasi detailnya.'
    },

    'kost-exclusive': {
        id: 'kost-exclusive',
        name: 'KOST EXCLUSIVE 30 KAMAR',
        badge: 'PROYEK KOMERSIAL • 3 LANTAI',
        subtitle: 'Rancangan properti komersial berkonsep Kost Exclusive 3 Lantai dengan garasi kapasitas 6 mobil + 30 motor, interior kamar privat, dan sirkulasi void terbuka.',
        heroImage: 'assets/DESIGN/KOST EXCLUSIVE 30 KAMAR/TAMPAK DEPAN.png',
        stats: [
            { label: 'KAPASITAS KAMAR', value: '30 Kamar', sub: 'Kamar Mandi Dalam' },
            { label: 'JUMLAH LANTAI', value: '3 Lantai', sub: 'Struktur Beton Bertulang' },
            { label: 'KAPASITAS GARASI', value: '6 Mobil + 30 Motor', sub: 'Parkir Tertutup Aman' },
            { label: 'ORIENTASI', value: 'High ROI', sub: 'Investasi Jangka Panjang' },
            { label: 'FASILITAS', value: 'Lobby & Void', sub: 'Sirkulasi Alami' }
        ],
        editorialHeading: 'Investasi Properti Komersial Cerdas dengan Okupansi Maksimal',
        editorialParagraphs: [
            'Bisnis properti sewa kost eksklusif membutuhkan perencanaan arsitektur yang tidak hanya estetik, namun juga sangat matang dalam hal efisiensi ruang, kenyamanan privasi penyewa, serta sistem keamanan dan tata kelola operasional.',
            'Desain <strong>Kost Exclusive 30 Kamar (3 Lantai)</strong> ini dirancang secara komprehensif oleh YOK BANGUN.ID. Memiliki tata letak 30 kamar tidur en-suite yang seragam, area parkir basement/lantai dasar yang mampu menampung hingga 6 mobil dan 30+ sepeda motor, serta area resepsionis/lobby tamu.',
            'Adanya <em>central void</em> di tengah bangunan menjamin setiap lantai mendapatkan suplai cahaya matahari dan aliran udara alami, sehingga lorong tidak lembap, menghemat listrik penerangan siang hari, dan memberikan kesan hunian setara hotel berbintang.'
        ],
        highlights: [
            '30 Unit Kamar tidur lengkap dengan kamar mandi dalam (en-suite bathroom) ergonomis.',
            'Area garasi & parkir luas: muat 6 unit mobil dan 30+ sepeda motor.',
            'Lobby resepsionis, area tunggu tamu, dan pos keamanan terpadu.',
            'Void sirkulasi udara vertikal di tengah bangunan untuk sirkulasi sejuk dan terang.',
            'Desain fasad modern komersial yang meningkatkan daya tarik tarif sewa premium.'
        ],
        specs: [
            { key: 'Tipe Properti', val: 'Bangunan Komersial Kost Eksklusif' },
            { key: 'Kapasitas Kamar', val: '30 Kamar Tidur (Full Kamar Mandi Dalam)' },
            { key: 'Jumlah Lantai', val: '3 Lantai Struktur Kokoh' },
            { key: 'Fasilitas Parkir', val: 'Garasi 6 Mobil + 30 Sepeda Motor' },
            { key: 'Fasilitas Penunjang', val: 'Lobby Resepsionis, Dapur Bersama, Area Jemur, Void Sirkulasi' },
            { key: 'Struktur Konstruksi', val: 'Beton Bertulang Standar SNI Mutu Tinggi' },
            { key: 'Sistem Mekanikal & Elektrikal', val: 'Instalasi AC Tiap Kamar, Pipa Air Bersih/Kotor Terpisah, Meteran Listrik Mandiri' },
            { key: 'Kondisi Lahan Awal', val: 'Survei Kontur Tanah & Uji Daya Dukung Tanah Dilakukan' }
        ],
        gallery: [
            {
                src: 'assets/DESIGN/KOST EXCLUSIVE 30 KAMAR/TAMPAK DEPAN.png',
                title: 'Tampak Depan Fasad Kost 3 Lantai',
                desc: 'Fasad megah modern dengan gerbang akses terpisah untuk kendaraan dan pejalan kaki.'
            },
            {
                src: 'assets/DESIGN/KOST EXCLUSIVE 30 KAMAR/DETAIL INTERIOR KAMAR.png',
                title: 'Detail Interior Kamar Tidur',
                desc: 'Penataan interior kompak: ranjang queen, meja kerja, lemari pakaian, dan kamar mandi dalam.'
            },
            {
                src: 'assets/DESIGN/KOST EXCLUSIVE 30 KAMAR/DESIGN GARASI.png',
                title: 'Desain Garasi & Area Parkir',
                desc: 'Layout parkir luas berkapasitas 6 mobil dan 30+ sepeda motor dengan manuver lega.'
            },
            {
                src: 'assets/DESIGN/KOST EXCLUSIVE 30 KAMAR/TAMPAK SAMPING KIRI KANAN DAN BELAKANG.png',
                title: 'Tampak Samping & Belakang',
                desc: 'Bukaan jendela tiap kamar dan ventilasi silang yang merata di seluruh 3 lantai.'
            },
            {
                src: 'assets/DESIGN/KOST EXCLUSIVE 30 KAMAR/KONDISI TANAH SAAT SURVEY.png',
                title: 'Dokumentasi Survei Lahan Proyek',
                desc: 'Pengukuran batas tanah dan kontur lahan sebelum penggalian pondasi.'
            }
        ],
        waText: 'Halo YOK BANGUN.ID, saya ingin konsultasi mengenai perencanaan dan pembangunan KOST EXCLUSIVE 30 KAMAR.'
    },

    'rumah-2-jt': {
        id: 'rumah-2-jt',
        name: 'RUMAH 35 M² KOMPAK & EFISIEN',
        badge: 'BUJET TERJANGKAU • MULAI 2 JT / M²',
        subtitle: 'Solusi cerdas pembangunan rumah pertama berkualitas tinggi dengan anggaran ekonomis mulai Rp 2 Juta-an per meter persegi, tanpa mengorbankan mutu struktur.',
        heroImage: 'assets/DESIGN/RUMAH MULAI DR 2JTAAN PERMETER/HOME 1.png',
        stats: [
            { label: 'BIAYA BANGUN', value: 'Mulai 2 Jt / m²', sub: 'Sangat Terjangkau' },
            { label: 'LUAS BANGUNAN', value: '35 m²', sub: 'Type 35 Efisien' },
            { label: 'LUAS TANAH', value: '6 x 12 m (72 m²)', sub: 'Sisa Lahan Belakang' },
            { label: 'KAMAR TIDUR', value: '2 Kamar Tidur', sub: 'Ventilasi Nyaman' },
            { label: 'KONSEP', value: 'Rumah Tumbuh', sub: 'Mudah Dikembangkan' }
        ],
        editorialHeading: 'Mewujudkan Rumah Idaman dengan Bujet Terukur dan Transparan',
        editorialParagraphs: [
            'Banyak anggapan bahwa membangun rumah dengan anggaran terjangkau harus mengorbankan kualitas atau keindahan desain. Melalui paket <strong>Rumah Mulai Rp 2 Juta-an / m²</strong>, YOK BANGUN.ID mematahkan anggapan tersebut.',
            'Dengan luas bangunan <strong>Type 35 m²</strong> di atas kavling standar (seperti 6 x 12 meter), tata letak dirancang sangat efisien. Memiliki 2 kamar tidur yang cukup, ruang keluarga dan ruang makan yang menyatu, 1 kamar mandi fungsional, teras depan, carport, dan sisa tanah di belakang untuk pengembangan di masa depan.',
            'Pondasi, pembesian, dan struktur tetap menggunakan spesifikasi kokoh standar SNI. Pilihan material disesuaikan agar biaya per meter persegi tetap hemat dan transparan sejak awal.'
        ],
        highlights: [
            'Biaya bangun paling ekonomis mulai Rp 2 Jt-an / m² dengan kontrak kerja jelas.',
            'Layout 2 kamar tidur yang tertata rapi dengan sirkulasi udara optimal.',
            'Area carport mobil dan taman depan yang mempercantik tampilan muka rumah.',
            'Sisa lahan belakang untuk dapur terbuka, area cuci jemur, atau pengembangan ruang baru.',
            'Waktu pengerjaan cepat, rapi, dan diawasi oleh mandor berpengalaman.'
        ],
        specs: [
            { key: 'Biaya Bangun', val: 'Mulai Rp 2.000.000,- / m²' },
            { key: 'Tipe Bangunan', val: 'Type 35 (Luas Bangunan 35 m²)' },
            { key: 'Ukuran Kavling Ideal', val: '6 x 10 m s/d 6 x 12 m (60 - 72 m²)' },
            { key: 'Kamar Tidur', val: '2 Kamar Tidur' },
            { key: 'Kamar Mandi', val: '1 Kamar Mandi (Kloset Jongkok/Duduk)' },
            { key: 'Ruang Utama', val: 'Ruang Tamu & Ruang Keluarga Terbuka' },
            { key: 'Carport & Teras', val: 'Tersedia Carport 1 Mobil + Teras Depan' },
            { key: 'Pondasi', val: 'Batu Belah / Batu Kali + Sloof Beton Bertulang' },
            { key: 'Dinding', val: 'Bata Merah / Bata Ringan Plester Aci + Cat' },
            { key: 'Rangka Atap', val: 'Baja Ringan Galvalum + Genteng Metal Pasir / Flat' }
        ],
        gallery: [
            {
                src: 'assets/DESIGN/RUMAH MULAI DR 2JTAAN PERMETER/HOME 1.png',
                title: 'Fasad Depan Rumah 35 M²',
                desc: 'Tampilan eksterior modern minimalis yang bersih, rapi, dan berkelas.'
            },
            {
                src: 'assets/DESIGN/RUMAH MULAI DR 2JTAAN PERMETER/HOME 2.png',
                title: 'Denah & Pembagian Tata Ruang',
                desc: 'Layout efisien 2 kamar tidur, ruang keluarga, carport, dan taman.'
            }
        ],
        waText: 'Halo YOK BANGUN.ID, saya ingin konsultasi mengenai paket bangun RUMAH MULAI 2 JT-AN PER METER (Tipe 35).'
    },

    'klinik-baby-spa': {
        id: 'klinik-baby-spa',
        name: 'PEMBANGUNAN KLINIK BABY SPA dr. S',
        badge: 'BUKTI KONSTRUKSI FISIK • SELESAI',
        subtitle: 'Dokumentasi nyata pelaksanaan konstruksi gedung komersial 2 lantai Klinik Baby Spa dr. S berlokasi di Giriwono, Wonogiri dari pondasi hingga serah terima.',
        heroImage: 'assets/PORTOFOLIO/PEMBANGUNAN KLINIK BABY SPA dr S GIRIWON WONOGIRI 3024/dokumentasi before-after/WhatsApp Image 2026-09-02 at 11.46.26.jpeg',
        stats: [
            { label: 'LOKASI PROYEK', value: 'Giriwono, Wonogiri', sub: 'Jawa Tengah' },
            { label: 'PERUNTUKAN', value: 'Klinik Kesehatan', sub: 'Fasilitas Baby Spa' },
            { label: 'STRUKTUR', value: '2 Lantai Beton', sub: 'Standar Mutu SNI' },
            { label: 'TAHAP KERJA', value: 'Tahap 1 - Selesai', sub: 'Struktur s/d Finishing' },
            { label: 'STATUS', value: 'Terserah Terima', sub: 'Klien Puas' }
        ],
        editorialHeading: 'Bukti Nyata Ketelitian Eksekusi Lapangan & Mutu Bangunan',
        editorialParagraphs: [
            'Keberhasilan suatu proyek arsitektur ditentukan dari seberapa akurat gambar kerja bestek dieksekusi di lapangan. Proyek <strong>Pembangunan Gedung Klinik Baby Spa dr. S di Giriwono, Wonogiri</strong> adalah salah satu bukti nyata integritas kerja YOK BANGUN.ID.',
            'Pembangunan mencakup pekerjaan pondasi cakar ayam, pembesian kolom balok bertulang untuk struktur 2 lantai, pengecoran dak lantai 2, pasangan dinding bata merah padat, plester aci berpresisi tinggi, hingga finishing interior dan eksterior.',
            'Seluruh tahapan pekerjaan dilaporkan secara berkala kepada pemilik proyek, memastikan transparansi jadwal kerja (Kurva S) dan kesesuaian spesifikasi material yang tercantum dalam Rencana Anggaran Biaya (RAB).'
        ],
        highlights: [
            'Eksekusi struktur 2 lantai dengan perancah presisi dan pengecoran mutu teruji.',
            'Dinding bata merah dipasang dengan tali benang presisi menghasilkan acian yang rata dan rapi.',
            'Instalasi pipa sanitasi khusus untuk kebutuhan spa bayi dan ruang medis klinik.',
            'Laporan progress berkala foto dan video kepada pemilik proyek.',
            'Serah terima tepat waktu sesuai kontrak kesepakatan.'
        ],
        specs: [
            { key: 'Nama Proyek', val: 'Pembangunan Gedung Klinik Baby Spa dr. S' },
            { key: 'Lokasi', val: 'Giriwono, Wonogiri, Jawa Tengah' },
            { key: 'Kategori', val: 'Konstruksi Komersial & Fasilitas Kesehatan' },
            { key: 'Tingkat Bangunan', val: '2 Lantai Beton Bertulang' },
            { key: 'Lingkup Pekerjaan', val: 'Bestek Gambar Kerja, Struktur, Arsitektur & Finishing' },
            { key: 'Pondasi', val: 'Footplat Cakar Ayam + Pondasi Batu Belah' },
            { key: 'Dinding', val: 'Bata Merah Solid Plester Aci Acian Halus' },
            { key: 'Lantai', val: 'Pengecoran Bondek / Cor Dak Ready Mix' }
        ],
        gallery: [
            {
                src: 'assets/PORTOFOLIO/PEMBANGUNAN KLINIK BABY SPA dr S GIRIWON WONOGIRI 3024/dokumentasi before-after/WhatsApp Image 2026-09-02 at 11.30.29.jpeg',
                title: 'Struktur Fisik 2 Lantai Lapangan',
                desc: 'Proses pendirian struktur kolom dan balok lantai 2 dengan perancah bambu presisi.'
            },
            {
                src: 'assets/PORTOFOLIO/PEMBANGUNAN KLINIK BABY SPA dr S GIRIWON WONOGIRI 3024/dokumentasi before-after/WhatsApp Image 2026-09-02 at 11.30.28.jpeg',
                title: 'Pengecoran Dak Lantai 2',
                desc: 'Tahapan pembesian plat lantai dan pengecoran dak lantai atas.'
            },
            {
                src: 'assets/PORTOFOLIO/PEMBANGUNAN KLINIK BABY SPA dr S GIRIWON WONOGIRI 3024/dokumentasi before-after/WhatsApp Image 2026-09-02 at 11.38.26.jpeg',
                title: 'Pemasangan Dinding Bata Merah',
                desc: 'Dinding bata merah dipasang rapi dan lurus sebelum tahap plester.'
            },
            {
                src: 'assets/PORTOFOLIO/PEMBANGUNAN KLINIK BABY SPA dr S GIRIWON WONOGIRI 3024/dokumentasi before-after/WhatsApp Image 2026-09-02 at 11.45.44.jpeg',
                title: 'Pekerjaan Plester & Aci Dinding',
                desc: 'Detail pekerjaan plester aci dinding untuk menghasilkan permukaan halus.'
            },
            {
                src: 'assets/PORTOFOLIO/PEMBANGUNAN KLINIK BABY SPA dr S GIRIWON WONOGIRI 3024/dokumentasi before-after/WhatsApp Image 2026-09-02 at 11.46.26.jpeg',
                title: 'Tahap Finishing & Pengecatan',
                desc: 'Pekerjaan finishing cat eksterior dan interior klinik.'
            }
        ],
        waText: 'Halo YOK BANGUN.ID, saya melihat portofolio Pembangunan Klinik dr. S di Wonogiri dan ingin konsultasi proyek serupa.'
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // ── 1. Parse URL Parameter ──
    const urlParams = new URLSearchParams(window.location.search);
    let projectId = urlParams.get('id');

    if (!projectId || !PROJECTS_DATA[projectId]) {
        projectId = 'scandinavian'; // Default fallback
    }

    const currentProject = PROJECTS_DATA[projectId];

    // ── 2. Populate Page Details ──
    document.getElementById('pageTitle').textContent = `${currentProject.name} — Detail Proyek YOK BANGUN.ID`;
    document.getElementById('breadcrumbName').textContent = currentProject.name;
    document.getElementById('projectBadge').textContent = currentProject.badge;
    document.getElementById('projectName').textContent = currentProject.name;
    document.getElementById('projectSubtitle').textContent = currentProject.subtitle;

    const mainImg = document.getElementById('mainProjectImg');
    mainImg.src = currentProject.heroImage;
    mainImg.alt = currentProject.name;

    // Direct WhatsApp Buttons
    const waUrl = `https://wa.me/6285742926695?text=${encodeURIComponent(currentProject.waText)}`;
    const waConsultBtn = document.getElementById('waConsultBtn');
    const waCustomBtn = document.getElementById('waCustomBtn');
    if (waConsultBtn) waConsultBtn.href = waUrl;
    if (waCustomBtn) waCustomBtn.href = waUrl;

    // ── 3. Populate Stats Cards ──
    const statsGrid = document.getElementById('projectStatsGrid');
    statsGrid.innerHTML = currentProject.stats.map(stat => `
        <div class="stat-item-box">
            <span class="stat-label">${stat.label}</span>
            <strong class="stat-value">${stat.value}</strong>
            <span class="stat-sub">${stat.sub}</span>
        </div>
    `).join('');

    // ── 4. Populate Editorial Story ──
    document.getElementById('editorialHeading').textContent = currentProject.editorialHeading;
    const editorialContainer = document.getElementById('editorialText');
    editorialContainer.innerHTML = currentProject.editorialParagraphs.map(p => `<p>${p}</p>`).join('');

    const highlightsList = document.getElementById('highlightsList');
    highlightsList.innerHTML = currentProject.highlights.map(h => `<li>${h}</li>`).join('');

    // ── 5. Populate Specs Table ──
    const specsTable = document.getElementById('specsTable');
    specsTable.innerHTML = currentProject.specs.map(spec => `
        <div class="spec-row">
            <span class="spec-k">${spec.key}</span>
            <span class="spec-v">${spec.val}</span>
        </div>
    `).join('');

    // ── 6. Populate Photo & Drawing Gallery ──
    const galleryContainer = document.getElementById('galleryGridContainer');
    galleryContainer.innerHTML = currentProject.gallery.map(item => `
        <div class="detail-gallery-card" data-img-src="${item.src}" data-img-caption="${item.title} — ${item.desc}">
            <div class="gallery-card-img-wrap">
                <img src="${item.src}" alt="${item.title}" loading="lazy">
            </div>
            <div class="gallery-card-info">
                <h4 class="gallery-card-title">${item.title}</h4>
                <p class="gallery-card-desc">${item.desc}</p>
            </div>
        </div>
    `).join('');

    // ── 7. Populate Other Projects ──
    const otherGrid = document.getElementById('otherProjectsGrid');
    const otherProjects = Object.values(PROJECTS_DATA).filter(p => p.id !== currentProject.id);
    otherGrid.innerHTML = otherProjects.map(p => `
        <div class="other-project-card">
            <div class="other-card-img">
                <img src="${p.heroImage}" alt="${p.name}" loading="lazy">
            </div>
            <div class="other-card-body">
                <span class="other-card-tag">${p.badge}</span>
                <h3 class="other-card-title">${p.name}</h3>
                <a href="project-detail.html?id=${p.id}" class="other-card-link">
                    Lihat Detail Proyek &rarr;
                </a>
            </div>
        </div>
    `).join('');

    // ── 8. Lightbox Modal Integration ──
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');

    function openLightbox(src, caption) {
        if (lightboxModal && lightboxImage && lightboxCaption) {
            lightboxImage.src = src;
            lightboxCaption.textContent = caption || 'YOK BANGUN.ID Pratinjau Arsitektur';
            lightboxModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeLightbox() {
        if (lightboxModal) {
            lightboxModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Main Image Zoom
    mainImg.addEventListener('click', () => {
        openLightbox(mainImg.src, `${currentProject.name} — Tampilan Utama`);
    });

    // Gallery Cards Zoom
    document.querySelectorAll('.detail-gallery-card').forEach(card => {
        card.addEventListener('click', () => {
            const src = card.getAttribute('data-img-src');
            const caption = card.getAttribute('data-img-caption');
            openLightbox(src, caption);
        });
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal || e.target === lightboxClose) {
                closeLightbox();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
            closeLightbox();
        }
    });

    // ── 9. Mobile Navbar Toggle ──
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');
    const navItems = document.querySelectorAll('.nav-item');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
            document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
        });

        navItems.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        document.addEventListener('click', (e) => {
            if (mainNav.classList.contains('active') && !mainNav.contains(e.target) && !navToggle.contains(e.target)) {
                navToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

});
