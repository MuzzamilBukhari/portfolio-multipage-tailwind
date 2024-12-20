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
        "Relevant Courses: Data Structures, Algorithms, Web Development",
        "Member of Coding Club",
        "Dean's List for Academic Excellence",
      ],
      icon: FaUniversity,
    },
    {
      institution: "Governor IT",
      degree: "Next.js Web Development Course",
      dates: "March 2024 - Present",
      highlights: [
        "Learned Next.js App Router and Authentication",
        "Built a music app as a capstone project",
        "Gained advanced UI design skills using Acertinity library",
      ],
      icon: FaSchool,
    },
    {
      institution: "Jinnah Govt College",
      degree: "FSC Pre-Engineering",
      dates: "2019 - 2021",
      highlights: [
        "Achieved 85% in final exams",
        "Participated in Science Olympiad",
        "Physics Club President",
      ],
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
