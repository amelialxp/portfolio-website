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
        primary: {
          yellow: '#FFC806',
          background: '#F8F5F1',
        },
        secondary: {
          navy: '#0E3591',
        },
        'text-body': '#4A4A4A',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config