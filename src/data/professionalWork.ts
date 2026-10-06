export interface ProfessionalProject {
  id: string;
  name: string;
  category: string;
  technologies: string[];
  description: string;
  role: string;
  keyAreas: string[];
  confidential: boolean;
}

export const professionalWork: ProfessionalProject[] = [
  {
    id: 'nict-los',
    name: 'NICT LOS Portal',
    category: 'Enterprise Application',
    technologies: ['React', 'Material UI', 'REST API', 'Formik', 'Yup'],
    description:
      'Enterprise Loan Origination System developed for client-specific lending workflows. Built business-oriented screens, lead and application workflows, and dashboard-driven interfaces.',
    role: 'Frontend Developer',
    keyAreas: [
      'Business-rule-driven UI',
      'Application & lead workflows',
      'API integration',
      'Data tables with filtering & pagination',
      'Complex form validation',
      'Responsive UI',
    ],
    confidential: true,
  },
  {
    id: 'samridh-los',
    name: 'Samridh Kendra LOS Portal',
    category: 'Enterprise Application',
    technologies: ['React', 'Material UI', 'REST API', 'Axios'],
    description:
      'Adapted a common Loan Origination System pattern for a different client, emphasizing reusable frontend architecture and client-specific customization.',
    role: 'Frontend Developer',
    keyAreas: [
      'Reusable frontend architecture',
      'Client-specific requirements',
      'Reusable components',
      'Workflow screens',
      'Forms, tables & dashboards',
      'Responsive design',
    ],
    confidential: true,
  },
  {
    id: 'payment-admin',
    name: 'Payment / Admin Portals',
    category: 'Fintech Application',
    technologies: ['React', 'Material UI', 'REST API', 'Recharts'],
    description:
      'Worked on multiple payment and administration portals including Soundbox-related portals and client-specific admin interfaces with role-oriented workflows.',
    role: 'Frontend Developer',
    keyAreas: [
      'Role-oriented administration UI',
      'Dashboards & data tables',
      'Authentication-related UI',
      'Client-specific customization',
      'Responsive layouts',
    ],
    confidential: true,
  },
  {
    id: 'common-admin-mfe',
    name: 'Common Admin Microfrontend',
    category: 'Microfrontend System',
    technologies: ['React', 'Material UI', 'REST API'],
    description:
      'Part of a microfrontend-based enterprise frontend architecture where multiple independent admin modules work together within a host application shell.',
    role: 'Frontend Developer',
    keyAreas: [
      'Microfrontend architecture',
      'Host / shell integration',
      'Module-based admin features',
      'Reusable component library',
      'Cross-module consistency',
    ],
    confidential: true,
  },
  {
    id: 'mpurse-khatabook',
    name: 'MPurse / Khatabook Portal',
    category: 'Fintech Application',
    technologies: ['React', 'Material UI', 'REST API', 'Axios'],
    description:
      'Enterprise payment-related portal with administrative workflows, API-driven dashboards, and business workflow interfaces.',
    role: 'Frontend Developer',
    keyAreas: [
      'Administrative workflows',
      'API-driven data interfaces',
      'Dashboards & tables',
      'Business workflow screens',
      'Responsive UI',
    ],
    confidential: true,
  },
  {
    id: 'esign-portal',
    name: 'eSign Portal',
    category: 'Digital Document Workflow',
    technologies: ['React', 'Material UI', 'REST API'],
    description:
      'Digital document signing workflow platform supporting single-user and multiple-user signing flows with document status tracking.',
    role: 'Frontend Developer',
    keyAreas: [
      'Digital document signing workflows',
      'Single & multi-user signing flows',
      'Document status tracking',
      'Frontend forms & interfaces',
      'API integration',
    ],
    confidential: true,
  },
];
