/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#000000',
        paper: '#ffffff',
        accent: '#FF6A00',
        surface: '#f9f9f9',
        'surface-dim': '#dadada',
        'surface-low': '#f3f3f3',
        'surface-container': '#eeeeee',
        'surface-high': '#e8e8e8',
        'on-surface': '#1a1c1c',
        'on-surface-variant': '#4c4546',
        outline: '#7e7576',
        'outline-variant': '#cfc4c5',
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      borderRadius: {
        card: '0.5rem',
        button: '0.75rem',
      },
      spacing: {
        section: '5rem',
        'section-mobile': '3rem',
      },
      boxShadow: {
        soft: '0 4px 20px 0 rgb(0 0 0 / 0.04)',
        'soft-lg': '0 8px 30px 0 rgb(0 0 0 / 0.06)',
      },
    },
  },
  plugins: [],
}
