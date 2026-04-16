import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: "#C9A96E"
      },
      backgroundImage: {
        "radial-luxe": "radial-gradient(circle at 20% 20%, rgba(201, 169, 110, 0.25), transparent 55%), radial-gradient(circle at 80% 0%, rgba(201, 169, 110, 0.15), transparent 40%)"
      }
    }
  },
  plugins: []
};

export default config;
