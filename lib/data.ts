import imaginarium from "@/public/imaginarium.png";
import publicom from "@/public/publicom.png";
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
    slug: "bun",
    title: "bun runtime javascript",
    url: "https://bun.sh/rss.xml",
  }
]

export const experiencesData = [
  {
    title: "Entrée en BTS SIO option SLAM",
    location: "France",
    description:
      "Le BTS SIO option SLAM m'a permis d'acquérir des compétences fondamentales en développement logiciel, gestion de bases de données et programmation web.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
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
    title: "Publicom",
    description:
      "Solution métier de gestion de panneaux publicitaires",
    tags: ["Php", "Codeigniter4", "Mysql", "Bootstrap", "MVC"],
    imageUrl: publicom,
    projectUrl: "https://publicom.lucas-sanchez.fr"
  },
  {
    title: "Imaginarium",
    description:
      "Solution métier de gestion des ressources humaines",
    tags: ["React", "Next.js14", "Mysql", "Tailwind", "shadcn"],
    imageUrl: imaginarium,
    projectUrl: "https://imaginarium.lucas-sanchez.fr"
  },
  {
    title: "Manweb",
    description:
      "Application web qui permet de noter ses lectures, l'endroit ou on peut les lires et le dernier chapitre lu",
    tags: ["React", "Next.js14", "Postgresql", "Tailwind", "shadcn"],
    imageUrl: manweb,
    projectUrl: "https://manweb.lucas-sanchez.fr"
  },
] as const;

export const skillsData = [
  // "HTML",
  // "CSS",
  // "JavaScript",
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Javascript",
  "Bun",
  "Git",
  "SQL",
  "Mysql",
  "PostgreSql",
  "MongoDB",
  "PHP",
  "JAVA",
  "JAVA SWING",

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
