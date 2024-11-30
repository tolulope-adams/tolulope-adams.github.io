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
      },
      colors:{
        "primary": "#2514EC",
        lavendar: "#B798E0"
      },
      
      fontFamily:{
        montserrat: ["Montserrat", "sans-serif"]
        // <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 100 to 900

// .montserrat-<uniquifier> {
//   font-family: 
//   font-optical-sizing: auto;
//   font-weight: <weight>;
//   font-style: normal;
// }
        // dash: ['Dash Horizon', 'Mona Sans']
      }
    },
  },
  plugins: [],
};
export default config;
