<script setup lang="ts">
import { onMounted } from 'vue';

const props = defineProps<{
   strings: string[];
   divider?: string;
   speed?: number;
}>();

const marqueeRef = ref<HTMLElement | null>(null);
const speed = props.speed ?? 0.5;
const divider = props.divider ?? null;

const setupMarquee = () => {
   if (!marqueeRef.value) return;

   const container = marqueeRef.value;
   const content = container.querySelector('.marquee-content') as HTMLElement;
   const contentWidth = content.offsetWidth;

   // Clone the content enough times to overflow horizontally
   const repetitions = Math.ceil(container.offsetWidth / contentWidth) + 2;
   for (let i = 0; i < repetitions; i++) {
      const clone = content.cloneNode(true);
      container.appendChild(clone);
   }

   let offset = 0;

   const animate = () => {
      offset += speed;

      // Normalize offset: when going forward or backward, wrap properly
      if (speed > 0 && offset >= contentWidth) offset = 0;
      else if (speed < 0 && offset <= 0) offset = contentWidth;

      container.scrollLeft = offset;
      requestAnimationFrame(animate);
   };

   animate();
   container.classList.add('!opacity-40');
};

onMounted(() => {
   setupMarquee();
});
</script>

<template>
   <section>
      <div
         ref="marqueeRef"
         class="text-md relative flex overflow-hidden whitespace-nowrap border-2 border-orange-400 py-1 font-semibold text-orange-400 opacity-0 transition-opacity duration-700"
      >
         <div class="marquee-content flex gap-5 pe-5">
            <template v-for="(str, index) in strings" :key="index">
               <span>{{ str }}</span>
               <span v-if="divider && index < strings.length">{{ divider }}</span>
            </template>
         </div>
      </div>
   </section>
</template>
