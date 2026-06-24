"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Figtree } from "next/font/google";
import type { ReactNode } from "react";

const figtree = Figtree({ subsets: ["latin"] });

type Props = {
  title: string;
  imageUrl: string;
  alt: string;
  url: string;
  date?: string | null;
  tags: string[];
  idx: number;
  description: ReactNode;
};

export default function ProjectTile({
  title,
  imageUrl,
  alt,
  url,
  date,
  tags,
  idx,
  description,
}: Props) {
  const alignLeft = idx % 2 === 1;

  return (
    <div
      className={`w-full p-4 flex overflow-hidden ${
        alignLeft ? "flex-row-reverse" : ""
      }`}
    >
      <Link href={url}>
        <motion.img
          src={imageUrl}
          alt={alt}
          initial={{ opacity: 0, x: alignLeft ? 128 : -128 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            opacity: { delay: 0.3, duration: 0.4 },
            x: { delay: 0.3, duration: 0.4 },
            scale: { delay: 0, duration: 0.1 },
            ease: "easeIn",
          }}
          whileHover={{ scale: 1.03 }}
          className="max-w-[40vw] opacity-0 object-contain rounded-md"
        />
      </Link>

      <div className="flex-1 flex flex-col gap-3 py-4 text-foreground">
        <div>
          <h3
            className={`text-base md:text-3xl font-black ${figtree.className} ${
              alignLeft ? "text-left" : "text-right"
            }`}
          >
            {title}
          </h3>
          {date && (
            <p
              className={`${figtree.className} ${
                alignLeft ? "text-left" : "text-right"
              } tracking-tight text-md opacity-70`}
            >
              {date}
            </p>
          )}
        </div>

        <div
          className={`hidden ${
            alignLeft ? "" : "justify-end"
          } gap-2 w-full md:flex`}
        >
          {tags.map((tag) => (
            <div
              key={tag}
              className="rounded-full max-w-min px-3 py-1 border border-white/15 bg-white/5 backdrop-blur-md flex items-center"
            >
              <p className="text-foreground/80 text-center text-sm font-semibold text-nowrap">
                {tag}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`text-sm md:text-lg text-justify ${figtree.className} ${
            alignLeft ? "pr-8" : "pl-8"
          }`}
        >
          {description}
        </div>
      </div>
    </div>
  );
}
