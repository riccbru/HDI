import { Sparkles } from 'lucide-react'
import Button from '../components/Button'
import { serviceCategories, pricingNote } from '../data/services'
import { site } from '../data/site'

export default function Services() {
  return (
    <div>
      <section className="bg-ink py-14 text-white md:py-20">
        <div className="container-page">
          <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
            Service Menu
          </span>
          <h1 className="mt-5 font-display text-3xl font-bold sm:text-4xl md:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-xl text-sm text-white/70 md:text-base">
            Expert care for hair and skin. We use premium products to ensure lasting results and a
            luxurious experience.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-section">
        <div className="container-page grid gap-x-12 gap-y-14 md:grid-cols-2">
          {serviceCategories.map((cat) => (
            <div key={cat.id}>
              <div className="flex items-center gap-2 border-b border-ink pb-3">
                <Sparkles className="h-4 w-4 text-accent" />
                <h2 className="font-display text-xl font-bold sm:text-2xl">{cat.name}</h2>
              </div>
              <ul className="mt-4 divide-y divide-outline-variant">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex items-baseline justify-between gap-3 py-3">
                    <span className="text-sm text-on-surface sm:text-base">{item.name}</span>
                    <span className="flex-1 border-b border-dotted border-outline-variant" />
                    <span className="font-display text-sm font-bold sm:text-base">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="container-page mt-12">
          <div className="rounded-card border border-outline-variant bg-surface-low p-5 text-center text-xs text-on-surface-variant sm:text-left">
            {pricingNote}
          </div>
        </div>
      </section>

      <section className="border-t border-outline-variant bg-surface-container">
        <div className="container-page flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-accent">Student Discount</p>
            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">$10 off with a valid student ID</h2>
            <p className="mt-2 max-w-md text-sm text-on-surface-variant">{site.studentDiscount}</p>
          </div>
          <Button to="/contact" variant="primary">
            Book Your Appointment
          </Button>
        </div>
      </section>
    </div>
  )
}
