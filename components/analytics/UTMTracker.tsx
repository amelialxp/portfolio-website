'use client'

import { useEffect } from 'react'
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function UTMTrackerCore() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const utmSource = searchParams.get('utm_source')
    const utmMedium = searchParams.get('utm_medium') 
    const utmCampaign = searchParams.get('utm_campaign')
    const utmTerm = searchParams.get('utm_term')
    const utmContent = searchParams.get('utm_content')

    if (typeof window !== 'undefined' && window.gtag && (utmSource || utmMedium || utmCampaign || utmTerm || utmContent)) {
      window.gtag('event', 'page_view', {
        custom_parameter_1: utmSource,
        custom_parameter_2: utmMedium, 
        custom_parameter_3: utmCampaign,
        custom_parameter_4: utmTerm,
        custom_parameter_5: utmContent,
        page_title: document.title,
        page_location: window.location.href
      })
    }
  }, [searchParams])

  return null
}

export default function UTMTracker() {
  return (
    <Suspense fallback={null}>
      <UTMTrackerCore />
    </Suspense>
  )
}