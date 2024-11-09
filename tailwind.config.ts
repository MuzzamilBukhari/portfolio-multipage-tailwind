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
        primary: "#C64FEC",
        // primary: "#024CAA",
        secondary: "#C254DE",
        // secondary: "#3B1C32",
        // bg1: "#030712",
        bg1: "#000000",

        bg2: "",
      },
    },
  },
  plugins: [],
};
export default config;
