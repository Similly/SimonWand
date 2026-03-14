import { Locale } from "@/lib/i18n";

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

export type SocialLink = {
  label: string;
  href: string;
  short: string;
};

export type PortfolioContent = {
  person: {
    name: string;
    role: string;
    availability: string;
    profileImage: string;
    profileAlt: string;
  };
  seo: {
    title: string;
    description: string;
    siteUrl: string;
  };
  hero: {
    headingPrefix: string;
    ctaPrimary: string;
    ctaSecondary: string;
    tagline: string;
    summary: string;
  };
  nav: NavItem[];
  socialLinks: SocialLink[];
  stats: Stat[];
  about: {
    eyebrow: string;
    heading: string;
    body: string;
  };
  skillsSection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  skillGroups: SkillGroup[];
  experienceSection: {
    eyebrow: string;
    title: string;
    description: string;
    ariaLabel: string;
  };
  experiences: Experience[];
  projectSection: {
    eyebrow: string;
    title: string;
    description: string;
    codeButton: string;
    demoButton: string;
  };
  projects: Project[];
  contactSection: {
    eyebrow: string;
    title: string;
    description: string;
    formAria: string;
    formTitle: string;
    nameLabel: string;
    emailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    submitLabel: string;
    submitLoadingLabel: string;
    successMessage: string;
    errorMessage: string;
    validationMessage: string;
    rateLimitMessage: string;
  };
  contactDetails: ContactDetail[];
  footer: {
    rights: string;
  };
  languageSwitcher: {
    label: string;
    german: string;
    english: string;
  };
  themeSwitcher: {
    toLight: string;
    toDark: string;
  };
  accessibility: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    navPrimary: string;
    navMobile: string;
  };
};

