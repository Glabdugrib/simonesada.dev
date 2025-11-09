<script setup lang="ts">
import { useRoute } from 'vue-router';
import HeaderBrand from './HeaderBrand.vue';
import NavMenu from './NavMenu.vue';
import HamburgerButton from './HamburgerButton.vue';
import { menuItems, socialLinks } from '../config/appConfig';
import { useHeader } from '../composables/useHeader';
import { useBreakpoints } from '../composables/useBrekpoints';
import { watch } from 'vue';

const route = useRoute();
const { isMenuItemActive, isMobileMenuOpen, hideMobileMenu, toggleMobileMenu } = useHeader(route);
const breakpoints = useBreakpoints();

// Hide the mobile menu when increasing the viewport width more than MD
watch(
   () => breakpoints.greater('md').value,
   (isGreaterThanMd) => {
      if (isGreaterThanMd && isMobileMenuOpen.value) {
         hideMobileMenu();
      }
   },
);
</script>

<template>
   <header class="bg-main fixed left-0 right-0 top-0 z-30 px-5 sm:px-8 md:px-10 lg:px-16">
      <div class="lg:h-18 mx-auto flex h-16 max-w-screen-xl items-center justify-between md:h-14">
         <HeaderBrand />
         <HamburgerButton
            @click="toggleMobileMenu"
            :is-mobile-menu-open="isMobileMenuOpen"
            class="md:hidden"
         />
         <NavMenu :menu-items="menuItems" :is-active="isMenuItemActive" class="hidden md:flex" />
      </div>
      <div class="border-inverse absolute left-0 right-0 top-full z-20 border-b-2"></div>
      <MobileMenu
         :menu-items="menuItems"
         :social-links="socialLinks"
         :is-mobile-menu-open="isMobileMenuOpen"
         :is-active="isMenuItemActive"
      />
   </header>
</template>
