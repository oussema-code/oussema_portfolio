import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Stagger delay in seconds (used inside lists). */
  delay?: number
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as const

/**
 * Subtle scroll-reveal wrapper. Respects prefers-reduced-motion:
 * when reduced motion is requested, content renders without animation.
 * This is the ONLY motion primitive — keep it restrained.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}
