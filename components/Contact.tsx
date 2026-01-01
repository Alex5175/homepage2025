// import { Figtree } from "next/font/google";
import SectionTemplate from "@/components/SectionTemplate";
import "./Contact.css";
import { motion } from "framer-motion";
// const figtree = Figtree({
//   weight: "700",
//   subsets: ["latin"],
// });

const cards = [
  {
    icon: "/icons/telephone-handle-silhouette.png",
    text: "+43 660 6796469",
    url: "tel:+436606796469",
    key: "/icons/telephone-handle-silhouette.png",
    delaySec: 0,
  },
  {
    icon: "/icons/email.png",
    text: "kontakt@alex-zeitlhofer.com",
    url: "mailto:kontakt@alex-zeitlhofer.com",
    key: "/icons/email.png",
    delaySec: 0.2,
  },
  {
    icon: "/icons/instagram.png",
    text: "@alexanderzeitlhofer",
    url: "https://www.instagram.com/alexanderzeitlhofer/",
    key: "/icons/instagram.png",
    delaySec: 0.4,
  },
  {
    icon: "/icons/linkedin.png",
    text: "Alexander Zeitlhofer",
    url: "https://www.linkedin.com/in/alexander-zeitlhofer-71976a266/",
    key: "/icons/linkedin.png",
    delaySec: 0.6,
  },
  {
    icon: "/icons/github.png",
    text: "Alex5175",
    url: "https://github.com/Alex5175",
    key: "/icons/github.png",
    delaySec: 0.8,
  },
];

export default function Contact() {
  return (
    <SectionTemplate title="KONTAKT" theme="dark" hasFooter={true} id="contact">
      {/* Contact Display for Desktop */}
      <div className="relative  justify-center items-end w-full h-[80dvh]  mx-auto hidden md:flex ">
        {/* Silhouette Image */}
        <img
          draggable={false}
          src="/icons/contact.png"
          alt="Contact Silhuoette"
          loading="lazy"
          className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-40 h-40 lg:w-60 lg:h-60 xl:w-[30vw] xl:h-[30vw] z-10 "
        />

        {/* Contact Cards in a circle using Tailwind and absolute positioning */}
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
      </div>

      {/* Contact Display for Mobile */}
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
  delaySec,
  imageStyle,
}: ContactCardProps & {
  className?: string;
  delaySec: number;
  imageStyle?: string;
}) {
  return (
    <motion.a
      href={url}
      className={`size-40 md:w-40 md:h-48 flex flex-col z-50 p-4 justify-around bg-gradient-to-tr from-primary to-secondary rounded-lg transition-all  ${className}`}
      animate={{ y: [0, -16, 0, 16, 0], x: [0, -16, 0, 16, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delaySec,
      }}>
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
    </motion.a>
  );
}
