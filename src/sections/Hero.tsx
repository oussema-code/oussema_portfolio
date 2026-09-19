import { content } from '../data/content'
import { Reveal } from '../components/Reveal'

/**
 * Bold editorial hero - big ink headline, orange availability stamp,
 * stat blocks, and a runbook-style meta card.
 */
export function Hero() {
const { profile, projects } = content
  const { tagline, pitch, location, githubUrl, linkedinUrl, email, cvPath } =
    profile

 const highlights = projects.flatMap((p) => p.highlights)
 const findMetric = (re: RegExp) => {
 for (const h of highlights) {
 const m = h.match(re)
 if (m) return m[1]
 }
 return null
 }
 const stats = [
 { value: findMetric(/(\d+)\s+Docker images/), label: 'images shipped' },
 { value: findMetric(/(\d+)\s+passing/), label: 'tests passing' },
 { value: findMetric(/(\d[\d,]*)\s+checks/), label: 'k6 checks' },
 { value: findMetric(/(\d+)\s+tables/), label: 'RLS tables' },
 ].filter((m): m is { value: string; label: string } => m.value !== null)

 return (
 <section
 id="home"
 className="relative border-b-2 border-ink py-24 pt-32 sm:py-32"
 aria-label="Introduction"
 >
 <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
 <Reveal>
 <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-accent">
 {tagline}
 </p>
 </Reveal>

 <Reveal delay={0.08}>
 <h1 className="mt-5 text-6xl font-black leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-8xl">
 Oussema
 <br />
 Ben Ameur
 </h1>
 </Reveal>

 <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-14">
 <div>
 <Reveal delay={0.15}>
 <p className="max-w-2xl text-lg leading-relaxed text-ink-dim sm:text-xl">
 {pitch}
 </p>
 </Reveal>

 <Reveal delay={0.2}>
 <p className="mt-6 inline-flex items-center gap-2.5 rounded-none border-2 border-success bg-surface px-4 py-2 font-mono text-sm font-semibold text-ink">
 <span className="dot-pulse inline-block h-2.5 w-2.5 rounded-full bg-success" />
 available feb 2027 · open to relocation
 </p>
 </Reveal>

 {stats.length > 0 && (
 <Reveal delay={0.25}>
 <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
 {stats.map((s) => (
 <div key={s.label}>
 <dt className="text-3xl font-black text-accent sm:text-4xl">
 {s.value}
 </dt>
 <dd className="mt-1 font-mono text-[0.7rem] uppercase tracking-wider text-ink-mute">
 {s.label}
 </dd>
 </div>
 ))}
 </dl>
 </Reveal>
 )}

 <Reveal delay={0.3}>
 <nav
 aria-label="External profiles and CV"
 className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4"
 >
 <a
 href={githubUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="font-mono text-sm font-semibold text-ink-dim underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
 >
 github ↗
 </a>
 <a
 href={linkedinUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="font-mono text-sm font-semibold text-ink-dim underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
 >
 linkedin ↗
 </a>
 <a
 href={`mailto:${email}`}
 className="font-mono text-sm font-semibold text-ink-dim underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
 >
 {email}
 </a>
 <a
 href={cvPath}
 target="_blank"
 rel="noopener noreferrer"
 download
 className="rounded-none bg-accent px-5 py-2.5 font-mono text-sm font-bold text-white transition-colors hover:bg-accent-strong focus-visible:outline-none"
 >
 Download CV
 </a>
 </nav>
 </Reveal>
 </div>

 {/* Runbook meta card */}
 <Reveal delay={0.2}>
 <aside
 aria-label="Quick facts"
 className="card-ticket h-fit rounded-none p-5"
 >
 <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.25em] text-ink-mute">
 // quick facts
 </p>
 <dl className="mt-4 space-y-3.5 font-mono text-sm">
 <div className="flex items-baseline justify-between gap-4">
 <dt className="text-ink-mute">location</dt>
 <dd className="text-right font-semibold text-ink">{location}</dd>
 </div>
 <div className="flex items-baseline justify-between gap-4">
 <dt className="text-ink-mute">role</dt>
 <dd className="text-right font-semibold text-ink">
 DevOps · Cloud · SRE
 </dd>
 </div>
 <div className="flex items-baseline justify-between gap-4">
 <dt className="text-ink-mute">duration</dt>
 <dd className="text-right font-semibold text-ink">4–6 months</dd>
 </div>
 <div className="flex items-baseline justify-between gap-4">
 <dt className="text-ink-mute">relocation</dt>
 <dd className="text-right font-semibold text-ink">EU · NA</dd>
 </div>
 </dl>
 </aside>
 </Reveal>
 </div>
 </div>

 <a
 href="#about"
 aria-label="Scroll to about section"
 className="absolute inset-x-0 bottom-5 flex justify-center font-mono text-xs text-ink-mute hover:text-accent"
 >
 <span className="flex items-center gap-2">
 scroll
 <span aria-hidden="true" className="animate-bounce motion-reduce:animate-none">
 ↓
 </span>
 </span>
 </a>
 </section>
 )
}