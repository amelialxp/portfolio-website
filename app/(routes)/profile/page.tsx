import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function Profile() {
  return (
    <>
      {/* Page Header */}
      <section className="px-8 pt-16 pb-4">
        <div className="max-w-4xl mx-auto">
          <h1>
            A Product Designer, A Systems Thinker, & Someone who simply Cares a Lot
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-center">
            {/* Story Content */}
            <div className="flex-1 lg:order-1 space-y-8">
              <div className="prose prose-lg max-w-none">
                <div className="font-spectral text-lg text-foreground leading-relaxed space-y-6">
                  <p>
                    {"Over the past five years, I've evolved from designing screens to designing systems that help entire teams move faster, and mentoring designers through honest but caring feedback."}
                  </p>
                  
                  <p>
                    {"When I'm not untangling complex user flows, you'll find me experimenting in the kitchen, or getting lost in podcasts about everything from urban planning to the world's first email."}
                  </p>
                  
                  <p>
                    {` I approach both design and life with the same philosophy: stay curious, always listen, and never be afraid of looking like the "dumbest" person in the room.`}
                  </p>
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className="lg:order-2 flex justify-center lg:justify-end">
              <div className="w-64 aspect-square rounded-full shadow-lg overflow-hidden flex-shrink-0">
                <Image
                  src="/images/projects/about.jpg"
                  alt="Amelia Liw - Professional Photo"
                  width={256}
                  height={256}
                  quality={95}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 256px"
                  className="w-full h-full object-cover"
                />
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
          <p className="font-spectral text-lg text-foreground mb-12 max-w-2xl">
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
    </>
  )
}