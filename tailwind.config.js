/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: "var(--grey)",
        text: "var(--text)",
        heading: "var(--headings)",
        link: "var(--links)",
        background: "var(--background)",
      },
      fontFamily: {
        logo: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
}
