import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        slide: "slide 2.5s linear infinite",
        "fade-in-up": "fade-in-up 1.5s ease-out forwards",
        "bounce-slow": "bounce 3s infinite",
        "gradient-rotate": "gradient-rotate 3s ease infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateY(100%)", opacity: "0.1" },
          "15%": { transform: "translateY(0)", opacity: "1" },
          "30%": { transform: "translateY(0)", opacity: "1" },
          "45%": { transform: "translateY(-100%)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0.1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "gradient-rotate": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      colors: {
        gold: {
          500: "#FFD700", // Gold color
        },
        background: "var(--background)", // Dynamic background
        foreground: "var(--foreground)", // Dynamic foreground
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;