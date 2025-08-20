import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Lessons from my first year as a Product Designer (1/3) | Amelia Liw',
  description: 'The importance of having a great mentor and boss in establishing a healthy relationship with work. Real insights from my first year at Supahands.',
}

const otherArticles = [
  { slug: 'lessons-first-year-designer-part-3', title: 'Lessons from my first two years as a Product Designer (3/3)', date: 'Sep 30, 2022' },
  { slug: 'lessons-first-year-designer-part-2', title: 'Lessons from my first year as a Product Designer (2/3)', date: 'May 21, 2021' }
]

export default function LessonsFirstYearDesignerArticle() {
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
              src="/images/posts/lfyd-p1/cover.jpeg"
              alt="Cover image for Lessons from my first year as a Product Designer (1/3)"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-secondary-gray italic">
              The foundation of healthy work relationships: mentorship and boundaries in design
            </p>
          </div>
          <h1 className="text-3xl md:text-4xl font-spectral text-foreground mb-6 leading-tight">
              Lesson 1: A great mentor/boss is crucial in establishing a healthy relationship with work
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-secondary-gray mb-8">
            <time dateTime="2021-03-15">March 15, 2021</time>
            <span>•</span>
            <span>4 min read</span>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="space-y-6 font-spectral text-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-spectral text-foreground mb-4 mt-8 leading-tight">
              This is part one of a three part series: Lessons from my first year as a Product Designer
            </h2>

            <p>
              Right before I joined Supahands back in early 2020, my Design Lead Bekah reached out to me to 
              have a coffee. She asked me questions about my interests, and listened intently as I described 
              the crazy shenanigans my friends and I get up to when we play Dungeons and Dragons.
            </p>

            <p>
              At one point, I casually said "...but yeah, I guess I'll need to play less once I start working". 
              I was taken aback when Bekah immediately insisted "No, you should continue enjoying your hobbies. 
              In fact, I'll personally kick you out of the office at the end of the workday so you can go play D&D".
            </p>

            <p>
              Fast forward to now - Bekah's kept her word. I've never felt obligated to stick around in the 
              office just because my teammates were still there. My team leads* have really fostered an 
              environment where we communicate and trust each other to get things done. I have the space to 
              learn new things and make mistakes at work; but my hobbies are not pushed to the side. In fact, 
              I believe that playing D&D regularly has helped me grow as a designer and a storyteller.
            </p>

            <p>
              Ever since we transitioned to working remotely, Bekah can no longer physically eject me from 
              the office (she has done so in the past!). However, every time I'm tempted to spend an extra 
              hour to get more work done, I think to myself "What would Bekah say?".
            </p>

            <p>
              The answer is "Get rest, work on it in the morning when you're mentally fresh. When we design, 
              create and build from a place of rest, there is a tangible difference."
            </p>

            <p className="text-sm italic text-secondary-gray">
              *Sorry Isaac I'll talk about you in another article 😬
            </p>

            <hr className="my-8 border-gray-200" />

          </div>
        </article>

        {/* LinkedIn Attribution */}
        <div className="border-l-4 border-accent-yellow p-6 my-12 bg-container rounded-r-lg">
          <p className="text-sm text-secondary-gray">
            This article was originally published on{' '}
            <a 
              href="https://www.linkedin.com/pulse/lessons-from-my-first-year-product-designer-1-3-amelia-liw/" 
              className="text-secondary-navy hover:text-accent-navy transition-colors inline-flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn in March 2021
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