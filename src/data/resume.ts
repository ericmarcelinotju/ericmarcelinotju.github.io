// Centralized profile content sourced from Eric Marcelino's resume.
// Type declarations live in `resume.types.ts`.

import type {
  AchievementItem,
  Company,
  CompanyRole,
  EducationItem,
  ExperienceItem,
  Language,
  Project,
  ProjectItem,
  ProjectLink,
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
  Project,
  ProjectItem,
  ProjectLink,
  Profile,
  SkillGroup,
}

export const profile: Profile = {
  name: 'Eric Marcelino',
  title: 'Tech Lead',
  tagline:
    'Passionate and disciplined Software Engineer with 8+ years of experience building robust solutions across web, mobile, desktop, and IoT. Skilled in Go, Vue.js, Flutter, and DevOps practices — a fast learner and proactive team contributor.',
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
      `Lead two engineering teams totaling ~5 engineers, each serving products with distinct technical and business needs.`,
      `Cultivate a strong engineering-learning culture through regular knowledge-sharing sessions and close one-on-one mentoring.`,
      `Improve system reliability by instilling critical thinking, enforcing mandatory code reviews, and reviewing company-wide architecture.`,
      `Lead migration of the core product from Kotlin+Spring Boot to Go to improve runtime performance, infrastructure cost, and build size.`,
      `Ensure projects success by complying to clients' security standards and satisfy client's needs.`,
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
     'Led 12 engineers across 3 cross-functional teams, consistently delivering high-quality products on schedule.',
      'Architected real-time systems sustaining sub-200ms latency while handling ~100,000 concurrent real-time transactions.',
      'Drove engineering quality to over 80% code coverage across 6 repositories, including shared internal libraries.',
      'Promoted clean architecture and SOLID principles through mentoring and peer code reviews.',
      'Fostered critical thinking through open technical discussions and collaborative problem-solving.',
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
      'Led a 3-person SCRUM team, managing tasks and sprint planning in JIRA.',
      'Shipped an end-to-end port-operations product spanning mobile, backend, and frontend while preserving connectivity with existing legacy systems.',
      'Introduced unit-testing practices for Go and Vue.js, reaching over 60% code coverage across 3 repositories.',
      'Trained team members on Go and Vue.js standards and best practices which 90% of them can contribute to the new system after a month.',
      'Developed an SSO that is used by all dozens of systems and handles ~1000 employees.',
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
      'Led 6 engineers across multiple concurrent projects for logistics, banking, and hospitality clients.',
      'Delivered dozens of custom software projects, managing timelines, cost estimates, and coordination with outsourced developers.',
      'Established core DevOps practices (CI/CD, Agile, automated testing), increasing deployment frequency to development up to 12 times per day.',
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
      'Modernized legacy frontend by migrating from monolithic Laravel to Nuxt.js.',
      'Reduced initial page load to under ~1.5s and enabled near-instant (under 100ms) in-app navigation through server-side rendering and client-side routing.',
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
      "Developed parental control mobile apps which can detect how far the face is from the screen.",
      "Developed CRM mobile app for Samsung's sales team, enabling them to manage leads and track sales performance on the go.",
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
      'Taught computer-science courses to hundreds of students over two years through tutoring and lab assistance.',
      'Authored dozens of assignments and lab exercises to support student learning.',
    ],
  },
]

