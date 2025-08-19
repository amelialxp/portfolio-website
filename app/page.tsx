import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FeaturedWork } from '@/components/homepage/FeaturedWork'
import { OlderCaseStudies } from '@/components/homepage/OlderCaseStudies'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="sr-only">
           Amelia Liw
          </h1>
          <p className="font-spectral text-lg md:text-xl text-foreground max-w-3xl leading-relaxed mb-8">
            {"A Senior Product Designer who is obsessively curious about 'how' and 'why' of everything UX."}
          </p>

          {/* Find out more link */}
          <Link href="/profile" className="group inline-flex items-center gap-2 text-secondary-navy relative">
            <span className="font-spectral relative">
              More About Amelia Liw
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-yellow group-hover:w-full transition-all duration-300"></span>
            </span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Case Studies Preview */}
      <FeaturedWork />
      
      {/* Older Case Studies */}
      <OlderCaseStudies />
    </>
  )
}