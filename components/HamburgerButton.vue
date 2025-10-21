<script setup lang="ts">
const props = defineProps<{ isMobileMenuOpen: boolean }>();
</script>

<template>
   <button
      type="button"
      class="text-warm-black flex cursor-pointer items-center justify-center p-3"
      aria-controls="navbar-default"
      aria-expanded="false"
   >
      <span class="sr-only">Open main menu</span>
      <i v-if="!isMobileMenuOpen" class="pi pi-bars text-2xl"></i>
      <i v-else class="pi pi-times text-2xl"></i>
   </button>
</template>
