// Centralized profile content sourced from Eric Marcelino's resume.
// Type declarations live in `resume.types.ts`.

import type {
  AchievementItem,
  Company,
  CompanyRole,
  EducationItem,
  ExperienceItem,
  Language,
  ProjectItem,
  Profile,
  SkillGroup,
} from './resume.types'

export type {
  AchievementItem,
  Company,
  CompanyRole,
  EducationItem,
  ExperienceItem,
  Language,
  ProjectItem,
  Profile,
  SkillGroup,
}

export const profile: Profile = {
  name: 'Eric Marcelino',
  title: 'Tech Lead',
  tagline:
    'Passionate and disciplined Software Engineer with 6+ years of experience building robust solutions across web, mobile, desktop, and IoT. Skilled in Go, Vue.js, Flutter, and DevOps practices — a fast learner and proactive team contributor.',
  location: 'Indonesia',
  email: 'ericmarcelinotju@gmail.com',
  links: {
    github: 'https://github.com/ericmarcelinotju',
    linkedin: 'https://www.linkedin.com/in/eric-marcelino-750379204',
  },
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: [
      'Go',
      'Java',
      'PHP',
      'Dart',
      'Kotlin',
      'Swift',
      'JavaScript',
      'TypeScript',
      'Python',
      'C#',
      'C++',
      'C',
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['Vue.js', 'React.js', 'Flutter', 'Nuxt.js', 'Laravel', 'Spring Boot'],
  },
  {
    category: 'DevOps',
    items: ['Docker', 'Jenkins', 'GitLab CI/CD', 'KubeSphere', 'Harbor', 'Bitbucket'],
  },
  {
    category: 'Practices',
    items: ['SOLID', 'TDD', 'Agile (SCRUM)', 'CI/CD', 'Clean Architecture'],
  },
]

export const experience: ExperienceItem[] = [
  {
    role: 'Tech Lead',
    company: 'PT. Jejak Enviro Teknologi',
    alias: 'Jejakin',
    location: 'Banten, Indonesia',
    period: 'Jan 2026 — Present',
    summary:
      'Leads two product teams, growing engineering capability through mentoring and code reviews while migrating services from Kotlin Spring Boot to Go.',
    highlights: [
      'Leading 2 teams with different product and project needs.',
      'Promote a strong learning environment for engineering teams through sharing sessions and close mentoring.',
      'Improve reliability by teaching critical thinking, requiring code reviews, and reviewing company-wide architectures.',
      'Migrating products from Kotlin Spring Boot to Go to improve performance, cost, and build size.',
    ],
  },
  {
    role: 'IT Software Engineer (Lead)',
    company: 'PT. TEMAS Tbk',
    alias: 'Temas',
    location: 'Jakarta, Indonesia',
    period: 'May 2025 — Jan 2026',
    summary:
      'Led three cross-functional teams to ship on schedule, championing clean architecture and SOLID through mentoring and peer review.',
    highlights: [
      'Led 3 cross-functional teams to deliver high-quality software products on schedule.',
      'Promoted clean architecture and SOLID principles through mentoring and peer code reviews.',
      'Fostered critical thinking within the team by encouraging open discussions and collaborative problem solving.',
    ],
  },
  {
    role: 'IT Development Staff',
    company: 'PT. TEMAS Tbk',
    alias: 'Temas',
    location: 'Jakarta, Indonesia',
    period: 'Apr 2024 — May 2025',
    summary:
      'Ran a SCRUM team and raised code quality by introducing unit testing and Go and Vue.js standards across projects.',
    highlights: [
      'Led a SCRUM team using JIRA for task management and sprint planning.',
      'Introduced unit testing practices for Go and Vue.js projects.',
      'Trained team members on Go and Vue.js standards and practices.',
    ],
  },
  {
    role: 'Tech Lead Engineer',
    company: 'PT. Data Integrasi Semesta',
    alias: 'Datis',
    location: 'Jakarta, Indonesia',
    period: 'Feb 2020 — Apr 2024',
    summary:
      'Delivered custom software for logistics, banking, and hospitality clients, owning delivery end to end and establishing the core DevOps practices.',
    highlights: [
      'Delivered custom software for logistics, banking, and hospitality clients.',
      'Managed project timelines, cost estimates, and coordination with outsourced developers.',
      'Established core DevOps practices such as CI/CD, Agile, and testing.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'PT. At Network',
    alias: 'Airpaz',
    location: 'Jakarta, Indonesia',
    period: 'Mar 2019 — Feb 2020',
    summary:
      'Modernized the booking frontend, migrating it from a monolithic Laravel app to Nuxt.js.',
    highlights: [
      'Modernized the legacy frontend by migrating from a monolithic Laravel app to Nuxt.js.',
    ],
  },
  {
    role: 'Intern Software Engineer',
    company: 'Samsung R&D Institute Indonesia',
    alias: 'SRIN',
    location: 'Jakarta, Indonesia',
    period: 'Mar 2018 — Mar 2019',
    summary:
      "Built CRM and parental-control mobile apps supporting Samsung's sales and family-focused initiatives.",
    highlights: [
      "Developed CRM and parental control mobile apps to support Samsung's sales and family-focused initiatives.",
    ],
  },
  {
    role: 'Teaching Assistant',
    company: 'BINUS University',
    location: 'Jakarta, Indonesia',
    period: 'Feb 2016 — Feb 2018',
    summary:
      'Taught computer science courses and supported students through tutoring and lab assistance.',
    highlights: [
      'Taught computer science courses and supported student learning through tutoring and lab assistance.',
    ],
  },
]

export const projects: ProjectItem[] = [
  {
    name: 'Dakota Cinema Ticketing',
    description:
      'A cinema ticketing system where users can buy tickets and snacks online.',
    tech: ['Nest.js', 'TypeScript', 'Vue.js'],
  },
  {
    name: 'Paint Store CRM',
    description:
      'A customer relationship management web application built for a paint store.',
    tech: ['Nest.js', 'TypeScript', 'Vue.js'],
  },
  {
    name: 'Website CMS',
    description:
      'A content management system that makes setting up a website quick and easy.',
    tech: ['Laravel'],
  },
  {
    name: 'Cafe Point of Sales',
    description: 'A point of sales application tailored for cafes.',
    tech: ['Laravel', 'React Native'],
  },
]

export const achievements: AchievementItem[] = [
  {
    name: '1st Winner — LINE Dev Challenge Indonesia',
    description: 'Student Category.',
  },
  {
    name: 'Best Research Interest Group',
    description: 'SLC Teaching Assistant.',
  },
]

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'Binus University',
    period: '2015 — 2018',
    gpa: '3.69',
  },
]

