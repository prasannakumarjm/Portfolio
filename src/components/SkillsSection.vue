<script setup>
import { skillGroups } from '../data'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="skills" class="section-shell">
    <SectionHeading
      eyebrow="Skills"
      title="A practical enterprise technology stack"
      description="Prominent strengths across backend engineering, frontend delivery, databases, deployment pipelines, and production infrastructure."
    />

    <div class="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-5">
      <article
        v-for="(group, index) in skillGroups"
        :key="group.title"
        v-motion
        :initial="{ opacity: 0, y: 34 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 650, delay: index * 90 } }"
        class="skill-card"
      >
        <div :class="['mb-7 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-xl', group.tone]">
          <component :is="group.icon" :size="27" />
        </div>
        <h3 class="text-xl font-black text-slate-950 dark:text-white">{{ group.title }}</h3>
        <div class="mt-6 space-y-5">
          <div v-for="skill in group.skills" :key="skill.name">
            <div class="mb-2 flex items-center justify-between text-sm">
              <span class="font-semibold text-slate-700 dark:text-slate-200">{{ skill.name }}</span>
              <span class="text-slate-500 dark:text-slate-400">{{ skill.level }}%</span>
            </div>
            <div class="h-2 rounded-full bg-slate-200 dark:bg-white/10">
              <div class="skill-meter rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400" :style="{ width: `${skill.level}%` }"></div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
