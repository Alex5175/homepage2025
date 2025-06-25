import Image from "next/image";
import { useState } from "react";
import { Parisienne } from "next/font/google";

const parisienne = Parisienne({
  weight: "400",
});

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const btnClass =
    "cursor-pointer bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent";

  return (
    <>
      <nav className="flex h-24 bg-background-opacity w-screen fixed items-center z-10">
        <div className="w-[66.6vw] pl-6">
          <a
            href="#top"
            className={`font-black text-foreground text-6xl ${parisienne.className} cursor-pointer text-glow`}
          >
            Alex Zeitlhofer
          </a>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex w-[33.3vw] justify-around items-center text-foreground text-2xl font-bold">
          <a href="#aboutme" className={btnClass}>
            Über mich
          </a>
          <a href="#projects" className={btnClass}>
            Projekte
          </a>
          <a href="#contact" className={btnClass}>
            Kontakt
          </a>
        </div>

        {/* Hamburger icon for mobile */}
        <button
          className="md:hidden ml-auto mr-8 flex flex-col justify-center items-center w-12 h-12"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menü öffnen"
        >
          <span className="block w-8 h-1 bg-foreground mb-1 rounded transition-all" />
          <span className="block w-8 h-1 bg-foreground mb-1 rounded transition-all" />
          <span className="block w-8 h-1 bg-foreground rounded transition-all" />
        </button>
      </nav>
      {/* Mobile dropdown menu */}
      {open && (
        <div className="fixed top-24 right-0 w-2/3 max-w-xs bg-background shadow-lg z-20 flex flex-col items-end p-6 gap-6 md:hidden">
          <a
            href="#aboutme"
            className={btnClass}
            onClick={() => setOpen(false)}
          >
            Über mich
          </a>
          <a
            href="#projects"
            className={btnClass}
            onClick={() => setOpen(false)}
          >
            Projekte
          </a>
          <a
            href="#contact"
            className={btnClass}
            onClick={() => setOpen(false)}
          >
            Kontakt
          </a>
        </div>
      )}
      <div className="h-24"></div>
    </>
  );
}
