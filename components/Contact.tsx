// import { Figtree } from "next/font/google";
import SectionTemplate from "@/components/SectionTemplate";
import "./Contact.css";
// const figtree = Figtree({
//   weight: "700",
//   subsets: ["latin"],
// });

const cards = [
  <ContactCard
    icon="/icons/telephone-handle-silhouette.png"
    text="+43 660 6796469"
    url="tel:+436606796469"
    key={"/icons/telephone-handle-silhouette.png"}
    className="float-animation delay-0"
  />,
  <ContactCard
    icon="/icons/email.png"
    text="kontakt@alex-zeitlhofer.com"
    url="mailto:kontakt@alex-zeitlhofer.com"
    key={"/icons/email.png"}
    className="float-animation delay-200"
  />,
  <ContactCard
    icon="/icons/instagram.png"
    text="@alexanderzeitlhofer"
    url="https://www.instagram.com/alexanderzeitlhofer/"
    key={"/icons/instagram.png"}
    className="float-animation delay-400"
  />,
  <ContactCard
    icon="/icons/linkedin.png"
    text="Alexander Zeitlhofer"
    url="https://www.linkedin.com/in/alexander-zeitlhofer-71976a266/"
    key={"/icons/linkedin.png"}
    className="float-animation delay-600"
  />,
  <ContactCard
    icon="/icons/github.png"
    text="Alex5175"
    url="https://github.com/Alex5175"
    key={"/icons/github.png"}
    className="float-animation delay-800"
  />,
];

export default function Contact() {
  return (
    <SectionTemplate title="KONTAKT" theme="dark" hasFooter={true} id="contact">
      {/* Contact Display for Desktop */}
      <div className="relative  justify-center items-end w-full h-[50dvh]  mx-auto hidden md:flex">
        {/* Silhouette Image */}
        <img
          src="/icons/contact.png"
          alt="Contact Silhuoette"
          className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-40 h-40 lg:w-60 lg:h-60 xl:w-[30vw] xl:h-[30vw] z-10 "
        />

        {/* Contact Cards in a circle using Tailwind and absolute positioning */}
        <div className="absolute left-1/2 -top-10 -translate-x-1/2 -translate-y-1/2">
          {cards[0]}
        </div>
        <div className="absolute left-[75%] top-[25%] -translate-x-1/2 -translate-y-1/2">
          {cards[1]}
        </div>
        <div className="absolute left-[75%] top-[80%] -translate-x-1/2 -translate-y-1/2">
          {cards[2]}
        </div>
        <div className="absolute left-[25%] top-[80%] -translate-x-1/2 -translate-y-1/2 ">
          {cards[3]}
        </div>
        <div className="absolute left-[25%] top-[25%] -translate-x-1/2 -translate-y-1/2">
          {cards[4]}
        </div>
      </div>

      {/* Contact Display for Mobile */}
      <div className="grid grid-cols-2 md:hidden gap-2 w-full ">
        {cards.map((card, idx) => (
          <div className="flex justify-center items-center" key={idx}>
            {card}
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
}: ContactCardProps & { className?: string }) {
  return (
    <a
      href={url}
      className={`w-40 h-40 md:w-40 md:h-48 flex flex-col p-4 justify-around bg-gradient-to-tr from-primary to-secondary rounded-lg transition-all ${className}`}
    >
      <div className="flex justify-center">
        <img src={icon} alt={text} className="object-contain w-20 md:w-28" />
      </div>

      <p className="text-center text-foreground text-sm md:text-md font-bold hyphens-auto">
        {text}
      </p>
    </a>
  );
}
