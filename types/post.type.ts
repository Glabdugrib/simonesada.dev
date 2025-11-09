export type Post = {
   id: number;
   title: string;
   description: string;
   tags: string[];
   image: PostImage;
   readTime: number;
   publishedAt: string;
};

export type PostImage = {
   src: string;
   alt: string;
};
