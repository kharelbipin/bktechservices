import React from 'react';
import { X, CheckCircle2, ArrowRight, Building2, Clock, Layers, Sparkles } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onConsultationRequest: (studyTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onConsultationRequest
}) => {
  if (!caseStudy) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl rounded-2xl border border-slate-800 bg-[#0a1226] shadow-2xl p-6 sm:p-10 my-8 text-left max-h-[90vh] overflow-y-auto">
        {/* Top bar */}
        <div className="flex items-start justify-between pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mb-2">
              <span className="text-amber-400 font-bold">{caseStudy.category}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-slate-400" />
                {caseStudy.platform}
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {caseStudy.duration}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {caseStudy.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-slate-300 mt-2 font-medium">
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>{caseStudy.clientName}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close case study"
          >
            <X className="w-6 h-6 text-amber-400" />
          </button>
        </div>

        {/* Quantified Outcomes Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-slate-800">
          {caseStudy.outcomes.map((outcome, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-[#060b18] border border-slate-800">
              <div className="text-2xl font-black font-mono text-amber-400 tabular-nums">
                {outcome.metric}
              </div>
              <div className="text-xs font-semibold text-slate-200 mt-0.5">
                {outcome.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                {outcome.context}
              </div>
            </div>
          ))}
        </div>

        {/* Narrative Sections */}
        <div className="py-6 space-y-6 text-sm text-slate-300">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              The Business &amp; Technical Challenge
            </h4>
            <p className="text-slate-200 leading-relaxed text-base">
              {caseStudy.challenge}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              B&amp;K Tech Solutions Implementation
            </h4>
            <p className="text-slate-200 leading-relaxed text-base">
              {caseStudy.solution}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Key Architecture &amp; Delivery Highlights
            </h4>
            <div className="space-y-2.5">
              {caseStudy.architectureHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-slate-200">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Testimonial if available */}
          {caseStudy.quote && (
            <div className="p-5 rounded-2xl bg-[#060b18] border border-slate-800 text-sm">
              <blockquote className="italic text-slate-200 text-base mb-4 leading-relaxed">
                "{caseStudy.quote.text}"
              </blockquote>
              <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-800">
                <div>
                  <span className="font-bold text-white">{caseStudy.quote.author}</span>
                  <span className="text-slate-400"> · {caseStudy.quote.role}, {caseStudy.quote.company}</span>
                </div>
                <span className="text-amber-400 font-mono text-[11px] flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Verified Review
                </span>
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Technologies Deployed
            </h4>
            <div className="flex flex-wrap gap-2">
              {caseStudy.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono bg-[#060b18] border border-slate-800 text-slate-300 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions (US-07: Request a Similar Solution) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
          <div className="text-xs text-slate-400">
            Interested in a similar transformation for your company?
          </div>
          <button
            type="button"
            onClick={() => {
              const title = caseStudy.title;
              onClose();
              onConsultationRequest(title);
            }}
            className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-full transition-all inline-flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Request a Similar Solution</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
