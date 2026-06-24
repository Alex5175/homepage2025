import SectionTemplate from "./SectionTemplate";
import { Figtree } from "next/font/google";
import Link from "next/link";
import { getPayload } from "payload";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "lexical";
import ProjectTile from "./ProjectTile";

const figtree = Figtree({ subsets: ["latin"] });

type ProjectMedia = {
  url?: string | null;
  alt?: string | null;
  sizes?: {
    mobile?: { url?: string | null } | null;
  } | null;
};

type ProjectDoc = {
  id: number | string;
  title: string;
  date?: string | null;
  url: string;
  image: ProjectMedia | number | string;
  tags?: { tag: string }[] | null;
  description: SerializedEditorState;
};

export default async function Projects() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "projects",
    sort: "-order",
    limit: 100,
    depth: 1,
  });

  const projects = (docs as ProjectDoc[]).map((p) => {
    const media =
      typeof p.image === "object" && p.image !== null
        ? (p.image as ProjectMedia)
        : null;
    return {
      id: p.id,
      title: p.title,
      date: p.date ?? null,
      url: p.url,
      tags: (p.tags ?? []).map((t) => t.tag),
      desktopUrl: media?.url ?? "",
      mobileUrl: media?.sizes?.mobile?.url ?? media?.url ?? "",
      alt: media?.alt ?? "",
      description: p.description,
    };
  });

  return (
    <SectionTemplate title="Projekte" theme="dark" id="projects">
      {/* Card Project View on Mobile */}
      <div className="w-full flex flex-col gap-4 md:hidden">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            imageUrl={project.mobileUrl}
            alt={project.alt}   
            tags={project.tags}
            url={project.url}
            date={project.date}
            description={project.description}
          />
        ))}
      </div>

      {/* Desktop Tile Project View */}
      <div className="gap-4 flex-col hidden md:flex">
        {projects.map((project, idx) => (
          <ProjectTile
            key={project.id}
            idx={idx}
            title={project.title}
            imageUrl={project.desktopUrl}
            alt={project.alt}
            tags={project.tags}
            url={project.url}
            date={project.date}
            description={<RichText data={project.description} />}
          />
        ))}
      </div>
    </SectionTemplate>
  );
}

type CardProps = {
  title: string;
  imageUrl: string;
  alt: string;
  url: string;
  date?: string | null;
  tags: string[];
  description: SerializedEditorState;
};

function ProjectCard({
  title,
  imageUrl,
  alt,
  url,
  date,
  tags,
  description,
}: CardProps) {
  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl transition-colors duration-200 hover:bg-white/10 hover:border-white/20">
      <Link
        href={url}
        target="_blank"
        rel="noreferrer"
        className="relative block overflow-hidden"
      >
        <img
          src={imageUrl}
          alt={alt}
          loading="lazy"
          className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-transparent"
        />
      </Link>

      <div
        className={`p-4 flex flex-col gap-3 text-foreground ${figtree.className}`}
      >
        <div className="flex items-baseline justify-between gap-2">
          <Link
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-lg font-black leading-tight hover:underline underline-offset-4"
          >
            {title}
          </Link>
          {date && (
            <span className="text-xs text-foreground/50 shrink-0">{date}</span>
          )}
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold border border-white/15 bg-white/5 text-foreground/80"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="text-sm text-foreground/80 leading-relaxed">
          <RichText data={description} />
        </div>
      </div>
    </div>
  );
}
