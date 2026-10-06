export interface SkillGroup {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: "primary" | "secondary" | "supporting";
  related?: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "Code2",
    skills: [
      {
        name: "React",
        level: "primary",
        related: ["JavaScript", "MUI", "Tailwind"],
      },
      {
        name: "JavaScript",
        level: "primary",
        related: ["React", "HTML", "CSS"],
      },
      { name: "MUI", level: "primary", related: ["React", "Forms"] },
      { name: "Tailwind CSS", level: "secondary", related: ["React", "CSS"] },
    ],
  },
  {
    id: "enterprise-ui",
    title: "Enterprise UI",
    icon: "LayoutDashboard",
    skills: [
      { name: "Forms", level: "primary", related: ["Validation", "React"] },
      { name: "Validation", level: "primary", related: ["Forms", "Yup"] },
      { name: "Dashboards", level: "primary", related: ["Charts", "Tables"] },
      {
        name: "Tables",
        level: "primary",
        related: ["Pagination", "Filtering"],
      },
      { name: "API-driven UI", level: "primary", related: ["React", "Axios"] },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "Server",
    skills: [
      {
        name: "Node.js",
        level: "primary",
        related: ["Express.js", "MongoDB"],
      },
      { name: "Express.js", level: "primary", related: ["Node.js"] },
      { name: "Fast API", level: "secondary", related: ["Python"] },
    ],
  },
  {
    id: "data",
    title: "Data",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: "primary", related: ["Node.js"] },
      {
        name: "Firestore | Firebase",
        level: "secondary",
        related: ["Firebase"],
      },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Git", level: "primary", related: ["GitHub", "GitLab"] },
      { name: "GitHub", level: "primary", related: ["Git"] },
      { name: "GitLab", level: "primary", related: ["Git"] },
      { name: "Postman", level: "primary", related: ["Git"] },
      { name: "Jenkins", level: "secondary", related: ["Git"] },
      { name: "Docker", level: "secondary", related: ["Git"] },
    ],
  },
];

export const additionalTechnologies = [
  "Formik",
  "Yup",
  "bcrypt",
  "JWT",
  "Recharts",
];
