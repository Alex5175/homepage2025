import { useRef } from "react";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  weight: "700",
  subsets: ["latin"],
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
  {
    title: "Projekt 3",
    image: "/img/pexels-samandgos-709552.jpg",
    description: "Kurze Beschreibung von Projekt 3.",
  },
  {
    title: "Projekt 3",
    image: "/img/pexels-samandgos-709552.jpg",
    description: "Kurze Beschreibung von Projekt 3.",
  },
  {
    title: "Projekt 3",
    image: "/img/pexels-samandgos-709552.jpg",
    description: "Kurze Beschreibung von Projekt 3.",
  },
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id="projects"
      className="bg-secondary snap-start h-screen p-8 flex flex-col items-center overflow-hidden"
    >
      <h2
        className={`text-4xl md:text-7xl ${figtree.className} text-foreground mt-8 text-left w-full mb-8`}
      >
        PROJEKTE
      </h2>
      <div className="relative w-full flex items-center justify-center max-w-8xl">
        {/* Left Scroll Button */}
        <button
          aria-label="Scroll Left"
          className="absolute left-0 z-50 cursor-pointer bg-white hover:bg-gray-200 rounded-full p-3 m-2 shadow-lg transition disabled:opacity-30 flex items-center justify-center"
          style={{
            top: "50%",
            transform: "translateY(-50%)",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
          }}
          onClick={() => {
            if (scrollRef.current) {
              const container = scrollRef.current;
              const cards = Array.from(
                container.querySelectorAll("div.flex-shrink-0")
              ) as HTMLElement[];
              const containerRect = container.getBoundingClientRect();
              let targetCard: HTMLElement | null = null;
              // Find the first card whose right edge is left of the container's left edge + 1px
              for (let i = cards.length - 1; i >= 0; i--) {
                const cardRect = cards[i].getBoundingClientRect();
                if (cardRect.right < containerRect.left + 1) {
                  targetCard = cards[i];
                  break;
                }
              }
              if (targetCard) {
                container.scrollBy({
                  left:
                    targetCard.getBoundingClientRect().left -
                    containerRect.left,
                  behavior: "smooth",
                });
              } else if (cards.length > 0) {
                // If no card is fully left, scroll to the first card
                container.scrollBy({
                  left:
                    cards[0].getBoundingClientRect().left - containerRect.left,
                  behavior: "smooth",
                });
              }
            }
          }}
        >
          <span
            style={{
              color: "black",
              fontSize: "2rem",
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              textAlign: "center",
            }}
          >
            {"<"}
          </span>
        </button>
        {/* Cards Scrollable Row */}
        <div
          ref={scrollRef}
          className="flex w-full max-w-8xl overflow-x-auto  pb-4 scrollbar-hide"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE 10+
          }}
        >
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 max-w-screen lg:max-w-[33.3vw] bg-foreground shadow-lg flex flex-col items-center relative group"
            >
              <div className="relative w-full hover:z-30 h-[70vh] md:h-[30vh] lg:h-[70vh]">
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
                    <p className="text-gray-200 text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Right Scroll Button */}
        <button
          aria-label="Scroll Right"
          className="absolute right-0 z-50 bg-white cursor-pointer hover:bg-gray-200 rounded-full p-3 m-2 shadow-lg transition disabled:opacity-30 flex items-center justify-center"
          style={{
            top: "50%",
            transform: "translateY(-50%)",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
          }}
          onClick={() => {
            if (scrollRef.current) {
              const container = scrollRef.current;
              // Find the first card that is fully or partially visible from the left
              const cards = Array.from(
                container.querySelectorAll("div.flex-shrink-0")
              ) as HTMLElement[];
              const containerRect = container.getBoundingClientRect();
              let targetCard: HTMLElement | null = null;
              for (let i = 0; i < cards.length; i++) {
                const cardRect = cards[i].getBoundingClientRect();
                if (cardRect.right > containerRect.left + 1) {
                  // Find the next card after the first visible one
                  if (i + 1 < cards.length) {
                    targetCard = cards[i + 1];
                  }
                  break;
                }
              }
              if (targetCard) {
                container.scrollBy({
                  left:
                    targetCard.getBoundingClientRect().left -
                    containerRect.left,
                  behavior: "smooth",
                });
              }
            }
          }}
        >
          <span
            style={{
              color: "black",
              fontSize: "2rem",
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              textAlign: "center",
            }}
          >
            {">"}
          </span>
        </button>
      </div>
      <div id="points" className="flex ">
        {projects.map((project, idx) => (
          <div
            className="bg-gray-300 w-4 h-2 mr-2 rounded-full"
            key={idx}
          ></div>
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
