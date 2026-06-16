// Centralized, typed profile content sourced from Eric Marcelino's resume.

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

export const profile: Profile = {
  name: 'Eric Marcelino',
  title: 'Tech Lead',
  tagline:
    'Passionate and disciplined Software Engineer with 6+ years of experience building robust solutions across web, mobile, desktop, and IoT. Skilled in Go, Vue.js, Flutter, and DevOps practices — a fast learner and proactive team contributor.',
  location: 'Indonesia',
  email: 'ericmarcelinotju@gmail.com',
  phone: '+62 813 8273 4943',
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
    location: 'Banten, Indonesia',
    period: 'Jan 2026 — Present',
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
    location: 'Jakarta, Indonesia',
    period: 'May 2025 — Jan 2026',
    highlights: [
      'Led 3 cross-functional teams to deliver high-quality software products on schedule.',
      'Promoted clean architecture and SOLID principles through mentoring and peer code reviews.',
      'Fostered critical thinking within the team by encouraging open discussions and collaborative problem solving.',
    ],
  },
  {
    role: 'IT Development Staff',
    company: 'PT. TEMAS Tbk',
    location: 'Jakarta, Indonesia',
    period: 'Apr 2024 — May 2025',
    highlights: [
      'Led a SCRUM team using JIRA for task management and sprint planning.',
      'Introduced unit testing practices for Go and Vue.js projects.',
      'Trained team members on Go and Vue.js standards and practices.',
    ],
  },
  {
    role: 'Tech Lead Engineer',
    company: 'PT. Data Integrasi Semesta',
    location: 'Jakarta, Indonesia',
    period: 'Feb 2020 — Apr 2024',
    highlights: [
      'Delivered custom software for logistics, banking, and hospitality clients.',
      'Managed project timelines, cost estimates, and coordination with outsourced developers.',
      'Established core DevOps practices such as CI/CD, Agile, and testing.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Airpaz.com',
    location: 'Jakarta, Indonesia',
    period: 'Mar 2019 — Feb 2020',
    highlights: [
      'Modernized the legacy frontend by migrating from a monolithic Laravel app to Nuxt.js.',
    ],
  },
  {
    role: 'Intern Software Engineer',
    company: 'Samsung R&D Institute Indonesia',
    location: 'Jakarta, Indonesia',
    period: 'Mar 2018 — Mar 2019',
    highlights: [
      "Developed CRM and parental control mobile apps to support Samsung's sales and family-focused initiatives.",
    ],
  },
  {
    role: 'Teaching Assistant',
    company: 'BINUS University',
    location: 'Jakarta, Indonesia',
    period: 'Feb 2016 — Feb 2018',
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
    url: 'https://dakotacinema.id/',
  },
  {
    name: 'Paint Store CRM',
    description:
      'A customer relationship management web application built for a paint store.',
  },
  {
    name: 'Website CMS',
    description:
      'A content management system that makes setting up a website quick and easy.',
  },
  {
    name: 'Cafe Point of Sales',
    description: 'A point of sales application tailored for cafes.',
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
