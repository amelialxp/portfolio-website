# How to Add a New Case Study (Non-Technical Guide)

This guide will walk you through adding a new case study to your portfolio website. No coding experience required!

## Step 1: Create Your Case Study Content File

1. **Navigate to the content folder:**
   - Open your portfolio folder
   - Go to `content` → `case-studies`

2. **Create a new file:**
   - Right-click in the `case-studies` folder
   - Select "New" → "Text Document" (Windows) or create a new file
   - Name it using this format: `your-project-name.mdx`
   - **Important:** Use lowercase letters, replace spaces with dashes
   - **Examples:** `fintech-app.mdx`, `healthcare-dashboard.mdx`, `ecommerce-redesign.mdx`

3. **Copy the template structure:**
   - Open the existing `storehub-membership.mdx` file
   - Copy everything from that file
   - Paste it into your new file
   - Now you can replace the content with your own project details

## Step 2: Fill Out Your Case Study Content

Replace the StoreHub content with your own project information:

### Hero Section (Top of the page):
```
<Hero 
  title="Your Project Title"
  subtitle="Brief description of what you accomplished"
  timeline="How long the project took (e.g., '3 months', '6 weeks')"
  role="Your role (e.g., 'Senior UX Designer', 'Lead Product Designer')"
  tools={['Tool 1', 'Tool 2', 'Tool 3']}
  image="/images/projects/your-hero-image.jpg"
/>
```

### Problem Section:
```
<Problem>
Write about the main challenge or problem you solved. 

You can use:
- **Bold text** by putting text between **double asterisks**
- Bullet points by starting lines with `-`
- Regular paragraphs by just writing normally
</Problem>
```

### Process Sections (You can have multiple):
```
<Process title="Your Process Step Title">
Describe your design process, research, or approach.

## You can add subheadings with ##
- Bullet points work here too
- Share your methodology
- Explain key decisions
</Process>
```

### Image Galleries:
```
<ImageGallery 
  layout="single"
  images={[
    {
      src: "/images/projects/your-image-name.jpg",
      alt: "Description of the image for accessibility",
      caption: "Optional caption that appears below the image"
    }
  ]}
/>
```

**Layout options:**
- `"single"` - One image full width
- `"side-by-side"` - Two images next to each other
- `"grid"` - Multiple images in a grid

### Results Section:
```
<Results 
  metrics={[
    {
      label: "Metric Name",
      value: "40%",
      description: "What this number means"
    },
    {
      label: "Another Metric",
      value: "2.5x",
      description: "Brief explanation"
    }
  ]}
>
Write about the impact and outcomes of your project.

You can include:
- Key achievements
- Lessons learned
- Future opportunities
</Results>
```

## Step 3: Add Your Case Study to the Portfolio Config

1. **Open the portfolio config file:**
   - Go to `content` → `portfolio-config.js`

2. **Add your case study to the list:**
   - Find the `export const caseStudies = [` section
   - Add your new case study before the closing `]`

```javascript
{
  slug: 'your-project-name',
  title: 'Your Project Title',
  subtitle: 'Brief description for homepage',
  visible: true,
  featured: true,
  order: 5,
},
```

**Important fields:**
- `slug`: Must match your `.mdx` filename (without the .mdx part)
- `title`: Shows on homepage and navigation
- `subtitle`: Brief description for homepage cards
- `visible`: Set to `true` to show the case study
- `featured`: Set to `true` to highlight it
- `order`: Number that controls the order (1 = first, 2 = second, etc.)

## Step 4: Add Your Images

1. **Prepare your images:**
   - Save images as `.jpg` or `.png` files
   - Use descriptive names like: `projectname-hero.jpg`, `projectname-wireframes.jpg`
   - Recommended size: At least 1200px wide for hero images

2. **Add images to the project:**
   - Go to `public` → `images` → `projects`
   - Copy your image files here

3. **Reference images in your MDX:**
   - Use this format: `/images/projects/your-image-name.jpg`
   - Make sure the filename matches exactly (including capitalization)

## Step 5: Update the Route Configuration

1. **Open the page routing file:**
   - Go to `app` → `(routes)` → `work` → `[slug]` → `page.tsx`

2. **Find the `generateStaticParams` function:**
   - Add your case study slug to the list:

```javascript
return [
  { slug: 'storehub-membership' },
  { slug: 'your-project-name' },  // Add this line
  { slug: 'fintech-mobile-app' },
  { slug: 'healthcare-dashboard' },
]
```

3. **Add your case study to the content loader:**
   - Find the `CaseStudyContent.tsx` file in the same folder
   - Add your case study to the switch statement:

```javascript
case 'your-project-name':
  mdxModule = await import('../../../../content/case-studies/your-project-name.mdx')
  break
```

## Step 6: Test Your Case Study

1. **Start the development server:**
   - Open terminal/command prompt in your project folder
   - Type: `npm run dev`
   - Press Enter

2. **View your case study:**
   - Open your browser
   - Go to: `http://localhost:3000/work/your-project-name`
   - Check that everything displays correctly

## Troubleshooting

**If your page shows a 404 error:**
- Check that your slug in `portfolio-config.js` matches your `.mdx` filename
- Make sure you added your slug to both `page.tsx` and `CaseStudyContent.tsx`

**If images don't show:**
- Verify image filenames match exactly (including capitalization)
- Check that images are in the `public/images/projects/` folder
- Make sure image paths start with `/images/projects/`

**If content looks weird:**
- Check that you have matching opening and closing tags (e.g., `<Hero>` and `</Hero>`)
- Verify you're using the correct quote marks (`"` not `"` or `"`)

## Quick Checklist

Before publishing your case study:

- [ ] Created `.mdx` file with descriptive filename
- [ ] Filled out all Hero section details
- [ ] Added meaningful Problem and Process sections
- [ ] Included relevant images with good alt text
- [ ] Added Results section with impact metrics
- [ ] Updated `portfolio-config.js` with case study details
- [ ] Added slug to routing files
- [ ] Uploaded all images to correct folder
- [ ] Tested the page in browser

**Your case study URL will be:** `yourwebsite.com/work/your-project-name`

---

*Need help? The MDX files are just text files with special formatting. You can always copy an existing case study and modify it step by step.*