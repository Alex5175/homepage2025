"use client";
import { useState } from "react";
import { Parisienne, Figtree } from "next/font/google";
import Link from "next/link";

const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
});
const figtree = Figtree({
  weight: "700",
  subsets: ["latin"],
});

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const btnClass = `cursor-pointer text-white bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ${figtree.className}`;
  const ctaClass = `cta-shine group inline-flex items-center gap-2 px-5 py-2 rounded-full text-foreground font-bold bg-linear-to-r from-primary to-secondary hover:scale-[1.04] transition-transform ${figtree.className}`;

  return (
    <>
      <nav className="sticky top-0 left-0 right-0 h-16  w-full bg-black/30 backdrop-blur-xl border-b border-white/10 flex items-center z-[1000]">
        <div className="flex justify-between w-screen px-4 ">
          <div className=" pl-6">
            <Link
              href="/#hero"
              className={`font-black text-foreground text-4xl md:text-6xl ${parisienne.className} cursor-pointer text-glow`}
            >
              Alex Zeitlhofer
            </Link>
          </div>
          {/* Desktop menu */}
          <div className="hidden lg:flex gap-8  justify-around items-center text-foreground text-2xl font-bold">
            <Link href="/#aboutme" className={btnClass}>
              Über mich
            </Link>
            <Link href="/#services" className={btnClass}>
              Leistungen
            </Link>
            <Link href="/#projects" className={btnClass}>
              Projekte
            </Link>
            <Link href="/#contact" className={ctaClass}>
              <span>Kostenloses Erstgespräch</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Hamburger icon for mobile */}
        <button
          className="lg:hidden ml-auto mr-8 flex flex-col justify-center items-center w-12 h-12"
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
        <div
          className="fixed top-16 left-0 w-full bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-lg z-20 flex flex-col items-end p-6 gap-6 lg:hidden"
          style={{ boxSizing: "border-box", maxWidth: "100vw" }}
        >
          <Link
            href="/#aboutme"
            className={btnClass}
            onClick={() => setOpen(false)}
          >
            Über mich
          </Link>
          <Link
            href="/#services"
            className={btnClass}
            onClick={() => setOpen(false)}
          >
            Leistungen
          </Link>
          <Link
            href="/#projects"
            className={btnClass}
            onClick={() => setOpen(false)}
          >
            Projekte
          </Link>
          <Link
            href="/#contact"
            className={ctaClass}
            onClick={() => setOpen(false)}
          >
            <span>Kostenloses Erstgespräch</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </>
  );
}
