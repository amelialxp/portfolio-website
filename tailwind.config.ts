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
        body: {
          text: '#2C2C2C',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        'old-standard': ['Old Standard TT', 'serif'],
        'spectral': ['Spectral', 'serif'],
      },
      fontSize: {
        'heading-1': '40px',
        'heading-2': '32px',
        'heading-3': '24px',
        'caption': '20px',
        'body': '20px',
      },
    },
  },
  plugins: [],
}
export default config