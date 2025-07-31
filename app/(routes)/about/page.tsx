import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-primary-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-primary-background/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link 
            href="/"
            className="inline-flex items-center text-text-body hover:text-secondary-navy transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-24">
        {/* Page Header */}
        <section className="px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-old-standard font-bold text-5xl md:text-6xl text-text-body mb-6">
              (Even more) About Me
            </h1>
            <p className="font-spectral text-xl md:text-2xl text-text-body max-w-3xl leading-relaxed">
              I mean, I guess you clicked into here to read more about me so I wrote it :)
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-8 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Photo */}
              <div className="lg:order-2 flex justify-center lg:justify-start">
                <div className="w-64 aspect-[3/4] bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-base font-semibold mb-2">Professional Photo</div>
                    <div className="text-sm">Add your headshot here</div>
                  </div>
                </div>
              </div>

              {/* Story Content */}
              <div className="lg:order-1 space-y-8">
                <div className="prose prose-lg max-w-none">
                  <div className="font-spectral text-lg text-text-body leading-relaxed space-y-6">
                    <p>
                      {"I'm endlessly curious about how things work—from merchant workflows to kitchen operations—and I bring that obsession with understanding systems into every design challenge I tackle."}
                    </p>
                    
                    <p>
                      I thrive on complex problems where user needs meet business constraints, believing the best solutions come from seeing the full picture: the interface, the organization, and the impact.
                    </p>
                    
                    <p>
                      {"Over five years, I've evolved from designing screens to designing systems that help entire teams move faster, mentoring designers through honest but caring feedback, and stepping up to own products when leadership gaps emerge."}
                    </p>
                    
                    <p>
                      {"These days, I'm particularly energized by work that creates measurable business impact—building design infrastructure, diving into data to understand user behavior, and solving problems that have ripple effects beyond just the screen."}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-lg p-12 shadow-sm">
              <h2 className="font-old-standard text-3xl text-text-body mb-4">
                {"Let's Work Together"}
              </h2>
              <p className="font-spectral text-lg text-text-body mb-8 max-w-2xl mx-auto">
                {"I'm always interested in discussing new opportunities and challenging projects."}
              </p>
              <div className="flex justify-center gap-6">
                <a 
                  href="mailto:your.email@example.com" 
                  className="bg-primary-yellow text-text-body px-8 py-4 rounded-lg font-spectral font-bold text-lg hover:bg-yellow-400 transition-colors"
                >
                  Get In Touch
                </a>
                <a 
                  href="#" 
                  className="border-2 border-secondary-navy text-secondary-navy px-8 py-4 rounded-lg font-spectral font-bold text-lg hover:bg-secondary-navy hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-8 py-12 border-t border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-spectral text-text-body">
              © 2024 Amelia XP. Designed and built with care.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}