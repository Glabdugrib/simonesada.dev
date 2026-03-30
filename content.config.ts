import { defineContentConfig, defineCollection } from '@nuxt/content';
import { blogSchema } from './utils/schema/blog.js';
import { projectSchema } from './utils/schema/project.js';

export default defineContentConfig({
   collections: {
      blog: defineCollection({
         source: 'blog/*.md',
         type: 'page',
         schema: blogSchema,
      }),
      projects: defineCollection({
         source: 'projects/*.md',
         type: 'page',
         schema: projectSchema,
      }),
   },
});
