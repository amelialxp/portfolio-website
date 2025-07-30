import Link from 'next/link'
import { CaseStudyMetadata } from '../../lib/case-study-metadata'

interface CaseStudyCardProps {
  caseStudy: CaseStudyMetadata
}

export const CaseStudyCard = ({ caseStudy }: CaseStudyCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="text-sm font-semibold mb-1">Thumbnail</div>
          <div className="text-xs">{caseStudy.title}</div>
        </div>
      </div>
      
      <h3 className="font-old-standard text-2xl text-text-body mb-2">
        {caseStudy.title}
      </h3>
      
      <p className="font-spectral text-text-body mb-4 leading-relaxed">
        {caseStudy.excerpt || caseStudy.subtitle}
      </p>
      
      <Link 
        href={`/work/${caseStudy.slug}`}
        className="font-spectral font-bold text-secondary-navy hover:text-primary-yellow transition-colors"
      >
        Read Case Study →
      </Link>
    </div>
  )
}