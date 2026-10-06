export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  featuredAreas?: string[];
  description?: string;
}

export const experience: ExperienceItem[] = [
  {
    id: 'iseu-se',
    company: 'iServeU',
    role: 'Software Engineer',
    period: 'August 2025 - Present',
    location: 'Bhubaneswar',
    current: true,
    featuredAreas: [
      'Enterprise applications',
      'LOS platforms',
      'Payment / Admin portals',
      'Microfrontend applications',
      'Client-specific portals',
      'Digital signing workflows',
    ],
    description:
      'Building and maintaining production enterprise web applications with React, including Loan Origination System portals, payment administration platforms, and microfrontend-based admin systems for multiple clients.',
  },
  {
    id: 'iseu-intern',
    company: 'iServeU',
    role: 'Software Engineer Intern',
    period: 'February 2025 - August 2025',
    location: 'Bhubaneswar',
    description:
      'Contributed to frontend development of enterprise applications, working on React components, API integration, form workflows, and responsive UI for client-specific portals.',
  },
  {
    id: 'eduskills',
    company: 'EduSkills Foundation',
    role: 'Android Developer',
    period: 'January 2024 - March 2024',
    location: '',
    description:
      'Worked on Android application development as part of a virtual internship program, gaining exposure to mobile development workflows and application structure.',
  },
  {
    id: 'prodigy',
    company: 'Prodigy InfoTech',
    role: 'Web Development Intern',
    period: 'December 2023 - January 2024',
    location: '',
    description:
      'Completed a web development internship focused on building responsive web pages and gaining foundational frontend development experience.',
  },
];
