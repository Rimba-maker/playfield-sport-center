# PRD: PlayField Sport Center — Sewa Lapangan Futsal, Badminton, Padel & Tenis

## 1. Brand Identity

**Nama Brand:** PlayField Sport Center
**Alasan Naming:** "Play" = bermain/berolahraga, "Field" = lapangan. Langsung deliver apa yang ditawarkan tanpa basa-basi. Modern, clean, mudah diingat, dan scalable kalau mau expand ke sport lain. Terdengar profesional tapi tetap approachable.

**Tagline:** *"Satu Venue. Semua Olahraga. Langsung Main."*

**Target Audience:**
- Komunitas futsal & tim kantor (booking rutin mingguan)
- Pecinta badminton semua usia
- Pecinta padel — pemula sampai yang sudah main rutin (market paling growing 2025)
- Pemain tenis yang butuh lapangan berkualitas
- Corporate (team building, company tournament)
- Keluarga & pasangan yang olahraga bareng
- Atlet amatir yang training rutin
- SES B sampai A, usia 17-50

**Brand Voice:**
- Tone: Energetic, sporty, inclusive, no-nonsense
- Style copywriting: Action-oriented, community feel, focus on convenience
- Avoid: Terlalu formal, kaku, bahasa "fasilitas premium" yang terdengar mahal

**Relevansi Data 2025:**
- Padel tumbuh 1.684% — sport center WAJIB punya padel sekarang
- Badminton tetap olahraga #1 dari sisi basis peminat Indonesia
- Futsal tetap primadona untuk komunitas & kantor
- Tenis naik 113% — ikut momentum padel (raket sport yang lagi naik)

---

## 2. Tech Stack

- **Framework:** Astro 5 (SSG)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Animation:** Framer Motion via React islands
- **Deploy:** Netlify (static)
- **Images:** Unsplash + Pexels (sports action, modern court, athletes)

---

## 3. Section Breakdown

| # | Section | Type | Tujuan |
|---|---------|------|--------|
| 1 | Navbar | `.astro` static | Logo, nav, CTA "Book Lapangan" |
| 2 | Hero | React island `client:load` | Energy tinggi, pilih sport langsung |
| 3 | Sport Selector | React island `client:visible` | 4 sport tabs dengan detail lapangan |
| 4 | Padel Spotlight | React island `client:visible` | Section khusus — highlight trending sport |
| 5 | Fasilitas Umum | React island `client:visible` | Locker, kantin, parkir, dll |
| 6 | Pricing | `.astro` static | Tabel harga per sport per slot waktu |
| 7 | Membership | React island `client:visible` | Paket member bulanan / tahunan |
| 8 | Tournament & Events | React island `client:visible` | Turnamen rutin & event komunitas |
| 9 | Corporate Package | `.astro` static | Team building & company booking |
| 10 | Jadwal & Availability | React island `client:visible` | Cek slot kosong |
| 11 | Testimonial | React island `client:visible` | Review dari berbagai komunitas |
| 12 | FAQ | React island `client:visible` | Pertanyaan umum booking & fasilitas |
| 13 | Booking CTA | React island `client:idle` | Form booking lapangan |
| 14 | Footer | `.astro` static | Lokasi, jam, kontak, sosmed |

---

## 4. Copywriting

### Navbar
- Menu: Lapangan • Padel • Harga • Member • Tournament • Lokasi
- CTA: **Book Lapangan**

### Hero
- **Headline:** Mau Main Apa Hari Ini?
- **Subheadline:** PlayField hadir dengan 4 jenis lapangan: futsal, badminton, padel, dan tenis. Semua dalam satu venue, booking online, langsung main.
- **CTA Primary:** Book Sekarang
- **CTA Secondary:** Lihat Jadwal

Sport quick-select pills di bawah CTA:
⚽ Futsal · 🏸 Badminton · 🎾 Padel · 🎾 Tenis

Stat bar: "12 Lapangan • Buka 06.00–23.00 • Booking Online 24 Jam • Parkir Luas"

### Sport Selector
- **Heading:** Pilih Olahraga, Langsung Cek Lapangan.
- 4 tab besar (pilih sport, konten berubah):

