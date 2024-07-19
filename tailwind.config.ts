import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#F6F7F8",
      white: "#FFFFFF",
      primary: "#01F0D0",
      black: "#072635",
      gray: {
        light: "#F6F7F8",
        dark: "#707070",
      },
      blue: "#E0F3FA",
      pink: {
        light: "#FFE6F1",
        medium: "#FFE6E9",
        dark: "#E66FD2",
      },
      purple: {
        light: "#F4F0FE",
        dark: "#8C6FE6",
      },
    },
    fontFamily: {
      sans: ["var(--font-manrope)"],
    },
  },
  plugins: [],
};
export default config;
