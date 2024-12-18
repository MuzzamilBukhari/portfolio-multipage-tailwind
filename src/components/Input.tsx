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
        className={`w-full bg-light_primary dark:bg-dark_primary bg-opacity-10 dark:bg-opacity-10 rounded border border-light_primary/60 dark:border-dark_primary/60 focus:border-light_primary dark:focus:border-dark_primary focus:bg-transparent focus:ring-2 focus:ring-light_primary/40 dark:focus:ring-dark_primary/40 text-base outline-none text-dark_bg1 dark:text-light_bg1 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${className}`}
      />
    </>
  );
};

export default Input;
