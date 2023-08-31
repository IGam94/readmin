/** @type {import('tailwindcss').Config} */

const tailwindConfig = {
  important: true,

  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  plugins: [],
};
export default tailwindConfig;
