import Link from "next/link";
import { Parisienne, Figtree } from "next/font/google";

const parisienne = Parisienne({ weight: "400", subsets: ["latin"] });
const figtree = Figtree({ weight: "700", subsets: ["latin"] });

const pages = [
  { label: "Über mich", href: "/#aboutme" },
  { label: "Leistungen", href: "/#services" },
  { label: "Projekte", href: "/#projects" },
  { label: "Kontakt", href: "/#contact" },
  { label: "So läuft ein Projekt ab", href: "/so-laeuft-ein-projekt-ab" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/alexanderzeitlhofer/",
    icon: "/icons/instagram.png",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alexander-zeitlhofer-71976a266/",
    icon: "/icons/linkedin.png",
  },
  {
    label: "GitHub",
    href: "https://github.com/Alex5175",
    icon: "/icons/github.png",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-xl border-t border-white/10 text-foreground z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <Link
            href="/#hero"
            className={`text-3xl text-foreground text-glow ${parisienne.className}`}
          >
            Alex Zeitlhofer
          </Link>
          <p className="text-sm text-foreground/60 leading-relaxed">
            Webentwicklung & Software aus Oberndorf an der Melk,
            Niederösterreich.
          </p>
        </div>

        {/* Pages */}
        <div className="flex flex-col gap-3">
          <h3
            className={`text-foreground text-sm uppercase tracking-widest ${figtree.className}`}
          >
            Seiten
          </h3>
          <ul className="flex flex-col gap-2">
            {pages.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="text-foreground/70 hover:text-foreground transition-colors text-sm"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h3
            className={`text-foreground text-sm uppercase tracking-widest ${figtree.className}`}
          >
            Kontakt
          </h3>
          <a
            href="mailto:office@alex-zeitlhofer.com"
            className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors text-sm"
          >
            <img
              src="/icons/email.png"
              alt=""
              loading="lazy"
              className="w-4 h-4 object-contain"
            />
            office@alex-zeitlhofer.com
          </a>
          <a
            href="tel:+436606796469"
            className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors text-sm"
          >
            <img
              src="/icons/telephone-handle-silhouette.png"
              alt=""
              loading="lazy"
              className="w-4 h-4 object-contain"
            />
            +43 660 6796469
          </a>
          <p className="text-foreground/50 text-xs mt-1 leading-relaxed">
            Oberndorf an der Melk
            <br />
            Niederösterreich, Österreich
          </p>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-3">
          <h3
            className={`text-foreground text-sm uppercase tracking-widest ${figtree.className}`}
          >
            Social
          </h3>
          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-colors"
              >
                <img
                  src={s.icon}
                  alt={s.label}
                  loading="lazy"
                  className="w-5 h-5 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-foreground/50">
          <p>© {new Date().getFullYear()} Alexander Zeitlhofer</p>
          <Link
            href="/impressum"
            className="hover:text-foreground transition-colors underline underline-offset-4"
          >
            Impressum
          </Link>
        </div>
      </div>
    </footer>
  );
}
