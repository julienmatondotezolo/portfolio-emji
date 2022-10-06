/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "primary-color-light": "var(--primary-color-light)",
        "secondary-color": "var(--secondary-color)",
      },
    },
  },
  plugins: [],
};
