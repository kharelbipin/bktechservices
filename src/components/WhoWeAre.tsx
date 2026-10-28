import React from 'react';
import {
  Sparkles,
  Sliders,
  Cpu,
  MessageSquare,
  Handshake,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Award
} from 'lucide-react';

interface WhoWeAreProps {
  onScheduleCall: () => void;
  onExploreServices: () => void;
}

export const WhoWeAre: React.FC<WhoWeAreProps> = ({ onScheduleCall, onExploreServices }) => {
  // US-03: Four Features
  const features = [
    {
      icon: <Sliders className="w-6 h-6 text-amber-400" />,
      title: 'Personalized Solutions',
      tagline: 'Built around your exact workflows',
      desc: 'We do not force rigid, pre-packaged software on your business. Every architecture, database model, and interface is custom-designed around your unique operational requirements.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      title: 'Modern Technologies',
      tagline: 'Reliable, proven tech ecosystems',
      desc: 'We build with modern frameworks (.NET Core, C#, React, Angular, TypeScript) and resilient cloud services (Microsoft Azure, AWS), delivering speed, maintainability, and clean code.'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-amber-400" />,
      title: 'Transparent Communication',
      tagline: 'Direct discussions without the jargon',
      desc: 'You speak directly with the engineers architecting your system. We provide clear milestone updates, scope reviews, and candid technical advice with no hidden fees.'
    },
    {
      icon: <Handshake className="w-6 h-6 text-cyan-400" />,
      title: 'Long-Term Partnership',
      tagline: 'Engineered for maintainability & growth',
      desc: 'We design software to last. Complete documentation, clean git commits, full intellectual property transfer, and post-launch technical support ensure you remain in full control.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 border-b border-slate-800 bg-[#080e1e] relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* US-03: Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Choose B&amp;K Tech Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 text-balance">
            Your Vision. Our Technology Expertise.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            As an emerging technology consultancy, B&amp;K Tech Solutions bridges the gap between high-level engineering standards and practical business needs. We are dedicated to building software that solves genuine problems.
          </p>
        </div>

        {/* US-03: Four Features Cards Grid with Interactive Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-[#0a1226]/80 hover:bg-[#0f1d3d] hover:border-amber-500/40 transition-all duration-300 p-6 flex flex-col justify-between group shadow-lg hover:shadow-xl hover:shadow-amber-500/5"
            >
              <div>
                <div className="p-3 rounded-xl bg-[#060b18] border border-slate-800 w-fit mb-4 group-hover:scale-105 group-hover:border-amber-500/30 transition-all">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                  {feat.title}
                </h3>
                <div className="text-[11px] font-mono text-amber-400/90 font-medium mb-3">
                  {feat.tagline}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Core Commitment</span>
                <span className="text-amber-400/80">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* US-06: Founder & Company Introduction Card */}
        <div className="rounded-2xl border border-slate-800 bg-[#0a1226] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/5 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Founder Bio & Company Mission */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                <Terminal className="w-3.5 h-3.5" />
                <span>About B&amp;K Tech Solutions</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Practical Innovation Grounded in Senior Engineering Experience.
              </h3>

              <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white">B&amp;K Tech Solutions</strong> was established with a singular mission:{' '}
                  <span className="text-amber-300 font-medium">Helping businesses grow through practical, innovative, and reliable technology solutions.</span>
                </p>
                <p>
                  The company is led by founder and principal software architect <strong className="text-white">Bipin Kharel</strong>. Drawing on an extensive background in enterprise software engineering—specializing in .NET / C#, modern frontend frameworks (React, Angular), SQL Server databases, and Microsoft Azure cloud architecture—B&amp;K Tech Solutions was formed to bring hands-on architectural rigor directly to startups, retailers, and growing enterprises without agency overhead.
                </p>
                <div className="p-3.5 rounded-xl bg-[#060b18] border border-slate-800/90 text-xs text-slate-400 leading-relaxed">
                  <span className="text-amber-400 font-semibold font-mono">Transparency Note:</span> While B&amp;K Tech Solutions is an agile, newly established technology venture, our technical foundation is anchored by years of verifiable enterprise engineering and software delivery experience.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Direct architectural oversight on every deliverable</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Strict code reviews and automated test suites</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>100% intellectual property ownership transferred to you</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Transparent milestone-based scoping and pricing</span>
                </div>
              </div>
            </div>

            {/* Right: Founder Profile & Direct Callout */}
            <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-[#060b18] border border-slate-800 text-center flex flex-col justify-center items-center relative">
              {/* Founder Avatar with Gold Accent */}
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-400 via-amber-500 to-cyan-400 p-1 shadow-lg">
                  <div className="w-full h-full rounded-full bg-[#0a1226] flex items-center justify-center text-white font-extrabold text-2xl tracking-wider">
                    BK
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-emerald-500 text-slate-950 border-2 border-[#0a1226]" title="Ready for New Consultations">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              <h4 className="text-lg font-bold text-white mb-0.5">Bipin Kharel</h4>
              <p className="text-xs font-mono text-amber-400 font-semibold mb-2">Founder &amp; Principal Software Architect</p>
              
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Specializing in .NET Core, React, Angular, Azure Cloud &amp; Distributed Database Architecture.
              </p>

              <button
                type="button"
                onClick={onScheduleCall}
                className="w-full py-3 px-5 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-full transition-all shadow-md active:scale-98 inline-flex items-center justify-center gap-2"
              >
                <span>Schedule a Technical Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