---

**TAB: ⚽ FUTSAL**

*"5 Lawan 5. Arena Kecil, Energi Besar."*

**Spesifikasi Lapangan:**
- 3 lapangan futsal indoor
- Ukuran standar: 25m × 42m
- Rumput sintetis Mondo Italia (FIFA approved quality)
- Gawang standar + jaring
- Pencahayaan LED 1.500 lux (setara standar kompetisi)
- Ring bola tersedia

**Best for:** Tim kantor, komunitas futsal, turnamen mini, latihan rutin

**Kapasitas:** 10 pemain + cadangan

**Ketersediaan:** 6.00–23.00 setiap hari

**CTA:** Book Lapangan Futsal →

---

**TAB: 🏸 BADMINTON**

*"Cepat. Presisi. Dan Di Sini, Shuttlecock-nya Tidak Gampang Jebol."*

**Spesifikasi Lapangan:**
- 6 lapangan badminton indoor
- Vinyl flooring Yonex/Li-Ning standard
- Net standar BWF
- Lampu LED 1.000 lux, zero shadow
- AC sentral, suhu 22-24°C dijaga konsisten

**Best for:** Main casual, latihan rutin, sparring, family badminton

**Kapasitas:** 4 pemain (doubles) / 2 pemain (singles)

**Ketersediaan:** 06.00–23.00 setiap hari

**Shuttlecock:** Tersedia beli di counter (Rp 50k/tube isi 12)

**CTA:** Book Lapangan Badminton →

---

**TAB: 🎾 PADEL**

*"Olahraga Paling Hype 2025. Dan Kami Sudah Siap Sejak Hari Pertama."*

**Spesifikasi Lapangan:**
- 2 lapangan padel glass-enclosed
- Ukuran standar: 10m × 20m
- Rumput sintetis padel khusus (FIP approved)
- Dinding kaca tempered 10mm
- Pencahayaan LED uniform 500 lux
- Raket & bola padel tersedia pinjam / beli

**Best for:** Pemula yang baru coba, komunitas padel, latihan doubles

**Kapasitas:** 4 pemain (always doubles — format padel)

**Ketersediaan:** 06.00–23.00 setiap hari

*"Belum pernah main padel? Kami ada intro session tiap Sabtu pagi. Gratis."*

**CTA:** Book Lapangan Padel →

---

**TAB: 🎾 TENIS**

*"Klasik. Dan Tidak Pernah Tidak Keren."*

**Spesifikasi Lapangan:**
- 1 lapangan tenis hard court outdoor (dengan atap)
- Ukuran standar ITF: 23.77m × 10.97m
- Surface: Plexi-cushion hard court (SIIT standard)
- Net standar ITF
- Lampu LED untuk malam hari
- Dekat area parkir untuk mudah akses equipment

**Best for:** Latihan rutin, sparring, family tennis, corporate outing

**Kapasitas:** 2-4 pemain (singles/doubles)

**Ketersediaan:** 06.00–22.00 (outdoor, cuaca dependent)

**Ball machine available:** Rp 100k/jam (booking terpisah)

**CTA:** Book Lapangan Tenis →

---

### Padel Spotlight
- **Heading:** Padel. Baru Dengar? Sudah Waktunya Coba.
- **Subheading:** Olahraga dengan pertumbuhan tercepat di Indonesia 2025. Naik 1.684% dalam setahun. Bukan sekadar tren — ini olahraga yang akan bertahan lama.

**Kenapa Padel Lagi Naik Daun?**
4 reason cards:

**🤝 Selalu Main Berdua (Doubles)**
Padel selalu dimainkan 4 orang — tidak ada yang main sendiri. Ini yang bikin padel jadi olahraga paling sosial sekarang. Fun guaranteed.

**🔰 Mudah Dipelajari, Susah Dikuasai**
Berbeda dari tenis yang tekniknya sulit dari awal, padel bisa dinikmati pemula dalam hitungan menit. Tapi depth-nya dalam untuk yang mau serius.

**🏟️ Court Kecil = Banyak Rally**
Court padel lebih kecil dari tenis — artinya bola lebih sering balik, rally lebih panjang, dan olahraga lebih intens per menit. Puas tapi tidak cape berdiri.

