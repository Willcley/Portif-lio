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
        blue: {
          400: "#1ab4f0",
          500: "#1e63e9",
          800: "#0b5f9e",
          900: "#084b8a",
        },
        grey: {
          100: "#e6e6e6",
          200: "#ccc",
          300: "#aaa",
          800: "#333",
          850: "#141620",
          900: "#141414",
        },
      },
      boxShadow: {
        "around-md-blue-400": "0 0 12px #1ab4f0",
      },
    },
  },
  plugins: [],
};

export default config;
