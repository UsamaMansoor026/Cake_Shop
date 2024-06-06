/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#E5BF4A",
        "text-color": "#2a2a2a",
        "sec-text": "#0a0a0a",
        "light-gray": "#dfdfdf",
      },
    },
  },
  plugins: [],
};
