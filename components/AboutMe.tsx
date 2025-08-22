import { Figtree } from "next/font/google";
import SectionTemplate from "../components/SectionTemplate";

const figtree = Figtree({
  weight: "700",
  subsets: ["latin"],
});

export default function AboutMe() {
  return (
    <SectionTemplate
      title="wer bin ich?"
      id="aboutme"
      theme="dark"
      subTitle="Hi, ich bin Alex!"
    >
      <p
        className={`md:columns-2  text-foreground text-[4vw] md:text-[1.75vw] ${figtree.className} text-justify`}
      >
        ich bin Webentwickler mit Leidenschaft für cleanen Code, durchdachtes
        Design und performante Websites. Ich liebe es, digitale Ideen zum Leben
        zu erwecken - pixelgenau, nutzerzentriert und zukunftssicher. Ich habe
        meine Matura an der IT-HTL Ybbs abgeschlossen und komme aus Oberndorf an
        der Melk. Technik, Kreativität und stetiges Lernen begleiten mich
        seitdem auf meinem Weg durch die Welt des Webs.
      </p>
      <div className="h-96"></div>
    </SectionTemplate>
  );
}
