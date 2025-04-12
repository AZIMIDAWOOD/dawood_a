/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          Bungee: ['BungeeTint', 'sans-serif'],
        },
      },
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: ["light", "dark"],
    },
  }
  