/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography')],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#facc15",
          "secondary": "#d946ef",
          "accent": "#75ba1b",
          "neutral": "#4b5563",
          "base-100": "#F7F7F8",
          "info": "#A7CBE7",
          "success": "#1BC07E",
          "warning": "#F6A823",
          "error": "#F3322B",
        },
      },
    ],
  },
}