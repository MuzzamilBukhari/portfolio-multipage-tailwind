"use client";
import React from "react";
import { FaHtml5, FaJava, FaPython, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { CgVercel } from "react-icons/cg";
import SkillCard from "./SkillCard";

export default function Skill() {
  return (
    <div id="skills" className="bg-orange-950 pt-16">
      <section>
        <div className="text-center mb-12 pt-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold title-font text-white mb-4">
            Skills
          </h1>
        </div>

        <div className="container px-4 py-8 mx-auto">
          <div className="flex gap-3 justify-center items-center flex-wrap text-2xl">
            <SkillCard skill="HTML" icon={FaHtml5} />
            <SkillCard skill="CSS" icon={FaCss3Alt} />
            <SkillCard skill="Javascript" icon={DiJavascript} />
            <SkillCard skill="Typescript" icon={SiTypescript} />
            <SkillCard skill="Python" icon={FaPython} />
            <SkillCard skill="Java" icon={FaJava} />
            <SkillCard skill="C++" icon={TbBrandCpp} />
          </div>
        </div>
      </section>

      <section>
        <div className="container px-4 py-8 mx-auto">
          <div className="flex flex-wrap gap-6 justify-center items-center text-2xl">
            <SkillCard skill="Github" icon={FaGithub} />
            <SkillCard skill="Vercel" icon={CgVercel} size={50} />
          </div>
        </div>
      </section>
    </div>
  );
}