**📱 Instagrammable**
Lapangan kaca + outfit kece + action shot = konten gold. Tidak heran padel jadi olahraga sosial media favorit.

**Intro Session Gratis tiap Sabtu Pagi:**
- Jam 08.00–09.30
- Dipandu coach padel bersertifikat
- Include: pinjam raket + bola
- Kapasitas: max 8 orang
- **Daftar via WA** — slot cepat habis

**Punya komunitas padel? Partner dengan kami:**
- Booking regular dengan harga khusus
- Slot prioritas akhir pekan
- Bisa host turnamen internal
- **Hubungi kami untuk detail**

### Fasilitas Umum
- **Heading:** Semua Ada, Tidak Perlu Bingung.
- 8 facility cards:

**🚿 Locker Room & Shower**
Locker room bersih untuk pria & wanita. 20 locker tersedia, kunci digital. Shower panas tersedia (Rp 10k/akses termasuk handuk).

**🍽️ Kantin & Sport Bar**
Makan dan minum sebelum/sesudah main. Menu: nasi goreng, mie, sandwich, minuman isotonic, jus, kopi. Harga affordable.

**🏪 Sport Shop**
Beli shuttlecock, bola padel, grip tape, kaos kaki, dan kebutuhan olahraga lainnya. Brand: Yonex, Victor, Head, Wilson.

**🅿️ Parkir Luas & Aman**
60 mobil + 100 motor. CCTV 24 jam. Gratis untuk member, Rp 5k/jam untuk non-member.

**📶 WiFi di Area Lounge**
Untuk yang nunggu giliran atau rehat setelah main. Speed 50Mbps.

**💪 Mini Warm-Up Area**
Stretching area dengan matras, resistance band, dan foam roller — gratis untuk semua pengunjung.

**🧒 Kids Play Corner**
Area bermain anak di dekat kantin — buat yang bawa keluarga, si kecil tidak bosan menunggu.

**📷 Action Cam Rental**
Sewa GoPro untuk rekam momen main. Rp 75k/2 jam. Termasuk mounting untuk net tiang.

### Pricing
- **Heading:** Harga Jelas. Langsung Booking.
- **Subheading:** Semua harga per jam per lapangan. Tidak ada biaya tersembunyi.

**⚽ FUTSAL (per lapangan/jam)**
| Slot | Weekday | Weekend |
|------|---------|---------|
| Pagi 06.00–10.00 | Rp 120k | Rp 150k |
| Siang 10.00–17.00 | Rp 150k | Rp 175k |
| Sore 17.00–21.00 | Rp 200k | Rp 225k |
| Malam 21.00–23.00 | Rp 175k | Rp 200k |

**🏸 BADMINTON (per lapangan/jam)**
| Slot | Weekday | Weekend |
|------|---------|---------|
| Pagi 06.00–10.00 | Rp 45k | Rp 55k |
| Siang 10.00–17.00 | Rp 55k | Rp 65k |
| Sore 17.00–21.00 | Rp 75k | Rp 85k |
| Malam 21.00–23.00 | Rp 65k | Rp 75k |

**🎾 PADEL (per lapangan/jam)**
| Slot | Weekday | Weekend |
|------|---------|---------|
| Pagi 06.00–10.00 | Rp 130k | Rp 160k |
| Siang 10.00–17.00 | Rp 150k | Rp 180k |
| Sore 17.00–21.00 | Rp 200k | Rp 230k |
| Malam 21.00–23.00 | Rp 175k | Rp 200k |

**🎾 TENIS (per lapangan/jam)**
| Slot | Weekday | Weekend |
|------|---------|---------|
| Pagi 06.00–10.00 | Rp 110k | Rp 130k |
| Siang 10.00–17.00 | Rp 130k | Rp 150k |
| Sore 17.00–21.00 | Rp 160k | Rp 180k |
| Malam 21.00–22.00 | Rp 140k | Rp 160k |

**Info pembayaran:** Bayar penuh saat booking. Cancel H-24 = refund 100%. Cancel H-12 = refund 50%. Cancel kurang dari 12 jam = no refund.

