import { getVisibleCaseStudies } from '../content/portfolio-config'

export interface CaseStudyMetadata {
  slug: string
  title: string
  subtitle: string
  timeline?: string
  role?: string
  tools?: string[]
  image?: string
  excerpt?: string
  metrics?: {
    label: string
    value: string
    description?: string
  }[]
}

// Hardcoded metadata extracted from our MDX files
// This would ideally be dynamic, but for simplicity we'll maintain this manually
const caseStudyMetadata: Record<string, CaseStudyMetadata> = {
  'storehub-membership': {
    slug: 'storehub-membership',
    title: 'StoreHub Membership',
    subtitle: 'Integrating Loyalty Across POS, Mobile, and Web',
    timeline: 'March 2024 - Present',
    role: 'Senior Product Designer → Product Manager',
    tools: ['Figma', 'StoreHub POS', 'Beep Mobile', 'QR Ordering', 'BackOffice'],
    image: '/images/projects/storehub-hero.png',
    excerpt: 'Designed a membership system that integrates seamlessly across StoreHub\'s complex ecosystem, generating 4,350+ monthly member signups across 88+ active merchant programs.',
    metrics: [
      { label: 'Monthly Signups', value: '4,350+' },
      { label: 'Active Programs', value: '88+' },
      { label: 'Total Members', value: '190K+' }
    ]
  },
  'fintech-mobile-app': {
    slug: 'fintech-mobile-app',
    title: 'Fintech Mobile Banking',
    subtitle: 'Simplifying Personal Finance Management',
    timeline: '4 months',
    role: 'Lead UX Designer',
    tools: ['Figma', 'Principle', 'UserTesting', 'Miro'],
    image: '/images/projects/fintech-hero.jpg',
    excerpt: 'Redesigned a mobile banking app to reduce task completion time by 60% and increase user satisfaction scores from 3.2 to 4.7 stars.',
    metrics: [
      { label: 'Task Time Reduction', value: '60%' },
      { label: 'User Satisfaction', value: '4.7★' },
      { label: 'Daily Active Users', value: '125K+' }
    ]
  },
  'healthcare-dashboard': {
    slug: 'healthcare-dashboard',
    title: 'Healthcare Analytics Dashboard',
    subtitle: 'Data Visualization for Medical Professionals',
    timeline: '6 months',
    role: 'Senior Product Designer',
    tools: ['Figma', 'D3.js', 'Tableau', 'InVision'],
    image: '/images/projects/healthcare-hero.jpg',
    excerpt: 'Created an intuitive dashboard that helps medical professionals analyze patient data 40% faster, improving decision-making in critical care scenarios.',
    metrics: [
      { label: 'Analysis Speed', value: '40%' },
      { label: 'User Adoption', value: '89%' },
      { label: 'Hospitals Using', value: '45+' }
    ]
  }
}

export const getCaseStudyMetadata = (slug: string): CaseStudyMetadata | null => {
  return caseStudyMetadata[slug] || null
}

export const getFeaturedCaseStudies = (): CaseStudyMetadata[] => {
  const visibleCaseStudies = getVisibleCaseStudies()
  return visibleCaseStudies
    .filter(study => study.featured)
    .map(study => getCaseStudyMetadata(study.slug))
    .filter((metadata): metadata is CaseStudyMetadata => metadata !== null)
    .slice(0, 3) // Show max 3 on homepage
}

export const getAllCaseStudyMetadata = (): CaseStudyMetadata[] => {
  const visibleCaseStudies = getVisibleCaseStudies()
  return visibleCaseStudies
    .map(study => getCaseStudyMetadata(study.slug))
    .filter((metadata): metadata is CaseStudyMetadata => metadata !== null)
}