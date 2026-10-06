export interface Profile {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  about: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  portfolioUrl: string;
  resumeAvailable: boolean;
  rotatingTitles: string[];
}

export const profile: Profile = {
  name: "Ankit Mishra",
  role: "Software Engineer",
  tagline:
    "Building enterprise web applications with React, modern frontend architecture and real-world business workflows.",
  summary:
    "Software Engineer building scalable, responsive and user-focused enterprise applications. I specialize in React-based applications, enterprise dashboards, fintech workflows, LOS platforms and reusable frontend systems.",
  about:
    "I'm a Software Engineer at iServeU focused on building production-oriented web applications with React and modern frontend technologies.\n\nMy work spans enterprise administration platforms, payment-related applications, Loan Origination Systems, digital document workflows and client-specific portals.\n\nI enjoy turning complex business requirements into intuitive, maintainable interfaces.",
  location: "Bhubaneswar, Odisha, India",
  email: "ankitmishrapuri@gmail.com",
  linkedin: "https://www.linkedin.com/in/devankitmishra/",
  github: "https://github.com/devankitmishra",
  portfolioUrl: "https://devankitmishra.github.io/",
  resumeAvailable: false,
  rotatingTitles: [
    "Software Engineer",
    "Full Stack Developer",
    "Enterprise Application Developer",
    "Fintech Application Developer",
  ],
};
