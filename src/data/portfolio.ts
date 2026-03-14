export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  technologies: string[];
};

export type Project = {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  codeUrl: string;
  demoUrl: string;
};

export type ContactDetail = {
  label: string;
  value: string;
  href?: string;
};

export const portfolioData = {
  person: {
    name: "Simon Wand",
    role: "Senior Software Engineer",
    tagline: "Building high-performance digital products with strong engineering fundamentals.",
    summary:
      "I design and ship full-stack systems with a focus on reliability, maintainability, and user-centered outcomes.",
    availability: "Available for work",
    profileImage: "/images/Bewerbungsfoto.png",
    profileAlt: "Professional portrait of Simon Wand",
    resumeUrl: "#contact",
  },
  seo: {
    title: "Simon Wand | Senior Software Engineer",
    description:
      "Portfolio of Simon Wand, a senior software engineer specializing in full-stack development, cloud architecture, and polished digital experiences.",
    siteUrl: "https://example.com",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ] as NavItem[],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/Similly", short: "GH" },
    { label: "LinkedIn", href: "https://linkedin.com/in/simonwand", short: "IN" },
    { label: "Email", href: "mailto:wand.simon1@gmail.com", short: "@" },
  ],
  stats: [
    //{ label: "Projects Shipped", value: "50+" },
    { label: "Years Experience", value: "6+" },
    //{ label: "Client Satisfaction", value: "100%" },
  ] as Stat[],
  about: {
    heading: "About Me",
    body: "I partner with teams that care about product quality, scalability, and user trust. My work spans frontend architecture, backend services, and workflow automation, with an emphasis on clear collaboration and measurable outcomes.",
  },
  skillGroups: [
    {
      title: "Programming Languages",
      skills: ["TypeScript", "JavaScript", "Python", "Java"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    },
    {
      title: "Backend & Data",
      skills: ["PostgreSQL", "Prisma", "REST APIs", "GraphQL"],
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "CI/CD"],
    },
    {
      title: "Testing & Quality",
      skills: ["Playwright", "Jest", "Vitest", "Cypress"],
    },
    {
      title: "Workflow",
      skills: ["Agile", "Technical Leadership", "Code Reviews"],
    },
  ] as SkillGroup[],
  experiences: [
    {
      role: "Software Engineer",
      company: "Freelancer",
      period: "2024 - Present",
      location: "Remote",
      summary:
        "Led a cross-functional platform initiative, improving deployment reliability and reducing mean time to recovery through infrastructure modernization.",
      technologies: ["TypeScript", "Next.js", "Node.js", "AWS", "Terraform"],
    },
    {
      role: "Solution & Maintenance Specialist",
      company: "Ferrero MSC GmbH & Co. KG",
      period: "2021 - 2024",
      location: "Frankfurt/Stadtallendorf, DE",
      summary:
        "Built and scaled client-facing web applications with robust CMS integrations, performance optimizations, and accessible component systems.",
      technologies: ["React", "Next.js", "PostgreSQL", "Project Management", "Tailwind CSS"],
    },
    {
      role: "Dual Student Software Technology",
      company: "Ferrero MSC GmbH & Co. KG",
      period: "2017 - 2021",
      location: "Frankfurt/Stadtallendorf, DE",
      summary:
        "Shipped MVPs and iterated quickly with product teams, introducing code quality standards and automated test coverage.",
      technologies: ["JavaScript", "Java", "Docker", "Jest"],
    },
  ] as Experience[],
  projects: [
    {
      name: "Football Vision",
      description:
        "Turn single-camera TV broadcasts into metric player/ball trajectories and football insights (distance, speed zones, heatmaps, possession proxy, formations, roles). The pipeline runs frame-by-frame, with class-aware tracking, jersey OCR, and per-frame homographies from PnLCalib. ",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80",
      technologies: ["Python", "Pytorch", "Machine Learning", "Computer Vision"],
      codeUrl: "https://github.com/Similly/FootballVision",
      demoUrl: "https://example.com",
    },
    {
      name: "InvoiceFlow",
      description:
        "A MVP for automated invoice ingestion and review. Users upload invoice PDFs, the backend extracts structured fields with deterministic parsing (plus OCR fallback), stores results in PostgreSQL, and exposes a polished server-rendered UI for search, review, and manual correction.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Jinja2"],
      codeUrl: "https://github.com/Similly/InvoiceFlow",
      demoUrl: "https://example.com",
    },
    {
      name: "ClientOps",
      description:
        "full-stack client portal for agencies, freelancers, consultants, and service businesses. \nIt provides role-based operations workflows for Admins, Team Members, and Clients in a polished SaaS-style UI inspired by the provided Figma design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      technologies: ["Next.js", "Tailwind CSS", "NextAuth", "Docker"],
      codeUrl: "https://github.com/Similly/ClientOps",
      demoUrl: "https://example.com",
    },
  ] as Project[],
  contactDetails: [
    { label: "Email", value: "wand.simon1@gmail.com", href: "mailto:wand.simon1@gmail.com" },
    { label: "Phone", value: "+49 152 53451660", href: "tel:+4915253451660" },
    { label: "Location", value: "Braunschweig, Germany" },
  ] as ContactDetail[],
};
