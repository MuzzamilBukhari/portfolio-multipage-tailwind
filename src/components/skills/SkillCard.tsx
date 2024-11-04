import React from "react";
import { IconType } from "react-icons";

const SkillCard = ({
  skill,
  icon: Icon,
  size = 30,
  className,
}: {
  skill: string;
  icon: IconType;
  size?: number;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col justify-center w-28 h-28 items-center bg-white border-2 rounded-md border-primary px-4 py-4 transition-transform duration-300 ease-in-out transform hover:scale-110 ${className}`}
    >
      <Icon size={size} className="text-secondary" />
      <span className={`mt-2 text-lg text-primary font-semibold `}>
        {skill}
      </span>
    </div>
  );
};

export default SkillCard;