**Metode:** Transfer bank, QRIS, GoPay, OVO, kartu debit/kredit.

### Membership
- **Heading:** Main Lebih Sering, Bayar Lebih Hemat.
- **Subheading:** Member PlayField hemat up to 30% dari harga regular.

3 member cards:

**🥉 PlayField Member — Rp 200k/bulan**
*Untuk yang main 1-2x seminggu*
- 10% off semua lapangan semua slot
- Prioritas booking 7 hari sebelum (non-member hanya 3 hari)
- Free 1 jam sewa locker/bulan
- Akses lounge & WiFi unlimited

**🥈 PlayField Pro — Rp 450k/bulan** ⭐ Terlaris
*Untuk yang main rutin 3x+ seminggu*
- 20% off semua lapangan
- Prioritas booking 14 hari sebelum
- Free locker personal (private, monthly)
- Free akses mini warm-up area priority
- 1x shuttle/bola gratis per bulan
- Invite ke member-only tournament

**🥇 PlayField Elite — Rp 900k/bulan**
*Untuk atlet & komunitas serius*
- 30% off semua lapangan
- Prioritas booking 21 hari sebelum
- Private locker permanent
- Free 4 jam lapangan per bulan (flexible)
- Free akses semua turnamen member
- Nama di "PlayField Wall of Honor"
- Dedicated WhatsApp support

**Corporate Member:** Paket khusus untuk perusahaan min. 10 anggota. Hubungi kami.

### Tournament & Events
- **Heading:** Lebih Dari Sekadar Booking Lapangan.
- **Subheading:** Kami rutin gelar turnamen dan event komunitas. Buat yang mau kompetisi — atau sekadar cari lawan baru.

4 event cards:

**⚽ Futsal Cup Bulanan**
Setiap akhir bulan | 8 tim, format knock-out
- Hadiah: voucher booking + trophy
- Daftar tim min. H-14
- Biaya pendaftaran: Rp 350k/tim

**🏸 Badminton Open — Per 2 Bulan**
Kategori: Pria, Wanita, Campuran, Veteran (40+)
- Format: grup + knock-out
- Hadiah: set raket + voucher
- Biaya: Rp 100k/pasang

**🎾 Padel Mixer Night — Tiap Jumat**
Format social: random mix partner
- Cocok untuk yang mau cari teman main baru
- Biaya: Rp 100k/orang (include 2 jam + minuman)
- Walk-in welcome, spot terbatas

**🎾 Monthly Tennis Social**
Format round-robin santai
- Tiap Minggu ke-3, mulai jam 07.00
- Biaya: Rp 75k/orang
- Semua level welcome

**CTA:** Daftar Event atau Hubungi Kami untuk Custom Tournament

### Corporate Package
- **Heading:** Olahraga Bareng Tim Kantor. Kami Yang Siapkan.
- **Subheading:** Dari booking lapangan biasa sampai full corporate tournament dengan trophy dan sertifikat.

3 corporate service cards:

**🏆 Corporate Tournament**
- Turnamen internal antar divisi
- Custom bracket & scoring
- Trophy + sertifikat untuk pemenang
- F&B package optional
- MC & dokumentasi optional
- *Mulai Rp 2.5 jt untuk 20 orang*

**👥 Team Building Olahraga**
- Gabungan sport: futsal + badminton + padel
- Format round-robin antar departemen
- Dipandu sports coordinator kami
- Fun & competitive sekaligus
- *Mulai Rp 1.5 jt untuk 20 orang*

**📋 Regular Corporate Slot**
- Slot lapangan khusus untuk perusahaan
- Booking flexible, invoice & kwitansi tersedia
- Cocok untuk reimburse wellbeing benefit kantor
- *Diskon 15% untuk commitment min. 4x/bulan*

### Jadwal & Availability
- **Heading:** Cek Slot Kosong, Langsung Book.
- **Subheading:** Update real-time. Hijau = tersedia, merah = penuh.
- Visual schedule grid per lapangan per hari (mock weekly schedule)
- Highlight: slot kosong yang tersedia hari ini
- **CTA:** Lihat Full Schedule atau Book Langsung

