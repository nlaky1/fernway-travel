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
        fern: {
          50: "#F0F7F4",
          100: "#E3EFE9",
          200: "#C6DEC3",
          300: "#9ECAA9",
          400: "#5D9E7B",
          500: "#36765B",
          600: "#275C46",
          700: "#1F4A3A", // Primary Brand Fern Green
          800: "#173A2D",
          900: "#10281F",
          950: "#091712",
        },
        gold: {
          50: "#FAF7EE",
          100: "#F5EDD7",
          200: "#EBDAAF",
          300: "#DEC383",
          400: "#CFAB5B",
          500: "#B8894A", // Primary Sunset Gold
          600: "#9E6E36",
          700: "#7F5229",
          800: "#664124",
          900: "#543621",
        },
        ivory: {
          50: "#FDFAF6",
          100: "#F6F1E7", // Primary Warm Ivory Background
          200: "#EDE4D3",
          300: "#DFD2BC",
          400: "#CABE9F",
          500: "#B3A482",
        },
        sage: {
          50: "#F4F7F2",
          100: "#E7EFE3",
          200: "#D1DFC9",
          300: "#B4CBAA",
          400: "#96B48B",
          500: "#7E9A6B", // Brand Sage
          600: "#637D52",
          700: "#4D623F",
        },
        lake: {
          50: "#F0F8FA",
          100: "#DCF0F4",
          200: "#BCE1E9",
          300: "#93CDDB",
          400: "#6FA3B5", // Brand Lake Blue
          500: "#468B9F",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        script: ["var(--font-caveat)", "cursive"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(3deg)" },
        },
        drift: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(15px, -20px) rotate(8deg)" },
          "100%": { transform: "translate(0, 0) rotate(0deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        drift: "drift 9s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
