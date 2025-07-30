import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCaseStudyBySlug } from '../../../../content/portfolio-config'
import CaseStudyContent from './CaseStudyContent'

export async function generateStaticParams() {
  // This will generate static pages for each case study
  return [
    { slug: 'storehub-membership' },
    { slug: 'adobe-design-system' },
    { slug: 'fintech-mobile-app' },
    { slug: 'healthcare-dashboard' },
  ]
}

interface CaseStudyPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const caseStudy = getCaseStudyBySlug(slug)
  
  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Case Study Content */}
      <main>
        <CaseStudyContent slug={slug} />
      </main>
    </div>
  )
}