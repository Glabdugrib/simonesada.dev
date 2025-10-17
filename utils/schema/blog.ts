import { z } from 'zod';

export const blogSchema = z.object({
   title: z.string(),
   description: z.string(),
   draft: z.boolean(),
   meta: z.object({
      createdAt: z.string(),
      updatedAt: z.string(),
      author: z.string(),
      authorBio: z.string(),
      authorAvatar: z.url(),
      tags: z.array(z.string()),
      cover: z.url(),
      readingTime: z.number().optional(),
   }),
});
