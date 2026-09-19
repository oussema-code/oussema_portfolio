import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { content } from '../data/content'
import type { Project } from '../data/types'

/**
 * Pipeline stages rendered as a mono stamp strip - presentational only.
 */
const PIPELINE: Record<string, string[]> = {
 'satellite-imagery-platform': ['build', 'ghcr', 'deploy', 'azure'],
 'multi-tenant-erp': ['api', 'cqrs', 'domain', 'db · rls'],
 'procurement-app': ['ui', 'api', 'db'],
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
 const kicker = String(index + 1).padStart(2, '0')
 const stages = PIPELINE[project.id] ?? ['api', 'services', 'db']

 return (
 <Reveal delay={0.05 * index}>
 <article className="card-ticket rounded-none p-6 sm:p-8">
 {/* Header */}
 <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
 <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">
 issue #{kicker}
 </p>
 <p className="font-mono text-xs text-ink-mute">{project.period}</p>
 </div>

 <h3 className="mt-4 text-2xl font-black tracking-tight text-ink sm:text-3xl">
 {project.title}
 </h3>
 <p className="mt-1.5 font-mono text-sm font-semibold text-ink-dim">
 {project.role}
 </p>

 {/* Hook + context */}
 <p className="mt-5 text-lg font-medium leading-relaxed text-ink">
 {project.hook}
 </p>
 <p className="mt-3 text-base leading-relaxed text-ink-dim">
 {project.context}
 </p>

 {/* Highlights */}
 <ul className="mt-6 space-y-3">
 {project.highlights.map((highlight) => (
 <li
 key={highlight}
 className="flex gap-3 border-b border-border pb-3 text-sm leading-relaxed text-ink-dim last:border-b-0 last:pb-0"
 >
 <span className="font-mono font-bold text-accent" aria-hidden="true">
 +
 </span>
 <span>{highlight}</span>
 </li>
 ))}
 </ul>

 {/* Pipeline strip */}
 <div
 aria-hidden="true"
 className="mt-6 border-t-2 border-dashed border-border-strong pt-5"
 >
 <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.25em] text-ink-mute">
 pipeline
 </p>
 <div className="mt-2.5 flex flex-wrap items-center gap-2">
 {stages.map((stage, i) => (
 <span key={stage} className="flex items-center gap-2">
 {i > 0 && (
 <span className="font-mono text-xs text-accent" aria-hidden="true">
 →
 </span>
 )}
 <span className="border-2 border-ink bg-surface px-2.5 py-1 font-mono text-xs font-semibold uppercase text-ink">
 {stage}
 </span>
 </span>
 ))}
 </div>
 </div>

 {/* Stack + link */}
 <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
 <ul className="flex flex-wrap gap-2">
 {project.stack.map((tech) => (
 <li
 key={tech}
 className="bg-surface-2 px-2.5 py-1 font-mono text-xs text-ink-dim"
 >
 {tech}
 </li>
 ))}
 </ul>
 <a
 href={project.githubUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="font-mono text-sm font-semibold text-ink-dim underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
 >
 source ↗
 </a>
 </div>
 </article>
 </Reveal>
 )
}

/**
 * Projects - ticket-style issue cards with pipeline strips.
 */
export function Projects() {
 return (
 <section
 id="projects"
 className="border-b border-border py-20 sm:py-24"
 aria-label="Projects"
 >
 <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
 <Reveal>
 <SectionLabel className="mb-3">03 // projects</SectionLabel>
 <h2 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">
 Projects
 </h2>
 </Reveal>

 <div className="mt-10 grid gap-8">
 {content.projects.map((project, index) => (
 <ProjectCard key={project.id} project={project} index={index} />
 ))}
 </div>
 </div>
 </section>
 )
}