export default function StorehubMembership() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Hero */}
        <h1>StoreHub Membership</h1>
        <p className="text-lg text-foreground mb-12 max-w-3xl">
          Integrating Loyalty Across POS, Mobile, and Web
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 text-sm mb-16">
          <div>
            <h3 className="text-foreground mb-2">Timeline</h3>
            <p className="text-foreground leading-relaxed">March 2024 - Present</p>
          </div>
          <div>
            <h3 className="text-foreground mb-2">Role</h3>
            <p className="text-foreground leading-relaxed">Senior Product Designer → Product Manager</p>
          </div>
          <div>
            <h3 className="text-foreground mb-2">Platforms & Tools</h3>
            <p className="text-foreground leading-relaxed">Figma, StoreHub POS, Beep Mobile, QR Ordering, BackOffice</p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 mb-16">
          <div className="w-full h-64 md:h-80 bg-container rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center text-secondary-gray">
              <div className="text-lg text-secondary-gray mb-2">Hero Image</div>
              <div className="text-sm">StoreHub Membership System Overview</div>
            </div>
          </div>
        </div>

        {/* Problem */}
        <section className="py-16">
          <h2>The Problem</h2>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed">StoreHub membership had to work across multiple platforms while maintaining each platform existing user patterns. The challenge was orchestrating a cohesive experience across:</p>
            <ul className="list-disc pl-6 mb-4 text-foreground space-y-2">
              <li><strong className="text-foreground">POS checkout flows</strong> where customers could join and redeem rewards</li>
              <li><strong className="text-foreground">Beep mobile ordering</strong> with automatic membership enrollment</li>
              <li><strong className="text-foreground">QR table ordering</strong> that connected anonymous diners to their membership profiles</li>
              <li><strong className="text-foreground">BackOffice management</strong> where merchants configured their programs</li>
            </ul>
            <p className="text-foreground mb-4 leading-relaxed">My design strategy was <strong className="text-foreground">complexity behind simplicity</strong> - leverage our integration advantages while keeping the merchant and customer experience intuitive.</p>
          </div>
        </section>

        {/* Process */}
        <section className="py-16">
          <h2>Discovery: What do Merchants Actually Want vs Need?</h2>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed">Through approximately 8 merchant interview visits conducted over a 3-month period, I uncovered insights that shaped the entire design approach.</p>
            <h3 className="text-foreground mb-3 mt-6">Key Research Findings:</h3>
            <ul className="list-disc pl-6 mb-4 text-foreground space-y-2">
              <li>Every merchant we spoke to had a different idea of their ideal membership configuration</li>
              <li>Merchants wanted their members to feel special but were overwhelmed by loyalty program setup complexity</li>
              <li>Birthday collection was universally desired for targeted campaigns, but merchants feared signup friction</li>
            </ul>
            <h3 className="text-foreground mb-3 mt-6">Critical Insight:</h3>
            <p className="text-foreground mb-4 leading-relaxed">Rather than designing one best signup method, merchants needed <strong className="text-foreground">multiple enrollment pathways</strong> that matched their specific customer interaction patterns.</p>
          </div>
        </section>

        {/* Results */}
        <section className="py-16">
          <h2>Results & Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-container p-6 rounded-lg shadow-sm border border-secondary-gray">
              <h3 className="mb-2">4,350+</h3>
              <div className="text-foreground mb-1">Monthly Member Signups</div>
              <div className="text-sm text-secondary-gray">Active member acquisitions across all pathways</div>
            </div>
            <div className="bg-container p-6 rounded-lg shadow-sm border border-secondary-gray">
              <h3 className="mb-2">88+</h3>
              <div className="text-foreground mb-1">Active Merchant Programs</div>
              <div className="text-sm text-secondary-gray">Merchants successfully using the membership system</div>
            </div>
            <div className="bg-container p-6 rounded-lg shadow-sm border border-secondary-gray">
              <h3 className="mb-2">190,000+</h3>
              <div className="text-foreground mb-1">Total Member Signups</div>
              <div className="text-sm text-secondary-gray">Cross-platform enrollment validating multi-pathway approach</div>
            </div>
          </div>
          
          <div className="max-w-none">
            <h3 className="text-foreground mb-3 mt-6">What This Really Means</h3>
            <p className="text-foreground mb-4 leading-relaxed">Seeing merchants like Binq and Starwise successfully use the system to reward loyal customers reminds me why this design work matters. Each signup represents a customer who chose to build a relationship with a local business, and our design either enables or blocks that connection.</p>
          </div>
        </section>
      </div>
    </div>
  )
}