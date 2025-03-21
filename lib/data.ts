import imaginarium from "@/public/imaginarium.png";
import publicom from "@/public/publicom.png";
import publicom_admin from "@/public/publicom_admin.png";
import manweb from "@/public/manweb.webp";
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
  // {
  //   name: "Veille",
  //   hash: "#veille",
  // },
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
  },
];

export const experiencesData = [
  {
    title: "BTS SIO option SLAM",
    location: "France",
    description:
      "Formation en BTS SIO option SLAM, acquérant des compétences clés en développement logiciel, gestion de bases de données et programmation web.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Imaginarium - Cahier des charges et maquette PHP",
    location: "Montdoumerc",
    description:
      "Rédaction du cahier des charges, modélisation de la base de données et conception de la maquette en PHP.",
    icon: React.createElement(SiPhp),
    date: "2023",
  },
  {
    title: "Imaginarium - Migration vers Next.js",
    location: "Montdoumerc",
    description:
      "Migration du projet vers Next.js pour une meilleure interactivité et un développement plus rapide.",
    icon: React.createElement(TbBrandNextjs),
    date: "2024",
  },
  {
    title: "ESN81 - Bachelor en informatique",
    location: "Albi",
    description:
      "Participation à un Bachelor à la CCI de Castres avec des professionnels et au forum cybersécurité organisé par la CCI (15mars): ateliers crochetage, spoofing, force brute, OSINT, Flipper Zero.",
    icon: React.createElement(TbBrandNextjs),
    date: "2024",
  },
  {
    title: "France Challenges - Alternant développeur web",
    location: "Albi",
    description:
      "Alternant développeur web chez France Challenges, j'ai travaillé sur des projets en React et Strapi, découvert la communication avec un back-end via GraphQL et intégré l'API du CRM de l'entreprise dans des projets concrets.",
    icon: React.createElement(TbBrandNextjs),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Publicom",
    description: "Solution métier de gestion de panneaux publicitaires",
    tags: ["Php", "Codeigniter4", "Mysql", "Bootstrap", "MVC"],
    imageUrl: publicom,
    projectUrl: "https://publicom.lucas-sanchez.fr",
  },
  {
    title: "Publicom admin",
    description: "Solution métier de gestion des utilisateurs",
    tags: ["Java", "Swing", "Mysq", "MVC"],
    imageUrl: publicom_admin,
    projectUrl: "https://github.com/LucasSanchez82/publicom_admin",
  },
  {
    title: "Imaginarium",
    description: "Solution métier de gestion des ressources humaines",
    tags: ["React", "Next.js14", "Mysql", "Tailwind", "shadcn"],
    imageUrl: imaginarium,
    projectUrl: "https://imaginarium.lucas-sanchez.fr",
  },
  {
    title: "Manweb",
    description:
      "Application web qui permet de noter ses lectures, l'endroit ou on peut les lires et le dernier chapitre lu",
    tags: ["React", "Next.js14", "Postgresql", "Tailwind", "shadcn"],
    imageUrl: manweb,
    projectUrl: "https://manweb.lucas-sanchez.fr",
  },
] as const;

export const skillsData = [
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
  "Strapi",
  "Tailwind",
  "GraphQL",
  "Apollo",
  "Express",
  "Framer Motion",
] as const;
