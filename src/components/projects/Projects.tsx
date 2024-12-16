import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  // const projects = [
  //   {
  //     id: 1,
  //     name: "QR Code Generator",
  //     imageSrc: "/images/",
  //     link: "https://qr-code-generator-lake.vercel.app/",
  //   },
  //   {
  //     id: 2,
  //     name: "Age Calculator",
  //     imageSrc: "/images/agecal.jpg",
  //     link: "https://age-calculator-green-sigma.vercel.app/",
  //   },
  //   {
  //     id: 3,
  //     name: "Book Store Website",
  //     imageSrc: "/images/bookstore.jpg",
  //     link: "https://bookstore-mb-nu.vercel.app/",
  //   },
  //   {
  //     id: 4,
  //     name: "Blogger Website",
  //     imageSrc: "/images/blog.jpg",
  //     link: "https://blogger-web.vercel.app/",
  //   },
  //   {
  //     id: 5,
  //     name: "Process Control Block",
  //     imageSrc: "/images/pcb.png",
  //     link: "https://github.com/MuzzamilBukhari/process-control-block.git",
  //   },
  //   {
  //     id: 6,
  //     name: "Social Network Graph",
  //     imageSrc: "/images/networkgraph.jpg",
  //     link: "https://github.com/MuzzamilBukhari/DSA-Project.git",
  //   },
  // ];

  return (
    <section className="bg-bg1 opacity-[0.98] pt-[220px] pb-32 body-font">
      <div className="flex justify-center items-center flex-col text-center">
        <h2 className="text-lg font-normal text-primary">
          Check out my latest projects
        </h2>
        <h1 className="sm:text-7xl text-6xl text-white font-bold">Portfolio</h1>
        <p className="mb-8 text-white px-8 mt-2 max-w-[600px]">
          From building functional calculators to complex quiz systems, each
          project highlights my skills.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 px-12 justify-center gap-8 items-center mt-20 ">
          <ProjectCard
            title={"Online Bookstore Website"}
            description={
              "A responsive online bookstore showcasing sleek UI design, built using React and Tailwind CSS."
            }
            features={[
              "Developed a mobile-first design using modern CSS techniques.",
              "Implemented a custom hamburger menu for seamless navigation.",
              "Showcased testimonials with a smooth slider using React Slick.",
            ]}
            techStack={["React", "Tailwind CSS", "Next.js", "Appwrite"]}
            link={"https://bookstore-mb-nu.vercel.app/"}
          />
          <ProjectCard
            title={"Online Bookstore Website"}
            description={
              "A responsive online bookstore showcasing sleek UI design, built using React and Tailwind CSS."
            }
            features={[
              "Developed a mobile-first design using modern CSS techniques.",
              "Implemented a custom hamburger menu for seamless navigation.",
              "Showcased testimonials with a smooth slider using React Slick.",
            ]}
            techStack={["React", "Tailwind CSS", "Next.js", "Appwrite"]}
            link={"https://bookstore-mb-nu.vercel.app/"}
          />
          <ProjectCard
            title={"Online Bookstore Website"}
            description={
              "A responsive online bookstore showcasing sleek UI design, built using React and Tailwind CSS."
            }
            features={[
              "Developed a mobile-first design using modern CSS techniques.",
              "Implemented a custom hamburger menu for seamless navigation.",
              "Showcased testimonials with a smooth slider using React Slick.",
            ]}
            techStack={["React", "Tailwind CSS", "Next.js", "Appwrite"]}
            link={"https://bookstore-mb-nu.vercel.app/"}
          />
        </div>
        {/* <div className="container flex flex-wrap justify-center mx-auto items-center gap-8 mt-20">
          {projects.map((project) => (
            <ProjectCard2
              name={`Project ${project.id} - ${project.name}`}
              image={project.imageSrc}
              alt={`Project ${project.id}`}
              link={project.link}
              key={project.id}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
