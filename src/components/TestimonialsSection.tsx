import React from 'react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { Star, ShieldCheck, Sparkles, Building2, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 border-b border-slate-800 bg-[#060b18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Feedback &amp; Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 text-balance">
            Trusted by Business Leaders &amp; Engineers.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Here is what our retail, e-commerce, and enterprise partners say about working with B&amp;K Tech Solutions.
          </p>
        </div>

        {/* Testimonials Grid (US-10) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-800 bg-[#0a1226]/80 p-7 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 group shadow-lg relative"
            >
              <div>
                {/* Rating & Project Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 text-cyan-300 border border-slate-800">
                    {item.projectType}
                  </span>
                </div>

                {/* Quote body */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Attributions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.clientName}
                  </div>
                  <div className="text-xs text-slate-400">
                    {item.role} · <strong className="text-slate-300 font-medium">{item.company}</strong>
                  </div>
                </div>

                {item.verified && (
                  <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono font-medium">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verified Project</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
