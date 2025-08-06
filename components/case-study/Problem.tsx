interface ProblemProps {
  children: React.ReactNode
}

export const Problem = ({ children }: ProblemProps) => {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2>
          The Problem
        </h2>
        <div className="prose prose-lg max-w-none text-text-body">
          {children}
        </div>
      </div>
    </section>
  )
}