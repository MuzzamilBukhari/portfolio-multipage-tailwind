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
      className={`bg-secondary/60 w-[280px] h-[280px] flex justify-start items-center flex-col p-5 rounded-lg hover:scale-105 transition duration-300 ${className}`}
    >
      <Link href={link} target="_blank">
        <Image
          src={image}
          alt={alt}
          width={40}
          height={40}
          className="rounded-t-lg w-full object-cover h-40 border-2 border-primary"
        />
        <h3 className="text-lg font-medium text-white mt-4">{name}</h3>
      </Link>
    </div>
  );
};

export default ProjectCard;
