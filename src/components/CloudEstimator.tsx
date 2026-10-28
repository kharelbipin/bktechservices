import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Check, Sparkles, Clock, Layers, ArrowLeft, CheckCircle2, ShieldAlert } from 'lucide-react';

interface CloudEstimatorProps {
  onTransferToContact: (estimateData: {
    service: string;
    budget: string;
    timeline: string;
    summary: string;
  }) => void;
}

export const CloudEstimator: React.FC<CloudEstimatorProps> = ({ onTransferToContact }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [projectType, setProjectType] = useState<string>('custom-business-apps');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'auth',
    'admin-dash',
    'api-integrations'
  ]);
  const [timelineSpeed, setTimelineSpeed] = useState<'standard' | 'accelerated' | 'enterprise'>('standard');

  const projectTypes = [
    { id: 'custom-business-apps', name: 'Custom Business Applications', baseWeeks: 8, baseCost: 18, desc: 'Bespoke web apps, internal tools, and operational workflows' },
    { id: 'ecommerce-stores', name: 'E-Commerce & Online Stores', baseWeeks: 6, baseCost: 14, desc: 'Digital storefronts, product catalogs, and checkout funnels' },
    { id: 'pos-inventory', name: 'Point-of-Sale & Inventory Systems', baseWeeks: 8, baseCost: 16, desc: 'Multi-store registers, offline caching, and barcode scanners' },
    { id: 'cloud-infrastructure', name: 'Cloud Infrastructure & Applications', baseWeeks: 6, baseCost: 15, desc: 'Azure/AWS cloud modernization, Terraform, and Docker' },
    { id: 'websites-portals', name: 'Websites & Web Portals', baseWeeks: 4, baseCost: 10, desc: 'High-speed corporate websites and client self-service portals' },
    { id: 'automation-api', name: 'Business Automation & API Integrations', baseWeeks: 4, baseCost: 9, desc: 'Connecting CRM, ERP, and accounting pipelines' }
  ];

  const featureOptions = [
    { id: 'auth', name: 'User Authentication & Role Permissions', cost: 3, weeks: 1 },
    { id: 'payment', name: 'Payment Gateway Integration (Stripe/Square)', cost: 4, weeks: 1 },
    { id: 'admin-dash', name: 'Admin Analytics & Reporting Dashboard', cost: 5, weeks: 2 },
    { id: 'realtime-sync', name: 'Real-Time Data Sync & Webhooks', cost: 5, weeks: 2 },
    { id: 'offline-cache', name: 'Offline Data Caching & Local Storage', cost: 4, weeks: 2 },
    { id: 'api-integrations', name: 'Third-Party ERP/CRM API Bridges', cost: 4, weeks: 1 }
  ];

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      if (selectedFeatures.length > 1) {
        setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
      }
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const calculation = useMemo(() => {
    const selectedProj = projectTypes.find((p) => p.id === projectType) || projectTypes[0];
    let totalCost = selectedProj.baseCost;
    let totalWeeks = selectedProj.baseWeeks;

    selectedFeatures.forEach((featId) => {
      const feat = featureOptions.find((f) => f.id === featId);
      if (feat) {
        totalCost += feat.cost;
        totalWeeks += feat.weeks;
      }
    });

    if (timelineSpeed === 'accelerated') {
      totalCost = Math.round(totalCost * 1.2);
      totalWeeks = Math.max(4, Math.round(totalWeeks * 0.7));
    } else if (timelineSpeed === 'enterprise') {
      totalCost = Math.round(totalCost * 1.35);
      totalWeeks = Math.round(totalWeeks * 1.3);
    }

    const minCost = Math.round(totalCost * 0.9);
    const maxCost = Math.round(totalCost * 1.2);

    let complexity = 'Moderate Scope';
    if (totalCost > 35) complexity = 'Comprehensive Enterprise';
    else if (totalCost < 18) complexity = 'Focused Milestone';

    return {
      serviceName: selectedProj.name,
      costRange: `$${minCost}k – $${maxCost}k`,
      timeline: `${totalWeeks} – ${totalWeeks + 3} weeks`,
      complexity,
      featureCount: selectedFeatures.length
    };
  }, [projectType, selectedFeatures, timelineSpeed]);

  const handleApplyEstimate = () => {
    onTransferToContact({
      service: calculation.serviceName,
      budget: calculation.costRange,
      timeline: calculation.timeline,
      summary: `Indicative Project Scope: ${calculation.serviceName}. Features selected: ${selectedFeatures.length} capabilities. Timeline profile: ${timelineSpeed}. Estimated indicative range: ${calculation.costRange} across ${calculation.timeline}.`
    });
  };

  return (
    <section id="estimator" className="py-20 lg:py-28 border-b border-slate-800 bg-[#080e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Project Scope Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 text-balance">
            Estimate Your Project Scope &amp; Timeline.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Configure your technical needs through our interactive 3-step estimator to see an indicative scope and team structure.
          </p>
        </div>

        {/* Step-by-Step Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step Progress Bar (US-09) */}
            <div className="p-4 rounded-xl bg-[#0a1226] border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center">
                  {currentStep}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white">
                  {currentStep === 1 && 'Step 1: Select Project Discipline'}
                  {currentStep === 2 && 'Step 2: Choose Essential Capabilities'}
                  {currentStep === 3 && 'Step 3: Timeline & Delivery Speed'}
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400">Step {currentStep} of 3</span>
            </div>

            {/* Step 1 Content: Project Type */}
            {currentStep === 1 && (
              <div className="p-6 rounded-2xl border border-slate-800 bg-[#0a1226] space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  Select Your Primary Service Need:
                </div>
                {projectTypes.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProjectType(item.id)}
                    className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                      projectType === item.id
                        ? 'bg-amber-500/10 border-amber-500/80 text-white'
                        : 'bg-[#060b18] border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-bold">{item.name}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
                    </div>
                    {projectType === item.id && (
                      <Check className="w-5 h-5 text-amber-400 shrink-0 ml-3" />
                    )}
                  </button>
                ))}

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-colors"
                  >
                    <span>Next: Select Features</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 Content: Key Features */}
            {currentStep === 2 && (
              <div className="p-6 rounded-2xl border border-slate-800 bg-[#0a1226] space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  Select Required Architectural Features:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {featureOptions.map((feat) => {
                    const isSelected = selectedFeatures.includes(feat.id);
                    return (
                      <button
                        key={feat.id}
                        type="button"
                        onClick={() => toggleFeature(feat.id)}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'bg-amber-500/10 border-amber-500/80 text-white'
                            : 'bg-[#060b18] border-slate-800 hover:border-slate-700 text-slate-400'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white">{feat.name}</span>
                          {isSelected && <Check className="w-4 h-4 text-amber-400 shrink-0" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-colors"
                  >
                    <span>Next: Delivery Timeline</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 Content: Timeline Speed */}
            {currentStep === 3 && (
              <div className="p-6 rounded-2xl border border-slate-800 bg-[#0a1226] space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  Select Desired Delivery Pacing:
                </div>
                {[
                  { id: 'standard', name: 'Standard Pacing (Recommended)', desc: 'Balanced bi-weekly sprints with steady stakeholder reviews' },
                  { id: 'accelerated', name: 'Accelerated Sprint Pacing', desc: 'Dedicated double-pod capacity for urgent launch deadlines' },
                  { id: 'enterprise', name: 'Comprehensive Enterprise Phase', desc: 'Thorough enterprise hardening, audit trials, and multi-team training' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTimelineSpeed(item.id as any)}
                    className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                      timelineSpeed === item.id
                        ? 'bg-amber-500/10 border-amber-500/80 text-white'
                        : 'bg-[#060b18] border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-bold">{item.name}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
                    </div>
                    {timelineSpeed === item.id && (
                      <Check className="w-5 h-5 text-amber-400 shrink-0 ml-3" />
                    )}
                  </button>
                ))}

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  <span className="text-xs text-emerald-400 font-mono">
                    ✓ Estimate Ready
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-800 bg-[#0a1226] p-6 sm:p-7 shadow-2xl space-y-6 sticky top-28">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Indicative Project Summary
                  </span>
                </div>
                <span className="text-xs font-mono text-cyan-400 font-semibold">
                  {calculation.complexity}
                </span>
              </div>

              {/* Scope & Cost Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#060b18] border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Estimated Timeline</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">
                    {calculation.timeline}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#060b18] border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-amber-400" />
                    <span>Indicative Range</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-amber-400 tabular-nums">
                    {calculation.costRange}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#060b18] border border-slate-800 space-y-2 text-xs">
                <div className="text-slate-400">
                  <strong>Selected Discipline:</strong> {calculation.serviceName}
                </div>
                <div className="text-slate-400">
                  <strong>Active Features:</strong> {calculation.featureCount} modules included
                </div>
              </div>

              {/* Direct consultation transfer CTA */}
              <button
                type="button"
                onClick={handleApplyEstimate}
                className="w-full py-3.5 px-5 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-full transition-all shadow-lg active:scale-98 flex items-center justify-center gap-2"
              >
                <span>Carry Estimate to Consultation Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Disclaimer (US-09 requirement) */}
              <p className="text-[11px] text-slate-500 leading-snug text-center">
                * Note: Indicative calculation for planning purposes. Official scopes and fixed-bid quotes are finalized during our free discovery consultation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
