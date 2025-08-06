# Amelia Liw's Portfolio Website

A modern, thoughtfully designed portfolio showcasing UX/Product Design work, built with Next.js and a focus on storytelling through case studies.

## 🎯 Vision & Intention

This portfolio website is designed to be more than just a showcase—it's a reflection of thoughtful design process and attention to detail that defines great UX work. The site embodies several core principles:

### Design Philosophy
- **Story-driven**: Each case study tells a complete narrative from problem to impact
- **Process transparency**: Showcasing the "how" and "why" behind design decisions
- **User-centric**: Clean, accessible interface that puts content first
- **Authentic voice**: Personal touch that reflects genuine curiosity about UX challenges

### Strategic Goals
- **Professional positioning**: Establish credibility as a Senior Product Designer
- **Process demonstration**: Show systematic approach to complex UX problems
- **Impact storytelling**: Quantify and communicate business value of design work
- **Thought leadership**: Share insights about the intersection of user needs and business constraints

## 🏗️ Architecture & Approach

### Technology Stack
- **Next.js 15**: Modern React framework with App Router for optimal performance
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS for consistent design system
- **MDX**: Markdown with React components for rich, interactive case studies
- **Lucide React**: Clean, consistent iconography

### Content Strategy
The site uses a modular, content-first approach:

- **Case Studies**: Rich MDX files with custom components for different content types
- **Reusable Components**: `<Hero>`, `<Problem>`, `<Process>`, `<Results>` components for consistent storytelling structure
- **Image Galleries**: Flexible layouts (single, side-by-side, grid) for visual storytelling
- **Password Protection**: Selective access for confidential work

### Design System
Custom color palette and typography that reflects professional yet approachable personality:
- **Primary Colors**: Warm yellows and deep navy for contrast and energy
- **Typography**: Spectral (serif) for readability, Borel for personal touch
- **Spacing**: Generous whitespace for focus and hierarchy

## 🎨 Content Philosophy

### Case Study Structure
Each case study follows a proven narrative arc:

1. **Hero Section**: Project overview with key details (timeline, role, tools)
2. **Problem Definition**: Clear articulation of user/business challenges
3. **Process Documentation**: Step-by-step methodology and decision rationale
4. **Visual Evidence**: Wireframes, prototypes, user research, design evolution
5. **Impact Measurement**: Quantified results and lessons learned

### Accessibility & Performance
- Semantic HTML structure for screen readers
- Alt text for all images
- Optimized image loading with Next.js
- Responsive design for all device types
- Fast loading times with static generation

## 🔧 Development Workflow

### Adding New Case Studies
The site includes a comprehensive [non-technical guide](./HOW-TO-ADD-CASE-STUDY.md) for adding new work, making it easy to:
- Create new case studies without coding
- Maintain consistent visual structure
- Update portfolio configuration
- Test and publish changes

### Quality Assurance
Built-in quality checks ensure professional standards:
- ESLint for code quality
- TypeScript for type safety
- Pre-commit hooks for consistency
- Build verification before deployment

### Deployment
- **Hosting**: Vercel for optimal Next.js performance
- **Domain**: Custom domain for professional presence
- **CI/CD**: Automated deployments from main branch
- **Monitoring**: Build status and performance tracking

## 🎯 Business Impact

This portfolio serves multiple strategic purposes:

### Client Acquisition
- Demonstrates end-to-end design capability
- Shows business impact of design decisions
- Builds trust through process transparency
- Provides talking points for client conversations

### Career Development
- Positions for senior IC or leadership roles
- Shows growth from execution to strategy
- Demonstrates technical collaboration skills
- Highlights cross-functional impact

### Professional Brand
- Establishes thought leadership in UX space
- Shows systematic approach to complex problems
- Demonstrates care for craft and detail
- Builds reputation for delivering results

## 🚀 Future Roadmap

### Content Expansion
- [ ] Additional case studies showcasing range of work
- [ ] Process deep-dives and methodology posts
- [ ] Client testimonials and collaboration stories
- [ ] Speaking and community involvement

### Technical Enhancements
- [ ] Blog section for design insights
- [ ] Interactive prototypes embedded in case studies
- [ ] Advanced analytics for engagement tracking
- [ ] Performance optimizations and SEO improvements

### Professional Development
- [ ] Integration with professional networks
- [ ] Portfolio metrics and engagement tracking
- [ ] A/B testing for conversion optimization
- [ ] Multi-language support for global reach

---

## 🛠️ Technical Details

### Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

### Project Structure
```
├── app/                    # Next.js App Router
├── components/            # Reusable UI components
├── content/              # MDX case studies and config
├── public/images/        # Project images and assets
├── styles/               # Global styles and Tailwind config
└── docs/                 # Documentation and guides
```

### Key Commands
- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run lint` - Check code quality
- `npm start` - Start production server

---

*This portfolio represents a commitment to thoughtful design, clear communication, and measurable impact. It's built to grow and evolve alongside a design career focused on solving meaningful problems at the intersection of user needs and business success.*