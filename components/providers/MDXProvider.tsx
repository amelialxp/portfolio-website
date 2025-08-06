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
  p: (props: any) => <p className="text-text-body mb-4 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-4 text-text-body space-y-2" {...props} />,
  li: (props: any) => <li className="leading-relaxed" {...props} />,
  strong: (props: any) => <strong className="text-text-body" {...props} />,
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