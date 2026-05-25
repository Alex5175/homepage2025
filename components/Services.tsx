"use client";
import SectionTemplate from "./SectionTemplate";
import { Figtree } from "next/font/google";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

const figtree = Figtree({
  weight: "700",
  subsets: ["latin"],
});

type Service = {
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: "Webseiten-Erstellung",
    description:
      "Planung und Umsetzung kompletter Webseiten für Unternehmen oder Einzelpersonen, vom Aufbau bis zur technischen Umsetzung, damit Inhalte klar präsentiert und leicht gefunden werden.",
  },
  {
    title: "Entwicklung von Web-Apps und Funktionen",
    description:
      "Programmierung interaktiver Funktionen wie Nutzerkonten, Dashboards oder individuelle Tools, die über eine einfache Webseite hinausgehen.",
  },
  {
    title: "Mobile Optimierung",
    description:
      "Anpassung der Webseite für Smartphones, Tablets und verschiedene Bildschirmgrößen, damit alles überall gut aussieht und bedienbar bleibt.",
  },
  {
    title: "Formulare, Buchungen und Online-Shops",
    description:
      "Einrichtung von Kontaktformularen, Terminbuchungssystemen, Bezahlfunktionen oder Shops, damit Kunden direkt online handeln können.",
  },
  {
    title: "Umsetzung von Designs",
    description:
      "Technische Umsetzung von vorhandenen Designs oder Entwürfen in funktionierende Webseiten, ohne dass das Design unterwegs kaputtgeht.",
  },
  // {
  //   title: "Wartung und Pflege",
  //   description:
  //     "Regelmäßige Updates, Anpassungen und kleinere Änderungen, damit die Webseite aktuell bleibt und nicht langsam zerfällt.",
  // },
  // {
  //   title: "Sicherheit und Backups",
  //   description:
  //     "Schutz der Webseite vor Angriffen, regelmäßige Sicherungen und Wiederherstellungsmöglichkeiten für den Fall, dass etwas schiefgeht.",
  // },
  // {
  //   title: "Performance-Optimierung",
  //   description:
  //     "Verbesserung der Ladezeiten und technischen Abläufe, damit Besucher nicht abspringen, bevor die Seite überhaupt geladen ist.",
  // },
  {
    title: "Technische und inhaltliche Beratung",
    description:
      "Beratung zu sinnvollen Funktionen, Seitenstruktur und technischen Lösungen, abgestimmt auf Ziele und Budget.",
  },
  // {
  //   title: "Weiterentwicklung des Online-Auftritts",
  //   description:
  //     "Analyse und Verbesserung bestehender Webseiten, damit sie mit dem Unternehmen mitwachsen und nicht jahrelang unverändert bleiben.",
  // },
];

export default function Services() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const equalize = () => {
      const children = Array.from(grid.children) as HTMLElement[];
      children.forEach((c) => (c.style.minHeight = ""));
      const max = Math.max(...children.map((c) => c.offsetHeight));
      children.forEach((c) => (c.style.minHeight = `${max}px`));
    };

    const ro = new ResizeObserver(equalize);
    ro.observe(grid);
    return () => ro.disconnect();
  }, []);

  return (
    <SectionTemplate
      title={"Leistungen"}
      subTitle="Was mach ich eigentlich?"
      id="services"
    >
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service, idx) => (
          <ServiceCard {...service} key={idx}></ServiceCard>
        ))}

        <Link
          href="/so-laeuft-ein-projekt-ab"
          className={`flex flex-col justify-center items-center text-center glow p-8 bg-foreground/10 border border-foreground/20 hover:bg-foreground/15 transition-colors rounded-2xl ${figtree.className}`}
        >
          <p className="text-3xl text-foreground font-black mb-2">
            So läuft ein Projekt ab →
          </p>
          <p className="text-sm text-foreground/60 font-normal">
            Von der ersten Anfrage bis zum Launch
          </p>
        </Link>

        <Link
          href="/#contact"
          className={`flex justify-center items-center text-center glow p-8 bg-gradient-to-tr from-primary to-secondary rounded-2xl ${figtree.className}`}
        >
          <p className="text-4xl text-foreground font-black ">
            Jetzt Kontakt aufnehmen!
          </p>
        </Link>
      </div>
    </SectionTemplate>
  );
}

function ServiceCard({ title, description }: Service) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        opacity: { delay: 0.1, duration: 0.3 },
      }}
      className={`glow p-8 bg-foreground gap-4 text-background rounded-2xl ${figtree.className} flex flex-col`}
    >
      <h3 className="text-xl md:text-3xl/tight">{title}</h3>
      <p className="text-sm md:text-base/relaxed">{description}</p>
    </motion.div>
  );
}
