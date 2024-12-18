"use client";
import React, { useState } from "react";
import Button from "../Button";
import { FaUniversity } from "react-icons/fa";

const EducationCard = ({
  institution,
  degree,
  dates,
  highlights,
  // icon: Icon,
  size = 20,
}: {
  institution: string;
  degree: string;
  dates: string;
  highlights: string[];
  // icon: IconType;
  size?: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div
      className={`bg-light_bg2 dark:bg-dark_bg1 border-2 border-light_primary dark:border-dark_primary text-dark_bg2 dark:text-light_bg1 rounded-lg shadow-lg p-6 w-80 overflow-hidden ${
        isExpanded ? "h-auto" : "h-56"
      }`}
    >
      <div className="h-28">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 mr-1 p-2 inline-flex items-center justify-center rounded-full border-2 border-light_primary dark:border-dark_primary text-dark_bg2 dark:text-light_bg1">
            <FaUniversity size={size} />
          </div>
          <h2 className="text-xl font-bold text-light_secondary dark:text-dark_secondary ">
            {institution}
          </h2>
        </div>
        <p className="text-dark_bg2 dark:text-myGry mt-2">{degree}</p>
        <p className="text-dark_bg2 dark:text-myGry/80 mt-1">{dates}</p>
      </div>
      <div>
        {isExpanded && (
          <ul className="mt-4 text-dark_bg2 dark:text-myGry list-disc list-inside space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        )}
      </div>
      <Button type="button" onclick={toggleExpand} className="mt-4 ">
        {isExpanded ? "Hide Details" : "View Details"}
      </Button>
    </div>
  );
};

export default EducationCard;
