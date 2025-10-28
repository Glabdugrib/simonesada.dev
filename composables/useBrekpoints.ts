import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

const breakpoints: Record<string, number> = {
   sm: 640,
   md: 768,
   lg: 1024,
   xl: 1280,
   '2xl': 1536,
};

export function useBreakpoints() {
   const width = ref(0);

   const updateWidth = () => {
      if (globalThis.window !== undefined) {
         width.value = globalThis.window.innerWidth;
      }
   };

   onMounted(() => {
      updateWidth();
      globalThis.window.addEventListener('resize', updateWidth);
   });

   onBeforeUnmount(() => {
      globalThis.window.removeEventListener('resize', updateWidth);
   });

   // helper per verificare se la larghezza è maggiore di un breakpoint
   const greater = (bp: keyof typeof breakpoints) =>
      computed(() => {
         const bpValue = breakpoints[bp];
         return bpValue !== undefined && (width.value ?? 0) >= bpValue;
      });

   return {
      width,
      breakpoints,
      greater,
   };
}
