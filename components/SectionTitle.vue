<script setup lang="ts">
const props = defineProps<{
   title: string;
   description?: string;
}>();
</script>

<template>
   <h2
      :class="{
         'text-main !font-poppins-rounded relative text-center text-4xl font-extrabold tracking-tight': true,
         'mb-5 lg:mb-6': description,
         'mb-6 lg:mb-7': !description,
      }"
   >
      <span class="relative z-10">{{ title }}</span>
      <span
         class="bg-accent-secondary absolute -bottom-1.5 left-1/2 z-0 h-1.5 w-16 -translate-x-1/2 rounded"
      ></span>
   </h2>
   <p
      v-if="description"
      class="text-main font-poppins mb-6 text-center font-light sm:text-lg lg:mb-7"
   >
      {{ description }}
   </p>
</template>
