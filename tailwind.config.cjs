/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "lexend-deca": "Lexend Deca, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
      },
      gridTemplateColumns: {
        1: "repeat(auto-fit, minmax(24ch, 1fr));",
      },
      keyframes: {
        rainbow: {
          from: {
            filter: "hue-rotate(0deg)",
          },
          to: {
            filter: "hue-rotate(-360deg)",
          },
        },
      },
      animation: {
        rainbow: "rainbow 3s ease infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/typography")],
};
