import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "@/data/projects/ProjectsData";

export default function Projects() {
  return (
    <section className="bg-light_bg2 dark:bg-dark_bg1 opacity-[0.98] pt-[220px] pb-32 body-font">
      <div
        className="flex justify-center items-center flex-col text-center"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <h2 className="text-lg font-normal text-light_primary dark:text-dark_primary">
          Check out my latest projects
        </h2>
        <h1 className="sm:text-7xl text-6xl text-dark_bg2 dark:text-light_bg1 font-bold">
          Portfolio
        </h1>
        <p className="mb-8 text-dark_bg2 dark:text-light_bg1 px-8 mt-2 max-w-[600px]">
          From building functional calculators to complex quiz systems, each
          project highlights my skills.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 px-12 gap-8 justify-center items-center mt-20 ">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              features={project.features}
              link={project.projectLink}
              imgUrl={project.imgUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
