import Link from 'next/link'

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
          <h3 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">
            Next Project
          </h3>
          <Link 
            href={`/work/${slug}`}
            className="group block"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-gray-600 transition-colors">
              {title}
            </h2>
            <p className="text-xl text-gray-600 group-hover:text-gray-500 transition-colors">
              {subtitle}
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}