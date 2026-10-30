<script setup lang="ts">
import type { PortfolioContent } from '~/types/portfolio'

defineProps<{
  heading: string
  note: string
  experiences: PortfolioContent['experiences']
}>()
</script>

<template>
  <section id="experience" aria-labelledby="experience-heading" class="section-shell experience-section">
    <AppContainer>
      <SectionHeading id="experience-heading" :label="heading" />

      <p class="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-white/50">
        {{ note }}
      </p>

      <ol class="mt-14 grid gap-x-14 gap-y-10 xl:grid-cols-2" role="list">
        <li
          v-for="experience in experiences"
          :key="experience.id"
          class="experience-entry"
        >
          <div class="experience-date" :class="{ 'experience-date-current': experience.isCurrent }">
            <span class="experience-year">
              {{ experience.year }}
            </span>
            <p class="experience-period">
              <span>{{ experience.startDate }}</span>
              <span aria-hidden="true">—</span>
              <span>{{ experience.endDate }}</span>
            </p>
          </div>

          <article class="experience-card">
            <h3 class="text-lg font-bold uppercase leading-6 text-brand-light">
              {{ experience.jobTitle }}
            </h3>
            <p class="mt-1 text-sm font-medium text-white">
              {{ experience.company }}
            </p>
            <p class="mt-5 text-sm leading-6 text-white/80">
              {{ experience.description }}
            </p>
          </article>
        </li>
      </ol>
    </AppContainer>
  </section>
</template>

<style scoped>
.experience-section {
  min-height: 43rem;
}

.experience-entry {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;
  min-width: 0;
}

.experience-date {
  align-self: center;
  color: #969696;
}

.experience-year {
  display: block;
  font-size: clamp(3.25rem, 16vw, 5rem);
  font-weight: 700;
  letter-spacing: 0.13em;
  line-height: 0.85;
  white-space: nowrap;
}

.experience-period {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.75rem;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4;
  text-transform: uppercase;
}

.experience-date-current .experience-year {
  color: var(--color-brand);
}

.experience-card {
  min-height: 14.875rem;
  padding: 1.75rem;
  background: #383838;
}

@media (min-width: 640px) {
  .experience-entry {
    grid-template-columns: 8.5rem minmax(0, 1fr);
    gap: 0;
  }

  .experience-date {
    position: relative;
    z-index: 1;
    margin-inline-end: -1.5rem;
  }

  .experience-year {
    font-size: 4.5rem;
  }

  .experience-period {
    justify-content: flex-end;
    padding-inline-end: 1rem;
    text-align: end;
  }

  .experience-card {
    padding: 2rem 1.75rem;
    padding-inline-start: 4.75rem;
  }
}

@media (min-width: 1280px) {
  .experience-entry {
    grid-template-columns: 7.5rem minmax(0, 1fr);
  }

  .experience-date {
    margin-inline-end: -2rem;
  }

  .experience-year {
    font-size: 4rem;
  }

  .experience-card {
    padding-inline-start: 4.5rem;
  }
}
</style>
