<script setup lang="ts">
import type { PortfolioContent } from '~/types/portfolio'

const props = defineProps<{
  hero: PortfolioContent['hero']
  profile: PortfolioContent['profile']
}>()

const nameParts = computed(() => {
  const parts = props.profile.fullName.trim().split(/\s+/)

  return {
    leading: parts.slice(0, -1).join(' '),
    accent: parts.at(-1) ?? props.profile.fullName,
  }
})
</script>

<template>
  <section
    id="home"
    aria-labelledby="home-heading"
    class="hero-section"
  >
    <AppContainer>
      <div class="hero-layout">
        <div class="hero-copy">
          <p class="hero-eyebrow">
            {{ hero.greeting }}
          </p>

          <h1
            id="home-heading"
            class="hero-name"
          >
            <span v-if="nameParts.leading">{{ nameParts.leading }}</span>
            <span class="hero-accent">{{ nameParts.accent }}</span>
          </h1>

          <p class="hero-role">
            <span>{{ hero.prefix }}</span>
            <span class="hero-role-title">
              {{ profile.professionalTitle }}
            </span>
          </p>

          <p class="hero-summary">
            {{ profile.summary }}
          </p>

          <div class="hero-actions">
            <BaseLink href="#portfolio" variant="primary">
              {{ hero.primaryCta }}
            </BaseLink>
            <BaseLink href="#contact" variant="outline">
              {{ hero.secondaryCta }}
            </BaseLink>
          </div>
        </div>

        <div class="hero-visual" aria-hidden="true">
          <div class="hero-visual-frame">
            <div class="hero-ring hero-ring-outer" />
            <div class="hero-ring hero-ring-middle" />
            <div class="hero-ring hero-ring-inner" />
            <picture class="contents">
              <source :srcset="'/images/alex-morgan-demo.webp'" type="image/webp">
              <img
                :src="profile.image"
                alt=""
                width="391"
                height="536"
                fetchpriority="high"
                class="hero-portrait"
              >
            </picture>
          </div>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<style scoped>
.hero-section {
  display: flex;
  min-height: 663px;
  align-items: center;
  padding-block: 2.25rem;
  scroll-margin-top: 7rem;
}

.hero-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(18rem, 0.92fr);
  align-items: center;
  gap: 3rem;
}

.hero-copy {
  position: relative;
  z-index: 2;
  min-width: 0;
  text-align: start;
}

.hero-eyebrow {
  margin: 0;
  font-size: clamp(1.25rem, 2vw, 2rem);
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.hero-name {
  display: flex;
  flex-wrap: wrap;
  gap: 0.2em;
  margin: 1.5rem 0 0;
  font-size: clamp(3.5rem, 7vw, 5.625rem);
  font-weight: 700;
  line-height: 0.9;
  letter-spacing: -0.025em;
}

.hero-accent,
.hero-role-title {
  color: var(--color-brand);
}

.hero-role {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.25rem 0.75rem;
  margin: 2.5rem 0 0;
  font-size: 1.875rem;
  font-weight: 700;
}

.hero-role-title {
  font-size: clamp(2.25rem, 3.2vw, 3.125rem);
  line-height: 1.15;
}

.hero-summary {
  max-width: 36rem;
  margin: 1.5rem 0 0;
  color: var(--color-muted);
  font-size: 1.125rem;
  line-height: 1.75;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.25rem;
}

.hero-visual {
  width: 100%;
  max-width: 30rem;
  margin-inline: auto;
}

.hero-visual-frame {
  position: relative;
  display: flex;
  width: 100%;
  aspect-ratio: 1;
  align-items: flex-end;
  justify-content: center;
}

.hero-ring {
  position: absolute;
  border-radius: 50%;
}

.hero-ring-outer {
  inset: 0;
  border: 4px solid #344139;
}

.hero-ring-middle {
  inset: 5.5%;
  background: #303b36;
}

.hero-ring-inner {
  inset: 12.5%;
  background: linear-gradient(135deg, #a7d75c 0%, #78b92f 72%, #5f9b23 100%);
}

.hero-portrait {
  position: relative;
  z-index: 1;
  display: block;
  width: auto;
  max-width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center bottom;
}

@media (max-width: 767px) {
  .hero-section {
    min-height: auto;
    padding-block: 4rem;
  }

  .hero-layout {
    grid-template-columns: minmax(0, 1fr);
  }

  .hero-copy {
    text-align: center;
  }

  .hero-name,
  .hero-role,
  .hero-actions {
    justify-content: center;
  }

  .hero-summary {
    margin-inline: auto;
  }

  .hero-visual {
    max-width: 24rem;
  }
}
</style>
