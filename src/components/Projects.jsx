import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import { projects } from "../data/content";
import TechBadge from "./TechBadge";
import { slugify } from "../utils/slugify";

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const goToDetail = (project) => navigate(`/projects/${slugify(project.name)}`);

  return (
    <section id="projects" className="px-[8vw] py-24">
      <div className="mx-auto max-w-[1080px]">
        <div className="mb-12">
          <p className="mb-3.5 font-mono text-[12.5px] font-semibold uppercase tracking-wider text-accent">
            Karya
          </p>
          <h2 className="font-display text-[clamp(28px,3.2vw,40px)] font-bold text-ink">
            Proyek
          </h2>
          <p className="mt-3.5 text-base leading-[1.7] text-ink-dim">
            Beberapa hasil kerja yang merepresentasikan pendekatan saya terhadap kode dan desain.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              onClick={() => setSelected(project)}
              className="flex cursor-pointer flex-col overflow-hidden rounded-[10px] border border-border bg-surface transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,23,28,0.14)]"
            >
              <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-accent-soft to-[#F4EEFF] text-center text-[12.5px] text-ink-faint">
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

              <div className="flex min-w-0 flex-1 flex-col p-5">
                <h3
                  className="font-display mb-2.5 text-[18px] font-bold text-ink"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                  title={project.name}
                >
                  {project.name}
                </h3>
                <p
                  className="mb-4 text-[14px] text-ink-dim"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    lineHeight: "22px",
                    height: "66px",
                  }}
                >
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                  ))}
                </div>
                <div className="flex-1" />
                <div className="flex items-center justify-between border-t border-border pt-3.5">
                  {/* Ini sekarang pindah ke halaman detail terpisah (bukan
                      langsung ke link eksternal lagi). stopPropagation biar
                      klik di sini nggak ikut buka modal juga. */}
                  <a
                    href={`/projects/${slugify(project.name)}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      goToDetail(project);
                    }}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                  >
                    Lihat Project <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL DETAIL PROJECT: muncul saat card diklik (tetap seperti semula) */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-[560px] overflow-y-auto rounded-[14px] bg-surface shadow-2xl"
          >
            <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-accent-soft to-[#F4EEFF] text-center text-[12.5px] text-ink-faint">
              <button
                onClick={() => setSelected(null)}
                className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm hover:bg-white"
              >
                <X size={17} />
              </button>
              {selected.thumb ? (
                selected.thumbType === "video" ? (
                  <video
                    src={selected.thumb}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img src={selected.thumb} alt={selected.name} className="h-full w-full object-cover" />
                )
              ) : (
                <span className="p-5">Screenshot {selected.name}</span>
              )}
            </div>

            <div className="p-8">
              <h3 className="font-display mb-3 text-[22px] font-bold text-ink">
                {selected.name}
              </h3>
              <p className="mb-5 text-[15px] leading-[1.75] text-ink-dim">
                {selected.description}
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {selected.stack.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>
              {/* Ini juga pindah ke halaman detail terpisah, bukan link
                  eksternal langsung lagi */}
              <a
                href={`/projects/${slugify(selected.name)}`}
                onClick={(e) => {
                  e.preventDefault();
                  goToDetail(selected);
                }}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
              >
                Lihat Project <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
