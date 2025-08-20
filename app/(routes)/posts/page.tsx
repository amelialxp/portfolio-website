import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Tag } from '@/components/ui/Tag'

export const metadata: Metadata = {
  title: 'Posts | Amelia Liw Portfolio',
  description: 'Reflections on learning and growing as a product designer.',
}

const articles = [
  {
    slug: 'lessons-first-year-designer-part-3',
    title: 'Lessons from my first two years as a Product Designer (3/3)',
    date: 'September 30, 2022',
    excerpt: 'Things I wish I knew about design handovers. Empty states, error handling, and working with developers to create better processes.',
    extendedPreview: 'At the end of every designer\'s iterative process, the design handover is the key point which can make or break the implementation of your product or feature. Here\'s 3 learnings that I wish I knew when I first started out.',
    readTime: '5 min read',
    coverImage: '/images/posts/lfyd-p3/cover.png',
    tags: ['2022', 'Design Handovers', 'Designer-Developer Collaboration', 'Process Improvement']
  },
  {
    slug: 'lessons-first-year-designer-part-2',
    title: 'Lessons from my first year as a Product Designer (2/3)',
    date: 'May 21, 2021',
    excerpt: 'Respect and appreciate thy engineer. Building trust, fighting for users over ego, and effective designer-engineer collaboration.',
    readTime: '4 min read',
    coverImage: '/images/posts/lfyd-p2/cover.jpeg',
    tags: ['2021', 'Designer-Developer Collaboration', 'Trust Building', 'Team Dynamics']
  },
  {
    slug: 'lessons-first-year-designer-part-1',
    title: 'Lessons from my first year as a Product Designer (1/3)',
    date: 'March 15, 2021',
    excerpt: 'The importance of having a great mentor and boss in establishing a healthy relationship with work. How D&D helped me grow as a designer.',
    readTime: '2 min read',
    coverImage: '/images/posts/lfyd-p1/cover.jpeg',
    tags: ['2021', 'Mentorship', 'Work-Life Balance', 'Personal Growth']
  }
]

export default function PostsPage() {
  const [featuredPost, ...regularPosts] = articles

  return (
    <div className="px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-spectral text-foreground mb-6 leading-tight">
           Reflections on learning and growing as a product designer.
          </h1>
        </header>

        {/* Featured Post - Latest Post */}
        <Link href={`/posts/${featuredPost.slug}`} className="block">
          <article className="bg-container rounded-lg border-2 border-accent-yellow/20 overflow-hidden hover:shadow-xl hover:border-accent-yellow/40 transition-all duration-300 group mb-20 cursor-pointer">
            <div className="flex flex-col lg:flex-row">
            {/* Featured Image - 50% width on desktop */}
            <div className="lg:w-1/2 aspect-video lg:aspect-[4/3] relative">
              <Image
                src={featuredPost.coverImage}
                alt={`Cover image for ${featuredPost.title}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Content - 50% width on desktop */}
            <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
              <div className="text-sm text-secondary-gray mb-4">
                {featuredPost.date} • {featuredPost.readTime}
              </div>
              <h2 className="text-3xl md:text-4xl font-spectral text-foreground mb-4 leading-tight group-hover:text-secondary-navy transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-secondary-gray mb-6 leading-relaxed text-lg">
                {featuredPost.extendedPreview}
              </p>
              
              {/* Tags */}
              {featuredPost.tags && featuredPost.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredPost.tags.map((tag, index) => (
                    <Tag key={index}>
                      {tag}
                    </Tag>
                  ))}
                </div>
              )}
              <div className="text-secondary-navy relative inline-flex items-center gap-2">
                <span className="font-spectral relative">
                  Read Full Article
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-yellow group-hover:w-full transition-all duration-300"></span>
                </span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            </div>
          </article>
        </Link>

        {/* Regular Posts - Horizontal Layout */}
        <div className="space-y-8">
          {regularPosts.map((article) => (
            <Link href={`/posts/${article.slug}`} key={article.slug} className="block">
              <article className="bg-container rounded-lg border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 group cursor-pointer">
              <div className="flex flex-col md:flex-row">
                {/* Text Content - 65% width on desktop */}
                <div className="md:w-2/3 lg:w-[65%] p-4 md:p-6 order-2 md:order-1">
                  <div className="text-sm text-secondary-gray mb-3">
                    {article.date} • {article.readTime}
                  </div>
                  <h3 className="text-xl md:text-2xl font-spectral text-foreground mb-3 leading-tight group-hover:text-secondary-navy transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-secondary-gray mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  {/* Tags */}
                  {article.tags && article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, index) => (
                        <Tag key={index}>
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Featured Image - 35% width on desktop */}
                <div className="md:w-1/3 lg:w-[35%] aspect-video md:aspect-[4/3] relative order-1 md:order-2">
                  <Image
                    src={article.coverImage}
                    alt={`Cover image for ${article.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 35vw"
                  />
                </div>
              </div>
            </article>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-12 border-t border-gray-100">
          <p className="text-secondary-gray mb-4">
            Looking for design case studies?
          </p>
          <Link 
            href="/" 
            className="text-secondary-navy group inline-flex items-center gap-2"
          >
            <span className="font-spectral relative">
              View Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-yellow group-hover:w-full transition-all duration-300"></span>
            </span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}