import Link from 'next/link'

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1>Work</h1>
        <p className="text-lg text-foreground mb-12 max-w-3xl">
          Selected case studies and projects
        </p>
        <div className="space-y-8">
          <div>
            <h2><Link href="/work/storehub-membership" className="text-secondary-navy hover:text-accent-yellow">StoreHub Membership</Link></h2>
            <p>Integrating Loyalty Across POS, Mobile, and Web</p>
          </div>
          <div>
            <h2><Link href="/work/adobe-design-system" className="text-secondary-navy hover:text-accent-yellow">Adobe Design System</Link></h2>
            <p>Building a scalable component library for enterprise applications</p>
          </div>
        </div>
      </div>
    </div>
  )
}