"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  House,
  X,
  User,
  FolderRoot,
  Mail,
  MenuIcon,
  LucideIcon,
} from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1, // Delay before children start animating
      staggerChildren: 0.1, // Delay between each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const textVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0, transition: { duration: 0.2 } },
};
const buttons: { href: string; Icon: LucideIcon }[] = [
  {
    href: "/#",
    Icon: House,
  },
  {
    href: "/#aboutme",
    Icon: User,
  },
  {
    href: "/#projects",
    Icon: FolderRoot,
  },
  {
    href: "/#contact",
    Icon: Mail,
  },
];
export default function RoundMenuButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeLink, setActiveLink] = useState("/#");

  return (
    <motion.div
      className="bg-white opacity-90 flex items-center justify-center relative"
      initial={{
        borderRadius: "1rem",
        height: "6rem",
        width: "6rem",
      }}
      whileHover={{
        borderRadius: "1rem",
        height: "25rem",
        width: "6rem",
        y: "9.5rem",
      }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}>
      <motion.a
        href={"/#"}
        className={`text-black font-bold flex justify-center `}
        variants={textVariants}
        animate={isHovered ? "hidden" : "visible"}
        onClick={() => setActiveLink("/#")}>
        <MenuIcon size={48}></MenuIcon>
      </motion.a>
      <motion.div
        variants={containerVariants}
        animate={isHovered ? "visible" : "hidden"}
        className="absolute inset-0 flex flex-col justify-evenly items-center">
        <MenuButton
          href=""
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          variants={itemVariants}
          Icon={X}></MenuButton>
        {buttons.map((button, idx) => (
          <MenuButton
            key={idx}
            {...button}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            variants={itemVariants}></MenuButton>
        ))}
      </motion.div>
    </motion.div>
  );
}

function MenuButton({
  href,
  activeLink,
  setActiveLink,
  variants,
  Icon,
}: {
  href: string;
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
  variants: Variants;
  Icon: LucideIcon;
}) {
  return (
    <motion.a
      href={href}
      variants={variants}
      className={`hover:text-cyan-300 hover:opacity-100 ${
        activeLink === href ? "text-cyan-500" : "text-black"
      }`}
      onClick={() => setActiveLink(href)}>
      <Icon size={48} />
    </motion.a>
  );
}
