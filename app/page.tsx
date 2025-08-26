"use client";
// import Image from "next/image";
// import { Imperial_Script, Aref_Ruqaa } from "next/font/google";
import "./home.css";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const setPosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", setPosition);

    return () => {
      window.removeEventListener("mousemove", setPosition);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-white pointer-events-none z-50"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 800, damping: 15, mass: 0.2 }}
      />
      <main>
        <Hero></Hero>

        <AboutMe></AboutMe>

        <Projects></Projects>

        <Contact></Contact>
        <Footer></Footer>
      </main>
    </>
  );
}
