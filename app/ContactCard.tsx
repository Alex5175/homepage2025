type ContactCardProps = {
  icon: string;
  url: string;
  text: string;
};

export default function ContactCard({ icon, url, text }: ContactCardProps) {
  return (
    <a
      href={url}
      className="w-40 h-40 md:w-40 md:h-48 flex flex-col p-4 justify-around bg-gradient-to-tr from-primary to-secondary rounded-lg hover:scale-110 transition-all"
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
