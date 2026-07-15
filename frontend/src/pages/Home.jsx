import { MapPin, Clock, Phone, GraduationCap, ArrowRight } from 'lucide-react'
import Button from '../components/Button'
import { site } from '../data/site'
import { serviceCategories } from '../data/services'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,106,0,0.25),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08),transparent_50%)]" />
        <div className="container-page relative flex flex-col gap-10 py-16 md:flex-row md:items-end md:justify-between md:py-28">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
              Est. 1985
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              Precision Meets Artistry.
            </h1>
            <p className="mt-5 max-w-lg text-base text-white/70 md:text-lg">
              Experience the pinnacle of hair design in the heart of Hyde Park. Our master stylists blend
              classic technique with contemporary edge.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/services" variant="accent">
                Explore Services
              </Button>
              <Button to="/contact" variant="secondary-light">
                Book Now
              </Button>
            </div>
          </div>

          <div className="w-full max-w-sm rounded-card border border-white/15 bg-white/5 p-6 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-wide text-accent">Student Special</p>
            <p className="mt-2 font-display text-4xl font-extrabold text-accent">$10 OFF</p>
            <p className="mt-2 text-sm text-white/70">
              Show your valid student ID and receive an exclusive discount on your next precision haircut.
            </p>
            <Button to="/contact" variant="accent" className="mt-5 w-full">
              Claim Discount
            </Button>
          </div>
        </div>
      </section>

      {/* Info bar */}
      <section className="border-b border-outline-variant bg-surface-low">
        <div className="container-page grid gap-6 py-8 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">Our Location</p>
              <p className="text-sm">{site.address.full}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">Salon Hours</p>
              <p className="text-sm">Tue&ndash;Sat 9am&ndash;5pm</p>
              <p className="text-sm">Sun&ndash;Mon Closed</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">Contact Us</p>
              <a href={site.phoneHref} className="text-sm font-semibold hover:text-accent">
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="py-16 md:py-section">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-accent">What We Offer</p>
              <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">Our Services</h2>
            </div>
            <Button to="/services" variant="secondary" className="hidden sm:inline-flex">
              Full Menu <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {serviceCategories.slice(0, 2).map((cat) => (
              <div key={cat.id}>
                <h3 className="border-b border-outline-variant pb-2 font-display text-lg font-semibold">
                  {cat.name}
                </h3>
                <ul className="mt-3 space-y-2">
                  {cat.items.slice(0, 4).map((item) => (
                    <li key={item.name} className="flex items-baseline justify-between gap-3 text-sm">
                      <span className="text-on-surface-variant">{item.name}</span>
                      <span className="flex-1 border-b border-dotted border-outline-variant" />
                      <span className="font-semibold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Button to="/services" variant="secondary" className="mt-8 w-full sm:hidden">
            View Full Menu <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Hiring / careers */}
      <section className="bg-ink py-16 text-white md:py-section">
        <div className="container-page grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-accent">Careers</p>
            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">We Are Hiring</h2>
            <p className="mt-4 max-w-md text-sm text-white/70">
              We're looking for an IL licensed Barber or Cosmetologist to join our team. Excellence is our
              standard, artistry is our passion.
            </p>
            <Button href={`mailto:${site.email}`} variant="accent" className="mt-6">
              Send Your Resume
            </Button>
          </div>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-3 rounded-card border border-white/10 bg-white/5 px-4 py-3">
              <GraduationCap className="h-4 w-4 text-accent" /> IL Licensed Barber or Cosmetologist
            </li>
            <li className="flex items-center gap-3 rounded-card border border-white/10 bg-white/5 px-4 py-3">
              <GraduationCap className="h-4 w-4 text-accent" /> Established Hyde Park clientele since 1985
            </li>
            <li className="flex items-center gap-3 rounded-card border border-white/10 bg-white/5 px-4 py-3">
              <GraduationCap className="h-4 w-4 text-accent" /> Send resume to {site.email}
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-14">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">Ready for a change?</h2>
            <p className="mt-2 text-sm text-ink/80">Book your appointment today and let us transform your look.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button to="/contact" variant="primary">
              Book Now
            </Button>
            <Button to="/services" variant="secondary">
              View Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
