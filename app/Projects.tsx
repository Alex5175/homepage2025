import { useRef, useEffect } from "react";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  weight: "700",
});

// Example card data – replace with your own
const projects = [
  {
    title: "Projekt 1",
    image: "/img/pexels-bri-schneiter-28802-346529.jpg",
    description: "Kurze Beschreibung von Projekt 1.",
  },
  {
    title: "Projekt 2",
    image: "/img/pexels-pixabay-206359.jpg",
    description: "Kurze Beschreibung von Projekt 2.",
  },
  {
    title: "Projekt 3",
    image: "/img/pexels-samandgos-709552.jpg",
    description: "Kurze Beschreibung von Projekt 3.",
  },
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // Only act if the container can scroll horizontally
      if (
        el.scrollWidth > el.clientWidth &&
        (e.deltaY !== 0 || e.deltaX !== 0)
      ) {
        const atStart = el.scrollLeft === 0;
        const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

        // If not at start or end, prevent vertical scroll and scroll horizontally
        if (
          (!atStart && !atEnd) ||
          (atStart && e.deltaY > 0) ||
          (atEnd && e.deltaY < 0)
        ) {
          e.preventDefault();
          el.scrollLeft += e.deltaY;
        }
        // If at start and scrolling up, or at end and scrolling down, allow normal scroll
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div
      id="projects"
      className="bg-secondary snap-start h-[98vh] pt-16 flex flex-col items-center"
    >
      <h1
        className={`text-7xl ${figtree.className} text-foreground ml-16 text-left w-full mb-4`}
      >
        PROJEKTE
      </h1>
      <div
        ref={scrollRef}
        className="flex w-full max-w-8xl overflow-x-auto pb-4 scrollbar-hide"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE 10+
        }}
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[35vw] bg-foreground shadow-lg flex flex-col items-center relative group"
          >
            <div className="relative w-full hover:z-50 h-[60vh]">
              <div className="w-full h-full transition-transform duration-300 transform group-hover:scale-105">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/60 px-6 py-4 flex flex-col items-start">
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {project.title}
                  </h2>
                  <p className="text-gray-200 text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
