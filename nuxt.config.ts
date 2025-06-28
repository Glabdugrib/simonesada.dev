import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: '2024-11-01',
   devtools: { enabled: true },
   css: ['~/assets/css/main.css'],
   vite: {
      plugins: [tailwindcss()],
   },
   modules: ['@nuxt/content'],
   content: {
      build: {
         markdown: {
            highlight: {
               theme: 'synthwave-84',
            },
            toc: {
               depth: 3,
               searchDepth: 3,
            },
         },
      },
      renderer: {
         anchorLinks: false,
      },
   },
   app: {
      head: {
         htmlAttrs: {
            class: 'scroll-smooth',
         },
      },
   },
});
