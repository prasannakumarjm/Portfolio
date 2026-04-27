<script setup>
import { Linkedin, Mail, Phone, Send } from 'lucide-vue-next'
import { contactLinks } from '../data'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="contact" class="section-shell pb-16">
    <SectionHeading
      eyebrow="Contact"
      title="Let's build the next reliable system"
      description="Reach out for project leadership, .NET Core architecture, enterprise delivery, or collaboration opportunities."
    />

    <div class="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <div
        v-motion
        :initial="{ opacity: 0, x: -28 }"
        :visible-once="{ opacity: 1, x: 0, transition: { duration: 650 } }"
        class="glass-panel p-8"
      >
        <h3 class="text-2xl font-black text-slate-950 dark:text-white">Contact Details</h3>
        <div class="mt-7 space-y-4">
          <a
            v-for="link in contactLinks"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noreferrer"
            class="contact-link"
          >
            <component :is="link.icon" :size="20" />
            <span>{{ link.label }}</span>
          </a>
        </div>
        <div class="mt-8 grid gap-3 sm:grid-cols-2">
          <a class="primary-button justify-center" href="mailto:prasannakumarjj@gmail.com">
            <Mail :size="18" />
            Email
          </a>
          <a class="secondary-button justify-center" href="tel:+919037678898">
            <Phone :size="18" />
            Call
          </a>
        </div>
        <a class="mt-3 flex items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-700 dark:border-white/10 dark:text-slate-200 dark:hover:text-cyan-200" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <Linkedin :size="18" />
          LinkedIn
        </a>
      </div>

      <form
        v-motion
        :initial="{ opacity: 0, x: 28 }"
        :visible-once="{ opacity: 1, x: 0, transition: { duration: 650 } }"
        class="glass-panel p-8"
        action="mailto:prasannakumarjj@gmail.com"
        method="post"
        enctype="text/plain"
      >
        <div class="grid gap-5 sm:grid-cols-2">
          <label class="field-label">
            Name
            <input class="field-input" name="name" type="text" placeholder="Your name" required />
          </label>
          <label class="field-label">
            Email
            <input class="field-input" name="email" type="email" placeholder="you@example.com" required />
          </label>
        </div>
        <label class="field-label mt-5">
          Message
          <textarea class="field-input min-h-40 resize-y" name="message" placeholder="Tell me about the opportunity..." required></textarea>
        </label>
        <button class="primary-button mt-6" type="submit">
          Send Message
          <Send :size="18" />
        </button>
      </form>
    </div>
  </section>
</template>
