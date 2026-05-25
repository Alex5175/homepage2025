"use client";
import { Figtree } from "next/font/google";
import SectionTemplate from "./SectionTemplate";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const figtree = Figtree({
  weight: "700",
  subsets: ["latin"],
});

const iconDims = "w-16";
const skillIcons = [
  {
    src: "/icons/html.png",
    text: "html logo",
  },
  {
    src: "/icons/css.png",
    text: "css logo",
  },
  {
    src: "/icons/js.png",
    text: "js logo",
  },
  {
    src: "/icons/react.png",
    text: "react logo",
  },
  {
    src: "/icons/svelte.png",
    text: "svelte logo",
  },
  {
    src: "/icons/node-js.png",
    text: "node js logo",
  },
  {
    src: "/icons/java.png",
    text: "java logo",
  },
  {
    src: "/icons/c-sharp.png",
    text: "c sharp logo",
  },
  {
    src: "/icons/wordpress.png",
    text: "wordpress logo",
  },
];

export default function AboutMe() {
  const [imageSize, setImageSize] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const updateImageSize = () => {
      if (imageRef.current) {
        setImageSize(imageRef.current.offsetWidth);
      }
    };

    updateImageSize();
    window.addEventListener("resize", updateImageSize);

    return () => {
      window.removeEventListener("resize", updateImageSize);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <SectionTemplate
        title="wer bin ich?"
        id="aboutme"
        theme="dark"
        subTitle={
          <h3
            className={`text-foreground text-3xl md:text-5xl leading-none ${figtree.className} text-left mb-4 uppercase`}
          >
            Hi, ich bin{" "}
            <span className="font-black bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
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
            className={`text-foreground text-lg md:text-2xl ${figtree.className} text-justify`}
          >
            ich bin Webentwickler mit Leidenschaft für cleanen Code,
            durchdachtes Design und performante Websites. Ich liebe es, digitale
            Ideen zum Leben zu erwecken - pixelgenau, nutzerzentriert und
            zukunftssicher. Ich habe meine Matura an der{" "}
            <Link
              href={"https://www.sz-ybbs.ac.at/"}
              className="text-[#06aac9] hover:underline transition-all "
            >
              IT-HTL Ybbs
            </Link>{" "}
            abgeschlossen und komme aus Oberndorf an der Melk. Technik,
            Kreativität und stetiges Lernen begleiten mich seitdem auf meinem
            Weg durch die Welt des Webs.
          </motion.p>
        </div>
      </SectionTemplate>

      <div className="flex-1 relative flex flex-col-reverse space-y-4 md:space-y-0 md:flex-col ">
        <div className="flex-3  flex items-center justify-center carousel-spin">
          <motion.img
            ref={imageRef}
            src="/me_edited_no_bg_scaled2.png"
            loading="lazy"
            className={`w-[70vw] md:w-[25vw] rounded-full cursor-pointer transition-all duration-300 block carousel-spin-counteract`}
            alt="Alex Zeitlhofer Image"
            initial={{ scale: 0.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
          ></motion.img>

          {skillIcons.map((icon, index) => {
            const angle = (index / skillIcons.length) * 360;

            return (
              <div
                key={index}
                className="absolute"
                style={{
                  transform: `rotate(${angle}deg) translate(${
                    imageSize / 2
                  }px) rotate(-${angle}deg)`,
                }}
              >
                <img
                  src={icon.src}
                  alt={icon.text}
                  className={`${iconDims} carousel-spin-counteract`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
