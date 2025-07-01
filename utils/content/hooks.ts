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
