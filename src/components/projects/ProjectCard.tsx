import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({
  name,
  image,
  link,
  alt,
  className,
}: {
  name: string;
  image: string;
  link: string;
  alt: string;
  className?: string;
}) => {
  return (
    <div
      className={`bg-orange-800 w-[300px] h-[300px] p-5 rounded-lg hover:scale-105 hover:shadow-lg transition duration-300 ${className}`}
    >
      <Link href={link} target="_blank">
        <Image
          src={image}
          alt={alt}
          className="rounded-t-lg w-full object-cover h-40"
        />
        <h3 className="text-lg font-medium text-white mt-4">{name}</h3>
      </Link>
    </div>
  );
};

export default ProjectCard;
