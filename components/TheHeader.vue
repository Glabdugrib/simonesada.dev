<script setup lang="ts">
import { useRoute } from 'vue-router';
import HeaderBrand from './HeaderBrand.vue';
import NavMenu from './NavMenu.vue';
import HamburgerButton from './HamburgerButton.vue';
import { menuItems } from '../config/appConfig';
import { useHeader } from '../composables/useHeader';

const route = useRoute();
const { isMenuItemActive, isMobileMenuOpen, toggleMobileMenu } = useHeader(route);
</script>

<template>
   <header class="bg-warm-white fixed left-0 right-0 top-0 z-30">
      <div
         class="lg:h-18 mx-auto flex h-16 max-w-screen-xl items-center justify-between px-5 sm:px-8 md:h-14 md:px-10 lg:px-16"
      >
         <HeaderBrand />
         <HamburgerButton
            @click="toggleMobileMenu"
            :is-mobile-menu-open="isMobileMenuOpen"
            class="md:hidden"
         />
         <NavMenu :menu-items="menuItems" :is-active="isMenuItemActive" class="hidden md:flex" />
      </div>
      <div class="border-warm-black absolute left-0 right-0 top-full z-20 border-b-[1.5px]"></div>
      <MobileMenu :is-mobile-menu-open="isMobileMenuOpen" />
   </header>
</template>
