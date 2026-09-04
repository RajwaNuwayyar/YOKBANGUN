# YOK BANGUN.ID — Studio Arsitektur Kustom & Konstruksi Presisi

Website resmi **YOK BANGUN.ID**, studio perancangan arsitektur dan pelaksana konstruksi bangunan presisi yang berpusat di **Hargosari, Sraten, Kec. Gatak, Kabupaten Sukoharjo, Jawa Tengah**.

---

## 🌟 Fitur Utama Website

1. **Hero Section Dinamis**:
   - Background video sinematik dengan visual tipografi editorial mewah.
   - Tombol *call-to-action* langsung ke portofolio proyek dan konsultasi.

2. **Katalog Pilihan Proyek (Selected Projects)**:
   - Slider karosel interaktif menampilkan pilihan desain terbaik (Scandinavian 2,5 Jt/m², Modern Minimalis 450 Jt, Kost Exclusive 30 Kamar, Rumah 35 m² Mulai 2 Jt-an, dll.).
   - Setiap kartu proyek terhubung ke **halaman detail proyek khusus** (`project-detail.html`).

3. **Halaman Detail Proyek Lengkap (`project-detail.html`)**:
   - Pratinjau visual utama resolusi tinggi.
   - Kartu metrik utama (Estimasi Biaya, Luas Bangunan, Luas Lahan, Kamar Tidur, Carport/Fasilitas).
   - Narasi konsep arsitektur, filosofi tata ruang, dan keunggulan desain.
   - Tabel spesifikasi teknis (pondasi, struktur SNI, dinding, atap, sanitair, kusen).
   - Galeri foto & gambar denah kerja interaktif dengan fitur *Lightbox Zoom*.
   - Rekomendasi proyek lainnya dan tombol konsultasi WhatsApp khusus proyek terkait.

4. **Filosofi & Cara Kerja**:
   - Penjelasan standar mutu konstruksi, kedalaman pondasi, pembesian SNI, dan disiplin Rencana Anggaran Biaya (RAB) yang transparan.

5. **Galeri Konsep Arsitektur dengan Filter Kategori**:
   - Filter interaktif berdasarkan jenis proyek: *Semua*, *Kost Exclusive*, *Rumah 450 Jt*, *Scandinavian*, dan *Rumah 2 Jt/m²*.

6. **Bukti Konstruksi Fisik Nyata**:
   - Dokumentasi *before-after* dan progres pelaksanaan proyek fisik lapangan (contoh: Pembangunan Gedung 2 Lantai Klinik Baby Spa dr. S di Giriwono, Wonogiri).

7. **Integrasi Komunikasi Langsung**:
   - Tombol Chat WhatsApp dengan template pesan otomatis.
   - Tombol Direct Email (Gmail) & Instagram.
   - Floating Action Button WhatsApp di pojok layar.

---

## 🛠️ Teknologi yang Digunakan

* **HTML5**: Struktur semantik dan standar aksesibilitas web modern.
* **CSS3 (Vanilla CSS)**: 
  * Desain *luxury editorial* terinspirasi dari publikasi arsitektur kelas atas.
  * Tipografi Google Fonts: **Cormorant Garamond** (serif elegan) & **Montserrat** (sans-serif bersih).
  * Sistem warna *high-contrast* (hitam pekat, abu netral, aksen emas arsitektural).
  * Responsif penuh untuk desktop, tablet, dan smartphone.
* **JavaScript (Vanilla JS)**:
  * Pengontrol *carousel slider* proyek.
  * Filter kategori galeri secara *client-side*.
  * Parser data dinamis URL parameter (`?id=...`) pada `project-detail.html`.
  * Modal *Lightbox* untuk zoom gambar denah dan fasad.
  * Efek scroll navbar & navigasi menu mobile.

---

## 📁 Struktur Direktori

```text
YOK BANGUN.ID/
├── index.html              # Halaman utama (Landing Page)
├── style.css               # Styling global dan halaman utama
├── script.js               # Logika interaktif halaman utama (carousel, filter, navbar)
├── project-detail.html     # Template halaman detail proyek
├── project-detail.css      # Styling khusus halaman detail proyek
├── project-detail.js       # Database proyek & pengendali dinamis halaman detail
├── .gitignore              # Konfigurasi file yang diabaikan oleh Git
├── README.md               # Dokumentasi proyek
└── assets/                 # Aset gambar, video, dan logo
    ├── LOGO/               # Logo resmi YOK BANGUN.ID
    ├── DESIGN/             # Rendering 3D dan denah konsep desain
    │   ├── KOST EXCLUSIVE 30 KAMAR/
    │   ├── RUMAH 450 JT/
    │   ├── RUMAH MULAI DR 2JTAAN PERMETER/
    │   └── SCANDINAVIAN 2,5 JT PERMETER/
    └── PORTOFOLIO/         # Dokumentasi foto fisik proyek nyata lapangan
        └── PEMBANGUNAN KLINIK BABY SPA dr S GIRIWON WONOGIRI 3024/
```

---

## 🚀 Cara Menjalankan Secara Lokal

Website ini dibangun menggunakan teknologi web murni tanpa *build tools* yang rumit, sehingga dapat dijalankan dengan mudah melalui beberapa cara:

### Opsi 1: Menggunakan Python Built-in Server
Buka terminal / PowerShell di folder proyek dan jalankan:
```bash
python -m http.server 8000
```
Buka browser dan akses: `http://localhost:8000`

### Opsi 2: Menggunakan VS Code Live Server
1. Buka folder proyek di **VS Code**.
2. Klik kanan pada file `index.html`.
3. Pilih **"Open with Live Server"**.

### Opsi 3: Menggunakan Node.js `npx serve`
```bash
npx serve .
```

---

## 📍 Kontak & Lokasi Studio

* **Nama Usaha**: YOK BANGUN.ID — Design & Construction
* **Lokasi**: Hargosari, Sraten, Kec. Gatak, Kabupaten Sukoharjo, Jawa Tengah
* **WhatsApp**: [0857-4292-6695](https://wa.me/6285742926695)
* **Email**: [YOKBANGUNID@GMAIL.COM](mailto:YOKBANGUNID@GMAIL.COM)
* **Instagram**: [@yokbangun.id](https://www.instagram.com/yokbangun.id/)
* **Wilayah Layanan**: Sukoharjo, Surakarta (Solo), Boyolali, Karanganyar, Wonogiri, Klaten & sekitarnya

---

&copy; 2024 **YOK BANGUN.ID**. Hak Cipta Dilindungi.
