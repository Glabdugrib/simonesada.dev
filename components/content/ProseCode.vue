<template>
   <code
      class="inline-block rounded-md border border-stone-300 bg-stone-100 px-1.5 py-0.5 font-mono text-sm font-medium text-stone-800"
      ><slot
   /></code>
</template>

<style scoped>
code::before,
code::after {
   content: '';
}
</style>
