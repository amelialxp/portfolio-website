import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Lessons from my first two years as a Product Designer (3/3) | Amelia Liw',
  description: 'Things I wish I knew about design handovers. Empty states, error handling, and working with developers to create better handover processes.',
}

const otherArticles = [
  { slug: 'lessons-first-year-designer-part-2', title: 'Lessons from my first year as a Product Designer (2/3)', date: 'May 21, 2021' },
  { slug: 'lessons-first-year-designer-part-1', title: 'Lessons from my first year as a Product Designer (1/3)', date: 'Mar 15, 2021' }
]

export default function LessonsFirstYearDesignerPart3Article() {
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
              src="/images/posts/lfyd-p3/cover.png"
              alt="Cover image for Lessons from my first two years as a Product Designer (3/3)"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-spectral text-foreground mb-6 leading-tight">
            Lessons from my first two years as a Product Designer (3/3)
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-secondary-gray mb-8">
            <time dateTime="2022-09-30">September 30, 2022</time>
            <span>•</span>
            <span>6 min read</span>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="space-y-6 font-spectral text-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-spectral text-foreground mb-4 mt-8 leading-tight">
              Lesson 3: Things I wish I knew about design handovers
            </h2>

            <p>
              At the end of every designer's iterative process, the design handover is the key point which 
              can make or break the implementation of your product or feature. Here's 3 learnings that I 
              wish I knew when I first started out.
            </p>

            <h3 className="text-xl md:text-2xl font-spectral text-foreground mb-3 mt-6 leading-tight">
              1. Empty states are also a part of the user's experience
            </h3>

            <p>
              When I first started out, I spent 90% of my time focusing on how the product or feature will 
              look after it's been populated with data.
            </p>

            <p>
              Now, I understand that the empty state of a page is as much part of the user's experience 
              as the end state. Utilise empty states as opportunities for inspiring curiosity and anticipation; 
              or at the very least, help the user orient themselves so they know exactly what they should 
              be doing next.
            </p>

            <h3 className="text-xl md:text-2xl font-spectral text-foreground mb-3 mt-6 leading-tight">
              2. Consider all the ways things could go wrong
            </h3>

            <p>
              The key difference between designing for the web, and designing for print is that web content 
              is never static. How will a beautifully laid out card look when the user decides to give it 
              a ridiculously long title? If the user tries to submit a form without filling out all the 
              necessary information, how do they know what's missing so they can proceed?
            </p>

            <p>
              While most of your time will likely be focused on the ideal user pathways, you'll also need 
              to dedicate time to reinforce guardrails (by limiting interactions or input), or set up 
              signboards (UI, error messaging) to send the user back to the happy paths.
            </p>

            <div className="aspect-video relative my-8 rounded-lg overflow-hidden">
              <Image
                src="/images/posts/lfyd-p3/v1.png"
                alt="Two sets of card UI. Top row captioned 'Expectations' with neatly created wireframes. Bottom row captioned 'Reality', with cards showing various errors and inconsistencies."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-secondary-gray italic">
                Expectations vs Reality: Perfect wireframes versus real-world implementation challenges
              </p>
            </div>

            <h3 className="text-xl md:text-2xl font-spectral text-foreground mb-3 mt-6 leading-tight">
              3. Things are probably not going to turn out the way you imagined it (the first time round)
            </h3>

            <p>
              At the end of the day, no matter how detailed your handover specs may seem, the first build 
              of the product is probably not going to turn out exactly like your Figma prototype.
            </p>

            <p>
              In times like these, it's important to remember that building products in a startup is iterative. 
              We do want to strive for perfection, but a more realistic goal is getting things shipped, and 
              improving on it in the next round.
            </p>

            <hr className="my-8 border-gray-200" />

            <p>
              Finally, when preparing handovers, remember that you are designing the user experience of 
              your developers as they figure out how to build the wireframes. Listen when devs tell you 
              something isn't working. That way, you can work together to create a handover process that 
              works for your team.
            </p>

            <hr className="my-8 border-gray-200" />

            <p>
              If you enjoyed reading this, you might also wanna check out my previous post on working with 
              engineers. Here's some great advice from other designers on perfecting your design handovers, 
              setting up your Figma file, and writing great specifications.
            </p>

          </div>
        </article>

        {/* LinkedIn Attribution */}
        <div className="border-l-4 border-accent-yellow p-6 my-12 bg-container rounded-r-lg">
          <p className="text-sm text-secondary-gray">
            This article was originally published on{' '}
            <a 
              href="https://www.linkedin.com/pulse/lessons-from-my-first-two-years-product-designer-3-amelia-liw/" 
              className="text-secondary-navy hover:text-accent-navy transition-colors inline-flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn in September 2022
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