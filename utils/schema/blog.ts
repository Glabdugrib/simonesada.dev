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
      authorAvatar: z.string().url(),
      tags: z.array(z.string()),
      cover: z.string().url(),
      readingTime: z.number().optional(),
   }),
});
