import React from "react";

const Input = ({
  label,
  type,
  placeholder,
  htmlFor,
  className,
  value,
  onchange,
}: {
  label: string;
  type: string;
  placeholder: string;
  htmlFor: string;
  className?: string;
  value: string;
  onchange: (e: { target: { name: any; value: any } }) => void;
}) => {
  return (
    <>
      <label htmlFor={htmlFor} className="leading-7 text-sm ">
        {label}
      </label>
      <input
        type={type}
        name={htmlFor}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        className={`w-full bg-purple-50 bg-opacity-50 rounded border border-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${className}`}
      />
    </>
  );
};

export default Input;
