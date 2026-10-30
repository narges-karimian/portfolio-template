<script setup lang="ts">
withDefaults(defineProps<{
  as?: string
}>(), {
  as: 'div',
})
</script>

<template>
  <component :is="as" class="mx-auto w-full max-w-[1248px] px-6 sm:px-8">
    <slot />
  </component>
</template>
