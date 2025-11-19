<script setup lang="ts">
import type { Post } from '~/types/post.type';
import SectionTitle from './SectionTitle.vue';
import PostMainCard from './PostMainCard.vue';
import PostCard from './PostCard.vue';

const title = 'Latest posts';
const description = 'Curious experiments, creative code, and lessons learned along the way.';

const posts: Post[] = [
   {
      id: 1,
      title: 'How to record a high-quality podcast',
      description: 'Learn the essentials of podcast recording with this comprehensive guide.',
      tags: ['React', 'TypeScript', 'Web Dev'],
      image: {
         src: 'https://media.istockphoto.com/id/2182853824/it/vettoriale/uomo-anziano-seduto-in-un-lettino-illustrazione-vettoriale.jpg?s=1024x1024&w=is&k=20&c=VrKrORMa6W1HzQzqteW9GW7tcE-HJATNvMzyCH3ztdI=',
         alt: 'Illustrazione di un uomo anziano seduto in un lettino con microfono e cuffie',
      },
      readTime: 7,
      publishedAt: '30 Ott 2025',
   },
   {
      id: 2,
      title: 'Understanding JavaScript Closures',
      description:
         'A deep dive into closures in JavaScript and how to use them effectively in your code.',
      tags: ['JavaScript', 'Programming'],
      image: {
         src: 'https://media.istockphoto.com/id/165956838/it/vettoriale/retr%C3%B2-panorama-di-nuvole.jpg?s=1024x1024&w=is&k=20&c=sqnRIj9dX2zV439w2g43h_964PK72fpIfeOtVr-viuA=',
         alt: 'Illustrazione retrò di un panorama con nuvole',
      },
      readTime: 5,
      publishedAt: '25 Aug 2025',
   },
   {
      id: 3,
      title: 'A Guide to Responsive Web Design',
      description:
         'Learn the principles and techniques of responsive web design to create websites that look great on any device.',
      tags: ['CSS', 'Web Design'],
      image: {
         src: 'https://media.istockphoto.com/id/2193463869/it/vettoriale/legacy-data.jpg?s=1024x1024&w=is&k=20&c=8PxfK-C7Pi8loDE7YGDIyOiMkPr20VjnP8qPaXZoWdc=',
         alt: 'Illustrazione di dati legacy su uno schermo vintage',
      },
      readTime: 10,
      publishedAt: '03 Jul 2025',
   },
   {
      id: 4,
      title: 'Getting Started with Vue 3',
      description:
         'Discover the basics of Vue 3 and how to build dynamic web applications with this progressive JavaScript framework.',
      tags: ['Vue', 'Frontend'],
      image: {
         src: 'https://media.istockphoto.com/id/1415398081/it/vettoriale/vintage-macchina-fotografica-istantanea.jpg?s=1024x1024&w=is&k=20&c=MVyHeSbw98LNzYsRfMvcH0a4bIQLr9i4R31COkiKmzA=',
         alt: 'Illustrazione di una macchina fotografica istantanea vintage',
      },
      readTime: 3,
      publishedAt: '09 Mar 2025',
   },
];
</script>

<template>
   <SectionTitle :title :description />
   <div class="grid gap-5 lg:grid-cols-2 lg:grid-rows-3">
      <PostMainCard :post="posts[0]!" />
      <PostCard v-for="post in posts.slice(1)" :key="post.id" :post="post" />
   </div>
   <div class="mt-8 flex justify-center lg:mt-10">
      <div class="shadow-inverse group cursor-pointer rounded-lg">
         <a
            href="/blog"
            class="border-inverse shadow-inverse bg-accent-secondary font-poppins-rounded group-hover:-translate-0.5 inline-flex items-center justify-center gap-2 rounded-lg border-2 p-4 px-8 text-white transition-all duration-150"
         >
            View all posts
         </a>
      </div>
   </div>
</template>
