import { profile } from "../data/content";

export default function Hero() {
  return (
    <section id="home" className="px-[8vw] pt-16 pb-24">
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-10 md:grid-cols-[1fr_340px] md:gap-16">
        <div>
          <p className="mb-3.5 font-mono text-[12.5px] font-semibold uppercase tracking-wider text-accent">
            Portfolio
          </p>
          <h1 className="font-display text-[clamp(36px,4.5vw,58px)] font-bold leading-[1.1] text-ink">
            {profile.name}
          </h1>
          <p className="mt-5 mb-6 text-lg font-medium text-ink-dim">
            {profile.role} <span className="text-accent">·</span> {profile.location}
          </p>
          <p className="mb-8 max-w-[540px] text-base leading-[1.75] text-ink-dim">
            {profile.intro}
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href="#projects"
              className="rounded-lg bg-ink px-6 py-3.5 text-[14.5px] font-semibold text-white transition-colors hover:bg-accent"
            >
              Lihat Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border-[1.5px] border-border px-6 py-3.5 text-[14.5px] font-semibold text-ink transition-colors hover:border-ink"
            >
              Hubungi Saya
            </a>
            {/* Tombol Download CV. File PDF-nya dibaca dari profile.cvFile
                di src/data/content.js — taruh file PDF-nya di folder public/. */}
            <a
              href={profile.cvFile}
              download
              className="rounded-lg border-[1.5px] border-border px-6 py-3.5 text-[14.5px] font-semibold text-ink transition-colors hover:border-ink"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* FOTO PROFIL:
            - Cara isi: buka src/data/content.js, uncomment baris
              `import profilePhoto from "../assets/profile.jpg"`
              lalu ganti `photo: null` jadi `photo: profilePhoto`.
            - Selama profile.photo masih null, area ini otomatis
              menampilkan placeholder di bawah. */}
        <div className="mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden md:max-w-none">
          {profile.photo ? (
            <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover object-top" />
          ) : (
            <div className="flex h-full w-full items-center justify-center p-6 text-center text-[13px] leading-relaxed text-ink-faint">
              Ganti dengan foto profesional — rasio 4:5, background netral.
              <br />
              Simpan foto di <code className="font-mono">src/assets/</code> lalu import di{" "}
              <code className="font-mono">src/data/content.js</code>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
