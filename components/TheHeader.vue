<script setup lang="ts">
import TheLogo from './TheLogo.vue';
</script>

<template>
   <header>
      <nav class="border-gray-200 bg-white px-4 py-2.5 lg:px-6">
         <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
            <a
               href="/"
               class="hover:scale-102 group flex items-center gap-3 pe-2 transition-all duration-300"
            >
               <TheLogo class="h-7 text-orange-600 group-hover:animate-spin" />
               <span
                  class="font-red-hat-display text-shadow-sm text-md mb-[2px] self-center whitespace-nowrap tracking-widest"
               >
                  <span class="font-semibold group-hover:text-stone-800">SIMONE SADA</span>
                  <span class="font-bold text-orange-600">.dev</span>
               </span>
            </a>

            <!-- Navigation links for larger screens -->
            <div class="hidden items-center gap-2 sm:flex lg:order-2">
               <a
                  href="/#about"
                  class="focus rounded-lg px-4 py-2 text-sm font-medium text-gray-800 transition-colors duration-150 hover:text-orange-600 lg:px-5 lg:py-2.5"
                  >About</a
               >
               <a
                  href="/blog"
                  class="focus rounded-lg px-4 py-2 text-sm font-medium text-gray-800 transition-colors duration-150 hover:text-orange-600 lg:px-5 lg:py-2.5"
                  >Blog</a
               >
               <a
                  href="/projects"
                  class="focus rounded-lg px-4 py-2 text-sm font-medium text-gray-800 transition-colors duration-150 hover:text-orange-600 lg:px-5 lg:py-2.5"
                  >Projects</a
               >
            </div>
         </div>
      </nav>
   </header>
</template>
