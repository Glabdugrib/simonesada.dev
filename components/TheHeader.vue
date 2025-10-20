<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import HeaderBrand from './HeaderBrand.vue';
import NavMenu from './NavMenu.vue';
import HamburgerButton from './HamburgerButton.vue';
import { menuItems } from '../config/appConfig';
import { useMenu } from '../composables/useMenuActive';

const route = useRoute();
const { isActive } = useMenu(route);

const mobileMenuOpen = ref(false);
</script>

<template>
   <header class="bg-warm-white border-warm-black border-b-[1.5px]">
      <div
         class="h-18 mx-auto flex max-w-screen-xl items-center justify-between px-5 sm:px-8 md:px-10 lg:px-16"
      >
         <HeaderBrand />
         <HamburgerButton @click="mobileMenuOpen = true" class="md:hidden" />
         <NavMenu :menu-items="menuItems" :is-active="isActive" class="hidden md:flex" />
      </div>
      <!-- Insert MobileMenu here -->
   </header>
</template>
