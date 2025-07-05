import getProjectData from "./getProjectData";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  weight: "700",
  subsets: ["latin"],
});

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const res = await getProjectData(Number(slug));
  const data = await res.json();

  const formattedDate = new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(data.createdAt));

  return data ? (
    <div className="px-8">
      <h1
        className={`text-foreground  ${figtree.className} text-8xl uppercase`}
      >
        {data.title}
      </h1>

      <hr className="text-foreground/50" />
      <p className="text-foreground/50">{formattedDate}</p>

      <div className="w-full">
        <p className="text-foreground text-justify text-lg">
          {data.description}
        </p>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
