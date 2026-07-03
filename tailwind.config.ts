import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        slate: "#243142",
        mist: "#f5f7fa",
        pearl: "#fbfaf7",
        navy: "#14213d",
        copper: "#b47a3c",
        sage: "#6d8b74",
        cloud: "#e7ebf0"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(20, 33, 61, 0.14)",
        lift: "0 18px 50px rgba(17, 24, 39, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;
