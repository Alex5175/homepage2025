import {
  Imperial_Script,
  Aref_Ruqaa,
  Figtree,
  Parisienne,
} from "next/font/google";
const imperal = Imperial_Script({
  weight: "400",
});
const parisienne = Parisienne({
  weight: "400",
});

const aref = Aref_Ruqaa({
  weight: "400",
});
const figtree = Figtree({
  weight: "700",
});
export default function AboutMe() {
  return (
    <div
      id="aboutme"
      className="bg-primary w-screen grid grid-cols-12 snap-start h-screen "
    >
      <div className="p-16 col-span-7">
        <h2
          className={`text-foreground text-9xl text-shadow-2xs mt-8 shadow-foreground   text-left ${imperal.className} `}
        >
          Hi,
        </h2>

        <p
          className={`text-foreground text-4xl text-balance ${figtree.className} mt-4`}
        >
          ich bin Webentwickler aus Oberndorf an der Melk, mit Matura an der
          IT-HTL Ybbs.
        </p>
        <p
          className={`text-foreground text-4xl text-balance ${figtree.className} mt-4`}
        >
          Ich liebe es, durch sauberen Code und klares Design digitale Ideen zum
          Leben zu erwecken – schnell, nutzerfreundlich und zukunftsorientiert.
        </p>
      </div>
      <div className="h-full flex justify-end col-span-5">
        <img
          src="./fave_edited_sm.png"
          loading="lazy"
          className="object-cover"
          alt=""
        />
      </div>
    </div>
  );
}
