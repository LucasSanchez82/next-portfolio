import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import imaginarium from "@/public/imaginarium.png";
import manweb from "@/public/manweb.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Creations de projets divers",
    location: "Domicile",
    description:
      "Apprentissage des bases de programmations puis de concept propre certains framework, par exemple pour ne citer que Nextjs et ses :  app router, useQuery, re-render, hydratation, server side rendering",
    icon: React.createElement(LuGraduationCap),
    date: "2019-Aujourd'hui",
  },
  {
    title: "Imaginarium php",
    location: "Montdoumerc",
    description:
      "Premiere annee de stage, Creation cahier des charges, modelisation base de donnée et creation maquette php",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Imaginarium NextJS",
    location: "MontDoumerc",
    description:
      "Poursuite et migration vers NextJS, qui permet plus d'interactivites et un devellopement plus rapide",
    icon: React.createElement(FaReact),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Imaginarium",
    description:
      "Solution métier de gestion des ressources humaines dont s'occupe l'association L'Imaginarium",
    tags: ["React", "Next.js14", "SQL", "Tailwind", "shadcn"],
    imageUrl: imaginarium,
  },
  {
    title: "manweb",
    description:
      "Application web qui permet de noter ses lectures l'endroit ou on peut les lires et le dernier chapitre lu",
    tags: ["React", "Next.js14", "SQL", "Tailwind", "shadcn"],
    imageUrl: manweb,
  },
] as const;

export const skillsData = [
  // "HTML",
  // "CSS",
  // "JavaScript",
  "Next.js",
  "Node.js",
  "React",
  "TypeScript",
  "Git",
  "SQL",
  // "Tailwind",
  // "Prisma",
  // "MongoDB",
  // "Redux",
  // "GraphQL",
  // "Apollo",
  // "Express",
  // "Python",
  // "Django",
  // "Framer Motion",
] as const;
