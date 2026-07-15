import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-ink text-white hover:bg-on-surface',
  accent: 'bg-accent text-ink hover:brightness-95',
  secondary: 'bg-transparent text-ink border border-ink hover:bg-ink hover:text-white',
  'secondary-light': 'bg-transparent text-white border border-white hover:bg-white hover:text-ink',
}

export default function Button({ to, href, onClick, variant = 'primary', className = '', children, ...rest }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-button px-6 py-3 font-body text-sm font-semibold tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  )
}
