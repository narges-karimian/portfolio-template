<script setup lang="ts">
const { content, direction, locale } = usePortfolioLocale()
const config = useRuntimeConfig()
const requestUrl = useRequestURL()

const siteOrigin = computed(() => {
  const configuredUrl = config.public.siteUrl.trim()

  if (configuredUrl) {
    try {
      const url = new URL(configuredUrl)

      if (url.protocol === 'http:' || url.protocol === 'https:') {
        return url.origin
      }
    }
    catch {
      // Use the current request origin when the public setting is invalid.
    }
  }

  return requestUrl.origin
})

const localePath = computed(() => (locale.value === 'fa' ? '/fa' : '/'))
const canonicalUrl = computed(() => new URL(localePath.value, `${siteOrigin.value}/`).toString())
const englishUrl = computed(() => new URL('/', `${siteOrigin.value}/`).toString())
const persianUrl = computed(() => new URL('/fa', `${siteOrigin.value}/`).toString())
const socialImageUrl = computed(() => new URL('/images/alex-morgan-social.jpg', `${siteOrigin.value}/`).toString())
const ogLocale = computed(() => (locale.value === 'fa' ? 'fa_IR' : 'en_US'))
const alternateOgLocale = computed(() => (locale.value === 'fa' ? 'en_US' : 'fa_IR'))

useSeoMeta({
  title: () => content.value.seo.title,
  description: () => content.value.seo.description,
  ogTitle: () => content.value.seo.title,
  ogDescription: () => content.value.seo.description,
  ogSiteName: () => content.value.profile.fullName,
  ogType: 'website',
  ogUrl: () => canonicalUrl.value,
  ogImage: () => socialImageUrl.value,
  ogImageAlt: () => content.value.seo.socialImageAlt,
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogImageType: 'image/jpeg',
  ogLocale: () => ogLocale.value,
  ogLocaleAlternate: () => alternateOgLocale.value,
  twitterCard: 'summary_large_image',
  twitterTitle: () => content.value.seo.title,
  twitterDescription: () => content.value.seo.description,
  twitterImage: () => socialImageUrl.value,
  twitterImageAlt: () => content.value.seo.socialImageAlt,
  robots: 'index, follow',
})

useHead(() => ({
  htmlAttrs: {
    lang: locale.value,
    dir: direction.value,
  },
  link: [
    { rel: 'canonical', href: canonicalUrl.value },
    { rel: 'alternate', hreflang: 'en', href: englishUrl.value },
    { rel: 'alternate', hreflang: 'fa', href: persianUrl.value },
    { rel: 'alternate', hreflang: 'x-default', href: englishUrl.value },
  ],
}))
</script>

<template>
  <div class="min-h-screen overflow-x-clip bg-canvas text-white">
    <a
      href="#main-content"
      class="fixed start-4 top-4 z-[60] -translate-y-24 rounded-md bg-brand px-4 py-3 font-semibold text-ink transition-transform focus:translate-y-0"
    >
      {{ content.accessibility.skipToContent }}
    </a>

    <SiteHeader :items="content.navigation" />

    <main id="main-content">
      <HeroSection :hero="content.hero" :profile="content.profile" />

      <AboutSection v-scroll-reveal :about="content.about" />

      <SkillsSection v-scroll-reveal :skills="content.skills" />

      <ExperienceSection
        v-scroll-reveal
        :heading="content.experienceHeading"
        :note="content.experienceNote"
        :experiences="content.experiences"
      />

      <PortfolioSection
        v-scroll-reveal
        :heading="content.portfolioHeading"
        :projects="content.projects"
      />

      <ContactSection v-scroll-reveal :contact="content.contact" />
    </main>

    <SiteFooter
      :copyright="content.footer.copyright"
      :owner-name="content.profile.fullName"
      :socials="content.contact.socials"
    />
  </div>
</template>
