import ProtectedRoute from '@/components/ProtectedRoute'
import { FeaturedWork } from '@/components/homepage/FeaturedWork'

export default function Home() {
  return (
    <ProtectedRoute>
      {/* Hero Section */}
      <section className="px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1>
           Hey there!
          </h1>
          <p className="font-spectral text-lg md:text-xl text-foreground max-w-3xl leading-relaxed">
            {"Amelia is a Senior Product Designer who is obsessively curious about 'how' and 'why' of everything UX. She's been playing tug-of-war at the intersection of user needs and business constraints since 2020."}
          </p>
        </div>
      </section>

      {/* Case Studies Preview */}
      <FeaturedWork />
    </ProtectedRoute>
  )
}