<script setup>
const slug = useRoute().params.slug;
const { data: post } = await useAsyncData(`blog-${slug}`, () =>
   queryCollection('blog').path(`/blog/${slug}`).first(),
);
console.log('SLUG:', slug);
console.log('POST:', post);
</script>

<template>
   <ContentRenderer :value="post" />
</template>
