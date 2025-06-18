import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { Clock, Calendar, ArrowLeft, Share, BookOpen, User } from 'lucide-react';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ShareButton } from '@/components/ShareButton';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative">
      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-white/70 hover:text-[#5e5ce6] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Articles
        </Link>
      </div>

      {/* Article Header */}
      <header className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-20" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            {/* Metadata */}
            <div className="flex items-center justify-center gap-4 text-sm text-white/50 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>
                  {format(new Date(post.date), 'MMMM dd, yyyy')}
                </time>
              </div>
              <div className="w-1 h-1 bg-white/30 rounded-full" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime}</span>
              </div>
              <div className="w-1 h-1 bg-white/30 rounded-full" />
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white max-w-4xl mx-auto">
              {post.title}
            </h1>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white/10 text-white/70 text-sm rounded-xl font-medium border border-white/10 hover:bg-white/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-center gap-4">
              <ShareButton 
                title={post.title}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all"
              >
                <Share className="w-4 h-4" />
                Share
              </ShareButton>
              <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white/70">
                <BookOpen className="w-4 h-4" />
                {post.readingTime}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 lg:px-8 pb-24">
        <div className="relative">
          {/* Subtle background */}
          <div className="absolute inset-0 bg-white/[0.02] rounded-2xl border border-white/5" />
          
          {/* Content */}
          <div className="relative p-8 md:p-12">
            <div className="prose prose-lg prose-dark max-w-none">
              <MDXRemote source={post.content} />
            </div>
          </div>
        </div>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-white/60 text-sm mb-2">Written by</p>
              <p className="text-white font-semibold">{post.author}</p>
            </div>
            
            <div className="flex items-center gap-4">
              <ShareButton 
                title={post.title}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#5e5ce6] hover:bg-[#4f4cdb] text-white rounded-xl font-medium transition-all hover:scale-105"
              >
                <Share className="w-4 h-4" />
                Share Article
              </ShareButton>
              
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all"
              >
                More Articles
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
} 