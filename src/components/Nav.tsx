import { useEffect, useState } from 'react'
import { cn } from '../lib/cn'

/** Static in-page anchor links — mirrors the section order in App.tsx. */
const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const

/**
 * Fixed top navigation with a translucent, blurred bar.
 * Desktop: inline mono links. Mobile (< md): hamburger toggle that opens a
 * stacked overlay panel. Escape closes the panel; clicking a link closes it.
 *
 * The section currently in view is highlighted via an IntersectionObserver
 * that watches a band around the upper-middle of the viewport, so exactly one
 * link is active at a time.
 */
export function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('#home')

  // Close the mobile panel when Escape is pressed.
  useEffect(() => {
    if (!open) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  // Lock body scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Highlight the nav link of the section currently in view.
  useEffect(() => {
    const sections = LINKS.map(({ href }) =>
      document.getElementById(href.slice(1)),
    ).filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: '-35% 0px -60% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  function close() {
    setOpen(false)
  }

  return (
    <>
      {/* Skip link — first focusable element on the page. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:border focus:border-accent-line focus:bg-bg focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-accent"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-8">
          {/* Wordmark */}
          <a
            href="#home"
            onClick={close}
            className="font-mono text-sm text-ink transition-colors hover:text-accent"
            aria-label="Oussema Ben Ameur — back to top"
          >
            <span className="text-accent">~</span>oussema
            <span className="text-accent" aria-hidden="true">
              /
            </span>
          </a>

          {/* Desktop links */}
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-6">
              {LINKS.map(({ label, href }) => {
                const isActive = active === href
                return (
                  <li key={href}>
                    <a
                      href={href}
                      aria-current={isActive ? 'true' : undefined}
                      className={cn(
                        'relative font-mono text-xs transition-colors sm:text-sm',
                        isActive
                          ? 'text-accent'
                          : 'text-ink-dim hover:text-accent',
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          'absolute -left-3.5 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-accent transition-opacity',
                          isActive ? 'opacity-100' : 'opacity-0',
                        )}
                      />
                      {label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-ink-dim transition-colors hover:border-accent-line hover:text-accent focus-visible:outline-none md:hidden"
          >
            <span className="relative block h-3.5 w-5" aria-hidden="true">
              <span
                className={cn(
                  'absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-200 motion-reduce:transition-none',
                  open && 'top-1.5 rotate-45',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-opacity duration-200 motion-reduce:transition-none',
                  open && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-3 h-0.5 w-5 bg-current transition-transform duration-200 motion-reduce:transition-none',
                  open && 'top-1.5 -rotate-45',
                )}
              />
            </span>
          </button>
        </div>

        {/* Mobile overlay panel */}
        <div
          id="mobile-nav"
          className={cn(
            'overflow-hidden border-t border-border bg-bg/95 backdrop-blur transition-[max-height,opacity] duration-200 motion-reduce:transition-none md:hidden',
            open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
          )}
        >
          <nav aria-label="Mobile" className="px-6 py-4 sm:px-8">
            <ul className="flex flex-col gap-1">
              {LINKS.map(({ label, href }) => {
                const isActive = active === href
                return (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={close}
                      aria-current={isActive ? 'true' : undefined}
                      className={cn(
                        'block rounded-md px-3 py-2.5 font-mono text-sm transition-colors hover:bg-surface',
                        isActive
                          ? 'text-accent'
                          : 'text-ink-dim hover:text-accent',
                      )}
                    >
                      <span className="mr-2 text-accent" aria-hidden="true">
                        ~/
                      </span>
                      {label.toLowerCase()}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}