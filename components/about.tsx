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
        Passionné de <strong>conception</strong> et de création de dispositifs pratiques, je m'efforce quotidiennement d'apprendre et d'améliorer mes projets pour répondre à des besoins spécifiques. En tant que <strong>développeur Full-stack</strong>, je trouve un plaisir immense à élaborer des solutions innovantes aux problèmes rencontrés. <em>La satisfaction</em> de réussir une mise en production du premier coup est l'une des expériences les plus gratifiantes de ma carrière. Je maîtrise <strong>React, Next.js, Node.js, et SQL</strong> et je suis également compétent en TypeScript et Prisma. Ma grande curiosité me pousse à rester constamment à l'affût des dernières avancées technologiques.
      </p>

      <p>
        <i>Lorsque je ne développe pas</i>, je prends plaisir à jouer avec mon chien lors de balades en forêt, dans les parcs et autres espaces verts.
      </p>
    </motion.section>
  );
}
