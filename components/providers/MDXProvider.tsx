'use client'

import { MDXProvider as BaseMDXProvider } from '@mdx-js/react'
import { Hero, Problem, Process, ImageGallery, Results, NextProject } from '../case-study'

const components = {
  Hero,
  Problem,
  Process,
  ImageGallery,
  Results,
  NextProject,
  h1: (props: any) => <h1 className="text-4xl font-bold text-gray-900 mb-6" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-12" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8" {...props} />,
  p: (props: any) => <p className="text-gray-600 mb-4 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2" {...props} />,
  li: (props: any) => <li className="leading-relaxed" {...props} />,
  strong: (props: any) => <strong className="font-semibold text-gray-900" {...props} />,
}

interface MDXProviderProps {
  children: React.ReactNode
}

export function MDXProvider({ children }: MDXProviderProps) {
  return (
    <BaseMDXProvider components={components}>
      {children}
    </BaseMDXProvider>
  )
}