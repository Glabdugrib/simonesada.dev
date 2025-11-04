<script setup lang="ts">
import TheHeroSection from '~/components/TheHeroSection.vue';
import TheAboutSection from '~/components/TheAboutSection.vue';
import MarqueeDivider from '~/components/MarqueeDivider.vue';
</script>

<template>
   <SectionWrapper id="hero" class="bg-alt lg:mt-18 mt-16 md:mt-14">
      <TheHeroSection />
   </SectionWrapper>
   <MarqueeDivider :strings="['CODE', 'PLAY', 'EXPERIMENT', 'REPEAT']" divider="✱" :speed="1" />
   <SectionWrapper id="about" class="bg-alt">
      <TheAboutSection />
   </SectionWrapper>
   <div class="py-150 bg-alt"></div>
</template>