Note: *"Booking bisa H-21 untuk Elite member, H-14 untuk Pro, H-7 untuk regular member, H-3 untuk non-member."*

### Testimonial
- **Heading:** Dari Berbagai Komunitas.
- 5 review:

> "Tim futsal kami sudah langganan setiap Selasa dan Kamis selama 8 bulan. Lapangan selalu bersih, AC dingin, dan staff ramah. Tidak pernah ada masalah." — **Komunitas Futsal Garuda FC, 12 orang**

> "Padel di PlayField is the best decision we made this year. Courtnya bagus, kacanya bersih, lighting-nya sempurna. Dan intro session sabtu pagi bantu banget buat yang baru mulai kayak kami." — **@padel.jakarta.crew**

> "Kami booking lapangan tenis tiap Sunday morning. Fasilitas locker room dan shower-nya yang bikin betah — bisa langsung ke kantor tanpa pulang dulu." — **Pak Hendra, tennis enthusiast**

> "Company outing kami gunakan PlayField — mix futsal, badminton, dan padel. Tim jadi lebih solid, dan yang biasanya pendiam jadi paling semangat. Recommended!" — **Bu Linda, HR PT Maju Bersama**

> "Badminton court-nya paling enak di kota ini. Vinyl floor-nya empuk di kaki, shuttlecock yang dijual juga bagus. Member Pro-nya worth it banget." — **Pak Doni, badminton 4x seminggu**

### FAQ
- **Heading:** FAQ
Accordion:

1. Apakah bisa walk-in tanpa booking? → Bisa jika ada lapangan kosong. Tapi sangat disarankan booking online — terutama slot sore dan weekend yang sering penuh.

2. Berapa maksimal orang per lapangan? → Futsal: max 14 orang (10 main + 4 cadangan). Badminton: 4 orang. Padel: 4 orang (wajib 4, format doubles). Tenis: 4 orang.

3. Apakah menyediakan perlengkapan olahraga? → Raket badminton bisa dipinjam (deposit Rp 100k, dikembalikan). Raket padel tersedia pinjam gratis. Bola dan shuttlecock dijual di sport shop kami.

4. Apakah bisa perpanjang waktu di tempat? → Bisa, tergantung ketersediaan lapangan sesudahnya. Konfirmasi ke staff minimal 15 menit sebelum waktu habis.

5. Bagaimana kebijakan cancel booking? → Cancel H-24 = refund penuh. Cancel H-12 = refund 50%. Under 12 jam = no refund. Reschedule gratis jika H-24.

6. Apakah lapangan padel cocok untuk pemula? → Sangat cocok! Padel lebih mudah dipelajari dari tenis. Ikuti intro session gratis tiap Sabtu pagi untuk mulai.

7. Apakah ada parkir? → Ya, 60 mobil + 100 motor. CCTV 24 jam. Gratis untuk member, Rp 5k/jam untuk non-member.

8. Apakah lapangan tenis bisa dipakai saat hujan? → Lapangan tenis kami semi-outdoor dengan atap, tapi tetap bisa terkena angin/air jika hujan deras. Jika tidak bisa digunakan karena hujan, booking dapat direscheduled gratis.

### Booking CTA
- **Heading:** Pilih Lapangan. Pilih Waktu. Main.
- **Body:** Booking cuma butuh 2 menit. Konfirmasi langsung ke WhatsApp.
- Form:
  - Nama
  - WhatsApp
  - Jenis lapangan (radio: Futsal / Badminton / Padel / Tenis)
  - Tanggal
  - Slot waktu (dropdown)
  - Jumlah jam
  - Jumlah orang
  - Member? (toggle)
  - Catatan khusus
- **CTA:** Book Sekarang

Alternative: **WhatsApp Direct** untuk booking cepat & pertanyaan

---

## 5. Image References

