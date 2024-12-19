import React from "react";
import Image from "next/image";
import BlogPic from "../../../public/images/blog.jpg";
import Button from "../Button";

const ProjectCard = ({
  title,
  description,
  features,
  techStack,
  link,
}: {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  link: string;
}) => {
  return (
    <div
      className="bg-light_bg1 dark:bg-dark_bg2 text-dark_bg2 dark:text-light_bg1 border-4 border-light_primary dark:border-dark_primary rounded-2xl overflow-hidden "
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      <div className="w-full h-full">
        <Image
          src={BlogPic}
          alt="img"
          className="w-full h-64 object-cover object-center"
        />
      </div>
      <div className="flex justify-center items-center flex-col md:pl-6 md:items-start px-4 py-6">
        <h2 className="text-2xl font-bold text-light_secondary dark:text-dark_secondary">
          {title}
        </h2>
        <p className="text-dark_bg2 dark:text-myGry mt-2 text-center md:text-left">
          {description}
        </p>
        <h3 className="text-xl font-semibold text-light_primary dark:text-dark_primary mt-4">
          Key Features:
        </h3>
        <ul className="list-disc list-inside mt-2 text-dark_bg2 dark:text-gray-200 text-left ml-2">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold text-light_primary dark:text-dark_primary mt-4">
          Tech Stack:
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-2 mt-2">
          {techStack.map((skill, i) => (
            <div
              key={i}
              className="border-2 border-light_primary dark:border-dark_primary rounded-xl px-2 py-1 "
            >
              {skill}
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center w-full mt-8">
          {link && (
            <Button type="button">
              <a href={link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
