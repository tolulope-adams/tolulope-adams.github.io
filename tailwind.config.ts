import type { Config } from "tailwindcss";

const config: Config = {
  // dark: applies when .dark, .winter, or .magical is on <html>
  darkMode: ['class', ':is(.dark,.winter,.magical)'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#2514EC",
        lavendar: "#B798E0",
        aura: {
          cyan:    'rgb(var(--aura-cyan-rgb) / <alpha-value>)',
          blue:    'rgb(var(--aura-blue-rgb) / <alpha-value>)',
          purple:  'rgb(var(--aura-purple-rgb) / <alpha-value>)',
          pink:    'rgb(var(--aura-pink-rgb) / <alpha-value>)',
          dark:    'rgb(var(--aura-dark-rgb) / <alpha-value>)',
          darker:  'rgb(var(--aura-darker-rgb) / <alpha-value>)',
        }
      },
      fontFamily: {
        instrument: ["Instrument Serif", "serif"],
        jost:       ["Jost", "sans-serif"],
        magical:    ["DashHorizon", "Instrument Serif", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
