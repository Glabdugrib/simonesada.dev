<script setup lang="ts">
import type { BlogCollectionItem } from '@nuxt/content';
import dayjs from 'dayjs';
import { blogSchema } from '~/utils/schema/blog';

const slug = useRoute().params.slug;
const blogCollection = await useAsyncData(`blog-${slug}`, () =>
   queryCollection('blog').path(`/blog/${slug}`).where('draft', '=', false).first(),
);

const post: BlogCollectionItem | null = blogCollection.data.value ?? null;

if (!post) {
   throw createError({
      statusCode: 404,
      statusMessage: 'Ops! The post you are looking for does not exist.',
   });
}

const result = blogSchema.safeParse(post);

if (!result.success) {
   console.error('Invalid post data:', result.error);
   throw createError({
      statusCode: 500,
      statusMessage: 'Ops! The post data is not valid.',
   });
}

console.log('SLUG:', slug);
console.log('POST:', post);
</script>

<template>
   <div class="px-4 pb-8 pt-8 antialiased lg:pb-24 lg:pt-16">
      <article class="prose lg:prose-xl mx-auto">
         <!-- Header -->
         <header class="mb-10">
            <!-- Title -->
            <h1 class="!mb-5 text-4xl font-extrabold">{{ post.title }}</h1>

            <!-- Tags -->
            <div class="mb-2 flex flex-wrap gap-2">
               <span
                  v-for="tag in ['tailwind', 'ui', 'flowbite', 'prototyping']"
                  :key="tag"
                  class="rounded-full bg-orange-100 px-2.5 py-1 text-xs font-medium text-orange-600"
               >
                  {{ tag.toUpperCase() }}
               </span>
            </div>

            <!-- Meta info -->
            <div class="space-x-2 text-sm text-gray-500">
               <span>{{ dayjs(post.meta.createdAt).format('MMMM D, YYYY') }}</span>
               <span>•</span>
               <span>{{ post.meta.readingTime }} min read</span>
            </div>

            <!-- Description -->
            <p class="text-gray-500">{{ post.description }}</p>
         </header>

         <!-- Cover -->
         <figure>
            <img
               src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
               alt="Digital art by Anonymous"
               class="mt-6 w-full rounded-lg object-cover shadow-lg"
            />
            <!-- <figcaption class="text-center text-sm text-gray-500">
                  Digital art by Anonymous
               </figcaption> -->
         </figure>

         <!-- Table of Contents -->
         <nav
            v-if="post.body?.toc?.links?.length"
            class="font-inter mb-8 rounded-lg bg-stone-200 p-8"
         >
            <h2 class="!mt-0 !text-xl text-stone-700">Table of Contents:</h2>
            <ul class="!m-0 space-y-1">
               <li
                  v-for="link in post.body?.toc?.links"
                  :key="link.id"
                  class="list-disc py-1 text-sm marker:text-orange-400"
               >
                  <a
                     :href="`#${link.id}`"
                     class="focus py-1 font-normal tracking-wider text-stone-600 no-underline transition-colors duration-150 hover:text-orange-400"
                     >{{ link.text.toUpperCase() }}</a
                  >
               </li>
            </ul>
         </nav>

         <!-- Content -->
         <ContentRenderer :value="post" />

         <!-- Footer -->
         <footer class="mt-8 flex items-center gap-6 border-t border-gray-200 lg:mt-16 lg:pt-4">
            <img
               :src="post.meta.authorAvatar"
               alt="Author avatar"
               class="w-18 h-18 rounded-full object-cover"
            />
            <div>
               <p class="text-md !my-0 font-semibold text-gray-900">
                  {{ post.meta.author }}
               </p>
               <p class="text-md !my-0 text-gray-500">{{ post.meta.authorBio }}</p>
            </div>
         </footer>
      </article>
   </div>
</template>
