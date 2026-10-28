import React, { useState } from 'react';
import { ArrowRight, ChevronRight, TrendingUp, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { CASE_STUDIES_DATA } from '../data/mockData';
import { CaseStudy, CaseStudyCategory } from '../types';
import { CaseStudyModal } from './CaseStudyModal';

interface PortfolioSectionProps {
  onOpenContactWithStudy: (studyTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenContactWithStudy }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  const categories = ['All', 'E-Commerce', 'Retail POS', 'Cloud Solutions', 'Enterprise Applications'];

  const filteredStudies =
    activeCategory === 'All'
      ? CASE_STUDIES_DATA
      : CASE_STUDIES_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="case-studies" className="py-20 lg:py-28 border-b border-slate-800 bg-[#080e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Client Success Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 text-balance">
              Featured Case Studies &amp; Previous Work.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Real business outcomes delivered for retailers, commerce brands, and enterprise teams. See the challenge, our architecture, and the measurable results.
            </p>
          </div>

          {/* US-07: Interactive Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#0a1226] border border-slate-800 rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="rounded-2xl border border-slate-800 bg-[#0a1226]/80 hover:bg-[#0f1d3d] hover:border-amber-500/40 transition-all duration-300 p-7 flex flex-col justify-between group shadow-xl relative overflow-hidden"
            >
              <div>
                {/* Unboxed Metadata header */}
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-3">
                  <span className="text-amber-400 font-bold">{study.category}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{study.platform}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{study.duration}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors leading-snug">
                  {study.title}
                </h3>

                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  {study.summary}
                </p>

                {/* Quantified Outcomes Strip */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-[#060b18] border border-slate-800/80 mb-6">
                  {study.outcomes.slice(0, 2).map((metric, idx) => (
                    <div key={idx}>
                      <div className="flex items-center gap-1 text-amber-400 text-lg sm:text-xl font-bold font-mono tabular-nums">
                        <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                        <span>{metric.metric}</span>
                      </div>
                      <div className="text-xs font-semibold text-slate-200 mt-0.5">
                        {metric.label}
                      </div>
                      <div className="text-[11px] text-slate-400 truncate mt-0.5">
                        {metric.context}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {study.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono text-slate-300 bg-[#060b18] border border-slate-800 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>{study.clientName}</span>
                </span>

                <button
                  type="button"
                  onClick={() => setActiveModalStudy(study)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>View Project Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        caseStudy={activeModalStudy}
        onClose={() => setActiveModalStudy(null)}
        onConsultationRequest={(studyTitle) => onOpenContactWithStudy(studyTitle)}
      />
    </section>
  );
};
