import { getAllPosts } from '@/lib/posts';
import { BlogSearch } from '@/components/BlogSearch';
import { Sparkles } from 'lucide-react';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="relative">
      {/* Header Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 mb-6">
              <Sparkles className="w-4 h-4" />
              AI insights and practical patterns
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">All Articles</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-8">
              Exploring AI in software engineering - from async patterns to production challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-24">
        <BlogSearch posts={posts} />
      </section>
    </div>
  );
} 