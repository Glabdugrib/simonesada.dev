<script setup>
import dayjs from 'dayjs';

const slug = useRoute().params.slug;
const { data: post } = await useAsyncData(`blog-${slug}`, () =>
   queryCollection('blog').path(`/blog/${slug}`).first(),
);
console.log('SLUG:', slug);
console.log('POST:', post);
</script>

<template>
   <div class="px-4 pb-8 pt-8 antialiased lg:pb-24 lg:pt-16">
      <article class="prose lg:prose-xl mx-auto">
         <!-- Header -->
         <header class="mb-10">
            <!-- Title -->
            <h1 class="!mb-5 text-4xl font-extrabold">{{ post?.title }}</h1>

            <!-- Tags -->
            <div class="mb-2 flex flex-wrap gap-2">
               <span
                  v-for="tag in ['tailwind', 'ui', 'flowbite', 'prototyping']"
                  :key="tag"
                  class="rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-600"
               >
                  {{ tag.toUpperCase() }}
               </span>
            </div>

            <!-- Meta info -->
            <div class="space-x-2 text-sm text-gray-500">
               <span>{{ dayjs().format('MMMM D, YYYY') }}</span>
               <span>•</span>
               <span>5 min read</span>
            </div>

            <!-- Description -->
            <p class="text-gray-500">{{ post?.description }}</p>
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

         <!-- Content -->
         <ContentRenderer :value="post" />
      </article>
   </div>
</template>
