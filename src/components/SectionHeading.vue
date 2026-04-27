<script setup>
defineProps({
  eyebrow: String,
  title: String,
  description: String,
})
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 26 }"
    :visible-once="{ opacity: 1, y: 0, transition: { duration: 650 } }"
    class="mx-auto mb-12 max-w-3xl text-center"
  >
    <p class="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600 dark:text-cyan-300">{{ eyebrow }}</p>
    <h2 class="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">{{ title }}</h2>
    <p class="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">{{ description }}</p>
  </div>
</template>
