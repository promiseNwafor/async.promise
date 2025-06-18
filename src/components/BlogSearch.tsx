'use client';

import { useState, useMemo, useTransition, useDeferredValue } from 'react';
import { Search } from 'lucide-react';
import { Post } from '@/lib/posts';
import { PostCard } from '@/components/PostCard';

interface BlogSearchProps {
  posts: Post[];
}

export function BlogSearch({ posts }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isPending, startTransition] = useTransition();
  const deferredSearchQuery = useDeferredValue(searchQuery);

  const filteredPosts = useMemo(() => {
    if (!deferredSearchQuery.trim()) return posts;
    
    const query = deferredSearchQuery.toLowerCase();
    return posts.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags?.some(tag => tag.toLowerCase().includes(query))
    );
  }, [posts, deferredSearchQuery]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    startTransition(() => {
      // This will trigger the deferred value update
    });
  };

  return (
    <>
      {/* Search */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:bg-white/10 focus:border-white/20 focus:ring-2 focus:ring-[#5e5ce6]/20 transition-all outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => handleSearchChange('')}
              disabled={isPending}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Results count */}
      <div className="text-center mb-8">
        <p className="text-xl text-white/60">
          {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} 
          {deferredSearchQuery ? ` found for "${deferredSearchQuery}"` : ''}
        </p>
      </div>

      {/* Results */}
      {filteredPosts.length > 0 ? (
        <>
          {/* Featured Article - only show when not searching */}
          {!deferredSearchQuery && filteredPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#5e5ce6] rounded-full" />
                Featured Article
              </h2>
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#5e5ce6]/10 to-transparent border border-white/20 hover-lift">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-white/50 mb-4">
                      <span>{new Date(filteredPosts[0].date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                      <div className="w-1 h-1 bg-white/30 rounded-full" />
                      <span>{filteredPosts[0].readingTime}</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                      {filteredPosts[0].title}
                    </h3>
                    
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {filteredPosts[0].excerpt}
                    </p>
                    
                    {filteredPosts[0].tags && filteredPosts[0].tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {filteredPosts[0].tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-lg font-medium border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <a
                      href={`/blog/${filteredPosts[0].slug}`}
                      className="inline-flex items-center gap-2 bg-[#5e5ce6] hover:bg-[#4f4cdb] text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
                    >
                      Read Article
                      <div className="w-4 h-4 border-t-2 border-r-2 border-white transform rotate-45" />
                    </a>
                  </div>
                  
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-[#5e5ce6]/20 to-[#4f4cdb]/20 rounded-xl border border-white/10 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                        <div className="w-8 h-8 text-white/60">✨</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* All Articles */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#5e5ce6] rounded-full" />
              {deferredSearchQuery ? 'Search Results' : 'All Articles'} ({filteredPosts.length})
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </>
      ) : deferredSearchQuery ? (
        <div className="text-center py-24">
          <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-white/40" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">No articles found</h3>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            We couldn&apos;t find any articles matching &quot;{deferredSearchQuery}&quot;. Try searching with different keywords.
          </p>
          <button
            onClick={() => handleSearchChange('')}
            className="inline-flex items-center gap-2 bg-[#5e5ce6] hover:bg-[#4f4cdb] text-white px-6 py-3 rounded-xl font-medium transition-all hover:scale-105"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="text-center py-24">
          <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 text-white/40">📚</div>
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">No articles yet</h3>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            We&apos;re working on bringing you amazing content. Check back soon for insights 
            on technology, design, and innovation.
          </p>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-md mx-auto">
            <p className="text-white/50 text-sm">
              Create your first blog post by adding a Markdown file to{' '}
              <code className="bg-white/10 px-2 py-1 rounded text-[#5e5ce6] font-mono">
                src/content/posts
              </code>
            </p>
          </div>
        </div>
      )}
    </>
  );
}