"use client";
import { useState, useEffect, useRef } from "react";
import { Figtree } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
const figtree = Figtree({
  weight: "700",
  subsets: ["latin"],
  preload: true,
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

export default function Hero() {
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
    <>
      <div
        id="hero"
        className=" p-8  w-screen flex flex-col lg:flex-row overflow-hidden relative gap-4">
        <div id="title" className="flex-1">
          <h1
            className={`leading-none text-[14vw] lg:text-[9.5vw] ${figtree.className} text-foreground text-left`}>
            ZEITLHOFER{" "}
            <span className="font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ALEXANDER
            </span>
          </h1>

          <p
            className={`text-foreground text-[10vw] lg:text-[5vw] leading-none mt-4 text-left ${figtree.className}`}>
            <span className="text-gradient-underline-hover">
              WEB-ENTWICKLUNG/-DESIGN
            </span>{" "}
            <br />
            <span className="text-gradient-underline-hover">
              SOFTWARE ENTWICKLUNG
            </span>
          </p>
        </div>

        <div className="flex-1 relative flex items-center  flex-col-reverse space-y-4 md:space-y-0 md:flex-col ">
          <div className="flex-3  flex items-center justify-center carousel-spin">
            {/* Image */}
            <motion.img
              ref={imageRef}
              src="/me_edited_no_bg_scaled2.png"
              loading="lazy"
              className={`w-[70vw] md:w-[25vw] rounded-full cursor-pointer transition-all duration-300 block carousel-spin-counteract`}
              alt="Alex Zeitlhofer Image"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2, ease: "easeIn" }}></motion.img>

            {/* Spinning Carousel Icons */}

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
                  }}>
                  <img
                    src={icon.src}
                    alt={icon.text}
                    className={`${iconDims} carousel-spin-counteract`}
                  />
                </div>
              );
            })}
          </div>

          <div className="flex-1 flex items-center">
            <Link
              href="/#contact"
              className={`bg-gradient-to-r from-primary to-secondary p-4 text-2xl rounded-md text-[5vw] lg:text-[2vw] text-foreground ${figtree.className}`}>
              Sie brauchen eine Website?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
