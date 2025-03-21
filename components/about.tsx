"use client";

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
        Passionné de <strong>conception</strong> et de création de dispositifs
        pratiques, je m'efforce quotidiennement d'apprendre et d'améliorer mes
        projets pour répondre à des besoins spécifiques. En tant que{" "}
        <strong>développeur Full-stack</strong>, je trouve un plaisir immense à
        élaborer des solutions innovantes aux problèmes rencontrés.{" "}
        <em>La satisfaction</em> de réussir une mise en production du premier
        coup est l'une des expériences les plus gratifiantes de ma carrière. Je
        maîtrise <strong>React, Next.js, Node.js, et SQL</strong> et je suis
        également compétent en TypeScript et Prisma. Ma grande curiosité me
        pousse à rester constamment à l'affût des dernières avancées
        technologiques.
      </p>

      <p className="mb-3">
        Mon entrée chez <strong>France Challenges</strong> a marqué une étape
        importante dans ma carrière, me permettant de travailler au sein d'une{" "}
        <strong>équipe dynamique</strong> et collaborative. J'ai acquis une
        expérience précieuse en participant activement à des{" "}
        <strong>réunions professionnelles</strong>, des <em>daily stand-ups</em>
        , et en suivant une méthodologie de travail en mode projet. Nous avons
        utilisé des outils tels que <strong>GitHub Projects</strong> pour
        organiser et suivre les tâches via des <em>drafts</em>, <em>issues</em>,
        et <em>pull requests</em>, favorisant une gestion efficace et structurée
        des projets. Cette expérience m'a permis de renforcer mes compétences en
        communication, en collaboration et en gestion de projet tout en
        continuant à développer des solutions techniques robustes et innovantes.
      </p>
    </motion.section>
  );
}
