'use client'

import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'

interface CaseStudyContentProps {
  slug: string
}

export default function CaseStudyContent({ slug }: CaseStudyContentProps) {
  const [ContentComponent, setContentComponent] = useState<React.ComponentType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const loadContent = async () => {
      try {
        let mdxModule
        switch (slug) {
          case 'storehub-membership':
            mdxModule = await import('../../../../content/case-studies/storehub-membership.mdx')
            break
          case 'adobe-design-system':
            mdxModule = await import('../../../../content/case-studies/adobe-design-system.mdx')
            break
          case 'fintech-mobile-app':
            // For now, fallback to storehub since other files don't exist yet
            mdxModule = await import('../../../../content/case-studies/storehub-membership.mdx')
            break
          case 'healthcare-dashboard':
            // For now, fallback to storehub since other files don't exist yet
            mdxModule = await import('../../../../content/case-studies/storehub-membership.mdx')
            break
          default:
            setError(true)
            setLoading(false)
            return
        }
        
        setContentComponent(() => mdxModule.default)
        setLoading(false)
      } catch (err) {
        console.error('Error loading MDX content:', err)
        setError(true)
        setLoading(false)
      }
    }

    loadContent()
  }, [slug])

  if (loading) {
    return (
      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded mb-4"></div>
            <div className="h-6 bg-gray-200 rounded mb-8 w-2/3"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !ContentComponent) {
    notFound()
  }

  return <ContentComponent />
}