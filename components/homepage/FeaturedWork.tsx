import { CaseStudyCard } from './CaseStudyCard'

const featuredCaseStudies = [
  {
    slug: 'storehub-membership',
    title: 'StoreHub Membership',
    subtitle: 'Integrating Loyalty Across POS, Mobile, and Web',
    excerpt: 'StoreHub membership had to work across multiple platforms while maintaining each platform existing user patterns. The challenge was orchestrating a cohesive experience across POS checkout flows, mobile ordering, and QR table ordering.',
    image: '/images/projects/storehub-membership/storehub-hero.png',
    tags: ['2024-2025', 'Cross-Platform Integration', 'Product Strategy', 'User Research', 'Technical Constraints'],
    metrics: [
      { value: '4,350+', label: 'Monthly Member Signups' },
      { value: '88+', label: 'Active Merchant Programs' }
    ]
  },
  {
    slug: 'bo-design-system',
    title: 'Building a Design System That Actually Gets Used',
    subtitle: 'Eliminating systematic waste while maintaining feature delivery',
    excerpt: 'Transformed BackOffice from dual-framework chaos to unified component standards while maintaining daily product delivery. Established mobile responsive framework covering 50% of traffic previously locked out of critical workflows.',
    image: '/images/projects/bo-design-system/bo-ds-hero.png',
    tags: ['2024', 'Design Systems', 'Mobile-First', 'Developer Collaboration', 'Incremental Change'],
    metrics: [
      { value: '70%', label: 'Platform Components Standardized' },
      { value: '50%', label: 'Mobile Traffic Now Supported' }
    ]
  },
  {
    slug: 'ai-design-review',
    title: "I Cloned My Boss's Design Reviews (And She Actually Loved It)",
    subtitle: 'From 3-day delays to instant feedback using AI',
    excerpt: 'Our CTO gave excellent design feedback, but her schedule created 2-3 day delays for every iteration. I built an AI clone of her review style that eliminated design bottlenecks while maintaining quality standards.',
    image: '/images/projects/ai-design-review/clone-hero.png',
    tags: ['2025', 'AI-Assisted Coding', 'Process Improvement', 'LLMs'],
    metrics: [
      { value: '50%', label: 'Reduction in CTO Comments' },
      { value: '2-3 days', label: 'Review Delays Eliminated' }
    ]
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