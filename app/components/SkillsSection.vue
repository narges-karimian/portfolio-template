<script setup lang="ts">
import type { PortfolioContent } from "~/types/portfolio";

const props = defineProps<{
  skills: PortfolioContent["skills"];
}>();

const track = ref<HTMLElement | null>(null);
const currentIndex = ref(0);
const autoplayDelay = 5000;

let autoplayTimer: number | undefined;
let isHovered = false;
let hasFocusWithin = false;

const skillItems = computed(() =>
  props.skills.categories.flatMap((category) =>
    category.items.map((skill) => ({
      category: category.title,
      key: `${category.title}-${skill.name}`,
      skill,
    })),
  ),
);

const showSkill = (offset: number) => {
  const itemCount = skillItems.value.length;

  if (!itemCount) {
    return;
  }

  currentIndex.value = (currentIndex.value + offset + itemCount) % itemCount;

  const trackElement = track.value;
  const target = trackElement?.querySelector<HTMLElement>(
    `[data-skill-index="${currentIndex.value}"]`,
  );

  if (!trackElement || !target) {
    return;
  }

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const trackBounds = trackElement.getBoundingClientRect();
  const targetBounds = target.getBoundingClientRect();
  const horizontalOffset =
    targetBounds.left -
    trackBounds.left -
    (trackBounds.width - targetBounds.width) / 2;

  trackElement.scrollBy({
    left: horizontalOffset,
    behavior: reduceMotion ? "auto" : "smooth",
  });
};

const stopAutoplay = () => {
  if (autoplayTimer === undefined) {
    return;
  }

  window.clearInterval(autoplayTimer);
  autoplayTimer = undefined;
};

const startAutoplay = () => {
  stopAutoplay();

  if (isHovered || hasFocusWithin || skillItems.value.length < 2) {
    return;
  }

  autoplayTimer = window.setInterval(() => {
    showSkill(1);
  }, autoplayDelay);
};

const handleMouseEnter = () => {
  isHovered = true;
  stopAutoplay();
};

const handleMouseLeave = () => {
  isHovered = false;
  startAutoplay();
};

const handleFocusIn = () => {
  hasFocusWithin = true;
  stopAutoplay();
};

const handleFocusOut = (event: FocusEvent) => {
  const slider = event.currentTarget as HTMLElement | null;
  const nextTarget = event.relatedTarget;

  if (nextTarget instanceof Node && slider?.contains(nextTarget)) {
    return;
  }

  hasFocusWithin = false;
  startAutoplay();
};

onMounted(startAutoplay);
onBeforeUnmount(stopAutoplay);
</script>

<template>
  <section
    id="skills"
    aria-labelledby="skills-heading"
    class="section-shell section-panel skills-section"
  >
    <AppContainer>
      <SectionHeading id="skills-heading" :label="skills.heading" />

      <div
        class="skill-slider"
        role="region"
        :aria-label="skills.heading"
        tabindex="0"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @focusin="handleFocusIn"
        @focusout="handleFocusOut"
        @keydown.left.prevent="showSkill(-1)"
        @keydown.right.prevent="showSkill(1)"
      >
        <ul id="skills-track" ref="track" class="skill-track">
          <li
            v-for="(item, index) in skillItems"
            :key="item.key"
            class="skill-slide"
            :data-skill-index="index"
          >
            <SkillItem
              :skill="item.skill"
              :category="item.category"
              :featured="index === currentIndex"
            />
          </li>
        </ul>

        <div class="skill-controls">
          <button
            type="button"
            class="skill-control"
            :aria-label="skills.previousLabel"
            aria-controls="skills-track"
            @click="showSkill(-1)"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            class="skill-control skill-control-primary"
            :aria-label="skills.nextLabel"
            aria-controls="skills-track"
            @click="showSkill(1)"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<style scoped>
.skills-section {
  min-height: 36rem;
}

.skill-slider {
  margin-top: 4rem;
  outline: none;
  padding-left: 30px;
}

.skill-slider:focus-visible {
  border-radius: 0.75rem;
  outline: 3px solid var(--color-brand-light);
  outline-offset: 0.5rem;
}

.skill-track {
  display: grid;
  grid-auto-columns: minmax(17rem, 19.25rem);
  grid-auto-flow: column;
  gap: 2.5rem;
  margin: 0;
  padding: 0.25rem;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scrollbar-width: none;
  list-style: none;
  scroll-snap-type: inline mandatory;
}

.skill-track::-webkit-scrollbar {
  display: none;
}

.skill-slide {
  scroll-snap-align: start;
}

.skill-controls {
  display: flex;
  gap: 0.75rem;
  margin-top: 2rem;
}

.skill-control {
  display: inline-grid;
  width: 2.5rem;
  height: 2.5rem;
  place-items: center;
  border: 1px solid #4b6f2d;
  border-radius: 50%;
  background: transparent;
  color: #789f4f;
  cursor: pointer;
  font-size: 1.75rem;
  line-height: 1;
  transition:
    background-color 180ms ease,
    border-color 180ms ease,
    color 180ms ease;
}

.skill-control:hover,
.skill-control:focus-visible,
.skill-control-primary {
  border-color: var(--color-brand);
  color: var(--color-brand);
}

@media (max-width: 640px) {
  .skill-slider {
    margin-top: 3rem;
  }

  .skill-track {
    grid-auto-columns: minmax(16rem, 85vw);
    gap: 1rem;
  }
}
</style>
