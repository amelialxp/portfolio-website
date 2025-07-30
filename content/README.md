# Content Management System

This directory contains all your case studies and pages in MDX format, allowing you to easily update content without touching code.

## Directory Structure

```
content/
├── case-studies/           # Your case study MDX files
│   ├── adobe-design-system.mdx
│   ├── fintech-mobile-app.mdx
│   └── healthcare-dashboard.mdx
├── pages/                  # Static page content (future)
│   └── about.mdx
├── portfolio-config.js     # Controls which case studies show and their order
└── README.md              # This file
```

## Adding a New Case Study

1. **Create a new MDX file** in `case-studies/` with a descriptive filename (e.g., `new-project.mdx`)

2. **Add the case study to config**: Update `portfolio-config.js` to include your new case study:
   ```js
   {
     slug: 'new-project',
     title: 'New Project Title',
     subtitle: 'Brief description',
     visible: true,
     featured: true,
     order: 4,
   }
   ```

3. **Use the template components** in your MDX file:
   ```mdx
   import { Hero, Problem, Process, ImageGallery, Results, NextProject } from '../../components/case-study'

   <Hero 
     title="Your Project Title"
     subtitle="Brief compelling description"
     timeline="3 months"
     role="Lead Designer"
     tools={['Figma', 'React', 'UserTesting']}
     image="/images/projects/your-hero-image.jpg"
   />

   <Problem>
   Describe the problem you solved...
   </Problem>

   <Process title="Your Process Section">
   Explain your design process...
   </Process>
   ```

## Available Components

### Hero
The opening section with project details
- **title**: Main project title
- **subtitle**: Brief description
- **timeline**: Project duration
- **role**: Your role on the project
- **tools**: Array of tools used
- **image**: Hero image path

### Problem
Describes the core problem you solved
- Just wrap your content in `<Problem>...</Problem>`

### Process
For describing your design process
- **title**: Section heading
- Content goes inside the component

### ImageGallery
Display images in different layouts
- **images**: Array of image objects with src, alt, and optional caption
- **layout**: 'single', 'side-by-side', or 'grid'

### Results
Showcase metrics and outcomes
- **metrics**: Array of metric objects with label, value, and description
- Can also include additional content inside

### NextProject
Links to the next case study
- **slug**: URL slug of next project
- **title**: Next project title  
- **subtitle**: Next project description

## Managing Case Studies

Edit `portfolio-config.js` to:
- **Reorder projects**: Change the `order` value
- **Hide projects**: Set `visible: false`
- **Feature projects**: Set `featured: true`

## Adding Images

1. Add images to `public/images/projects/`
2. Reference them in MDX as `/images/projects/your-image.jpg`
3. Always include alt text for accessibility

## Tips

- **Preview changes**: Run `npm run dev` to see your changes locally
- **Use markdown**: Standard markdown works inside components
- **Keep it simple**: Focus on content, the components handle styling
- **Be consistent**: Use the same image dimensions for better layouts