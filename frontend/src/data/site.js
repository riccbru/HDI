export const site = {
  name: 'Hair Design International',
  shortName: 'HDI',
  tagline: 'Precision Meets Artistry',
  phone: '773.363.0700',
  phoneHref: 'tel:+17733630700',
  email: 'hdi1309@gmail.com',
  address: {
    line1: '1309 E 57th St',
    line2: 'Chicago, IL 60637',
    full: '1309 E 57th St, Chicago, IL 60637',
    note: 'Located in Hyde Park, near The University of Chicago campus',
  },
  hours: [
    { days: 'Tuesday – Saturday', time: '9:00 AM – 5:00 PM' },
    { days: 'Sunday – Monday', time: 'Closed' },
  ],
  studentDiscount: '$10 off haircuts for all college students with valid ID, Tuesday through Saturday.',
  hiring: {
    headline: 'We Are Hiring',
    body: 'IL Licensed Barber or Cosmetologist wanted. Send your resume to hdi1309@gmail.com.',
  },
  mapEmbedSrc:
    'https://maps.google.com/maps?q=1309%20E%2057th%20St%2C%20Chicago%2C%20IL%2060637&t=m&z=15&output=embed',
  mapLink: 'https://maps.google.com/?q=1309+E+57th+St,+Chicago,+IL+60637',
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
  { label: 'COVID-19', to: '/covid-19' },
  { label: 'Products', to: '/products' },
]
