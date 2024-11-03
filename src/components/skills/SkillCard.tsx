import React from "react";
import { IconType } from "react-icons";

const SkillCard = ({
  skill,
  icon: Icon,
  size = 30,
}: {
  skill: string;
  icon: IconType;
  size?: number;
}) => {
  return (
    <div className="flex flex-col justify-center w-28 h-28 items-center bg-white border-2 rounded-md border-orange-500 px-4 py-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
      <Icon size={size} className="text-orange-700" />
      <span className="mt-2 text-lg text-orange-500 font-semibold">
        {skill}
      </span>
    </div>
  );
};

export default SkillCard;
