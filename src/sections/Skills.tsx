import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { content } from '../data/content'

/**
 * Skills — seven capability groups rendered as mono chips.
 * Group and item order mirror `content.skills` exactly.
 */
export function Skills() {
  const { skills } = content

  return (
    <section id="skills" aria-label="Skills" className="bg-bg py-20 sm:py-24">
      <Container size="md">
        <Reveal>
          <SectionLabel className="mb-3">04 // skills</SectionLabel>
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Skills
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.id} delay={0.05 * i}>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded border border-border bg-surface-2 px-2.5 py-1 text-xs text-ink-dim"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}