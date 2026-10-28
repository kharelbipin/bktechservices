import React, { useState } from 'react';
import {
  Code,
  ShoppingCart,
  Cloud,
  Store,
  Workflow,
  Globe,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  X,
  Sparkles,
  Info
} from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForContact }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-6 h-6 text-amber-400" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-6 h-6 text-amber-400" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-cyan-400" />;
      case 'Store':
        return <Store className="w-6 h-6 text-amber-400" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-cyan-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-cyan-400" />;
      default:
        return <Code className="w-6 h-6 text-amber-400" />;
    }
  };

  // Conceptual visual demo for each solution card (clearly labeled per US-02)
  const renderConceptualVisual = (type: ServiceItem['conceptualPreviewType']) => {
    switch (type) {
      case 'dashboard':
        return (
          <div className="relative w-full h-32 rounded-xl bg-[#060b18] border border-slate-800 p-3 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-[10px] font-mono text-slate-300 font-semibold">Operations Dashboard</span>
              </div>
              <span className="text-[9px] font-mono text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-800/40">
                .NET + React
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-1">
              <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800">
                <div className="text-[9px] text-slate-400">Throughput</div>
                <div className="text-xs font-bold text-amber-400 font-mono">14.2k req/s</div>
              </div>
              <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800">
                <div className="text-[9px] text-slate-400">Queue State</div>
                <div className="text-xs font-bold text-emerald-400 font-mono">Healthy (0)</div>
              </div>
              <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800">
                <div className="text-[9px] text-slate-400">Database</div>
                <div className="text-xs font-bold text-cyan-400 font-mono">SQL Clustered</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono pt-1 border-t border-slate-800/60">
              <span>Status: Active Pipeline</span>
              <span className="text-amber-400/90 italic">Conceptual Blueprint</span>
            </div>
          </div>
        );

      case 'ecommerce':
        return (
          <div className="relative w-full h-32 rounded-xl bg-[#060b18] border border-slate-800 p-3 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[10px] font-mono text-slate-300 font-semibold">Fast Checkout Funnel</span>
              </div>
              <span className="text-[9px] font-mono text-amber-400 bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/40">
                Stripe + Next.js
              </span>
            </div>
            <div className="flex items-center gap-3 my-1">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-cyan-500/20 border border-slate-700 flex items-center justify-center shrink-0">
                <ShoppingCart className="w-5 h-5 text-amber-300" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="h-2 w-3/4 rounded bg-slate-700" />
                <div className="h-2 w-1/2 rounded bg-amber-500/40" />
                <div className="text-[10px] font-mono text-emerald-400 font-bold">1-Click Mobile Pay Ready</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono pt-1 border-t border-slate-800/60">
              <span>PCI-Compliant Flow</span>
              <span className="text-amber-400/90 italic">Conceptual Blueprint</span>
            </div>
          </div>
        );

      case 'pos':
        return (
          <div className="relative w-full h-32 rounded-xl bg-[#060b18] border border-slate-800 p-3 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-[10px] font-mono text-slate-300 font-semibold">Retail Register Terminal</span>
              </div>
              <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
                Offline Cache Sync
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-1">
              <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                <Store className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="text-[8px] text-slate-400">Barcode Peripheral</div>
                  <div className="text-[10px] font-bold text-white">Scanner Active</div>
                </div>
              </div>
              <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <div className="text-[8px] text-slate-400">Inventory Sync</div>
                  <div className="text-[10px] font-bold text-white">Multi-Store Live</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono pt-1 border-t border-slate-800/60">
              <span>Hardware Driver Layer</span>
              <span className="text-amber-400/90 italic">Conceptual Blueprint</span>
            </div>
          </div>
        );

      case 'cloud':
        return (
          <div className="relative w-full h-32 rounded-xl bg-[#060b18] border border-slate-800 p-3 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-[10px] font-mono text-slate-300 font-semibold">Kubernetes &amp; Cloud Pods</span>
              </div>
              <span className="text-[9px] font-mono text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-800/40">
                Azure / AWS IaC
              </span>
            </div>
            <div className="flex items-center justify-around my-1">
              <div className="text-center">
                <div className="w-7 h-7 mx-auto rounded-lg bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-[10px] font-mono text-cyan-300 font-bold">
                  Pod A
                </div>
                <div className="text-[8px] text-slate-400 mt-1">Autoscaling</div>
              </div>
              <div className="text-slate-600 font-mono text-xs">⇄</div>
              <div className="text-center">
                <div className="w-7 h-7 mx-auto rounded-lg bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-[10px] font-mono text-amber-300 font-bold">
                  Pod B
                </div>
                <div className="text-[8px] text-slate-400 mt-1">Self-Healing</div>
              </div>
              <div className="text-slate-600 font-mono text-xs">⇄</div>
              <div className="text-center">
                <div className="w-7 h-7 mx-auto rounded-lg bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-[10px] font-mono text-emerald-300 font-bold">
                  SQL
                </div>
                <div className="text-[8px] text-slate-400 mt-1">Encrypted</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono pt-1 border-t border-slate-800/60">
              <span>Terraform Codified</span>
              <span className="text-amber-400/90 italic">Conceptual Blueprint</span>
            </div>
          </div>
        );

      case 'portal':
        return (
          <div className="relative w-full h-32 rounded-xl bg-[#060b18] border border-slate-800 p-3 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-[10px] font-mono text-slate-300 font-semibold">Client Self-Service Portal</span>
              </div>
              <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
                RBAC Security
              </span>
            </div>
            <div className="space-y-1.5 my-1">
              <div className="flex items-center justify-between p-1 rounded bg-slate-900/60 border border-slate-800 text-[9px]">
                <span className="text-slate-300">Client Document Center</span>
                <span className="text-amber-400 font-mono font-semibold">Authenticated</span>
              </div>
              <div className="flex items-center justify-between p-1 rounded bg-slate-900/60 border border-slate-800 text-[9px]">
                <span className="text-slate-300">Invoice &amp; Milestone Billing</span>
                <span className="text-cyan-400 font-mono font-semibold">Instant Access</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono pt-1 border-t border-slate-800/60">
              <span>Responsive Web &amp; Mobile</span>
              <span className="text-amber-400/90 italic">Conceptual Blueprint</span>
            </div>
          </div>
        );

      case 'pipeline':
        return (
          <div className="relative w-full h-32 rounded-xl bg-[#060b18] border border-slate-800 p-3 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-[10px] font-mono text-slate-300 font-semibold">Event Automation Pipeline</span>
              </div>
              <span className="text-[9px] font-mono text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-800/40">
                Webhook Sync
              </span>
            </div>
            <div className="flex items-center justify-between gap-1 my-1 px-1">
              <div className="p-1 rounded bg-slate-900 border border-slate-800 text-[8px] font-mono text-center flex-1">
                <div className="text-amber-400 font-bold">CRM / ERP</div>
                <div className="text-slate-500">Order Placed</div>
              </div>
              <div className="text-cyan-400 font-mono text-xs font-bold animate-pulse">→</div>
              <div className="p-1 rounded bg-slate-900 border border-slate-800 text-[8px] font-mono text-center flex-1">
                <div className="text-cyan-400 font-bold">API Logic</div>
                <div className="text-slate-500">Transform</div>
              </div>
              <div className="text-cyan-400 font-mono text-xs font-bold animate-pulse">→</div>
              <div className="p-1 rounded bg-slate-900 border border-slate-800 text-[8px] font-mono text-center flex-1">
                <div className="text-emerald-400 font-bold">Accounting</div>
                <div className="text-slate-500">Ledger Entry</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono pt-1 border-t border-slate-800/60">
              <span>Automatic Retry Queue</span>
              <span className="text-amber-400/90 italic">Conceptual Blueprint</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="solutions" className="py-20 lg:py-28 border-b border-slate-800 bg-[#060b18] relative">
      {/* Anchor for backward compatibility with previous #services link */}
      <span id="services" className="absolute -top-20" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* US-02: Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Engineering Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 text-balance">
            Solutions We Can Build for Your Business.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Whether starting from scratch or upgrading existing systems, B&amp;K Tech Solutions engineers robust, tailored applications designed to streamline operations and unlock business growth.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-400">
            <Info className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Architecture previews below demonstrate conceptual technical capabilities. Every client system is custom-engineered to your exact workflow.</span>
          </div>
        </div>

        {/* US-02: Responsive 3-Column Layout with Six Visually Attractive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl border border-slate-800/90 bg-[#0a1226]/85 hover:bg-[#0f1d3d]/90 hover:border-amber-500/50 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group shadow-lg hover:shadow-2xl hover:shadow-amber-500/5 relative overflow-hidden"
            >
              {/* Subtle top accent gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/0 to-transparent group-hover:via-amber-400/80 transition-all duration-500" />

              <div>
                {/* Top card bar with icon and number */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
                  <div className="p-3 rounded-xl bg-[#060b18] border border-slate-800 group-hover:border-amber-500/40 transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-amber-400 transition-colors">
                    SOLUTION {service.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                  {service.tagline}
                </p>

                {/* Conceptual demonstration visual component (US-02) */}
                <div className="mb-5">
                  {renderConceptualVisual(service.conceptualPreviewType)}
                </div>

                {/* Key Deliverables preview */}
                <div className="space-y-2 mb-5">
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack tags */}
                <div className="pt-3 border-t border-slate-800/80 mb-5">
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] sm:text-[11px] font-mono rounded bg-[#060b18] text-slate-400 border border-slate-800 group-hover:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: US-02 "Discuss Your Project" + "Learn More" */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1 group/btn"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onSelectServiceForContact(service.title)}
                  className="px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-full transition-all inline-flex items-center gap-1.5 shadow-md active:scale-98"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
        >
          <div className="relative w-full max-w-3xl rounded-2xl border border-slate-800 bg-[#0a1226] shadow-2xl p-6 sm:p-8 my-8 text-left max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between pb-6 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
                  <span>SOLUTION {selectedService.number}</span>
                  <span aria-hidden="true">·</span>
                  <span>Estimated Timeline: {selectedService.timeline}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedService.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Body */}
            <div className="py-6 space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
                  Solution Overview
                </h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3">
                  Scope &amp; Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 p-2.5 rounded-xl bg-[#060b18] border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
                  Key Business Benefits
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside">
                  {selectedService.businessBenefits.map((benefit, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3">
                  Core Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-lg bg-[#060b18] text-amber-300 border border-amber-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#060b18] border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-slate-300">Typical Engagement:</span> {selectedService.engagementModel}
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Want to evaluate this solution for your business?
              </span>
              <button
                type="button"
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForContact(title);
                }}
                className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-full transition-all inline-flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Discuss This Solution With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
