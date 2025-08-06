import type { Metadata } from 'next'
import { Spectral, Borel } from 'next/font/google'
import './globals.css'

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
      <body className={`${spectral.variable} ${borel.variable} font-spectral`}>
        {children}
      </body>
    </html>
  )
}