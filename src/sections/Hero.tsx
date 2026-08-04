import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { content } from '../data/content'

/**
 * Month → short form for the terminal `current.md` line.
 * Presentational derivation: keeps the line compact without inventing facts.
 */
const MONTHS: Record<string, string> = {
  january: 'jan',
  february: 'feb',
  march: 'mar',
  april: 'apr',
  may: 'may',
  june: 'jun',
  july: 'jul',
  august: 'aug',
  september: 'sep',
  october: 'oct',
  november: 'nov',
  december: 'dec',
}

const MONTH_RE = new RegExp(`\\b(${Object.keys(MONTHS).join('|')})\\b`)

type TerminalCardProps = {
  /** whoami output line, e.g. `oussema — backend & distributed systems`. */
  whoami: string
  /** current.md output line, e.g. `seeking internship · feb 2027`. */
  current: string
  /** `ls ./stack/` output items. */
  stack: string[]
}

/**
 * Presentational terminal-window card for the hero's right gutter.
 * All lines are derived from `content` — no facts are invented here.
 * Renders as a fake window with a 3-dot header and mono body lines.
 */
function TerminalCard({ whoami, current, stack }: TerminalCardProps) {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-lg border border-border bg-surface shadow-[0_24px_60px_-32px_rgba(0,0,0,0.9)]"
    >
      {/* Window header */}
      <div className="flex items-center gap-1.5 border-b border-border px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-mute/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-mute/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-mute/25" />
        <span className="ml-2 font-mono text-[0.6875rem] text-ink-mute">
          ~/about.md
        </span>
      </div>

      {/* Body */}
      <div className="space-y-2.5 px-4 py-4 font-mono text-[0.8rem] leading-relaxed">
        <p>
          <span className="text-accent">$</span> <span className="text-ink">whoami</span>
        </p>
        <p className="text-ink-dim">{whoami}</p>

        <p className="pt-1">
          <span className="text-accent">$</span> <span className="text-ink">cat current.md</span>
        </p>
        <p className="text-ink-dim">{current}</p>

        <p className="pt-1">
          <span className="text-accent">$</span> <span className="text-ink">ls ./stack/</span>
        </p>
        <p className="flex flex-wrap gap-x-3 gap-y-1 text-ink-dim">
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>

        {/* Idle prompt with blinking cursor */}
        <p className="pt-1">
          <span className="text-accent">$</span>{' '}
          <span
            aria-hidden="true"
            className="inline-block h-3.5 w-2 translate-y-0.5 animate-pulse bg-accent/80 motion-reduce:animate-none"
          />
        </p>
      </div>
    </div>
  )
}

/**
 * Hero — near-full-viewport landing section.
 * Two-column at `lg`: text block left, terminal card right. A metrics strip
 * surfaces quantified achievements parsed from `content.projects` highlights,
 * and a mono scroll cue anchors the bottom of the viewport.
 */
