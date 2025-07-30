interface ProcessProps {
  title: string
  children: React.ReactNode
}

export const Process = ({ title, children }: ProcessProps) => {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {title}
        </h2>
        <div className="prose prose-lg max-w-none text-gray-600">
          {children}
        </div>
      </div>
    </section>
  )
}