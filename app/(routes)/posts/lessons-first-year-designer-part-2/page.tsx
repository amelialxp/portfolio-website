import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Lessons from my first year as a Product Designer (2/3) | Amelia Liw',
  description: 'Respect and appreciate thy engineer. Lessons on building trust, fighting for users over ego, and effective designer-engineer collaboration.',
}

const otherArticles = [
  { slug: 'lessons-first-year-designer-part-3', title: 'Lessons from my first two years as a Product Designer (3/3)', date: 'Sep 30, 2022' },
  { slug: 'lessons-first-year-designer-part-1', title: 'Lessons from my first year as a Product Designer (1/3)', date: 'Mar 15, 2021' }
]

export default function LessonsFirstYearDesignerPart2Article() {
  return (
    <div className="px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Navigation */}
        <Link 
          href="/posts" 
          className="inline-flex items-center gap-2 text-secondary-navy hover:text-accent-navy transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-spectral">Back to Posts</span>
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/posts/lfyd-p2/cover.jpeg"
              alt="Cover image for Lessons from my first year as a Product Designer (2/3)"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-secondary-gray italic">
              Building trust and effective collaboration between designers and engineers
            </p>
          </div>
          <h1 className="text-3xl md:text-4xl font-spectral text-foreground mb-6 leading-tight">
            Lessons from my first year as a Product Designer (2/3)
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-secondary-gray mb-8">
            <time dateTime="2021-05-21">May 21, 2021</time>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="space-y-6 font-spectral text-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-spectral text-foreground mb-4 mt-8 leading-tight">
              Lesson 2: Respect and appreciate thy engineer (even if you drive each other a little nuts sometimes)
            </h2>

            <p>
              As Julie Zhuo puts it, engineers are the translators of ideas into reality. In the past year, 
              I've come to experience first-hand the joys, tensions, and challenges that come with pushing 
              a build from ideation to handover. Here's a couple of lessons I learned about communicating 
              with engineers effectively.
            </p>

            <h3 className="text-xl md:text-2xl font-spectral text-foreground mb-3 mt-6 leading-tight">
              1. Trust each other
            </h3>

            <p>
              As a designer who only has a surface level understanding of code, it can get a little intimidating 
              when an engineer starts talking about databases and lambdas. I've also seen an engineer's eyes 
              gloss over when I went into a spiel about ems, line heights, and page gutters. Designers and 
              engineers have different skill sets and expertise. We may not understand each other sometimes, 
              but that's completely okay. What's important is that we trust that the other person is doing 
              their best to design and build for our users' needs.
            </p>

            <h3 className="text-xl md:text-2xl font-spectral text-foreground mb-3 mt-6 leading-tight">
              2. Fight for your users, not your ego
            </h3>

            <p>
              It's important to care about and take pride in your work. However, this should never be at 
              the expense of creating the best possible experience for your users. I've fallen into the 
              trap of wanting to get my designs exactly the way they were prototyped. I'm glad that my 
              team lead Bekah was there to remind me who the product is for at the end of the day - the users.
            </p>

            <h3 className="text-xl md:text-2xl font-spectral text-foreground mb-3 mt-6 leading-tight">
              3. When in doubt, just ask
            </h3>

            <p>
              Another important lesson I learned from Bekah early on is that it's perfectly okay to be 
              the "least smart" person in the room. As a designer, you should never be afraid to ask 
              questions. "What happens if the user tries to do x?" "Why does the user need to fill in 
              y and z here?" The more questions you ask early on in the design process, the more likely 
              you'll create something that solves problems for your users.
            </p>

            <hr className="my-8 border-gray-200" />

            <p>
              As I journey through my career in product design, I know that bumps and disagreements within 
              the team are inevitable. At the end of the day, I'm grateful to have team leaders who have 
              fostered a vulnerable and trusting environment. I can focus on doing my best work because 
              my team has my back. I know it sounds cheesy, but I look forward to solving problems and 
              making more magic (products) with the engineers at Supahands.
            </p>
          </div>
        </article>

        {/* LinkedIn Attribution */}
        <div className="border-l-4 border-accent-yellow p-6 my-12 bg-container rounded-r-lg">
          <p className="text-sm text-secondary-gray">
            This article was originally published on{' '}
            <a 
              href="https://www.linkedin.com/pulse/lessons-from-my-first-year-product-designer-2-3-amelia-liw/" 
              className="text-secondary-navy hover:text-accent-navy transition-colors inline-flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn in May 2021
              <ExternalLink size={12} />
            </a>
          </p>
        </div>

        {/* More Articles Navigation */}
        <div className="border-t border-gray-100 pt-12 mt-16">
          <h3 className="text-xl font-spectral text-foreground mb-6">More Posts</h3>
          <div className="space-y-4">
            {otherArticles.map((article) => (
              <Link 
                key={article.slug}
                href={`/posts/${article.slug}`}
                className="block p-4 rounded-lg hover:bg-container transition-colors group"
              >
                <div className="flex justify-between items-start gap-4">
                  <h4 className="font-spectral text-foreground group-hover:text-secondary-navy transition-colors">
                    {article.title}
                  </h4>
                  <time className="text-sm text-secondary-gray flex-shrink-0">
                    {article.date}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}