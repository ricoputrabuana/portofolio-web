import { contactLinks } from "../data/content";

// Semua icon ditulis langsung di sini dengan warna brand aslinya masing-masing,
// jadi tidak perlu file icons.js terpisah atau library tambahan.

function GmailIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" {...props}>
      <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z" />
      <path fill="#1e88e5" d="M3,16.2l5,2.75l5,4.75L13,40H6c-1.657,0-3-1.343-3-3V16.2z" />
      <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.25 24,31.5 35,23.25 36,17" />
      <path fill="#c62828" d="M3,12.298V16.2l10,7.05V11.2L9.876,8.859C8.132,7.634,5.802,7.634,4.058,8.859 C3.399,9.322,3,10.084,3,10.898V12.298z" />
      <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.05V11.2l3.124-2.341c1.744-1.225,4.074-1.225,5.818,0 C44.601,9.322,45,10.084,45,10.898V12.298z" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="#ffffff" {...props}>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="#0A66C2" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function WhatsappIcon(props) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="#25D366" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

const icons = {
  mail: GmailIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  whatsapp: WhatsappIcon,
};

export default function Contact() {
  return (
    <section id="contact" className="bg-ink px-[8vw] py-24 text-center text-white">
      <div className="mx-auto mb-10 max-w-[520px]">
        <p className="mb-3.5 font-mono text-[12.5px] font-semibold uppercase tracking-wider text-[#8FA6FF]">
          Kontak
        </p>
        <h2 className="font-display text-[clamp(28px,3.2vw,40px)] font-bold text-white">
          Mari Terhubung
        </h2>
        <p className="mt-3.5 text-base leading-[1.7] text-white">
          Terbuka untuk kolaborasi, peluang kerja, atau sekadar diskusi teknis.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3.5">
        {contactLinks.map((link) => {
          const Icon = icons[link.icon];

          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg border-[1.5px] border-[#33363E] px-6 py-3.5 text-[14.5px] font-semibold text-white transition-colors hover:border-accent hover:bg-accent/15"
            >
              <Icon />
              {link.label}
            </a>
          );
        })}
      </div>
    </section>
  );
}
