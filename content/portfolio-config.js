export const caseStudies = [
  {
    slug: 'storehub-membership',
    title: 'StoreHub Membership',
    subtitle: 'Integrating Loyalty Across POS, Mobile, and Web',
    visible: true,
    featured: true,
    order: 1,
  },
  {
    slug: 'adobe-design-system',
    title: 'Adobe Design System',
    subtitle: 'Scalable component library for enterprise applications',
    visible: true,
    featured: false,
    order: 2,
  },
  {
    slug: 'fintech-mobile-app',
    title: 'Fintech Mobile App',
    subtitle: 'User-centered financial management experience',
    visible: true,
    featured: true,
    order: 3,
  },
  {
    slug: 'healthcare-dashboard',
    title: 'Healthcare Dashboard',
    subtitle: 'Data visualization for medical professionals',
    visible: true,
    featured: true,
    order: 4,
  },
]

export const getVisibleCaseStudies = () => {
  return caseStudies
    .filter(study => study.visible)
    .sort((a, b) => a.order - b.order)
}

export const getCaseStudyBySlug = (slug) => {
  return caseStudies.find(study => study.slug === slug)
}