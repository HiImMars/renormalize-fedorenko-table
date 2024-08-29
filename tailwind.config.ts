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
      colors: {
        purple: {
          base: "#624DE3",
          darkBase: "#624DE3",
          light: "#F7F6FE",
          medium: "#26264F",
          dark: "#1D1E42",
          deep: "#141432",
        },
        gray: {
          base: "#E0E0E0",
          dark: "#9E9E9E",
        },
        green: { base: "#1F9254", light: "#EBF9F1" },
        orange: { base: "#CD6200", light: "#FEF2E5" },
        red: { base: "#A30D11", light: "#FBE7E8", dark: "#A30D11" },
      },
      maxWidth: {
        30: "120px",
        50: "200px",
      },
      screens: {
        lg: "900px",
      },
    },
  },
  plugins: [],
};
export default config;
