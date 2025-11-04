<script setup lang="ts">
defineProps<{
   id: string;
}>();
</script>

<template>
   <section :id>
      <div class="mx-auto max-w-screen-xl items-center px-4 py-16 lg:px-6 lg:py-24">
         <div class="debu g">
            <slot />
         </div>
      </div>
   </section>
</template>
