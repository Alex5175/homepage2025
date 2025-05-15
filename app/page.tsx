"use client";
import Image from "next/image";
import NavBar from "./NavBar";
import { Imperial_Script, Aref_Ruqaa } from "next/font/google";
import "./home.css";
import React, { useEffect, useState } from "react";

const imperal = Imperial_Script({
  weight: "400",
});

const aref = Aref_Ruqaa({
  weight: "400",
});

const words = ["Website?", "Web App?", "Desktop App?"];

const iconDims = "w-20";

const wordIcons: { [key: string]: any[] } = {
  "Website?": [
    // HTML
    <img
      src="./icons/html.png"
      alt="html logo"
      key={"html"}
      className={iconDims}
    />,
    // CSS
    <img
      src="./icons/css.png"
      alt="css logo"
      key={"css"}
      className={iconDims}
    />,
    // JS
    <img src="./icons/js.png" alt="js logo" key={"js"} className={iconDims} />,
    // React
    <img
      src="./icons/react.png"
      alt="react logo"
      key={"react"}
      className={iconDims}
    ></img>,
  ],
  "Web App?": [
    // React
    <img
      src="./icons/react.png"
      alt="react logo"
      key={"react"}
      className={iconDims}
    ></img>,
    // Node.js
    <img
      src="./icons/node-js.png"
      alt="node js logo"
      key={"node"}
      className={iconDims}
    />,
    // JS
    <img src="./icons/js.png" alt="js logo" key={"js"} className={iconDims} />,
    ,
  ],
  "Desktop App?": [
    // Java
    <img
      src="./icons/java.png"
      alt="java logo"
      key={"java"}
      className={iconDims}
    />,
    // C#
    <img
      src="./icons/c-sharp.png"
      alt="c sharp logo"
      key={"cs"}
      className={iconDims}
    />,
  ],
};

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    let typingSpeed = isDeleting ? 40 : 80;
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
    <>
      <NavBar></NavBar>

      <main className="">
        <div id="hero" className="flex h-[45vw]">
          <div className="w-[66.6vw] p-2">
            <div className="rounded-r-4xl p-4 bg-background w-full h-full border-gradient-animated ">
              <h1
                className={`text-[10rem] ${imperal.className} text-foreground text-glow text-center `}
              >
                Hi
              </h1>

              <p
                className={`text-foreground text-4xl text-center ${aref.className}`}
              >
                brauchen Sie eine{" "}
                <span className="font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </span>
              </p>
              <div className="flex justify-center gap-4 mt-8">
                {wordIcons[words[currentWordIndex]]}
              </div>
            </div>
          </div>
          <div className="flex items-end">
            <img src={"./me_edited_no_bg_scaled2.png"} className="h-[33vw]" />
          </div>
        </div>

        <div id="aboutme" className="bg-primary h-screen"></div>
        <div id="projects" className="bg-secondary h-screen"></div>

        <div id="contact" className="bg-green-300 h-screen"></div>
      </main>
    </>
  );
}
