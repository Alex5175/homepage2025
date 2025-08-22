"use client";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SectionTemplate from "./SectionTemplate";

const projects: Project[] = [
  {
    title: "Griessler Website",
    image: "/images/griessler.webp",
    description:
      "Im Rahmen eines Schulprojekts wurde die Griessler Website neu designed.",
    alt: "Screenshot der Griessler Website",
    tags: ["Wordpress", "Elementor"],
  },
  {
    title: "StageUp Website",
    image: "/images/stageup.webp",
    description:
      "In kooperation mit Benjamin Leitner wurde eine Website für sein Unternehmen StageUp erstellt.",
    alt: "Screenshot der Griessler Website",
    tags: ["Wordpress", "Elementor"],
  },
];

export default function Projects() {
  return (
    <SectionTemplate title="Projekte" theme="dark" id="projects">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2 }}
        className="w-full"
      >
        <Masonry>
          {projects.map((project, idx) => (
            <ProjectCard {...project} key={idx}></ProjectCard>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <div className="h-96"></div>
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

function ProjectTag({ tagName }: { tagName: string }) {
  return (
    <div className="rounded-full max-w-min h-6 bg-background px-3 flex items-center">
      <p className="text-foreground text-center text-sm">{tagName}</p>
    </div>
  );
}
