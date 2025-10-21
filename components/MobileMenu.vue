<script setup lang="ts">
const props = defineProps<{ isMobileMenuOpen: boolean }>();
</script>

<template>
   <div
      class="border-warm-black fixed left-0 right-0 top-[4rem] z-10 overflow-hidden border-b-[1.5px] bg-red-200 transition-all duration-300 ease-in-out md:top-[3.5rem] lg:top-[4.5rem]"
      :class="{
         'h-[calc(100vh-4rem)] md:h-[calc(100vh-3.5rem)] lg:h-[calc(100vh-4.5rem)]':
            isMobileMenuOpen,
         'h-0': !isMobileMenuOpen,
      }"
   ></div>
</template>
