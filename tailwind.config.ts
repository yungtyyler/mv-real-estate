import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "pink-gradient":
          "linear-gradient(180deg, #FFEDFA 0%, #FFE2F7 50%, #FFC7EF 100%)",
      },
      colors: {
        coral: "#F89880",
        "golden-rod": "#FFCA38",
        "rose-quartz": "#b6a5a5",
        sage: "#bcc8bf",
        "dark-sage": "#7F9685",
        "stone-driftwood": "#a4998e",
      },
    },
  },
  plugins: [],
};
export default config;
