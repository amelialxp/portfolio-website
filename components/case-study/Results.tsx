interface ResultsProps {
  metrics?: {
    label: string
    value: string
    description?: string
  }[]
  children?: React.ReactNode
}

export const Results = ({ metrics, children }: ResultsProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Results & Impact
        </h2>
        
        {metrics && (
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {metric.value}
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  {metric.label}
                </div>
                {metric.description && (
                  <div className="text-sm text-gray-600">
                    {metric.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        {children && (
          <div className="prose prose-lg max-w-none text-gray-600">
            {children}
          </div>
        )}
      </div>
    </section>
  )
}