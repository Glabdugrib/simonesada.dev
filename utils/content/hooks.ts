import type { FileAfterParseHook } from '@nuxt/content';

export function injectReadingTime(ctx: FileAfterParseHook) {
   const { file, content } = ctx;

   const wordsPerMinute = 180;
   const text = typeof file.body === 'string' ? file.body : '';
   const wordCount = text.split(/\s+/).length;

   content.meta = {
      ...(content.meta ?? {}),
      readingTime: Math.ceil(wordCount / wordsPerMinute),
   };
}

export function injectAuthorMeta(ctx: FileAfterParseHook) {
   const { content } = ctx;

   content.meta = {
      ...(content.meta ?? {}),
      author: 'Simone Sada',
      authorBio: 'Full-Stack Engineer',
      authorAvatar:
         'https://media.licdn.com/dms/image/v2/D4E03AQFzLpDcfX-Kdw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1696547326687?e=2147483647&v=beta&t=wSnY_eQK6ztRmT8TZadVtAQ1OhQg9lGJpq4JCKz3tZc',
   };
}
