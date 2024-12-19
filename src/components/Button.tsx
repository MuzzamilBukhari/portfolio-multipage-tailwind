import React, { ReactNode } from "react";

type btn = "button" | "submit" | "reset";
const Button = ({
  children,
  className,
  type,
  onclick,
  transition,
}: {
  children: ReactNode;
  className?: string;
  type: btn;
  onclick?: () => void;
  transition?: string;
}) => {
  return (
    <button
      onClick={onclick}
      type={type}
      className={`text-light_secondary dark:text-dark_secondary font-medium border-2 border-light_primary dark:border-dark_primary py-1 px-4 hover:bg-light_primary dark:hover:bg-light_primary hover:text-light_bg1 dark:hover:text-dark_bg1 hover:border-light_bg1 dark:hover:border-dark_bg1 rounded-lg text-lg duration-200 ${className}`}
      data-aos={transition}
    >
      {children}
    </button>
  );
};

export default Button;
