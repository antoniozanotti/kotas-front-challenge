// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  modules: [[
    "@nuxtjs/google-fonts",
    {
      families: {
        Quicksand: [700],
        Mulish: [400, 600, 700],
      },
    },
  ], "@nuxt/image"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      bodyAttrs: {
        class: 'bg-[#F1F4F5]',
      },
    },
  },
});