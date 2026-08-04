import { Container } from './Container'
import { content } from '../data/content'

/**
 * Minimal technical footer — mono credit line, external links sourced from
 * `content.contact`, and a terminal EOF flourish.
 */
export function Footer() {
  const { email, githubUrl, linkedinUrl } = content.contact
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-bg py-10">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-ink-mute sm:text-sm">
          © {year} <span className="text-ink">Oussema Ben Ameur</span>
        </p>

        <ul className="flex items-center gap-6">
          <li>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-ink-dim transition-colors hover:text-accent sm:text-sm"
            >
              github ↗
            </a>
          </li>
          <li>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-ink-dim transition-colors hover:text-accent sm:text-sm"
            >
              linkedin ↗
            </a>
          </li>
          <li>
            <a
              href={`mailto:${email}`}
              className="font-mono text-xs text-ink-dim transition-colors hover:text-accent sm:text-sm"
            >
              email
            </a>
          </li>
        </ul>

        <p className="hidden font-mono text-xs text-ink-mute lg:block" aria-hidden="true">
          ~/oussema <span className="text-accent">EOF</span>
        </p>
      </Container>
    </footer>
  )
}