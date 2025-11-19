import type { Image } from './image.type.js';

export type Project = {
   id: number;
   title: string;
   description: string;
   tags: string[];
   image: Image;
};
