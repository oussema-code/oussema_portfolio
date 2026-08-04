import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { cn } from '../lib/cn'
import { content } from '../data/content'
import type { TimelineEntry } from '../data/types'

/**
 * Timeline — education and activity entries on a vertical line.
 * Education entries get a filled accent dot; the activity entry
 * (Securinets) gets an accent-tinted dot to stay distinct but on-system.
 */
export function Timeline() {
  const { timeline } = content

  return (
    <section
      id="education"
      aria-label="Education and timeline"
      className="bg-bg py-20 sm:py-24"
    >
      <Container size="md">
        <Reveal>
          <SectionLabel className="mb-3">05 // education</SectionLabel>
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Education
          </h2>
        </Reveal>

        <ol className="mt-10 space-y-10 border-l border-border pl-6 sm:pl-8">
          {timeline.map((entry, i) => (
            <TimelineItem key={entry.id} entry={entry} index={i} />
          ))}
        </ol>
      </Container>
    </section>
  )
}

type TimelineItemProps = {
  entry: TimelineEntry
  index: number
}

function TimelineItem({ entry, index }: TimelineItemProps) {
  const isActivity = entry.kind === 'activity'
  const locationLine = entry.location ? `${entry.org} — ${entry.location}` : entry.org

  return (
    <Reveal delay={0.05 * index}>
      <li className="relative">
        {/* Dot on the timeline rail */}
        <span
          aria-hidden="true"
          className={cn(
            'absolute -left-6 top-1.5 h-2.5 w-2.5 rounded-full sm:-left-8',
            isActivity
              ? 'border border-accent-line bg-accent-dim'
              : 'bg-accent',
          )}
        />

        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <time className="font-mono text-xs text-ink-mute">{entry.period}</time>
          <span
            className={cn(
              'font-mono text-[0.6875rem] uppercase tracking-[0.22em]',
              isActivity ? 'text-accent' : 'text-ink-mute',
            )}
          >
            {isActivity ? 'Activity' : 'Education'}
          </span>
        </div>

        <h3 className="mt-2 font-semibold text-ink">{entry.title}</h3>

        <p className="mt-1 text-sm text-ink-dim">
          {locationLine}
          {entry.description ? (
            <>
              {' · '}
              {entry.description}
            </>
          ) : null}
        </p>

        {entry.detail ? (
          <p className="mt-2 font-mono text-xs leading-relaxed text-ink-mute">
            {entry.detail}
          </p>
        ) : null}
      </li>
    </Reveal>
  )
}