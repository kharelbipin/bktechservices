import React, { useState } from 'react';
import { Search, ChevronRight, BookOpen, Sparkles } from 'lucide-react';
import { BLOG_POSTS_DATA } from '../data/mockData';
import { BlogPost } from '../types';
import { ArticleModal } from './ArticleModal';

export const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const categories = [
    'All',
    'Software Development',
    'Cloud Computing',
    'Business Automation',
    'Technology Trends'
  ];

  const filteredPosts = BLOG_POSTS_DATA.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="insights" className="py-20 lg:py-28 border-b border-slate-800 bg-[#080e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technology Insights &amp; Articles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 text-balance">
              Expert Insights on Software &amp; Cloud.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Architectural lessons, cost-optimization strategies, and modern business automation techniques from our engineering practice.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technical insights..."
              className="w-full pl-9 pr-3 py-2 text-xs text-white bg-[#060b18] border border-slate-800 rounded-xl placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Buttons (US-13) */}
        <div className="flex items-center gap-1.5 p-1 bg-[#0a1226] border border-slate-800 rounded-xl max-w-full overflow-x-auto mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setActiveArticle(post)}
                className="rounded-2xl border border-slate-800 bg-[#0a1226]/80 hover:bg-[#0f1d3d] hover:border-amber-500/40 transition-all duration-300 p-6 flex flex-col justify-between cursor-pointer group shadow-lg"
              >
                <div>
                  {/* Unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-3">
                    <span className="text-amber-400 font-bold">{post.category}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Author and Action */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold flex items-center justify-center border border-amber-500/40">
                      {post.author.avatarInitials}
                    </div>
                    <span className="text-xs text-slate-300 font-medium">
                      {post.author.name}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 group-hover:text-amber-300">
                    <span>Read Article</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl border border-slate-800 bg-[#0a1226]/40">
            <BookOpen className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <div className="text-sm font-semibold text-white mb-1">No articles found</div>
            <div className="text-xs text-slate-400">
              Try adjusting your search query or selected category filter.
            </div>
          </div>
        )}
      </div>

      {/* Full Article Reader Modal */}
      <ArticleModal
        post={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </section>
  );
};
