<script setup lang="ts">
import Logo from './Logo.vue';
import { socialLinks } from '../config/appConfig';
</script>

<template>
   <footer class="bg-main">
      <div
         class="flex flex-col items-center justify-between gap-4 px-5 py-4 sm:flex-row sm:gap-0 sm:px-8 sm:py-2 md:px-10 lg:px-16"
      >
         <a href="/" class="sm:order-0 group hidden h-full items-center gap-2 sm:flex">
            <Logo class="text-accent-primary h-7 group-hover:animate-spin" />
            <span class="font-poppins-rounded hidden text-lg md:inline-block">
               <span class="text-main">simonesada</span>
               <span class="text-accent-secondary">.dev</span>
            </span>
         </a>
         <span class="text-main sm:order-0 order-2 text-sm text-gray-500 sm:text-center"
            >© 2025 Simone Sada. All Rights Reserved.
         </span>
         <div class="flex gap-3 text-xl sm:mt-0 lg:gap-4">
            <a
               v-for="socialLink in socialLinks"
               :key="socialLink.id"
               :href="socialLink.href"
               class="sm:order-0 group order-1 flex aspect-square items-center justify-center p-2 lg:p-3"
            >
               <i
                  :class="[
                     'group-hover:text-accent-secondary pi transition-colors',
                     socialLink.icon,
                  ]"
               />
            </a>
         </div>
      </div>
   </footer>
</template>
