<script setup lang="ts">
import type { Project } from '~/types/project.type';
import SectionTitle from './SectionTitle.vue';

const title = 'Featured Projects';
const description =
   'A selection of projects showcasing my skills and expertise in software engineering.';

const { data: projects } = await useAsyncData('projects', () => queryCollection('projects').all());

watch(
   projects,
   (newVal) => {
      console.log('Project prop updated:', newVal);
   },
   { immediate: true },
);

const placeholder = {
   title: 'Coming Soon',
   description: 'More projects are in the pipeline',
   draft: false,
   meta: {
      createdAt: '',
      updatedAt: '',
      tags: [],
      cover: {
         src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
         alt: 'Placeholder Image',
      },
   },
} as unknown as Project;

const displayedProjects = computed(() => {
   if (!projects.value) return [];
   console.warn('Raw projects data:', projects.value?.length);
   return projects.value.length % 2 === 1 ? [...projects.value, placeholder] : projects.value;
});
</script>

<template>
   <SectionTitle :title :description />
   <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-7 lg:gap-8">
      <ProjectCard
         v-for="(project, index) in displayedProjects"
         :key="index"
         :project
         class="lg:row-span-1"
         :class="[
            Math.floor(index / 2) % 2 === 0
               ? index % 2 === 0
                  ? 'lg:col-span-4'
                  : 'lg:col-span-3'
               : index % 2 === 0
                 ? 'lg:col-span-3'
                 : 'lg:col-span-4',
         ]"
      />
   </div>
   <!-- <div class="mt-8 flex justify-center lg:mt-10">
      <div class="shadow-inverse group cursor-pointer rounded-lg">
         <a
            href="/blog"
            class="border-inverse shadow-inverse bg-accent-secondary font-poppins-rounded group-hover:-translate-0.5 inline-flex items-center justify-center gap-2 rounded-lg border-2 p-4 px-8 text-white transition-all duration-150"
         >
            View all projects
         </a>
      </div>
   </div> -->
</template>
