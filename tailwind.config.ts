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
        light_primary: "#14b8a6",
        light_secondary: "#0d9488",
        dark_primary: "#69F9EE",
        dark_secondary: "#3FFCEE",
        myGry: "#d1d5db",
        footer: "#1F4B48",
        light_bg1: "#ffffff",
        light_bg2: "#d1d5db",
        dark_bg1: "#020617",
        dark_bg2: "#0f172a",
      },
      keyframes: {
        moveBorder: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        moveBorder: "moveBorder 3s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
