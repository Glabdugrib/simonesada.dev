<script setup lang="ts">
import MarqueeDivider from '~/components/MarqueeDivider.vue';
import TheHeroSection from '~/components/TheHeroSection.vue';

const getRandomArbitrary = (min: number, max: number) => {
   return Math.random() * (max - min) + min;
};
</script>

<template>
   <TheHeroSection />
   <MarqueeDivider
      :strings="['CODE', 'PLAY', 'EXPERIMENT', 'REPEAT']"
      divider="✱"
      :speed="1"
   />
</template>
