import { Figtree } from "next/font/google";
import ContactCard from "./ContactCard";

const figtree = Figtree({
  weight: "700",
  subsets: ["latin"],
});

const cards = [
  <ContactCard
    icon="/icons/telephone-handle-silhouette.png"
    text="+43 660 6796469"
    url="tel:+436606796469"
    key={"/icons/telephone-handle-silhouette.png"}
  />,
  <ContactCard
    icon="/icons/email.png"
    text="kontakt@alex-zeitlhofer.com"
    url="mailto:kontakt@alex-zeitlhofer.com"
    key={"/icons/email.png"}
  />,
  <ContactCard
    icon="/icons/instagram.png"
    text="@alexanderzeitlhofer"
    url="https://www.instagram.com/alexanderzeitlhofer/"
    key={"/icons/instagram.png"}
  />,
  <ContactCard
    icon="/icons/linkedin.png"
    text="Alexander Zeitlhofer"
    url="https://www.linkedin.com/in/alexander-zeitlhofer-71976a266/"
    key={"/icons/linkedin.png"}
  />,
  <ContactCard
    icon="/icons/github.png"
    text="Alex5175"
    url="https://github.com/Alex5175"
    key={"/icons/github.png"}
  />,
];

export default function Contact() {
  return (
    <div
      id="contact"
      className="bg-foreground h-[90vh] p-8 overflow-hidden w-screen"
    >
      <h1
        className={`text-4xl md:text-7xl ${figtree.className} text-background mt-8 text-left w-full mb-8`}
      >
        KONTAKT
      </h1>

      {/* Contact Display for Desktop */}
      <div className="relative  justify-center items-center w-full h-4/5 mx-auto hidden md:flex">
        {/* Silhouette Image */}
        <img
          src="/icons/contact.png"
          alt="Contact Silhuoette"
          className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-40 h-40 lg:w-60 lg:h-60 xl:w-[30vw] xl:h-[30vw] z-10 "
        />

        {/* Contact Cards in a circle using Tailwind and absolute positioning */}
        <div className="absolute left-1/2 -top-8 -translate-x-1/2 -translate-y-1/2">
          {cards[0]}
        </div>
        <div className="absolute left-[75%] top-[30%] -translate-x-1/2 -translate-y-1/2">
          {cards[1]}
        </div>
        <div className="absolute left-[75%] top-[80%] -translate-x-1/2 -translate-y-1/2">
          {cards[2]}
        </div>
        <div className="absolute left-[25%] top-[80%] -translate-x-1/2 -translate-y-1/2">
          {cards[3]}
        </div>
        <div className="absolute left-[25%] top-[30%] -translate-x-1/2 -translate-y-1/2">
          {cards[4]}
        </div>
      </div>

      {/* Contact Display for Mobile */}
      <div className="grid grid-cols-2 md:hidden gap-2 w-full">
        {cards.map((card) => card)}
      </div>
    </div>
  );
}
