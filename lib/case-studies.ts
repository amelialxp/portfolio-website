import { getCaseStudyBySlug, getVisibleCaseStudies } from '../content/portfolio-config'

export { getCaseStudyBySlug, getVisibleCaseStudies }

export const getNextCaseStudy = (currentSlug: string) => {
  const caseStudies = getVisibleCaseStudies()
  const currentIndex = caseStudies.findIndex(study => study.slug === currentSlug)
  
  if (currentIndex === -1 || currentIndex === caseStudies.length - 1) {
    return caseStudies[0] // Return first if not found or is last
  }
  
  return caseStudies[currentIndex + 1]
}

export const getPreviousCaseStudy = (currentSlug: string) => {
  const caseStudies = getVisibleCaseStudies()
  const currentIndex = caseStudies.findIndex(study => study.slug === currentSlug)
  
  if (currentIndex === -1 || currentIndex === 0) {
    return caseStudies[caseStudies.length - 1] // Return last if not found or is first
  }
  
  return caseStudies[currentIndex - 1]
}