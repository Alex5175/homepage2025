"use client";
import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function MouseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <div>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-white pointer-events-none  z-[99999999999]"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 700, damping: 15, mass: 0.2 }}
      />
      {children}
    </div>
  );
}
