import { CaseStudyCard } from './CaseStudyCard'

const featuredCaseStudies = [
  {
    slug: 'storehub-membership',
    title: 'StoreHub Membership',
    subtitle: 'Integrating Loyalty Across POS, Mobile, and Web',
    excerpt: 'StoreHub membership had to work across multiple platforms while maintaining each platform existing user patterns. The challenge was orchestrating a cohesive experience across POS checkout flows, mobile ordering, and QR table ordering.',
    image: '/images/projects/storehub-hero.png',
    metrics: [
      { value: '4,350+', label: 'Monthly Member Signups' },
      { value: '88+', label: 'Active Merchant Programs' },
      { value: '190,000+', label: 'Total Member Signups' }
    ]
  },
  {
    slug: 'adobe-design-system',
    title: 'Adobe Design System',
    subtitle: 'Building a scalable component library for enterprise applications',
    excerpt: 'Adobe needed a unified design system that could scale across multiple enterprise products while maintaining consistency and efficiency for design and development teams.',
    image: null,
    metrics: null
  }
]

export const FeaturedWork = () => {

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