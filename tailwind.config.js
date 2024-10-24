/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#1e3a8a",
          secondary: "#5297D0",
        },
      },
      "light",
      "dark",
      "cupcake",
    ],
  },
  theme: {
    extend: {
      colors: {
        
      },
    },
  },
  plugins: [require('daisyui'),],
};
