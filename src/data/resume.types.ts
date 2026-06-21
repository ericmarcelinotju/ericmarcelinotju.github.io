// Type declarations for the profile content in `resume.ts`.

export interface Profile {
  name: string
  title: string
  tagline: string
  location: string
  email: string
  links: {
    github: string
    linkedin: string
  }
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface ExperienceItem {
  role: string
  company: string
  /** Short name shown on the home page; the detail page keeps `company`. */
  alias?: string
  location?: string
  period: string
  /** One-line summary of the role, shown on the home page timeline. */
  summary: string
  highlights: string[]
}

export interface AchievementItem {
  name: string
  description: string
}

/** A labelled external link for a project (e.g. a repo or live demo). */
export interface ProjectLink {
  label: string
  url: string
}

export interface ProjectItem {
  name: string
  /** One-line description shown on the home page card. */
  description: string
  tech?: string[]
  /** Optional live/external link (e.g. a deployed demo or repo). */
  url?: string
  /** Related links — repos, live demo, etc. — listed on the detail page. */
  links?: ProjectLink[]
  /** Role played on the project, shown on the detail page. */
  role?: string
  /** When the project was built, shown on the detail page. */
  period?: string
  /** Longer overview paragraph for the detail page. */
  summary?: string
  /** Notable features / contributions listed on the detail page. */
  highlights?: string[]
}

/** A project enriched with a URL slug, used by the detail pages. */
export interface Project extends ProjectItem {
  slug: string
}

export interface EducationItem {
  degree: string
  school: string
  period: string
  gpa?: string
}

export interface Language {
  name: string
  level: string
}

export interface CompanyRole {
  role: string
  period: string
  summary: string
  highlights: string[]
}

export interface Company {
  slug: string
  name: string
  alias?: string
  location?: string
  period: string
  roles: CompanyRole[]
}
