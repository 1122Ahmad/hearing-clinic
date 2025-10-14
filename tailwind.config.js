/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clinic-blue': '#06A9FF',
        'clinic-red': '#E32323',
      },
    },
  },
  plugins: [],
};