const shared = {
  person: {
    name: "Simon Wand",
    role: "Senior Software Engineer",
    profileImage: "/images/Bewerbungsfoto.png",
    profileAlt: "Professional portrait of Simon Wand",
  },
  seo: {
    siteUrl: "https://example.com",
  },
  socialLinks: [
    { label: "GitHub", href: "https://github.com/Similly", short: "GH" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/simon-wand-747a3a1a1/", short: "IN" },
    { label: "Email", href: "mailto:wand.simon1@gmail.com", short: "@" },
  ] as SocialLink[],
  projects: [
    {
      name: "Football Vision",
      image:
        "/images/FootballVision_lo.png",
      technologies: ["Python", "PyTorch", "Machine Learning", "Computer Vision"],
      codeUrl: "https://github.com/Similly/FootballVision",
      demoUrl: "",
    },
    {
      name: "InvoiceFlow",
      image: "/images/InvoiceFlow_logo.png",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Jinja2"],
      codeUrl: "https://github.com/Similly/InvoiceFlow",
      demoUrl: "https://www.invoiceflow.simonwand.de",
    },
    {
      name: "ClientOps",
      image: "/images/ClientOps_logo.png",
      technologies: ["Next.js", "Tailwind CSS", "NextAuth", "Docker"],
      codeUrl: "https://github.com/Similly/ClientOps",
      demoUrl: "https://www.clientops.simonwand.de",
    },
  ],
  contactDetails: [
    { value: "wand.simon1@gmail.com", href: "mailto:wand.simon1@gmail.com" },
    { value: "+49 152 53451660", href: "tel:+4915253451660" },
    { value: "Braunschweig, Germany" },
  ],
};

const contentByLocale: Record<Locale, PortfolioContent> = {
  de: {
    person: {
      ...shared.person,
      availability: "Verfügbar für Projekte",
    },
    seo: {
      title: "Simon Wand | Senior Software Engineer",
      description:
        "Portfolio von Simon Wand, Senior Software Engineer mit Fokus auf Full-Stack-Entwicklung, Cloud-Architektur und hochwertige digitale Produkte.",
      siteUrl: shared.seo.siteUrl,
    },
    hero: {
      headingPrefix: "Hallo, ich bin",
      ctaPrimary: "Kontakt aufnehmen",
      ctaSecondary: "Meine Projekte",
      tagline: "Ich entwickle leistungsstarke digitale Produkte mit soliden Engineering-Grundlagen.",
      summary:
        "Ich konzipiere und liefere Full-Stack-Systeme und Automatisierungen mit Fokus auf Zuverlässigkeit, Wartbarkeit und echten Mehrwert für Nutzer.",
    },
    nav: [
      { label: "Start", href: "#home" },
      { label: "Über mich", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projekte", href: "#projects" },
      { label: "Kontakt", href: "#contact" },
    ],
    socialLinks: shared.socialLinks,
    stats: [{ label: "Jahre Erfahrung", value: "6+" }],
    about: {
      eyebrow: "Über mich",
      heading: "Über mich",
      body: "Ich arbeite am liebsten mit Teams, die Produktqualität, Skalierbarkeit und Nutzervertrauen ernst nehmen. Mein Schwerpunkt liegt auf Frontend-Architektur, Backend-Services und Workflow-Automatisierung mit klarer Kommunikation und messbaren Ergebnissen.",
    },
    skillsSection: {
      eyebrow: "Skills",
      title: "Technische Skills",
      description: "Ein ausgewogenes Toolset aus Frontend, Backend, Cloud und Qualitätsentwicklung.",
    },
    skillGroups: [
      { title: "Programmiersprachen", skills: ["TypeScript", "JavaScript", "Python", "Java"] },
      { title: "Frameworks & Libraries", skills: ["Next.js", "React", "Node.js", "Tailwind CSS"] },
      { title: "Backend & Daten", skills: ["PostgreSQL", "Prisma", "REST APIs", "GraphQL"] },
      { title: "DevOps & Cloud", skills: ["Docker", "CI/CD"] },
      { title: "Testing & Qualität", skills: ["Playwright", "Jest", "Vitest", "Cypress"] },
      { title: "Arbeitsweise", skills: ["Agile", "Technical Leadership", "Code Reviews"] },
    ],
    experienceSection: {
      eyebrow: "Erfahrung",
      title: "Berufserfahrung",
      description: "Erfahrung in der Entwicklung robuster Softwareprodukte mit modernen Engineering-Methoden.",
      ariaLabel: "Berufserfahrung",
    },
    experiences: [
      {
        role: "Software Engineer",
        company: "Freelancer",
        period: "2024 - Heute",
        location: "Remote",
        summary:
          "Konzeption und Umsetzung von Full-Stack Webplattformen und Automatisierungen.",
        technologies: ["TypeScript", "Next.js", "Node.js", "AWS", "Terraform"],
      },
      {
        role: "Solution & Maintenance Specialist",
        company: "Ferrero MSC GmbH & Co. KG",
        period: "2021 - 2024",
        location: "Frankfurt/Stadtallendorf, DE",
        summary:
          "Konzeption von Lösungen im logistischen Anwendungsumfeld. \nKoordinierung der Aufgaben mit externen Dienstleistern, dem Fachbereich und der IT. \nVerbesserung von Prozessqualität und Anforderungsmanagement. \nÜbernahme von Teilprojektverantwortung.",
        technologies: ["React", "Next.js", "PostgreSQL", "Projektmanagement", "Tailwind CSS"],
      },
      {
        role: "Dualer Student Softwaretechnologie",
        company: "Ferrero MSC GmbH & Co. KG",
        period: "2017 - 2021",
        location: "Frankfurt/Stadtallendorf, DE",
        summary:
          "Konzeption und Umsetzung von Cloud-basierten Business Anwendungen. \nKonzeption und Umsetzung von Schnittstellen zur automatisierten Datenverarbeitung.",
        technologies: ["JavaScript", "Java", "Docker", "Jest"],
      },
    ],
    projectSection: {
      eyebrow: "Projekte",
      title: "Ausgewählte Projekte",
      description: "Auswahl an Projekten mit End-to-End-Verantwortung von Architektur bis Delivery.",
      codeButton: "Code",
      demoButton: "Demo",
    },
    projects: [
      {
        ...shared.projects[0],
        description:
          "Verarbeitet TV-Einzelkamerabilder zu Spieler-/Balltrajektorien und Fußball-Insights wie Distanz, Speed-Zonen und Heatmaps.",
      },
      {
        ...shared.projects[1],
        description:
          "MVP für automatisierte Rechnungsverarbeitung mit strukturiertem Parsing, OCR-Fallback und UI für Review und Korrekturen.",
      },
      {
        ...shared.projects[2],
        description:
          "Full-Stack-Client-Portal für Agenturen und Dienstleister mit rollenbasierten Workflows in einer modernen SaaS-Oberfläche.",
      },
    ],
    contactSection: {
      eyebrow: "Kontakt",
      title: "Lass uns zusammenarbeiten",
      description: "Erzähl mir von deinem Projektziel und Zeitplan. Ich melde mich zeitnah.",
      formAria: "Kontaktformular",
      formTitle: "Nachricht senden",
      nameLabel: "Dein Name",
      emailLabel: "Deine E-Mail",
      subjectLabel: "Betreff",
      messageLabel: "Deine Nachricht",
      namePlaceholder: "Dein Name",
      emailPlaceholder: "Deine E-Mail",
      subjectPlaceholder: "Betreff",
      messagePlaceholder: "Deine Nachricht",
      submitLabel: "Nachricht senden",
      submitLoadingLabel: "Wird gesendet...",
      successMessage: "Danke! Deine Nachricht wurde erfolgreich versendet.",
      errorMessage: "Beim Senden ist ein Fehler aufgetreten. Bitte versuche es erneut.",
      validationMessage: "Bitte prüfe deine Eingaben und versuche es erneut.",
      rateLimitMessage: "Zu viele Anfragen in kurzer Zeit. Bitte versuche es in ein paar Minuten erneut.",
    },
    contactDetails: [
      { label: "E-Mail", ...shared.contactDetails[0] },
      { label: "Telefon", ...shared.contactDetails[1] },
      { label: "Standort", ...shared.contactDetails[2] },
    ],
    footer: {
      rights: "Alle Rechte vorbehalten.",
    },
    languageSwitcher: {
      label: "Sprache wechseln",
      german: "Deutsch",
      english: "Englisch",
    },
    themeSwitcher: {
      toLight: "Hellen Modus aktivieren",
      toDark: "Dunklen Modus aktivieren",
    },
    accessibility: {
      skipToContent: "Zum Hauptinhalt springen",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
      navPrimary: "Primäre Navigation",
      navMobile: "Mobile Navigation",
    },
  },
  en: {
    person: {
      ...shared.person,
      availability: "Available for work",
    },
    seo: {
      title: "Simon Wand | Senior Software Engineer",
      description:
        "Portfolio of Simon Wand, senior software engineer specializing in full-stack development, cloud architecture, and polished digital products.",
      siteUrl: shared.seo.siteUrl,
    },
    hero: {
      headingPrefix: "Hello, I'm",
      ctaPrimary: "Contact me",
      ctaSecondary: "View my work",
      tagline: "Building high-performance digital products with strong engineering fundamentals.",
      summary:
        "I design and ship full-stack systems and automations with a focus on reliability, maintainability, and user-centered outcomes.",
    },
    nav: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    socialLinks: shared.socialLinks,
    stats: [{ label: "Years experience", value: "6+" }],
    about: {
      eyebrow: "About",
      heading: "About Me",
      body: "I partner with teams that care about product quality, scalability, and user trust. My work spans frontend architecture, backend services, and workflow automation, with an emphasis on clear collaboration and measurable outcomes.",
    },
    skillsSection: {
      eyebrow: "Skills",
      title: "Technical Skills",
      description: "A balanced toolkit across frontend, backend, cloud, and quality engineering.",
    },
    skillGroups: [
      { title: "Programming Languages", skills: ["TypeScript", "JavaScript", "Python", "Java"] },
      { title: "Frameworks & Libraries", skills: ["Next.js", "React", "Node.js", "Tailwind CSS"] },
      { title: "Backend & Data", skills: ["PostgreSQL", "Prisma", "REST APIs", "GraphQL"] },
      { title: "DevOps & Cloud", skills: ["Docker", "CI/CD"] },
      { title: "Testing & Quality", skills: ["Playwright", "Jest", "Vitest", "Cypress"] },
      { title: "Workflow", skills: ["Agile", "Technical Leadership", "Code Reviews"] },
    ],
    experienceSection: {
      eyebrow: "Experience",
      title: "Professional Experience",
      description: "Years of building robust software products with modern engineering practices.",
      ariaLabel: "Professional experience",
    },
    experiences: [
      {
        role: "Software Engineer",
        company: "Freelancer",
        period: "2024 - Present",
        location: "Remote",
        summary:
          "Design and development of full-stack web platforms and automation solutions.",
        technologies: ["TypeScript", "Next.js", "Node.js", "AWS", "Terraform"],
      },
      {
        role: "Solution & Maintenance Specialist",
        company: "Ferrero MSC GmbH & Co. KG",
        period: "2021 - 2024",
        location: "Frankfurt/Stadtallendorf, DE",
        summary:
          "Designed solutions in a logistics application environment. Coordinated tasks with external service providers, business stakeholders, and IT. Improved process quality and requirements management. Took responsibility for subprojects.",
        technologies: ["React", "Next.js", "PostgreSQL", "Project Management", "Tailwind CSS"],
      },
      {
        role: "Dual Student Software Technology",
        company: "Ferrero MSC GmbH & Co. KG",
        period: "2017 - 2021",
        location: "Frankfurt/Stadtallendorf, DE",
        summary:
          "Designed and developed cloud-based business applications. Designed and implemented interfaces for automated data processing.",
        technologies: ["JavaScript", "Java", "Docker", "Jest"],
      },
    ],
    projectSection: {
      eyebrow: "Projects",
      title: "Featured Projects",
      description: "Selected work showing end-to-end ownership from architecture to delivery.",
      codeButton: "Code",
      demoButton: "Demo",
    },
    projects: [
      {
        ...shared.projects[0],
        description:
          "Converts single-camera TV footage into player/ball trajectories and football insights like distance, speed zones, and heatmaps.",
      },
      {
        ...shared.projects[1],
        description:
          "MVP for automated invoice ingestion with deterministic parsing, OCR fallback, and UI-based review workflows.",
      },
      {
        ...shared.projects[2],
        description:
          "Full-stack client portal for agencies and service businesses with role-based operations in a polished SaaS-style interface.",
      },
    ],
    contactSection: {
      eyebrow: "Contact",
      title: "Let's Work Together",
      description: "Tell me about your goals and timeline. I'll get back to you soon.",
      formAria: "Contact form",
      formTitle: "Send a Message",
      nameLabel: "Your name",
      emailLabel: "Your email",
      subjectLabel: "Subject",
      messageLabel: "Your message",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      subjectPlaceholder: "Subject",
      messagePlaceholder: "Your Message",
      submitLabel: "Send Message",
      submitLoadingLabel: "Sending...",
      successMessage: "Thanks! Your message was sent successfully.",
      errorMessage: "Something went wrong while sending. Please try again.",
      validationMessage: "Please check your input and try again.",
      rateLimitMessage: "Too many requests in a short time. Please try again in a few minutes.",
    },
    contactDetails: [
      { label: "Email", ...shared.contactDetails[0] },
      { label: "Phone", ...shared.contactDetails[1] },
      { label: "Location", ...shared.contactDetails[2] },
    ],
    footer: {
      rights: "All rights reserved.",
    },
    languageSwitcher: {
      label: "Switch language",
      german: "German",
      english: "English",
    },
    themeSwitcher: {
      toLight: "Switch to light mode",
      toDark: "Switch to dark mode",
    },
    accessibility: {
      skipToContent: "Skip to main content",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      navPrimary: "Primary navigation",
      navMobile: "Mobile navigation",
    },
  },
};

export function getPortfolioContent(locale: Locale): PortfolioContent {
  return contentByLocale[locale];
}
