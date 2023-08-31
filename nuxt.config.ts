// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "assets/css/tailwind.css",
    "primevue/resources/themes/lara-light-blue/theme.css",
    "assets/css/reset.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
  ],
  build: {
    transpile: ["primevue"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},

      autoprefixer: {},
    },
  },
});
