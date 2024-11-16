import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "QR Code Generator",
      imageSrc: "/images/",
      link: "https://qr-code-generator-lake.vercel.app/",
    },
    {
      id: 2,
      name: "Age Calculator",
      imageSrc: "/images/agecal.jpg",
      link: "https://age-calculator-green-sigma.vercel.app/",
    },
    {
      id: 3,
      name: "Book Store Website",
      imageSrc: "/images/bookstore.jpg",
      link: "https://bookstore-mb-nu.vercel.app/",
    },
    {
      id: 4,
      name: "Blogger Website",
      imageSrc: "/images/blog.jpg",
      link: "https://blogger-web.vercel.app/",
    },
    {
      id: 5,
      name: "Process Control Block",
      imageSrc: "/images/pcb.png",
      link: "https://github.com/MuzzamilBukhari/process-control-block.git",
    },
    {
      id: 6,
      name: "Social Network Graph",
      imageSrc: "/images/networkgraph.jpg",
      link: "https://github.com/MuzzamilBukhari/DSA-Project.git",
    },
  ];

  return (
    <section className="bg-bg1 opacity-[0.98] pt-[220px] pb-32 body-font">
      <div className="container mx-auto text-center">
        <h1 className="sm:text-7xl text-6xl text-white font-bold">Portfolio</h1>
        <h2 className="text-lg font-normal text-primary mb-5">
          Check out my latest projects
        </h2>
        <p className="mb-8 text-white px-4">
          From building functional calculators to complex quiz systems, each
          project highlights my skills in TypeScript, Next.js, and operating
          systems. Feel free to explore the code on GitHub!
        </p>
        <div className="container flex flex-wrap justify-center mx-auto items-center gap-8 mt-20">
          {projects.map((project) => (
            <ProjectCard
              name={`Project ${project.id} - ${project.name}`}
              image={project.imageSrc}
              alt={`Project ${project.id}`}
              link={project.link}
              key={project.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
