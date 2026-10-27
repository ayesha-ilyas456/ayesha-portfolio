/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: token('bg'),
        bg2: token('bg2'),
        card: token('card'),
        ink: token('ink'),
        mute: token('mute'),
        accent: token('accent'),
        'accent-ink': token('accent-ink'),
      },
      fontFamily: {
        display: ['Ubuntu', 'system-ui', 'sans-serif'],
        sans: ['Ubuntu', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      maxWidth: { page: '90rem' },
      keyframes: {
        marquee: { to: { transform: 'translateX(-50%)' } },
        rise: { to: { transform: 'translateY(0)' } },
        pageIn: { from: { opacity: '0', transform: 'translateY(12px)' }, to: { opacity: '1', transform: 'none' } },
        pop: { from: { opacity: '0', transform: 'translateY(-8px) scale(.98)' }, to: { opacity: '1', transform: 'none' } },
        pulseRing: { '70%': { boxShadow: '0 0 0 9px transparent' }, '100%': { boxShadow: '0 0 0 0 transparent' } },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-rev': 'marquee 55s linear infinite reverse',
        'page-in': 'pageIn .6s cubic-bezier(.2,.7,.2,1)',
        pop: 'pop .25s cubic-bezier(.2,.7,.2,1)',
        'pulse-ring': 'pulseRing 2s infinite',
      },
    },
  },
  plugins: [],
}
