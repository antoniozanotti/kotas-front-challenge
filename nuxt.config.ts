// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Quicksand: [700],
          Mulish: [400, 600, 700],
        },
      },
    ],
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
