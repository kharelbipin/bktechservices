import React, { useState } from 'react';
import { TECH_STACK_DATA } from '../data/mockData';
import { TechStackItem } from '../types';
import { Code2, Server, Cloud, Database, Cpu, Sparkles } from 'lucide-react';

export const TechExpertise: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Frontend' | 'Backend' | 'Cloud' | 'Database' | 'DevOps'>('All');

  const categories = [
    { id: 'All', label: 'All Technologies' },
    { id: 'Frontend', label: 'Frontend & Web' },
    { id: 'Backend', label: 'Backend & APIs' },
    { id: 'Cloud', label: 'Cloud Infrastructure' },
    { id: 'Database', label: 'Databases & Storage' },
    { id: 'DevOps', label: 'DevOps & Containers' }
  ];

  const filteredItems = activeCategory === 'All'
    ? TECH_STACK_DATA
    : TECH_STACK_DATA.filter((item) => item.category === activeCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Frontend': return <Code2 className="w-4 h-4 text-amber-400" />;
      case 'Backend': return <Server className="w-4 h-4 text-cyan-400" />;
      case 'Cloud': return <Cloud className="w-4 h-4 text-amber-400" />;
      case 'Database': return <Database className="w-4 h-4 text-cyan-400" />;
      case 'DevOps': return <Cpu className="w-4 h-4 text-amber-400" />;
      default: return <Sparkles className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="technology" className="py-20 lg:py-28 border-b border-slate-800 bg-[#060b18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technology Stack &amp; Tooling</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 text-balance">
              Technology Expertise You Can Rely On.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We leverage production-tested languages, enterprise frameworks, and reliable cloud toolchains suited to your exact performance and security requirements.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#0a1226] border border-slate-800 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((tech) => (
            <div
              key={tech.name}
              className="p-5 rounded-2xl border border-slate-800 bg-[#0a1226]/80 hover:bg-[#0f1d3d] hover:border-amber-500/40 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-[#060b18] border border-slate-800 group-hover:border-amber-500/40 transition-colors">
                      {getCategoryIcon(tech.category)}
                    </div>
                    <span className="text-xs font-semibold text-slate-400">{tech.category}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-800">
                    {tech.popularityTag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {tech.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Production Tested</span>
                <span className="text-amber-400">✓ Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
