import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Check, Minus, Square, X, Lock } from "lucide-react";

export default function ProjectGallery({
  images,
  frameType = "phone",
  appTitle,
  url,
  subtitle = "Berikut adalah preview beberapa halaman utama dari aplikasi ini.",
}) {
  const [index, setIndex] = useState(0);
  const isPhone = frameType === "phone";
  // Rasio menyesuaikan rasio asli screenshot begitu gambar pertama dimuat.
  // Default beda tergantung jenis bingkai: HP portrait vs window/browser landscape.
  const [ratio, setRatio] = useState(isPhone ? 9 / 19.5 : 16 / 9);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 20);
    return () => clearTimeout(t);
  }, [index]);

  if (!images || images.length === 0) return null;

  const goPrev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  const thumbStripRef = useRef(null);
  const scrollThumbs = (direction) => {
    const el = thumbStripRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: direction === "prev" ? -amount : amount, behavior: "smooth" });
  };

  const handleImageLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.target;
    if (naturalWidth && naturalHeight) {
      // Rasio ngikut ukuran asli screenshot sepenuhnya, semua mode (phone,
      // window, browser). Nggak di-clamp lagi karena layout teks sekarang
      // di bawah gambar, jadi nggak ada lagi alasan buat maksa rasio biar
      // frame nggak "lebih pendek dari kolom teks di samping" -- kolom teks
      // di samping itu sendiri udah nggak ada.
      setRatio(naturalWidth / naturalHeight);
    }
  };

  const current = images[index];
  const hasRichContent = Boolean(
    current.title || current.description || (current.features && current.features.length > 0)
  );

  const screenImg = (
    <img
      src={current.image}
      alt={current.title || current.caption || `Screenshot ${index + 1}`}
      onLoad={handleImageLoad}
      className={`h-full w-full object-cover transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    />
  );

  // ---------- Bingkai HP (portrait) ----------
  const phoneFrame = (
    <div className="relative w-[190px] shrink-0 sm:w-[210px]">
      <div className="relative rounded-[2.75rem] bg-ink p-3 pt-6 shadow-2xl">
        <div className="absolute left-1/2 top-2 z-20 h-3.5 w-20 -translate-x-1/2 rounded-full bg-black" />
        <div className="relative overflow-hidden rounded-[2rem] bg-black" style={{ aspectRatio: ratio }}>
          {screenImg}
        </div>
        <div className="absolute bottom-4 left-1/2 z-20 h-1 w-16 -translate-x-1/2 rounded-full bg-white/60" />
      </div>
      <div className="absolute -left-[3px] top-20 h-8 w-[3px] rounded-l bg-ink" />
      <div className="absolute -left-[3px] top-32 h-12 w-[3px] rounded-l bg-ink" />
      <div className="absolute -right-[3px] top-24 h-16 w-[3px] rounded-r bg-ink" />
    </div>
  );

  // ---------- Bingkai window desktop (landscape) ----------
  const windowFrame = (
    <div className="w-full overflow-hidden rounded-[10px] border border-border shadow-sm">
      <div className="flex items-center justify-between bg-ink px-3.5 py-2">
        <span className="truncate text-[12.5px] font-medium text-white/90">
          {appTitle || current.title || "Aplikasi"}
        </span>
        <div className="flex shrink-0 items-center gap-3 text-white/45">
          <Minus size={13} />
          <Square size={10} />
          <X size={13} />
        </div>
      </div>
      <div className="relative overflow-hidden bg-black" style={{ aspectRatio: ratio }}>
        {screenImg}
      </div>
    </div>
  );

  // ---------- Bingkai browser (landscape) ----------
  const browserFrame = (
    <div className="w-full overflow-hidden rounded-[10px] border border-border shadow-sm">
      <div className="flex items-center gap-3 bg-surface px-3.5 py-2">
        <div className="flex shrink-0 gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1">
          <Lock size={10} className="shrink-0 text-ink-faint" />
          <span className="truncate text-[11.5px] text-ink-faint">{url || "localhost"}</span>
        </div>
      </div>
      <div className="relative overflow-hidden bg-black" style={{ aspectRatio: ratio }}>
        {screenImg}
      </div>
    </div>
  );

  const frameEl = isPhone ? phoneFrame : frameType === "window" ? windowFrame : browserFrame;

  const arrowButton = (direction) => (
    <button
      onClick={direction === "prev" ? goPrev : goNext}
      aria-label={direction === "prev" ? "Sebelumnya" : "Selanjutnya"}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-white text-ink shadow-sm transition-colors hover:bg-accent-soft"
    >
      {direction === "prev" ? <ChevronLeft size={19} /> : <ChevronRight size={19} />}
    </button>
  );

  const dotsEl = images.length > 1 && (
    <div className="flex items-center justify-center gap-2">
      {images.map((_, i) => (
        <button
          key={i}
          onClick={() => setIndex(i)}
          aria-label={`Ke gambar ${i + 1}`}
          className={`h-1.5 rounded-full transition-all duration-200 ${
            i === index ? "w-5 bg-accent" : "w-1.5 bg-border hover:bg-ink-faint"
          }`}
        />
      ))}
    </div>
  );

  const navHintText = hasRichContent && images.length > 1 && (
    <p className="text-center text-[12.5px] italic text-ink-faint">
      * Geser atau klik panah untuk melihat halaman lainnya
    </p>
  );

  // Blok bingkai + panah navigasi + dot, disatukan biar nggak duplikasi
  // antara mode phone (panah di samping) dan mode window/browser (panah
  // ditumpuk di atas tepi kiri/kanan bingkai, karena bingkainya full-width).
  const frameBlock = isPhone ? (
    <div className="mx-auto flex flex-col items-center gap-4">
      <div className="flex items-center justify-center gap-4">
        {images.length > 1 && arrowButton("prev")}
        {frameEl}
        {images.length > 1 && arrowButton("next")}
      </div>
      {dotsEl}
      {navHintText}
    </div>
  ) : (
    <div className="flex flex-col gap-4">
      <div className="relative">
        {frameEl}
        {images.length > 1 && (
          <>
            <div className="absolute left-2 top-1/2 -translate-y-1/2">{arrowButton("prev")}</div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2">{arrowButton("next")}</div>
          </>
        )}
      </div>
      {dotsEl}
      {navHintText}
    </div>
  );

  // Label section berbentuk bar full-width dengan background abu-abu agak
  // gelap, dipakai buat "Deskripsi" & "Fitur Utama" biar keliatan kayak
  // divider/header section yang jelas, bukan cuma teks polos.
  const sectionBar = (label) => (
    <div className="mb-3 w-full rounded-[6px] bg-[#E4E4E7] px-3 py-2 text-[11.5px] font-semibold uppercase tracking-wide text-ink-dim">
      {label}
    </div>
  );

  const titleAndDescBlock = (
    <>
      {current.description && sectionBar("Deskripsi")}
      {current.title && (
        <h3 className="font-display mb-2 text-[22px] font-bold text-ink">{current.title}</h3>
      )}
      {current.description && (
        <p className="mb-4 text-[14.5px] leading-[1.75] text-ink">{current.description}</p>
      )}
    </>
  );

  // Strip thumbnail: lompat langsung ke halaman tertentu. Diekstrak jadi
  // variabel karena posisinya beda tergantung jenis bingkai — nempel di
  // bawah gambar yang lagi tampil buat window/browser, di bagian paling
  // bawah kartu buat phone.
  const thumbStripEl = images.length > 1 && (
    <div className="flex items-center gap-2">
      <button
        onClick={() => scrollThumbs("prev")}
        aria-label="Geser thumbnail ke kiri"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-white text-ink-dim shadow-sm transition-colors hover:bg-accent-soft"
      >
        <ChevronLeft size={16} />
      </button>

      <div
        ref={thumbStripRef}
        className="thumb-strip-scroll flex flex-1 gap-3 overflow-x-auto scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`flex shrink-0 flex-col items-center gap-1.5 rounded-[10px] border-2 p-2 transition-colors ${
              isPhone ? "w-16" : "w-24"
            } ${
              i === index ? "border-accent bg-accent-soft" : "border-transparent hover:bg-accent-soft/50"
            }`}
          >
            <span
              className={`flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold text-white ${
                i === index ? "bg-accent" : "bg-ink-faint"
              }`}
            >
              {i + 1}
            </span>
            {/* Thumbnail ikut bentuk bingkainya: portrait (h-14 w-8) buat
                phone, landscape 16:9 (w-20) buat window/browser -- biar
                nggak dipaksa jadi kotak sempit padahal screenshotnya lebar. */}
            <div
              className={`overflow-hidden rounded-[6px] bg-ink ${
                isPhone ? "h-14 w-8" : "aspect-video w-20"
              }`}
            >
              <img src={img.image} alt="" className="h-full w-full object-cover opacity-90" />
            </div>
            <span className="w-full truncate text-center text-[11px] font-medium text-ink-dim">
              {img.caption || img.title || `#${i + 1}`}
            </span>
          </button>
        ))}
      </div>

      <button
        onClick={() => scrollThumbs("next")}
        aria-label="Geser thumbnail ke kanan"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-white text-ink-dim shadow-sm transition-colors hover:bg-accent-soft"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );

  const featuresBlock = current.features && current.features.length > 0 && (
    <>
      {sectionBar("Fitur Utama")}
      <ul className="space-y-2">
        {current.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-[13.5px] text-ink">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent text-white">
              <Check size={11} strokeWidth={3} />
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <div className="mb-8">
      <style>{`
        .thumb-strip-scroll::-webkit-scrollbar { display: none; }
      `}</style>

      <div className="relative rounded-[14px] border border-border bg-surface px-4 pt-2 pb-4 sm:px-5 sm:pt-3 sm:pb-5">
        {/* Judul + subtitle di kiri, counter x/y di kanan, satu baris */}
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2 className="font-display text-xl font-bold text-ink">Tampilan Aplikasi</h2>
            {subtitle && <p className="mt-1.5 text-[13.5px] text-ink-dim">{subtitle}</p>}
          </div>
          {images.length > 1 && (
            <div className="shrink-0 rounded-full border border-border bg-white px-3 py-1 text-[12.5px] font-semibold text-ink-dim">
              {index + 1} / {images.length}
            </div>
          )}
        </div>

        {hasRichContent ? (
          isPhone ? (
            // ---------- MODE RICH + bingkai HP: samping-sampingan
            //            (lebar bingkai kecil, jadi teks di kanan tetap lega) ----------
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[auto_1fr]">
              {frameBlock}
              <div>
                {titleAndDescBlock}
                {featuresBlock}
                {featuresBlock && <div className="mt-5 border-t border-border" />}
              </div>
            </div>
          ) : (
            // ---------- MODE RICH + bingkai window/browser: gambar full-width
            //            dulu di atas (landscape, biar detail UI-nya kebaca),
            //            lalu dot indikator & strip thumbnail (biar bisa
            //            langsung lompat ke halaman lain), baru judul/deskripsi/
            //            fitur di paling bawah. Beda sama bingkai phone yang
            //            portrait & tetap kecil, jadi masih pas disandingkan teks. ----------
            <div className="flex flex-col gap-6">
              {frameBlock}
              {thumbStripEl}
              <div className="mx-auto w-full max-w-[720px]">
                {titleAndDescBlock}
                {featuresBlock}
              </div>
            </div>
          )
        ) : (
          // ---------- MODE SIMPEL ----------
          <div className={isPhone ? "mx-auto flex max-w-[420px] items-center justify-center gap-4" : "mx-auto max-w-[720px]"}>
            {isPhone ? (
              <>
                {images.length > 1 && arrowButton("prev")}
                {frameEl}
                {images.length > 1 && arrowButton("next")}
              </>
            ) : (
              frameBlock
            )}
          </div>
        )}

        {!hasRichContent && current.caption && (
          <div className="mt-6 text-center text-[13.5px] font-medium text-ink-dim">
            {current.caption}
          </div>
        )}

        {/* Dot indikator kompak — cuma buat mode simpel + bingkai HP.
            Mode rich udah punya dot sendiri di dalam frameBlock. */}
        {!hasRichContent && isPhone && images.length > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ke gambar ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === index ? "w-5 bg-accent" : "w-1.5 bg-border hover:bg-ink-faint"
                }`}
              />
            ))}
          </div>
        )}

        {/* Strip thumbnail: lompat langsung ke halaman tertentu. Untuk
            bingkai phone tetap di paling bawah kartu (di bawah blok
            judul/deskripsi/fitur). Untuk window/browser sudah dipasang
            langsung di bawah frameBlock di atas, jadi nggak dirender lagi
            di sini biar nggak dobel. */}
        {hasRichContent && isPhone && (
          <div className="mt-4">{thumbStripEl}</div>
        )}
      </div>
    </div>
  );
}
