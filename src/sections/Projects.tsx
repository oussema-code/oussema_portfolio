import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { content } from '../data/content'
import type { Project } from '../data/types'

/**
 * Architecture layers rendered as a restrained, pure-HTML/CSS diagram.
 * These are generic engineering layer labels (design flourish), not resume
 * facts — all resume content still comes from `content.ts`.
 */
const ARCHITECTURE: Record<string, string[]> = {
  'multi-tenant-erp': ['API', 'CQRS', 'Domain', 'DB · RLS'],
  'satellite-imagery-platform': ['Gateway', 'Services', 'Events', 'DB'],
}

function ArchitectureDiagram({ project }: { project: Project }) {
  const layers = ARCHITECTURE[project.id] ?? ['API', 'Services', 'DB']

  return (
    <div
      aria-hidden="true"
      className="rounded-lg border border-border bg-surface p-4"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink-mute">
        architecture
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {layers.map((layer, i) => (
          <span key={layer} className="flex items-center gap-2">
            {i > 0 && (
              <span className="font-mono text-xs text-accent" aria-hidden="true">
                →
              </span>
            )}
            <span className="rounded border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-ink-dim">
              {layer}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const kicker = String(index + 1).padStart(2, '0')

  return (
    <Reveal delay={index * 0.1}>
      <article className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        {/* Header */}
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <p className="font-mono text-xs text-accent">~/projects/{kicker}</p>
          <p className="font-mono text-xs text-ink-mute">{project.period}</p>
        </div>

        <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-1 font-mono text-sm text-accent">{project.role}</p>

        {/* Hook + context */}
        <p className="mt-5 text-base leading-relaxed text-ink-dim">
          {project.hook}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-mute">
          {project.context}
        </p>

        {/* Highlights */}
        <ul className="mt-6 space-y-3">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 text-sm leading-relaxed text-ink-dim"
            >
              <span className="font-mono text-accent" aria-hidden="true">
                ▸
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Architecture diagram */}
        <div className="mt-6">
          <ArchitectureDiagram project={project} />
        </div>

        {/* Stack + link */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-ink-dim"
              >
                {tech}
              </li>
            ))}
          </ul>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-ink-dim underline decoration-accent/60 decoration-2 underline-offset-4 transition-colors hover:text-accent"
          >
            source ↗
          </a>
        </div>
      </article>
    </Reveal>
  )
}

/**
 * Projects — backend-heavy feature cards with a restrained architecture
 * diagram flourish. All facts sourced from `content.projects`.
 */
export function Projects() {
  return (
    <section id="projects" className="bg-bg py-20 sm:py-24" aria-label="Projects">
      <Container size="md">
        <Reveal>
          <SectionLabel className="mb-3">03 // projects</SectionLabel>
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Projects
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8">
          {content.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}