import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zeitlhofer Alex",
  description: "Homepage for Alex Zeitlhofer",
  keywords: [
    "Web Developer",
    "Software Developer",
    "Software Entwicklung",
    "Programmierer",
    "Java",
    "Javascript",
    "HTML",
    "CSS",
    "React",
    "NodeJS",
    "Svelte",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased `}>{children}</body>
    </html>
  );
}
