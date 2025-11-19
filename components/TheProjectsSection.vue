<script setup lang="ts">
import type { Project } from '~/types/project.type';
import SectionTitle from './SectionTitle.vue';

const title = 'Featured Projects';
const description =
   'A selection of projects showcasing my skills and expertise in software engineering.';

const projects: Project[] = [
   {
      id: 1,
      title: 'Project One',
      description: 'Description for project one.',
      tags: ['Vue', 'TypeScript', 'CSS'],
      image: {
         src: 'https://plus.unsplash.com/premium_photo-1681399975135-252eab5fd2db?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
         alt: 'Project One Image',
      },
   },
   {
      id: 2,
      title: 'Project Two',
      description: 'Description for project two.',
      tags: ['React', 'JavaScript', 'HTML'],
      image: {
         src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
         alt: 'Project Two Image',
      },
   },
   {
      id: 3,
      title: 'Project Three',
      description: 'Description for project three.',
      tags: ['Angular', 'TypeScript', 'Sass'],
      image: {
         src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

         alt: 'Project Three Image',
      },
   },
   {
      id: 4,
      title: 'Project Four',
      description: 'Description for project four.',
      tags: ['Svelte', 'JavaScript', 'Tailwind CSS'],
      image: {
         src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
         alt: 'Project Four Image',
      },
   },
];
</script>

<template>
   <SectionTitle :title :description />
   <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-7 lg:gap-8">
      <ProjectCard
         v-for="(project, index) in projects"
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
   <div class="mt-8 flex justify-center lg:mt-10">
      <div class="shadow-inverse group cursor-pointer rounded-lg">
         <a
            href="/blog"
            class="border-inverse shadow-inverse bg-accent-secondary font-poppins-rounded group-hover:-translate-0.5 inline-flex items-center justify-center gap-2 rounded-lg border-2 p-4 px-8 text-white transition-all duration-150"
         >
            View all projects
         </a>
      </div>
   </div>
</template>
