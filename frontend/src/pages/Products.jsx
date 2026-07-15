import { ExternalLink } from 'lucide-react'

const brandGroups = [
  {
    name: 'Davines, Paul Mitchell & Redken',
    description:
      'Shop these professional lines through our secure Salon Interactive storefront. You will be redirected to another website to complete your purchase.',
    href: 'https://shop.saloninteractive.com/store/hdi1309',
    cta: 'Shop Davines, Paul Mitchell & Redken',
  },
  {
    name: 'AG Hair Care',
    description:
      'Shop AG Hair Care products through our secure SalonHQ storefront. You will be redirected to another website to complete your purchase.',
    href: 'https://cp.salonhq.co/hair-design-international',
    cta: 'Shop AG Hair Care',
  },
]

export default function Products() {
  return (
    <div>
      <section className="bg-ink py-14 text-white md:py-20">
        <div className="container-page">
          <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
            Retail
          </span>
          <h1 className="mt-5 font-display text-3xl font-bold sm:text-4xl md:text-5xl">Purchase Products</h1>
          <p className="mt-4 max-w-xl text-sm text-white/70 md:text-base">
            We offer a curated selection of professional hair care brands. Purchase online through our
            trusted retail partners below.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-section">
        <div className="container-page grid gap-8 md:grid-cols-2">
          {brandGroups.map((brand) => (
            <div key={brand.name} className="flex flex-col rounded-card border border-outline-variant p-6 shadow-soft sm:p-8">
              <h2 className="font-display text-xl font-bold sm:text-2xl">{brand.name}</h2>
              <p className="mt-3 flex-1 text-sm text-on-surface-variant">{brand.description}</p>
              <a
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-button bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-on-surface"
              >
                {brand.cta}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
