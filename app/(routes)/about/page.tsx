import Link from 'next/link'
import { Linkedin } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-primary-background">
      {/* Header/Navigation */}
      <header className="px-8 py-6">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-borel text-base text-text-body hover:text-secondary-navy transition-colors">
            amelia liw
          </Link>
          <div className="flex gap-8">
            <Link href="/" className="font-spectral text-secondary-navy hover:text-secondary-navy transition-colors group relative">
              <span className="relative">
                Work
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-yellow group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
            <Link href="/about" className="font-spectral text-secondary-navy hover:text-secondary-navy transition-colors group relative">
              <span className="relative">
                About
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-yellow transition-all duration-300"></span>
              </span>
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Page Header */}
        <section className="px-8 py-8">
          <div className="max-w-4xl mx-auto">
            <h1>
              A Product Designer & Systems Thinker
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-8 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">
              {/* Story Content */}
              <div className="flex-1 lg:order-1 space-y-8">
                <div className="prose prose-lg max-w-none">
                  <div className="font-spectral text-lg text-text-body leading-relaxed space-y-6">
                    <p>
                      {"Over five years, I've evolved from designing screens to designing systems that help entire teams move faster, mentoring designers through honest but caring feedback, and stepping up to own products when leadership gaps emerge."}
                    </p>
                    
                    <p>
                      {"When I'm not untangling complex user flows, you'll find me experimenting in the kitchen, or getting lost in podcasts about everything from urban planning to the world's first email."}
                    </p>
                    
                    <p>
                      {" I approach both design and life with the same philosophy: stay curious, always listen, and never be afraid of looking like the 'dumbest' person in the room."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Photo */}
              <div className="lg:order-2 flex justify-center lg:justify-end">
                <div className="w-64 aspect-[3/4] bg-gray-200 rounded-lg shadow-lg flex items-center justify-center flex-shrink-0">
                  <div className="text-center text-gray-500">
                    <div className="text-base text-text-body mb-2">Professional Photo</div>
                    <div className="text-sm">Add your headshot here</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="px-8 py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-4">
              {"Let's Connect"}
            </h2>
            <p className="font-spectral text-lg text-text-body mb-12 max-w-2xl">
              {"I'm always interested in discussing new opportunities and challenging projects."}
            </p>
            <div className="flex justify-start">
              <a 
                href="https://www.linkedin.com/in/amelia-liw/" 
                className="group inline-flex items-center gap-3 text-secondary-navy hover:text-secondary-navy transition-colors font-spectral text-lg relative"
              >
                <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                <span className="relative">
                  Connect on LinkedIn
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-yellow group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-spectral text-gray-500 text-sm">
              © 2025 Amelia Liw. Designed and built with care and Claude Code 🤖.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}