export const projects: ProjectItem[] = [
  {
    name: 'Cinema Ticketing',
    description:
      'A cinema ticketing system where users can buy tickets and snacks online.',
    tech: ['Nest.js', 'TypeScript', 'Vue.js', 'Midtrans'],
    role: 'Full-stack Developer',
    period: '2022',
    links: [
      { label: 'Backend', url: 'https://github.com/ericmarcelinotju/backend-dakota' },
      { label: 'Management Platform', url: 'https://github.com/ericmarcelinotju/dashboard-dakota' },
    ],
    summary:
      'An online platform for a cinema chain that lets moviegoers browse showtimes, pick their seats from an interactive map, and pre-order snacks — all in a single checkout. The same system gives staff the tools to schedule films, manage studios, and track sales.',
    highlights: [
      'Interactive seat-selection map backed by real-time availability so two people can never book the same seat.',
      'Unified cart that combines tickets and concession orders into one payment step.',
      'Admin dashboard for scheduling films, configuring studios and seat layouts, and monitoring daily revenue.',
      'Nest.js REST API paired with a Vue.js single-page frontend for a fast, app-like booking flow.',
      'Dynamic DB initialization and access for each studio to ensure data isolation and performance.',
    ],
  },
  {
    name: 'Gold Store POS',
    description:
      'A point-of-sale and back-office system for a gold & jewelry retailer, handling sales, buybacks, stock, and staff.',
    tech: ['Go', 'Gin', 'Vue.js', 'TypeScript', 'Redis', 'Tailwind CSS'],
    role: 'Full-stack Developer',
    period: '2023',
    links: [
      { label: 'Backend', url: 'https://github.com/ericmarcelinotju/tepengbe' },
      { label: 'Frontend', url: 'https://github.com/ericmarcelinotju/tepengfe' },
    ],
    summary:
      'An end-to-end retail platform for a gold and jewelry store that lets cashiers ring up sales and customer buybacks priced by live weight and karat, while giving owners full control over inventory, pricing, and staff. Built as a Go REST API backed by a Vue.js single-page app, with thermal receipt printing for an in-store checkout flow.',
    highlights: [
      'Dual transaction flows for selling and buying back gold, with pricing calculated dynamically from item weight and daily gold rates.',
      'Container & ledger system with point-in-time snapshots to track physical stock and keep an auditable inventory trail.',
      'ESC/POS thermal receipt printing and QR generation for a complete physical-counter checkout experience.',
      'Role-based access control with granular per-module permissions, so each staff member only sees what their role allows.',
      'Reporting dashboards with revenue and sales charts, plus real-time updates over WebSocket and a Go/Gin API running on GORM across MySQL, PostgreSQL, and SQL Server.',
    ],
  },
  {
    name: 'Customer Relationship Management',
    description:
      'A customer relationship management web application for tracking customers, quotes, and orders.',
    tech: ['Nest.js', 'TypeScript', 'Vue.js'],
    role: 'Full-stack Developer',
    period: '2022',
     links: [
      { label: 'Backend', url: 'https://github.com/ericmarcelinotju/ditya' },
      { label: 'Frontend', url: 'https://github.com/ericmarcelinotju/candar' },
    ],
    summary:
      'A customer-relationship tool that helps a sales team track customers, turn product selections into quotes, and follow orders from enquiry to delivery.',
    highlights: [
      'JIRA-like drag-and-drop issue tracking for managing customer inquiries and follow-ups.',
      'Built-in product catalog with detailed specifications and pricing.',
      'Project budget and profit tracking to help the business understand which projects are most lucrative.',
      'Reporting dashboard surfacing the sales pipeline and best-selling products.',
    ],
  },
  {
    name: 'Website CMS',
    description:
      'A content management system that makes setting up a website quick and easy.',
    tech: ['Laravel'],
    role: 'Backend Developer',
    period: '2021',
    summary:
      'A lightweight content management system that lets non-technical users assemble and publish a website from reusable content blocks, without ever touching code.',
    highlights: [
      'Block-based page editor for composing pages, menus, and media from reusable pieces.',
      'Multi-site management from a single admin panel.',
      'SEO-friendly, server-rendered output via Laravel Blade templates.',
      'Built-in media library for uploading and organizing images.',
    ],
  },
  {
    name: 'Cafe Point of Sales',
    url: 'https://kopiketjil.com',
    description: 'A point of sales application tailored for cafes.',
    tech: ['Laravel', 'React Native'],
    role: 'Full-stack Developer',
    period: '2021',
    summary:
      'A point-of-sale system designed for cafes, pairing a React Native tablet app for taking orders with a Laravel backend that handles the menu, inventory, and sales reporting.',
    highlights: [
      'Tablet ordering app with a categorized menu and quick item modifiers for fast service.',
      'Orders routed to the kitchen in real time with receipt printing at checkout.',
      'Product with variants and inventory tracking to prevent stockouts and manage supplies.',
    ],
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

// --- Project detail pages -------------------------------------------------

/** Turn a project name into a URL-friendly slug, e.g. "Website CMS" -> "website-cms". */
export function projectSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

/** Projects with a resolved slug, preserving the source order. */
export const projectList: Project[] = projects.map((p) => ({
  ...p,
  slug: projectSlug(p.name),
}))

export function findProject(slug: string): Project | undefined {
  return projectList.find((p) => p.slug === slug)
}

// Optional project screenshots live in a per-project folder named after the
// project's slug: `src/assets/projects/<slug>/`. Drop any number of images in
// that folder and the detail-page carousel shows them, sorted by filename — use
// `1.png`, `2.png`, … (or any names that sort the way you want) to control the
// order. When the same image exists in multiple formats, the order of
// preference is png > webp > jpeg > jpg.
const screenshotFiles = import.meta.glob(
  '../assets/projects/*/*.{png,jpg,jpeg,webp}',
  { eager: true, import: 'default' },
) as Record<string, string>

const screenshotExtPriority: Record<string, number> = {
  png: 0,
  webp: 1,
  jpeg: 2,
  jpg: 3,
}

// slug (folder) -> list of { name, url }, keeping the best format per image
// name, later sorted by filename for display order.
const screenshotsBySlug: Record<string, { name: string; url: string }[]> = {}
{
  const bestScore: Record<string, number> = {} // `${slug}/${base}` -> ext score
  const collected: Record<string, Record<string, string>> = {}
  for (const [filePath, url] of Object.entries(screenshotFiles)) {
    const parts = filePath.split('/')
    const fileName = parts.pop() ?? ''
    const slug = parts.pop() ?? '' // the folder name is the project slug
    const ext = fileName.split('.').pop()?.toLowerCase() ?? ''
    const base = fileName.replace(/\.[^.]+$/, '')
    const score = screenshotExtPriority[ext] ?? 99
    const key = `${slug}/${base}`
    if (bestScore[key] === undefined || score < bestScore[key]) {
      bestScore[key] = score
      ;(collected[slug] ??= {})[base] = url
    }
  }
  for (const [slug, byName] of Object.entries(collected)) {
    screenshotsBySlug[slug] = Object.entries(byName)
      .map(([name, url]) => ({ name, url }))
      // Natural sort so "2" comes before "10".
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))
  }
}

/** Resolved screenshot URLs for a project slug, in display order (empty if none yet). */
export function projectScreenshots(slug: string): string[] {
  return (screenshotsBySlug[slug] ?? []).map((s) => s.url)
}
