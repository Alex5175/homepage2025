import { Imperial_Script, Figtree } from "next/font/google";

const imperal = Imperial_Script({
  weight: "400",
  subsets: ["latin"],
});

const figtree = Figtree({
  weight: "700",
  subsets: ["latin"],
});
export default function AboutMe() {
  return (
    <div
      id="aboutme"
      className="bg-primary w-screen grid grid-cols-12 overflow-hidden snap-start h-screen "
    >
      <div className="p-8 col-span-12 lg:col-span-7">
        <h2
          className={`text-foreground text-8xl md:text- xl:text-[10rem] text-shadow-2xs md:mt-8 shadow-foreground   text-left ${imperal.className} `}
        >
          Hi,
        </h2>

        <p
          className={`text-foreground text-2xl md:text-4xl  ltext-justify ${figtree.className} mt-4`}
        >
          ich bin Webentwickler mit Leidenschaft für cleanen Code, durchdachtes
          Design und performante Websites. Ich liebe es, digitale Ideen zum
          Leben zu erwecken - pixelgenau, nutzerzentriert und zukunftssicher.
        </p>
        <p
          className={`text-foreground text-2xl md:text-4xl text-justify ${figtree.className} mt-4`}
        >
          Ich habe meine Matura an der IT-HTL Ybbs abgeschlossen und komme aus
          Oberndorf an der Melk. Technik, Kreativität und stetiges Lernen
          begleiten mich seitdem auf meinem Weg durch die Welt des Webs.
        </p>

        {/* <div className="flex justify-center mt-8 items-center">
          <img
            src="./signature.png"
            alt="Alexander Zeitlhofer Signature"
            className="lg:w-[20rem] hidden xl:block"
          />
        </div> */}
      </div>
      <div className="h-full  justify-end col-span-5 hidden lg:flex">
        <img
          src="./fave_edited_md.png"
          loading="lazy"
          className="object-cover"
          alt="Alex Zeitlhofer Suit Image"
        />
      </div>
    </div>
  );
}
