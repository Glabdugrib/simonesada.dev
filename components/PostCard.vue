<script setup lang="ts">
import type { Post } from '~/types/post.type';

defineProps<{
   post: Post;
}>();
</script>

<template>
   <div class="shadow-inverse bg-inverse col-span-1 row-span-1 rounded-lg">
      <a
         href=""
         class="hover:-translate-0.5 bg-main group flex h-full w-full cursor-pointer overflow-hidden rounded-lg border-2 transition-transform duration-150"
      >
         <picture
            class="max-w-3/10 lg:max-w-2/5 aspect-3/2 border-inverse hidden h-full overflow-hidden border-r-2 bg-red-400 sm:block"
         >
            <img
               class="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
               :src="post.image.src"
               :alt="post.image.alt"
            />
         </picture>
         <div class="text-main flex w-full flex-col gap-3 px-3 pb-2 pt-3">
            <h3
               class="font-poppins-rounded group-hover:text-accent-primary line-clamp-2 text-pretty text-xl font-bold underline-offset-2 group-hover:underline"
            >
               {{ post.title }}
            </h3>
            <div class="mb-3 flex flex-wrap gap-2">
               <span
                  v-for="tag in ['React', 'TypeScript', 'WebDev']"
                  class="font-poppins-rounded bg-accent-secondary/10 text-accent-secondary border-accent/20 hover:bg-accent-secondary/20 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium"
                  >{{ tag }}</span
               >
            </div>
            <p class="font-poppins mb-3 text-pretty font-light leading-6 lg:hidden">
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
   </div>
</template>
