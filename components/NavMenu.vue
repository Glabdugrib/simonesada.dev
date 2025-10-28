<script setup lang="ts">
defineProps<{
   menuItems: { name: string; href: string }[];
   isActive: (item: { name: string; href: string }) => boolean;
}>();
</script>

<template>
   <nav role="navigation" class="font-poppins text-main font-normal">
      <ul class="flex gap-2">
         <li class="py-5" v-for="item in menuItems" :key="item.name">
            <a
               :href="item.href"
               class="text-main group px-5 py-1"
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
   </nav>
</template>
