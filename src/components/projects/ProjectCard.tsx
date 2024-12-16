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
    <div className="bg-bg2 border-2 border-secondary text-white rounded-2xl overflow-hidden">
      <div className="w-full h-full">
        <Image
          src={BlogPic}
          alt="img"
          className="w-full h-64 object-cover object-center"
        />
      </div>
      <div className="flex justify-center items-center flex-col md:pl-6 md:items-start px-4 py-6">
        <h2 className="text-2xl font-bold text-secondary">{title}</h2>
        <p className="text-myGry mt-2 text-center md:text-left">
          {description}
        </p>
        <h3 className="text-xl font-semibold text-primary mt-4">
          Key Features:
        </h3>
        <ul className="list-disc list-inside mt-2 text-gray-200">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold text-primary mt-4">Tech Stack:</h3>
        <p className="text-myGry mt-2">{techStack.join(", ")}</p>
        {link && (
          <Button type="button" className="mt-3">
            <a href={link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
