import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const isDisabled = false;

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
      <body className={`antialiased `}>
        {isDisabled ? (
          <>
            <h1 className="text-2x text-foreground">Temporary Maintenance</h1>
          </>
        ) : (
          <>
            <NavBar></NavBar>
            {children}
            <Footer></Footer>
            <Analytics></Analytics>
            <SpeedInsights></SpeedInsights>
          </>
        )}
      </body>
    </html>
  );
}
