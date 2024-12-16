import React, { MouseEventHandler } from "react";

const EducationModal = ({
  isOpen,
  onClose,
  institution,
  highlights,
}: {
  isOpen: boolean;
  onClose: MouseEventHandler<HTMLButtonElement>;
  institution: string;
  highlights: string[];
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6">
        <h2 className="text-2xl font-bold text-green-400">{institution}</h2>
        <ul className="mt-4 text-gray-300 list-disc list-inside space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-6 bg-green-400 text-gray-800 px-4 py-2 rounded hover:bg-green-500 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EducationModal;
