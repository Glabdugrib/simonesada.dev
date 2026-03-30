<script setup lang="ts">
import { PROJECT_LINK_CONFIG, type Project } from '~/types/project.type';

defineProps<{
   project: Project;
}>();

const defaultImage =
   'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
</script>

<template>
   <article
      class="shadow-inverse border-inverse bg-inverse overflow-hidden rounded-lg border-2 bg-stone-400"
   >
      <component
         :is="project.meta.hasArticle ? 'a' : 'div'"
         :href="project.path"
         class="lg:min-h-75 relative flex h-full w-full flex-col justify-end"
         :class="{ group: project.meta.hasArticle }"
      >
         <div class="absolute inset-0">
            <img
               :src="project.meta.cover?.src ?? defaultImage"
               alt="Modern Portfolio project preview"
               class="scale-on-hover h-full w-full object-cover"
            />
            <div
               class="absolute inset-0 bg-gradient-to-t from-stone-900/95 via-stone-900/85 to-stone-900/40"
            />
         </div>
         <div class="relative flex h-full flex-col justify-end space-y-4 p-6">
            <div class="space-y-3">
               <h3
                  class="text-shadow-md font-poppins-rounded text-inverse group-hover:text-accent-primary! line-clamp-2 text-pretty text-xl font-bold underline-offset-2 group-hover:underline"
               >
                  {{ project.title }}
               </h3>
               <p
                  v-if="project.description"
                  class="font-poppins text-inverse mb-0! mb-3 text-pretty font-light leading-6"
               >
                  {{ project.description }}
               </p>
            </div>
            <div v-if="project.meta.tags?.length" class="flex flex-wrap gap-2">
               <span
                  v-for="tag in project.meta.tags"
                  :key="tag"
                  class="font-poppins-rounded bg-accent-secondary/10 text-accent-secondary border-accent/20 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium"
                  >{{ tag }}</span
               >
            </div>
            <div v-if="project.meta.links" class="flex gap-6 pt-2">
               <a
                  v-for="link in project.meta.links"
                  :key="link.type"
                  :href="link.url"
                  target="_blank"
                  class="text-inverse hover:text-accent-primary group/link font-poppins inline-flex items-center gap-2 transition-all duration-300"
                  :aria-label="PROJECT_LINK_CONFIG[link.type].ariaLabel"
                  @click.stop
               >
                  <i
                     class="text-md group-hover/link:text-accent-primary group-hover/link:scale-105"
                     :class="PROJECT_LINK_CONFIG[link.type].icon"
                  />
                  <span class="group-hover/link:text-accent-primary text-sm">{{
                     PROJECT_LINK_CONFIG[link.type].label
                  }}</span>
               </a>
            </div>
         </div>
      </component>
   </article>
</template>
