export interface WhatIBuildItem {
  id: string;
  number: string;
  title: string;
  icon: string;
  description: string;
  technologies: string[];
}

export const whatIBuild: WhatIBuildItem[] = [
  {
    id: 'enterprise',
    number: '01',
    title: 'Enterprise Applications',
    icon: 'Building2',
    description:
      'Large-scale, workflow-driven web applications built for real business operations — from dashboards to admin systems used across multiple clients.',
    technologies: ['React', 'MUI', 'REST API', 'Responsive Design'],
  },
  {
    id: 'los',
    number: '02',
    title: 'LOS Platforms',
    icon: 'FileText',
    description:
      'Loan Origination System portals with complex application and lead workflows, business-rule-driven UI, and reusable frontend patterns adaptable across clients.',
    technologies: ['React', 'Forms', 'Validation', 'Data Tables', 'Dashboards'],
  },
  {
    id: 'fintech',
    number: '03',
    title: 'Fintech & Payment Portals',
    icon: 'CreditCard',
    description:
      'Payment and administration portals with role-oriented interfaces, API-driven data, and secure frontend communication for fintech workflows.',
    technologies: ['React', 'MUI', 'Axios', 'Dashboards', 'Tables'],
  },
  {
    id: 'admin-mfe',
    number: '04',
    title: 'Admin & Microfrontend Systems',
    icon: 'Boxes',
    description:
      'Microfrontend-based enterprise admin architecture where independent modules integrate into a unified host application shell.',
    technologies: ['React', 'Microfrontend Architecture', 'MUI', 'Reusable Components'],
  },
  {
    id: 'esign',
    number: '05',
    title: 'Digital Document Workflows',
    icon: 'PenTool',
    description:
      'Digital document signing platforms supporting single and multi-user signing flows with status tracking and workflow-driven interfaces.',
    technologies: ['React', 'Workflow UI', 'API Integration', 'Forms'],
  },
];
