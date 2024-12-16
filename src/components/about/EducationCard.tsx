"use client";
import React, { useState } from "react";
import { FaUniversity } from "react-icons/fa";
import Button from "../Button";

const EducationCard = ({
  institution,
  degree,
  dates,
  highlights,
}: {
  institution: string;
  degree: string;
  dates: string;
  highlights: string[];
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div
      className={`bg-bg1 border-2 border-primary text-white rounded-lg shadow-lg p-6 w-80 overflow-hidden ${
        isExpanded ? "h-auto" : "h-56"
      }`}
    >
      <div className="h-28">
        <div className="flex items-center gap-2">
          <FaUniversity />
          <h2 className="text-xl font-bold text-secondary ">{institution}</h2>
        </div>
        <p className="text-myGry mt-2">{degree}</p>
        <p className="text-myGry/80 mt-1">{dates}</p>
      </div>
      <div>
        {isExpanded && (
          <ul className="mt-4 text-myGry list-disc list-inside space-y-2">
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
