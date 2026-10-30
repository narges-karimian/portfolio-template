<script setup lang="ts">
import type { ProjectItem } from '~/types/portfolio'

const props = defineProps<{
  project: ProjectItem | null
  labels: {
    close: string
    description: string
    technologies: string
    liveDemo: string
    repository: string
    projectPreview: string
  }
  imageFailed: boolean
}>()

const emit = defineEmits<{
  close: []
  imageError: []
}>()

const dialog = ref<HTMLElement | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)
let previouslyFocused: HTMLElement | null = null
let previousOverflow = ''
let isScrollLocked = false

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

const close = () => emit('close')

const handleKeydown = (event: KeyboardEvent) => {
  if (!props.project) {
    return
  }

  if (event.key === 'Escape') {
    event.preventDefault()
    close()
    return
  }

  if (event.key !== 'Tab') {
    return
  }

  const focusable = Array.from(dialog.value?.querySelectorAll<HTMLElement>(focusableSelector) ?? [])

  if (!focusable.length) {
    event.preventDefault()
    dialog.value?.focus()
    return
  }

  const first = focusable[0]
  const last = focusable[focusable.length - 1]

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last?.focus()
  }
  else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first?.focus()
  }
}

watch(() => props.project, async (project) => {
  if (project) {
    previouslyFocused = document.activeElement as HTMLElement | null
    previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    isScrollLocked = true
    await nextTick()
    closeButton.value?.focus()
    return
  }

  document.body.style.overflow = previousOverflow
  isScrollLocked = false
  previouslyFocused?.focus()
}, { flush: 'post' })

onMounted(() => document.addEventListener('keydown', handleKeydown))

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)

  if (isScrollLocked) {
    document.body.style.overflow = previousOverflow
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="project-modal">
      <div
        v-if="project"
        class="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-canvas/90 p-4 backdrop-blur-sm sm:p-8"
        role="presentation"
        @mousedown.self="close"
      >
        <article
          ref="dialog"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="`project-${project.id}-title`"
          :aria-describedby="`project-${project.id}-description`"
          tabindex="-1"
          class="relative my-auto w-full max-w-5xl overflow-hidden rounded-[20px] border border-brand/70 bg-surface shadow-2xl shadow-black/50"
        >
          <button
            ref="closeButton"
            type="button"
            class="absolute end-4 top-4 z-10 grid size-11 place-items-center rounded-full border border-white/25 bg-canvas/85 text-2xl text-white transition-colors hover:border-brand hover:text-brand"
            :aria-label="labels.close"
            @click="close"
          >
            <span aria-hidden="true">×</span>
          </button>

          <div class="grid lg:grid-cols-[1.08fr_0.92fr]">
            <div class="min-h-64 bg-white lg:min-h-[38rem]">
              <picture v-if="!imageFailed" class="contents">
                <source
                  :srcset="`/images/${project.id}-480.webp 480w, /images/${project.id}-720.webp 720w`"
                  sizes="(min-width: 1024px) 520px, calc(100vw - 2rem)"
                  type="image/webp"
                >
                <img
                  :src="project.image"
                  :alt="project.imageAlt"
                  loading="lazy"
                  decoding="async"
                  class="h-full min-h-64 w-full object-contain object-center lg:min-h-[38rem]"
                  @error="emit('imageError')"
                >
              </picture>
              <div
                v-else
                class="grid h-full min-h-64 place-items-center bg-gradient-to-br from-brand/25 to-canvas p-8 text-center text-xl font-semibold text-white lg:min-h-[38rem]"
              >
                {{ project.title }}
              </div>
            </div>

            <div class="flex flex-col p-6 sm:p-9 lg:p-11">
              <p class="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                {{ project.subtitle }}
              </p>
              <h3 :id="`project-${project.id}-title`" class="mt-2 text-3xl font-bold text-white sm:text-4xl">
                {{ project.title }}
              </h3>

              <div class="mt-8">
                <h4 class="text-lg font-bold text-white">
                  {{ labels.description }}
                </h4>
                <p :id="`project-${project.id}-description`" class="mt-3 text-base leading-7 text-white/70">
                  {{ project.detailedDescription }}
                </p>
              </div>

              <div class="mt-8">
                <h4 class="text-lg font-bold text-white">
                  {{ labels.technologies }}
                </h4>
                <ul class="mt-4 flex flex-wrap gap-2" role="list">
                  <li
                    v-for="technology in project.technologies"
                    :key="technology"
                    class="rounded-full border border-brand/60 bg-brand/10 px-3 py-1.5 text-sm font-semibold text-brand-light"
                  >
                    {{ technology }}
                  </li>
                </ul>
              </div>

              <div class="mt-auto flex flex-wrap gap-3 pt-10">
                <BaseLink v-if="project.liveUrl" :href="project.liveUrl" external>
                  {{ labels.liveDemo }}
                </BaseLink>
                <BaseLink v-else-if="project.projectUrl" :href="project.projectUrl" external>
                  {{ labels.projectPreview }}
                </BaseLink>
                <BaseLink
                  v-if="project.repositoryUrl"
                  :href="project.repositoryUrl"
                  external
                  variant="outline"
                >
                  {{ labels.repository }}
                </BaseLink>
              </div>
            </div>
          </div>
        </article>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.project-modal-enter-active,
.project-modal-leave-active {
  transition: opacity 180ms ease;
}

.project-modal-enter-active article,
.project-modal-leave-active article {
  transition: opacity 180ms ease, transform 180ms ease;
}

.project-modal-enter-from,
.project-modal-leave-to,
.project-modal-enter-from article,
.project-modal-leave-to article {
  opacity: 0;
}

.project-modal-enter-from article,
.project-modal-leave-to article {
  transform: translateY(1rem) scale(0.98);
}
</style>
