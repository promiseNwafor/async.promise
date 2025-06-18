# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

async.promise is an AI-focused blog built with Next.js, exploring the intersection of AI and software engineering. The blog uses a unique content framework based on async/promise paradigms.

## Development Commands

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout with dark theme
│   ├── page.tsx        # Homepage with hero and features
│   ├── about/          # About page
│   └── blog/           # Blog listing and post pages
├── components/         # Reusable React components
│   ├── AsyncPromiseLogo.tsx  # Custom animated logo
│   ├── Header.tsx      # Navigation with glass morphism
│   ├── Footer.tsx      # Simple footer
│   ├── PostCard.tsx    # Blog post preview cards
│   ├── BlogSearch.tsx  # Client-side search component
│   └── ShareButton.tsx # Social sharing functionality
├── lib/
│   └── posts.ts        # Blog post data management
└── content/            # Blog post content and templates
    ├── posts/          # Markdown blog posts
    └── README.md       # Content creation guide
```

## Content Framework

The blog uses a unique async/promise-based content categorization:

- **Awaiting:** Posts about upcoming AI tools and trends
- **Resolving:** Practical AI integration solutions  
- **Catching:** Critical analysis of AI limitations
- **Async AI:** Design patterns for AI-first development

## Design System

- **Color Palette**: Dark theme with purple accent (#5e5ce6)
- **Typography**: Inter font with custom CSS properties
- **Components**: Glass morphism, subtle animations, hover effects
- **Layout**: Responsive design with consistent spacing

## Key Technologies

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom utilities
- **Content**: MDX with gray-matter for frontmatter
- **Icons**: Lucide React
- **Fonts**: Inter with font feature settings

## Component Architecture

### Server vs Client Components
- **Server Components**: Pages, layouts, static content
- **Client Components**: Search, share buttons, interactive elements
- **Hybrid**: Blog post pages use server components with client share functionality

### Custom Components
- `AsyncPromiseLogo`: Animated SVG logo with async dots and promise arrow
- `BlogSearch`: Client-side search with real-time filtering
- `ShareButton`: Web Share API with clipboard fallback

## Content Management

### Adding New Posts
1. Use templates in `src/content/posts/_template-*.md`
2. Follow naming convention: `YYYY-MM-DD-category-title.md`
3. Include proper frontmatter with title, date, excerpt, tags, author
4. Posts are automatically discovered and rendered

### Sample Data
- Uses `getSamplePosts()` function for demo content
- Shows AI-focused articles following the framework
- Includes realistic code examples and insights

## Styling Conventions

### CSS Custom Properties
```css
--background: #000000     # Main background
--foreground: #ffffff     # Primary text
--surface: #111111        # Card backgrounds  
--accent: #5e5ce6         # Brand color
```

### Utility Classes
- `.hover-lift`: Subtle hover animation
- `.backdrop-blur-glass`: Glass morphism effect
- `.text-gradient`: Linear gradient text
- `.geometric-bg`: Radial gradient background

## Development Guidelines

1. **Use TypeScript** for all new code
2. **Follow component patterns** established in existing code
3. **Maintain dark theme** consistency throughout
4. **Test responsive design** on multiple screen sizes
5. **Optimize for performance** with Next.js best practices

## Testing

- ESLint configuration for code quality
- TypeScript for type safety
- No specific test framework configured (add as needed)

## Deployment

- Built for static export compatibility
- Optimized for Vercel deployment
- All assets and content are self-contained