import type { RouteLocationNormalizedLoaded } from 'vue-router';
import type { MenuItem } from '../types/menu.type';
import { ref } from 'vue';

export function useHeader(route: RouteLocationNormalizedLoaded) {
   /** Determines if a given menu item is currently active based on the route. */
   const isMenuItemActive = (item: MenuItem) => {
      if (item.href.startsWith('/#')) {
         const [, hash] = item.href.split('#');
         return route.path === '/' && route.hash === `#${hash}`;
      }
      return route.path === item.href;
   };

   /** Mobile menu state and toggler */
   const isMobileMenuOpen = ref(false);
   const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
   };

   return { isMenuItemActive, isMobileMenuOpen, toggleMobileMenu };
}
