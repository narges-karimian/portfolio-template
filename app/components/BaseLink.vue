<script setup lang="ts">
const props = withDefaults(defineProps<{
  href: string
  variant?: 'primary' | 'outline' | 'quiet'
  external?: boolean
  download?: string | boolean
  ariaLabel?: string
  disabled?: boolean
}>(), {
  variant: 'primary',
  external: false,
  download: false,
  ariaLabel: undefined,
  disabled: false,
})

const variantClasses = computed(() => ({
  primary: 'border-brand bg-brand text-ink hover:border-brand-light hover:bg-brand-light',
  outline: 'border-brand text-white hover:bg-brand hover:text-ink',
  quiet: 'border-transparent text-white hover:text-brand',
}[props.variant]))
</script>

<template>
  <span
    v-if="disabled"
    :aria-label="ariaLabel"
    aria-disabled="true"
    class="inline-flex min-h-12 cursor-not-allowed items-center justify-center rounded-md border px-7 py-3 text-base font-semibold uppercase tracking-wide opacity-50"
    :class="variantClasses"
  >
    <slot />
  </span>
  <a
    v-else
    :href="href"
    :aria-label="ariaLabel"
    :download="download"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="inline-flex min-h-12 items-center justify-center rounded-md border px-7 py-3 text-base font-semibold uppercase tracking-wide transition-colors duration-200"
    :class="variantClasses"
  >
    <slot />
  </a>
</template>
