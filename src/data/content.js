import profilePhoto from "../assets/rico.png";
import ganThumb from "../assets/projects/sketch.jpg";
import ehealthThumb from "../assets/projects/e-health.png";
import auroraVideo from "../assets/projects/aurora_thumbnail.webm";

const gansketchGalleryImages = import.meta.glob(
  "../assets/projects/gan-gallery/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" }
);

const ehealthGalleryImages = import.meta.glob(
  "../assets/projects/e-health-gallery/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" }
);

const auroraportofolioGalleryImages = import.meta.glob(
  "../assets/projects/aurora-portofolio-gallery/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" }
);

function toGallery(images, meta = {}) {
  return Object.keys(images)
    .sort() // urut berdasarkan nama file, makanya perlu prefix angka
    .map((path) => {
      const filename = path.split("/").pop();
      const info = meta[filename];

      if (typeof info === "string" || !info) {
        return { image: images[path], caption: info || "" };
      }

      return {
        image: images[path],
        caption: info.label || "",
        title: info.title || "",
        description: info.description || "",
        features: info.features || [],
      };
    });
}

export const profile = {
  name: "Rico Putra Buana",
  role: "Full Stack Developer",
  location: "Bekasi, Indonesia",
  intro:
    "Lulusan Teknik Informatika yang tertarik pada pengembangan web, pengembangan aplikasi Android, dan machine learning. Berpengalaman membangun model deep learning berbasis GAN untuk pemrosesan gambar, serta mengembangkan aplikasi kesehatan berbasis Android. Bersemangat untuk terus belajar di lingkungan kerja teknologi yang dinamis.",
  photo: profilePhoto,
  cvFile: "/CV_Rico_Putra_Buana.pdf",
};
export const contactLinks = [
  {
    label: "Email",
    href: "mailto:ricoputra1708@gmail.com",
    icon: "mail",
  },
  {
    label: "GitHub",
    href: "https://github.com/ricoputrabuana",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ricoputrabuana",
    icon: "linkedin",

  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6285772551947",
    icon: "whatsapp",
  },
];

export const about = [
  {
    bold: "S1 Teknik Informatika",
    text: " — Universitas Gunadarma, IPK 3.67 (Sep 2020 – Sep 2024).",
  },
  {
    bold: null,
    text: "Berpengalaman membangun model deep learning berbasis GAN (arsitektur pix2pix) untuk pemrosesan citra, serta mengembangkan aplikasi kesehatan berbasis Android menggunakan Java dan Firebase.",
  },
  {
    bold: null,
    text: "Memiliki pemahaman dasar troubleshooting dan jaringan komputer, dengan motivasi tinggi untuk terus belajar di lingkungan kerja teknologi yang dinamis.",
  },
];

export const skillGroups = [
  { label: "Web Development", color: "var(--color-tag-web)", chips: ["HTML", "CSS", "JavaScript", "PHP"] },
  { label: "Android Development", color: "var(--color-tag-android)", chips: ["Java", "Android Studio"] },
  { label: "Machine Learning", color: "var(--color-tag-ml)", chips: ["GAN", "TensorFlow", "Python"] },
  { label: "Lainnya", color: "var(--color-ink-faint)", chips: ["Microsoft Office", "Troubleshooting"] },
  { label: "Soft Skills", color: "var(--color-accent)", chips: ["Manajemen Waktu", "Berpikir Analitis", "Pemecahan Masalah"] },
];

export const certifications = [
  { name: "Junior Web Programmer", issuer: "BNSP (Badan Nasional Sertifikasi Profesi)", date: "Sep 2024" },
  { name: "JavaScript Programming Fundamental", issuer: null, date: "Dec 2021" },
  { name: "Fundamental Web Programming", issuer: null, date: "Aug 2021" },
  { name: "Microsoft Excel Basic Training", issuer: "ZenLeap", date: "Apr 2025" },
];

