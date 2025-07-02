import { Figtree } from "next/font/google";
import { Project } from "./ProjectType";
import ProjectCard from "./ProjectCard";
// import { useState } from "react";
// import { useEffect } from "react";

const figtree = Figtree({
  weight: "700",
  subsets: ["latin"],
});

// type BlobMeta = {
//   pathname: string;
//   url: string;
//   size: number;
//   uploadedAt: string;
//   contentType: string;
// };

// Example card data
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
  // const [projects, setProjects] = useState<Project[]>([]);

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const res = await fetch("/api/projects", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  //         },
  //       });

  //       if (!res.ok) throw new Error(`Error: ${res.status}`);

  //       const projects = await res.json();

  //       setProjects(projects);
  //     } catch (error) {
  //       console.error(`Error fetching Projects: ${error}`);
  //     }
  //   };

  //   fetchProjects();
  // }, []);

  return (
    <div
      id="projects"
      className="bg-background snap-start min-h-screen p-8 flex flex-col items-center overflow-hidden"
    >
      <h2
        className={`text-4xl md:text-7xl ${figtree.className} text-foreground mt-8 text-left w-full mb-8`}
      >
        PROJEKTE
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mb-48">
        {projects.map((project, idx) => (
          <ProjectCard {...project} key={idx}></ProjectCard>
        ))}
      </div>
    </div>
  );
}
