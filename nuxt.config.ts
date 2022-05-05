import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,

  css: ['@/assets/css/main.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@unocss/nuxt',
  ],

  typescript: {
    shim: false,
  },

  tailwindcss: {
    // ! tailwind.css  imported this way makes other css files which depend on tailwind functionality fail to compile
    cssPath: false,

    exposeConfig: true,
  },

  unocss: {
    uno: false,
    icons: {
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    },
  },
});
