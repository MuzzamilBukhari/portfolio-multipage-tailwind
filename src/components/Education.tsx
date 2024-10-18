import React from "react";
import { IoIosSchool } from "react-icons/io";
import { FaUniversity, FaSchool } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="text-white bg-orange-950 opacity-[0.99] body-font pt-4"
    >
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-7xl text-6xl font-bold title-font text-white">
            Education
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-orange-700 hover:scale-105 duration-300 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-600 text-white flex-shrink-0">
                  <IoIosSchool />
                </div>
                <h2 className="text-white text-xl title-font font-semibold">
                  Jinnah Govt College
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Passed out from Jinnah govt College in 2021 with a 89%
                  aggregate.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-orange-700 hover:scale-105 duration-300 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-600 text-white flex-shrink-0">
                  <FaUniversity />
                </div>
                <h2 className="text-white text-xl title-font font-semibold">
                  University of Karachi
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Currently pursuing a Software Engineering degree at UBIT -
                  University of Karachi, in my second year with a CGPA of 3.2
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-orange-700 hover:scale-105 duration-300 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-600 text-white flex-shrink-0">
                  <FaSchool />
                </div>
                <h2 className="text-white text-xl title-font font-semibold">
                  Governor IT Course
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
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
