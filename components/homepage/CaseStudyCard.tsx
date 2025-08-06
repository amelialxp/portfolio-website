import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CaseStudyMetadata } from '../../lib/case-study-metadata'

interface CaseStudyCardProps {
  caseStudy: CaseStudyMetadata
}

export const CaseStudyCard = ({ caseStudy }: CaseStudyCardProps) => {
  return (
    <Link href={`/work/${caseStudy.slug}`} className="group block">
      <article className="transition-all duration-300">
        {/* Hero Image */}
        <div className="h-80 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden flex items-center justify-center relative rounded-lg mb-8">
          <div className="text-center text-gray-500">
            <div className="text-base mb-2">Project Hero Image</div>
            <div className="text-sm">{caseStudy.title}</div>
          </div>
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
        </div>
        
        {/* Content */}
        <div>
          {/* Title and Subtitle */}
          <div className="mb-8">
            <h3>
              {caseStudy.title}
            </h3>
            <p className="font-spectral text-lg text-gray-600 mb-8">
              {caseStudy.subtitle}
            </p>

            {/* Business Metrics */}
            {caseStudy.metrics && (
              <div className="mb-8">
                <div className="grid grid-cols-3 gap-8">
                  {caseStudy.metrics.map((metric, index) => (
                    <div key={index} className="text-left">
                      <div className="text-2xl text-text-body mb-2">
                        {metric.value}
                      </div>
                      <div className="font-spectral text-sm text-gray-600 leading-tight">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <p className="font-spectral text-text-body leading-relaxed mb-8">
              {caseStudy.excerpt}
            </p>
          </div>

          {/* Read More Link */}
          <div className="flex items-center gap-2 text-secondary-navy relative">
            <span className="font-spectral relative">
              View Case Study
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-yellow group-hover:w-full transition-all duration-300"></span>
            </span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  )
}