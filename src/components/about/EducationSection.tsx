import React from "react";
import EducationCard from "./EducationCard";
import { FaSchool, FaUniversity } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";

const EducationSection = () => {
  const educationData = [
    {
      institution: "University of Karachi",
      degree: "Bachelor of Science in Computer Science",
      dates: "2022 - Present",
      highlights: [
        "Data Structures & Algorithms in C++ ",
        "Operating System",
        "Object Oriented using Java",
        "Database Management System",
        "Assembly Language",
        "Computer Networking",
        "Network Security"
      ],
      icon: FaUniversity,
    },
    {
      institution: "Governor IT",
      degree: "Gen AI, Web3 & Metaverse",
      dates: "March 2024 - Present",
      highlights: [
        "Learned Next.js App Router and Sanity as Backend",
        "Built a Blog Website 'DSA Hub'",
        "Complete Ecommerce Store",
        "Learns OpenAI Agents SDK"
      ],
      icon: FaSchool,
    },
    {
      institution: "Jinnah Govt College",
      degree: "FSC Pre-Engineering",
      dates: "2019 - 2021",
      highlights: ["Achieved 89% in final exams"],
      icon: IoIosSchool,
    },
  ];

  return (
    <div className="bg-light_bg2 dark:bg-dark_bg2 py-20">
      <div
        className="flex justify-center items-center flex-col"
        data-aos="fade-up"
      >
        <h1 className="sm:text-6xl text-5xl text-dark_bg2 dark:text-light_bg1 font-bold">
          Education
        </h1>
        <p className="text-lg font-normal text-light_primary dark:text-dark_primary mb-5 text-center px-5">
          Igniting potential, shaping futures. Where knowledge meets
          opportunity.
        </p>
      </div>
      <div
        className="flex flex-wrap justify-center mt-16 gap-6"
        data-aos="fade-right"
      >
        {educationData.map((edu, index) => (
          <EducationCard
            key={index}
            institution={edu.institution}
            degree={edu.degree}
            dates={edu.dates}
            highlights={edu.highlights}
            // icon={edu.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
