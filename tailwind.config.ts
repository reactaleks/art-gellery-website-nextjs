import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    colors: {
      'allmost-black': '#151515',
      'gold': '#D5966C',
      'dark-gray': '#444444',
      'white': '#FFFFFF'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
      fontFamily: {
        'bigShoulders': 'Big Shoulders',
        'outfit': 'Outfit'
      },
      fontSize: {
        'headingxl': '96px',
        'headingl': '70px',
        'headingm': '60px',
        'headings': '36px',
        'bodym': '22px',
        'bodys': '18px'
      },
      lineHeight: {
        'headingxl': '88px',
        'headingl': '70px',
        'headingm': '50px',
        'headings': '36px',
        'bodym': '32px',
        'bodys': '28px'
      }
    },
  },
  plugins: [],
};
export default config;
