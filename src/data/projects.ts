export interface PersonalProject {
  id: string;
  name: string;
  category: string;
  technologies: string[];
  description: string;
  role: string;
  keyAreas: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const personalProjects: PersonalProject[] = [
  {
    id: "RotiChapati",
    name: "Full Stack Food Ordering Website",
    category: "Personal Project",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
    description:
      "A full-stack food ordering website built using the MERN stack, allowing users to browse menus, place orders, and manage their accounts.",
    role: "Full Stack Developer",
    keyAreas: [
      "JWT token authentication",
      "bcrypt hashing",
      "payment gateway integration",
    ],
    demoUrl: "https://rotichapati.vercel.app/",
    githubUrl: "https://github.com/devankitmishra/rotichapati",
  },
  {
    id: "digital-progress-card",
    name: "Digital Progress Card",
    category: "Personal Project",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
    description:
      "A digital progress card built using React and Node.js, allowing users to track their learning progress and achievements.",
    role: "Full Stack Developer",
    keyAreas: ["firebase authentication", "data visualization using recharts"],
    demoUrl: "https://digital-progress-card-1.onrender.com/",
    githubUrl: "https://github.com/devankitmishra/digital-progress-card",
  },
  {
    id: "darling-franxx",
    name: "Darling In The Franxx Fan Page",
    category: "Personal Project",
    technologies: ["React", "framer-motion", "JavaScript"],
    description:
      "A fan-made responsive web page dedicated to the anime series Darling In The Franxx, built as a personal creative frontend project.",
    role: "Frontend Developer",
    keyAreas: [
      "Responsive design",
      "Creative UI",
      "Semantic HTML",
      "CSS animations",
    ],
    demoUrl: "https://darlinginthefranxxfanpage.netlify.app/",
    githubUrl: "https://github.com/devankitmishra",
  },
];
