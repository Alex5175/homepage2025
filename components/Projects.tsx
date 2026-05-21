"use client";
import SectionTemplate from "./SectionTemplate";
import { motion } from "framer-motion";
import { Figtree } from "next/font/google";
import Link from "next/link";
const figtree = Figtree({
  // weight: ,
  subsets: ["latin"],
});

const projects: Project[] = [
  {
    tags: ["in Arbeit", "Tanstack Start", "Fullstack"],
    image: "/images/stageup-new.webp",
    title: "StageUp",
    alt: "Landing Page der neuen Stageup Website",

    description: (
      <>
        Für StageUp wurde eine neue Landing Page mit eingebauten Eventtechnik
        Mietungssystem entwickelt. Hierfür wurde zusätzlich ein
        Verwaltungsdashboard gemacht. Beide wurden mit Tanstack Start + einem
        ElysiaJs Backend gebaut. Die Seite ist gerade noch im Aufbau und wird
        vorrausichtlich in dem nächsten paar Monaten veröffentlicht.
      </>
    ),
    url: "https://stageup.at",
    date: "Mai 2026",
  },
  {
    tags: ["React", "Tanstack Start"],
    title: "Mach Metall GmbH",
    image: "/images/mach_metall.webp",
    alt: "Landing Page der Mach Metall Website",
    url: "https://mach-metall.at/",
    date: "März 2026",
    description: (
      <>
        Die alte Website der Mach Metall GmbH hatte einige Probleme, mit
        falschen Inhalten, fehlenden Links und einem Kontaktformular das Spam
        erlaubte. Wir haben uns entschieden die Website von Grund auf neu zu
        bauen, damit wir ein starkes Fundament für mehr Inhalte haben. Das neue
        Kontaktformular wurde mit 3-facher Spam Protection geschützt damit nur
        echte Anfragen durchkommen. Schau dir die Website hier an{" "}
        <a
          href="https://mach-metall.at/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          www.mach-metall.at
        </a>
      </>
    ),
  },
  {
    title: "KFZ Zeitlhofer Website",
    image: "/images/kfzzeitlhofer.webp",
    alt: "Screenshot der KFZ Zeitlhofer Landing Page",
    url: "https://www.kfz-zeitlhofer.at",
    date: "Jänner 2026",
    description: (
      <>
        Die Website von KFZ Zeitlhofer wurde vollständig überarbeitet, um
        moderner, übersichtlicher und benutzerfreundlicher zu werden. Ziel des
        Redesigns war es, die Leistungen des Betriebs klarer darzustellen und
        Besuchern eine schnelle Orientierung zu ermöglichen. Das neue Design
        setzt auf eine aufgeräumte Struktur, größere Schrift und ein zeitgemäßes
        Farbkonzept. Besuche die neue Seite auf{" "}
        <a
          href="https://www.kfz-zeitlhofer.at"
          target="_blank"
          rel="noreferrer"
          className=" underline"
        >
          www.kfz-zeitlhofer.at
        </a>
      </>
    ),
    tags: ["React", "Tanstack Start"],
  },
  {
    title: "Kuerzl.link",
    image: "/images/kuerzl.link.webp",
    alt: "Screenshot der Kuerzl.link Website",
    url: "https://kuerzl.link",
    date: "November 2025",
    description: (
      <>
        Ein klassischer URL Shortener. Macht ein Kürzel aus einer langen URL um
        diesen leichter zu versenden, speicher, usw. Dies App wurde als
        Challenge in einem Tag entwickelt. Backend Service wurde mit Elysia.js
        und Frontend mit Vite/React + Tanstack Router gemacht. Probier es aus
        auf{" "}
        <a
          href="https://kuerzl.link"
          target="_blank"
          rel="noreferrer"
          className=" underline"
        >
          kuerzl.link
        </a>
        . Projekt Datein sind auf{" "}
        <a
          href="https://github.com/Alex5175?tab=repositories&q=kuerzl&type=&language=&sort="
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        zu finden.
      </>
    ),
    tags: ["React", "Elysia", "Full Stack"],
  },
  {
    title: "Meine eigene Website",
    image: "/images/alex-zeitlhofer-webpage.webp",
    alt: "Bild von meiner Seite",
    url: "/#",
    date: "August 2025",
    description: (
      <>
        Als Beweis der Entwicklung meiner WebDev Skills erneuere ich meine
        eigene Hompage jedes Jahr. Die nächste Version wird vermutlich mitte
        2026 erscheinen. Ältere Versionen der Website werden unter
        [Jahreszahl].alex-zeitlhofer.com zu finden sein (z.b.
        2025.alex-zeitlhofer.com).
      </>
    ),
    tags: ["fortlaufend", "Web Dev", "React"],
  },
  {
    title: "Musikschule Yspertal - Südliches Waldviertel",
    image: "/images/musikschule_yspertal.webp",
    alt: "Landing Page der Musikschule Yspertal",
    url: "https://www.musikschule.yspertal.com/",
    date: "März 2025",
    description: (
      <>
        Wir haben der Website der Musikschule Yspertal - Südliches Waldviertel
        einen neuen Anstrich verpasst. Zusammen mit meinen damaligen
        Schulkollegen
        <a
          href="https://hannes-scheibelauer.at/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Hannes Scheibelauer
        </a>
        <a
          href="https://michael-schoenauer.at/"
          target="_blank"
          rel="noreferrer"
        >
          {", "}
          Michael Schönauer
        </a>
        <a href="https://stageup.at/" target="_blank" rel="noreferrer">
          {" und "}
          Benjamin Leitner{" "}
        </a>
        habe ich diese Website erstellt. Wir haben auch neue Lehrer Fotos
        geschossen um einen ordentlichen Durchgehenden Stil zu kreieren. Ich
        habe zusätzlich ein kleines Minispiel mit PHP geschrieben. Probiers aus
        auf{" "}
        <a
          href="https://www.musikschule.yspertal.com/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          www.musikschule.yspertal.com
        </a>
      </>
    ),
    tags: ["Wordpress", "PHP"],
  },
  {
    title: "StageUp Website",
    image: "/images/stageup.webp",
    url: "https://www.stageup.at",
    date: "März 2023",
    description: (
      <>
        <span className="text-red-500 font-bold">
          Diese Website ist gerade im Umbau, kurzzeitige Aussetzer oder andere
          Probleme können auf dieser Version der Website vorkommen.
        </span>
        <br />
        In kooperation mit Benjamin Leitner wurde eine Website für sein
        Unternehmen StageUp erstellt. Diese wurde zur einfachen Wartung mit
        Wordpress und Elementor erstellt. Verfügbar auf{" "}
        <a
          href="https://www.stageup.at"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          www.stageup.at
        </a>
      </>
    ),
    alt: "Screenshot der StageUp Website",
    tags: ["Wordpress", "Elementor"],
  },
  {
    title: "Griessler Website",
    image: "/images/griessler.webp",
    date:" November 2022",
    description: (
      <>
        <span className="text-red-500 font-bold">
          Diese Website wird seit 2023 nicht mehr von mir gewartet und hat
          seitdem ihr SSL Zertifikat verloren, seien sie Vorsichtig.
        </span>
        <br />
        Im dritten Schuljahr der IT-Htl wurde dieses Projekt im Rahmen des ITP
        Unterichts entwickelt. Die Idee war ein einfacher Redesign der Website
        der Julius Griessler & Sohn KG, da diese Website schon sehr veraltet
        war. Damit der Kunde nach dem Ende des Projekts selber weiter an der
        Seite arbeiten konnte wurde Wordpress mit Elementor verwendet.{" "}
      </>
    ),
    alt: "Screenshot der Griessler Website",
    url: "https://griessler.com/",
    tags: ["Wordpress", "Elementor"],
  },

];

