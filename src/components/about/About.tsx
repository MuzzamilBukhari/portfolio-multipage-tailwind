import React from "react";
import profile from "../../../public/images/pic.jpg";
import Image from "next/image";
import EducationSection from "./EducationSection";

const About = () => {
  return (
    <section className="text-dark_bg2 dark:text-light_bg1 bg-light_bg1 dark:bg-dark_bg1 opacity-[0.99] body-font pt-20 sm:pt-24">
      <div className=" container mx-auto py-12 sm:py-24">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold title-font text-center"
          data-aos="zoom-in"
        >
          About{" "}
          <span className="text-light_primary dark:text-dark_primary underline">
            me
          </span>
        </h1>
        <div className="flex justify-center items-center gap-12 flex-col px-12  py-20 lg:flex-row">
          <div className="w-[300px] h-full rounded-xl" data-aos="flip-left">
            {/* Image */}
            <Image
              src={profile}
              alt={"profile"}
              className=" rounded-3xl"
              height={700}
            />
          </div>
          {/* Section Title */}
          <div className=" flex justify-center items-center  md:items-start flex-col">
            <div
              className="flex justify-center items-center flex-col gap-3 text-dark_bg2 dark:text-light_bg1 text-base leading-relaxed text-left mx-auto max-w-[600px] mt-8"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <p>
                - I&apos;m a passionate full-stack web developer with a knack for crafting responsive, scalable, and user-friendly digital experiences.
              </p>
              <p>
                - Currently in my final year of university, I focus on building modern, efficient solutions using both front-end and back-end technologies. Whether it&apos;s developing smooth interfaces or architecting solid server-side logic, I thrive on turning ideas into impactful realities.
              </p>
              <p>
                - With skills in Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), DBMS, assembly language, operating systems, networking, and network security, I approach challenges with strong technical depth and a problem-solving mindset.
              </p>
              <p>
                - My journey in web development has led me to work with technologies like React, Next.js, Express.js, and PostgreSQL, enabling me to build full-stack applications that are clean, fast, and maintainable.
              </p>
              <p>
                - Feel free to explore my portfolio to see some of my recent projects. I'm always excited to connect, collaborate, and grow. If you'd like to discuss a project or simply say hello, don't hesitate to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
      <EducationSection />
    </section>
  );
};

export default About;
