/** @type {import('tailwindcss').Config} */
export default {
  content: [

 "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {textShadow: {
        outline: "2px 0 black, -2px 0 black, 0 2px black, 0 -2px black",
      },},
  },
  plugins: [ function ({ addUtilities }) {
      const newUtilities = {
        ".text-outline": {
          textShadow:
            "2px 0 black, -2px 0 black, 0 2px black, 0 -2px black",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },],
}

