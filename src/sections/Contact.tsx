import { useState, type FormEvent } from 'react'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { content } from '../data/content'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const linkClass =
  'font-mono text-sm font-semibold text-ink-dim underline decoration-accent decoration-2 underline-offset-4 hover:text-accent'

const fieldClass =
  'w-full border-2 border-border bg-surface px-3.5 py-2.5 font-mono text-sm text-ink placeholder:text-ink-mute transition-colors focus:border-accent'

/**
 * Contact - bold closing section: direct channels plus a form that POSTs
 * JSON to `contact.formEndpoint` (Formspree-style). While the endpoint is
 * empty it shows a mailto notice instead of firing a network request.
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

  const showNotice = !endpoint && status === 'success'
  const showSuccess = !!endpoint && status === 'success'

  return (
    <section id="contact" aria-label="Contact" className="py-20 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <Reveal>
          <SectionLabel className="mb-3">06 // contact</SectionLabel>
          <h2 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">
            Contact
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Direct channels */}
          <Reveal delay={0.1}>
            <div>
              <p className="max-w-md text-lg leading-relaxed text-ink-dim">
                Hiring for a DevOps, Cloud, Platform, or SRE internship? I
                would love to hear about your team and what you are building.
              </p>
              <ul className="mt-8 space-y-3 font-mono text-sm">
                <li>
                  <a href={`mailto:${contact.email}`} className={linkClass}>
                    {contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={contact.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    linkedin ↗
                  </a>
                </li>
                <li>
                  <a
                    href={contact.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    github ↗
                  </a>
                </li>
                <li className="text-ink-mute">{contact.phone}</li>
                <li className="text-ink-mute">{contact.location} · open to relocation</li>
              </ul>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.15}>
            <form onSubmit={handleSubmit} className="card-ticket rounded-none p-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block font-mono text-xs font-bold uppercase tracking-wider text-ink-mute"
                  >
                    name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Jane Doe"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block font-mono text-xs font-bold uppercase tracking-wider text-ink-mute"
                  >
                    email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="jane@company.com"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block font-mono text-xs font-bold uppercase tracking-wider text-ink-mute"
                  >
                    message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Tell me about the role, project, or idea..."
                    className={`${fieldClass} resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-accent px-5 py-2.5 font-mono text-sm font-bold text-white transition-colors hover:bg-accent-strong focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                  {status === 'sending' ? 'sending...' : 'send message'}
                </button>

                <div role="status" aria-live="polite" className="min-h-24 text-sm">
                  {showNotice && (
                    <p className="border-l-4 border-accent bg-accent-dim px-3.5 py-2.5 text-ink">
                      Form not wired yet - email me directly at{' '}
                      <a
                        href={`mailto:${contact.email}`}
                        className="font-mono font-semibold underline decoration-accent decoration-2 underline-offset-4"
                      >
                        {contact.email}
                      </a>
                      .
                    </p>
                  )}
                  {showSuccess && (
                    <p className="text-success">
                      Message sent - thanks for reaching out. I'll get back to
                      you soon.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-danger">
                      Something went wrong while sending - please try again, or
                      email me directly at{' '}
                      <a
                        href={`mailto:${contact.email}`}
                        className="font-mono underline decoration-danger decoration-2 underline-offset-4"
                      >
                        {contact.email}
                      </a>
                      .
                    </p>
                  )}
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}