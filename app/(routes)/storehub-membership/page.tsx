import Image from 'next/image'

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
          <div className="w-full h-64 md:h-80 relative">
            <Image
              src="/images/projects/storehub-hero.png"
              alt="StoreHub Membership System Overview showing the integrated experience across POS, mobile, and web platforms"
              fill
              quality={90}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1024px"
              className="object-cover"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-secondary-gray italic">
              StoreHub&apos;s membership ecosystem - seamlessly connecting POS, mobile ordering, and web experiences
            </p>
          </div>
        </div>

        {/* Project Overview */}
        <section className="py-16">
          <h2>Project Overview</h2>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed"><strong>Project:</strong> Designed membership system that integrates seamlessly across StoreHub&apos;s complex ecosystem while keeping merchant experience simple</p>
            <p className="text-foreground mb-4 leading-relaxed"><strong>My Role:</strong> Senior Product Designer - owned merchant and consumer experience designs. Transitioned to PM role for Membership starting mid Q2 2025</p>
            <p className="text-foreground mb-4 leading-relaxed"><strong>Timeline:</strong> March 2024 - Present (V1 launched November 2024, ongoing systematic expansion)</p>
            <p className="text-foreground mb-4 leading-relaxed"><strong>Impact:</strong> StoreHub&apos;s Membership program currently has 4,350+ monthly member signups across 88+ active merchant programs</p>
          </div>
        </section>

        {/* Design Challenge & Approach */}
        <section className="py-16">
          <h2>Design Challenge & Approach</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start mt-8">
            {/* Left Column - Content */}
            <div>
              <h3 className="text-foreground mb-4">The Integration Complexity Problem</h3>
              <div className="max-w-none">
                <p className="text-foreground mb-4 leading-relaxed">StoreHub&apos;s membership had to work across multiple platforms while maintaining each platform&apos;s existing user patterns. I needed to orchestrate a cohesive experience across:</p>
                <ul className="list-disc pl-6 mb-4 text-foreground space-y-2">
                  <li><strong className="text-foreground">POS checkout flows</strong> where customers could join and redeem rewards</li>
                  <li><strong className="text-foreground">Beep mobile ordering</strong> with automatic membership enrollment</li>
                  <li><strong className="text-foreground">QR table ordering</strong> that connected anonymous diners to their membership profiles</li>
                  <li><strong className="text-foreground">BackOffice management</strong> where merchants configured their programs</li>
                </ul>
              </div>

              <h3 className="text-foreground mb-4 mt-8">My Design Strategy</h3>
              <div className="max-w-none">
                <p className="text-foreground mb-4 leading-relaxed">I approached this as a systems design challenge rather than individual feature design. My strategy was <strong className="text-foreground">&ldquo;complexity behind simplicity&rdquo;</strong> - leverage our integration advantages while keeping the merchant and customer experience intuitive.</p>
              </div>
            </div>

            {/* Right Column - Visual 1 */}
            <div className="mt-8 md:mt-0">
              <div className="w-full">
                <Image
                  src="/images/projects/membership-v1.png"
                  alt="Iceberg diagram illustrating the hidden complexity beneath StoreHub's membership system - showing visible customer touchpoints above the surface while revealing the intricate technical architecture, data flows, and system integrations required beneath to orchestrate a seamless membership experience"
                  width={600}
                  height={800}
                  quality={90}
                  className="w-full h-auto object-contain"
                />
                <div className="mt-4 text-center">
                  <p className="text-sm text-secondary-gray italic">
                    The iceberg of membership complexity - simple customer experience above, intricate system orchestration below
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process & Solutions */}
        <section className="py-16">
          <h2>Design Process & Solutions</h2>
          
          <h3 className="text-foreground mb-4 mt-8">Discovery: What do Merchants actually Want vs Need?</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed">Through approx 8 merchant visits interviews conducted over a 3 month period, our team uncovered insights that shaped the entire design approach:</p>
            
            <h4 className="text-foreground mb-3 mt-6 font-semibold">Key research findings:</h4>
            <ul className="list-disc pl-6 mb-4 text-foreground space-y-2">
              <li>Every merchant we spoke to had a different idea of their ideal membership configuration.</li>
              <li>Merchants wanted their members to feel special but were overwhelmed by loyalty program setup complexity</li>
              <li>Birthday collection was universally desired for targeted campaigns, but merchants feared signup friction</li>
            </ul>
            
            <h4 className="text-foreground mb-3 mt-6 font-semibold">Critical insight:</h4>
            <p className="text-foreground mb-4 leading-relaxed">Rather than designing one &ldquo;best&rdquo; signup method, merchants needed <strong className="text-foreground">multiple enrollment pathways</strong> that matched their specific customer interaction patterns.</p>
          </div>

          <h3 className="text-foreground mb-4 mt-8">Design Solution 1: Multiple Enrollment Pathways for Diverse Merchants</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed"><strong>Problem:</strong> Different merchant types had completely different customer interaction patterns - F&B could use QR ordering, but retail needed POS-based solutions</p>
            <p className="text-foreground mb-4 leading-relaxed"><strong>Design approach:</strong> Created multiple enrollment pathways that matched how different merchant types actually interacted with their customers.</p>
            
            <h4 className="text-foreground mb-3 mt-6 font-semibold">Key design decisions:</h4>
            <ul className="list-disc pl-6 mb-4 text-foreground space-y-2">
              <li>QR ordering auto-enrollment for F&B merchants using table ordering</li>
              <li>POS Seamless QR codes for retail checkout flows</li>
              <li>Direct join links for merchant-specific engagement strategies</li>
              <li>Receipt QRs as the final touch point for joining so a customer can still sign up even after they have left the store.</li>
              <li>Clear membership join source tracking that&apos;s visible to both merchants and StoreHub.</li>
            </ul>
            
            <p className="text-foreground mb-4 leading-relaxed"><strong>Impact:</strong> Design enabled diverse enrollment pathways that generated 190,000+ total member signups across business types, with data showing distinct usage patterns that validate the multi-pathway approach.</p>
          </div>

          {/* Visual 2 Placeholder */}
          <div className="mt-12 mb-12">
            <div className="w-full h-64 md:h-80 bg-container rounded-lg shadow-lg flex items-center justify-center border border-secondary-gray">
              <div className="text-center text-secondary-gray">
                <div className="text-lg text-secondary-gray mb-2">Visual 2</div>
                <div className="text-sm max-w-md">Customer Journey by Merchant Type - Side-by-side flows showing F&B vs Retail enrollment paths</div>
              </div>
            </div>
          </div>

          <h3 className="text-foreground mb-4 mt-8">Design Solution 2: Flexible Reward Architecture Within System Constraints</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed"><strong>Problem:</strong> Merchants wanted different types of membership programs - points-based systems, cashback, discounts, and free items - but StoreHub&apos;s existing promotion system wasn&apos;t designed for membership rewards.</p>
            <p className="text-foreground mb-4 leading-relaxed"><strong>Design approach:</strong> Rather than rebuilding the entire rewards infrastructure, I designed membership rewards to work within the existing promotion framework while hiding the complexity from merchants.</p>
            
            <h4 className="text-foreground mb-3 mt-6 font-semibold">Key design decisions:</h4>
            <ul className="list-disc pl-6 mb-4 text-foreground space-y-2">
              <li><strong>Four reward types structure:</strong> Welcome reward, birthday reward, points store rewards, and tier upgrade rewards - covering the main merchant use cases discovered in interviews</li>
              <li><strong>Mandatory welcome reward:</strong> Required merchants to offer signup incentive, ensuring customer value proposition</li>
              <li><strong>Simplified configuration:</strong> One-click enable with pre-configured defaults, merchants can customize but don&apos;t need to understand the underlying promotion mechanics</li>
              <li><strong>Promotion system adaptation:</strong> Mapped membership rewards to existing &ldquo;amount off&rdquo; and &ldquo;percentage off&rdquo; promotion types with membership-specific constraints (single use, specific validity periods, targeted to individual members)</li>
              <li><strong>Design trade-offs:</strong> Had to limit reward types to work within existing promotion constraints, and merchants still need to navigate to promotion pages for advanced customization - not ideal, but enabled faster launch while improving the existing promo UI along the way.</li>
            </ul>
            
            <h4 className="text-foreground mb-3 mt-6 font-semibold">Impact:</h4>
            <ul className="list-disc pl-6 mb-4 text-foreground space-y-2">
              <li>Enabled flexible membership programs without rebuilding core systems</li>
              <li>Onboarding consultants could set up merchant programs efficiently using simplified flow</li>
              <li>Merchants could offer both points-based and cashback programs within one system</li>
            </ul>
          </div>

          {/* Visual 3 Placeholder */}
          <div className="mt-12 mb-12">
            <div className="w-full h-64 md:h-80 bg-container rounded-lg shadow-lg flex items-center justify-center border border-secondary-gray">
              <div className="text-center text-secondary-gray">
                <div className="text-lg text-secondary-gray mb-2">Visual 3</div>
                <div className="text-sm max-w-md">Reward Types Overview - Four panels showing Welcome, Birthday, Points Store, and Tier Upgrade rewards</div>
              </div>
            </div>
          </div>
        </section>

        {/* Cross-Functional Design Leadership */}
        <section className="py-16">
          <h2>Cross-Functional Design Leadership</h2>
          
          <h3 className="text-foreground mb-4 mt-8">Becoming the Go-To Design Expert</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed">As the membership system&apos;s complexity grew, I became the primary resource for questions across engineering, marketing, sales, and merchant success teams. My deep understanding of every integration point and ability to communicate with our China-based engineering team made me the natural bridge between technical implementation and business needs.</p>
          </div>

          <h3 className="text-foreground mb-4 mt-8">Design-to-Product Evolution</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed">When the PM departed, I transitioned to product ownership within two weeks because of my comprehensive system knowledge and established stakeholder relationships. This experience taught me to think beyond interfaces to full product strategy, balancing technical constraints with business priorities.</p>
          </div>
        </section>

        {/* Results & Design Impact */}
        <section className="py-16">
          <h2>Results & Design Impact</h2>
          
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

          <h3 className="text-foreground mb-4 mt-8">Project Impact</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed">This membership system successfully handles 4,350+ monthly member acquisitions across 88 active merchant programs. The multi-pathway enrollment strategy ensures every merchant can offer membership in a way that feels natural to their business.</p>
          </div>

          <h3 className="text-foreground mb-4 mt-8">What This Really Means</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed">Seeing merchants like Binq and Starwise successfully use the system to reward loyal customers reminds me why this design work matters. Each signup represents a customer who chose to build a relationship with a local business, and our design either enables or blocks that connection.</p>
          </div>

          {/* Visual 4 Placeholder */}
          <div className="mt-12 mb-12">
            <div className="w-full h-64 md:h-80 bg-container rounded-lg shadow-lg flex items-center justify-center border border-secondary-gray">
              <div className="text-center text-secondary-gray">
                <div className="text-lg text-secondary-gray mb-2">Visual 4</div>
                <div className="text-sm max-w-md">Human Element - Photo or illustration showing the real impact with merchants and customers using the system</div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Opportunities */}
        <section className="py-16">
          <h2>Future Opportunities</h2>
          
          <h3 className="text-foreground mb-4 mt-8">Addressing Remaining Friction Points</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed">Through ongoing merchant feedback and data analysis, I&apos;ve identified key areas for improvement. Malaysian merchants still find the POS QR signup flow unintuitive and limiting, leading to my current work on mobile web parity to reduce app-download friction. This represents the kind of continuous optimization that complex systems require.</p>
          </div>

          <h3 className="text-foreground mb-4 mt-8">Continuing to Serve Merchants Better</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed">With 9,900+ merchants still not using membership, there are thousands of businesses we haven&apos;t helped yet. Understanding their barriers - whether it&apos;s complexity, cost, or simply not knowing the value - drives my continued work on solutions like mobile web signup that remove friction.</p>
          </div>
        </section>
      </div>
    </div>
  )
}