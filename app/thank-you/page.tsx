import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Danke",
  description:
    "Vielen Dank für deine Nachricht. Ich melde mich so schnell wie möglich bei dir zurück.",
  alternates: {
    canonical: "/thank-you",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYou() {
  return (
    <main className="grow flex items-center justify-center px-6 py-24 min-h-[80vh]">
      <div className="w-full max-w-2xl text-center flex flex-col items-center gap-8">
        <div className="size-20 rounded-full bg-linear-to-r from-primary to-secondary flex items-center justify-center shadow-[0_0_40px_-8px_rgba(176,110,240,0.7)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-10 text-foreground"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 className="text-5xl md:text-7xl uppercase font-bold text-foreground leading-none">
          Danke!
        </h1>

        <p className="text-foreground/80 text-lg md:text-xl max-w-xl">
          Deine Nachricht ist bei mir angekommen. Ich melde mich so schnell wie
          möglich bei dir zurück.
        </p>

        <Link
          href="/"
          className="px-8 py-4 rounded-full bg-linear-to-r from-primary to-secondary text-foreground text-lg font-bold shadow-[0_0_30px_-8px_rgba(176,110,240,0.7)] transition-all hover:scale-[1.02] hover:opacity-95"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
