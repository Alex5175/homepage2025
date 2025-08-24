"use client";
import SectionTemplate from "./SectionTemplate";
import { useRef, useEffect, useState } from "react";

import { Figtree } from "next/font/google";

const figtree = Figtree({
  weight: "700",
  subsets: ["latin"],
});

const projects: Project[] = [
  {
    title: "Griessler Website",
    image: "/images/griessler.webp",
    description:
      "Im dritten Schuljahr der IT-Htl wurde dieses Projekt im Rahmen des ITP Unterichts entwickelt. Die Idee war ein einfacher Redesign der Website der Julius Griessler & Sohn KG, da diese Website schon sehr veraltet war. Damit der Kunde nach dem Ende des Projekts selber weiter an der Seite arbeiten konnte wurde Wordpress mit Elementor verwendet. ",
    alt: "Screenshot der Griessler Website",
    tags: ["Wordpress", "Elementor"],
  },
  {
    title: "StageUp Website",
    image: "/images/stageup.webp",
    description:
      "In kooperation mit Benjamin Leitner wurde eine Website für sein Unternehmen StageUp erstellt. Diese wurde zur einfachen Wartung mit Wordpress und Elementor erstellt.",
    alt: "Screenshot der Griessler Website",
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

function ProjectCard({ title, image, description, alt, tags }: Project) {
  return (
    <div className="flex flex-col grayscale hover:grayscale-0 transition-all duration-200 hover:scale-105 rounded-lg cursor-pointer hover:z-50 min-h-min">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="object-cover rounded-t-lg "
      />
      <div className="text-pretty bg-gradient-to-r from-primary to-secondary w-full p-4 rounded-b-lg overflow-hidden text-foreground min-h-32">
        <div className="flex">
          <h3 className=" text-[3vw] md:text-[1.5vw] font-bold flex-shrink-0">
            {title}
          </h3>
          <div id="tags" className="hidden items-center ml-2 gap-2  md:flex">
            {tags.map((tag) => (
              <ProjectTag tagName={tag} key={tag}></ProjectTag>
            ))}
          </div>
        </div>
        <p className="text-[2.8vw] md:text-[1.3vw] text-ellipsis w-full">
          {description}
        </p>
      </div>
    </div>
  );
}

function ProjectTile({
  title,
  image,
  description,
  alt,
  tags,
  idx,
}: Project & { idx: number }) {
  const alignLeft = idx % 2 == 1;
  const imgRef = useRef<HTMLImageElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`w-full p-4 flex ${alignLeft ? "flex-row-reverse" : ""}`}>
      <img
        ref={imgRef}
        src={image}
        alt={alt}
        className={`max-w-[40vw] object-cover aspect-video rounded-md hover:scale-105 transition-all duration-500
          ${
            visible
              ? "opacity-100 translate-x-0"
              : alignLeft
              ? "opacity-0 translate-x-16"
              : "opacity-0 -translate-x-16"
          }
        `}
      />

      <div
        className={`flex-1 flex flex-col gap-4 py-4 
        text-foreground
        `}
      >
        <h3
          className={` text-[4vw] md:text-[2vw] font-bold ${
            figtree.className
          } ${alignLeft ? "text-left" : "text-right"}`}
        >
          {title}
        </h3>
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
          className={`text-[3vw] md:text-[1.25vw] text-justify ${
            figtree.className
          } ${alignLeft ? "pr-8" : "pl-8"}`}
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
      <p className="text-foreground text-center md:text-[1.25vw]">{tagName}</p>
    </div>
  );
}