export function Hero() {
  const { profile, internship, projects, skills } = content
  const { name, tagline, pitch, location, githubUrl, linkedinUrl, email, cvPath } =
    profile

  // --- Derived terminal-card lines (presentational, from real facts) ---
  const firstName = name.split(' ')[0].toLowerCase()
  const focusArea = tagline.split('|').pop()?.trim().toLowerCase() ?? ''
  const seekingShort = internship.headline
    .toLowerCase()
    .replace(/^seeking\s+a\s+/i, '')
  // "4-6 months, starting February 2027" → "feb 2027"
  const startShort =
    internship.duration
      .split(',')
      .pop()
      ?.trim()
      .replace(/^starting\s+/i, '')
      .toLowerCase()
      .replace(MONTH_RE, (month) => MONTHS[month]) ?? ''
  const byGroup = (id: string) => skills.find((g) => g.id === id)?.items ?? []
  const stack = [
    byGroup('backend')[0],
    byGroup('backend')[2],
    byGroup('backend')[4],
    byGroup('data-distributed-systems')[0],
    byGroup('devops-cloud')[0],
  ]
    .filter((item): item is string => Boolean(item))
    .map((item) => item.split(' (')[0].toLowerCase())

  // --- Metrics parsed from real project highlight strings ---
  const highlights = projects.flatMap((p) => p.highlights)
  const findMetric = (re: RegExp) => {
    for (const highlight of highlights) {
      const match = highlight.match(re)
      if (match) return match[1]
    }
    return null
  }
  const metrics = [
    { value: findMetric(/(\d+)\s+tables/), label: 'RLS tables' },
    { value: findMetric(/(\d+)\s+commands\/queries/), label: 'CQRS commands' },
    { value: findMetric(/(\d+)\s+events/), label: 'domain events' },
    { value: findMetric(/(\d+)\s+independent Docker services/), label: 'microservices' },
  ].filter((m): m is { value: string; label: string } => m.value !== null)

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center border-b border-border bg-bg"
      aria-label="Introduction"
    >
      <Container size="lg" className="py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
          {/* Left — text block */}
          <div>
            <Reveal delay={0}>
              <SectionLabel className="mb-3">01 // intro</SectionLabel>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 text-5xl font-bold tracking-tight text-ink sm:text-6xl lg:text-7xl">
                {name}
              </h1>
            </Reveal>

            {/* Tagline — mono sub-line */}
            <Reveal delay={0.1}>
              <p className="mt-4 font-mono text-sm text-accent sm:text-base">
                {tagline}
              </p>
            </Reveal>

            {/* Pitch */}
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-dim sm:text-lg">
                {pitch}
              </p>
            </Reveal>

            {/* Location */}
            <Reveal delay={0.1}>
              <p className="mt-6 flex items-center gap-2 font-mono text-sm text-ink-mute">
                <span
                  aria-hidden="true"
                  className="inline-block h-2 w-2 rounded-full bg-accent"
                />
                {location}
              </p>
            </Reveal>

            {/* Metrics strip — real numbers parsed from project highlights */}
            {metrics.length > 0 && (
              <Reveal delay={0.15}>
                <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
                  {metrics.map((metric, i) => (
                    <li key={metric.label} className="flex items-center gap-x-5">
                      {i > 0 && (
                        <span
                          aria-hidden="true"
                          className="h-3.5 w-px bg-border"
                        />
                      )}
                      <span className="font-mono text-[0.7rem] text-ink-dim">
                        <span className="text-accent">{metric.value}</span>{' '}
                        {metric.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {/* Actions — links + CV button */}
            <Reveal delay={0.2}>
              <nav
                aria-label="External profiles and CV"
                className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
              >
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-ink-dim underline decoration-accent/60 decoration-2 underline-offset-4 transition-colors hover:text-accent"
                >
                  github ↗
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-ink-dim underline decoration-accent/60 decoration-2 underline-offset-4 transition-colors hover:text-accent"
                >
                  linkedin ↗
                </a>
                <a
                  href={`mailto:${email}`}
                  className="font-mono text-sm text-ink-dim underline decoration-accent/60 decoration-2 underline-offset-4 transition-colors hover:text-accent"
                >
                  {email}
                </a>
                <a
                  href={cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center rounded-md border border-accent-line bg-transparent px-5 py-2.5 font-mono text-sm font-medium text-accent transition-colors hover:bg-accent-dim focus-visible:outline-none"
                >
                  Download CV
                </a>
              </nav>
            </Reveal>
          </div>

          {/* Right — terminal card */}
          <Reveal delay={0.25}>
            <TerminalCard
              whoami={`${firstName} — ${focusArea}`}
              current={`seeking ${seekingShort} · ${startShort}`}
              stack={stack}
            />
          </Reveal>
        </div>
      </Container>

      {/* Scroll affordance — bottom of the hero */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="group absolute inset-x-0 bottom-6 flex justify-center font-mono text-xs text-ink-mute transition-colors hover:text-accent"
      >
        <span className="flex items-center gap-2">
          scroll
          <span
            aria-hidden="true"
            className="inline-block animate-bounce motion-reduce:animate-none"
          >
            ↓
          </span>
        </span>
      </a>
    </section>
  )
}