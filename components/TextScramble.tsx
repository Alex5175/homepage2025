"use client";
import React, { useState } from "react";

export default function TextScramble({
  value,
  className,
}: {
  value: string;
  className: string;
}) {
  const [hovered, setHovered] = useState(false);
  const [offsets, setOffsets] = useState<{ x: number; y: number }[]>([]);

  function handleMouseEnter() {
    // Generate random x and y offsets for each character
    setOffsets(
      value.split("").map(() => ({
        x: Math.floor(Math.random() * 10) - 12,
        y: Math.floor(Math.random() * 25) - 12,
      }))
    );
    setHovered(true);
  }

  function handleMouseLeave() {
    setHovered(false);
    setOffsets([]);
  }

  return (
    <div
      className={`absolute ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {value.split("").map((c, idx) => (
        <span
          className="relative inline-block transition-all duration-200"
          key={idx}
          style={
            hovered
              ? {
                  top: `${offsets[idx]?.y ?? 0}px`,
                  left: `${offsets[idx]?.x ?? 0}px`,
                }
              : { top: 0, left: 0 }
          }
        >
          {c}
        </span>
      ))}
    </div>
  );
}
