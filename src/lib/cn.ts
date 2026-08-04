/**
 * Small class-name combiner (kept dependency-free).
 * Filters falsy values and joins the rest with a space.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}
