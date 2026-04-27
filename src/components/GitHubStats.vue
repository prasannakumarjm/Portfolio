<script setup>
import { Activity, GitPullRequest, Star } from 'lucide-vue-next'
import SectionHeading from './SectionHeading.vue'

const stats = [
  { label: 'Repositories', value: '42', icon: Star },
  { label: 'Pull Requests', value: '315+', icon: GitPullRequest },
  { label: 'Contribution Score', value: 'A+', icon: Activity },
]
</script>

<template>
  <section class="section-shell">
    <SectionHeading
      eyebrow="GitHub"
      title="Engineering activity snapshot"
      description="A polished mock stats area ready to be connected to live GitHub data when needed."
    />

    <div class="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
      <div
        v-for="(item, index) in stats"
        :key="item.label"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 620, delay: index * 110 } }"
        class="metric-card justify-center text-center"
      >
        <component :is="item.icon" class="mx-auto text-cyan-600 dark:text-cyan-300" :size="30" />
        <div>
          <p class="mt-3 text-4xl font-black text-slate-950 dark:text-white">{{ item.value }}</p>
          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">{{ item.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
