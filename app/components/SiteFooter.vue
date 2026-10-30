<script setup lang="ts">
import type { SocialLink } from '~/types/portfolio'

const props = defineProps<{
  copyright: string
  ownerName: string
  socials: SocialLink[]
}>()

const currentYear = new Date().getFullYear()
const copyrightText = computed(() => props.copyright
  .replace('{year}', String(currentYear))
  .replace('{name}', props.ownerName))
</script>

<template>
  <footer class="border-t border-white/10 py-8 text-muted">
    <AppContainer class="grid justify-items-center gap-5 text-center">
      <p class="text-sm text-center">
        {{ copyrightText }}
      </p>
      <SocialLinks :links="socials" compact />
    </AppContainer>
  </footer>
</template>
