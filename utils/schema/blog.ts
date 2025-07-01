import { z } from 'zod';
import { defaultBlogMeta } from '../config/blog.defaults.js';

const { author } = defaultBlogMeta;

export const blogSchema = z.object({
   title: z.string(),
   description: z.string(),
   draft: z.boolean(),
   meta: z.object({
      createdAt: z.string(),
      updatedAt: z.string(),
      author: z.object({
         fullName: z.string().default(author.fullName),
         bio: z.string().default(author.bio),
         avatar: z.string().url().default(author.avatar),
      }),
      tags: z.array(z.string()),
      cover: z.string().url(),
      readingTime: z.number().optional(),
   }),
});
