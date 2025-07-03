import { Figtree } from "next/font/google";
import { Project } from "./ProjectType";
import ProjectCard from "./ProjectCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const figtree = Figtree({
  weight: "700",
  subsets: ["latin"],
});

const projects: Project[] = [
  {
    title: "Griessler Website",
    image: "./images/griessler.png",
    description:
      "Im Rahmen eines Schulprojekts wurde die Griessler Website neu designed.",
    alt: "Screenshot der Griessler Website",
    tags: ["Wordpress", "Elementor"],
  },
  {
    title: "StageUp Website",
    image: "./images/stageup.png",
    description:
      "In kooperation mit Benjamin Leitner wurde eine Website für sein Unternehmen StageUp erstellt.",
    alt: "Screenshot der Griessler Website",
    tags: ["Wordpress", "Elementor"],
  },
];

export default function Projects() {
  return (
    <div
      id="projects"
      className="bg-background min-h-screen p-8 flex flex-col items-center overflow-hidden"
    >
      <h2
        className={`text-4xl md:text-7xl ${figtree.className} text-foreground mt-8 text-left w-full mb-8`}
      >
        PROJEKTE
      </h2>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2 }}
        className="w-full"
      >
        <Masonry gutter="16px">
          {projects.map((project, idx) => (
            <ProjectCard {...project} key={idx}></ProjectCard>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
