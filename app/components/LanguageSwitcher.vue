<script setup lang="ts">
import type { Locale } from '~/types/portfolio'

const { content, locale, setLocale } = usePortfolioLocale()

const locales: Array<{ value: Locale, label: string }> = [
  { value: 'en', label: 'EN' },
  { value: 'fa', label: 'FA' },
]
</script>

<template>
  <div
    class="inline-flex rounded-md border border-white/20 p-1"
    role="group"
    :aria-label="content.accessibility.languageSwitcher"
  >
    <button
      v-for="option in locales"
      :key="option.value"
      type="button"
      class="min-h-9 min-w-10 rounded px-2 text-xs font-bold tracking-wider transition-colors"
      :class="locale === option.value ? 'bg-brand text-ink' : 'text-white hover:text-brand'"
      :aria-pressed="locale === option.value"
      @click="setLocale(option.value)"
    >
      {{ option.label }}
    </button>
  </div>
</template>
