"use client";

import { useSectionInView } from "@/lib/hooks";
import Parser from "rss-parser";
import SectionHeading from "./section-heading";
import { useEffect, useState } from "react";
import z from "zod";
type ActuType = {
  title: string;
  description: string;
  lastBuildDate: string;
  link: string;
  items: {
    content: string;
    contentSnippet: string;
    isoDate: string;
    pubDate: string;
    title: string;
  }[];
};
const actuSchema = z.object({
  title: z.string(),
  description: z.coerce.string(),
  lastBuildDate: z.string(),
  link: z.string(),
  items: z.array(
    z.object({
      // author: z.string().optional(),
      content: z.string(),
      contentSnippet: z.string(),
      isoDate: z.string(),
      pubDate: z.string(),
      title: z.string(),
    })
  ),
});
export default function Actuality() {
  const { ref } = useSectionInView("Projets", 0.5);
  const [actus, setActus] = useState<ActuType[]>([]);
  useEffect(() => {
    console.log("salut");
    try {
      const listFeeds = [
        {
          slug: "nextjs-blog",
          title: "Next.js Blog",
          url: "https://nextjs.org/feed.xml",
        },
        {
          slug: "vercel-blog",
          title: "Vercel Blog",
          url: "https://vercel.com/atom",
        },
      ];

      const getFeed = async (feedUrl: string) => {
        const parser = new Parser();
        const feed = await parser.parseURL(feedUrl);

        return feed;
      };
      listFeeds.map(async (feedItem) => {
        const feed = await getFeed(feedItem.url);

          console.log(feed);

          const safeActus = actuSchema.safeParse(feed);
          if (safeActus.success) {
            setActus((curr) => [...curr, safeActus.data]);
          } else {
            console.log(safeActus.error);
          }
        });
      // });
    } catch (error) {
      console.log(error);
    }
  }, [])
  return (
    <section ref={ref} id="actuality" className="scroll-mt-28 mb-28">
      <SectionHeading>Veille techno</SectionHeading>
      <div>
        {actus.slice(0, 3).map((actualite) => (
          <div className="scroll-mt-28 mb-28 sm:mb-40">
            <h2>{actualite.title}</h2>
            <h3>{actualite.link}</h3>
            <p>{actualite.description}</p>
            <p>{actualite.lastBuildDate}</p>
            {actualite.items.slice(0, 3).map((item) => (
              <div className="bg-red-400 border-blue-500 rounded m-5">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <p>{item.pubDate}</p>
                <p>{item.contentSnippet}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
