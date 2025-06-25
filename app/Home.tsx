"use client";
import React from "react";
import Hero from "./Hero";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>

      <main className="">
        <Hero></Hero>

        <div id="aboutme" className="bg-primary h-screen"></div>
        <div id="projects" className="bg-secondary h-screen"></div>

        <div id="contact" className="bg-green-300 h-screen"></div>
      </main>
    </>
  );
}
