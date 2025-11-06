<script setup lang="ts">
const props = defineProps<{
   title: string;
}>();
</script>

<template>
   <h2
      class="text-main !font-poppins-rounded relative mb-6 text-center text-4xl font-extrabold tracking-tight lg:mb-7"
   >
      <span class="relative z-10">{{ title }}</span>
      <span
         class="bg-accent-secondary absolute -bottom-1.5 left-1/2 z-0 h-1.5 w-16 -translate-x-1/2 rounded"
      ></span>
   </h2>
</template>
