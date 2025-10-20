import type { RouteLocationNormalizedLoaded } from 'vue-router';
import type { MenuItem } from '../types/menu.type';

export function useMenu(route: RouteLocationNormalizedLoaded) {
   /** Determines if a given menu item is currently active based on the route. */
   const isActive = (item: MenuItem) => {
      if (item.href.startsWith('/#')) {
         const [, hash] = item.href.split('#');
         return route.path === '/' && route.hash === `#${hash}`;
      }
      return route.path === item.href;
   };

   return { isActive };
}
