interface HeroProps {
  title: string
  subtitle: string
  timeline?: string
  role?: string
  tools?: string[]
  image?: string
}

export const Hero = ({ title, subtitle, timeline, role, tools, image }: HeroProps) => {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1>
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-text-body mb-12 max-w-3xl">
          {subtitle}
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 text-sm">
          {timeline && (
            <div>
              <h3 className="text-text-body mb-2">Timeline</h3>
              <p className="text-text-body leading-relaxed">{timeline}</p>
            </div>
          )}
          {role && (
            <div>
              <h3 className="text-text-body mb-2">Role</h3>
              <p className="text-text-body leading-relaxed">{role}</p>
            </div>
          )}
          {tools && (
            <div>
              <h3 className="text-text-body mb-2">Platforms & Tools</h3>
              <p className="text-text-body leading-relaxed">{tools.join(', ')}</p>
            </div>
          )}
        </div>
        
        <div className="mt-16">
          <div className="w-full h-64 md:h-80 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-lg text-text-body mb-2">Hero Image</div>
              <div className="text-sm">{image || 'Placeholder'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}