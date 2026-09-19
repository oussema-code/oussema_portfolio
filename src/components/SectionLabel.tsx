import { cn } from '../lib/cn'

type SectionLabelProps = {
  children: string
  className?: string
}

/**
 * Kicker label - mono, uppercase, with a small orange square marker.
 */
export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        'flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-ink-mute',
        className,
      )}
    >
      <span aria-hidden="true" className="h-2 w-2 bg-accent" />
      {children}
    </p>
  )
}