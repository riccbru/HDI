import { useState } from 'react'
import { Phone, Mail, Clock, GraduationCap } from 'lucide-react'
import { site } from '../data/site'
import salonInterior from '../assets/salon-interior.jpg'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // No backend yet — this is a placeholder confirmation.
    // Wire this up to a form service (e.g. Formspree, EmailJS) or a
    // serverless function before launch.
    setSubmitted(true)
  }

  return (
    <div>
      <section className="h-64 w-full overflow-hidden sm:h-80 md:h-[420px]">
        <iframe
          title="Hair Design International location map"
          src={site.mapEmbedSrc}
          className="h-full w-full grayscale"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <section className="py-14 md:py-section">
        <div className="container-page grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-accent">Get In Touch</p>
            <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Visit Our Hyde Park Studio</h1>
            <p className="mt-4 max-w-md text-sm text-on-surface-variant">
              {site.address.note}. Give us a call or stop by and we'll be happy to book your next
              appointment.
            </p>

            <img
              src={salonInterior}
              alt="Styling chairs inside the Hair Design International salon"
              className="mt-6 h-56 w-full max-w-sm rounded-card border border-outline-variant object-cover shadow-soft"
              width={358}
              height={392}
              loading="lazy"
            />

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 rounded-card border border-outline-variant p-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">Phone</p>
                  <a href={site.phoneHref} className="text-base font-semibold hover:text-accent">
                    {site.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-card border border-outline-variant p-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">Email</p>
                  <a href={`mailto:${site.email}`} className="text-base font-semibold hover:text-accent">
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-card border border-outline-variant p-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">Hours</p>
                  <ul className="mt-1 space-y-0.5 text-sm">
                    {site.hours.map((h) => (
                      <li key={h.days} className="flex justify-between gap-4">
                        <span>{h.days}</span>
                        <span className="font-semibold">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-surface-container px-4 py-2 text-xs font-semibold">
              <GraduationCap className="h-4 w-4 text-accent" />
              Student discount available with valid ID
            </div>
          </div>

          <div className="rounded-card border border-outline-variant bg-surface-low p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold">Send an Inquiry</h2>

            {submitted ? (
              <div className="mt-6 rounded-card border border-outline-variant bg-paper p-6 text-sm">
                <p className="font-semibold">Thanks, {form.name || 'friend'}!</p>
                <p className="mt-1 text-on-surface-variant">
                  Your message has been noted. For the fastest response, please call us at{' '}
                  <a href={site.phoneHref} className="font-semibold text-accent">
                    {site.phone}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="mt-1.5 w-full rounded-card border border-outline-variant bg-paper px-4 py-2.5 text-sm outline-none focus:border-ink"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="mt-1.5 w-full rounded-card border border-outline-variant bg-paper px-4 py-2.5 text-sm outline-none focus:border-ink"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your hair goals..."
                    className="mt-1.5 w-full rounded-card border border-outline-variant bg-paper px-4 py-2.5 text-sm outline-none focus:border-ink"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-button bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-on-surface"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
