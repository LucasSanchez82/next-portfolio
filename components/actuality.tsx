"use client";

import { useSectionInView } from "@/lib/hooks";
import Parser from "rss-parser";
import SectionHeading from "./section-heading";
import { useEffect, useState } from "react";
import z from "zod";
import Link from "next/link";
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
    link: string;
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
      link: z.string().url(),
    })
  ),
});
export default function Actuality() {
  const { ref } = useSectionInView("VeilleTechno", 0.5);
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
      <div className="flex align-middle justify-center">
        {actus.slice(0, 3).map((actualite) => (
          <div className="m-5 flex flex-col justify-start align-middle bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            <h2 className="text-center">{actualite.title}</h2>
            <h3 className="text-center">{actualite.link}</h3>
            {actualite.description && <p className="text-center">{actualite.description}</p>}
            {actualite.items.slice(0, 3).map((item) => (
              <Link href={item.link} className="bg-gray-100 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 rounded m-5 p-2">
                <h2 className="text-center">{item.title}</h2>
                <p className="text-justify">{item.contentSnippet}</p>
                <p>{item.pubDate}</p>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
