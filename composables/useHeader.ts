import type { RouteLocationNormalizedLoaded } from 'vue-router';
import type { MenuItem } from '../types/menu-item.type';
import { ref, onMounted, onUnmounted } from 'vue';

export function useHeader(route: RouteLocationNormalizedLoaded) {
   const activeHash = ref('');

   let observer: IntersectionObserver | null = null;

   // Set up an IntersectionObserver to track which section is currently visible and update the active hash accordingly.
   onMounted(() => {
      observer = new IntersectionObserver(
         (entries) => {
            for (const entry of entries) {
               if (entry.isIntersecting) {
                  activeHash.value = entry.target.id;
               }
            }
         },
         { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
      );

      document.querySelectorAll('section[id]').forEach((el) => observer!.observe(el));
   });

   onUnmounted(() => observer?.disconnect());

   /** Determines if a given menu item is currently active based on the visible section. */
   const isMenuItemActive = (item: MenuItem) => {
      if (item.href.startsWith('/#')) {
         const [, hash] = item.href.split('#');
         if (route.path === '/') return activeHash.value === hash;
      }
      return route.path === item.href;
   };

   /** Mobile menu state and toggler */
   const isMobileMenuOpen = ref(false);
   const showMobileMenu = () => {
      isMobileMenuOpen.value = true;
   };
   const hideMobileMenu = () => {
      isMobileMenuOpen.value = false;
   };
   const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
   };

   return { isMenuItemActive, isMobileMenuOpen, showMobileMenu, hideMobileMenu, toggleMobileMenu };
}
