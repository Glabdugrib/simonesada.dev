import { z } from 'zod';

export const projectSchema = z.object({
   title: z.string(),
   description: z.string().optional(),
   draft: z.boolean(),
   meta: z.object({
      createdAt: z.string(),
      updatedAt: z.string(),
      // author: z.string(),
      // authorBio: z.string(),
      // authorAvatar: z.url(),
      tags: z.array(z.string()),
      hasArticle: z.boolean(),
      cover: z
         .object({
            src: z.url(),
            alt: z.string().optional(),
         })
         .optional(),
      links: z
         .array(
            z.object({
               type: z.enum(['github', 'demo']),
               url: z.url(),
            }),
         )
         .optional(),
      readingTime: z.number().optional(),
   }),
});
