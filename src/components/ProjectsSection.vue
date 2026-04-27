<script setup>
import { ExternalLink, Github } from 'lucide-vue-next'
import { projects } from '../data'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="projects" class="section-shell">
    <SectionHeading
      eyebrow="Projects"
      title="Enterprise-style systems with production sensibility"
      description="Representative project concepts shaped around scalable architecture, observability, secure workflows, and business reliability."
    />

    <div class="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
      <article
        v-for="(project, index) in projects"
        :key="project.title"
        v-motion
        :initial="{ opacity: 0, y: 32 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 650, delay: index * 110 } }"
        class="project-card"
      >
        <div :class="['project-visual bg-gradient-to-br', project.image]">
          <component :is="project.icon" :size="54" class="text-white" />
        </div>
        <div class="p-6">
          <h3 class="text-2xl font-black text-slate-950 dark:text-white">{{ project.title }}</h3>
          <p class="mt-4 min-h-24 leading-7 text-slate-600 dark:text-slate-300">{{ project.summary }}</p>
          <div class="mt-5 flex flex-wrap gap-2">
            <span v-for="tech in project.stack" :key="tech" class="tech-badge">{{ tech }}</span>
          </div>
          <div class="mt-6 flex gap-3">
            <a class="small-button" href="https://github.com/" target="_blank" rel="noreferrer">
              <Github :size="17" />
              GitHub
            </a>
            <a class="small-button" href="https://example.com/" target="_blank" rel="noreferrer">
              <ExternalLink :size="17" />
              Demo
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
