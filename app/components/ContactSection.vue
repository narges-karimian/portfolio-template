<script setup lang="ts">
import type { PortfolioContent } from "~/types/portfolio";

const props = defineProps<{
  contact: PortfolioContent["contact"];
}>();

interface ContactDetail {
  id: "address" | "phone" | "email";
  label: string;
  value: string;
  icon: string;
  href?: string;
}

const hasValue = (value: string) => Boolean(value.trim());

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const visibleDetails = computed<ContactDetail[]>(() => {
  const phoneNumber = props.contact.phone.replace(/[^+\d]/g, "");
  const details: ContactDetail[] = [
    {
      id: "address",
      label: props.contact.addressLabel,
      value: props.contact.address,
      icon: "/images/contact-location.svg",
    },
    {
      id: "phone",
      label: props.contact.phoneLabel,
      value: props.contact.phone,
      icon: "/images/contact-phone.svg",
      href: /\d{3}/.test(phoneNumber) ? `tel:${phoneNumber}` : undefined,
    },
    {
      id: "email",
      label: props.contact.emailLabel,
      value: props.contact.email,
      icon: "/images/contact-email.svg?v=2",
      href: isValidEmail(props.contact.email)
        ? `mailto:${props.contact.email.trim()}`
        : undefined,
    },
  ];

  return details.filter((detail) => hasValue(detail.value));
});

const visibleSocials = computed(() =>
  props.contact.socials
    .map((social) => {
      try {
        const parsedUrl = new URL(social.url);
        const hasValidUrl =
          parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";

        return { ...social, hasValidUrl };
      } catch {
        return { ...social, hasValidUrl: false };
      }
    })
    .filter((social) => social.hasValidUrl),
);
</script>

<template>
  <section
    id="contact"
    aria-labelledby="contact-heading"
    class="section-shell contact-section"
  >
    <AppContainer>
      <div class="flex flex-col items-center text-center">
        <h2 id="contact-heading" class="contact-heading">
          {{ contact.heading }}
        </h2>
        <p class="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
          {{ contact.description }}
        </p>
      </div>

      <ul v-if="visibleDetails.length" class="contact-details" role="list">
        <li
          v-for="detail in visibleDetails"
          :key="detail.id"
          class="contact-detail"
        >
          <div class="contact-icon-slot" aria-hidden="true">
            <img :src="detail.icon" alt="" class="block" />
          </div>
          <h3 class="mt-5 text-2xl font-semibold leading-tight text-white">
            {{ detail.label }}
          </h3>
          <a
            v-if="detail.href"
            :href="detail.href"
            class="mt-3 inline-block break-words text-lg font-semibold leading-7 text-[#7e7e7e] transition-colors hover:text-brand-light"
          >
            {{ detail.value }}
          </a>
          <p v-else class="mt-3 text-lg font-semibold leading-7 text-[#7e7e7e]">
            {{ detail.value }}
          </p>
        </li>
      </ul>

      <div
        v-if="visibleSocials.length"
        class="mt-16 flex flex-col items-center border-t border-white/10 pt-10 text-center"
      >
        <h3 class="text-3xl font-medium text-white">
          {{ contact.socialsHeading }}
        </h3>
        <ul
          class="mt-7 flex w-full max-w-3xl flex-wrap items-stretch justify-center gap-4"
          :aria-label="contact.socialsHeading"
        >
          <li
            v-for="social in visibleSocials"
            :key="social.label"
            class="min-w-0 flex-1 basis-64"
          >
            <a
              v-if="social.hasValidUrl"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex min-h-16 w-full items-center gap-4 rounded-[10px] border border-white/15 bg-surface px-5 py-3 text-start text-base font-medium text-white transition-colors hover:border-brand hover:text-brand-light"
              :aria-label="social.label"
            >
              <span
                aria-hidden="true"
                class="grid size-8 place-items-center rounded-md border border-white/70 text-sm font-bold uppercase transition-colors group-hover:border-brand group-hover:text-brand"
              >
                {{ social.label.slice(0, 1) }}
              </span>
              {{ social.label }}
            </a>
          </li>
        </ul>
      </div>
    </AppContainer>
  </section>
</template>

<style scoped>
.contact-section {
  min-height: 40rem;
}

.contact-heading {
  min-width: min(100%, 16.375rem);
  margin: 0;
  border: 1px solid var(--color-brand);
  padding: 0.8rem 2rem;
  color: var(--color-brand);
  font-size: clamp(1.75rem, 4vw, 1.875rem);
  font-weight: 500;
  line-height: 1.65;
  text-transform: capitalize;
}

.contact-details {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 3.5rem;
  margin: 4rem 0 0;
  padding: 0;
  list-style: none;
}

.contact-detail {
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-wrap: anywhere;
  text-align: center;
}

.contact-icon-slot {
  display: flex;
  min-height: 4.25rem;
  align-items: center;
}

@media (min-width: 768px) {
  .contact-details {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(2rem, 5vw, 4rem);
  }
}
</style>