| Section | Source | URL / Search Term | Alt Text | Dimensi |
|---------|--------|-------------------|----------|---------|
| Hero | Unsplash | https://unsplash.com/s/photos/sports-center-indoor-courts | "Indoor sport center multi courts" | 1920x1080 |
| Hero alt | Pexels | https://www.pexels.com/search/sports%20facility%20modern/ | "Modern sports facility" | 1920x1080 |
| Sport - Futsal | Unsplash | https://unsplash.com/s/photos/indoor-futsal-court | "Futsal court indoor" | 1200x800 |
| Sport - Futsal action | Pexels | https://www.pexels.com/search/futsal%20indoor%20game/ | "Futsal game action" | 800x600 |
| Sport - Badminton court | Unsplash | https://unsplash.com/s/photos/badminton-court-indoor | "Badminton court indoor" | 1200x800 |
| Sport - Badminton action | Pexels | https://www.pexels.com/search/badminton%20smash%20action/ | "Badminton smash" | 800x600 |
| Sport - Padel court | Unsplash | https://unsplash.com/s/photos/padel-court-glass | "Padel court glass wall" | 1200x800 |
| Sport - Padel action | Pexels | https://www.pexels.com/search/padel%20tennis%20game/ | "Padel game action" | 800x600 |
| Sport - Tennis court | Unsplash | https://unsplash.com/s/photos/tennis-court-hard | "Tennis hard court" | 1200x800 |
| Sport - Tennis action | Pexels | https://www.pexels.com/search/tennis%20player%20action/ | "Tennis player" | 800x600 |
| Padel Spotlight | Unsplash | https://unsplash.com/s/photos/padel-racket-court | "Padel court aerial view" | 1600x900 |
| Padel - Intro session | Pexels | https://www.pexels.com/search/padel%20beginner%20lesson/ | "Padel intro lesson" | 800x600 |
| Padel - Community | Unsplash | https://unsplash.com/s/photos/padel-friends-playing | "Padel friends playing" | 800x600 |
| Facility - Locker | Pexels | https://www.pexels.com/search/sports%20locker%20room%20modern/ | "Modern locker room" | 800x600 |
| Facility - Kantin | Unsplash | https://unsplash.com/s/photos/sports-cafeteria | "Sports center kantin" | 800x600 |
| Facility - Shop | Pexels | https://www.pexels.com/search/sport%20shop%20equipment/ | "Sport shop" | 800x600 |
| Facility - Parking | Unsplash | https://unsplash.com/s/photos/parking-sports-facility | "Parkir sport center" | 800x600 |
| Facility - Warmup | Pexels | https://www.pexels.com/search/stretching%20area%20sports/ | "Warm up area" | 800x600 |
| Membership - Visual | Unsplash | https://unsplash.com/s/photos/sports-membership-card | "Sport membership" | 1200x800 |
| Tournament - Futsal | Pexels | https://www.pexels.com/search/futsal%20tournament/ | "Futsal cup tournament" | 800x600 |
| Tournament - Badminton | Unsplash | https://unsplash.com/s/photos/badminton-tournament | "Badminton tournament" | 800x600 |
| Tournament - Padel | Pexels | https://www.pexels.com/search/padel%20tournament%20competition/ | "Padel tournament" | 800x600 |
| Corporate - Team | Unsplash | https://unsplash.com/s/photos/corporate-sports-team-building | "Corporate team building sport" | 1200x800 |
| Testimonial - Community | Pexels | https://www.pexels.com/search/sports%20team%20happy%20group/ | "Happy sports team" | 800x800 |

---

## 6. Animation Spec (Framer Motion)

**Vibe:** Energetic, dynamic, sporty. Animasi harus kasih feeling aktif dan on-the-move.

### Hero (React island, `client:load`)
```tsx
// Energetic multi-element reveal
const sportReveal = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 }
  }
}

// Sport pills: pop-in stagger dengan spring
const pillPop = {
  hidden: { opacity: 0, scale: 0 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { type: "spring", stiffness: 200, damping: 15 }
  }
}
```

### Sport Selector Tabs (React island, `client:visible`)
- 4 tab besar: active state dengan `layoutId` smooth indicator
- Tab switch: `AnimatePresence` mode `wait` — content fade + slide
- Active tab: background color shift + icon scale
- Sport image: parallax subtle on scroll saat visible

