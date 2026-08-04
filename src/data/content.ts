import type { SiteContent } from './types'

/**
 * Resume-derived content for the portfolio.
 *
 * Single source of truth: `oussema_cv_pfe.tex`. All facts, metrics, and
 * phrasing mirror the LaTeX resume exactly. Components must only import
 * from this module and never embed resume facts in markup.
 */
export const content: SiteContent = {
  profile: {
    name: 'Oussema Ben Ameur',
    tagline: 'Software Engineering Student | Backend, Databases & Distributed Systems',
    pitch:
      'Final-year software engineering student seeking a PFE internship in backend, distributed systems, and full-stack engineering, available for 4-6 months starting February 2027.',
    location: 'Tunis, Tunisia',
    email: 'oussema.benameur@etudiant-enit.utm.tn',
    phone: '+216 25 343 912',
    githubUrl: 'https://github.com/oussema-code',
    linkedinUrl: 'https://www.linkedin.com/in/oussema-benameur-07151b246/',
    cvPath: '/cv.pdf',
  },

  internship: {
    headline: 'Seeking a final-year engineering internship',
    duration: '4-6 months, starting February 2027',
    areas: ['Backend', 'Distributed Systems', 'Full-Stack'],
    languages: [
      { name: 'French', level: 'C1' },
      { name: 'English', level: 'B2' },
      { name: 'Arabic', level: 'Native' },
    ],
  },

  projects: [
    {
      id: 'multi-tenant-erp',
      title: 'Multi-Tenant ERP SaaS Platform',
      period: '2026',
      role: 'Architecture & Backend Lead',
      context:
        'Engineered a cloud ERP platform following Clean Architecture, covering core business modules including Ledger, Inventory, Sales, and Payroll.',
      hook: 'Clean Architecture cloud ERP with multi-tenant data isolation, CQRS, and event-driven accounting workflows.',
      highlights: [
        'Engineered PostgreSQL Row-Level Security (RLS) for multi-tenant data isolation on 39 tables, using a dual-role strategy and explicit EF Core transactions to guarantee correctness under connection pooling.',
        'Built a CQRS pipeline with MediatR (157 commands/queries) and a domain event bus (42 events, 17 handlers) enabling automated GL journal postings and complex business workflows.',
        'Implemented FIFO and Weighted Average inventory costing with cost layer tracking, stock reservation workflows, and backorder auto-fulfillment logic.',
        'Designed security layers including Firebase JWT authentication with custom claims, Role-Based Access Control (RBAC), and in-memory token storage to mitigate XSS vulnerabilities.',
      ],
      stack: ['ASP.NET Core (.NET 10)', 'React 18', 'TypeScript', 'PostgreSQL'],
      githubUrl: 'https://github.com/oussema-code',
    },
    {
      id: 'satellite-imagery-platform',
      title: 'Collaborative Satellite Imagery & Urban Monitoring Platform',
      period: '10/2025 — 05/2026',
      role: 'End-of-Year Engineering Project — ENIT',
      context:
        'Built a full-stack collaborative web platform extending a legacy codebase into a production-grade microservices system.',
      hook: 'Production-grade microservices platform for collaborative satellite imagery and urban monitoring.',
      highlights: [
        'Architected a microservices environment with 4 independent Docker services, orchestrated seamlessly via Docker Compose.',
        'Redesigned the authentication layer using a dual-token JWT strategy (short-lived access token plus HTTP-only refresh cookie with SameSite policy), resolving critical legacy security vulnerabilities.',
        'Engineered a CI/CD pipeline via GitHub Actions to automate builds, publish Docker images to GHCR, and deploy to Azure Container Apps.',
        'Integrated real-time collaboration using STOMP over WebSockets for live messaging across project workspaces.',
      ],
      stack: ['Spring Boot', 'Next.js', 'Docker', 'GitHub Actions', 'Azure Container Apps'],
      githubUrl: 'https://github.com/oussema-code',
    },
  ],

  skills: [
    {
      id: 'backend',
      title: 'Backend',
      items: ['C#', 'ASP.NET Core (.NET 10)', 'Java', 'Spring Boot', 'Python', 'Node.js', 'Express.js'],
    },
    {
      id: 'data-distributed-systems',
      title: 'Data & Distributed Systems',
      items: [
        'PostgreSQL (RLS)',
        'MongoDB',
        'Redis',
        'Entity Framework Core',
        'Event-Driven Integration',
        'Microservices',
      ],
    },
    {
      id: 'architecture',
      title: 'Architecture',
      items: ['Clean Architecture', 'CQRS', 'Domain-Driven Design (DDD)'],
    },
    {
      id: 'frontend',
      title: 'Frontend',
      items: [
        'React 18',
        'Next.js 14',
        'TypeScript',
        'JavaScript',
        'Vite',
        'Fluent UI',
        'Tailwind CSS',
        'TanStack Query',
      ],
    },
    {
      id: 'auth',
      title: 'Auth',
      items: ['Firebase Auth', 'JWT', 'RBAC'],
    },
    {
      id: 'devops-cloud',
      title: 'DevOps & Cloud',
      items: ['Docker', 'GitHub Actions (CI/CD)', 'Azure Container Apps', 'SignalR (WebSockets)', 'Quartz.NET'],
    },
    {
      id: 'testing',
      title: 'Testing',
      items: ['xUnit', 'FluentAssertions', 'JUnit', 'Mockito', 'k6 (load testing)'],
    },
  ],

  timeline: [
    {
      id: 'enit',
      kind: 'education',
      title: 'National Engineering School of Tunis (ENIT)',
      org: 'ENIT',
      location: 'Tunis, Tunisia',
      period: '09/2024 — Present',
      description: 'National Diploma in Computer Engineering (Software Engineering) — 2nd Year',
      detail:
        'Relevant coursework: Software Architecture, Algorithms & Data Structures, Databases, Distributed Systems, Networks, Operating Systems',
    },
    {
      id: 'ipeis',
      kind: 'education',
      title: 'Preparatory Institute for Engineering Studies of Sfax (IPEIS)',
      org: 'IPEIS',
      location: 'Sfax, Tunisia',
      period: '09/2022 — 06/2024',
      description: 'Scientific Preparatory Classes — PT Track (Physics & Technology)',
    },
    {
      id: 'securinets',
      kind: 'activity',
      title: 'Securinets ENIT — Cybersecurity Club',
      org: 'Securinets ENIT',
      period: '03/2025 — Present',
      description:
        'Member; CTF challenges and security workshops covering network security, ethical hacking, and vulnerability analysis.',
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