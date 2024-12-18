import React from "react";
import profile from "../../../public/images/pic.jpg";
import Image from "next/image";
import EducationSection from "./EducationSection";

const About = () => {
  return (
    <section className="text-dark_bg2 dark:text-light_bg1 bg-light_bg1 dark:bg-dark_bg1 opacity-[0.99] body-font pt-12 sm:pt-24">
      <div className=" container mx-auto py-12 sm:py-24">
        <div className="flex justify-center items-center gap-12 flex-col px-12 py-20 md:pt-0 md:flex-row">
          <div className="w-[300px] rounded-xl">
            {/* Image */}
            <Image src={profile} alt={"profile"} className=" rounded-3xl" />
          </div>
          {/* Section Title */}
          <div className="pt-12 flex justify-center items-center  md:items-start flex-col">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold title-font text-center">
              About{" "}
              <span className="text-light_primary dark:text-dark_primary underline">
                me
              </span>
            </h1>
            <p className="text-dark_bg2 dark:text-light_bg1 text-lg leading-relaxed text-center md:text-left mx-auto max-w-[600px] mt-5">
              - I specialize in web development and graphic design, creating
              responsive, user-friendly solutions using technologies like React,
              Next.js, and Tailwind CSS. <br /> - My skills also extend to Data
              Structures and Algorithms (DSA), Object-Oriented Programming
              (OOP), DBMS, and assembly language. <br /> - With experience in
              tools like Appwrite and Google Sheets automation, I focus on
              delivering efficient and visually appealing results while staying
              current with the latest trends.
            </p>
          </div>
        </div>
      </div>
      <EducationSection />
    </section>
  );
};

export default About;
