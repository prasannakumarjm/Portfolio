<script setup>
import { ChevronDown } from 'lucide-vue-next'
import { ref } from 'vue'
import { roles } from '../data'
import SectionHeading from './SectionHeading.vue'

const openIndex = ref(0)
</script>

<template>
  <section id="experience" class="section-shell">
    <SectionHeading
      eyebrow="Experience"
      title="A decade of enterprise delivery"
      description="A focused timeline of leadership, technical ownership, and progressively larger delivery responsibilities."
    />

    <div class="mx-auto max-w-4xl">
      <div class="relative border-l border-cyan-500/30 pl-6 sm:pl-10">
        <article
          v-for="(role, index) in roles"
          :key="role.title"
          v-motion
          :initial="{ opacity: 0, x: 28 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 650, delay: index * 120 } }"
          class="relative mb-6"
        >
          <span class="absolute -left-[34px] top-8 h-4 w-4 rounded-full border-4 border-white bg-cyan-500 shadow-lg shadow-cyan-500/40 dark:border-[#070b12] sm:-left-[50px]"></span>
          <button class="timeline-card w-full text-left" type="button" @click="openIndex = openIndex === index ? -1 : index">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600 dark:text-cyan-300">{{ role.period }}</p>
                <h3 class="mt-2 text-2xl font-black text-slate-950 dark:text-white">{{ role.title }}</h3>
                <p class="mt-1 font-semibold text-slate-500 dark:text-slate-400">{{ role.company }}</p>
              </div>
              <ChevronDown :class="['mt-1 shrink-0 text-slate-500 transition duration-300', openIndex === index ? 'rotate-180' : '']" :size="24" />
            </div>
            <p class="mt-5 leading-8 text-slate-600 dark:text-slate-300">{{ role.summary }}</p>
            <Transition name="accordion">
              <ul v-if="openIndex === index" class="mt-5 space-y-3 border-t border-slate-200 pt-5 text-slate-600 dark:border-white/10 dark:text-slate-300">
                <li v-for="item in role.details" :key="item" class="flex gap-3">
                  <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-500"></span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </Transition>
          </button>
        </article>
      </div>
    </div>
  </section>
</template>
