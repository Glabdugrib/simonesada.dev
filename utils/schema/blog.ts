import { z } from 'zod';
import { defaultBlogMeta } from '../config/blog.defaults.js';

const { author, author_bio, author_avatar } = defaultBlogMeta;

export const blogSchema = z.object({
   title: z.string(),
   description: z.string(),
   draft: z.boolean(),
   meta: z.object({
      created_at: z.string(),
      updated_at: z.string(),
      author: z.string().default(author),
      author_bio: z.string().default(author_bio),
      author_avatar: z.string().url().default(author_avatar),
      tags: z.array(z.string()),
      cover: z.string().url(),
      reading_time: z.number(),
   }),
});
