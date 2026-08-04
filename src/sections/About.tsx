import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { content } from '../data/content'

/**
 * About — background, current focus, portrait, and language proficiency.
 * All facts sourced from `content.internship` + `content.profile`.
 */
export function About() {
  const { internship, profile } = content

  // Derived presentational helper: lowercase the headline's first word so the
  // sentence reads "I am currently seeking a final-year engineering internship
  // for {duration}." without duplicating "seeking".
  const headline =
    internship.headline.charAt(0).toLowerCase() + internship.headline.slice(1)

  return (
    <section id="about" className="bg-bg py-20 sm:py-24" aria-label="About">
      <Container size="md">
        <Reveal>
          <SectionLabel className="mb-3">02 // about</SectionLabel>
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            About
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem]">
          {/* Body */}
          <Reveal delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-ink-dim">
              <p>
                I am a software engineering student at the{' '}
                <span className="text-ink">National Engineering School of Tunis (ENIT)</span>,
                focused on backend and distributed-systems engineering — database design,
                microservices, and event-driven architectures. My work centers on building
                reliable systems: multi-tenant data isolation, CQRS pipelines, and
                cloud-native deployment.
              </p>
              <p>
                I am currently <span className="text-ink">{headline}</span> for{' '}
                {internship.duration}. I am open to roles in{' '}
                {internship.areas.map((area, i) => (
                  <span key={area}>
                    {i > 0 && <span className="text-ink-mute"> / </span>}
                    <span className="text-ink">{area}</span>
                  </span>
                ))}
                {' '}engineering, and I am comfortable shipping across the full stack when the
                team needs it.
              </p>
              <p>
                Reach me at{' '}
                <a
                  href={`mailto:${profile.email}`}
                  className="font-mono text-sm text-ink-dim underline decoration-accent/60 decoration-2 underline-offset-4 transition-colors hover:text-accent"
                >
                  {profile.email}
                </a>
                .
              </p>
            </div>
          </Reveal>

          {/* Portrait + languages */}
          <Reveal delay={0.2}>
            <aside aria-label="Portrait and languages" className="space-y-8">
              <figure>
                <div className="rounded-md border border-border bg-surface p-2">
                  <img
                    src="/oussema_image.jpeg"
                    alt="Portrait of Oussema Ben Ameur"
                    loading="lazy"
                    className="aspect-square w-full rounded-sm object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-mono text-xs text-ink-mute">
                  <span className="text-accent">~/</span>me
                </figcaption>
              </figure>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.28em] text-ink-mute">
                  Languages
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {internship.languages.map(({ name, level }) => (
                    <li
                      key={name}
                      className="inline-flex items-center gap-2 rounded border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-ink-dim"
                    >
                      <span className="text-ink">{name}</span>
                      <span className="text-ink-mute">{level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}