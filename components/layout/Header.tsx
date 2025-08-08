'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  
  const isActiveRoute = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="px-8 py-6">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-borel text-base text-foreground hover:text-secondary-navy transition-colors">
          amelia liw
        </Link>
        <div className="flex gap-8">
          <Link href="/" className="font-spectral text-secondary-navy hover:text-secondary-navy transition-colors group relative">
            <span className="relative">
              Work
              <span 
                className={`absolute bottom-0 left-0 h-0.5 bg-primary-yellow transition-all duration-300 ${
                  isActiveRoute('/') && pathname === '/' 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </span>
          </Link>
          <Link href="/about" className="font-spectral text-secondary-navy hover:text-secondary-navy transition-colors group relative">
            <span className="relative">
              About
              <span 
                className={`absolute bottom-0 left-0 h-0.5 bg-primary-yellow transition-all duration-300 ${
                  isActiveRoute('/about') 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </span>
          </Link>
        </div>
      </nav>
    </header>
  )
}