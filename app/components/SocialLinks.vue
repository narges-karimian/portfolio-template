<script setup lang="ts">
import type { SocialLink } from '~/types/portfolio'

const props = withDefaults(defineProps<{
  links: SocialLink[]
  compact?: boolean
}>(), {
  compact: false,
})

const visibleLinks = computed(() => props.links.filter(({ url }) => {
  try {
    const parsedUrl = new URL(url)
    return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:'
  }
  catch {
    return false
  }
}))
</script>

<template>
  <ul v-if="visibleLinks.length" class="flex flex-wrap items-center gap-3" aria-label="Social links">
    <li v-for="link in visibleLinks" :key="link.label">
      <a
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center border border-brand text-sm font-medium text-white transition-colors hover:bg-brand hover:text-ink"
        :class="compact ? 'min-h-10 rounded-md px-3' : 'min-h-11 rounded-full px-4'"
        :aria-label="`${link.label} (opens in a new tab)`"
      >
        {{ link.label }}
      </a>
    </li>
  </ul>
</template>
