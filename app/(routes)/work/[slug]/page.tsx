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
    <div className="min-h-screen bg-primary-background">
      {/* Header/Navigation */}
      <header className="px-8 py-6">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-borel text-base text-text-body hover:text-secondary-navy transition-colors">
            amelia liw
          </Link>
          <div className="flex gap-8">
            <Link href="/" className="font-spectral text-secondary-navy hover:text-secondary-navy transition-colors group relative">
              <span className="relative">
                Work
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-yellow transition-all duration-300"></span>
              </span>
            </Link>
            <Link href="/about" className="font-spectral text-secondary-navy hover:text-secondary-navy transition-colors group relative">
              <span className="relative">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-yellow group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Case Study Content */}
      <main>
        <CaseStudyContent slug={slug} />
        
        {/* Footer */}
        <footer className="px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-spectral text-gray-500 text-sm">
              © 2025 Amelia Liw. Designed and built with care and Claude Code 🤖.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}