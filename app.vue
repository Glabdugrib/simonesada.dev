<script setup lang="ts">
import TheContactMeSection from './components/TheContactMeSection.vue';
import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue';

useHead({
   title: 'Simone Sada • Full-Stack Engineer',
   meta: [
      {
         name: 'description',
         content:
            'Portfolio of Simone Sada, Full-Stack Engineer specializing in Node.js, TypeScript, NestJS, Vue 3 and AWS.',
      },
      { property: 'og:title', content: 'Simone Sada • Full-Stack Engineer' },
      { property: 'og:site_name', content: 'simonesada.dev' },
   ],
});
</script>

<template>
   <TheHeader />
   <NuxtPage />
   <SectionWrapper id="contact-me" class="bg-main border-inverse border-y-2">
      <TheContactMeSection />
   </SectionWrapper>
   <TheFooter />
</template>
