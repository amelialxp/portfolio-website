import { getFeaturedCaseStudies } from '../../lib/case-study-metadata'
import { CaseStudyCard } from './CaseStudyCard'

export const FeaturedWork = () => {
  const featuredCaseStudies = getFeaturedCaseStudies()

  return (
    <section className="px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-old-standard text-4xl text-text-body mb-12 text-center">
          Selected Work
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredCaseStudies.map((caseStudy) => (
            <CaseStudyCard 
              key={caseStudy.slug} 
              caseStudy={caseStudy} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}