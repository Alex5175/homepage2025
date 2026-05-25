import { Figtree } from "next/font/google";
import React from "react";
import "./SectionTemplate.css";

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
  // hasFooter = false,
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
      className={`w-full max-w-screen p-8
         pt-12  ${
           theme === "dark" ? "bg-background/0" : "bg-foreground/0"
         } flex flex-col overflow-auto`} // <-- add overflow-auto here
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // Remove height property
      }}
    >
      {/* Place Title, either with predesigned Style, or the given React Node */}
      {isReactNode(title) ? (
        title
      ) : (
        <h2
          className={`${
            theme === "dark" ? "text-foreground" : "text-background"
          } text-5xl md:text-7xl leading-none ${
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
          } text-3xl md:text-5xl leading-none ${
            figtree.className
          } text-${titlePosition} mb-4 uppercase`}
        >
          {subTitle}
        </h3>
      )}
      <div className="w-full ">{children}</div>
    </div>
  );
}
