import { Figtree } from "next/font/google";
import ContactCard from "./ContactCard";

const figtree = Figtree({
  weight: "700",
  subsets: ["latin"],
});

export default function Contact() {
  return (
    <div
      id="contact"
      className="bg-foreground snap-start h-[80vh] p-8 overflow-hidden"
    >
      <h1
        className={`text-4xl md:text-7xl ${figtree.className} text-background mt-8 text-left w-full mb-8`}
      >
        KONTAKT
      </h1>

      <div className="relative flex justify-center items-center w-full h-[400px] mx-auto">
        {/* Silhouette Image */}
        <img
          src="./icons/contact.png"
          alt="Contact Silhuoette"
          className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-40 h-40 lg:w-60 lg:h-60 xl:w-[30vw] xl:h-[30vw] z-10"
        />

        {/* Contact Cards in a circle using Tailwind and absolute positioning */}
        <div className="absolute left-1/2 -top-16 -translate-x-1/2 -translate-y-1/2">
          <ContactCard
            icon="./icons/telephone-handle-silhouette.png"
            text="+43 660 6796469"
            url="tel:+436606796469"
          />
        </div>
        <div className="absolute left-[75%] top-[25%] -translate-x-1/2 -translate-y-1/2">
          <ContactCard
            icon="./icons/instagram.png"
            text="@alexanderzeitlhofer"
            url="https://www.instagram.com/alexanderzeitlhofer/"
          />
        </div>
        <div className="absolute left-[75%] top-[85%] -translate-x-1/2 -translate-y-1/2">
          <ContactCard
            icon="./icons/linkedin.png"
            text="Alexander Zeitlhofer"
            url="https://www.linkedin.com/in/alexander-zeitlhofer-71976a266/"
          />
        </div>
        <div className="absolute left-[25%] top-[85%] -translate-x-1/2 -translate-y-1/2">
          <ContactCard
            icon="./icons/github.png"
            text="Alex5175"
            url="https://github.com/Alex5175"
          />
        </div>
        <div className="absolute left-[25%] top-[25%] -translate-x-1/2 -translate-y-1/2">
          <ContactCard
            icon="./icons/email.png"
            text="alex.zeitlhofer@outlook.at"
            url="mailto:alex.zeitlhofer@outlook.at"
          />
        </div>
      </div>
    </div>
  );
}
