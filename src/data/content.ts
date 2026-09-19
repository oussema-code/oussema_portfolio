import type { SiteContent } from './types'

/**
 * Resume-derived content for the portfolio.
 *
 * Single source of truth: `oussema_cv_devops_master.tex`. All facts, metrics,
 * and phrasing mirror the DevOps/Cloud resume exactly. Components must only
 * import from this module and never embed resume facts in markup.
 */
export const content: SiteContent = {
  profile: {
    name: 'Oussema Ben Ameur',
    tagline: 'DevOps / Cloud Engineering Student | Docker, CI/CD, Azure',
    pitch:
      'Final-year computer engineering student seeking a paid 4-6 month DevOps, Cloud, Platform, or SRE internship from February 2027. Hands-on experience containerizing multi-service systems and automating image delivery to Azure Container Apps. Open to relocation across Europe and North America.',
    location: 'Tunis, Tunisia',
    email: 'oussema.benameur@etudiant-enit.utm.tn',
    phone: '+216 25 343 912',
    githubUrl: 'https://github.com/oussema-code',
    linkedinUrl: 'https://www.linkedin.com/in/oussema-benameur-07151b246/',
    cvPath: '/cv.pdf',
  },

  internship: {
    headline: 'Seeking a DevOps / Cloud / Platform / SRE internship',
    duration: '4-6 months, starting February 2027',
    areas: ['DevOps', 'Cloud', 'Platform', 'SRE'],
    languages: [
      { name: 'French', level: 'C1' },
      { name: 'English', level: 'B2' },
      { name: 'Arabic', level: 'Native' },
    ],
  },

  projects: [
    {
      id: 'satellite-imagery-platform',
      title: 'Collaborative Satellite Imagery & Urban Monitoring Platform',
      period: '11/2025 - 04/2026',
      role: 'Two-person ENIT project - Infrastructure & Delivery Lead',
      context:
        'Four application services (Spring Boot, Next.js, Flask, FastAPI) with a fully containerized integration stack deployed to Azure.',
      hook:
        'From local Docker Compose to Azure Container Apps - an automated build, publish, and deploy pipeline for a four-service platform.',
      highlights: [
        'Co-developed four application services and orchestrated a local integration stack with Docker Compose, MongoDB, Redis, RabbitMQ, Prometheus, and Grafana.',
        'Built a GitHub Actions matrix pipeline that compiled the backend, built four Docker images, published them to GHCR, resolved immutable image digests, and deployed revisions to Azure Container Apps.',
        'Validated the backend with 181 passing JUnit/Mockito tests and k6 load tests totaling 2,700 checks across 15 virtual users.',
        'Integrated JWT authentication and STOMP/WebSocket messaging for real-time project collaboration.',
      ],
      stack: ['Spring Boot', 'Next.js', 'Flask', 'FastAPI', 'Docker', 'Docker Compose', 'GitHub Actions', 'GHCR', 'Azure Container Apps', 'Prometheus', 'Grafana', 'RabbitMQ', 'MongoDB', 'Redis'],
      githubUrl: 'https://github.com/oussema-code',
    },
    {
      id: 'multi-tenant-erp',
      title: 'Multi-Tenant ERP SaaS - Trace & Ace Internship',
      period: 'Summer 2026 | 2 months',
      role: 'Software Engineering Intern - Backend & Data',
      context:
        'Company-owned multi-tenant ERP SaaS covering ledger, inventory, sales, and payroll workflows.',
      hook:
        'Production features and hardened multi-tenant data isolation for a live ERP SaaS.',
      highlights: [
        'Developed production features for a company-owned ERP covering ledger, inventory, sales, and payroll workflows.',
        'Implemented PostgreSQL Row-Level Security across 39 tables using dual database roles and explicit EF Core transactions to preserve tenant isolation with connection pooling.',
        'Built parts of a CQRS and domain-event architecture spanning 157 commands/queries, 42 events, and 17 handlers for accounting and operational workflows.',
        'Implemented FIFO and weighted-average costing, stock reservations, and backorder fulfillment logic.',
      ],
      stack: ['ASP.NET Core', 'React', 'TypeScript', 'PostgreSQL', 'CQRS', 'EF Core'],
      githubUrl: 'https://github.com/oussema-code',
    },
    {
      id: 'procurement-app',
      title: 'Procurement Workflow Application - IPS Group Internship',
      period: 'Summer 2025 | 1 month',
      role: 'Software Engineering Intern - Full-Stack',
      context:
        'Three-tier web application that digitized a paper-based procurement process.',
      hook:
        'Centralized purchase requests, suppliers, quotations, and purchase orders into one role-based application.',
      highlights: [
        'Developed a three-tier web application that centralized purchase requests, suppliers, quotations, and purchase orders previously handled through paper forms and spreadsheets.',
        'Built role-based user and administrator dashboards, REST endpoints, supplier quotation comparison, and email notifications.',
        'Designed the relational data model for users, suppliers, requests, articles, quotations, and purchase orders.',
      ],
      stack: ['React', 'Node.js', 'Express.js', 'SQLite'],
      githubUrl: 'https://github.com/oussema-code',
    },
  ],

  skills: [
    {
      id: 'devops-cloud',
      title: 'DevOps & Cloud',
      items: ['Docker', 'Docker Compose', 'GitHub Actions', 'GHCR', 'Azure Container Apps', 'Prometheus', 'Grafana', 'k6'],
    },
    {
      id: 'learning',
      title: 'Training in Progress',
      items: ['Kubernetes', 'Terraform', 'Ansible', 'Observability'],
    },
    {
      id: 'networking',
      title: 'Networking & Systems',
      items: ['TCP/IP', 'Routing', 'Switching', 'Network Troubleshooting', 'CCNA: Intro to Networks'],
    },
    {
      id: 'development',
      title: 'Development',
      items: ['C#', 'ASP.NET Core', 'Java', 'Spring Boot', 'Python', 'Node.js', 'Express.js', 'REST APIs', 'Git'],
    },
    {
      id: 'data-architecture',
      title: 'Data & Architecture',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ', 'SQLite', 'Microservices', 'CQRS', 'DDD'],
    },
    {
      id: 'testing',
      title: 'Testing',
      items: ['JUnit', 'Mockito', 'k6 load testing'],
    },
  ],

  timeline: [
    {
      id: 'trace-ace',
      kind: 'activity',
      title: 'Software Engineering Intern - Trace & Ace',
      org: 'Trace & Ace',
      location: 'Multi-tenant ERP SaaS',
      period: 'Summer 2026 | 2 months',
      description: 'RLS across 39 tables, CQRS pipeline (157 commands/queries), FIFO & weighted-average costing.',
    },
    {
      id: 'ips-group',
      kind: 'activity',
      title: 'Software Engineering Intern - IPS Group',
      org: 'IPS Group',
      location: 'Procurement workflow application',
      period: 'Summer 2025 | 1 month',
      description: 'Three-tier React / Node.js / SQLite app replacing paper forms and spreadsheets.',
    },
    {
      id: 'enit',
      kind: 'education',
      title: 'National Engineering School of Tunis (ENIT)',
      org: 'ENIT',
      location: 'Tunis, Tunisia',
      period: '09/2024 - Present',
      description: 'National Diploma in Computer Engineering, Software Engineering track - Final year',
      detail:
        'Coursework: Distributed Systems, Computer Networks, Operating Systems, Databases, Software Architecture',
    },
    {
      id: 'ipeis',
      kind: 'education',
      title: 'Preparatory Institute for Engineering Studies of Sfax (IPEIS)',
      org: 'IPEIS',
      location: 'Sfax, Tunisia',
      period: '09/2022 - 06/2024',
      description: 'Scientific Preparatory Classes - Physics and Technology track',
    },
    {
      id: 'certifications',
      kind: 'activity',
      title: 'Certifications & Activities',
      org: 'Cisco · ETS · Securinets',
      period: 'Ongoing',
      description:
        'Cisco CCNA: Introduction to Networks · TOEIC (CEFR B2) · Securinets ENIT cybersecurity club member',
    },
  ],

  contact: {
    email: 'oussema.benameur@etudiant-enit.utm.tn',
    githubUrl: 'https://github.com/oussema-code',
    linkedinUrl: 'https://www.linkedin.com/in/oussema-benameur-07151b246/',
    phone: '+216 25 343 912',
    location: 'Tunis, Tunisia',
    formEndpoint: 'https://formspree.io/f/mppaajzy',
  },
}