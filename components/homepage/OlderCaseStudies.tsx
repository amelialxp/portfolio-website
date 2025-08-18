import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { Tag } from '../ui/Tag'

const olderCaseStudies = [
  {
    title: 'SUPABOLT',
    description: 'End-to-end data annotation platform empowering ML practitioners to create and manage custom datasets for algorithm training.',
    image: '/images/projects/supabolt/cover-supabolt.png',
    href: 'https://www.figma.com/proto/RFnVC6qItGNgpZnSQc6OOW/Web-based-SaaS?node-id=2623-2553&t=EROrWb4wcAFuw4Le-0&scaling=min-zoom&content-scaling=fixed&page-id=2622%3A7924&starting-point-node-id=2623%3A2553',
    tags: ['2022', 'SaaS Platform', 'Data Annotation']
  },
  {
    title: 'KTM Redesign',
    description: 'Improving train arrival information with better accessibility, readability, and information hierarchy for KTM commuters.',
    image: '/images/projects/ktm-redesign/cover-ktm-redesign.png',
    href: 'https://www.figma.com/proto/ogcqUBdtzaOkqtekD8RrUt/KTM-ETA--Mobile-?node-id=288-5355&t=RUL3g2Sct288kH80-0&scaling=min-zoom&content-scaling=fixed&page-id=114%3A3474&starting-point-node-id=288%3A5355',
    tags: ['2023', 'Mobile Design', 'Public Transport']
  }
]

export const OlderCaseStudies = () => {
  return (
    <section className="px-8 py-16 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl mb-4">
            Other Projects
          </h2>
          <p className="text-secondary-gray text-lg max-w-2xl">
            Earlier work exploring data visualization, mobile UX, and public service design
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {olderCaseStudies.map((study) => (
            <Link
              key={study.title}
              href={study.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-container rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={study.image}
                  alt={`Cover image for ${study.title} case study`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl group-hover:text-accent-navy transition-colors">
                    {study.title}
                  </h3>
                  <ExternalLink size={16} className="text-accent-navy transition-colors flex-shrink-0" />
                </div>
                
                <p className="text-secondary-gray text-sm mb-4 leading-relaxed">
                  {study.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, index) => (
                    <Tag key={index}>
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}