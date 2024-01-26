/** @type {import('tailwindcss').Config} */
const opacitySafelist = Array.from({ length: 25 }, (_, i) => `bg-opacity-[${i * 5}%]`);

export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: opacitySafelist,
};
