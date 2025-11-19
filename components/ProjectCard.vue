<script setup lang="ts">
import { ar, id } from 'zod/locales';
import type { Project } from '~/types/project.type';

defineProps<{
   project: Project;
}>();

const links = [
   {
      id: 1,
      label: 'Code',
      url: '#',
      icon: 'pi pi-github',
      ariaLabel: 'View source code on GitHub',
   },
   {
      id: 2,
      label: 'Demo',
      url: '#',
      icon: 'pi pi-external-link',
      ariaLabel: 'View live demo',
   },
];
</script>

<template>
   <article
      class="shadow-inverse border-inverse bg-inverse overflow-hidden rounded-lg border-2 bg-stone-400"
   >
      <a href="/gianni" class="min-h-75 group relative flex flex-col justify-end">
         <div class="absolute inset-0">
            <img
               :src="project.image.src"
               alt="Modern Portfolio project preview"
               class="scale-on-hover h-full w-full object-cover"
            />
            <div
               class="absolute inset-0 bg-gradient-to-t from-stone-900/95 via-stone-900/85 to-stone-900/20"
            />
         </div>
         <div class="relative flex h-full flex-col justify-end space-y-4 p-6 pb-3">
            <div class="space-y-3">
               <h3
                  class="font-poppins-rounded text-inverse group-hover:text-accent-primary! line-clamp-2 text-pretty text-xl font-bold underline-offset-2 group-hover:underline"
               >
                  {{ project.title }}
               </h3>
               <p class="font-poppins text-inverse mb-3 text-pretty font-light leading-6">
                  {{ project.description }}
               </p>
            </div>
            <div class="flex flex-wrap gap-2">
               <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="font-poppins-rounded bg-accent-secondary/10 text-accent-secondary border-accent/20 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium"
                  >{{ tag }}</span
               >
            </div>
            <div class="flex gap-6 pt-2">
               <a
                  v-for="link in links"
                  :key="link.id"
                  :href="link.url"
                  class="text-inverse hover:text-accent-primary group/link font-poppins inline-flex items-center gap-2 transition-all duration-300"
                  :aria-label="link.ariaLabel"
                  @click.stop
               >
                  <i
                     class="text-md group-hover/link:text-accent-primary group-hover/link:scale-105"
                     :class="link.icon"
                  />
                  <span class="group-hover/link:text-accent-primary text-sm">{{ link.label }}</span>
               </a>
            </div>
         </div>
      </a>
   </article>
</template>
