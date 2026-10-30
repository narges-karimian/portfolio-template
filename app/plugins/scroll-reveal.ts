import type { Directive } from "vue";

const revealDelay = 220;

interface RevealState {
  observer: IntersectionObserver;
  timer?: number;
}

const revealStates = new WeakMap<HTMLElement, RevealState>();

const scrollReveal: Directive<HTMLElement> = {
  beforeMount(element) {
    element.classList.add("scroll-reveal");
  },

  mounted(element) {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      element.classList.add("scroll-reveal--visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        observer.unobserve(element);

        const timer = window.setTimeout(() => {
          element.classList.add("scroll-reveal--visible");
          revealStates.delete(element);
        }, revealDelay);

        revealStates.set(element, { observer, timer });
      },
      {
        rootMargin: "0px 0px -8%",
        threshold: 0.12,
      },
    );

    revealStates.set(element, { observer });
    observer.observe(element);
  },

  unmounted(element) {
    const state = revealStates.get(element);

    state?.observer.disconnect();

    if (state?.timer !== undefined) {
      window.clearTimeout(state.timer);
    }

    revealStates.delete(element);
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("scroll-reveal", scrollReveal);
});
