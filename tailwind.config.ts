import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {

    fontFamily: {
      'bigShoulders': 'Big Shoulders',
      'outfit': 'Outfit'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
      },
      colors: {
        'allmost-black': '#151515',
        'gold': '#D5966C',
        'dark-gray': '#444444',
        'white': '#FFFFFF',
      },
      screens: {
        '4k': '2560px'
      },
      gridTemplateColumns: {
        '24': 'repeat(24, 1fr)'
      },
      gridTemplateRows: {
        '24': 'repeat(24, 1fr)'
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24'
      },
      gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
      },
      gridRow: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24',
      },

      gridRowStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
      }
    },
  },
  plugins: [],
};
export default config;
