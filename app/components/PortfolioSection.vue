<script setup lang="ts">
import type { PortfolioContent, ProjectItem } from "~/types/portfolio";

defineProps<{
  heading: string;
  projects: PortfolioContent["projects"];
}>();

const { locale } = usePortfolioLocale();
const selectedProject = ref<ProjectItem | null>(null);
const failedImages = ref(new Set<string>());

const labels = computed(() =>
  locale.value === "fa"
    ? {
        viewWork: "مشاهده پروژه",
        close: "بستن جزئیات پروژه",
        description: "توضیحات",
        technologies: "فناوری‌ها",
        liveDemo: "مشاهده نسخه زنده",
        repository: "مشاهده مخزن کد",
        projectPreview: "مشاهده تصویر کامل پروژه",
      }
    : {
        viewWork: "View work",
        close: "Close project details",
        description: "Description",
        technologies: "Technologies",
        liveDemo: "Live demo",
        repository: "View repository",
        projectPreview: "View full project preview",
      },
);

const markImageFailed = (id: string) => {
  failedImages.value = new Set(failedImages.value).add(id);
};

const optimizedImageSrcset = (project: ProjectItem) =>
  `/images/${project.id}-480.webp 480w, /images/${project.id}-720.webp 720w`;
</script>

<template>
  <section
    id="portfolio"
    aria-labelledby="portfolio-heading"
    class="section-shell section-panel portfolio-section"
  >
    <AppContainer>
      <SectionHeading id="portfolio-heading" :label="heading" />

      <ul
        class="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3 pl-4"
        role="list"
      >
        <li v-for="project in projects" :key="project.id" class="min-w-0">
          <article class="h-full">
            <h3 :id="`project-${project.id}-card-title`" class="sr-only">
              {{ project.title }}
            </h3>
            <button
              type="button"
              class="group flex h-full w-full flex-col overflow-hidden rounded-[10px] border-[3px] border-brand bg-white text-start text-ink shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand-light hover:shadow-xl focus-visible:-translate-y-1"
              aria-haspopup="dialog"
              :aria-labelledby="`project-${project.id}-card-title`"
              @click="selectedProject = project"
            >
              <span
                class="block aspect-[1.55/1] w-full overflow-hidden bg-[#eceff1]"
              >
                <picture v-if="!failedImages.has(project.id)" class="contents">
                  <source
                    :srcset="optimizedImageSrcset(project)"
                    sizes="(min-width: 1280px) 376px, (min-width: 768px) calc(50vw - 3rem), calc(100vw - 3rem)"
                    type="image/webp"
                  >
                  <img
                    :src="project.image"
                    :alt="project.imageAlt"
                    width="640"
                    height="420"
                    loading="lazy"
                    decoding="async"
                    class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.025]"
                    @error="markImageFailed(project.id)"
                  >
                </picture>
                <span
                  v-else
                  class="grid h-full place-items-center bg-gradient-to-br from-brand/25 to-surface p-6 text-center text-xl font-bold text-white"
                >
                  {{ project.title }}
                </span>
              </span>

              <span class="flex flex-1 flex-col p-5 sm:p-6">
                <span class="flex items-start justify-between gap-4">
                  <span>
                    <span class="block text-2xl font-bold leading-tight">{{
                      project.title
                    }}</span>
                  </span>
                  <span
                    class="shrink-0 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-ink"
                  >
                    {{ labels.viewWork }}
                  </span>
                </span>
              </span>
            </button>
            <div class="sr-only">
              <p>{{ project.detailedDescription }}</p>
              <p>{{ labels.technologies }}</p>
              <ul>
                <li v-for="technology in project.technologies" :key="technology">
                  {{ technology }}
                </li>
              </ul>
            </div>
          </article>
        </li>
      </ul>
    </AppContainer>

    <ProjectModal
      :project="selectedProject"
      :labels="labels"
      :image-failed="
        selectedProject ? failedImages.has(selectedProject.id) : false
      "
      @close="selectedProject = null"
      @image-error="selectedProject && markImageFailed(selectedProject.id)"
    />
  </section>
</template>

<style scoped>
.portfolio-section {
  min-height: 48rem;
}
</style>
