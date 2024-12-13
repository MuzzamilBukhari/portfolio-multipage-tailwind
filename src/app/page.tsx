"use client";

import { Button, Contact, InfoSection } from "@/components/";
import { ProjectCard } from "@/components/";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
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
  ];
  return (
    <>
      <InfoSection />
      <div className=" flex flex-col justify-center items-center py-16 bg-light_bg2 dark:bg-dark_bg2 ">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold title-font text-dark_bg2 dark:text-light_bg1 mb-4">
          My{" "}
          <span className="text-light_primary dark:text-dark_primary underline">
            Projects
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 px-8 sm:px-12 lg:px-16 mt-20 justify-center items-center gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
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
          ))}
        </div>
        <Button
          type="button"
          className="mt-12 md:mt-20 px-7 hover:border-bg1 py-3"
        >
          <Link href="/projects">See More Projects</Link>
        </Button>
      </div>

      <Contact />
    </>
  );
}
