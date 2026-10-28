import React from 'react';
import { X, CheckCircle2, Share2, Check } from 'lucide-react';
import { BlogPost } from '../types';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ post, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!post) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl rounded-2xl border border-slate-800 bg-[#0a1226] shadow-2xl p-6 sm:p-10 my-8 text-left max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-slate-800">
          <div className="pr-4">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-3">
              <span className="text-amber-400 font-bold">{post.category}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{post.publishedDate}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              {post.title}
            </h2>
            <div className="flex items-center gap-3 mt-4 text-xs text-slate-300">
              <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-300 font-bold flex items-center justify-center text-xs border border-amber-500/40">
                {post.author.avatarInitials}
              </div>
              <div>
                <span className="font-semibold text-white">{post.author.name}</span>
                <span className="text-slate-400"> · {post.author.role}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title="Copy link"
              aria-label="Copy article link"
            >
              {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Share2 className="w-5 h-5" />}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5 text-amber-400" />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="py-6 space-y-8 text-slate-300">
          <p className="text-lg text-slate-200 font-medium leading-relaxed border-b border-slate-800/80 pb-6">
            {post.excerpt}
          </p>

          {post.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xl font-bold text-white tracking-tight">
                {section.sectionTitle}
              </h3>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base text-slate-300 leading-relaxed">
                  {p}
                </p>
              ))}

              {section.codeSnippet && (
                <div className="my-4 rounded-xl border border-slate-800 bg-[#060b18] p-4 font-mono text-xs text-slate-300 overflow-x-auto">
                  <div className="text-[11px] text-amber-400 mb-2 font-semibold">
                    {section.codeSnippet.language.toUpperCase()}
                  </div>
                  <pre>
                    <code>{section.codeSnippet.code}</code>
                  </pre>
                </div>
              )}

              {section.keyTakeaways && (
                <div className="p-4 rounded-xl bg-[#060b18] border border-slate-800 space-y-2 mt-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                    Key Architectural Takeaways
                  </div>
                  {section.keyTakeaways.map((takeaway, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Tags */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono bg-[#060b18] border border-slate-800 text-slate-400 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-800">
          <div className="text-xs text-slate-400">
            Published by B&amp;K Tech Solutions Architecture Practice
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
};
