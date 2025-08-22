import { Figtree } from "next/font/google";
import React from "react";

function isReactNode(node: unknown): boolean {
  return React.isValidElement(node);
}

const figtree = Figtree({
  weight: "700",
  subsets: ["latin"],
});

export default function SectionTemplate({
  children,
  title,
  subTitle,
  titlePosition = "left",
  theme = "dark",
  backgroundImage,
  hasFooter = false,
  id,
}: Readonly<{
  children?: React.ReactNode;
  title: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  titlePosition?: "left" | "center" | "right";
  theme?: "dark" | "light";
  backgroundImage?: string; // New prop for background image
  hasFooter?: boolean;
  id?: string;
}>) {
  return (
    <div
      id={id}
      className={`w-screen max-w-screen p-8 ${
        hasFooter ? "min-h-[90dvh]" : "min-h-dvh"
      } pt-20 snap-start ${
        theme === "dark" ? "bg-background/0" : "bg-foreground/0"
      }`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: hasFooter ? "90dvh" : "100dvh", // Add this line
      }}
    >
      {/* Place Title, either with predesigned Style, or the given React Node */}
      {isReactNode(title) ? (
        title
      ) : (
        <h2
          className={`${
            theme === "dark" ? "text-foreground" : "text-background"
          } text-[12.5vw] md:text-[9.5vw] leading-none ${
            figtree.className
          } text-${titlePosition} uppercase`}
        >
          {title}
        </h2>
      )}

      {isReactNode(subTitle) ? (
        subTitle
      ) : (
        <h3
          className={`${
            theme === "dark" ? "text-foreground" : "text-background"
          } text-[10vw] md:text-[5vw] leading-none ${
            figtree.className
          } text-${titlePosition} mb-4 uppercase`}
        >
          {subTitle}
        </h3>
      )}

      <div className="w-full h-full">{children}</div>
    </div>
  );
}
