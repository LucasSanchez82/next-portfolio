"use client";

import { useSectionInView } from "@/lib/hooks";
import Parser from "rss-parser";
import SectionHeading from "./section-heading";
import { useState } from "react";
import z from 'zod';
type ActuType = {
  title: string,
  description: string,
  lastBuildDate: string,
  link: string,
  items: {
    author: string,
    content: string,
    contentSnippet: string,
    isoDate: string
    pubDate: string,
    title: string,
  }[]
}
const actuSchema = z.object({
  title: z.string(),
  description: z.coerce.string(),
  lastBuildDate: z.string(),
  link: z.string(),
  items: z.array(z.object({
    // author: z.string().optional(),
    content: z.string(),
    contentSnippet: z.string(),
    isoDate: z.string(),
    pubDate: z.string(),
    title: z.string(),
  }))
})
export default function Actuality() {
  const { ref } = useSectionInView("Projets", 0.5);
  const [actus, setActus] = useState<ActuType[]>([])
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
      // {
      //   slug: "vercel-blog",
      //   title: "Vercel Blog",
      //   url: "https://www.kodaps.dev/fr/rss.xml",
      // },
    ];

    const getFeed = async (feedUrl: string) => {
      const parser = new Parser();
      const feed = await parser.parseURL(feedUrl);

      return feed;
    };
    listFeeds.map(async (feedItem) => {
      const actus = await getFeed(feedItem.url)
      // const formate = actus.map(el => {
      //   return 
      // })
      const safeActus = actuSchema.safeParse(actus);
      if(safeActus.success){
        console.log('mes actus : ', safeActus.data);
      }else {
        console.log(safeActus.error);
      }
      
    });
  } catch (error) {
    console.log(error);
  }

  return (
    <section ref={ref} id="actuality" className="scroll-mt-28 mb-28">
      <SectionHeading>Veille techno</SectionHeading>
      <div>mon flux rss</div>
    </section>
  );
}
