import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

type SectionLabelProps = {
  /** Short uppercase monospace label, e.g. "01 // Projects" */
  children: ReactNode
  className?: string
}

/**
 * Monospace section marker in the accent color, e.g. `01 // projects`.
 * A short amber rule sits to the left of the label so every section header
 * shares one consistent eyebrow treatment (see typography hierarchy).
 */
export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        'relative pl-5 font-mono text-xs uppercase tracking-[0.28em] text-accent',
        'before:absolute before:left-0 before:top-1/2 before:h-px before:w-3 before:-translate-y-1/2 before:bg-accent-line before:content-[""]',
        className,
      )}
    >
      {children}
    </p>
  )
}