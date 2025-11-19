<script setup lang="ts">
import type { Post } from '~/types/post.type';

defineProps<{
   post: Post;
}>();
</script>

<template>
   <article :key="post.id" class="shadow-inverse bg-inverse col-span-1 rounded-lg lg:row-span-3">
      <a
         href=""
         class="bg-main border-inverse translate-on-hover group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-lg border-2"
      >
         <picture class="aspect-2/1 border-inverse w-full overflow-hidden border-b-2 bg-red-400">
            <img class="scale-on-hover" :src="post.image.src" :alt="post.image.alt" />
         </picture>
         <div class="text-main flex grow flex-col gap-2 px-4 pb-3 pt-4">
            <h3
               class="font-poppins-rounded group-hover:text-accent-primary line-clamp-2 text-pretty text-xl font-bold underline-offset-2 group-hover:underline"
            >
               {{ post.title }}
            </h3>
            <div class="mb-3 flex flex-wrap gap-2">
               <span
                  v-for="tag in ['React', 'TypeScript', 'WebDev']"
                  class="font-poppins-rounded bg-accent-secondary/10 text-accent-secondary border-accent/20 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium"
                  >{{ tag }}</span
               >
            </div>
            <p class="font-poppins mb-3 text-pretty font-light leading-7">
               {{ post.description }}
            </p>
            <div class="flex grow items-end justify-between text-sm opacity-50">
               <span class="flex items-center gap-1">
                  <i class="pi pi-clock" />
                  <span class="pb-1">{{ post.readTime }} min read</span>
               </span>
               <span class="flex items-center gap-1">
                  <i class="pi pi-calendar" />
                  {{ post.publishedAt }}
               </span>
            </div>
         </div>
      </a>
   </article>
</template>
