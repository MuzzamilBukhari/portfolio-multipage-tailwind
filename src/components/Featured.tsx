import projects from "@/data/projects/ProjectsData";
import React from "react";
import { ProjectCard } from ".";
import { Button } from ".";
import Link from "next/link";

const Featured = () => {
  const featuredProjects = projects.filter((project) => project.featured);
  return (
    <div className=" flex flex-col justify-center items-center py-16 bg-light_bg2 dark:bg-dark_bg2 ">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold title-font text-dark_bg2 dark:text-light_bg1 mb-4">
        My{" "}
        <span className="text-light_primary dark:text-dark_primary underline">
          Projects
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 px-8 sm:px-12 lg:px-16 mt-20 justify-center items-center gap-8">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            features={project.features}
            techStack={project.techStack}
            link={project.projectLink}
            imgUrl={project.imgUrl}
          />
        ))}
      </div>
      <Button
        type="button"
        className="mt-12 md:mt-20 px-7 hover:border-bg1 py-3"
      >
        <Link href="/projects">See More Projects</Link>
      </Button>
    </div>
  );
};

export default Featured;
