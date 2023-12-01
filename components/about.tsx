"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Moi");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>A propos de moi</SectionHeading>
      <p className="mb-3">
        Je suis un passioné de <span className="font-medium">Conception</span>,
        de gadgets fonctionnels répondants à des besoins. Quotidiennement
        j'apprends de nouvelles choses j'améliore mes projets existants qui
        repondent à des besoins personnels
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">J'aime le dev</span> pour le plaisir de voir
        des solutions à des problèmes.
        <span className="underline"> Ce plaisir </span>
        Le plaisir de voir que la mise en production a fonctionné du premier
        coup reste une des plus belles choses qui puisse arriver dans une vie.
        <span className="font-medium">React, Next.js, Node.js, et SQL</span>.
        Enfin je suis aussi habitué à travailler avec typescript et prisma. Je
        suis en constante veille technologique, de part ma grande curiosité
      </p>

      <p>
        <span className="italic">Quand je ne developpe pas</span>, Je m'amuse à
        jouer avec mon chien lors de ballades en forets, parcs etc...
      </p>
    </motion.section>
  );
}
