import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        "light-bg": "#fff",
        "dark-bg": "#000",
        "light-text": "#000",
        "dark-text": "#fff",
      }
    },
  },
  plugins: [],
};
export default config;
