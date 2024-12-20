"use client";
import React from "react";
import SkillCard from "./SkillCard";

export default function Skill() {
  const skills = [
    { id: 1, name: "React", percentage: 85 },
    { id: 2, name: "HTML & CSS", percentage: 90 },
    { id: 3, name: "JavaScript", percentage: 80 },
    { id: 4, name: "TypeScript", percentage: 75 },
    { id: 5, name: "Data Structures & Algorithms (DSA)", percentage: 70 },
    { id: 6, name: "Object-Oriented Programming (OOP)", percentage: 85 },
    { id: 7, name: "DBMS", percentage: 80 },
    { id: 8, name: "Operating Systems (OS)", percentage: 75 },
    { id: 9, name: "Assembly Language", percentage: 60 },
    { id: 10, name: "Tailwind CSS", percentage: 85 },
    { id: 11, name: "Graphic Design", percentage: 70 },
    { id: 12, name: "Next.js", percentage: 65 },
    { id: 13, name: "Sanity", percentage: 55 },
    { id: 14, name: "Git & GitHub", percentage: 60 },
    { id: 15, name: "Vercel", percentage: 70 },
    { id: 16, name: "Python", percentage: 65 },
    { id: 17, name: "Appwrite", percentage: 45 },
  ];

  return (
    <div id="Skill" className="bg-light_bg1 dark:bg-dark_bg1 py-12">
      <section className="">
        <div
          className="text-center mb-16 pt-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold title-font text-dark_bg2 dark:text-light_bg1 mb-4">
            My{" "}
            <span className="text-light_primary dark:text-dark_primary underline">
              Skills
            </span>
          </h1>
          <p className="text-dark_bg2 dark:text-light_bg1 text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto px-4 pt-8">
            Crafting solutions with code, design, and innovation
          </p>
        </div>

        <div className="flex gap-6 px-8 items-center justify-center flex-wrap">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill.name}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
