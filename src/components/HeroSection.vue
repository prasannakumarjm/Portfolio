<script setup>
import { ArrowDown, Download, ExternalLink, Sparkles } from 'lucide-vue-next'
</script>

<template>
  <section id="home" class="relative flex min-h-screen items-center px-4 pb-16 pt-32 sm:px-6 lg:px-8">
    <div class="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
      <div
        v-motion
        :initial="{ opacity: 0, y: 36 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="relative z-10"
      >
        <div class="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-700 shadow-lg shadow-cyan-500/10 dark:text-cyan-200">
          <Sparkles :size="16" />
          Available for enterprise leadership roles
        </div>
        <h1 class="mt-8 max-w-4xl text-5xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-7xl">
          Prasanna Kumar J
        </h1>
        <p class="mt-5 text-2xl font-semibold text-cyan-700 dark:text-cyan-200">Project Manager | .NET Core Specialist</p>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          10+ years building scalable enterprise solutions with pragmatic architecture, reliable delivery, and calm technical leadership.
        </p>
        <div class="mt-9 flex flex-col gap-4 sm:flex-row">
          <a class="primary-button" href="#projects">
            View Projects
            <ExternalLink :size="18" />
          </a>
          <a class="secondary-button" href="/assets/prasanna-kumar-j-resume.pdf" download>
            Download Resume
            <Download :size="18" />
          </a>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.92, y: 28 }"
        :enter="{ opacity: 1, scale: 1, y: 0, transition: { duration: 900, delay: 160 } }"
        class="relative mx-auto w-full max-w-lg"
      >
        <div class="profile-frame">
          <img class="h-full w-full object-cover object-top" src="/assets/prasanna-profile.jpg" alt="Prasanna Kumar J portrait" />
        </div>
        <div class="absolute -bottom-8 left-4 right-4 rounded-3xl border border-white/50 bg-white/80 p-5 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75">
          <div class="grid grid-cols-3 gap-3 text-center">
            <div>
              <p class="text-2xl font-black text-slate-950 dark:text-white">10+</p>
              <p class="text-xs text-slate-500 dark:text-slate-400">Years</p>
            </div>
            <div>
              <p class="text-2xl font-black text-slate-950 dark:text-white">28+</p>
              <p class="text-xs text-slate-500 dark:text-slate-400">Projects</p>
            </div>
            <div>
              <p class="text-2xl font-black text-slate-950 dark:text-white">14+</p>
              <p class="text-xs text-slate-500 dark:text-slate-400">Team</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a class="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce rounded-full border border-slate-200 p-3 text-slate-600 dark:border-white/10 dark:text-slate-300 md:block" href="#about" aria-label="Scroll to about">
      <ArrowDown :size="20" />
    </a>
  </section>
</template>
