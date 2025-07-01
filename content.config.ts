import { defineContentConfig, defineCollection } from '@nuxt/content';
import { blogSchema } from './utils/schema/blog.js';

export default defineContentConfig({
   collections: {
      blog: defineCollection({
         source: 'blog/*.md',
         type: 'page',
         schema: blogSchema,
      }),
   },
});
