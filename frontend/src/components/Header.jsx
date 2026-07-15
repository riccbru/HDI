import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { site, nav } from '../data/site'
import Button from './Button'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold tracking-wide transition-colors ${
      isActive ? 'text-ink' : 'text-on-surface-variant hover:text-ink'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant bg-paper/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <NavLink to="/" className="font-display text-lg font-bold tracking-tight md:text-xl" onClick={() => setOpen(false)}>
          {site.name}
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/contact" variant="accent">
            Book Now
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-6 bg-ink transition-transform ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span className={`absolute left-0 top-1.5 block h-0.5 w-6 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span
              className={`absolute left-0 top-3 block h-0.5 w-6 bg-ink transition-transform ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-outline-variant bg-paper md:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-card px-3 py-3 text-base font-semibold ${
                    isActive ? 'bg-surface-container text-ink' : 'text-on-surface-variant'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button to="/contact" variant="accent" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Book Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
