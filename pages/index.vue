<script setup lang="ts"></script>

<template>
   <SectionWrapper
      id="hero"
      class="lg:mt-18 bg-accent-secondary-light border-inverse mt-16 border-b-2 md:mt-14"
   >
      <TheHeroSection />
   </SectionWrapper>
   <!-- <MarqueeDivider :strings="['CODE', 'PLAY', 'EXPERIMENT', 'REPEAT']" divider="✱" :speed="0.2" /> -->
   <SectionWrapper id="about" class="bg-main border-inverse border-b-2">
      <TheAboutSection />
   </SectionWrapper>
   <!-- <SectionWrapper id="blog" class="bg-alt border-inverse border-b-2">
      <TheBlogSection />
   </SectionWrapper> -->
   <SectionWrapper id="projects" class="bg-alt">
      <TheProjectsSection />
   </SectionWrapper>
</template>
