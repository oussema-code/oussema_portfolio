import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { cn } from '../lib/cn'
import { content } from '../data/content'
import type { TimelineEntry } from '../data/types'

/**
 * Timeline - entries on a bold ruled rail with square markers,
 * like entries in a printed logbook.
 */
export function Timeline() {
  const { timeline } = content

  return (
    <section
      id="education"
      aria-label="Education and timeline"
      className="border-b border-border py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <Reveal>
          <SectionLabel className="mb-3">05 // education</SectionLabel>
          <h2 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">
            Education
          </h2>
        </Reveal>

        <ol className="mt-10 space-y-10 border-l-2 border-ink pl-6 sm:pl-8">
          {timeline.map((entry, i) => (
            <TimelineItem key={entry.id} entry={entry} index={i} />
          ))}
        </ol>
      </div>
    </section>
  )
}

type TimelineItemProps = {
  entry: TimelineEntry
  index: number
}

function TimelineItem({ entry, index }: TimelineItemProps) {
  const isActivity = entry.kind === 'activity'
  const locationLine = entry.location ? `${entry.org} - ${entry.location}` : entry.org

  return (
    <Reveal delay={0.05 * index}>
      <li className="relative">
        {/* Square marker on the rail */}
        <span
          aria-hidden="true"
          className={cn(
            'absolute -left-[27px] top-1 h-3 w-3 sm:-left-[35px]',
            isActivity ? 'border-2 border-accent bg-bg' : 'bg-accent',
          )}
        />

        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <time className="font-mono text-xs font-semibold text-ink-mute">
            {entry.period}
          </time>
          <span
            className={cn(
              'font-mono text-[0.65rem] font-bold uppercase tracking-[0.22em]',
              isActivity ? 'text-accent' : 'text-ink-mute',
            )}
          >
            {isActivity ? 'Experience' : 'Education'}
          </span>
        </div>

        <h3 className="mt-2 text-xl font-bold text-ink">{entry.title}</h3>

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