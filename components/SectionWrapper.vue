<script setup lang="ts">
defineProps<{
   id: string;
}>();
</script>

<template>
   <section :id>
      <div class="pb-15 lg:pt-15 lg:pb-25 mx-auto max-w-screen-xl items-center px-4 pt-10 lg:px-6">
         <div class="debu g">
            <slot />
         </div>
      </div>
   </section>
</template>
