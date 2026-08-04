import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

type ContainerProps = {
  children: ReactNode
  className?: string
  /** Max content width. Defaults to a readable ~72rem. */
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
} as const

/**
 * Page-width wrapper with consistent horizontal padding.
 */
export function Container({ children, className, size = 'lg' }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full px-6 sm:px-8', sizes[size], className)}>
      {children}
    </div>
  )
}
