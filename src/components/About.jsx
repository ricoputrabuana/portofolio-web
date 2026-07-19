import { about, skillGroups } from "../data/content";

export default function About() {
  return (
    <section id="about" className="border-y border-border bg-surface px-[8vw] py-24">
      <div className="mx-auto max-w-[1080px]">
        <div className="mb-12 max-w-[600px]">
          <p className="mb-3.5 font-mono text-[12.5px] font-semibold uppercase tracking-wider text-accent">
            Perkenalan
          </p>
          <h2 className="font-display text-[clamp(28px,3.2vw,40px)] font-bold text-ink">
            Tentang Saya
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
          <div>
            {about.map((p, i) => (
              <p key={i} className="mb-4.5 text-base leading-[1.85] text-ink-dim">
                {p.bold && <strong className="text-ink">{p.bold}</strong>}
                {p.text}
              </p>
            ))}
          </div>

          <div>
            {skillGroups.map((group) => (
              <div key={group.label} className="mb-6.5">
                <div className="mb-2.5 flex items-center gap-2 text-[14.5px] font-semibold text-ink">
                  <span
                    className="h-2 w-2 rounded-[2px]"
                    style={{ backgroundColor: group.color }}
                  />
                  {group.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-[7px] border border-border bg-bg px-3.5 py-1.5 text-[13.5px] font-medium text-ink-dim"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
