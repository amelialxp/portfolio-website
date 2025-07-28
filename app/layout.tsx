import type { Metadata } from 'next'
import { Old_Standard_TT, Spectral } from 'next/font/google'
import './globals.css'

const oldStandardTT = Old_Standard_TT({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-old-standard'
})

const spectral = Spectral({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spectral'
})

export const metadata: Metadata = {
  title: 'Portfolio - Product Designer',
  description: 'A product designer portfolio showcasing innovative design solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${oldStandardTT.variable} ${spectral.variable} font-spectral`}>{children}</body>
    </html>
  )
}