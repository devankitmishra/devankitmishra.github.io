export interface ArchitectureLayer {
  id: string;
  label: string;
  description: string;
  icon: string;
}

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: 'requirements',
    label: 'Requirements & Analysis',
    description:
      'Understand business requirements, user needs, workflows, and technical constraints.',
    icon: 'ClipboardList',
  },
  {
    id: 'architecture',
    label: 'System Architecture',
    description:
      'Design scalable application architecture, data flow, APIs, and technology choices.',
    icon: 'Network',
  },
  {
    id: 'database',
    label: 'Database & Data Design',
    description:
      'Design data models, relationships, queries, and storage strategies for application needs.',
    icon: 'Database',
  },
  {
    id: 'backend',
    label: 'Backend Development',
    description:
      'Build APIs, business logic, authentication, validation, and server-side workflows.',
    icon: 'Server',
  },
  {
    id: 'frontend',
    label: 'Frontend Development',
    description:
      'Build responsive, reusable interfaces that connect seamlessly with backend services.',
    icon: 'PanelsTopLeft',
  },
  {
    id: 'integration',
    label: 'API & Service Integration',
    description:
      'Connect frontend, backend, third-party services, and external systems reliably.',
    icon: 'Plug',
  },
  {
    id: 'testing',
    label: 'Testing & Quality',
    description:
      'Validate functionality, edge cases, integrations, performance, and application reliability.',
    icon: 'BadgeCheck',
  },
  {
    id: 'deployment',
    label: 'Deployment & CI/CD',
    description:
      'Build, automate, deploy, and manage applications across development and production environments.',
    icon: 'Rocket',
  },
  {
    id: 'monitoring',
    label: 'Monitoring & Maintenance',
    description:
      'Monitor production systems, resolve issues, optimize performance, and continuously improve the product.',
    icon: 'Activity',
  },
];