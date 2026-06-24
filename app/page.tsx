// import Image from "next/image";
// import { Imperial_Script, Aref_Ruqaa } from "next/font/google";
import "./home.css";
import React from "react";
import dynamic from "next/dynamic";

import Hero from "@/components/Hero";

const AboutMe = dynamic(() => import("@/components/AboutMe"));
const Services = dynamic(() => import("@/components/Services"));
const Projects = dynamic(() => import("@/components/Projects"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <>
      <main>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Services></Services>
        <Projects></Projects>
        <Contact></Contact>
      </main>
    </>
  );
}
