"use client";
import { useState } from "react";
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

export default function Hero() {
  const [hasColor] = useState(true);

  return (
    <>
      {/* Background Image */}
      <div
        id="top"
        className={`absolute top-0 left-0 w-full h-screen -z-20 bg-cover bg-center ${
          hasColor ? "grayscale-0" : "grayscale"
        } transition-all duration-300 `}
        style={{
          backgroundImage: "url('/images/bg_pexels-photo-6985001.webp')",
        }}
      ></div>

      {/* Hero Section */}
      <div
        id="hero"
        className=" h-screen p-8 py-24 w-screen grid overflow-hidden grid-cols-1 md:grid-cols-2  relative snap-start"
      >
        <div>
          <h1
            className={` leading-none text-[14vw] md:text-[9.5vw] ${figtree.className} text-foreground text-left`}
          >
            ZEITLHOFER{" "}
            <span className="font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ALEXANDER
            </span>
          </h1>

          <p
            className={`text-foreground text-[10vw] md:text-[5vw] leading-none  mt-4 text-left ${figtree.className}`}
          >
            WEB-ENTWICKLUNG/-DESIGN <br />
            SOFTWARE ENTWICKLUNG
          </p>
        </div>

        <div className="  ">
          <img
            src="/me_edited_no_bg_scaled2.png"
            loading="lazy"
            className={`w-full cursor-pointer ${
              hasColor ? "grayscale-0" : "grayscale"
            }  transition-all duration-300 hidden xl:block `}
            alt="Alex Zeitlhofer Image"
            // onClick={() => {
            //   setHasColor(!hasColor);
            //   const clickSound = new Audio("/audio/mouse-click.mp3");
            //   clickSound.volume = 0.5;
            //   clickSound.play();
            // }}
          />
        </div>
      </div>
    </>
  );
}
