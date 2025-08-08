export default function AdobeDesignSystem() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Hero */}
        <h1>Adobe Design System</h1>
        <p className="text-lg text-foreground mb-12 max-w-3xl">
          Building a scalable component library for enterprise applications
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 text-sm mb-16">
          <div>
            <h3 className="text-foreground mb-2">Timeline</h3>
            <p className="text-foreground leading-relaxed">6 months</p>
          </div>
          <div>
            <h3 className="text-foreground mb-2">Role</h3>
            <p className="text-foreground leading-relaxed">Lead UX Designer</p>
          </div>
          <div>
            <h3 className="text-foreground mb-2">Platforms & Tools</h3>
            <p className="text-foreground leading-relaxed">Figma, Storybook, React, TypeScript</p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 mb-16">
          <div className="w-full h-64 md:h-80 bg-container rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center text-secondary-gray">
              <div className="text-lg text-secondary-gray mb-2">Hero Image</div>
              <div className="text-sm">Adobe Design System Components</div>
            </div>
          </div>
        </div>

        {/* Problem */}
        <section className="py-16">
          <h2>The Problem</h2>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed">Adobe needed a unified design system that could scale across multiple enterprise products while maintaining consistency and efficiency for design and development teams.</p>
            <p className="text-foreground mb-4 leading-relaxed">The challenge was creating a system that was flexible enough to accommodate different product needs while strict enough to ensure brand consistency.</p>
          </div>
        </section>

        {/* Process */}
        <section className="py-16">
          <h2>Design Process</h2>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed">I led the creation of a comprehensive design system that included:</p>
            <ul className="list-disc pl-6 mb-4 text-foreground space-y-2">
              <li>Core design tokens for colors, typography, and spacing</li>
              <li>Reusable component library with detailed specifications</li>
              <li>Documentation and usage guidelines</li>
              <li>Implementation in both design tools and code</li>
            </ul>
          </div>
        </section>

        {/* Results */}
        <section className="py-16">
          <h2>Results & Impact</h2>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed">The design system successfully unified Adobe enterprise product experience, reducing design and development time while improving consistency across the platform.</p>
            <p className="text-foreground mb-4 leading-relaxed">Key achievements included faster component development, improved design-development handoffs, and a more cohesive user experience across all Adobe enterprise tools.</p>
          </div>
        </section>
      </div>
    </div>
  )
}