import type { Metadata, Viewport } from "next";

import NavBar from "../components/NavBar";
import "./globals.css";
// import RoundMenuButton from "@/components/MenuDropdown";
// import MouseProvider from "@/components/MouseProvider";
const isDisabled = false;

export const metadata: Metadata = {
  title: "Alex Zeitlhofer – Webentwickler aus Oberndorf an der Melk",
  description:
    "Alex Zeitlhofer ist ein Webentwickler aus Oberndorf an der Melk, Niederösterreich. Webseiten-Erstellung, Web-Apps, Mobile Optimierung und Software-Entwicklung für Unternehmen und Privatpersonen in der Region.",
  keywords: [
    "Webentwickler Oberndorf an der Melk",
    "Webdesign Oberndorf an der Melk",
    "Website erstellen Oberndorf",
    "Webentwickler Niederösterreich",
    "Webdesign Niederösterreich",
    "Freelance Webentwickler Österreich",
    "Website erstellen lassen Österreich",
    "Web Developer",
    "Software Entwicklung",
    "React",
    "Next.js",
    "JavaScript",
    "HTML",
    "CSS",
    "NodeJS",
  ],
  metadataBase: new URL("https://alex-zeitlhofer.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alex Zeitlhofer – Webentwickler aus Oberndorf an der Melk",
    description:
      "Webseiten-Erstellung, Web-Apps und Software-Entwicklung aus Oberndorf an der Melk, Niederösterreich.",
    url: "https://alex-zeitlhofer.com",
    siteName: "Alex Zeitlhofer",
    locale: "de_AT",
    type: "website",
    images: [
      {
        url: "/me_edited_no_bg_scaled2.png",
        width: 800,
        height: 800,
        alt: "Alex Zeitlhofer – Webentwickler",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alexander Zeitlhofer",
  url: "https://alex-zeitlhofer.com",
  jobTitle: "Webentwickler",
  description:
    "Freelance Webentwickler aus Oberndorf an der Melk, Niederösterreich. Spezialisiert auf Webseiten-Erstellung, Web-Apps und Software-Entwicklung.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Oberndorf an der Melk",
    addressRegion: "Niederösterreich",
    addressCountry: "AT",
  },
  telephone: "+436606796469",
  email: "office@alex-zeitlhofer.com",
  sameAs: [
    "https://www.instagram.com/alexanderzeitlhofer/",
    "https://www.linkedin.com/in/alexander-zeitlhofer-71976a266/",
    "https://github.com/Alex5175",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-full">
        {isDisabled ? (
          <main className="flex-grow">
            <h1 className="text-2xl text-foreground">Temporary Maintenance</h1>
          </main>
        ) : (
          <>
            <NavBar />
            {children}
            {/* <div className="fixed right-4 top-16 transform -translate-y-1/2 z-50">
              <RoundMenuButton />
            </div> */}
          </>
        )}
      </body>
    </html>
  );
}
