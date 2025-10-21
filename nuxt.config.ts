import tailwindcss from '@tailwindcss/vite';
import { injectReadingTime, injectAuthorMeta } from './utils/content/hooks.js';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: '2024-11-01',
   devtools: { enabled: true },
   css: ['~/assets/css/main.css', 'primeicons/primeicons.css'],
   vite: {
      plugins: [tailwindcss()],
   },
   modules: ['@nuxt/content'],
   content: {
      build: {
         markdown: {
            highlight: false,
            // highlight: {
            //    theme: 'synthwave-84',
            //    langs: ['go'],
            // },
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
   hooks: {
      'content:file:afterParse': (ctx) => {
         injectReadingTime(ctx);
         injectAuthorMeta(ctx);
      },
   },
});
