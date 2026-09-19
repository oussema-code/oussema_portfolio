import { content } from '../data/content'

/**
 * Editorial footer - bold top rule, mono credit, links, EOF flourish.
 */
export function Footer() {
  const { email, githubUrl, linkedinUrl } = content.contact
  const year = new Date().getFullYear()

  return (
    <footer className="border-t-2 border-ink bg-bg py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center sm:px-8">
        <p className="font-mono text-xs text-ink-mute sm:text-sm">
          © {year} <span className="font-bold text-ink">Oussema Ben Ameur</span>
        </p>

        <ul className="flex items-center gap-6">
          <li>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-semibold text-ink-dim hover:text-accent sm:text-sm"
            >
              github ↗
            </a>
          </li>
          <li>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-semibold text-ink-dim hover:text-accent sm:text-sm"
            >
              linkedin ↗
            </a>
          </li>
          <li>
            <a
              href={`mailto:${email}`}
              className="font-mono text-xs font-semibold text-ink-dim hover:text-accent sm:text-sm"
            >
              email
            </a>
          </li>
        </ul>

        <p className="hidden font-mono text-xs text-ink-mute lg:block" aria-hidden="true">
          <span className="text-accent">/</span>oussema <span className="font-bold text-ink">EOF</span>
        </p>
      </div>
    </footer>
  )
}