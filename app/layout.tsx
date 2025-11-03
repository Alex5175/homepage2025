import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavBar from "../components/NavBar";
import "./globals.css";
// import RoundMenuButton from "@/components/MenuDropdown";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full">
      <body className="antialiased flex flex-col min-h-full">
        {isDisabled ? (
          <main className="flex-grow">
            <h1 className="text-2xl text-foreground">Temporary Maintenance</h1>
          </main>
        ) : (
          <>
            <NavBar />
            <div>{children}</div>
            {/* <div className="fixed right-4 top-16 transform -translate-y-1/2 z-50">
              <RoundMenuButton />
            </div> */}
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}
