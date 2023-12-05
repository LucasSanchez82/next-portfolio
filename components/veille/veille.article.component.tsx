import { articleVeille } from "@/lib/types";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ArticleVeille = ({ item, key }: { item: articleVeille; key: number }) => {
  const currDate = item.pubDate;
  const nowDate = new Date();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  const diffDate = nowDate.getTime() - currDate.getTime();

  return (
    <Link
      target="_blank"
      href={item.link}
      className="bg-gray-100 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 rounded m-5 p-2"
    >
      <motion.section
        ref={ref}
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={key}
        // transition={{ delay: 0.175 }}
      >
        <h2 className="text-center ">{item.title}</h2>
        <p className="text-justify">
          {item.contentSnippet.length < 200
            ? item.contentSnippet
            : item.contentSnippet.slice(0, 200) + "..."}
        </p>
        <p className="text-end">Il y a {Math.round(diffDate / (1000 * 3600 * 24))} jours</p>
      </motion.section>
    </Link>
  );
};

export default ArticleVeille;
