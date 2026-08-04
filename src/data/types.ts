/**
 * Content model for the portfolio.
 *
 * All resume-derived content lives in `src/data/content.ts` and conforms
 * to these types. Components must only import from `./content`,
 * never embed resume facts in markup.
 */

export type Profile = {
  name: string
  tagline: string
  pitch: string
  location: string
  email: string
  phone: string
  githubUrl: string
  linkedinUrl: string
  /** Path (in /public) of the downloadable CV. */
  cvPath: string
}

export type Internship = {
  headline: string
  duration: string
  areas: string[]
  languages: Array<{ name: string; level: string }>
}

export type Project = {
  id: string
  title: string
  period: string
  role: string
  context: string
  /** One-line hook shown as the card intro. */
  hook: string
  highlights: string[]
  stack: string[]
  githubUrl: string
}

export type SkillGroup = {
  id: string
  title: string
  items: string[]
}

export type TimelineEntry = {
  id: string
  kind: 'education' | 'activity'
  title: string
  org: string
  location?: string
  period: string
  description?: string
  /** e.g. degree line for education entries */
  detail?: string
}

export type Contact = {
  email: string
  githubUrl: string
  linkedinUrl: string
  phone: string
  location: string
  /** Formspree form endpoint. Empty string = form shows a notice. */
  formEndpoint: string
}

export type SiteContent = {
  profile: Profile
  internship: Internship
  projects: Project[]
  skills: SkillGroup[]
  timeline: TimelineEntry[]
  contact: Contact
}
