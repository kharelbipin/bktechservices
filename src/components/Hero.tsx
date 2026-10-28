import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Terminal, Cpu, Database, Network, Cloud, CheckCircle, Sparkles, Layers } from 'lucide-react';
import { CLIENT_IMPACT_METRICS } from '../data/mockData';

interface HeroProps {
  onOpenContact: (defaultService?: string) => void;
  onExploreSolutions: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreSolutions }) => {
  const [activeNode, setActiveNode] = useState<string>('cloud');

  const nodes = {
    cloud: {
      title: 'Cloud Infrastructure & Kubernetes',
      desc: 'Automated Terraform IaC, containerized microservices, and multi-region disaster recovery.',
      badge: '99.99% Availability'
    },
    software: {
      title: 'Custom Enterprise Software',
      desc: 'High-throughput .NET Core, C#, React, and Angular web applications tailored to business logic.',
      badge: 'Bespoke Logic'
    },
    database: {
      title: 'Secure Database & Persistence Tier',
      desc: 'Clustered SQL Server, PostgreSQL, and Redis in-memory caching with strict ACID compliance.',
      badge: 'Zero Data Loss'
    },
    api: {
      title: 'API Integration & Workflow Automation',
      desc: 'Seamless data bridges between ERP, CRM, POS, and accounting platforms via secure REST APIs.',
      badge: 'Real-time Sync'
    }
  };

  return (
    <section id="home" className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-[#060b18]">
      {/* Subtle modern radial gradients (Navy, Gold, and Cyan) */}
      <div
        className="absolute top-0 left-1/4 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-br from-amber-500/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-0 w-[600px] h-[500px] bg-gradient-to-bl from-blue-600/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Subtle background circuit traces */}
      <div className="absolute inset-0 opacity-10 pointer-events-none -z-10 overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-circuit" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 0 40 L 30 40 L 40 20 L 70 20 L 80 40" fill="none" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 4" />
              <circle cx="30" cy="40" r="2.5" fill="#f59e0b" />
              <circle cx="70" cy="20" r="2.5" fill="#22d3ee" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-circuit)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: US-02 Required Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top kicker with clean logo badge */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div className="bg-white rounded-lg px-2 py-0.5 shadow-md border border-slate-700/80 inline-flex items-center justify-center">
                <img
                  src="/assets/aistudio/bk_logo_no_llc.png"
                  alt="B&K Tech Solutions"
                  className="h-6 w-auto object-contain"
                />
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>B&amp;K Tech Solutions</span>
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">· Custom Software &amp; Cloud Architecture</span>
            </div>

            {/* US-02 Required Clean Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.14] text-balance mb-6">
              Innovative Technology.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                Smarter Business.
              </span>{' '}
              Brighter Tomorrow.
            </h1>

            {/* US-02 Required Supporting Description */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              We build custom software, modern cloud solutions, and intelligent business systems that help businesses grow, innovate, and succeed.
            </p>

            {/* US-02 Required Two Prominent Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => onOpenContact()}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-4 text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 rounded-full transition-all shadow-lg shadow-amber-950/50 hover:shadow-xl hover:shadow-amber-500/30 active:scale-98"
              >
                <span>Schedule a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreSolutions}
                className="inline-flex items-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 text-sm sm:text-base font-semibold text-slate-200 bg-[#0a1226]/80 hover:bg-[#0f1d3d] border border-slate-700/80 hover:border-amber-500/40 rounded-full transition-colors backdrop-blur-sm"
              >
                <span>Explore Our Solutions</span>
              </button>
            </div>

            {/* Subtle trust markers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Tailored architectures · Zero proprietary lock-in</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>100% intellectual property &amp; source code handover</span>
              </div>
            </div>
          </div>

          {/* Right Column: US-02 Professional 3D-Inspired Cloud & Technology Illustration */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl border border-slate-800/90 bg-[#0a1226]/90 backdrop-blur-xl p-6 sm:p-7 shadow-2xl overflow-hidden group">
              {/* Subtle top header bar of visual */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">architecture-topology.sys</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-node-pulse" />
                  Active Cluster
                </span>
              </div>

              {/* 3D-Inspired Isometric Cloud & Network Diagram */}
              <div className="relative h-64 sm:h-72 w-full flex items-center justify-center my-2">
                <svg viewBox="0 0 400 300" className="w-full h-full max-w-md mx-auto">
                  <defs>
                    <linearGradient id="cloudGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e293b" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                  </defs>

                  {/* Connecting Network Grid Lines */}
                  <line x1="200" y1="70" x2="100" y2="160" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                  <line x1="200" y1="70" x2="300" y2="160" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                  <line x1="100" y1="160" x2="200" y2="240" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                  <line x1="300" y1="160" x2="200" y2="240" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                  <line x1="100" y1="160" x2="300" y2="160" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />

                  {/* Pulsing Data Packets moving along paths */}
                  <circle cx="150" cy="115" r="3.5" fill="#22d3ee">
                    <animate attributeName="cx" values="200;100;200" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="70;160;70" dur="4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="250" cy="115" r="3.5" fill="#f59e0b">
                    <animate attributeName="cx" values="200;300;200" dur="3.5s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="70;160;70" dur="3.5s" repeatCount="indefinite" />
                  </circle>

                  {/* Node 1: Cloud & Infrastructure (Top) */}
                  <g
                    className="cursor-pointer transition-transform hover:scale-105"
                    onClick={() => setActiveNode('cloud')}
                  >
                    <polygon points="200,30 250,55 200,80 150,55" fill="url(#boxGrad)" stroke={activeNode === 'cloud' ? '#f59e0b' : '#334155'} strokeWidth={activeNode === 'cloud' ? '2' : '1'} />
                    <polygon points="150,55 200,80 200,105 150,80" fill="#0f172a" stroke={activeNode === 'cloud' ? '#f59e0b' : '#334155'} strokeWidth="1" />
                    <polygon points="250,55 200,80 200,105 250,80" fill="#1e293b" stroke={activeNode === 'cloud' ? '#f59e0b' : '#334155'} strokeWidth="1" />
                    <circle cx="200" cy="55" r="14" fill="#060b18" stroke="#06b6d4" strokeWidth="1.5" />
                    <text x="200" y="59" textAnchor="middle" fill="#22d3ee" fontSize="10" fontWeight="bold">☁</text>
                    <text x="200" y="22" textAnchor="middle" fill="#f8fafc" fontSize="10" fontWeight="bold">Cloud Cluster</text>
                  </g>

                  {/* Node 2: Custom Software / App Layer (Left) */}
                  <g
                    className="cursor-pointer transition-transform hover:scale-105"
                    onClick={() => setActiveNode('software')}
                  >
                    <polygon points="100,120 150,145 100,170 50,145" fill="url(#boxGrad)" stroke={activeNode === 'software' ? '#f59e0b' : '#334155'} strokeWidth={activeNode === 'software' ? '2' : '1'} />
                    <polygon points="50,145 100,170 100,195 50,170" fill="#0f172a" stroke={activeNode === 'software' ? '#f59e0b' : '#334155'} strokeWidth="1" />
                    <polygon points="150,145 100,170 100,195 150,170" fill="#1e293b" stroke={activeNode === 'software' ? '#f59e0b' : '#334155'} strokeWidth="1" />
                    <circle cx="100" cy="145" r="14" fill="#060b18" stroke="#f59e0b" strokeWidth="1.5" />
                    <text x="100" y="149" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">&lt;/&gt;</text>
                    <text x="100" y="112" textAnchor="middle" fill="#f8fafc" fontSize="10" fontWeight="bold">Custom Apps</text>
                  </g>

                  {/* Node 3: API & Automation Mesh (Right) */}
                  <g
                    className="cursor-pointer transition-transform hover:scale-105"
                    onClick={() => setActiveNode('api')}
                  >
                    <polygon points="300,120 350,145 300,170 250,145" fill="url(#boxGrad)" stroke={activeNode === 'api' ? '#f59e0b' : '#334155'} strokeWidth={activeNode === 'api' ? '2' : '1'} />
                    <polygon points="250,145 300,170 300,195 250,170" fill="#0f172a" stroke={activeNode === 'api' ? '#f59e0b' : '#334155'} strokeWidth="1" />
                    <polygon points="350,145 300,170 300,195 350,170" fill="#1e293b" stroke={activeNode === 'api' ? '#f59e0b' : '#334155'} strokeWidth="1" />
                    <circle cx="300" cy="145" r="14" fill="#060b18" stroke="#22d3ee" strokeWidth="1.5" />
                    <text x="300" y="149" textAnchor="middle" fill="#22d3ee" fontSize="10" fontWeight="bold">⇄</text>
                    <text x="300" y="112" textAnchor="middle" fill="#f8fafc" fontSize="10" fontWeight="bold">API Mesh</text>
                  </g>

                  {/* Node 4: Database & Storage (Bottom) */}
                  <g
                    className="cursor-pointer transition-transform hover:scale-105"
                    onClick={() => setActiveNode('database')}
                  >
                    <polygon points="200,200 250,225 200,250 150,225" fill="url(#boxGrad)" stroke={activeNode === 'database' ? '#f59e0b' : '#334155'} strokeWidth={activeNode === 'database' ? '2' : '1'} />
                    <polygon points="150,225 200,250 200,275 150,250" fill="#0f172a" stroke={activeNode === 'database' ? '#f59e0b' : '#334155'} strokeWidth="1" />
                    <polygon points="250,225 200,250 200,275 250,250" fill="#1e293b" stroke={activeNode === 'database' ? '#f59e0b' : '#334155'} strokeWidth="1" />
                    <circle cx="200" cy="225" r="14" fill="#060b18" stroke="#f59e0b" strokeWidth="1.5" />
                    <text x="200" y="229" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">🛢</text>
                    <text x="200" y="290" textAnchor="middle" fill="#f8fafc" fontSize="10" fontWeight="bold">SQL &amp; Storage</text>
                  </g>
                </svg>
              </div>

              {/* Interactive Inspector for clicked 3D node */}
              <div className="p-3.5 rounded-xl bg-[#060b18] border border-slate-800 transition-all">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-white">
                    {nodes[activeNode as keyof typeof nodes].title}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {nodes[activeNode as keyof typeof nodes].badge}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-snug">
                  {nodes[activeNode as keyof typeof nodes].desc}
                </p>
                <div className="text-[10px] text-cyan-400/80 font-mono mt-2 flex items-center gap-1">
                  <span>Click any isometric node to explore architecture components</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Metrics Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {CLIENT_IMPACT_METRICS.map((kpi) => (
              <div key={kpi.label} className="p-4 rounded-xl bg-[#0a1226]/50 border border-slate-800/60">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-300">
                    {kpi.value}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                  {kpi.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                  {kpi.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
