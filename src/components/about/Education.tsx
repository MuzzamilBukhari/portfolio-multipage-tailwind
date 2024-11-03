import React from "react";
import { IoIosSchool } from "react-icons/io";
import { FaUniversity, FaSchool } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="text-white bg-orange-950 opacity-[0.99] body-font pt-12 sm:pt-24"
    >
      <div className="container px-5 py-12 sm:py-24 mx-auto w-full">
        {/* Section Title */}
        <div className="flex flex-col text-center w-full mb-12 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold title-font">
            Education
          </h1>
          <p className="text-white text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-4">
            I specialize in web development and graphic design, creating
            responsive, user-friendly solutions using technologies like React,
            Next.js, and Tailwind CSS. My skills also extend to Data Structures
            and Algorithms (DSA), Object-Oriented Programming (OOP), DBMS, and
            assembly language. With experience in tools like Appwrite and Google
            Sheets automation, I focus on delivering efficient and visually
            appealing results while staying current with the latest trends.
          </p>
        </div>

        {/* Education Cards */}
        <div className="flex flex-wrap -m-4">
          {/* Card 1 - Jinnah Govt College */}
          <div className="p-4 w-full md:w-1/2 lg:w-1/3">
            <div className="flex rounded-lg h-full bg-orange-700 hover:scale-105 duration-300 p-6 sm:p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-600 text-white">
                  <IoIosSchool />
                </div>
                <h2 className="text-white text-lg sm:text-xl font-semibold">
                  Jinnah Govt College
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-sm sm:text-base">
                  Passed out from Jinnah Govt College in 2021 with an 89%
                  aggregate.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - University of Karachi */}
          <div className="p-4 w-full md:w-1/2 lg:w-1/3">
            <div className="flex rounded-lg h-full bg-orange-700 hover:scale-105 duration-300 p-6 sm:p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-600 text-white">
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
            <div className="flex rounded-lg h-full bg-orange-700 hover:scale-105 duration-300 p-6 sm:p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-600 text-white">
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
    </section>
  );
};

export default Education;
