<template>
   <div class="mx-auto max-w-screen-sm text-center">
      <h2
         :class="{
            'text-main !font-poppins-rounded text-center text-4xl font-extrabold tracking-tight': true,
            'mb-5 lg:mb-6': true,
         }"
      >
         Let's build something cool together!
      </h2>
      <p class="text-main font-poppins mb-6 text-center font-light sm:text-lg lg:mb-7">
         If you've got an idea, a project, or just a spark of curiosity, my lab is always open.
         Let's talk and see what we can create together.
      </p>
      <div class="flex justify-center">
         <div class="shadow-inverse group cursor-pointer rounded-lg">
            <a
               href="mailto:simone.sada93+website@gmail.com?subject=Let's%20connect&body=Hi%20Simone,%0A%0A"
               class="border-inverse shadow-inverse bg-accent-secondary font-poppins-rounded group-hover:-translate-0.5 inline-flex items-center justify-center gap-1 rounded-lg border-2 p-4 px-8 text-white transition-all duration-150"
            >
               Get in touch
               <i class="pi pi-bolt text-lg" />
            </a>
         </div>
      </div>
   </div>
</template>
