<script setup lang="ts">
import type { PortfolioContent } from '~/types/portfolio'

defineProps<{
  about: PortfolioContent['about']
}>()
</script>

<template>
  <section id="about" aria-labelledby="about-heading" class="scroll-mt-28 py-16 lg:py-20">
    <AppContainer>
      <SectionHeading id="about-heading" :label="about.heading" />

      <div class="mx-auto mt-5 max-w-[1130px] text-center">
        <h3 class="text-[clamp(2rem,4vw,3.125rem)] font-semibold leading-tight text-white">
          {{ about.title }}
        </h3>

        <div class="mt-5 space-y-3 text-base leading-7 text-white/85 lg:text-lg lg:leading-7">
          <p v-for="paragraph in about.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </AppContainer>
  </section>
</template>