### Padel Spotlight (React island, `client:visible`)
- Section ini paling prominent — full-width dengan dramatic reveal
- 4 reason cards: stagger reveal dari bawah
- Stats padel (1.684% growth): counter animation 0 → 1684
- Intro session card: subtle pulse + badge glow
- Background: subtle diagonal gradient animation

### Fasilitas Grid (React island, `client:visible`)
- 8 cards stagger reveal
- Hover: card lift + icon bounce
- Icon scale pop on visible

### Pricing Table (`.astro` + small island)
- Tab per sport: smooth `layoutId` indicator
- Table rows stagger reveal
- "Terlaris" / peak slot: subtle amber highlight
- Row hover: background color accent
- Member discount callout: pulse animation

### Membership Cards (React island, `client:visible`)
- 3 cards reveal stagger
- Pro card: slightly scaled `1.05` + shadow emphasis
- Elite card: gold border glow animated
- Hover: card lift + benefit list pulse

### Tournament Cards (React island, `client:visible`)
- 4 event cards reveal stagger
- Hover: card lift + date badge emphasis + register CTA slide-in
- Trophy icon: subtle bounce on visible

### Booking Form
- Multi-step smooth transitions:
  - Step 1: Sport selection (visual card picker)
  - Step 2: Date & time slot
  - Step 3: Personal details
- Sport card picker: selected state glow per sport color
- Time slot grid: hover highlight + selected state
- Price calculator: real-time update saat pilih slot

```tsx
// Sport color per selection
const sportColors = {
  futsal: '#22c55e',   // green
  badminton: '#3b82f6', // blue
  padel: '#f97316',    // orange (trending!)
  tenis: '#a855f7'     // purple
}
```

### Availability Visual
- Grid slot: smooth color transition (hijau → merah saat penuh)
- "Book" hover state: slot expand subtle
- Pulse animation untuk slot yang "hampir penuh"

### Scroll Reveal (reusable)
```tsx
const sportFade = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } 
  }
}
```

### Hydration Strategy
- `client:load` → Hero
- `client:visible` → Sport Selector, Padel Spotlight, Facilities, Pricing tabs, Membership, Tournament, Availability, Testimonial, FAQ
- `client:idle` → Booking form
- Sisanya: static

---

## 7. Catatan Implementasi Khusus

### Padel perlu extra attention
Karena padel adalah sport paling trending, section Padel Spotlight sengaja lebih besar dari sport lain. Dari sisi SEO juga penting untuk target keyword "lapangan padel [kota]" secara spesifik — ini keyword yang sedang exploding volume-nya.

### Sport color theming per tab
Setiap sport punya accent color berbeda untuk membedakan UX:
- Futsal → green (rumput)
- Badminton → blue (court vinyl)
- Padel → orange (trending, energic)
- Tenis → purple (classic, premium)

### Booking system consideration
PRD ini ideal jika dikombinasikan dengan simple booking system. Untuk Astro static, opsi terbaik:
- Netlify Forms untuk capture booking request
- Atau embed Calendly/Timify yang sudah punya slot management
- Konfirmasi manual via WhatsApp (paling simple untuk UMKM)

### SEO per sport
Setiap sport bisa jadi landing page terpisah jika traffic-nya besar:
- `/futsal/` → target "sewa lapangan futsal [kota]"
- `/padel/` → target "lapangan padel [kota]" (HIGH PRIORITY — keyword exploding)
- `/badminton/` → target "sewa lapangan badminton [kota]"
- `/tenis/` → target "sewa lapangan tenis [kota]"

---

## 8. SEO Meta

- **Title:** PlayField Sport Center — Sewa Lapangan Futsal, Badminton, Padel & Tenis [Kota]
- **Description:** Sport center dengan 12 lapangan: futsal, badminton, padel, dan tenis. Booking online 24 jam, buka 06.00–23.00, fasilitas lengkap. Member hemat up to 30%.
- **Keywords:** sewa lapangan futsal, lapangan badminton, lapangan padel, sewa lapangan tenis, sport center [kota], booking lapangan olahraga
- **OG Image:** Aerial/wide shot semua lapangan sport center (1200x630)
- **Schema:** `SportsActivityLocation` + `LocalBusiness` + `Event` + `Service` schema
