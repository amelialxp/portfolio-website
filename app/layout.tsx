import type { Metadata } from 'next'
import { Spectral, Borel } from 'next/font/google'
import './globals.css'
import { Header, Footer } from '@/components/layout'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'
import { GA_MEASUREMENT_ID } from '@/lib/gtag'
import UTMTracker from '@/components/analytics/UTMTracker'

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
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
                custom_map: {
                  'custom_parameter_1': 'utm_source',
                  'custom_parameter_2': 'utm_medium',
                  'custom_parameter_3': 'utm_campaign',
                  'custom_parameter_4': 'utm_term',
                  'custom_parameter_5': 'utm_content'
                }
              });
            `,
          }}
        />
      </head>
      <body className={`${spectral.variable} ${borel.variable} font-spectral`}>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
        <UTMTracker />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}