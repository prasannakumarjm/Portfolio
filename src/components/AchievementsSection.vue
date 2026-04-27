<script setup>
import { achievements } from '../data'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="achievements" class="section-shell">
    <SectionHeading
      eyebrow="Achievements"
      title="Recognition for ownership and delivery"
      description="Awards that reflect consistent execution, technical judgment, and team contribution across demanding environments."
    />

    <div class="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
      <article
        v-for="(achievement, index) in achievements"
        :key="achievement.title"
        v-motion
        :initial="{ opacity: 0, scale: 0.94 }"
        :visible-once="{ opacity: 1, scale: 1, transition: { duration: 600, delay: index * 120 } }"
        class="achievement-card"
      >
        <div class="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-emerald-500 text-white shadow-xl shadow-cyan-500/20">
          <component :is="achievement.icon" :size="30" />
        </div>
        <h3 class="mt-6 text-2xl font-black text-slate-950 dark:text-white">{{ achievement.title }}</h3>
        <p class="mt-2 font-semibold text-cyan-700 dark:text-cyan-200">{{ achievement.company }}</p>
        <p class="mt-4 leading-7 text-slate-600 dark:text-slate-300">{{ achievement.description }}</p>
      </article>
    </div>
  </section>
</template>
