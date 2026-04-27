<script setup>
import { MapPin } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'
import { stats } from '../data'
import SectionHeading from './SectionHeading.vue'

const counters = ref(stats.map(() => 0))

onMounted(() => {
  const duration = 1300
  const started = performance.now()
  const tick = (now) => {
    const progress = Math.min((now - started) / duration, 1)
    counters.value = stats.map((stat) => Math.round(stat.value * progress))
    if (progress < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
})
</script>

<template>
  <section id="about" class="section-shell">
    <SectionHeading
      eyebrow="About"
      title="Delivery leadership with hands-on engineering depth"
      description="A strategic project manager focused on building dependable enterprise applications across .NET Core, cloud solutions, DevOps, and database-heavy systems."
    />

    <div class="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.8fr]">
      <div
        v-motion
        :initial="{ opacity: 0, x: -28 }"
        :visible-once="{ opacity: 1, x: 0, transition: { duration: 700 } }"
        class="glass-panel p-8"
      >
        <p class="text-lg leading-9 text-slate-700 dark:text-slate-200">
          Strategic Project Manager with expertise in .NET Core, cloud solutions, and DevOps. Experienced in leading teams, coordinating stakeholders, and delivering enterprise applications that balance delivery speed with long-term maintainability.
        </p>
        <p class="mt-5 text-lg leading-9 text-slate-700 dark:text-slate-200">
          I bring the practical fluency of a senior engineer into project leadership: architecture discussions stay grounded, sprint plans stay realistic, and release decisions stay close to user value.
        </p>
        <div class="mt-7 inline-flex items-center gap-3 rounded-full bg-slate-950 px-5 py-3 text-white dark:bg-white dark:text-slate-950">
          <MapPin :size="18" />
          Palakkad, Kerala, India
        </div>
      </div>

      <div class="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          v-motion
          :initial="{ opacity: 0, y: 22 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
          class="metric-card"
        >
          <component :is="stat.icon" class="text-cyan-600 dark:text-cyan-300" :size="28" />
          <div>
            <p class="text-4xl font-black text-slate-950 dark:text-white">{{ counters[index] }}{{ stat.suffix }}</p>
            <p class="text-sm text-slate-500 dark:text-slate-400">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
