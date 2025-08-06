import { getFeaturedCaseStudies } from '../../lib/case-study-metadata'
import { CaseStudyCard } from './CaseStudyCard'

export const FeaturedWork = () => {
  const featuredCaseStudies = getFeaturedCaseStudies()

  return (
    <section id="work" className="px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-32">
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