<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();

type MenuItem = {
   name: string;
   href: string;
};

const menuItems: MenuItem[] = [
   { name: 'About', href: '/#about' },
   { name: 'Blog', href: '/blog' },
   { name: 'Projects', href: '/projects' },
];

function isActive(item: MenuItem) {
   if (item.href.startsWith('/#')) {
      const [, hash] = item.href.split('#');
      return route.path === '/' && route.hash === `#${hash}`;
   }
   return route.path === item.href;
}
</script>

<template>
   <header class="bg-warm-white border-warm-black border-b-[1.5px]">
      <div
         class="h-18 mx-auto flex max-w-screen-xl items-center justify-between px-5 sm:px-8 md:px-10 lg:px-16"
      >
         <!-- Logo and title -->
         <a href="/" class="group flex h-full items-center gap-3">
            <TheLogo class="h-9 text-orange-600 group-hover:animate-spin" />
            <span class="font-poppins-rounded text-2xl">
               <span class="text-warm-black">simonesada</span>
               <span class="text-emerald-400">.dev</span>
            </span>
         </a>

         <!-- Hamburger button for mobile -->
         <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="text-warm-black cursor-pointer p-3 md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
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

         <!-- Navigation links for larger screens -->
         <nav class="font-poppins hidden text-base font-normal md:flex">
            <ul class="flex gap-2">
               <li class="py-5" v-for="item in menuItems" :key="item.name">
                  <a
                     :href="item.href"
                     class="text-warm-black group px-5 py-1 hover:text-orange-600"
                     :class="{ '!text-orange-600': isActive(item) }"
                  >
                     <span class="relative">
                        {{ item.name }}
                        <span
                           :class="{
                              'bg-primary absolute -bottom-[6px] left-0 h-[3px] bg-orange-600 duration-200': true,
                              'w-full': isActive(item),
                              'w-0 group-hover:w-full': !isActive(item),
                           }"
                        ></span>
                     </span>
                  </a>
               </li>
            </ul>
         </nav>
      </div>
   </header>
</template>
