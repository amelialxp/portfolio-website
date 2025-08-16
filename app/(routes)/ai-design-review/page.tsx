import Image from 'next/image'

export default function AIDesignReview() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <h1>I Cloned My Boss&apos;s Design Reviews (And She Actually Loved It)</h1>
        <p className="text-lg text-foreground mb-12 max-w-3xl">
          Eliminating CTO review delays by systematically capturing institutional design knowledge
        </p>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="w-full">
          <Image
            src="/images/projects/clone-hero.png"
            alt="Left side shows thousands of collected CTO comments from Figma, right side shows the AI bot interface that learned to replicate her feedback style and tone"
            width={800}
            height={600}
            quality={90}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 800px"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-secondary-gray italic">
            Transforming thousands of CTO comments into an AI that speaks and critiques just like her
          </p>
        </div>
      </div>

      {/* Project Overview - Full Width White Section */}
      <section className="w-full py-16 bg-white shadow-lg">
        <div className="max-w-4xl mx-auto px-6">
          <h2>Project Overview</h2>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed"><strong>Project:</strong> Eliminated CTO review delays by systematically capturing institutional design knowledge</p>
            <p className="text-foreground mb-4 leading-relaxed"><strong>My Role:</strong> Process efficiency designer identifying and solving workflow constraints</p>
            <p className="text-foreground mb-4 leading-relaxed"><strong>Timeline:</strong> 1 month (May 2024) - from &ldquo;this sounds interesting&rdquo; to &ldquo;why didn&apos;t we do this sooner&rdquo;</p>
            <p className="text-foreground mb-4 leading-relaxed"><strong>Impact:</strong> Cut down 2-3 day review delays per design cycle, saved 3 hours/week per designer</p>
          </div>
        </div>
      </section>

      {/* Design Challenge & Approach */}
      <div className="max-w-4xl mx-auto px-6">
        <section className="py-16">
          <h2>Design Challenge & Approach</h2>
          
          <h3 className="text-foreground mb-4 mt-8">The Challenge</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed">Our CTO gave excellent design feedback, but her schedule created 2-3 day delays for every iteration. Review scheduling was becoming a team velocity constraint.</p>
          </div>

          <h3 className="text-foreground mb-4 mt-8">My Solution Strategy</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed">I thought: &ldquo;What if you could get expert design feedback instantly instead of waiting for review meetings?&rdquo; I built an AI clone of our CTO&apos;s review style that eliminated design bottlenecks while maintaining quality standards.</p>
          </div>
        </section>
      </div>

      {/* Technical Process & Solutions */}
      <div className="max-w-4xl mx-auto px-6">
        <section className="py-16">
          <h2>Technical Process & Solutions</h2>
          
          <h3 className="text-foreground mb-4 mt-8">Part 1: Knowledge Extraction</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed"><strong>Problem:</strong> Years of design expertise lived only in scattered Figma comments across 300+ files</p>
            
            <h4 className="text-foreground mb-3 mt-6 font-semibold">What I did:</h4>
            <ul className="list-disc pl-6 mb-4 text-foreground space-y-2">
              <li>Used AI to figure out API extraction scripts to gather all the comments by the CTO and also by anyone else who mentions &ldquo;the CTO said..&rdquo;</li>
              <li>Used batch processing to handle the scale effectively</li>
              <li>Successfully scraped over 10,800 comments by the CTO or referring to the CTO&apos;s feedback</li>
            </ul>
          </div>

          {/* Figma Comments Extraction Visual */}
          <div className="mt-12 mb-12">
            <div className="w-full">
              <Image
                src="/images/projects/clone-v2.gif"
                alt="Animated demonstration showing the extraction of design feedback comments from Figma files, displaying the process of gathering institutional knowledge from scattered comments across multiple design files"
                width={800}
                height={600}
                quality={90}
                className="w-full h-auto object-contain"
              />
              <div className="mt-4 text-center">
                <p className="text-sm text-secondary-gray italic">
                  Extracting years of design expertise from scattered Figma comments across 300+ files
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-foreground mb-4 mt-8">Part 2: Creating &ldquo;Design Review Assistant&rdquo;</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed"><strong>Problem:</strong> Generic AI feedback lacks the nuanced understanding that makes expert review valuable</p>
            
            <h4 className="text-foreground mb-3 mt-6 font-semibold">What I did:</h4>
            <ul className="list-disc pl-6 mb-4 text-foreground space-y-2">
              <li>Integrated the CTO&apos;s documented work style preferences and Storehub&apos;s design principles and user demographic information to provide further context</li>
              <li>Structured around her proven review framework covering technical, user experience, and business considerations</li>
              <li>Maintained the collaborative tone that makes feedback constructive rather than critical</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Plot Twist */}
      <div className="max-w-4xl mx-auto px-6">
        <section className="py-16">
          <h2>Plot Twist: When Your AI Gets Too Realistic 🤖</h2>
          
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed">One unexpected challenge emerged when team members tried using the bot on Fridays. Because I&apos;d included the CTO&apos;s user manual (which specifies no-meeting Fridays for deep work), the AI would sometimes respond with &ldquo;Hey I am actually doing deep work so this better be important.&rdquo;</p>
            
            <p className="text-foreground mb-4 leading-relaxed">While amusing, this taught us an important lesson about context filtering: sometimes you capture TOO much authenticity. We had to fine-tune which personality traits enhanced the tool versus which ones created unnecessary friction.</p>
          </div>

          {/* Clone v1 Image */}
          <div className="mt-12 mb-12">
            <div className="w-full">
              <Image
                src="/images/projects/clone-v1.png"
                alt="Screenshot showing the AI design review assistant in action, demonstrating how it captured the CTO's authentic feedback style including personality quirks that sometimes created unexpected responses"
                width={800}
                height={600}
                quality={90}
                className="w-full h-auto object-contain"
              />
              <div className="mt-4 text-center">
                <p className="text-sm text-secondary-gray italic">
                  The AI clone captured authentic feedback patterns - sometimes a little too authentically
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Results & Organizational Impact - Full Width White Section */}
      <section className="w-full py-16 bg-white shadow-lg">
        <div className="max-w-4xl mx-auto px-6">
          <h2>Results & Organizational Impact</h2>
          
          {/* Results Visual */}
          <div className="mt-12 mb-12">
            <div className="w-full">
              <Image
                src="/images/projects/clone-v3.png"
                alt="AI Design Review Assistant final implementation showing the comprehensive system that successfully eliminated review delays while maintaining expert-level feedback quality"
                width={800}
                height={600}
                quality={90}
                className="w-full h-auto object-contain"
              />
              <div className="mt-4 text-center">
                <p className="text-sm text-secondary-gray italic">
                  The final AI design review system that transformed our team&apos;s workflow and feedback process
                </p>
              </div>
            </div>
          </div>
          
          <h3 className="text-foreground mb-4 mt-8">Measurable Efficiency Gains</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed">This design review assistant is able to provide early context and feedback. The 50% reduction in direct CTO comments represents significant time savings for strategic work, plus elimination of iteration delays that were slowing team progress. This bot can also help with scaling work - whether we&apos;re 3 designers or 30, quality standards remain consistent without scheduling constraints.</p>
          </div>

          <h3 className="text-foreground mb-4 mt-8">What This Actually Accomplished</h3>
          <div className="max-w-none">
            <p className="text-foreground mb-4 leading-relaxed">Beyond the novelty, this project solved a real workflow challenge. By reducing design iteration cycles from 5 days to 2 days, we were able to enable 40% faster feature delivery during critical compliance deadlines. It&apos;s also a great bonus that the CTO loved it, because the bot actually understood her review philosophy.</p>
          </div>
        </div>
      </section>
    </div>
  )
}