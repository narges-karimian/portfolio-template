<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <a href="#home" class="inline-flex shrink-0 font-bold" :aria-label="label">
    <span class="grid size-14 place-items-center bg-brand text-2xl text-canvas">LO</span>
    <span class="grid size-14 place-items-center border border-brand text-2xl text-brand">GO</span>
  </a>
</template>
