import { Figtree } from "next/font/google";
import SectionTemplate from "./SectionTemplate";
import Link from "next/link";
import { motion } from "motion/react";
// import TimeLine from "./TimeLine";

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
      subTitle={
        <h3
          className={`text-foreground text-[10vw] md:text-[5vw] leading-none ${figtree.className} text-left mb-4 uppercase`}
        >
          Hi, ich bin{" "}
          <span className="font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Alex!
          </span>
        </h3>
      }
    >
      <div className="flex flex-col">
        <motion.p
          initial={{ opacity: 0, marginTop: 30 }}
          whileInView={{ opacity: 1, marginTop: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className={`text-foreground text-[4vw] md:text-[1.75vw] ${figtree.className} text-justify`}
        >
          ich bin Webentwickler mit Leidenschaft für cleanen Code, durchdachtes
          Design und performante Websites. Ich liebe es, digitale Ideen zum
          Leben zu erwecken - pixelgenau, nutzerzentriert und zukunftssicher.
          Ich habe meine Matura an der{" "}
          <Link
            href={"https://www.sz-ybbs.ac.at/"}
            className="text-[#06aac9] hover:underline transition-all "
          >
            IT-HTL Ybbs
          </Link>{" "}
          abgeschlossen und komme aus Oberndorf an der Melk. Technik,
          Kreativität und stetiges Lernen begleiten mich seitdem auf meinem Weg
          durch die Welt des Webs.
        </motion.p>
      </div>
    </SectionTemplate>
  );
}
