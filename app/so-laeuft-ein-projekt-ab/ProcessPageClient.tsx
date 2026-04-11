"use client";

import "./styles.css";
import { Figtree } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const figtree = Figtree({ weight: "700", subsets: ["latin"] });

type FaqItem = { q: string; a: string | React.ReactNode };

type Section = {
  id: string;
  number: string;
  title: string;
  items: FaqItem[];
};

const sections: Section[] = [
  {
    id: "vor-zusammenarbeit",
    number: "01",
    title: "Vor der Zusammenarbeit",
    items: [
      {
        q: "Wie nehme ich Kontakt auf?",
        a: (
          <>
            Schreib mir eine kurze Nachricht über das{" "}
            <Link
              className="underline decoration-1 underline-offset-2 text-[#b06ef0] hover:text-[#c990f7] transition-colors"
              href={"/#kontakt"}
            >
              Kontaktformular
            </Link>{" "}
            oder direkt per
            <a
              className="underline decoration-1 underline-offset-2 text-secondary hover:text-[#7fd4ff] transition-colors"
              href="mailto:office@alex-zeitlhofer.com"
            >
              {" "}
              E-Mail
            </a>
            . Du brauchst noch keine fertigen Unterlagen – eine grobe Idee
            reicht völlig aus.
          </>
        ),
      },
      {
        q: "Was passiert nach meiner Anfrage?",
        a: "Ich melde mich innerhalb von 24 Stunden und schlage ein kostenloses Erstgespräch von ca. 30 Minuten vor. Dabei lernen wir uns kennen und ich bekomme ein Gefühl für dein Projekt.",
      },
      {
        q: "Wie lange dauert ein Projekt?",
        a: "Eine einfache Website ist in 3–4 Wochen fertig, komplexere Projekte dauern 6–10 Wochen. Den genauen Zeitplan legen wir gemeinsam am Anfang fest.",
      },
      {
        q: "Was kostet eine Website?",
        a: `Projekte starten ab 1.100 €. Du bekommst immer ein fixes Angebot, bevor es losgeht – keine versteckten Kosten, keine bösen Überraschungen.
        Bei Projekten mit wandelnden Anforderungen oder größerem Umfang arbeiten wir nach Stundensatz – dieser beträgt 60 €/Std.`,
      },
      {
        q: "Brauche ich schon Texte, Bilder oder ein Logo?",
        a: "Für das Erstgespräch nicht. Für die Umsetzung ja – ich erkläre dir genau, was ich brauche und wann. Falls nötig, helfe ich dir dabei oder gebe Empfehlungen.",
      },
    ],
  },
  {
    id: "waehrend-projekt",
    number: "02",
    title: "Während des Projekts",
    items: [
      {
        q: "Wie oft werde ich auf dem Laufenden gehalten?",
        a: (
          <>
            Ich halte dich während des gesamten Projekts regelmäßig auf dem
            Laufenden – per E-Mail oder WhatsApp, ganz wie du es bevorzugst.
            Sobald ein Großteil des Projekts steht, bekommst du eine Vorschau
            unter einer temporären Domain (z.B.{" "}
            <code>deinprojekt.alex-zeitlhofer.com</code>) – so kannst du die
            Website live erleben, bevor sie offiziell online geht.
          </>
        ),
      },
      {
        q: "Wie gebe ich Feedback?",
        a: "Einfach per E-Mail, WhatsApp oder in einem kurzen Call – kein kompliziertes Tool, kein großer Aufwand. Ich halte den Prozess so einfach wie möglich.",
      },
      {
        q: "Was passiert, wenn mir etwas nicht gefällt?",
        a: "Wir sprechen offen darüber und passen es an. Drei Feedback-Runden sind im Preis inbegriffen. Danach rechne ich Änderungen nach Aufwand ab.",
      },
      {
        q: "Wie viel muss ich selbst beitragen?",
        a: "Texte, Bilder und Inhalte kommen von dir – außer wir vereinbaren etwas anderes. Ich erkläre dir genau, was ich brauche und bis wann, damit der Zeitplan hält.",
      },
    ],
  },
  {
    id: "zum-ergebnis",
    number: "03",
    title: "Zum Ergebnis",
    items: [
      {
        q: "Wem gehört die fertige Website?",
        a: "Dir. Du bekommst alle Dateien, Zugänge und Rechte – vollständig und ohne Einschränkungen. Keine Abhängigkeit von mir nach dem Launch.",
      },
      {
        q: "Kann ich die Website später selbst bearbeiten?",
        a: `Ja – mit einer kleinen Einschränkung: Die meisten Websites, die ich entwickle, sind ohne CMS gebaut, weil das schnellere Ladezeiten, mehr Gestaltungsfreiheit und weniger Sicherheitsrisiken bedeutet. Eigenständige Bearbeitungen sind dabei nicht vorgesehen.

        Wenn du Inhalte regelmäßig selbst pflegen möchtest, kann ich ein CMS integrieren – das ist gegen Aufpreis möglich, und sollte beim Erstgespräch bestimmt werden. Alternativ sind kleinere Änderungen und Aktualisierungen im Wartungspaket inbegriffen, sodass du dich um nichts kümmern musst.`,
      },
      {
        q: "Was passiert nach dem Launch?",
        a: "In den ersten zwei Wochen bin ich bei Fragen direkt erreichbar. Darüber hinaus biete ich optionale Wartungspakete an.",
      },
      {
        q: "Gibt es Support und Wartung?",
        a: "Ja, als optionales Paket. Ich kümmere mich um Updates, Sicherheit und kleine Anpassungen – so bleibt deine Seite langfristig in gutem Zustand.",
      },
      {
        q: "Wie läuft das Hosting ab?",
        a: (
          <span className="flex flex-col gap-3">
            <span>Du hast drei Möglichkeiten:</span>
            <span className="flex flex-col gap-2">
              {[
                {
                  label: "Hosting bei mir – 10 €/Monat",
                  desc: "Ich kümmere mich um Server, Domain-Verwaltung und Erreichbarkeit. Du musst dich um nichts kümmern.",
                },
                {
                  label: "Hosting + Wartung bei mir – 20 €/Monat",
                  desc: "Wie oben, plus regelmäßige Updates, Sicherheitschecks und kleinere inhaltliche Änderungen sind inbegriffen.",
                },
                {
                  label: "Selbst hosten",
                  desc: "Du hostest die Website bei einem Anbieter deiner Wahl. Ich übergebe dir alle Dateien und helfe dir beim Setup – danach bist du vollständig unabhängig.",
                },
              ].map(({ label, desc }) => (
                <span key={label} className="flex gap-3 items-start">
                  <span className="mt-[0.35em] shrink-0 w-1 h-1 rounded-full bg-foreground/40" />
                  <span>
                    <span className="text-foreground/90 font-bold">
                      {label}:{" "}
                    </span>
                    <span>{desc}</span>
                  </span>
                </span>
              ))}
            </span>
          </span>
        ),
      },
    ],
  },
  // {
  //   id: "vertrauen-sicherheit",
  //   number: "04",
  //   title: "Vertrauen & Sicherheit",
  //   items: [
  //     {
  //       q: "Was passiert, wenn das Projekt scheitert?",
  //       a: "Falls wir merken, dass es nicht passt, reden wir offen darüber und finden eine faire Lösung. Bisher ist das noch nie passiert – ein gutes Erstgespräch verhindert das meistens.",
  //     },
  //     {
  //       q: "Gibt es einen Vertrag?",
  //       a: "Ja. Wir arbeiten mit einem klaren schriftlichen Vertrag, der Leistungsumfang, Zeitplan und Zahlungsmodalitäten festhält. Keine mündlichen Absprachen.",
  //     },
  //     {
  //       q: "Wie läuft die Zahlung ab?",
  //       a: "50 % bei Projektstart, 50 % bei Abnahme. Bei größeren Projekten können wir das in drei Schritte aufteilen. Rechnung per E-Mail, Zahlung per Überweisung.",
  //     },
  //   ],
  // },
];

