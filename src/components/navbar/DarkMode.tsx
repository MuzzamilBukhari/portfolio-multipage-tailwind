"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import DarkPng from "../../../public/images/dark-mode-button.png";
import LightPng from "../../../public/images/light-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <Image
        src={theme == "dark" ? DarkPng : LightPng}
        alt=""
        className="w-12 cursor-pointer transition-all duration-300 drop-shadow"
        onClick={() => setTheme((prev) => (prev == "dark" ? "light" : "dark"))}
      />
    </div>
  );
};

export default DarkMode;