export default function Projects() {
  return (
    <SectionTemplate title="Projekte" theme="dark" id="projects">
      {/* Card Project View on Mobile */}
      <div className="w-full flex flex-col gap-4 md:hidden ">
        {projects.map((project, idx) => (
          <ProjectCard {...project} key={idx}></ProjectCard>
        ))}
      </div>

      {/* Desktop Tile Project View */}
      <div className=" gap-4 flex-col hidden md:flex">
        {projects.map((project, idx) => (
          <ProjectTile {...project} idx={idx} key={idx}></ProjectTile>
        ))}
      </div>
    </SectionTemplate>
  );
}

function toMobileSrc(src: string) {
  return src.replace(/\.webp$/, "-mobile.webp");
}

// Mobile Card
function ProjectCard({ title, image, description, alt, tags, url }: Project) {
  return (
    <div className="flex flex-col transition-all duration-200 hover:scale-105 rounded-lg cursor-pointer hover:z-50 min-h-min">
      <Link href={url} target="_blank" rel="noreferrer">
        <img
          src={toMobileSrc(image)}
          alt={alt}
          loading="lazy"
          className="object-cover rounded-t-lg "
        />
      </Link>

      <div className="text-pretty bg-gradient-to-r from-primary to-secondary w-full p-4 rounded-b-lg overflow-hidden text-foreground min-h-32">
        <div className="flex">
          <h3 className=" text-base md:text-xl font-bold shrink-0">
            {title}
          </h3>
          <div id="tags" className="hidden items-center ml-2 gap-2  md:flex">
            {tags.map((tag) => (
              <ProjectTag tagName={tag} key={tag}></ProjectTag>
            ))}
          </div>
        </div>
        <p className="text-sm md:text-lg text-ellipsis text-wrap w-full">
          {description}
        </p>
      </div>
    </div>
  );
}

