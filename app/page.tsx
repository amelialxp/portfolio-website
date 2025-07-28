import ProtectedRoute from '@/components/ProtectedRoute'

export default function Home() {
  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-primary-background">
        {/* Header/Navigation */}
        <header className="px-8 py-6">
          <nav className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="font-old-standard font-bold text-2xl text-text-body">
              Amelia XP
            </div>
            <div className="flex gap-8">
              <a href="#about" className="font-spectral text-text-body hover:text-secondary-navy transition-colors">
                About
              </a>
              <a href="#work" className="font-spectral text-text-body hover:text-secondary-navy transition-colors">
                Work
              </a>
              <a href="#contact" className="font-spectral text-text-body hover:text-secondary-navy transition-colors">
                Contact
              </a>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-old-standard font-bold text-5xl md:text-6xl text-text-body mb-6">
              Product Designer
            </h1>
            <p className="font-spectral text-xl md:text-2xl text-text-body mb-8 max-w-2xl mx-auto">
              Creating thoughtful digital experiences that solve real problems and delight users.
            </p>
            <button className="bg-primary-yellow text-text-body px-8 py-4 rounded-lg font-spectral font-bold text-lg hover:bg-yellow-400 transition-colors">
              View My Work
            </button>
          </div>
        </section>

        {/* Case Studies Preview */}
        <section className="px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-old-standard text-4xl text-text-body mb-12 text-center">
              Selected Work
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Case Study 1 */}
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="font-old-standard text-2xl text-text-body mb-2">Case Study 1</h3>
                <p className="font-spectral text-text-body mb-4">
                  Brief description of this project and the problem it solved.
                </p>
                <a href="#" className="font-spectral font-bold text-secondary-navy hover:text-primary-yellow transition-colors">
                  Read Case Study →
                </a>
              </div>

              {/* Case Study 2 */}
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="font-old-standard text-2xl text-text-body mb-2">Case Study 2</h3>
                <p className="font-spectral text-text-body mb-4">
                  Brief description of this project and the problem it solved.
                </p>
                <a href="#" className="font-spectral font-bold text-secondary-navy hover:text-primary-yellow transition-colors">
                  Read Case Study →
                </a>
              </div>

              {/* Case Study 3 */}
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="font-old-standard text-2xl text-text-body mb-2">Case Study 3</h3>
                <p className="font-spectral text-text-body mb-4">
                  Brief description of this project and the problem it solved.
                </p>
                <a href="#" className="font-spectral font-bold text-secondary-navy hover:text-primary-yellow transition-colors">
                  Read Case Study →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-8 py-12 border-t border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-spectral text-text-body mb-4">
              Let&apos;s create something amazing together.
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="font-spectral text-secondary-navy hover:text-primary-yellow transition-colors">
                LinkedIn
              </a>
              <a href="#" className="font-spectral text-secondary-navy hover:text-primary-yellow transition-colors">
                Email
              </a>
            </div>
          </div>
        </footer>
      </main>
    </ProtectedRoute>
  )
}