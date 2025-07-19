"use client";
import { useState, useEffect, useRef } from "react";
import { Figtree } from "next/font/google";

// const imperal = Imperial_Script({
//   weight: "400",
// });

// const aref = Aref_Ruqaa({
//   weight: "400",
// });
const figtree = Figtree({
  weight: "700",
  subsets: ["latin"],
  preload: true,
});

// const words = ["Website?", "Web App?", "Desktop App?"];

const iconDims = "w-16  lg:w-24";
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
  const [hasColor] = useState(true);
  const [imageSize, setImageSize] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Update the image size dynamically
    const updateImageSize = () => {
      if (imageRef.current) {
        setImageSize(imageRef.current.offsetWidth); // Half of the image size
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
      {/* Background Image */}
      <div
        id="top"
        className={`absolute top-0 left-0 w-full h-screen -z-20 bg-cover bg-center ${
          hasColor ? "grayscale-0" : "grayscale"
        } transition-all duration-300 `}
      ></div>

      {/* Hero Section */}
      <div
        id="hero"
        className="h-screen p-8 py-24 w-screen grid overflow-hidden grid-cols-1 md:grid-cols-2 relative snap-start"
      >
        <div>
          <h1
            className={`leading-none text-[14vw] md:text-[9.5vw] ${figtree.className} text-foreground text-left`}
          >
            ZEITLHOFER{" "}
            <span className="font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ALEXANDER
            </span>
          </h1>

          <p
            className={`text-foreground text-[10vw] md:text-[5vw] leading-none mt-4 text-left ${figtree.className}`}
          >
            <span className="text-gradient-underline-hover">
              WEB-ENTWICKLUNG/-DESIGN
            </span>{" "}
            <br />
            <span className="text-gradient-underline-hover">
              SOFTWARE ENTWICKLUNG
            </span>
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Image */}
          <img
            ref={imageRef}
            src="/me_edited_no_bg_scaled2.png"
            loading="lazy"
            className={`w-[80vw] md:w-[40vw] rounded-full cursor-pointer ${
              hasColor ? "grayscale-0" : "grayscale"
            } transition-all duration-300 block`}
            alt="Alex Zeitlhofer Image"
          />

          {/* Spinning Carousel Icons */}
          <div className="absolute w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full flex justify-center items-center carousel-spin">
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
      </div>
    </>
  );
}