// Desktop Tile
function ProjectTile({
  title,
  image,
  description,
  alt,
  tags,
  idx,
  url,
  date,
}: Project & { idx: number }) {
  const alignLeft = idx % 2 == 1;

  return (
    <div
      className={`w-full p-4 flex overflow-hidden ${
        alignLeft ? "flex-row-reverse" : ""
      }`}
    >
      <Link href={url}>
        <motion.img
          src={image}
          alt={alt}
          initial={{ opacity: 0, x: alignLeft ? 128 : -128 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            opacity: { delay: 0.3, duration: 0.4 },
            x: { delay: 0.3, duration: 0.4 },
            scale: { delay: 0, duration: 0.1 },
            ease: "easeIn",
          }}
          whileHover={{ scale: 1.03 }}
          className="max-w-[40vw] opacity-0 object-contain  rounded-md "
        />
      </Link>

      <div
        className={`flex-1 flex flex-col gap-3 py-4
        text-foreground
        `}
      >
        <div>
          <h3
            className={` text-base md:text-3xl font-black   ${
              figtree.className
            } ${alignLeft ? "text-left" : "text-right"}`}
          >
            {title}
          </h3>
          <p
            className={`  ${
              figtree.className
            } ${alignLeft ? "text-left" : "text-right"}
            tracking-tight
              text-md opacity-70
              `}
          >
            {date}
          </p>
        </div>

        <div
          id="tags"
          className={`hidden ${
            alignLeft ? "" : "justify-end"
          } gap-2  w-full md:flex`}
        >
          {tags.map((tag) => (
            <ProjectTag tagName={tag} key={tag}></ProjectTag>
          ))}
        </div>
        <p
          className={`text-sm md:text-lg text-justify ${
            figtree.className
          } ${alignLeft ? "pr-8 " : "pl-8"}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function ProjectTag({ tagName }: { tagName: string }) {
  return (
    <div className="rounded-full max-w-min h-6 bg-gradient-to-r from-primary to-secondary p-4 flex items-center">
      <p className="text-foreground text-center md:text-lg font-bold text-nowrap">
        {tagName}
      </p>
    </div>
  );
}
