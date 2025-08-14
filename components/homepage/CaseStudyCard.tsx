import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface CaseStudyMetadata {
  slug: string
  title: string
  subtitle: string
  excerpt: string
  image: string | null
  metrics: Array<{ value: string; label: string }> | null
}

interface CaseStudyCardProps {
  caseStudy: CaseStudyMetadata
}

export const CaseStudyCard = ({ caseStudy }: CaseStudyCardProps) => {
  return (
    <Link href={`/${caseStudy.slug}`} className="group block">
      <article className="transition-all duration-300">
        {/* Hero Image */}
        {caseStudy.image ? (
          <div className="h-48 sm:h-64 md:h-80 overflow-hidden rounded-lg mb-8 relative">
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              fill
              quality={90}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1024px"
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
          </div>
        ) : (
          <div className="h-48 sm:h-64 md:h-80 bg-container overflow-hidden flex items-center justify-center relative rounded-lg mb-8">
            <div className="text-center text-secondary-gray">
              <div className="text-base mb-2">Project Hero Image</div>
              <div className="text-sm">{caseStudy.title}</div>
            </div>
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
          </div>
        )}
        
        {/* Content */}
        <div>
          {/* Title and Subtitle */}
          <div className="mb-8">
            <h3>
              {caseStudy.title}
            </h3>
            <p className="font-spectral text-lg text-secondary-gray mb-8">
              {caseStudy.subtitle}
            </p>

            {/* Business Metrics */}
            {caseStudy.metrics && (
              <div className="mb-8">
                <div className="grid grid-cols-3 gap-8">
                  {caseStudy.metrics.map((metric, index) => (
                    <div key={index} className="text-left">
                      <h3 className="mb-2">
                        {metric.value}
                      </h3>
                      <div className="font-spectral text-sm text-secondary-gray leading-tight">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <p className="font-spectral text-foreground leading-relaxed mb-8">
              {caseStudy.excerpt}
            </p>
          </div>

          {/* Read More Link */}
          <div className="flex items-center gap-2 text-secondary-navy relative">
            <span className="font-spectral relative">
              Read Case Study
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-yellow group-hover:w-full transition-all duration-300"></span>
            </span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  )
}