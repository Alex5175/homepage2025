import type { Metadata } from "next";
import ProcessPageClient from "./ProcessPageClient";

export const metadata: Metadata = {
  title: "So läuft ein Projekt ab - Alex Zeitlhofer Webentwicklung",
  description:
    "Wie läuft ein Webentwicklungs-Projekt ab? Hier erkläre ich dir Schritt für Schritt meinen Prozess – von der ersten Anfrage bis zum Launch und darüber hinaus.",
  keywords: ["Webentwicklung Prozess", "Zusammenarbeit", "Alex Zeitlhofer"],
};

export default function Page() {
  return <ProcessPageClient />;
}
