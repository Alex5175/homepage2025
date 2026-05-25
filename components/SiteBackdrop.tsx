"use client";
import { useEffect, useRef, useState } from "react";

export default function SiteBackdrop() {
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (frame.current !== null) return;
      frame.current = requestAnimationFrame(() => {
        setPointer({
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        });
        frame.current = null;
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Mouse-following spotlight */}
      <div
        className="absolute inset-0 transition-[background] duration-300"
        style={{
          background: `radial-gradient(600px circle at ${pointer.x * 100}% ${
            pointer.y * 100
          }%, rgba(176, 110, 240, 0.18), transparent 60%)`,
        }}
      />
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 85%)",
        }}
      />
    </div>
  );
}
