import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f97316",
        // primary: "#024CAA",
        secondary: "#ea580c",
        // secondary: "#3B1C32",
        bg1: "#431407",
        // bg1: "#091057",

        bg2: "",
      },
    },
  },
  plugins: [],
};
export default config;
