import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "../data/content";
import TechBadge from "../components/TechBadge";
import ProjectGallery from "../components/ProjectGallery";
import { slugify } from "../utils/slugify";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => slugify(p.name) === slug);

  // Project nggak ketemu (misal slug salah / typo di URL) -> tampilkan
  // pesan sederhana + tombol balik, daripada halaman kosong.
  if (!project) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-[8vw] text-center">
        <h2 className="font-display mb-3 text-2xl font-bold text-ink">
          Project tidak ditemukan
        </h2>
        <p className="mb-6 text-ink-dim">
          Project yang kamu cari mungkin sudah dipindah atau tidak ada.
        </p>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
        >
          <ArrowLeft size={15} /> Kembali ke daftar project
        </Link>
      </section>
    );
  }

  const hasDemo = Boolean(project.demoLink);
  const hasRepo = Boolean(project.repoLink);

  return (
    <section className="px-[8vw] py-16">
      <div className="mx-auto max-w-[760px]">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-ink-dim transition-colors hover:text-accent"
        >
          <ArrowLeft size={15} /> Kembali
        </button>

        <div className="relative mb-8 flex aspect-video items-center justify-center overflow-hidden rounded-[14px] bg-gradient-to-br from-accent-soft to-[#F4EEFF] text-center text-[12.5px] text-ink-faint">
          {project.thumb ? (
            project.thumbType === "video" ? (
              <video
                src={project.thumb}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              <img src={project.thumb} alt={project.name} className="h-full w-full object-cover" />
            )
          ) : (
            <span className="p-5">Screenshot {project.name}</span>
          )}
        </div>

        <h1 className="font-display mb-4 text-[clamp(24px,3vw,34px)] font-bold text-ink">
          {project.name}
        </h1>

        {/* Tech stack: dipindah ke bawah judul */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        <p className="mb-6 text-[16px] leading-[1.75] text-ink">
          {project.description}
        </p>

        {/* Galeri screenshot hanya muncul kalau project punya field `gallery`.
            frameType/appTitle/url dioper dari data project di content.js,
            biar bingkainya nyesuai jenis aplikasinya (phone/window/browser). */}
        <ProjectGallery
          images={project.gallery}
          frameType={project.frameType}
          appTitle={project.appTitle}
          url={project.url}
          subtitle={project.gallerySubtitle}
        />

        {/* Tombol demo/repo: hanya tampil kalau salah satu ada.
            Demo = tombol utama (accent, solid), karena itu yang paling
            langsung bisa dicoba. Repo = tombol sekunder (outline), buat
            project yang cuma bisa ditunjukkan lewat source code, misal
            model ML atau app mobile tanpa live demo. */}
        {(hasDemo || hasRepo) && (
          <div className="flex flex-wrap items-center gap-3">
            {hasDemo && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#7C3AED] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6D28D9]"
              >
                Lihat Demo <ArrowRight size={15} />
              </a>
            )}
            {hasRepo && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black/85"
              >
                <SiGithub size={15} /> Lihat Source Code
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
