import React from "react";

const Input = ({
  label,
  type,
  placeholder,
  name,
  className,
  value,
  onchange,
}: {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  className?: string;
  value: string;
  onchange: (e: { target: { name: string; value: string } }) => void;
}) => {
  return (
    <>
      <label htmlFor={name} className="leading-7 text-sm">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onchange}
        placeholder={placeholder}
        className={`w-full bg-primary bg-opacity-10 rounded border border-primary/60 focus:border-primary focus:bg-transparent focus:ring-2 focus:ring-primary/40 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${className}`}
      />
    </>
  );
};

export default Input;
