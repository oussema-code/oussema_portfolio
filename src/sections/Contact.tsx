import { useState, type FormEvent } from 'react'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { content } from '../data/content'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

/** Shared mono external-link style (matches Hero/About). */
const linkClass =
  'font-mono text-sm text-ink-dim underline decoration-accent/60 decoration-2 underline-offset-4 transition-colors hover:text-accent'

/** Dark input/textarea styling per the design tokens. */
const fieldClass =
  'w-full rounded border border-border bg-surface px-3.5 py-2.5 font-mono text-sm text-ink placeholder:text-ink-mute transition-colors focus:border-accent-line'

/**
 * Contact — direct channels (email/LinkedIn/GitHub/phone/location) plus a
 * controlled message form. The form POSTs JSON to `contact.formEndpoint`
 * (Formspree-style). While the endpoint is empty it shows a mailto notice
 * instead of firing a network request.
 */
export function Contact() {
  const { contact } = content
  const endpoint = contact.formEndpoint.trim()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // Not wired to a backend yet — surface an informative notice instead of
    // attempting a network request to an empty endpoint.
    if (!endpoint) {
      setStatus('success')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  // Empty-endpoint flow never leaves "idle"/"success" — reuse "success" as the
  // trigger, but render it as an amber notice rather than a green success.
  const showNotice = !endpoint && status === 'success'
  const showSuccess = !!endpoint && status === 'success'

  return (
    <section id="contact" aria-label="Contact" className="bg-bg py-20 sm:py-24">
      <Container size="md">
        <Reveal>
          <SectionLabel className="mb-3">06 // contact</SectionLabel>
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Contact
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-dim">
            Have a role, a project, or an idea in mind? Reach me through any of
            the channels below, or send a message with the form.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Direct channels */}
          <Reveal delay={0.1}>
            <div className="space-y-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-ink-mute">
                  ~/email
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className={`mt-2 inline-block ${linkClass}`}
                >
                  {contact.email}
                </a>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-ink-mute">
                  ~/linkedin
                </p>
                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 inline-block ${linkClass}`}
                >
                  linkedin ↗
                </a>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-ink-mute">
                  ~/github
                </p>
                <a
                  href={contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 inline-block ${linkClass}`}
                >
                  github ↗
                </a>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-ink-mute">
                  ~/phone
                </p>
                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
                  className={`mt-2 inline-block ${linkClass}`}
                >
                  {contact.phone}
                </a>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-ink-mute">
                  ~/location
                </p>
                <p className="mt-2 font-mono text-sm text-ink-dim">
                  {contact.location}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Message form */}
          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block font-mono text-xs uppercase tracking-[0.28em] text-ink-dim"
                >
                  name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Ada Lovelace"
                  className={fieldClass}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block font-mono text-xs uppercase tracking-[0.28em] text-ink-dim"
                >
                  email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className={fieldClass}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block font-mono text-xs uppercase tracking-[0.28em] text-ink-dim"
                >
                  message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell me about the role, project, or idea…"
                  className={`${fieldClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex w-full items-center justify-center rounded-md border border-accent-line bg-transparent px-5 py-2.5 font-mono text-sm font-medium text-accent transition-colors hover:bg-accent-dim focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              >
                {status === 'sending' ? 'sending…' : 'send message'}
              </button>

              {/* Status region — reserved height prevents layout jump. */}
              <div
                role="status"
                aria-live="polite"
                className="min-h-24 text-sm"
              >
                {showNotice && (
                  <p className="rounded border border-accent-line bg-accent-dim px-3.5 py-2.5 text-accent">
                    Form not wired yet — email me directly at{' '}
                    <a
                      href={`mailto:${contact.email}`}
                      className="font-mono text-accent-strong underline decoration-accent/60 decoration-2 underline-offset-4 hover:text-accent"
                    >
                      {contact.email}
                    </a>
                    .
                  </p>
                )}
                {showSuccess && (
                  <p className="text-success">
                    Message sent — thanks for reaching out. I'll get back to you
                    soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-danger">
                    Something went wrong while sending — please try again, or
                    email me directly at{' '}
                    <a
                      href={`mailto:${contact.email}`}
                      className="font-mono text-danger underline decoration-danger/60 decoration-2 underline-offset-4 hover:text-accent"
                    >
                      {contact.email}
                    </a>
                    .
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
