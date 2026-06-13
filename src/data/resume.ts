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
  period: string
  highlights: string[]
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
}

export interface Language {
  name: string
  level: string
}

export const profile: Profile = {
  name: 'Eric Marcelino',
  title: 'Tech Lead Engineer',
  tagline:
    'Full-stack engineer building reliable, robust software across web, mobile, and cloud.',
  location: 'Indonesia',
  email: 'ericmarcelinotju@gmail.com',
  phone: '+62 813 8273 4943',
  links: {
    github: 'https://github.com/ericmarcelinotju',
    linkedin: 'https://www.linkedin.com/in/ericmarcelinotju',
  },
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: [
      'Go',
      'PHP',
      'JavaScript',
      'TypeScript',
      'Java',
      'Kotlin',
      'Swift',
      'C#',
      'C',
      'C++',
    ],
  },
  {
    category: 'Frameworks & Platforms',
    items: [
      'Gin',
      'Laravel',
      'VueJS',
      'ReactJS',
      'NuxtJS',
      'NodeJS',
      'NestJS',
      '.NET',
      'Android',
      'iOS',
    ],
  },
  {
    category: 'Databases & Storage',
    items: ['MySQL', 'PostgreSQL', 'NoSQL', 'Firebase', 'Redis', 'Memcache'],
  },
  {
    category: 'Infrastructure & Tooling',
    items: ['CI/CD', 'Linux', 'Bash', 'RabbitMQ', 'gRPC', 'REST API'],
  },
  {
    category: 'Styling',
    items: ['CSS', 'SCSS', 'SASS'],
  },
]

export const experience: ExperienceItem[] = [
  {
    role: 'Tech Lead Engineer',
    company: 'PT. Data Integrasi Semesta',
    period: '02/2020 — Present',
    highlights: [
      'Developed a point of sales application for vending machines that is reliable and robust in isolated areas.',
      'Developed a point of sales mobile application for a packaging company, allowing users to customize their package dimensions and size.',
      "Developed a distribution manager application that helps employers track distribution of their goods and helps employees keep track of their responsibilities.",
      'Developed a fire monitoring system that integrates traditional fire alarm systems into a centralized and sophisticated cloud dashboard.',
      'Developed a utilities billing system for buildings to ease the process of billing occupants for their utilities.',
      'Developed a centralized backup and indexing system for banks’ call recordings, allowing users to manage recordings from multiple bank branches.',
      'Developed an operation management application for building management employees to maintain and inspect building accessories.',
      'Managed multiple projects — estimating cost and timeline, collaborating with outsource developers, and introducing CI/CD pipelines to streamline development.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Airpaz.com',
    period: '03/2019 — 02/2020',
    highlights: [
      'Migrated legacy email systems into a NodeJS system that lets users upload new email designs and uses queues to reliably send notification emails.',
      'Migrated legacy web applications from a monolithic PHP codebase into NuxtJS for both desktop and mobile.',
    ],
  },
  {
    role: 'Intern Software Engineer',
    company: 'Samsung R&D Institute Indonesia',
    period: '03/2018 — 03/2019',
    highlights: [
      "Developed a customer relationship management (CRM) mobile application that helps Samsung's sales team track their projects.",
      "Developed a parental control application to help parents manage their children's mobile phone usage.",
      "Created reporting pages for an existing application using Samsung's proprietary software.",
    ],
  },
  {
    role: 'Teaching Assistant',
    company: 'SLC, Binus University',
    period: '02/2016 — 02/2018',
    highlights: [
      'Taught various subjects to students, sometimes in English — including Object Oriented Programming, Relational Database Concept and Language, Web Design and Programming, and Computer Vision.',
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

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'Binus University',
    period: '2015 — 2018',
  },
]

export const languages: Language[] = [
  { name: 'English', level: 'Fluent' },
  { name: 'Indonesian', level: 'Native' },
]
