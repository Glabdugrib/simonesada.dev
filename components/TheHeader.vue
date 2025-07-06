<script setup lang="ts">
import TheLogo from './TheLogo.vue';
</script>

<template>
   <header>
      <nav class="border-gray-200 bg-white px-4 py-2.5 lg:px-6">
         <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
            <a href="/" class="group flex items-center gap-4 pe-2">
               <TheLogo
                  class="h-10 transition-all duration-300 group-hover:animate-spin group-hover:text-orange-600"
               />
               <span
                  class="font-audiowide text-shadow-sm group-hover:text-shadow-md self-center whitespace-nowrap text-2xl tracking-wider group-hover:text-stone-800"
                  >Simone Sada</span
               >
            </a>

            <div class="flex items-center lg:order-2">
               <a
                  href="#about"
                  class="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 lg:px-5 lg:py-2.5"
                  >About</a
               >
               <a
                  href="#posts"
                  class="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 lg:px-5 lg:py-2.5"
                  >Posts</a
               >
               <a
                  href="#projects"
                  class="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 lg:px-5 lg:py-2.5"
                  >Projects</a
               >
            </div>
         </div>
      </nav>
   </header>
</template>
