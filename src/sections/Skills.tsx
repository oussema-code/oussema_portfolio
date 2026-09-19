import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { cn } from '../lib/cn'
import { content } from '../data/content'

/**
 * Skills - capability groups as ruled logbook rows: bold group title
 * on the left, mono tags on the right. "DevOps & Cloud" is the
 * highlighted row; "Training in Progress" carries a live dot.
 */
export function Skills() {
  const { skills } = content

  return (
    <section id="skills" aria-label="Skills" className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <Reveal>
          <SectionLabel className="mb-3">04 // skills</SectionLabel>
          <h2 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">
            Skills
          </h2>
        </Reveal>

        <dl className="mt-10 divide-y divide-border border-y-2 border-ink">
          {skills.map((group, i) => {
            const isPrimary = group.id === 'devops-cloud'
            const isLearning = group.id === 'learning'
            return (
              <Reveal key={group.id} delay={0.05 * i}>
                <div
                  className={cn(
                    'grid gap-3 py-5 sm:grid-cols-[14rem_minmax(0,1fr)] sm:gap-8',
                    isPrimary && 'bg-accent-dim',
                  )}
                >
                  <dt className="flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className={cn('h-2.5 w-2.5', isPrimary ? 'bg-accent' : 'bg-ink')}
                    />
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-ink">
                      {group.title}
                    </span>
                    {isLearning && (
                      <span className="dot-pulse inline-block h-2 w-2 rounded-full bg-accent" />
                    )}
                  </dt>
                  <dd>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className={cn(
                            'border px-2.5 py-1 font-mono text-xs',
                            isPrimary
                              ? 'border-accent-line bg-surface text-ink'
                              : 'border-border bg-surface text-ink-dim',
                          )}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </Reveal>
            )
          })}
        </dl>
      </div>
    </section>
  )
}