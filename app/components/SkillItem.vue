<script setup lang="ts">
import type { SkillItem } from '~/types/portfolio'

withDefaults(defineProps<{
  skill: SkillItem
  category?: string
  featured?: boolean
}>(), {
  category: undefined,
  featured: false,
})
</script>

<template>
  <article class="skill-card" :class="{ 'skill-card-featured': featured }">
    <span class="skill-icon" aria-hidden="true">
      {{ skill.icon ?? skill.name.slice(0, 2) }}
    </span>
    <p v-if="category" class="skill-category">
      {{ category }}
    </p>
    <h3 class="skill-name">
      {{ skill.name }}
    </h3>
    <p v-if="skill.description" class="skill-description">
      {{ skill.description }}
    </p>
  </article>
</template>

<style scoped>
.skill-card {
  min-height: 12rem;
  padding: 1.125rem;
  border: 1px solid transparent;
  border-radius: 0.625rem;
  background: #fff;
  color: #171820;
  box-shadow: var(--shadow-card);
  transition: border-color 180ms ease, transform 180ms ease;
}

.skill-card:hover {
  border-color: var(--color-brand);
  transform: translateY(-0.25rem);
}

.skill-card-featured {
  border-color: var(--color-brand);
}

.skill-icon {
  display: inline-grid;
  width: 2.625rem;
  height: 2.625rem;
  place-items: center;
  border-radius: 50%;
  background: var(--color-brand);
  color: #17200f;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  text-transform: uppercase;
}

.skill-name {
  margin: 0.25rem 0 0;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.25;
  text-transform: uppercase;
}

.skill-category {
  margin: 0.75rem 0 0;
  color: #5e8e29;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.2;
  text-transform: uppercase;
}

.skill-description {
  margin: 0.5rem 0 0;
  color: #242424;
  font-size: 0.9375rem;
  font-weight: 300;
  line-height: 1.35;
}
</style>
