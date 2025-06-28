import Link from "next/link";
export default function Footer() {
  return (
    <footer className="h-[10vh] bg-background text-foreground p-4 text-center font-bold">
      <h2 className="text-xl">© Alexander Zeitlhofer</h2>
      <Link href={"/impressum"} className="text-lg underline">
        Impressum
      </Link>
      <div></div>
    </footer>
  );
}
