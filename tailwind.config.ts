import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'secondary-gray': 'var(--secondary-gray)',
        'accent-yellow': 'var(--accent-yellow)',
        'accent-navy': 'var(--accent-navy)',
        'pure-white': 'var(--pure-white)',
        'container': 'var(--container-bg)',
        primary: {
          yellow: 'var(--accent-yellow)',
        },
        secondary: {
          navy: 'var(--accent-navy)',
        },
      },
      fontFamily: {
        'spectral': ['var(--font-spectral)', 'serif'],
        'borel': ['var(--font-borel)', 'cursive'],
      },
      fontSize: {
        'heading-1': '32px',
        'heading-2': '24px',
        'heading-3': '20px',
        'caption': '20px',
        'body': '20px',
      },
    },
  },
  plugins: [],
}
export default config