"use client";

import { useSectionInView } from "@/lib/hooks";
import Parser from "rss-parser";
import SectionHeading from "./section-heading";
import { useEffect, useState } from "react";
import z from "zod";
import Link from "next/link";
import { veilleRSS } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import ArticleVeille from "./veille/veille.article.component";
type ActuType = {
  title: string;
  description: string;
  lastBuildDate: string;
  link: string;
  items: {
    content: string;
    contentSnippet: string;
    isoDate: string;
    pubDate: Date;
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
      pubDate: z.coerce.date(),
      title: z.string(),
      link: z.string().url(),
    })
  ),
});
export default function Veille() {
  const { ref } = useSectionInView("Veille", 0.5);
  const [actus, setActus] = useState<ActuType[]>([]);

  useEffect(() => {
    try {
      const getFeed = async (feedUrl: string) => {
        const parser = new Parser();
        const feed = await parser.parseURL(feedUrl);

        return feed;
      };
      veilleRSS.map(async (feedItem) => {
        // pour chaque article du feed
        const feed = await getFeed(feedItem.url);
        const safeActus = actuSchema.safeParse(feed);
        if (safeActus.success) {
          setActus((curr) => [...curr, safeActus.data]);
        } else {
          console.log(safeActus.error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="veille"
      ref={ref}
      className="scroll-mt-28 mb-28"
    >
      <SectionHeading>Veille techno</SectionHeading>
      <div className="flex align-middle justify-center flex-wrap">
        {actus.map((actualite) => (
          <div className="pt-2 m-5 flex flex-col justify-between align-middle bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            <h2 className="text-center font-">{actualite.title}</h2>

            {actualite.items.slice(0, 3).map((item, key) => (
              <ArticleVeille item={item} key={key} />
            ))}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
