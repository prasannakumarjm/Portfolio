<script setup>
import { Menu, Moon, Sun, X } from 'lucide-vue-next'
import { ref } from 'vue'
import { navItems } from '../data'

const isDark = defineModel('isDark', { type: Boolean, default: true })
const isOpen = ref(false)

function scrollToSection(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  isOpen.value = false
}
</script>

<template>
  <header class="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
    <nav class="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/50 bg-white/75 px-4 py-3 shadow-xl shadow-slate-900/5 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-950/60 dark:shadow-black/20 sm:px-6">
      <button class="flex items-center gap-3" type="button" @click="scrollToSection('#home')">
        <span class="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 dark:bg-white dark:text-slate-950">PK</span>
        <span class="hidden text-left sm:block">
          <span class="block text-sm font-bold text-slate-950 dark:text-white">Prasanna Kumar J</span>
          <span class="block text-xs text-slate-500 dark:text-slate-400">Project Manager</span>
        </span>
      </button>

      <div class="hidden items-center gap-1 lg:flex">
        <button
          v-for="item in navItems"
          :key="item.href"
          type="button"
          class="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-950 hover:text-white dark:text-slate-300 dark:hover:bg-white dark:hover:text-slate-950"
          @click="scrollToSection(item.href)"
        >
          {{ item.label }}
        </button>
      </div>

      <div class="flex items-center gap-2">
        <button class="icon-button" type="button" aria-label="Toggle dark mode" @click="isDark = !isDark">
          <Sun v-if="isDark" :size="18" />
          <Moon v-else :size="18" />
        </button>
        <button class="icon-button lg:hidden" type="button" aria-label="Toggle navigation" @click="isOpen = !isOpen">
          <X v-if="isOpen" :size="20" />
          <Menu v-else :size="20" />
        </button>
      </div>
    </nav>

    <Transition name="menu">
      <div v-if="isOpen" class="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/60 bg-white/90 p-3 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/90 lg:hidden">
        <button
          v-for="item in navItems"
          :key="item.href"
          type="button"
          class="block w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-cyan-50 dark:text-slate-200 dark:hover:bg-white/10"
          @click="scrollToSection(item.href)"
        >
          {{ item.label }}
        </button>
      </div>
    </Transition>
  </header>
</template>
