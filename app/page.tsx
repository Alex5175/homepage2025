"use client";
import Image from "next/image";
import NavBar from "./NavBar";
import { Imperial_Script, Aref_Ruqaa } from "next/font/google";
import "./home.css";
import React, { useEffect, useState } from "react";

import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  return (
    <div id="top">
      <NavBar></NavBar>

      <main className="">
        <Hero></Hero>

        <AboutMe></AboutMe>

        <Projects></Projects>

        <Contact></Contact>
      </main>
    </div>
  );
}
