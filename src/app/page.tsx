import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { PostCard } from '@/components/PostCard';
import { ArrowRight, Sparkles, Code, Lightbulb } from 'lucide-react';

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#5e5ce6]/20 to-transparent rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-[#5e5ce6]/10 to-transparent rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-br from-[#5e5ce6]/15 to-transparent rounded-full blur-lg animate-pulse delay-500" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 mb-8">
            <Sparkles className="w-4 h-4" />
            Welcome to the future of blogging
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Ideas that</span>
            <br />
            <span className="text-white">shape tomorrow</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Exploring the intersection of technology, design, and human creativity. 
            Where complex ideas become simple insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 bg-[#5e5ce6] hover:bg-[#4f4cdb] text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 hover-lift"
            >
              Explore Articles
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 font-medium transition-all hover-lift backdrop-blur-sm"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover-lift">
            <div className="w-12 h-12 bg-gradient-to-br from-[#5e5ce6] to-[#4f4cdb] rounded-xl flex items-center justify-center mx-auto mb-4">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Technical Deep Dives</h3>
            <p className="text-white/60">Exploring complex technical concepts with clarity and depth.</p>
          </div>
          
          <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover-lift">
            <div className="w-12 h-12 bg-gradient-to-br from-[#5e5ce6] to-[#4f4cdb] rounded-xl flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Innovation Insights</h3>
            <p className="text-white/60">Thoughts on emerging technologies and their impact on society.</p>
          </div>
          
          <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover-lift">
            <div className="w-12 h-12 bg-gradient-to-br from-[#5e5ce6] to-[#4f4cdb] rounded-xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Creative Process</h3>
            <p className="text-white/60">Behind the scenes of building digital experiences.</p>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-24">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Latest Articles</h2>
            <p className="text-white/60">Fresh perspectives on technology and design</p>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-2 text-[#5e5ce6] hover:text-white font-medium transition-colors group"
          >
            View all articles
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {posts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Code className="w-8 h-8 text-white/40" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">No articles yet</h3>
            <p className="text-white/60 mb-6">
              Create your first blog post by adding a Markdown file to the{' '}
              <code className="bg-white/10 px-2 py-1 rounded text-sm">src/content/posts</code> directory.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#5e5ce6] hover:text-white transition-colors"
            >
              Learn more about this blog
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
        
        <div className="flex sm:hidden justify-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#5e5ce6] hover:text-white font-medium transition-colors group"
          >
            View all articles
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
