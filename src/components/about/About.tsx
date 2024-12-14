import React from "react";
import { IoIosSchool } from "react-icons/io";
import { FaUniversity, FaSchool } from "react-icons/fa";
import profile from "../../../public/images/pic.jpg";
import Image from "next/image";
import EducationCard from "./EducationCard";

const About = () => {
  const education = [
    // {
    //   id: 1,
    //   name:
    // }
  ];
  return (
    <section className="text-white bg-bg1 opacity-[0.99] border border-red-600 body-font pt-12 sm:pt-24">
      <div className=" container mx-auto px-5 py-12 sm:py-24">
        <div className="flex justify-center items-center gap-12 flex-col mt-20 md:mt-0 md:flex-row">
          <div className="w-[300px] rounded-xl">
            {/* Image */}
            <Image src={profile} alt={"profile"} className=" rounded-3xl" />
          </div>
          {/* Section Title */}
          <div className="pt-12 flex justify-center items-center  md:items-start flex-col">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold title-font text-center">
              About <span className="text-primary">me</span>
            </h1>
            <p className="text-white text-lg leading-relaxed text-center md:text-left mx-auto max-w-[600px] mt-5">
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
        {/* Education Cards */}
        <div className="flex justify-center items-center flex-col">
          <div className="flex justify-center items-center flex-col mt-24">
            <h1 className="sm:text-6xl text-5xl text-white font-bold">
              Education
            </h1>
            <p className="text-lg font-normal text-primary mb-5">
              Igniting potential, shaping futures. Where knowledge meets
              opportunity.
            </p>
          </div>

          <div className="flex flex-wrap m-4 pt-8">
            {/* Card 1 - Jinnah Govt College */}
            <EducationCard />

            {/* Card 2 - University of Karachi */}
            <div className="p-4 w-full md:w-1/2 lg:w-1/3">
              <div className="flex rounded-lg h-full bg-secondary hover:scale-105 duration-300 p-6 sm:p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white">
                    <FaUniversity />
                  </div>
                  <h2 className="text-white text-lg sm:text-xl font-semibold">
                    University of Karachi
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-sm sm:text-base">
                    Currently pursuing a Software Engineering degree at UBIT -
                    University of Karachi, in my second year with a CGPA of 3.2.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Governor IT Course */}
            <div className="p-4 w-full lg:w-1/3">
              <div className="flex rounded-lg h-full bg-secondary hover:scale-105 duration-300 p-6 sm:p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white">
                    <FaSchool />
                  </div>
                  <h2 className="text-white text-lg sm:text-xl font-semibold">
                    Governor IT Course
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-sm sm:text-base">
                    Pursuing the IT course at Governor House to expand knowledge
                    and skills in technology, programming, and software
                    development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
