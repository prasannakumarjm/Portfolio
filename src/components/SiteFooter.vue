<script setup>
import { Github, Linkedin, Mail } from 'lucide-vue-next'
</script>

<template>
  <footer class="border-t border-slate-200 px-4 py-8 dark:border-white/10 sm:px-6 lg:px-8">
    <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
      <p class="text-sm text-slate-500 dark:text-slate-400">
        © {{ new Date().getFullYear() }} Prasanna Kumar J. Built with Vue 3 and Tailwind CSS.
      </p>
      <div class="flex items-center gap-2">
        <a class="icon-button" href="mailto:prasannakumarjj@gmail.com" aria-label="Email">
          <Mail :size="18" />
        </a>
        <a class="icon-button" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin :size="18" />
        </a>
        <a class="icon-button" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github :size="18" />
        </a>
      </div>
    </div>
  </footer>
</template>
