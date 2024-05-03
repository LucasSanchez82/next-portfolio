import imaginarium from "@/public/imaginarium.png";
import manweb from "@/public/manweb.png";
import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { SiPhp } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const links = [
  {
    name: "Accueil",
    hash: "#home",
  },
  {
    name: "Moi",
    hash: "#about",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Competences",
    hash: "#skills",
  },
  {
    name: "Experiences",
    hash: "#experience",
  },
  {
    name: "Veille",
    hash: "#veille",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const veilleRSS = [
  {
    slug: "nextjs-blog",
    title: "Next.js Blog",
    url: "https://nextjs.org/feed.xml",
  },
  // {
  //   slug: "grafikart-blog",
  //   title: "Grafikart",
  //   url: "https://grafikart.fr/feed.rss",
  // },
  {
    slug: "vercel-blog",
    title: "Vercel Blog",
    url: "https://vercel.com/atom",
  },
  {
    slug: "react-blog",
    title: "react blog",
    url: "https://legacy.reactjs.org/feed.xml",
  }
]

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
      "Mise en place du cahier des charges, modélisation de la base de donnée et conception de la maquette php",
    icon: React.createElement(SiPhp),
    date: "2023",
  },
  {
    title: "Imaginarium NextJS",
    location: "MontDoumerc",
    description:
      "Migration vers NextJS, qui permet plus d'interactivites et un developpement plus rapide",
    icon: React.createElement(TbBrandNextjs),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Imaginarium",
    description:
      "Solution métier de gestion des ressources humaines",
    tags: ["React", "Next.js14", "SQL", "Tailwind", "shadcn"],
    imageUrl: imaginarium,
    projectUrl: "https://manweb.lucas-sanchez.fr"
  },
  {
    title: "Manweb",
    description:
      "Application web qui permet de noter ses lectures, l'endroit ou on peut les lires et le dernier chapitre lu",
    tags: ["React", "Next.js14", "SQL", "Tailwind", "shadcn"],
    imageUrl: manweb,
    projectUrl: "https://manweb.lucas-sanchez.fr"
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
