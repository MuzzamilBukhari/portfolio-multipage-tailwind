import React from "react";
import { IoIosSchool } from "react-icons/io";

const EducationCard = () => {
  return (
    <div className="p-4 w-full md:w-1/2 lg:w-1/3">
      <div className="flex rounded-lg h-full bg-secondary hover:scale-105 duration-300 p-6 sm:p-8 flex-col">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white">
            <IoIosSchool />
          </div>
          <h2 className="text-white text-lg sm:text-xl font-semibold">
            Jinnah Govt College
          </h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-sm sm:text-base">
            Passed out from Jinnah Govt College in 2021 with an 89% aggregate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
