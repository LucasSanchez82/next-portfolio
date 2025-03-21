"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import myFace from "@/public/lucas-sanchez.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaEye, FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  const { ref } = useSectionInView("Accueil", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={myFace}
              alt="Lucas Sanchez image profil"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-36 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">
          Bonjour, je m'appelle <strong>Lucas Sanchez</strong>
        </span>{" "}
        <br />
        Je suis un{" "}
        <span className="font-bold">
          développeur débutant avec une orientation fullstack.
        </span>{" "}
        Grâce à mes{" "}
        <span className="font-bold">
          années d'apprentissage autonome et à ma curiosité naturelle,
        </span>{" "}
        je nourris en permanence mon savoir en{" "}
        <span className="font-bold">Javascript</span>. Animé par l'enthousiasme
        de réaliser des{" "}
        <span className="italic">sites web et applications</span>, je me
        spécialise actuellement en{" "}
        <span className="underline">React et Next.js</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium flex-wrap"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="flex flex-wrap justify-center items-center">
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105  m-2 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contactez moi ici{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <Link
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105  m-2 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="https://drive.google.com/file/d/1qipYWRqTnVB8YQYulbkCeBMk5ptuyD7_/view?usp=sharing"
            target="_blank"
          >
            Visualiser CV
            <FaEye className="opacity-60 group-hover:translate-y-1 transition" />
          </Link>
        </div>
        <div className="flex">
          <Link
            className="bg-white p-4 m-2  text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/lucas-sanchez-8ba32920a/"
            target="_blank"
          >
            <BsLinkedin />
          </Link>

          <Link
            className="bg-white p-4 m-2 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/LucasSanchez82"
            target="_blank"
          >
            <FaGithubSquare />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
