"use client";
import { useState, useEffect, useRef } from "react";
import { Figtree, JetBrains_Mono } from "next/font/google";
import { motion } from "framer-motion";

const figtree = Figtree({
  subsets: ["latin"],
  preload: true,
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const buzzwords = [
  "mit Flare",
  "mit Substanz",
  "made in Austria",
  "von Alex Zeitlhofer",
  "mit Reichweite",
  "mit Charakter",
  "mit Style",
];

const orbitingTags = [
  { label: "React", angle: 0 },
  { label: "Next.js", angle: 60 },
  { label: "TypeScript", angle: 120 },
  { label: "Node", angle: 180 },
  { label: "Tailwind", angle: 240 },
  { label: "Svelte", angle: 300 },
];

const codeLines: Array<{
  indent: number;
  tokens: Array<{ t: string; c: string }>;
}> = [
  {
    indent: 0,
    tokens: [
      { t: "const", c: "text-[#c792ea]" },
      { t: " alex ", c: "text-[#82aaff]" },
      { t: "=", c: "text-[#89ddff]" },
      { t: " {", c: "text-foreground/80" },
    ],
  },
  {
    indent: 2,
    tokens: [
      { t: "role", c: "text-[#f78c6c]" },
      { t: ": ", c: "text-foreground/60" },
      { t: '"Web Developer"', c: "text-[#c3e88d]" },
      { t: ",", c: "text-foreground/60" },
    ],
  },
  {
    indent: 2,
    tokens: [
      { t: "stack", c: "text-[#f78c6c]" },
      { t: ": [", c: "text-foreground/60" },
      { t: '"React"', c: "text-[#c3e88d]" },
      { t: ", ", c: "text-foreground/60" },
      { t: '"Tanstack"', c: "text-[#c3e88d]" },
      { t: ", ", c: "text-foreground/60" },
      { t: '"Typescript"', c: "text-[#c3e88d]" },
      { t: "],", c: "text-foreground/60" },
    ],
  },
  {
    indent: 2,
    tokens: [
      { t: "location", c: "text-[#f78c6c]" },
      { t: ": ", c: "text-foreground/60" },
      { t: '"Austria 🇦🇹"', c: "text-[#c3e88d]" },
      { t: ",", c: "text-foreground/60" },
    ],
  },
  {
    indent: 2,
    tokens: [
      { t: "available", c: "text-[#f78c6c]" },
      { t: ": ", c: "text-foreground/60" },
      { t: "true", c: "text-[#ff5874]" },
    ],
  },
  {
    indent: 0,
    tokens: [{ t: "};", c: "text-foreground/80" }],
  },
];

export default function Hero() {
  const [buzzIndex, setBuzzIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">(
    "typing",
  );
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const word = buzzwords[buzzIndex];

    if (phase === "typing") {
      if (typed.length < word.length) {
        const t = setTimeout(
          () => setTyped(word.slice(0, typed.length + 1)),
          70,
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("holding"), 1600);
      return () => clearTimeout(t);
    }

    if (phase === "holding") {
      const t = setTimeout(() => setPhase("deleting"), 800);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (typed.length > 0) {
        const t = setTimeout(
          () => setTyped(word.slice(0, typed.length - 1)),
          35,
        );
        return () => clearTimeout(t);
      }
      setBuzzIndex((i) => (i + 1) % buzzwords.length);
      setPhase("typing");
    }
  }, [typed, phase, buzzIndex]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setPointer({
        x: Math.max(0, Math.min(1, x)),
        y: Math.max(0, Math.min(1, y)),
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const parallaxX = (pointer.x - 0.5) * 20;
  const parallaxY = (pointer.y - 0.5) * 20;

  return (
    <div
      id="hero"
      ref={heroRef}
      className="relative w-screen lg:min-h-[calc(100vh-4rem)] overflow-x-clip px-6 lg:px-12 pt-10 pb-16 flex flex-col lg:flex-row items-start gap-10"
    >
      {/* LEFT — copy */}
      <div className="relative flex-1 flex flex-col gap-6 z-10">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className={`leading-[0.95] text-7xl sm:text-7xl lg:text-8xl ${figtree.className} font-black text-foreground text-left`}
        >
          <span className="block">Websites</span>
          <span
            className="block relative mt-2"
            style={{ minHeight: "calc(1.9em)" }}
          >
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              {typed}
            </span>
            <span
              aria-hidden
              className="inline-block w-[0.08em] h-[0.85em] align-middle ml-1 bg-foreground/80 animate-pulse translate-y-[-0.05em]"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className={`text-foreground text-4xl sm:text-4xl lg:text-4xl font-bold leading-tight text-left ${figtree.className}`}
        >
          <span className="text-gradient-underline-hover">
            WEB-ENTWICKLUNG/-DESIGN
          </span>{" "}
          <br />
          <span className="text-gradient-underline-hover">
            SOFTWARE ENTWICKLUNG
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap gap-3 mt-2"
        >
          <a
            href="#projects"
            className={`group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-foreground font-semibold overflow-hidden bg-linear-to-r from-primary to-secondary shadow-[0_0_30px_-8px_rgba(176,110,240,0.7)] transition-transform hover:scale-[1.03] ${figtree.className}`}
          >
            <span className="relative z-10">Projekte ansehen</span>
            <svg
              className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-foreground font-semibold hover:bg-white/10 hover:border-white/30 transition-all ${figtree.className}`}
          >
            Kontakt aufnehmen
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className={`flex items-center gap-6 mt-4 text-foreground/60 text-sm ${mono.className}`}
        >
          <div className="flex flex-col">
            <span className="text-foreground text-xl font-bold">5+</span>
            <span>Jahre Erfahrung</span>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="flex flex-col">
            <span className="text-foreground text-xl font-bold">20+</span>
            <span>Projekte</span>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="flex flex-col">
            <span className="text-foreground text-xl font-bold">100%</span>
            <span>Made in AT</span>
          </div>
        </motion.div>

        {/* Mobile-only decorative stack card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="relative lg:hidden mt-4"
        >
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 blur-3xl opacity-50"
            style={{
              background:
                "radial-gradient(circle at 30% 50%, rgba(112,39,180,0.55), transparent 60%), radial-gradient(circle at 80% 40%, rgba(62,177,255,0.45), transparent 55%)",
            }}
          />
          <div className="relative rounded-2xl border border-white/10 bg-background/60 backdrop-blur-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span
                className={`ml-2 text-xs text-foreground/50 ${mono.className}`}
              >
                stack.ts
              </span>
            </div>
            <div className="p-4 flex flex-wrap gap-2">
              {orbitingTags.map((tag, i) => (
                <motion.span
                  key={tag.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + i * 0.06 }}
                  className={`px-3 py-1 rounded-full border border-white/15 bg-white/5 text-xs text-foreground/80 ${mono.className}`}
                >
                  {tag.label}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT — code mockup + orbiting badges */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative flex-1 hidden lg:flex items-center justify-center self-stretch z-10"
        style={{
          transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        {/* Glow blob behind */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 blur-3xl opacity-60"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(112,39,180,0.55), transparent 60%), radial-gradient(circle at 70% 30%, rgba(62,177,255,0.45), transparent 55%)",
          }}
        />

        {/* Orbiting tags */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[420px] h-[420px] carousel-spin">
            {orbitingTags.map((tag) => (
              <div
                key={tag.label}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `rotate(${tag.angle}deg) translate(210px) rotate(-${tag.angle}deg) translate(-50%, -50%)`,
                }}
              >
                <span
                  className={`carousel-spin-counteract inline-block px-3 py-1 rounded-full border border-white/15 bg-background/60 backdrop-blur-md text-xs text-foreground/80 ${mono.className}`}
                >
                  {tag.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Code window */}
        <div className="relative w-[min(28rem,90%)] rounded-2xl border border-white/10 bg-background/70 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
            <span
              className={`ml-3 text-xs text-foreground/50 ${mono.className}`}
            >
              alex.ts
            </span>
          </div>
          <pre
            className={`p-5 text-[13px] leading-relaxed ${mono.className} overflow-x-hidden`}
          >
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.6 + i * 0.12 }}
                className="flex"
              >
                <span className="select-none w-6 text-right pr-3 text-foreground/30">
                  {i + 1}
                </span>
                <span style={{ paddingLeft: line.indent * 8 }}>
                  {line.tokens.map((tok, j) => (
                    <span key={j} className={tok.c}>
                      {tok.t}
                    </span>
                  ))}
                </span>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex mt-2"
            >
              <span className="select-none w-6 text-right pr-3 text-foreground/30">
                {codeLines.length + 1}
              </span>
              <span className="inline-block w-2 h-4 bg-secondary animate-pulse" />
            </motion.div>
          </pre>
        </div>
      </motion.div>
    </div>
  );
}
