import React from 'react';
import { HOW_WE_WORK_STEPS } from '../data/mockData';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Compass,
  Layout,
  Code2,
  Rocket
} from 'lucide-react';

interface HowWeWorkProps {
  onScheduleCall: () => void;
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onScheduleCall }) => {
  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Compass className="w-5 h-5 text-amber-400" />;
      case 1:
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 2:
        return <Code2 className="w-5 h-5 text-amber-400" />;
      case 3:
        return <Rocket className="w-5 h-5 text-cyan-400" />;
      default:
        return <Compass className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="approach" className="py-20 lg:py-28 border-b border-slate-800 bg-[#060b18] relative">
      {/* Compatibility anchor for #process */}
      <span id="process" className="absolute -top-20" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* US-04 Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Development Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 text-balance">
            From Your Idea to Reality.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We follow a structured, communicative 4-stage engineering process designed to take your concept from requirements through architecture, agile coding, and a dependable production launch.
          </p>
        </div>

        {/* US-04: Four-Step Visual Timeline with Connecting Lines */}
        <div className="relative mb-14">
          {/* Desktop Connecting Line behind cards */}
          <div
            className="hidden lg:block absolute top-1/2 left-8 right-8 -translate-y-8 h-0.5 bg-gradient-to-r from-amber-500/40 via-cyan-500/40 to-amber-500/40 pointer-events-none z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {HOW_WE_WORK_STEPS.map((step, idx) => (
              <div
                key={step.stepNumber}
                className="rounded-2xl border border-slate-800 bg-[#0a1226]/90 p-6 flex flex-col justify-between hover:border-amber-500/50 hover:bg-[#0f1d3d] transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-amber-500/5 relative"
              >
                {/* Step Marker Badge */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#060b18] border border-slate-800 flex items-center justify-center group-hover:border-amber-500/40 transition-colors shadow-inner">
                      {getStepIcon(idx)}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-mono font-bold text-amber-400">
                        STEP {step.stepNumber}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-xs text-amber-400/90 font-medium mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Outputs / Deliverables List */}
                  <div className="space-y-2 pt-4 border-t border-slate-800/80">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Key Outputs:
                    </div>
                    {step.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout Banner with US-04 "Start Your Project" button */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0a1226] via-[#0f1d3d] to-[#0a1226] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Ready to turn your idea into a production-grade system?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Schedule a preliminary discovery discussion to map out your architecture and project scope.
            </p>
          </div>
          <button
            type="button"
            onClick={onScheduleCall}
            className="px-8 py-3.5 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-full transition-all whitespace-nowrap shadow-lg shadow-amber-950/40 active:scale-98 inline-flex items-center gap-2"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
