<script setup lang="ts">
import dayjs from 'dayjs';

const slug = useRoute().params.slug;

const { data: project } = await useAsyncData(`project-${slug}`, () =>
   queryCollection('projects').path(`/projects/${slug}`).where('draft', '=', false).first(),
);

if (!project.value) {
   throw createError({
      statusCode: 404,
      statusMessage: 'Ops! The project you are looking for does not exist.',
   });
}
</script>

<template>
   <div class="px-4 pb-8 pt-8 antialiased lg:pb-24 lg:pt-16">
      <article class="prose lg:prose-xl mx-auto">
         <ContentRenderer v-if="project" :value="project" />
      </article>
   </div>
</template>
