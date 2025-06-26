"use client";
import { useState, useEffect } from "react";
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
});

const words = ["Website?", "Web App?", "Desktop App?"];

const iconDims = "w-16 md:w-20 lg:w-28";

const skillIcons = [
  {
    src: "./icons/html.png",
    text: "html logo",
  },
  {
    src: "./icons/css.png",
    text: "css logo",
  },
  {
    src: "./icons/js.png",
    text: "js logo",
  },
  {
    src: "./icons/react.png",
    text: "react logo",
  },
  {
    src: "./icons/svelte.png",
    text: "svelte logo",
  },
  {
    src: "./icons/node-js.png",
    text: "node js logo",
  },
  {
    src: "./icons/java.png",
    text: "java logo",
  },
  {
    src: "./icons/c-sharp.png",
    text: "c sharp logo",
  },
  {
    src: "./icons/wordpress.png",
    text: "wordpress logo",
  },
];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText === word) {
      // Wait before starting to delete (display word longer)
      timeout = setTimeout(() => setIsDeleting(true), 5000);
    } else if (isDeleting && displayedText === "") {
      // Move to next word and start typing
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 300);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? word.slice(0, prev.length - 1)
            : word.slice(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <div
      id="hero"
      className="h-screen bg-background w-screen grid overflow-x-hidden grid-cols-2"
    >
      <div className="p-8 col-span-2 md:col-span-1">
        <h1
          className={`text-4xl md:text-6xl xl:text-8xl ${figtree.className} text-foreground  text-left `}
        >
          ZEITLHOFER{" "}
          <span className="font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ALEXANDER
          </span>
        </h1>

        <p
          className={`text-foreground text-2xl md:text-4xl mt-4  text-left ${figtree.className} `}
        >
          WEB-ENTWICKLUNG/DESIGN <br />
          SOFTWARE ENTWICKLUNG
        </p>

        <div
          id="icons"
          className="grid grid-cols-3 lg:grid-cols-4 gap-10 mt-12 "
        >
          {skillIcons.map((icon) => (
            <img
              src={icon.src}
              key={icon.text}
              alt={icon.text}
              className={`${iconDims} hover:animate-pulse cursor-pointer`}
            ></img>
          ))}
        </div>
      </div>

      <div className="hidden md:flex justify-end">
        <img
          src="me_edited_no_bg_scaled2.png"
          className="h-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
}
