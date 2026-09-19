import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { content } from '../data/content'

/**
 * About - editorial two-column: narrative left, portrait + languages
 * right on a ticket card.
 */
export function About() {
  const { internship, profile } = content

  const headline =
    internship.headline.charAt(0).toLowerCase() + internship.headline.slice(1)

  return (
    <section id="about" className="border-b border-border py-20 sm:py-24" aria-label="About">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <Reveal>
          <SectionLabel className="mb-3">02 // about</SectionLabel>
          <h2 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">
            About
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem]">
          <Reveal delay={0.1}>
            <div className="space-y-5 text-lg leading-relaxed text-ink-dim">
              <p>
                I am a final-year computer engineering student at the{' '}
                <span className="font-semibold text-ink">
                  National Engineering School of Tunis (ENIT)
                </span>
                , focused on DevOps and cloud engineering - containerizing
                multi-service systems, automating build and delivery pipelines,
                and observing what ships. My hands-on work spans Docker, GitHub
                Actions, GHCR, Azure Container Apps, Prometheus, and Grafana; I
                am currently deepening Kubernetes, Terraform, and Ansible.
              </p>
              <p>
                I am currently <span className="font-semibold text-ink">{headline}</span> for{' '}
                {internship.duration}, and open to relocation across Europe and
                North America. I bring a developer's background too - C#,
                Spring Boot, and Node.js - so I understand the applications I
                deploy, not just the pipelines that ship them.
              </p>
              <p>
                Reach me at{' '}
                <a
                  href={`mailto:${profile.email}`}
                  className="font-mono text-base text-ink-dim underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
                >
                  {profile.email}
                </a>
                .
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <aside aria-label="Portrait and languages" className="space-y-8">
              <figure>
                <div className="card-ticket rounded-none p-2">
                  <img
                    src="/oussema_image.jpeg"
                    alt="Portrait of Oussema Ben Ameur"
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-mono text-xs text-ink-mute">
                  <span className="text-accent">/</span>me
                </figcaption>
              </figure>

              <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-ink-mute">
                  Languages
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {internship.languages.map(({ name, level }) => (
                    <li
                      key={name}
                      className="inline-flex items-center gap-2 border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-ink-dim"
                    >
                      <span className="font-semibold text-ink">{name}</span>
                      <span className="text-ink-mute">{level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}