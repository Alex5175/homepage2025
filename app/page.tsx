"use client";
// import Image from "next/image";
// import { Imperial_Script, Aref_Ruqaa } from "next/font/google";
import "./home.css";
import React from "react";

import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="snap-container">
        <Hero></Hero>

        <AboutMe></AboutMe>

        <Projects></Projects>

        <Contact></Contact>
        <Footer></Footer>
      </main>
    </>
  );
}
