export type Locale = 'en' | 'fa'
export type TextDirection = 'ltr' | 'rtl'

export interface NavigationItem {
  id: 'home' | 'about' | 'skills' | 'experience' | 'portfolio' | 'contact'
  label: string
}

export interface SocialLink {
  label: string
  url: string
  placeholder?: string
}

export interface SkillItem {
  name: string
  description?: string
  icon?: string
}

export interface SkillCategory {
  title: string
  items: SkillItem[]
}

export interface ExperienceItem {
  id: string
  year: string
  jobTitle: string
  company: string
  startDate: string
  endDate: string
  description: string
  isCurrent?: boolean
}

export interface ProjectItem {
  id: string
  title: string
  subtitle: string
  description: string
  detailedDescription: string
  image: string
  imageAlt: string
  technologies: string[]
  projectUrl?: string
  liveUrl?: string
  repositoryUrl?: string
}

export interface PortfolioContent {
  accessibility: {
    skipToContent: string
    logoHome: string
    openMenu: string
    closeMenu: string
    primaryNavigation: string
    languageSwitcher: string
  }
  profile: {
    fullName: string
    professionalTitle: string
    summary: string
    image: string
    imageAlt: string
    resumePath: string
  }
  hero: {
    greeting: string
    prefix: string
    primaryCta: string
    secondaryCta: string
    resumeCta: string
  }
  navigation: NavigationItem[]
  about: {
    heading: string
    title: string
    paragraphs: string[]
    careerInterests: string[]
  }
  skills: {
    heading: string
    previousLabel: string
    nextLabel: string
    categories: SkillCategory[]
  }
  experienceHeading: string
  experienceNote: string
  experiences: ExperienceItem[]
  portfolioHeading: string
  projects: ProjectItem[]
  contact: {
    heading: string
    description: string
    addressLabel: string
    address: string
    phoneLabel: string
    phone: string
    emailLabel: string
    email: string
    socialsHeading: string
    socials: SocialLink[]
  }
  footer: {
    copyright: string
  }
  seo: {
    title: string
    description: string
    socialImageAlt: string
  }
}
