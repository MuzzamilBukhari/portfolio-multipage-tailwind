"use client";
import React from "react";
import { FaHtml5, FaJava, FaPython, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { CgVercel } from "react-icons/cg";
import SkillCard from "./SkillCard";

export default function Skills() {
  const languages = [
    {
      id: 1,
      name: "HTML",
      icon: FaHtml5,
    },
    {
      id: 2,
      name: "CSS",
      icon: FaCss3Alt,
    },
    {
      id: 3,
      name: "Javascript",
      icon: DiJavascript,
    },
    {
      id: 4,
      name: "Typescript",
      icon: SiTypescript,
    },
    {
      id: 5,
      name: "Python",
      icon: FaPython,
    },
    {
      id: 6,
      name: "Java",
      icon: FaJava,
    },
    {
      id: 7,
      name: "C++",
      icon: TbBrandCpp,
    },
  ];

  const platform = [
    {
      id: 1,
      name: "Github",
      icon: FaGithub,
    },
    {
      id: 2,
      name: "Vercel",
      icon: CgVercel,
    },
  ];

  return (
    <div className="bg-bg1 pt-16">
      <section>
        <div className="text-center mb-12 pt-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold title-font text-white mb-4">
            My <span className="text-primary">Skills</span>
          </h1>
        </div>

        <div className="container px-4 py-8 mx-auto">
          <div className="flex gap-5 justify-center items-center flex-wrap text-2xl">
            {languages.map((language) => (
              <SkillCard
                skill={language.name}
                icon={language.icon}
                key={language.id}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container px-4 py-8 mx-auto">
          <div className="flex flex-wrap gap-6 justify-center items-center text-2xl">
            {platform.map((platform) => (
              <SkillCard
                skill={platform.name}
                icon={platform.icon}
                key={platform.id}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
