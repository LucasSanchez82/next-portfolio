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
        Je suis un passioné de{" "}
        <span className="font-medium">Conception</span>, de gadgets fonctionnels
        répondants à des besoins. Quotidiennement je teste de nouvelles choses
        ou cherche à améliorer mes conceptions existantes pour mieux répondre à
        mes <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . Je suis aussi habitué à travailler avec typescript et prisma. Je me
        documente quotidiennement sur les nouvelles technologies.
      </p>

      <p>
        <span className="italic">Quand je ne developpe pas</span>, Je m'amuse à
        jouer avec mon chien lors de ballades en forets, parcs etc...
      </p>
    </motion.section>
  );
}
