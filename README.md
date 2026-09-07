# YOK BANGUN.ID — Studio Arsitektur Kustom & Konstruksi Presisi

Website resmi **YOK BANGUN.ID**, studio perancangan arsitektur dan pelaksana konstruksi bangunan presisi yang berpusat di **Hargosari, Sraten, Kec. Gatak, Kabupaten Sukoharjo, Jawa Tengah**.

---

## 🌟 Fitur & Desain Utama Website

1. **Hero Section Sinematik**:
   - Background video arsitektur dengan visual tipografi editorial mewah.
   - Efek teks reveal bertahap yang halus (*silky smooth text entrance*).
   - Tombol ajakan aksi langsung menuju katalog proyek dan konsultasi gratis.

2. **Tentang Kami (Story & Value Pillars)**:
   - Profil resmi studio dan komitmen perancangan serta eksekusi fisik satu atap.
   - 4 pilar keunggulan: Garansi Pemeliharaan 6 Bulan, One Stop Service Terpadu, Standar Mutu SNI Ketat, dan Transparansi RAB Disiplin.

3. **Layanan Utama (Horizontal Expanding Accordion)**:
   - 4 kartu layanan interaktif (*expanding accordion*) dengan transisi mulus dan label vertikal presisi di tengah kartu:
     1. `01 — Desain Arsitektur & 3D`
     2. `02 — Bangun Rumah Tinggal`
     3. `03 — Kost & Komersial`
     4. `04 — Renovasi & Penambahan`

4. **Pilihan Proyek Desain (Signature Stacking Cards)**:
   - Efek kartu menumpuk saat di-scroll (*stacked sticky deck of cards*) berbasis **GSAP ScrollTrigger**:
     - *Rumah Scandinavian* (2,5 Jt / m² Pilihan)
     - *Modern Minimalis Elegan* (Rumah 450 Jt)
     - *Kost Exclusive 30 Kamar* (Properti Komersial 3 Lantai)
     - *Rumah 35 m² Kompak & Efisien* (Mulai 2 Jt-an)
     - *Denah Scandinavian 100 m²* (Denah & Spesifikasi Tata Ruang)
     - *6 Pilihan Fasad Modern* (Varian Fasad)
     - *Klinik Baby Spa dr. S* (Proyek Fisik Nyata)
   - Setiap kartu terhubung ke halaman detail proyek interaktif (`project-detail.html`).

5. **Cara Kerja Kami**:
   - Tiga blok standar mutu konstruksi: Presisi Teknis SNI, Disiplin RAB Transparan, dan Kolaborasi Menyeluruh hingga Serah Terima Kunci.

6. **Galeri Konsep Arsitektur dengan Filter Kategori**:
   - Filter instan tanpa reload: *Semua*, *Kost Exclusive*, *Rumah 450 Jt*, *Scandinavian*, *Rumah 2 Jt/m²*, dan *Proyek Fisik*.
   - Dilengkapi *Lightbox Zoom* modal untuk memperbesar denah dan foto arsitektur.

7. **Bukti Konstruksi Fisik Nyata**:
   - Mosaik dokumentasi pengerjaan struktur 2 lantai Klinik dr. S di Giriwono, Wonogiri (pengecoran dak, pasangan bata merah, plester aci, dan finishing).

8. **Menu Navigasi Ringkas & Kontak Terpadu**:
   - 5 menu navigasi bersih: **Beranda**, **Layanan**, **Pilihan Proyek**, **Galeri Desain**, dan **Kontak**.
   - Integrasi WhatsApp, Email resmi, Instagram, dan alamat kantor/workshop.

---

## 🛠️ Teknologi yang Digunakan

* **HTML5**: Struktur semantik berstandar aksesibilitas tinggi dan SEO-ready.
* **CSS3 (Vanilla CSS)**:
  * Tema warna harmonis: **Sage Green** (`#9DAF89`, `#506144`), **Forest Deep** (`#162217`), dan latar netral hangat (`#faf8f5`).
  * Tipografi modern: **Cormorant Garamond** (serif editorial) & **Plus Jakarta Sans** (sans-serif bersih).
  * Sistem responsif menyeluruh untuk desktop, tablet, dan smartphone.
* **JavaScript (Vanilla JS & GSAP)**:
  * **GSAP & ScrollTrigger**: Animasi kartu bertumpuk (*stacking cards*) saat scroll.
  * **Intersection Observer**: Animasi teks dan elemen muncul halus (*reveal fade-up & mask*).
  * **Accordion Cards**: Interaksi ekspansi kartu layanan pada hover dan tap.
  * **Interactive Filter**: Filter kategori galeri arsitektur secara instan.
  * **Lightbox Modal**: Pratinjau gambar resolusi tinggi dengan keterangan detail.

---

## 📁 Struktur Direktori

```text
YOK BANGUN.ID/
├── index.html              # Halaman utama (Landing Page)
├── style.css               # Styling tema Sage Green & tata letak utama
├── script.js               # Logika interaktif (animasi, stacking cards, accordion, filter, lightbox)
├── project-detail.html     # Template halaman detail proyek
├── project-detail.css      # Styling khusus halaman detail proyek
├── project-detail.js       # Database proyek & pengendali dinamis halaman detail
├── .gitignore              # Konfigurasi file yang diabaikan Git
├── README.md               # Dokumentasi proyek
└── assets/                 # Aset gambar, video, dan logo
    ├── LOGO/               # Logo resmi YOK BANGUN.ID
    ├── DESIGN/             # Render 3D fasad, interior, denah, dan gudang modern
    └── PORTOFOLIO/         # Dokumentasi foto fisik pembangunan nyata lapangan
```

---

## 🚀 Cara Menjalankan Secara Lokal

Website ini dibangun murni tanpa ketergantungan framework rumit, sehingga dapat langsung dijalankan:

### Opsi 1: Python Built-in Server
```bash
python -m http.server 8080
```
Buka browser dan kunjungi: `http://localhost:8080`

### Opsi 2: VS Code Live Server
Klik kanan `index.html` lalu pilih **"Open with Live Server"**.

### Opsi 3: Node.js `npx serve`
```bash
npx serve .
```

---

## 📍 Kontak & Lokasi Studio

* **Nama Usaha**: YOK BANGUN.ID — Desain & Konstruksi
* **Lokasi**: Hargosari, Sraten, Kec. Gatak, Kabupaten Sukoharjo, Jawa Tengah
* **WhatsApp**: [0857-4292-6695](https://wa.me/6285742926695)
* **Email**: [YOKBANGUNID@GMAIL.COM](mailto:YOKBANGUNID@GMAIL.COM)
* **Instagram**: [@yokbangun.id](https://www.instagram.com/yokbangun.id/)
* **Survei Lapangan**: Tersedia layanan survei langsung ke lahan atau lokasi bangunan Anda.

---

&copy; 2024 **YOK BANGUN.ID**. Hak Cipta Dilindungi.
