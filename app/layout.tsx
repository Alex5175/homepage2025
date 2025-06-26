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
  title: "Alex Zeitlhofer",
  description:
    "Alex Zeitlhofer ist ein Webentwickler aus Oberndorf an der Melk. Mit einer Matura von der IT-HTL Ybbs bringt er technisches Know-how und ein Gespür für klares Design mit. Er liebt es, digitale Ideen durch sauberen Code und nutzerfreundliche Lösungen zum Leben zu erwecken.",
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
    "Österreich",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "./me_edited_no_bg_scaled2.png",
    apple: "./me_edited_no_bg_scaled2.png",
  },
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
