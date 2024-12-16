import React, { ReactNode } from "react";

type btn = "button" | "submit" | "reset";
const Button = ({
  children,
  className,
  type,
  onclick,
}: {
  children: ReactNode;
  className?: string;
  type: btn;
  onclick?: () => void;
}) => {
  return (
    <button
      onClick={onclick}
      type={type}
      className={`text-secondary font-medium border-2 border-primary py-1 px-4 hover:bg-white hover:text-black hover:border-bg1 rounded-lg duration-200 text-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
