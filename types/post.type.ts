import type { Image } from './image.type.js';

export type Post = {
   id: number;
   title: string;
   description: string;
   tags: string[];
   image: Image;
   readTime: number;
   publishedAt: string;
};
