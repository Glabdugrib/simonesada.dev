<script setup lang="ts">
import { features } from '../config/appConfig';
</script>

<template>
   <div class="gap-16 lg:grid lg:grid-cols-2">
      <div class="text-main font-poppins font-light sm:text-lg">
         <h2
            class="text-main !font-poppins-rounded relative mb-6 text-center text-4xl font-extrabold tracking-tight lg:mb-7"
         >
            About me
            <span
               class="bg-accent-secondary absolute -bottom-1.5 left-1/2 h-1.5 w-16 -translate-x-1/2 rounded"
            ></span>
         </h2>
         <p class="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam metus, finibus eu
            molestie in, egestas ut tortor. Sed augue erat, dapibus sed sem tristique, condimentum
            pulvinar nulla. Integer in interdum ante, vitae tincidunt ante. Integer mollis sapien ac
            lorem iaculis sodales. Donec eget lacus vitae arcu efficitur dignissim.
         </p>
         <p class="mb-4">
            Mauris tincidunt neque sem, congue convallis ipsum varius eu. Maecenas et posuere sem.
            Quisque volutpat tincidunt nisi, id fringilla risus aliquam nec. Nunc maximus erat non
            semper rutrum. Proin eleifend justo eu orci tempor auctor. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla ultrices eros sit amet eros sollicitudin, vitae
            faucibus odio scelerisque.
         </p>
         <p>
            Phasellus augue urna, molestie eget felis vel, hendrerit efficitur ipsum. Donec quis
            blandit nisl, id tincidunt nulla. Pellentesque interdum leo efficitur suscipit
            elementum. Proin et magna volutpat, venenatis elit tempor, commodo velit.
         </p>
      </div>
      <div class="mt-8 flex items-center justify-center">
         <div class="grid grid-cols-2 gap-4">
            <img
               class="w-full rounded-lg"
               src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
               alt="office content 1"
            />
            <img
               class="mt-4 w-full rounded-lg lg:mt-10"
               src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
               alt="office content 2"
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
         <p class="text-center text-lg font-light">{{ feature.description }}</p>
      </div>
   </div>
</template>
