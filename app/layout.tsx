import type { Metadata } from 'next'
import { Spectral, Borel } from 'next/font/google'
import './globals.css'
import { Header, Footer } from '@/components/layout'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const spectral = Spectral({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-spectral'
})

const borel = Borel({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-borel'
})

export const metadata: Metadata = {
  title: 'Amelia Liw',
  description: 'Senior Product Designer specializing in design systems, user experience, and building products that help teams move faster. Portfolio showcasing 5+ years of design work.',
  authors: [{ name: 'Amelia Liw' }],
  creator: 'Amelia Liw',
  publisher: 'Amelia Liw',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      }
    ],
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spectral.variable} ${borel.variable} font-spectral`}>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}