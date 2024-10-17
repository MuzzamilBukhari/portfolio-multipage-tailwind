"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import { FaHtml5, FaJava, FaPython } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVisualstudiocode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import SkillCard from "./SkillCard";
import { DiJavascript } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { CgVercel } from "react-icons/cg";

export default function Skill() {
  return (
    <div className="bg-orange-950">
      <section>
        <div className="text-center mb-20 pt-20">
          <h1 className="sm:text-6xl text-7xl font-blacktext-center font-bold title-font text-white mb-4">
            Skills
          </h1>
          <p className="text-white text-base leading-relaxed xl:w-2/3 lg:w-3/4 mx-auto">
            I specialize in web development and graphic design, creating
            responsive, user-friendly solutions using technologies like React,
            Next.js, and Tailwind CSS. My skills also extend to Data Structures
            and Algorithms (DSA), Object-Oriented Programming (OOP), DBMS, and
            assembly language. With experience in tools like Appwrite and Google
            Sheets automation, I focus on delivering efficient and visually
            appealing results while staying current with the latest trends.
          </p>
        </div>
        <div
          className="container px-4 py-2 mx-auto flex flex-wrap justify-center items-center space-x-6
  text-2xl"
        >
          {/* Languages icons*/}
          <SkillCard skill="HTML" icon={FaHtml5} />
          <SkillCard skill="CSS" icon={FaCss3Alt} />
          <SkillCard skill="Javascript" icon={DiJavascript} />
          <SkillCard skill="Typescript" icon={SiTypescript} />
          <SkillCard skill="Python" icon={FaPython} />
          <SkillCard skill="Java" icon={FaJava} />
          <SkillCard skill="C++" icon={TbBrandCpp} />
        </div>
      </section>

      <section>
        <div
          className="container px-4 py-8 mx-auto flex flex-wrap justify-center items-center space-x-6
  text-2xl"
        >
          {/* icons */}
          <SkillCard skill="Github" icon={FaGithub} />
          <SkillCard skill="Vercel" icon={CgVercel} size={50} />
        </div>
      </section>

      {/* contatct us */}
    </div>
  );
}
