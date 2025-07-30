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
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl">
          {subtitle}
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 text-sm">
          {timeline && (
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Timeline</h3>
              <p className="text-gray-600 leading-relaxed">{timeline}</p>
            </div>
          )}
          {role && (
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Role</h3>
              <p className="text-gray-600 leading-relaxed">{role}</p>
            </div>
          )}
          {tools && (
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Platforms & Tools</h3>
              <p className="text-gray-600 leading-relaxed">{tools.join(', ')}</p>
            </div>
          )}
        </div>
        
        <div className="mt-16">
          <div className="w-full h-64 md:h-80 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-lg font-semibold mb-2">Hero Image</div>
              <div className="text-sm">{image || 'Placeholder'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}