<script setup lang="ts">
const emit = defineEmits(['click']);
</script>

<template>
   <button
      type="button"
      class="text-warm-black cursor-pointer p-3"
      aria-controls="navbar-default"
      aria-expanded="false"
      @click="$emit('click')"
   >
      <span class="sr-only">Open main menu</span>
      <svg
         class="h-6 w-6"
         aria-hidden="true"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 17 14"
      >
         <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
         />
      </svg>
   </button>
</template>
