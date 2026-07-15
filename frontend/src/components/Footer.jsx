import { Link } from 'react-router-dom'
import { site, nav } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant bg-surface-low">
      <div className="container-page grid gap-10 py-12 md:grid-cols-4 md:py-16">
        <div className="md:col-span-2">
          <p className="font-display text-lg font-bold">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm text-on-surface-variant">
            Precision haircuts, color, and salon services in the heart of Hyde Park, Chicago.
          </p>
          <p className="mt-4 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-ink">
            Student Friendly Salon
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">Navigation</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-on-surface hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">Visit Us</p>
          <address className="mt-4 space-y-1 text-sm not-italic text-on-surface">
            <p>{site.address.line1}</p>
            <p>{site.address.line2}</p>
            <p className="pt-2">
              <a href={site.phoneHref} className="hover:text-accent">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-accent">
                {site.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-outline-variant">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-on-surface-variant sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Hyde Park, Chicago</p>
        </div>
      </div>
    </footer>
  )
}
