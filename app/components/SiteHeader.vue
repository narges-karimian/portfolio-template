<script setup lang="ts">
import type { NavigationItem } from '~/types/portfolio'

defineProps<{
  items: NavigationItem[]
}>()

const { content } = usePortfolioLocale()
const isMenuOpen = ref(false)
const activeSection = ref<NavigationItem['id']>('home')

const chooseSection = (id: NavigationItem['id']) => {
  activeSection.value = id
  isMenuOpen.value = false
}
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-white/5 bg-surface/95 shadow-lg shadow-black/10 backdrop-blur"
    @keydown.esc="isMenuOpen = false"
  >
    <AppContainer class="flex min-h-[100px] items-center justify-between gap-6">
      <PortfolioLogo :label="content.accessibility.logoHome" />

      <nav class="hidden items-center gap-6 lg:flex" :aria-label="content.accessibility.primaryNavigation">
        <a
          v-for="item in items"
          :key="item.id"
          :href="`#${item.id}`"
          class="relative py-3 text-base font-semibold transition-colors hover:text-brand xl:text-lg"
          :class="activeSection === item.id ? 'text-brand' : 'text-white'"
          :aria-current="activeSection === item.id ? 'page' : undefined"
          @click="chooseSection(item.id)"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="hidden items-center gap-4 lg:flex">
        <LanguageSwitcher />
      </div>

      <div class="flex items-center gap-3 lg:hidden">
        <LanguageSwitcher />
        <button
          type="button"
          class="grid size-12 place-items-center rounded-md border border-brand text-brand transition-colors hover:bg-brand hover:text-ink"
          :aria-label="isMenuOpen ? content.accessibility.closeMenu : content.accessibility.openMenu"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-navigation"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span class="sr-only">
            {{ isMenuOpen ? content.accessibility.closeMenu : content.accessibility.openMenu }}
          </span>
          <span aria-hidden="true" class="relative block h-4 w-6">
            <span
              class="absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform"
              :class="isMenuOpen ? 'translate-y-[7px] rotate-45' : ''"
            />
            <span
              class="absolute left-0 top-[7px] h-0.5 w-6 bg-current transition-opacity"
              :class="isMenuOpen ? 'opacity-0' : ''"
            />
            <span
              class="absolute bottom-0 left-0 h-0.5 w-6 bg-current transition-transform"
              :class="isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''"
            />
          </span>
        </button>
      </div>
    </AppContainer>

    <nav
      id="mobile-navigation"
      class="grid overflow-hidden border-t border-white/10 bg-surface transition-[grid-template-rows] duration-200 lg:hidden"
      :class="isMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
      :aria-label="content.accessibility.primaryNavigation"
      :aria-hidden="!isMenuOpen"
    >
      <div class="min-h-0 overflow-hidden">
        <AppContainer class="grid gap-1 py-4">
          <a
            v-for="item in items"
            :key="item.id"
            :href="`#${item.id}`"
            class="rounded-md px-4 py-3 text-base font-semibold transition-colors hover:bg-white/5 hover:text-brand"
            :class="activeSection === item.id ? 'text-brand' : 'text-white'"
            :tabindex="isMenuOpen ? undefined : -1"
            :aria-current="activeSection === item.id ? 'page' : undefined"
            @click="chooseSection(item.id)"
          >
            {{ item.label }}
          </a>
        </AppContainer>
      </div>
    </nav>
  </header>
</template>
