import React from "react";
import profile from "../../../public/images/pic.jpg";
import Image from "next/image";
import EducationSection from "./EducationSection";

const About = () => {
  return (
    <section className="text-dark_bg2 dark:text-light_bg1 bg-light_bg1 dark:bg-dark_bg1 opacity-[0.99] body-font pt-12 sm:pt-24">
      <div className=" container mx-auto py-12 sm:py-24">
        <div className="flex justify-center items-center gap-12 flex-col px-12 py-20 md:pt-0 md:flex-row">
          <div className="w-[300px] rounded-xl" data-aos="flip-left">
            {/* Image */}
            <Image src={profile} alt={"profile"} className=" rounded-3xl" />
          </div>
          {/* Section Title */}
          <div className="pt-12 flex justify-center items-center  md:items-start flex-col">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold title-font text-center"
              data-aos="zoom-in"
            >
              About{" "}
              <span className="text-light_primary dark:text-dark_primary underline">
                me
              </span>
            </h1>
            <div
              className="flex justify-center items-center flex-col gap-3 text-dark_bg2 dark:text-light_bg1 text-lg leading-relaxed text-left mx-auto max-w-[600px] mt-8"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <p>
                - I&apos;m a passionate web developer and graphic designer with
                a knack for crafting responsive and user-friendly digital
                experiences.
              </p>
              <p>
                - Currently in my second year of university, I specialize in
                building solutions that combine modern technologies with
                creative designs. Whether it&apos;s developing efficient web
                applications or designing eye-catching graphics, I thrive on
                turning ideas into impactful realities.
              </p>
              <p>
                - With skills in Data Structures and Algorithms (DSA),
                Object-Oriented Programming (OOP), DBMS, assembly language, and
                operating systems, I approach challenges with both technical
                expertise and a problem-solving mindset.
              </p>
              <p>
                - My journey in web development has led me to explore frameworks
                like React and Next.js, while my design background equips me to
                create visually appealing and intuitive interfaces. I believe in
                continuously learning and evolving, ensuring my work stays
                innovative and up-to-date.
              </p>
              <p>
                - Feel free to explore my portfolio to see some of my recent
                projects and designs. I&apos;m always excited to connect,
                collaborate, and grow. If you&apos;d like to discuss a project
                or simply say hello, don&apos;t hesitate to reach out!
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
