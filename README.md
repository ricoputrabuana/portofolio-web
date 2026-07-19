# Rico Putra Buana — Portfolio

Project React (Vite + Tailwind CSS v4) untuk portofolio profesional.

## Cara menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

## Build untuk production

```bash
npm run build
```

Hasilnya ada di folder `dist/`, tinggal upload ke Vercel, Netlify, atau hosting statis lain.

## Mengedit isi teks (tanpa sentuh JSX)

Semua teks, skill, sertifikasi, project, dan link contact ada di satu file:

```
src/data/content.js
```

## Memasukkan gambar & file kamu sendiri

Semua langkahnya sudah dikomentari langsung di `src/data/content.js` (paling atas
file). Ringkasnya:

| Yang mau diganti     | Taruh file di                  | Lalu edit di                              |
|-----------------------|---------------------------------|--------------------------------------------|
| Foto profil            | `src/assets/profile.jpg`        | uncomment import + `photo: profilePhoto`   |
| Screenshot project      | `src/assets/projects/*.jpg`     | uncomment import + `thumb: namaVariabel`   |
| Icon GitHub/LinkedIn/WA | `src/assets/icons/*.png`        | uncomment import + `customIcon: namaVariabel` di `contactLinks` |
| File CV (PDF)            | `public/CV_Rico_Putra_Buana.pdf`| tidak perlu import — cukup pastikan nama file cocok dengan `profile.cvFile` |

Catatan: file CV dan gambar ditaruh di folder **berbeda** —
- gambar (foto/icon/screenshot) → `src/assets/` (di-import pakai `import ... from`)
- CV PDF → `public/` (diakses langsung lewat URL, bukan di-import)

Ini karena cara Vite memperlakukan kedua folder itu berbeda: isi `src/assets`
diproses & di-bundle saat build, sedangkan isi `public/` disalin apa adanya
dan diakses lewat path absolut (`/nama-file.pdf`).

Selama gambar belum diisi, semua area itu otomatis menampilkan placeholder
abu-abu bertuliskan instruksi, jadi tetap aman dijalankan tanpa gambar sama sekali.

## Struktur folder

```
src/
├── assets/
│   ├── profile.jpg          (taruh foto profil di sini)
│   ├── projects/            (taruh screenshot project di sini)
│   └── icons/                (taruh icon custom di sini, opsional)
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── icons.jsx              # SVG icon GitHub/LinkedIn/WhatsApp bawaan (fallback)
├── data/
│   └── content.js              # semua konten + panduan import gambar (edit di sini)
├── App.jsx
├── main.jsx
└── index.css                    # design tokens (warna, font) via Tailwind v4 @theme

public/
└── CV_Rico_Putra_Buana.pdf      # taruh file CV asli kamu di sini (ganti file placeholder)
```

## Palet warna & font

- Font display: **Space Grotesk**
- Font body: **Inter**
- Font mono (aksen kecil): **JetBrains Mono**
- Warna aksen utama: `#1F4FD8` (biru)
- Warna latar: `#FBFBF9`

Semua token warna & font ada di `src/index.css` dalam blok `@theme`, bisa diubah dari satu tempat.