function FaqItem({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.4, ease: "easeOut" }}
      className="border-b border-foreground/15"
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between gap-4 py-5 text-left ${figtree.className}`}
      >
        <span className="text-foreground text-[3.5vw] md:text-[1.05vw] leading-snug">
          {item.q}
        </span>
        <span
          className={`shrink-0 text-foreground/50 text-xl transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-foreground/85 text-[3vw] md:text-[1vw] leading-relaxed pb-5 font-normal max-w-2xl">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function SectionBlock({ section }: { section: Section }) {
  return (
    <section id={section.id} className="mb-12 md:mb-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-baseline gap-3 md:gap-5 mb-4 md:mb-6"
      >
        <span
          className={`section-number ${figtree.className} text-[9vw] md:text-[4.5vw] leading-none select-none`}
        >
          {section.number}
        </span>
        <h2
          className={`${figtree.className} text-foreground text-[5vw] md:text-[2.5vw] leading-none uppercase`}
        >
          {section.title}
        </h2>
      </motion.div>

      <div className="border-t border-foreground/15">
        {section.items.map((item, idx) => (
          <FaqItem key={idx} item={item} index={idx} />
        ))}
      </div>
    </section>
  );
}

export default function ProcessPageClient() {
  return (
    <div className="w-full flex justify-center py-8 px-4 md:px-8">
      <main className="w-full max-w-6xl text-white">
        {/* Hero Header */}
        <motion.header
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 md:mb-16"
        >
          <h1
            className={`${figtree.className} text-[8vw] md:text-[5.5vw] leading-none uppercase text-foreground mb-4`}
          >
            So läuft ein Projekt ab
          </h1>
          <p className="text-foreground/70 text-base md:text-lg max-w-3xl leading-relaxed">
            Du planst eine neue Website und fragst dich, wie die Zusammenarbeit
            konkret aussieht? Hier bekommst du einen ehrlichen Überblick – von
            der ersten Nachricht bis nach dem Launch.
          </p>
        </motion.header>

        {/* Sections */}
        {sections.map((section) => (
          <SectionBlock key={section.id} section={section} />
        ))}

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`bg-linear-to-tr from-primary to-secondary rounded-xl glow p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6`}
        >
          <p
            className={`${figtree.className} text-foreground text-[4vw] md:text-[1.6vw] leading-tight max-w-lg`}
          >
            Klingt das nach einer Zusammenarbeit, die zu dir passt?
          </p>
          <Link
            href="/kontakt"
            className={`${figtree.className} shrink-0 bg-foreground text-background px-6 py-3 rounded-lg text-base md:text-lg hover:scale-105 transition-transform duration-200`}
          >
            Kontakt aufnehmen
          </Link>
        </motion.section>
      </main>
    </div>
  );
}
