import { getPostBySlug } from '@/lib/posts';

interface BlogPostLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostLayoutProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - Linear Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostLayout({ children }: BlogPostLayoutProps) {
  return <>{children}</>;
}