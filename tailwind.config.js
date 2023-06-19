/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#4eb8dd",

          "secondary": "#a9ddf3",

          "accent": "#c149ad",

          "neutral": "#ffffff",

          "base-100": "#eff3f4",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