export const projects = [
  {
    name: "Prediksi Citra Wajah dari Sketsa (GAN)",
    description:
      "Mengembangkan model deep learning berbasis arsitektur pix2pix GAN untuk merekonstruksi citra wajah dari gambar sketsa. Proses pelatihan dan evaluasi dilakukan menggunakan TensorFlow dan Python, dengan metrik SSIM dan PSNR sebagai pengukuran akurasi hasil.",
    stack: ["Python", "TensorFlow", "GAN", "pix2pix"],
    repoLink: "",
    thumb: ganThumb,
    frameType: "window",
    appTitle: "Sketch2Photo - GAN Face Generator",
    gallery: toGallery(gansketchGalleryImages, {
      "01-load-model.jpg": {
        label: "Load Model",
        title: "Load Generator Model",
        description:
          "Halaman awal yang digunakan untuk memuat model Pix2Pix GAN (.h5) ke dalam browser sebelum proses konversi sketsa dimulai.",
        features: [
          "TensorFlow.js model loading",
          "Client-side inference",
          "Model status indicator",
          "Ready for image generation",
        ],
      },
      "02-upload-sketsa.jpg": {
        label: "Upload Sketch",
        title: "Upload Sketch Image",
        description:
          "Pengguna memilih gambar sketsa wajah yang akan diproses oleh model AI untuk menghasilkan foto realistis.",
        features: [
          "Sketch image preview",
          "Supported image formats",
          "Input validation",
          "Ready for generation",
        ],
      },
      "03-generate.jpg": {
        label: "Generate",
        title: "AI Photo Generation",
        description:
          "Model Pix2Pix GAN memproses sketsa wajah dan menghasilkan foto realistis secara otomatis menggunakan TensorFlow.js.",
        features: [
          "Pix2Pix GAN inference",
          "Real-time prediction",
          "Before & after comparison",
          "Generated image preview",
        ],
      },
      "04-save-result.png": {
        label: "Save Result",
        title: "Download Generated Image",
        description:
          "Pengguna dapat menyimpan hasil foto yang telah dihasilkan ke perangkat untuk digunakan lebih lanjut.",
        features: [
          "Download generated image",
          "PNG export",
          "One-click save",
          "Local storage support",
        ],
      },
    }),
  },
  {
    name: "Aplikasi Mobile E-Health",
    description:
      "Merancang dan mengimplementasikan aplikasi Android untuk informasi penyakit dan artikel kesehatan, dengan fitur pencarian yang interaktif dan mudah digunakan.",
    stack: ["Java", "Android Studio", "Firebase"],
    // TODO: isi dengan URL repo GitHub project ini kalau sudah dipublish
    repoLink: "https://github.com/ricoputrabuana/aurora-portfolio",
    thumb: ehealthThumb,
    gallery: toGallery(ehealthGalleryImages, {
      "01-login.jpeg": {
        label: "Login",
        title: "Halaman Login",
        description:
          "Halaman ini digunakan untuk autentikasi pengguna agar dapat mengakses seluruh fitur aplikasi. Pengguna dapat login menggunakan email & password atau akun Google untuk pengalaman yang lebih cepat.",
        features: [
          "Login menggunakan email & password",
          "Login menggunakan akun Google",
          "Validasi form otomatis",
          "Autentikasi aman dengan Firebase Auth",
        ],
      },
      "02-registrasi.jpeg": {
        label: "Authentication",
        title: "Halaman Registrasi",
        description:
          "Halaman ini memungkinkan pengguna membuat akun baru menggunakan nama, email, dan password. Data pengguna akan divalidasi sebelum disimpan agar proses registrasi berjalan dengan aman.",
        features: [
          "Registrasi menggunakan email",
          "Validasi input secara otomatis",
          "Penyimpanan akun ke Firebase Authentication",
          "Navigasi kembali ke halaman Login",
        ],
      },
      "03-beranda.jpeg": {
        label: "Dashboard",
        title: "Halaman Beranda",
        description:
          "Halaman utama aplikasi yang menampilkan ringkasan fitur, kolom pencarian penyakit, serta artikel kesehatan terbaru untuk membantu pengguna menemukan informasi dengan cepat.",
        features: [
          "Pencarian penyakit secara langsung",
          "Menampilkan artikel kesehatan terbaru",
          "Navigasi cepat ke seluruh fitur aplikasi",
          "Data diambil secara realtime dari API",
        ],
      },
      "04-navbar.jpeg": {
        label: "Navigation",
        title: "Navigation Drawer",
        description:
          "Navigation Drawer digunakan untuk memudahkan pengguna berpindah antar fitur utama aplikasi melalui satu menu yang mudah diakses.",
        features: [
          "Navigasi ke Beranda",
          "Navigasi ke Artikel Kesehatan",
          "Navigasi ke Cari Penyakit",
          "Navigasi ke Cari Obat",
        ],
      },
      "05-artikel.jpeg": {
        label: "Health Articles",
        title: "Halaman Artikel Kesehatan",
        description:
          "Halaman ini menampilkan daftar artikel kesehatan yang diambil dari API sehingga pengguna dapat memperoleh informasi kesehatan terbaru secara praktis.",
        features: [
          "Daftar artikel kesehatan",
          "Data artikel dari API",
          "Preview gambar dan ringkasan artikel",
          "Navigasi ke halaman detail artikel",
        ],
      },
      "06-detail-artikel.jpeg": {
        label: "Detail Artikel",
        title: "Detail Artikel Kesehatan",
        description:
          "Menampilkan isi lengkap artikel kesehatan, mulai dari penjelasan, gejala, hingga penanganan, disajikan dengan tampilan yang mudah dibaca.",
        features: [
          "Konten artikel terstruktur & mudah dibaca",
          "Gambar pendukung penjelasan",
        ],
      },
      "07-penyakit.jpeg": {
        label: "Cari Penyakit",
        title: "Pencarian Penyakit",
        description:
          "Pengguna dapat mencari informasi penyakit secara cepat lewat fitur pencarian interaktif, lengkap dengan hasil yang relevan sesuai kata kunci yang dimasukkan.",
        features: [
          "Pencarian real-time berdasarkan nama penyakit",
          "Daftar hasil yang mudah di-scroll",
          "Navigasi langsung ke halaman detail",
        ],
      },
      "08-detail-penyakit.jpeg": {
        label: "Disease Information",
        title: "Detail Penyakit",
        description:
          "Halaman detail penyakit menyajikan informasi lengkap mengenai penyakit, termasuk penjelasan, penyebab, gejala, serta informasi pendukung lainnya untuk membantu pengguna memahami kondisi tersebut.",
        features: [
          "Informasi penyakit secara lengkap",
          "Gambar ilustrasi penyakit",
          "Tanggal pembaruan artikel",
          "Konten diambil dari API",
        ],
      },
      "09-obat.jpeg": {
        label: "Medicine Search",
        title: "Halaman Cari Obat",
        description:
          "Halaman ini memudahkan pengguna mencari informasi obat berdasarkan nama melalui fitur pencarian maupun indeks alfabet agar proses pencarian menjadi lebih cepat.",
        features: [
          "Pencarian obat",
          "Navigasi alfabet A-Z",
          "Daftar obat secara dinamis",
          "Navigasi ke detail obat",
        ],
      },
      "10-detail-obat.jpeg": {
        label: "Medicine Information",
        title: "Detail Obat",
        description:
          "Menampilkan informasi lengkap mengenai obat, meliputi fungsi, manfaat, cara kerja, hingga informasi penting lainnya yang diperoleh dari API.",
        features: [
          "Informasi lengkap obat",
          "Gambar ilustrasi obat",
          "Tanggal pembaruan data",
          "Konten diambil dari API",
        ],
      },
      "11-akun.jpeg": {
        label: "Profile",
        title: "Halaman Akun",
        description:
          "Halaman akun digunakan untuk menampilkan informasi profil pengguna serta menyediakan akses untuk mengubah data tertentu dan melihat riwayat aktivitas.",
        features: [
          "Menampilkan informasi akun",
          "Edit nama pengguna",
          "Informasi metode login",
          "Akses ke halaman Riwayat",
        ],
      },
      "12-riwayat.jpeg": {
        label: "History",
        title: "Halaman Riwayat",
        description:
          "Halaman riwayat menyimpan aktivitas pengguna selama menggunakan aplikasi sehingga informasi yang pernah dibuka dapat diakses kembali dengan mudah.",
        features: [
          "Riwayat penyakit",
          "Riwayat artikel",
          "Riwayat obat",
          "Akses kembali ke halaman detail",
        ],
      },
    }),
  },
  {
    name: "Aurora Portfolio",
    description:
      "Situs portofolio pribadi dengan tema motion dan canvas art, dibuat untuk eksplorasi interaksi visual dan animasi di frontend.",
    stack: ["React", "Canvas", "YouTube API"],
    demoLink: "https://aurora-portofolio-web.vercel.app/",
    repoLink: "https://github.com/ricoputrabuana/aurora-portfolio",
    thumb: auroraVideo,
    thumbType: "video",
    frameType: "browser",
    url: "aurora-portofolio-web.vercel.app",
    gallery: toGallery(auroraportofolioGalleryImages, {
      "01-aurora-canvas.jpg": {
        label: "Visual Experience",
        title: "Aurora Canvas",
        description:
          "Background interaktif berbasis HTML Canvas yang menampilkan efek aurora, pantulan air, langit malam, dan elemen animasi lainnya untuk menciptakan pengalaman visual yang lebih hidup.",
        features: [
          "HTML Canvas animation",
          "Animated Aurora",
          "Water reflection effect",
          "Smooth performance",
        ],
      },
      "02-navbar.jpg": {
        label: "Navigation",
        title: "Floating Navigation",
        description:
          "Menu navigasi utama yang menggunakan konsep floating radial menu sehingga pengguna dapat berpindah ke setiap section portfolio dengan cepat tanpa mengganggu tampilan utama.",
        features: [
          "Floating navigation",
          "Animasi buka & tutup",
          "Navigasi antar section",
          "Desain minimalis",
        ],
      },
      "03-media-player.jpg": {
        label: "Interactive Feature",
        title: "Music Player",
        description:
          "Media player yang memungkinkan pengunjung memutar musik langsung di dalam portfolio. Fitur ini dibuat untuk meningkatkan pengalaman pengguna dan memperkuat suasana visual website.",
        features: [
          "Playlist musik",
          "Play, Pause, Next, Previous",
          "Volume control",
          "Realtime status lagu",
        ],
      },
      "04-hero.jpg": {
        label: "Landing Page",
        title: "Hero Section",
        description:
          "Halaman pembuka portfolio yang memperkenalkan identitas, bidang keahlian, serta konsep visual bertema Aurora Night. Section ini dirancang untuk memberikan kesan pertama yang menarik melalui perpaduan animasi dan elemen interaktif.",
        features: [
          "Perkenalan singkat",
          "Background Aurora Canvas interaktif",
          "Animasi transisi halus",
          "Desain responsif",
        ],
      },
      "05-profile.jpg": {
        label: "Profile",
        title: "Profile Section",
        description:
          "Section yang memperkenalkan latar belakang, pengalaman, kemampuan teknis, serta konsep visual bergaya RPG Character Card untuk memberikan identitas yang lebih unik dibanding portfolio konvensional.",
        features: [
          "Career overview",
          "Technical skills",
          "Equipment inventory concept",
          "Interactive RPG design",
        ],
      },
      "06-projects.jpg": {
        label: "Projects",
        title: "Projects Showcase",
        description:
          "Menampilkan kumpulan project pilihan beserta teknologi yang digunakan, deskripsi singkat, dan akses langsung menuju halaman detail setiap project.",
        features: [
          "Project cards",
          "Technology stack",
          "Responsive layout",
          "Direct project link",
        ],
      },
      "07-contact.jpg": {
        label: "Contact",
        title: "Contact Section",
        description:
          "Section penutup portfolio yang menyediakan berbagai media komunikasi agar recruiter maupun calon klien dapat menghubungi saya dengan mudah.",
        features: [
          "Email",
          "GitHub",
          "LinkedIn",
          "WhatsApp",
        ],
      },
    }),
  },
];
