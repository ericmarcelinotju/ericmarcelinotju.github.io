// Type declarations for the profile content in `resume.ts`.

export interface Profile {
  name: string
  title: string
  tagline: string
  location: string
  email: string
  phone: string
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

export interface ProjectItem {
  name: string
  description: string
  url?: string
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
  location?: string
  period: string
  roles: CompanyRole[]
}
