<script setup>
import { onMounted, ref, watch } from 'vue'
import AchievementsSection from './components/AchievementsSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import GitHubStats from './components/GitHubStats.vue'
import HeroSection from './components/HeroSection.vue'
import LoadingScreen from './components/LoadingScreen.vue'
import Navbar from './components/Navbar.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import SkillsSection from './components/SkillsSection.vue'
import TimelineSection from './components/TimelineSection.vue'

const isDark = ref(true)
const isLoading = ref(true)

onMounted(() => {
  const storedTheme = localStorage.getItem('theme')
  isDark.value = storedTheme ? storedTheme === 'dark' : true
  setTimeout(() => {
    isLoading.value = false
  }, 1100)
})

watch(
  isDark,
  (value) => {
    document.documentElement.classList.toggle('dark', value)
    localStorage.setItem('theme', value ? 'dark' : 'light')
  },
  { immediate: true },
)
</script>

<template>
  <LoadingScreen v-if="isLoading" />
  <div class="min-h-screen overflow-hidden bg-slate-50 text-slate-950 transition-colors duration-500 dark:bg-[#070b12] dark:text-white">
    <div class="background-field" aria-hidden="true">
      <span class="field-line field-line-a"></span>
      <span class="field-line field-line-b"></span>
      <span class="field-line field-line-c"></span>
    </div>

    <Navbar v-model:is-dark="isDark" />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TimelineSection />
      <ProjectsSection />
      <AchievementsSection />
      <GitHubStats />
      <ContactSection />
    </main>
    <SiteFooter />
  </div>
</template>
