<script setup lang="ts">
const props = withDefaults(defineProps<{
  id?: string
  label: string
  backgroundLabel?: string
}>(), {
  id: undefined,
  backgroundLabel: undefined,
})

const ghostLabel = computed(() => props.backgroundLabel ?? props.label)
</script>

<template>
  <div class="section-heading">
    <span aria-hidden="true" class="section-heading-ghost">
      {{ ghostLabel }}
    </span>
    <h2 :id="id" class="section-heading-title">
      {{ label }}
    </h2>
    <span aria-hidden="true" class="section-heading-rule">
      <span class="section-heading-rule-accent" />
    </span>
  </div>
</template>

<style scoped>
.section-heading {
  position: relative;
  isolation: isolate;
  display: flex;
  min-height: 8rem;
  max-width: 100%;
  margin-inline: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  text-transform: uppercase;
}

.section-heading-ghost {
  position: absolute;
  z-index: -1;
  inset-inline: 0;
  top: 50%;
  overflow: hidden;
  color: rgb(255 255 255 / 3%);
  font-size: clamp(4.25rem, 9vw, 7.5rem);
  font-weight: 700;
  line-height: 1;
  pointer-events: none;
  text-overflow: clip;
  transform: translateY(-50%);
  white-space: nowrap;
}

.section-heading-title {
  margin: 0;
  color: #fff;
  font-size: clamp(2rem, 4vw, 3.125rem);
  font-weight: 700;
  line-height: 1.2;
}

.section-heading-rule {
  position: relative;
  display: block;
  width: min(18.75rem, 75vw);
  height: 0.25rem;
  margin-top: 1.25rem;
  background: #fff;
}

.section-heading-rule-accent {
  position: absolute;
  inset-block: 0;
  left: 50%;
  width: 40%;
  background: var(--color-brand);
  transform: translateX(-50%);
}
</style>
