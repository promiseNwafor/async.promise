import Link from 'next/link';
import { format } from 'date-fns';
import { Clock, Calendar, ArrowUpRight } from 'lucide-react';
import type { Post } from '@/lib/posts';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover-lift overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5e5ce6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      
      <div className="relative z-10">
        {/* Header with metadata */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3 text-xs text-white/50">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <time dateTime={post.date}>
                {format(new Date(post.date), 'MMM dd, yyyy')}
              </time>
            </div>
            <div className="w-1 h-1 bg-white/30 rounded-full" />
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{post.readingTime}</span>
            </div>
          </div>
          
          <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#5e5ce6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
        </div>
        
        {/* Title */}
        <h2 className="text-lg font-semibold text-white mb-3 leading-tight group-hover:text-[#5e5ce6] transition-colors duration-200">
          <Link href={`/blog/${post.slug}`} className="block">
            {post.title}
          </Link>
        </h2>
        
        {/* Excerpt */}
        <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-md font-medium border border-white/10"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="px-2 py-1 text-white/50 text-xs">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>
        )}
        
        {/* Read more link */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-[#5e5ce6] hover:text-white transition-colors"
        >
          Read article
          <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
} 