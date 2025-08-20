import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function DesignSystem() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <h1>Building a Design System That Actually Gets Used</h1>
        <p className="text-lg text-foreground mb-12 max-w-3xl">
          Eliminating systematic waste while maintaining feature delivery
        </p>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="w-full">
          <Image
            src="/images/projects/bo-design-system/bo-ds-hero.png"
            alt="BackOffice Design System Overview showing the component standardization and responsive framework implementation"
            width={800}
            height={600}
            quality={100}
            priority={true}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 800px"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-secondary-gray italic">
            From manual markup to reusable systems - the evolution of BackOffice design infrastructure
          </p>
        </div>
      </div>

      {/* Project Overview - Full Width White Section */}
      <section className="w-full py-12 bg-white shadow-lg">
        <div className="max-w-4xl mx-auto px-6">
          <h2>Project Overview</h2>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed"><strong>Project:</strong> Created design foundations for StoreHub&apos;s BackOffice while maintaining daily product delivery</p>
            <p className="text-foreground mb-4 leading-relaxed"><strong>My Role:</strong> Senior Product Designer leading component standardization and responsive design implementation</p>
            <p className="text-foreground mb-4 leading-relaxed"><strong>Timeline:</strong> January 2024 - Dec 2024</p>
            <p className="text-foreground mb-4 leading-relaxed"><strong>Impact:</strong> Transformed BackOffice from dual-framework chaos to unified component standards, established mobile responsive framework, streamlined design-to-development workflow</p>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <div className="max-w-4xl mx-auto px-6">
        <section className="py-12">
          <h2>The Challenge: BackOffice&apos;s Complex Reality</h2>
          
          <h3 className="text-foreground mb-4 mt-8">The Business Context</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed">BackOffice is StoreHub&apos;s merchant-facing command center where business owners and managers configure every aspect of their operations - menu displays, stock transfers, promotions, and sales tracking. It&apos;s the tool that determines how every aspect of their business operates through StoreHub&apos;s ecosystem.</p>
            <p className="text-foreground mb-4 leading-relaxed">The users range from tech-savvy restaurant chains to small retail shop owners. With such diverse user needs and business-critical functionality, consistency and usability weren&apos;t just nice-to-have features - they directly impacted merchant success.</p>
          </div>

          <h3 className="text-foreground mb-4 mt-8">The Technical Part</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed">BackOffice had evolved over years, with two different frameworks coexisting across the platform, referred to as &quot;1.0&quot; and &quot;2.0&quot;. Some pages ran both frameworks simultaneously. The modernization directive was clear: new pages should use 2.0, but with daily feature delivery pressure, implementation was inconsistent across designers and developers.</p>
          </div>

          {/* v1 Image */}
          <div className="w-full my-8">
            <Image
              src="/images/projects/bo-design-system/bo-ds-v1.png"
              alt="Button anarchy: Every designer picked their own style"
              width={800}
              height={600}
              quality={100}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 800px"
              className="w-full h-auto object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <p className="text-sm text-secondary-gray italic">
                Button anarchy: Every designer picked their own style
              </p>
            </div>
          </div>

          <h3 className="text-foreground mb-4 mt-8">The Design Debt Pile-on</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed">Designers in the team had historically had to ship fast under intense time pressure. Sometimes this meant working directly from screenshots with quick markup - &quot;add button here&quot; or &quot;new section between this and this&quot; - rather than comprehensive Figma documentation. While this kept features moving, it created technical debt that slowed down future work.</p>
            <p className="text-foreground mb-4 leading-relaxed">I saw this as an opportunity to invest time upfront for long-term efficiency gains while maintaining feature delivery velocity.</p>
          </div>

          <h3 className="text-foreground mb-4 mt-8">The Mobile Reality Check</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed">50% of BackOffice traffic came from mobile devices, but critical merchant workflows were completely unusable on phones. Even though some stakeholders argued that configuration wasn&apos;t something done on your phone, the reality was many Malaysian business owners either don&apos;t have computers or don&apos;t have time to sit behind one during busy business hours.</p>
          </div>
        </section>
      </div>

      {/* v2 Image */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="w-full my-12">
          <Image
            src="/images/projects/bo-design-system/bo-ds-v2.png"
            alt="53% of merchants accessed BackOffice on mobile, but got desktop-only interfaces"
            width={800}
            height={600}
            quality={100}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 800px"
            className="w-full h-auto object-contain rounded-lg"
          />
          <div className="mt-4 text-center">
            <p className="text-sm text-secondary-gray italic">
              53% of merchants accessed BackOffice on mobile, but got desktop-only interfaces
            </p>
          </div>
        </div>
      </div>

      {/* The Approach */}
      <div className="max-w-4xl mx-auto px-6">
        <section className="py-12">
          <h2>The Approach: Building Standards Under Real Constraints</h2>
          
          <h3 className="text-foreground mb-4 mt-8">The Reality Check</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed">With day-to-day product responsibilities shipping membership features, compliance requirements, and ongoing merchant requests. I couldn&apos;t disappear for months to build the perfect design system. I needed to improve how we worked, while maintaining delivery velocity.</p>
          </div>

          <h3 className="text-foreground mb-4 mt-8">My &quot;Build-as-We-Go&quot; Strategy</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed">Instead of the theoretical perfect approach, here&apos;s what I did:</p>
            <ul className="list-disc pl-6 mb-4 text-foreground space-y-2">
              <li><strong className="text-foreground">Component Documentation:</strong> As I designed new features, I documented reusable patterns and created proper Figma components</li>
              <li><strong className="text-foreground">Opportunistic Updates:</strong> When touching existing pages for feature work, I updated them to unified standards</li>
              <li><strong className="text-foreground">Cross-Functional Design:</strong> Created components that worked for both design consistency AND developer efficiency</li>
              <li><strong className="text-foreground">Developer Buy-In:</strong> Connected directly with our China-based dev team to understand their workflow challenges and make improvements collaboratively rather than throwing designs over a wall and calling it a day.</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Design Process & Solutions */}
      <div className="max-w-4xl mx-auto px-6">
        <section className="py-12">
          <h2>Design Process & Solutions</h2>
          
          <h3 className="text-foreground mb-4 mt-8">Component Work: Getting Everyone on the Same Page</h3>
          <div className="max-w-none">
            <h4 className="text-foreground mb-3 mt-6 font-semibold">Examples of the Cleanup</h4>
            <ul className="list-disc pl-6 mb-4 text-foreground space-y-3">
              <li>BackOffice had 7+ different button styles because every designer picked whatever they wanted. I consolidated these into <strong className="text-foreground">4 types with clear usage rules</strong>.</li>
              <li>We had 3 different modal layouts with 5+ width variations - I worked with the dev team to standardize on <strong className="text-foreground">one layout for 1.0 and one for 2.0, with two sizes</strong>.</li>
              <li>Forms and cards had inconsistent input styling and spacing (some pages used 24px grids, others 10px??). This had to go - from now on we were <strong className="text-foreground">8pt grid all the way</strong>.</li>
            </ul>
          </div>

          <h3 className="text-foreground mb-4 mt-8">Mobile Framework (Because 50% of Users Were on Phones)</h3>
          <div className="max-w-none">
            <h4 className="text-foreground mb-3 mt-6 font-semibold">Establishing Responsive Standards</h4>
            <p className="text-foreground mb-4 leading-relaxed">I established desktop (1024px+), tablet (768-1023px), and mobile (below 768px) breakpoints. Before this, designers weren&apos;t even specifying mobile dimensions.</p>
            
            <h4 className="text-foreground mb-3 mt-6 font-semibold">Specific Mobile Improvements</h4>
            <p className="text-foreground mb-4 leading-relaxed">Customer info and editing customer details was a key section I pushed to move from 1.0 to 2.0 UI specifically for mobile usability. This was due to a combination of two factors - looking into the data of which pages merchants were viewing on mobile, and the fact that we had to edit parts of those pages to accommodate changes relating to Membership.</p>
            
            <h4 className="text-foreground mb-3 mt-6 font-semibold">Setting the Rules Across the Team</h4>
            <p className="text-foreground mb-4 leading-relaxed">For every other feature the product design team worked on, I made sure we had to specify how content would properly flow in mobile view.</p>
          </div>

          {/* v3 Image */}
          <div className="w-full my-8">
            <Image
              src="/images/projects/bo-design-system/bo-ds-v3.png"
              alt="The Customer Details page was one of the pages that has been successfully rebuilt in a properly responsive manner"
              width={800}
              height={600}
              quality={100}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 800px"
              className="w-full h-auto object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <p className="text-sm text-secondary-gray italic">
                The Customer Details page was one of the pages that has been successfully rebuilt in a properly responsive manner
              </p>
            </div>
          </div>

          <h3 className="text-foreground mb-4 mt-8">Documentation Evolution</h3>
          <div className="max-w-none">
            <h4 className="text-foreground mb-3 mt-6 font-semibold">From Screenshots to Proper Components</h4>
            <p className="text-foreground mb-4 leading-relaxed">We moved from the old &quot;screenshot existing page and mark up changes&quot; approach to building proper Figma components with usage guidelines and responsive specs.</p>
            
            <h4 className="text-foreground mb-3 mt-6 font-semibold">Storybook Implementation</h4>
            <p className="text-foreground mb-4 leading-relaxed">This is a more recent development that I&apos;m happy to say was proposed by the developers after a couple of months of standardising things on the design side. We now have Storybook and Chromatic documenting the actual coded components alongside the Figma library.</p>
          </div>
        </section>
      </div>

      {/* v4 Image */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="w-full my-12">
          <Image
            src="/images/projects/bo-design-system/bo-ds-v4.png"
            alt="Having components properly documented for both designers and developers is a big step towards creating a uniform experience for users"
            width={800}
            height={600}
            quality={100}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 800px"
            className="w-full h-auto object-contain rounded-lg"
          />
          <div className="mt-4 text-center">
            <p className="text-sm text-secondary-gray italic">
              Having components properly documented for both designers and developers is a big step towards creating a uniform experience for users
            </p>
          </div>
        </div>
      </div>

      {/* Results & Impact - Full Width White Section */}
      <section className="w-full py-12 bg-white shadow-lg">
        <div className="max-w-4xl mx-auto px-6">
          <h2>Results & Design Impact</h2>
          
          <div className="grid grid-cols-2 gap-12 mb-12">
            <div className="text-left">
              <h3 className="mb-2">
                70%
              </h3>
              <div className="font-spectral text-sm text-secondary-gray leading-tight">
                Platform Components Standardized
              </div>
            </div>
            <div className="text-left">
              <h3 className="mb-2">
                50%
              </h3>
              <div className="font-spectral text-sm text-secondary-gray leading-tight">
                Mobile Traffic Now Supported
              </div>
            </div>
          </div>

          <h3 className="text-foreground mb-4 mt-8">Quantified Development Efficiency</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed"><strong>Component Rebuilding Waste:</strong> Reduced from custom builds on every feature to standardized implementation across 70% of platform</p>
            <p className="text-foreground mb-4 leading-relaxed"><strong>Design Team Velocity:</strong> Eliminated &quot;which component do I use?&quot; decisions through single source of truth component library</p>
          </div>

          <h3 className="text-foreground mb-4 mt-8">Mobile-First Business Impact</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed"><strong>User Coverage:</strong> Established responsive standards covering 50% of BackOffice traffic previously locked out of critical workflows</p>
            <p className="text-foreground mb-4 leading-relaxed"><strong>Feature Delivery:</strong> Every new feature now ships mobile-responsive by default, preventing accumulation of mobile technical debt</p>
          </div>

          <h3 className="text-foreground mb-4 mt-8">Organizational Process Change</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed"><strong>Design Workflow:</strong> Transitioned from screenshot-based markup to systematic component usage</p>
            <p className="text-foreground mb-4 leading-relaxed"><strong>Development Consistency:</strong> New features launch with standardized components instead of one-off implementations</p>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <section className="py-12">
          <h2>Key Learnings and Strategic Growth</h2>
          
          <h3 className="text-foreground mb-4 mt-8">Building Across Technical and Cultural Boundaries</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed">Working with our China-based development team taught me that good design systems aren&apos;t just about visual consistency - they need to make sense within existing technical workflows. Once I started understanding how components actually get built and maintained, my design decisions became much more collaborative and realistic.</p>
          </div>

          <h3 className="text-foreground mb-4 mt-8">Making Change Happen in Complex Organizations</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed">The biggest challenge wasn&apos;t designing better components - it was figuring out how to improve things while everyone was still trying to ship features every day. You can&apos;t just pause business to fix design problems, so I learned to build improvements into the work we were already doing.</p>
          </div>
        </section>
      </div>
    </div>
  )
}