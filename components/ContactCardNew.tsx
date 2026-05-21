"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
});

type ContactCardNewProps = {
  icon: string;
  url: string;
  text: string;
  gradient?: string;
};

export default function ContactCardNew({
  icon,
  text,
  url,
  gradient = "bg-gradient-to-tr from-primary to-secondary",
}: ContactCardNewProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), {
    stiffness: 200,
    damping: 20,
  });

  const shineX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const shineY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={url}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -8 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      className={`relative aspect-[5/7] p-6 ${gradient} rounded-xl will-change-transform shadow-2xl shadow-black/40`}
    >
      {/* Inner border ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-2 rounded-lg border border-white/20"
        style={{ transform: "translateZ(10px)" }}
      />
      {/* Shine overlay */}
      <motion.div
        aria-hidden
        style={{
          background: useTransform(
            [shineX, shineY] as never,
            ([sx, sy]: string[]) =>
              `radial-gradient(circle at ${sx} ${sy}, rgba(255,255,255,0.35), transparent 50%)`,
          ),
        }}
        className="pointer-events-none absolute inset-0 rounded-xl mix-blend-overlay h-full"
      />

      {/* Top-left icon */}
      <img
        src={icon}
        alt={text}
        loading="lazy"
        className="absolute top-5 left-5 size-8 opacity-90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]"
        style={{ transform: "translateZ(20px)" }}
      />

      {/* Top-right vertical text */}
      <p
        className={`absolute top-5 right-5 font-bold text-sm [writing-mode:vertical-rl] ${figtree.className}`}
        style={{ transform: "translateZ(20px)" }}
      >
        {text}
      </p>

      {/* Bottom-left vertical text (mirrored) */}
      <p
        className={`absolute bottom-5 left-5 font-bold text-sm [writing-mode:vertical-rl] ${figtree.className}`}
        style={{ transform: "translateZ(20px) rotate(180deg)" }}
      >
        {text}
      </p>

      {/* Bottom-right icon (mirrored) */}
      <img
        src={icon}
        alt={text}
        loading="lazy"
        className="absolute bottom-5 right-5 size-8 opacity-90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]"
        style={{ transform: "translateZ(20px) rotate(180deg)" }}
      />

      {/* Center big icon */}
      <div
        className="absolute inset-0 flex justify-center items-center"
        style={{ transform: "translateZ(40px)" }}
      >
        <img
          src={icon}
          alt={text}
          loading="lazy"
          className="size-32 opacity-90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
        />
      </div>
    </motion.a>
  );
}
