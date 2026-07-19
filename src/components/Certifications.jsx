import { certifications } from "../data/content";

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-border px-[8vw] py-24">
      <div className="mx-auto max-w-[1080px]">
        <div className="mb-12 max-w-[600px]">
          <p className="mb-3.5 font-mono text-[12.5px] font-semibold uppercase tracking-wider text-accent">
            Kualifikasi
          </p>
          <h2 className="font-display text-[clamp(28px,3.2vw,40px)] font-bold text-ink">
            Sertifikasi
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="rounded-[10px] border border-border bg-surface p-6"
            >
              <div className="font-display text-[16px] font-semibold text-ink">{cert.name}</div>
              {cert.issuer && (
                <div className="mt-1 text-sm text-ink-dim">{cert.issuer}</div>
              )}
              <div className="mt-2 font-mono text-xs text-ink-faint">{cert.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
