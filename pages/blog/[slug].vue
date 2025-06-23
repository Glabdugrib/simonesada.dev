<script setup>
const slug = useRoute().params.slug;
const { data: post } = await useAsyncData(`blog-${slug}`, () =>
   queryCollection('blog').path(`/blog/${slug}`).first(),
);
console.log('SLUG:', slug);
console.log('POST:', post);
</script>

<template>
   <div class="px-4 pb-16 pt-8 antialiased lg:pb-24 lg:pt-16">
      <article class="prose lg:prose-xl mx-auto">
         <ContentRenderer :value="post" />
      </article>
   </div>
</template>
