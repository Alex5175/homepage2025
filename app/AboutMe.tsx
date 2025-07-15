import { Figtree } from "next/font/google";
// import Link from "next/link";
import SectionTemplate from "./SectionTemplate";

// const imperal = Imperial_Script({
//   weight: "400",
//   subsets: ["latin"],
// });

const figtree = Figtree({
  weight: "700",
  subsets: ["latin"],
});

// const iconDims = "w-16  lg:w-16";

// const skillIcons = [
//   {
//     src: "/icons/html.png",
//     text: "html logo",
//   },
//   {
//     src: "/icons/css.png",
//     text: "css logo",
//   },
//   {
//     src: "/icons/js.png",
//     text: "js logo",
//   },
//   {
//     src: "/icons/react.png",
//     text: "react logo",
//   },
//   {
//     src: "/icons/svelte.png",
//     text: "svelte logo",
//   },
//   {
//     src: "/icons/node-js.png",
//     text: "node js logo",
//   },
//   {
//     src: "/icons/java.png",
//     text: "java logo",
//   },
//   {
//     src: "/icons/c-sharp.png",
//     text: "c sharp logo",
//   },
//   {
//     src: "/icons/wordpress.png",
//     text: "wordpress logo",
//   },
// ];
export default function AboutMe() {
  return (
    <SectionTemplate
      title="wer bin ich?"
      id="aboutme"
      // backgroundImage="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg"
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
