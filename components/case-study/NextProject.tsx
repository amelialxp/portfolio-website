import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface NextProjectProps {
  slug: string
  title: string
  subtitle: string
}

export const NextProject = ({ slug, title, subtitle }: NextProjectProps) => {
  return (
    <section className="py-24 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-sm text-gray-500 mb-4 uppercase tracking-wide">
            Next Project
          </h3>
          <Link 
            href={`/work/${slug}`}
            className="group inline-flex flex-col items-center"
          >
            <h2 className="mb-4">
              {title}
            </h2>
            <p className="text-xl text-gray-600 group-hover:text-gray-500 transition-colors mb-6">
              {subtitle}
            </p>
            <div className="flex items-center gap-2 text-gray-500 group-hover:text-gray-700 transition-colors">
              <span className="text-sm font-medium">View Project</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}