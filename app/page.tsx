import Link from 'next/link'
import ProtectedRoute from '@/components/ProtectedRoute'
import { FeaturedWork } from '@/components/homepage/FeaturedWork'

export default function Home() {
  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-primary-background">
        {/* Header/Navigation */}
        <header className="px-8 py-6">
          <nav className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="font-borel text-base text-text-body">
              amelia liw
            </div>
            <div className="flex gap-8">
              <Link href="/" className="font-spectral text-secondary-navy hover:text-secondary-navy transition-colors group relative">
                <span className="relative">
                  Work
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-yellow transition-all duration-300"></span>
                </span>
              </Link>
              <Link href="/about" className="font-spectral text-secondary-navy hover:text-secondary-navy transition-colors group relative">
                <span className="relative">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-yellow group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <h1>
             Hey there!
            </h1>
            <p className="font-spectral text-lg md:text-xl text-text-body max-w-3xl leading-relaxed">
              {"Amelia is a Senior Product Designer who is obsessively curious about 'how' and 'why' of everything UX. She's been playing tug-of-war at the intersection of user needs and business constraints since 2020."}
            </p>
          </div>
        </section>

        {/* Case Studies Preview */}
        <FeaturedWork />

        {/* Footer */}
        <footer className="px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-spectral text-gray-500 text-sm">
              © 2025 Amelia Liw. Designed and built with care and Claude Code 🤖.
            </p>
          </div>
        </footer>
      </main>
    </ProtectedRoute>
  )
}