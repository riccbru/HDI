import { ShieldCheck, CreditCard, Droplets } from 'lucide-react'

const salonMeasures = [
  'Employees are required to wear a mask during their entire shift.',
  'Our stylists are licensed cosmetologists, trained in sanitation requirements. Chairs, bowls, stations, and tools are sanitized between each client.',
  'Hand sanitizer and tissues are available throughout the salon.',
  'Capes and towels are single-use only before being washed and sanitized.',
  'High-contact areas are sanitized hourly, or more often as needed.',
  'Employees do not shake hands, hug, or handle guest belongings.',
]

const visitExpectations = [
  'Masks are required to enter the salon. An ear-loop mask makes it easier for your stylist to work. If having a chemical service, a disposable mask is preferred. Your mask must properly cover your nose and mouth — let us know in advance if a medical condition prevents this.',
  'We currently shampoo hair in-salon, but if you prefer a dry cut, please arrive with freshly cleaned, dry hair.',
  'We accept cash, checks, and Visa/Mastercard. A $1.50 fee applies to credit/debit card and Apple Pay transactions.',
]

export default function Covid() {
  return (
    <div>
      <section className="bg-ink py-14 text-white md:py-20">
        <div className="container-page">
          <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
            Salon Safety
          </span>
          <h1 className="mt-5 font-display text-3xl font-bold sm:text-4xl md:text-5xl">COVID-19 Protocols</h1>
          <p className="mt-4 max-w-xl text-sm text-white/70 md:text-base">
            This page is updated as we receive and review guidelines from the city and state. Our
            protocols are subject to change at any time, and current practices — even if not listed here
            — are followed in salon.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-section">
        <div className="container-page grid gap-12 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-accent" />
              <h2 className="font-display text-xl font-bold sm:text-2xl">What We're Doing to Protect Everyone</h2>
            </div>
            <ul className="mt-5 space-y-4">
              {salonMeasures.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-on-surface-variant">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <Droplets className="h-5 w-5 text-accent" />
              <h2 className="font-display text-xl font-bold sm:text-2xl">What to Expect During Your Visit</h2>
            </div>
            <ul className="mt-5 space-y-4">
              {visitExpectations.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-on-surface-variant">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-start gap-3 rounded-card border border-outline-variant bg-surface-low p-4">
              <CreditCard className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <p className="text-sm text-on-surface-variant">
                Cash, check, Visa, and Mastercard accepted. A $1.50 fee applies to card and Apple Pay
                transactions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
