import type { Locale, TextDirection } from '~/types/portfolio'
import { portfolioContent } from '~/data/portfolio'

export function usePortfolioLocale() {
  const route = useRoute()
  const locale = computed<Locale>(() => (route.path === '/fa' ? 'fa' : 'en'))
  const direction = computed<TextDirection>(() => (locale.value === 'fa' ? 'rtl' : 'ltr'))
  const content = computed(() => portfolioContent[locale.value])

  const setLocale = (nextLocale: Locale) => {
    const path = nextLocale === 'fa' ? '/fa' : '/'

    return navigateTo({ path, hash: route.hash })
  }

  return {
    content,
    direction,
    locale,
    setLocale,
  }
}
