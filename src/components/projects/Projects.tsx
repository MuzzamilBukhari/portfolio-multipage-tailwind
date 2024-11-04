import Link from "next/link";
import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "QR Code Generator",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png",
      link: "https://qr-code-generator-lake.vercel.app/",
    },
    {
      id: 2,
      name: "Age Calculator",
      imageSrc:
        "https://jharkhand.studyinfo.org.in/wp-content/uploads/2024/05/age-calculator-76.png",
      link: "https://age-calculator-green-sigma.vercel.app/",
    },
    {
      id: 3,
      name: "Book Store Website",
      imageSrc:
        "https://s26162.pcdn.co/wp-content/uploads/sites/3/2023/02/used-books.jpg",
      link: "https://bookstore-mb-nu.vercel.app/",
    },
    {
      id: 4,
      name: "Blogger Website",
      imageSrc:
        "https://img.freepik.com/free-photo/online-blog_53876-123696.jpg",
      link: "https://blogger-web.vercel.app/",
    },
    {
      id: 5,
      name: "Process Control Block",
      imageSrc:
        "https://afteracademy.com/images/process-control-block-in-operating-system-banner.png",
      link: "https://github.com/MuzzamilBukhari/process-control-block.git",
    },
    {
      id: 6,
      name: "Social Network Graph",
      imageSrc: "https://miro.medium.com/v2/resize:fit:1400/0*KIKnUvzdIkp5zcDJ",
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
          These are some of the projects I&apos;ve been working on, showcasing
          my expertise in web development, React, and Data Structures &
          Algorithms (DSA). From building functional calculators to complex quiz
          systems, each project highlights my skills in TypeScript, Next.js, and
          operating systems. Feel free to explore the code on GitHub!
        </p>
        <div className=" container flex flex-wrap justify-center items-center gap-10">
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
