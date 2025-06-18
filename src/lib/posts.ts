export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  readingTime: string;
  tags?: string[];
  author?: string;
}

export function getAllPosts(): Post[] {
  // Always return sample posts for now to avoid server/client issues
  return getSamplePosts();
}

export function getPostBySlug(slug: string): Post | null {
  const posts = getSamplePosts();
  return posts.find((post: Post) => post.slug === slug) || null;
}

// Sample posts for when no content directory exists or for client-side
function getSamplePosts(): Post[] {
  return [
    {
      slug: 'welcome-to-linear-blog',
      title: 'Welcome to Linear Blog',
      date: '2024-01-01',
      excerpt: 'A modern blog built with Next.js, TypeScript, and Tailwind CSS. Featuring a beautiful dark theme inspired by Linear.',
      content: `# Welcome to Linear Blog

This is a sample blog post to showcase the beautiful design and functionality of your new blog.

## Features

- Modern dark theme design
- Responsive layout
- Search functionality
- Beautiful typography
- Fast performance with Next.js

## Getting Started

To add your own blog posts, create Markdown files in the \`src/content/posts\` directory.

Happy blogging!`,
      readingTime: '2 min read',
      tags: ['welcome', 'blog', 'nextjs'],
      author: 'Linear Blog'
    },
    {
      slug: 'building-modern-web-apps',
      title: 'Building Modern Web Applications',
      date: '2024-01-02',
      excerpt: 'Exploring the latest trends and technologies in modern web development.',
      content: `# Building Modern Web Applications

Modern web development has evolved significantly over the past few years...

## Key Technologies

- React and Next.js
- TypeScript
- Tailwind CSS
- Server-side rendering

This is just a sample post to demonstrate the blog functionality.`,
      readingTime: '5 min read',
      tags: ['web-development', 'react', 'nextjs'],
      author: 'Linear Blog'
    },
    {
      slug: 'design-systems-guide',
      title: 'The Complete Guide to Design Systems',
      date: '2024-01-03',
      excerpt: 'How to build and maintain scalable design systems for modern applications.',
      content: `# The Complete Guide to Design Systems

Design systems are crucial for maintaining consistency across applications...

## Benefits

- Consistency
- Scalability
- Developer efficiency
- Better user experience

This sample post shows how your blog will look with real content.`,
      readingTime: '8 min read',
      tags: ['design', 'systems', 'ui-ux'],
      author: 'Linear Blog'
    }
  ];
} 