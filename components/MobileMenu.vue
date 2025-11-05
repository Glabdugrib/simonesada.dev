<script setup lang="ts">
import type { MenuItem } from '~/types/menu-item.type';
import type { SocialLink } from '~/types/social-link.type';

defineProps<{
   menuItems: MenuItem[];
   socialLinks: SocialLink[];
   isMobileMenuOpen: boolean;
   isActive: (item: { name: string; href: string }) => boolean;
}>();
</script>

<template>
   <div
      class="bg-main not-first-of-type:border-inverse fixed left-0 right-0 top-[4rem] z-10 overflow-hidden border-b-[1.5px] transition-[height] duration-300 ease-in-out md:top-[3.5rem] lg:top-[4.5rem]"
      :class="{
         'h-[calc(100vh-4rem)] md:h-[calc(100vh-3.5rem)] lg:h-[calc(100vh-4.5rem)]':
            isMobileMenuOpen,
         'h-0': !isMobileMenuOpen,
      }"
   >
      <nav role="navigation" class="px-5 py-8 sm:px-8">
         <ul>
            <li v-for="item in menuItems" :key="item.name">
               <a
                  :href="item.href"
                  class="max-w-18 font-poppins text-main group block py-4 pe-3 text-xl font-medium"
                  :class="{ '!text-accent-primary': isActive(item) }"
               >
                  <span class="relative">
                     {{ item.name }}
                     <span
                        :class="{
                           'bg-primary text-accent-secondary absolute -bottom-[6px] left-0 h-[3px] duration-200': true,
                           'w-0 group-hover:w-full': !isActive(item),
                        }"
                     ></span>
                  </span>
               </a>
            </li>
         </ul>
         <div class="mt-8 flex flex-col gap-5 border-t border-stone-200 py-8">
            <div class="text-main nt-poppins text-center text-lg">Follow me!</div>
            <div class="flex justify-center gap-6">
               <a
                  v-for="social in socialLinks"
                  :key="social.id"
                  :href="social.href"
                  class="border-inverse shadow-inverse hover:bg-accent-secondary flex items-center justify-center rounded border p-4 transition-colors hover:text-white"
                  :aria-label="social.label"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <i :class="social.icon + ' text-2xl'"></i>
               </a>
            </div>
         </div>
      </nav>
   </div>
</template>
