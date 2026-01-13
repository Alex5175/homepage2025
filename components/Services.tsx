import SectionTemplate from "./SectionTemplate";
import { Figtree } from "next/font/google";

import { motion } from "framer-motion";
import Link from "next/link";

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
  {
    title: "Performance-Optimierung",
    description:
      "Verbesserung der Ladezeiten und technischen Abläufe, damit Besucher nicht abspringen, bevor die Seite überhaupt geladen ist.",
  },
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
  return (
    <SectionTemplate
      title={"Dienstleistungen"}
      subTitle="Was mach ich eigentlich?"
      id="services">
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {services.map((service, idx) => (
          <ServiceCard {...service} key={idx}></ServiceCard>
        ))}

        <Link
          href="/#contact"
          className={` flex justify-center items-center text-center  glow p-8 m-4 bg-gradient-to-tr from-primary to-secondary   rounded-2xl ${figtree.className}  `}>
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
      className={` glow p-8 m-4 bg-foreground  text-background rounded-2xl ${figtree.className} flex flex-col justify-between `}>
      <p className="text-[2vw] md:text-[2vw]/[2.2vw]">{title}</p>
      <p className="text-[2vw] md:text-[1.2vw]/[1.4vw]">{description}</p>
    </motion.div>
  );
}