export const languages: Language[] = [
  { name: 'English', level: 'Proficient' },
  { name: 'Indonesian', level: 'Native' },
]

// --- Company detail pages -------------------------------------------------

/** Turn a company name into a URL-friendly slug, e.g. "PT. TEMAS Tbk" -> "pt-temas-tbk". */
export function companySlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

/**
 * Companies derived from the experience list (single source of truth),
 * grouping multiple roles at the same employer and computing the overall span.
 * Order is preserved most-recent-first.
 */
export const companies: Company[] = (() => {
  const order: string[] = []
  const byName = new Map<string, ExperienceItem[]>()
  for (const item of experience) {
    if (!byName.has(item.company)) {
      byName.set(item.company, [])
      order.push(item.company)
    }
    byName.get(item.company)!.push(item)
  }
  return order.map((name) => {
    const items = byName.get(name)!
    const newest = items[0]
    const oldest = items[items.length - 1]
    const start = oldest.period.split('—')[0]?.trim() ?? oldest.period
    const end = newest.period.split('—')[1]?.trim() ?? newest.period
    return {
      slug: companySlug(name),
      name,
      alias: newest.alias,
      location: newest.location,
      period: items.length > 1 ? `${start} — ${end}` : newest.period,
      roles: items.map((i) => ({
        role: i.role,
        period: i.period,
        summary: i.summary,
        highlights: i.highlights,
      })),
    }
  })
})()

export function findCompany(slug: string): Company | undefined {
  return companies.find((c) => c.slug === slug)
}

// Company logos live in per-company folders under `src/assets/logos/<key>/`,
// where <key> is the short code below. Within a folder the variant matching
// the folder name (e.g. `samsung.svg`) is preferred over alternates like
// `samsung_black.png`, picking svg > png > webp > jpeg > jpg. Companies without
// a folder fall back to a monogram.

// Maps each logo folder key to the company slug it belongs to.
const logoFolderToSlug: Record<string, string> = {
  jejakin: companySlug('PT. Jejak Enviro Teknologi'),
  temas: companySlug('PT. TEMAS Tbk'),
  datis: companySlug('PT. Data Integrasi Semesta'),
  airpaz: companySlug('PT. At Network'),
  samsung: companySlug('Samsung R&D Institute Indonesia'),
  binus: companySlug('BINUS University'),
}

const logoFiles = import.meta.glob('../assets/logos/*/*.{svg,png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

// Lower number = preferred when multiple formats exist for the same logo.
const extPriority: Record<string, number> = {
  svg: 0,
  png: 1,
  webp: 2,
  jpeg: 3,
  jpg: 4,
}

const logoBySlug: Record<string, string> = {}
{
  // Track the best (lowest) score chosen per slug so far.
  const bestScore: Record<string, number> = {}
  for (const [filePath, url] of Object.entries(logoFiles)) {
    const parts = filePath.split('/')
    const fileName = parts.pop() ?? ''
    const folder = parts.pop() ?? ''
    const slug = logoFolderToSlug[folder]
    if (!slug) continue

    const ext = fileName.split('.').pop()?.toLowerCase() ?? ''
    const base = fileName.replace(/\.[^.]+$/, '')
    // Prefer the variant named after the folder; penalize alternates heavily.
    const isPrimary = base === folder
    const score = (isPrimary ? 0 : 100) + (extPriority[ext] ?? 99)

    if (bestScore[slug] === undefined || score < bestScore[slug]) {
      bestScore[slug] = score
      logoBySlug[slug] = url
    }
  }
}

/** Resolved logo URL for a company slug, or undefined if no logo exists. */
export function companyLogo(slug: string): string | undefined {
  return logoBySlug[slug]
}

// Official website per company. Companies without an entry render no link.
const websiteByName: Record<string, string> = {
  'PT. Jejak Enviro Teknologi': 'https://jejakin.com',
  'PT. TEMAS Tbk': 'https://temas.id',
  'PT. Data Integrasi Semesta': 'https://datis.co.id',
  'PT. At Network': 'https://airpaz.com',
  'Samsung R&D Institute Indonesia': 'https://www.samsung.com/id/srin/',
  'BINUS University': 'https://binus.ac.id',
}

const websiteBySlug: Record<string, string> = Object.fromEntries(
  Object.entries(websiteByName).map(([name, url]) => [companySlug(name), url]),
)

/** Official website URL for a company slug, or undefined if none is set. */
export function companyWebsite(slug: string): string | undefined {
  return websiteBySlug[slug]
}
