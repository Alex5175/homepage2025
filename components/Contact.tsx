"use client";
// import { Figtree } from "next/font/google";
import SectionTemplate from "@/components/SectionTemplate";
import "./Contact.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { sendContactMail } from "@/app/actions";
import ContactCardNew from "@/components/ContactCardNew";
import TurnstileWidget from "@/components/TurnstileWidget";

const cards = [
  {
    icon: "/icons/telephone-handle-silhouette.png",
    text: "+43 660 6796469",
    url: "tel:+436606796469",
    key: "/icons/telephone-handle-silhouette.png",
    gradient: "bg-gradient-to-tr from-primary to-secondary",
    delaySec: 0,
  },
  {
    icon: "/icons/email.png",
    text: "office@alex-zeitlhofer.com",
    url: "mailto:office@alex-zeitlhofer.com",
    key: "/icons/email.png",
    gradient: "bg-gradient-to-br from-secondary to-primary",
    delaySec: 0.2,
  },
  {
    icon: "/icons/instagram.png",
    text: "@alexanderzeitlhofer",
    url: "https://www.instagram.com/alexanderzeitlhofer/",
    key: "/icons/instagram.png",
    gradient: "bg-gradient-to-t from-primary to-secondary",
    delaySec: 0.4,
  },
  {
    icon: "/icons/linkedin.png",
    text: "Alexander Zeitlhofer",
    url: "https://www.linkedin.com/in/alexander-zeitlhofer-71976a266/",
    key: "/icons/linkedin.png",
    gradient: "bg-gradient-to-bl from-secondary to-primary",
    delaySec: 0.6,
  },
  {
    icon: "/icons/github.png",
    text: "Alex5175",
    url: "https://github.com/Alex5175",
    key: "/icons/github.png",
    gradient: "bg-gradient-to-r from-primary to-secondary",
    delaySec: 0.8,
  },
];

export default function Contact() {
  const [form, setForm] = useState<Mailprops>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!turnstileToken) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      await sendContactMail(form, turnstileToken);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTurnstileToken(null);
      router.push("/thank-you");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-5 py-4 rounded-lg bg-white/5 border border-white/10 text-foreground text-lg placeholder-foreground/40 focus:outline-none focus:border-primary/60 transition-all";

  return (
    <SectionTemplate title="KONTAKT" theme="dark" hasFooter={true} id="contact">
      {/* Contact Form */}
      {/*<form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl mx-auto flex flex-col gap-6 my-16 "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            required
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
          />
          <input
            type="email"
            required
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
          />
        </div>
        <input
          type="text"
          required
          placeholder="Betreff"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className={inputClass}
        />
        <textarea
          required
          placeholder="Nachricht"
          rows={7}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-none`}
        />
        <TurnstileWidget
          onSuccess={setTurnstileToken}
          onExpire={() => setTurnstileToken(null)}
          onError={() => setTurnstileToken(null)}
        />
        <button
          type="submit"
          disabled={status === "sending" || !turnstileToken}
          className="self-start px-8 py-4 rounded-full bg-linear-to-r from-primary to-secondary text-foreground text-lg font-bold shadow-[0_0_30px_-8px_rgba(176,110,240,0.7)] transition-all hover:scale-[1.02] hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {status === "sending" ? "Wird gesendet..." : "Senden"}
        </button>
        {status === "error" && (
          <p className="text-red-400 text-center">
            Etwas ist schiefgelaufen. Bitte versuche es erneut.
          </p>
        )}
      </form>*/}

      {/* Contact Display for Desktop */}
      {/*<div className="relative  justify-center items-end w-full h-[80dvh]  mx-auto hidden md:flex ">
        <img
          draggable={false}
          src="/icons/contact.png"
          alt="Contact Silhuoette"
          loading="lazy"
          className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-40 h-40 lg:w-60 lg:h-60 xl:w-[30vw] xl:h-[30vw] z-10 "
        />

        <div className="absolute left-1/2 z-20 -top-10 -translate-x-1/2 -translate-y-1/2">
          <ContactCard {...cards[0]} key={cards[0].key} imageStyle="invert" />
        </div>
        <div className="absolute left-[75%] top-[25%] -translate-x-1/2 -translate-y-1/2">
          <ContactCard {...cards[1]} key={cards[1].key} imageStyle="invert" />
        </div>
        <div className="absolute left-[75%] top-[80%] -translate-x-1/2 -translate-y-1/2">
          <ContactCard {...cards[2]} key={cards[2].key} />
        </div>
        <div className="absolute left-[25%] top-[80%] -translate-x-1/2 -translate-y-1/2 ">
          <ContactCard {...cards[3]} key={cards[3].key} />
        </div>
        <div className="absolute left-[25%] top-[25%] -translate-x-1/2 -translate-y-1/2">
          <ContactCard {...cards[4]} key={cards[4].key} imageStyle="invert" />
        </div>
      </div>*/}

      <div className="grid-cols-5 p-4 gap-4 hidden md:grid  ">
        {cards.map((card) => (
          <ContactCardNew {...card} key={card.key} />
        ))}
      </div>

      <div className="grid grid-cols-2 md:hidden gap-2 w-full ">
        {cards.map((card, idx) => (
          <div className="flex justify-center items-center" key={idx}>
            <ContactCard {...card} key={card.key}></ContactCard>
          </div>
        ))}
      </div>
    </SectionTemplate>
  );
}

type ContactCardProps = {
  icon: string;
  url: string;
  text: string;
};

function ContactCard({
  icon,
  url,
  text,
  className,
  imageStyle,
}: ContactCardProps & {
  className?: string;
  delaySec?: number;
  imageStyle?: string;
}) {
  return (
    <a
      href={url}
      className={`size-40 md:w-40 md:h-48 flex flex-col z-50 p-4 justify-around bg-gradient-to-tr from-primary to-secondary rounded-lg transition-all  ${className}`}
    >
      <div className="flex justify-center">
        <img
          src={icon}
          alt={text}
          loading="lazy"
          className={`object-contain w-20 md:w-28 ${imageStyle}`}
        />
      </div>

      <p className="text-center text-foreground text-sm md:text-md font-bold hyphens-auto">
        {text}
      </p>
    </a>
  );
}
