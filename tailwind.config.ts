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
        primary: "#69F9EE",
        // primary: "#4ade80",
        secondary: "#3FFCEE",
        myGry: "#d1d5db",
        footer: "#1F4B48",
        bg1: "#020617",
        bg2: "#0f172a",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
