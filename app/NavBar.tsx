import Image from "next/image";
import { Parisienne } from "next/font/google";

const parisienne = Parisienne({
  weight: "400",
});

export default function NavBar() {
  const btnClass =
    "cursor-pointer bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent";
  // bg-gradient-to-r from-secondary from-50% to-primary to-80%
  return (
    <>
      <nav className="flex h-24 bg-background w-screen fixed items-center z-10">
        <div className="w-[66.6vw] pl-6">
          <a
            href="/"
            className={`font-black text-foreground text-5xl ${parisienne.className} cursor-pointer text-glow`}
          >
            Alex Zeitlhofer
          </a>
        </div>

        <div className="flex w-[33.3vw] justify-around items-center text-foreground text-2xl  font-bold">
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
      </nav>
      <div className="h-24 "></div>
    </>
  );
}
