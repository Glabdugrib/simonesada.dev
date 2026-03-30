<script setup lang="ts">
import { features } from '../config/appConfig';
import SectionTitle from './SectionTitle.vue';

const title = 'About me';
</script>

<template>
   <div class="gap-16 lg:grid lg:grid-cols-2">
      <div class="text-main font-poppins font-light sm:text-lg">
         <SectionTitle :title />
         <p class="mb-4">
            I'm a full-stack software engineer with 5+ years across consulting, SaaS, and web
            agencies. I build products end-to-end, from frontend to backend and infrastructure, and
            I care as much about the user experience as the architecture behind it.
         </p>
         <p class="mb-4">
            I've built products from scratch where nobody had a clear spec and I had to piece
            together the requirements myself, and I've worked inside large, structured codebases
            where the real skill is setting conventions and patterns that keep everything stable as
            it grows. I like both, and switching between the two is what I am good at.
         </p>
         <p>
            When I'm not working, I'm probably running, playing, tinkering with a side project or
            experimenting with something new. The lab never really closes.
         </p>
      </div>
      <div class="mt-8 flex items-center justify-center">
         <div class="grid grid-cols-2 gap-4">
            <img
               class="shadow-inverse aspect-[2/3] w-full rounded-lg object-cover"
               src="../assets/images/avatar.webp"
               alt="A picture of me"
            />
            <img
               class="shadow-inverse mt-6 aspect-[2/3] w-full rounded-lg object-cover lg:mt-12"
               src="../assets/images/trekking.webp"
               alt="A picture of me trekking"
            />
         </div>
      </div>
   </div>
   <div class="text-main font-poppins mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
      <div
         v-for="(feature, idx) in features"
         :key="feature.id"
         class="mb-auto flex flex-col items-center justify-center last:md:col-span-2 last:md:mx-auto last:md:w-[calc(50%-24px)] last:lg:col-span-1 last:lg:mx-0 last:lg:w-auto"
      >
         <i :class="['pi mb-4 text-5xl', feature.icon.name, feature.icon.color]" />
         <h3 class="font-poppins-rounded mb-3 text-center text-xl font-bold">
            {{ feature.title }}
         </h3>
         <p class="text-center font-light sm:text-lg">{{ feature.description }}</p>
      </div>
   </div>
</template>
