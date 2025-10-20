<script setup lang="ts">
defineProps<{
   menuItems: { name: string; href: string }[];
   isActive: (item: { name: string; href: string }) => boolean;
}>();
</script>

<template>
   <nav class="font-poppins text-base font-normal">
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
</template>
