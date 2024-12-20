import React from "react";

interface SkillCardProps {
  skill: string;
  percentage: number;
}

const SkillCard = ({ skill, percentage }: SkillCardProps) => {
  return (
    <div
      className="min-w-[500px] bg-light_bg2/40 dark:bg-dark_bg1 border-2 border-light_primary dark:border-dark_primary p-4 rounded-lg shadow-md"
      data-aos="flip-right"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-dark_bg2 dark:text-light_bg1">
          {skill}
        </h3>
        <span className="text-sm font-medium text-dark_bg2 dark:text-light_bg2">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-light_bg2 dark:bg-gray-700 rounded-full h-3">
        <div
          className="bg-light_secondary dark:bg-dark_secondary h-3 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;
