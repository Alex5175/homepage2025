import { Project } from "./ProjectType";
export default function ProjectCard({
  title,
  image,
  description,
  alt,
  tags,
}: Project) {
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
          <h3 className="text-lg md:text-md lg:text-xl font-bold flex-shrink-0">
            {title}
          </h3>
          <div id="tags" className="hidden items-center ml-2 gap-2  md:flex">
            {tags.map((tag) => (
              <ProjectTag tagName={tag} key={tag}></ProjectTag>
            ))}
          </div>
        </div>
        <p className="text-md md:text-md lg:text-lg text-ellipsis w-full">
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
