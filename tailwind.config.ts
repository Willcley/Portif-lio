import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
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
          700: "#555",
          800: "#333",
          900: "#141414",
          blue: {
            100: "#eef",
            200: "#cce",
            300: "#aac",
            700: "#557",
            800: "#335",
            900: "#112",
          },
        },
      },
      boxShadow: {
        "around-md-blue-400": "0 0 12px #1ab4f0",
        "around-md-blue-500": "0 0 12px #1e63e9",
      },
    },
  },
  plugins: [],
};

export default config;
